import React, { useContext } from 'react'
import { Context } from '../App'
import { useHistory } from 'react-router-dom'

export default function CountryPicker() {
    const { countries, setSelectedCountry } = useContext(Context)
    const history = useHistory()
    const handleChange = (e) => {
        setSelectedCountry(e.target.value)
        history.push('/' + e.target.value)
    }

    return (
        <div>
            {countries.length ? (
                <select onChange={handleChange}>
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
