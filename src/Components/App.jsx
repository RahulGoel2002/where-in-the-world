import React, { useEffect, useState } from 'react';
import AppNavBar from './AppNavBar';
import ChoiceBar from './ChoiceBar/ChoiceBar';
import Card from './Card/Card';
import CountryPage from './CountryPage/CountryPage';

const App = () => {

    const [mode, setMode] = useState("light")
    const [countries, setCountries] = useState([])
    const [choiceFilter, setChoiceFilter] = useState("all")
    const [loading, setLoading] = useState(false)
    const [viewCountry, setViewCountry] = useState("")

    useEffect(
        () => {
            setCountries([])
            setLoading(true)
            fetch("https://restcountries.com/v3.1/"+choiceFilter)
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    // setCountries(
                    setCountries(data)
                })
                .catch(err => console.log(err))
            setLoading(false)
        }, [choiceFilter]
    )



    return (
        <div style={{ backgroundColor: (mode === "light" ? "#fff" : "#212529"), minHeight: "100vh" }}>
            <AppNavBar mode={mode} setMode={setMode} />

            <div className='container'>
                
                {(viewCountry === "") ? <>
                    <ChoiceBar mode={mode} setChoiceFilter={setChoiceFilter} />
                <div className={`row text-${mode === "light" ? "dark" : "light"}`}>
                    { loading ? 
                        null
                     :
                        countries.map(
                            (country, index) => {
                                return <Card key={index} mode={mode} country={country} setViewCountry={setViewCountry} />
                            }
                        )
                    }
                </div> </>: <CountryPage mode={mode} country={viewCountry} setViewCountry={setViewCountry} />}
                
            </div>
                
        </div>
    );
}

export default App;
