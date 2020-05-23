import React, { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards.js'
import CountryPicker from './components/CountryPicker.js'
import Chart from './components/Chart.js'
import covid19Api from './apis/covid-19-api'

function App() {
    let [countries, setCountries] = useState([])
    const [globalData, setGlobalData] = useState('')
    useEffect(() => {
        covid19Api.get('/countries').then((res) => {
            console.log(res)
            setCountries(res.data)
        })
        covid19Api.get('/world/total').then((res) => {
            console.log(res)
            if (res.status === 200) {
                setGlobalData(res.data)
            }
        })
    })
    return (
        <div className="App">
            <Cards
                deaths={globalData?.TotalDeaths}
                confirmed={globalData?.TotalConfirmed}
                recovered={globalData?.TotalRecovered}
            />
            <CountryPicker countries={countries} />
            <Chart />
        </div>
    )
}

export default App
