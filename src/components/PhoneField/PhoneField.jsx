import React, { useState, useRef, useEffect, useMemo } from "react";
import { usePhoneInput, defaultCountries, parseCountry } from "react-international-phone";
import * as Flags from "country-flag-icons/react/1x1";
import { Icon } from "@iconify/react";
import styles from "./PhoneField.module.css";

const parsedCountryList = defaultCountries.map((c) => parseCountry(c));

export default function PhoneField({
    value: controlledValue,
    onChange,
    defaultCountry = "eg",
    placeholder = "Phone number",
    ...inputProps
}) {
    const [internalValue, setInternalValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const containerRef = useRef(null);
    const searchInputRef = useRef(null);

    const isControlled = controlledValue !== undefined;
    const phoneValue = isControlled ? controlledValue : internalValue;

    const {
        inputValue,
        country,
        setCountry,
        handlePhoneValueChange,
        inputRef,
    } = usePhoneInput({
        defaultCountry: defaultCountry?.toLowerCase() || "us",
        value: phoneValue,
        disableDialCodeAndPrefix: true,
        onChange: (data) => {
            if (!isControlled) {
                setInternalValue(data.phone);
            }
            if (onChange) {
                onChange(data.phone, data);
            }
        },
    });

    // Close dropdown on click outside or Escape
    useEffect(() => {
        if (!isDropdownOpen) return;

        const handleMouseDown = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("keydown", handleKeyDown);

        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isDropdownOpen]);

    const filteredCountries = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return parsedCountryList;
        return parsedCountryList.filter(
            (c) =>
                c.name.toLowerCase().includes(query) ||
                c.iso2.toLowerCase().includes(query) ||
                c.dialCode.includes(query)
        );
    }, [searchQuery]);

    const handleSelectCountry = (iso2) => {
        setCountry(iso2);
        setIsDropdownOpen(false);
        setSearchQuery("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const currentIsoUpper = country?.iso2?.toUpperCase();
    const SelectedFlag = currentIsoUpper ? Flags[currentIsoUpper] : null;

    return (
        <div className={styles.phoneFieldWrapper} ref={containerRef}>
            <button
                type="button"
                className={styles.countryButton}
                onClick={() => {
                    setIsDropdownOpen((prev) => !prev);
                    setSearchQuery("");
                }}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                aria-label="Select country"
            >
                <span className={styles.flagCircle}>
                    {SelectedFlag && <SelectedFlag />}
                </span>
                <span className={styles.countryCode}>
                    {currentIsoUpper} +{country?.dialCode}
                </span>
                <Icon icon="lucide:chevrons-up-down" className={styles.chevronsIcon} />
            </button>

            <input
                ref={inputRef}
                type="tel"
                className={styles.phoneInput}
                value={inputValue}
                onChange={handlePhoneValueChange}
                placeholder={placeholder}
                {...inputProps}
            />

            {isDropdownOpen && (
                <div className={styles.dropdownMenu} role="listbox">
                    <div className={styles.searchContainer}>
                        <Icon icon="lucide:search" className={styles.searchIcon} />
                        <input
                            ref={searchInputRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search country..."
                            className={styles.searchInput}
                        />
                    </div>

                    <ul className={styles.countryList}>
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((c) => {
                                const upper = c.iso2.toUpperCase();
                                const CountryFlag = Flags[upper];
                                const isSelected = c.iso2 === country?.iso2;
                                return (
                                    <li
                                        key={c.iso2}
                                        className={`${styles.countryItem} ${isSelected ? styles.selected : ""}`}
                                        onClick={() => handleSelectCountry(c.iso2)}
                                        role="option"
                                        aria-selected={isSelected}
                                    >
                                        <span className={styles.countryItemFlag}>
                                            {CountryFlag && <CountryFlag />}
                                        </span>
                                        <span className={styles.countryItemName}>{c.name}</span>
                                        <span className={styles.countryItemDialCode}>+{c.dialCode}</span>
                                    </li>
                                );
                            })
                        ) : (
                            <li className={styles.noResult}>No countries found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
