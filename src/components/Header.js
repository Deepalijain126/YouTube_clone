import React ,{useState}from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import Avatar from '@mui/material/Avatar';

function Header() {
    const [inputSearch,setInputSearch]= useState("");
    return (
    <div className='header'>
        <div className='header_left'>
            <MenuIcon className='menu-left'></MenuIcon> 
                <img className="header-logo" src=".\YouTube_clone\logo.svg"></img>
        </div>
        <div className='header_center'>
          <input placeholder="search"type="text"></input>
           <SearchIcon className="search_icon"></SearchIcon>
        </div>
        <div className='header_right'>
           <VideoCallOutlinedIcon className="header-icon"></VideoCallOutlinedIcon>
           <NotificationsOutlinedIcon  className="header-icon"></NotificationsOutlinedIcon>
            <Avatar alt="Deepali" src="\pic2.jpg"></Avatar>
        </div>
    </div>
    )
}

export default Header
