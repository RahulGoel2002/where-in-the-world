import React, { useState } from 'react';
import "./style.css"
import SearchIcon from '@mui/icons-material/Search';



const ChoiceBar = (props) => {

    const [toggleState, setToggleState] = useState("None")
    const [searchInput, setSearchInput] = useState("")

    const handleToggleClick = (event) => {
        event.preventDefault()
        setToggleState(event.target.name)
        setSearchInput("")
        if (event.target.name !== "None")
            props.setChoiceFilter(`region/${event.target.name}`)
        else
            props.setChoiceFilter("all")
    }

    return (
        <div className='choicebar'>
            <div className="input-group mb-3" data-bs-theme={props.mode}>
                <span className={`input-group-text cb-${props.mode}`} id="basic-addon1"><SearchIcon /></span>
                <input value={searchInput} onChange={e => {
                    setSearchInput(e.target.value)
                    setToggleState("None")
                    if (e.target.value !=="")
                        props.setChoiceFilter(`name/${e.target.value}`)
                    else
                        props.setChoiceFilter("all")
                }} type="text" className="form-control" placeholder="Search for a Country... (Eg. India)" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="dropdown" data-bs-theme="light">
                <button className={`btn btn-${props.mode} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {(toggleState === "None") ? "Filter by Region" : toggleState}
                </button>
                <ul className={`dropdown-menu dropdown-menu-${props.mode}`}>
                    <li><a className="dropdown-item" onClick={handleToggleClick} name="America" href="/">America</a></li>
                    <li><a className="dropdown-item" onClick={handleToggleClick} name="Asia" href="/">Asia</a></li>
                    <li><a className="dropdown-item" onClick={handleToggleClick} name="Europe" href="/">Europe</a></li>
                    <li><a className="dropdown-item" onClick={handleToggleClick} name="Africa" href="/">Africa</a></li>
                    <li><a className="dropdown-item" onClick={handleToggleClick} name="Oceania" href="/">Oceania</a></li>
                    <li><a className="dropdown-item" onClick={handleToggleClick} name="None" href="/">None</a></li>
                </ul>
            </div>
        </div>
    );
}

export default ChoiceBar;
