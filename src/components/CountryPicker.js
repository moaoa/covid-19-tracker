import React from 'react'

export default function CountryPicker({ countries }) {
    return (
        <div>
            {countries.length ? (
                <select>
                    {countries.map((countryData) => (
                        <option
                            key={countryData.Slug}
                            value={countryData.Country}
                        >
                            {countryData.Country}
                        </option>
                    ))}
                </select>
            ) : (
                'loading'
            )}
        </div>
    )
}
