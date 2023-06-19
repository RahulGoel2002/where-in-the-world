import React from 'react';

const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-4 my-3" data-bs-theme={props.mode} onClick={
            () => {props.setViewCountry(props.country)}
        }>
            <div className="card">
                <img className='card-img-top' src={props.country.flags.png} alt={props.country.flags.alt}></img>

                <div className="card-body">
                    <h5 className="card-title text-center">{props.country.name.common}</h5>
                    {/* <p className="card-text">Population : {props.country.population}</p>
                    <p className="card-text">Region : {props.country.region}</p>
                    <p className="card-text">Capital : {props.country.capital}</p> */}
                    <ul className="list-group list-group-flush">
                        <li className="card-text list-group-item">Population: {props.country.population}</li>
                        <li className="card-text list-group-item">Region: {props.country.region}</li>
                        <li className="card-text list-group-item">Capital: {props.country.capital ? props.country.capital[0] : null}</li>
                    </ul>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>

    );
}

export default Card;
