import React from 'react';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <ul className="container-fluid">
                <li className="navbar-brand mb-0 h1" style={{color: 'aliceblue'}}>
                <NoteAddIcon/> Keepar App</li>
            </ul>
        </nav>
    )
}

export default Header;