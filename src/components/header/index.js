import React from 'react';
import './index.css';
import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Send';
import logo from '../../assets/images/rubiks.png';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory  } from 'react-router-dom';


const Header = ({backButton}) => {
const history = useHistory();

    return (
        <div className="header-container">
        {backButton ? (
            <IconButton onClick={() => history.replace(backButton)} className="header-icon">
                  <ArrowBackIosIcon id="header-icon"/>
            </IconButton>
        ) : (
            <Link  to="/profile">
            <IconButton>
            <PersonIcon id="header-icon"/>
            </IconButton>
            </Link>

        )}
            <Link to="/">
            <img className="rubiks-logo" src={logo} alt="rubiks cube"/>
            </Link>
            <Link to="/chat">
            <IconButton >
            <SendIcon id="header-icon"/>
            </IconButton>        
            </Link>
        </div>
    );
};

export default Header;