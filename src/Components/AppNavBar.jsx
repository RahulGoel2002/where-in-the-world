import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const AppNavBar = (props) => {
    let anti_theme = (props.mode === "light" ? "dark" : "light")
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>

            <div className="container">
                <a className="navbar-brand" href="/">Where in the world?</a>
                
                <button onClick={
                    () => {
                        props.setMode(anti_theme)
                    }
                } className={`btn btn-outline-${anti_theme}`}>{(props.mode === "light") ? <DarkModeIcon /> : <LightModeIcon />}</button>
            </div>
        </nav>
    );
}

export default AppNavBar;
