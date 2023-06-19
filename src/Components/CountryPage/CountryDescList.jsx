import React from 'react';

const CountryDescList = (props) => {
    return (
        <ul className="list-group list-group-horizontal">
            <li className="list-group-item">{props.title}</li>
            <li className="list-group-item">{props.body}</li>
        </ul>
    );
}

export default CountryDescList;
