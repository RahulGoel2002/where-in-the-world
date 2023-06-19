import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CountryDescList from './CountryDescList';
import "./style.css"


const CountryPage = (props) => {
    // console.log(props)
    let anti_mode = (props.mode === "light" ? "dark" : "light")
    return (
        <div>
            <button className={`btn btn-outline-${anti_mode} my-3`} onClick={
                () => { props.setViewCountry("") }
            }><ArrowBackIosNewIcon />Back</button>
            <div className="card mb-3" data-bs-theme={props.mode}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={props.country.flags.png} className="img-fluid rounded-start c-img" alt={props.country.flags.alt} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{props.country.name.common}</h5>
                            <div className='row'>
                                <div className='col'>

                                    <CountryDescList key="0" title="Native Name" body={props.country.name.nativeName[Object.keys(props.country.name.nativeName)[0]].common} />
                                    <CountryDescList key="1" title="Population" body={props.country.population.toLocaleString()} />
                                    <CountryDescList key="2" title="Region" body={props.country.region} />
                                    <CountryDescList key="3" title="Sub Region" body={props.country.subregion} />
                                    <CountryDescList key="4" title="Capital" body={props.country.capital ? props.country.capital[0] : null} />

                                </div>
                                <div className='col'>

                                    <CountryDescList key="5" title="Top Level Domain" body={props.country.tld} />
                                    <CountryDescList key="6" title="Currencies" body={props.country.currencies[Object.keys(props.country.currencies)[0]].name} />
                                    <CountryDescList key="7" title="Languages" body={Object.keys(props.country.languages).map(key => <span className='mx-1'>{props.country.languages[key]}</span>)} />
                                </div>
                            </div>
                            <div className='my-3 d-flex flex-wrap align-items-baseline'>
                                <h6>Border Countries : </h6>
                                {props.country.borders.map(
                                    (border,val) => <button onClick={
                                        () => {
                                            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                                            .then(res => res.json())
                                            .then(data => props.setViewCountry(data[0]))
                                            .catch(err => console.log(err))
                                        }
                                    } key={val} className={`btn btn-outline-${anti_mode} text-align-center mx-1`}>{border}</button>
                                )}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryPage;
