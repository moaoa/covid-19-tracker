import React, { useEffect, useState } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import CountryPicker from './components/CountryPicker.js'
import Country from './components/Country'
import HomePage from './components/HomePage'
import covid19Api from './apis/covid-19-api'
import PrivateRoute from './components/PrivateRoute'
import covid19Image from './imgs/covid-19-image.png'
import styles from './App.module.css'
import sortCountries from './helpers/sort'
export const Context = React.createContext()

function App() {
    let [countries, setCountries] = useState([])
    const [globalData, setGlobalData] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
    useEffect(() => {
        covid19Api.get('/countries').then((res) => {
            if (res.status === 200) setCountries(sortCountries(res.data))
        })

        const intervalId = setInterval(() => {
            covid19Api.get('/summary').then((res) => {
                if (res.status === 200) {
                    setGlobalData(res.data)
                    clearInterval(intervalId)
                }
                console.log(res.statusText)
            })
        }, 1000)
    }, [])
    return (
        <Context.Provider
            value={{
                countries,
                globalData,
                selectedCountry,
                setSelectedCountry,
            }}
        >
            <Router>
                <div className="App">
                    <div className={styles.head}>
                        <img src={covid19Image} alt="covid-19" />
                        <h1>Covid-19 Tracker</h1>
                    </div>
                    <CountryPicker />
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <PrivateRoute
                            countries={countries}
                            component={Country}
                            path="/:country"
                        />
                    </Switch>
                </div>
            </Router>
        </Context.Provider>
    )
}

export default App
