
import React from 'react';
import "./sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import SidebarRow from './sidebarRow.js';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow title="Home" 
            Icon = {HomeIcon}></SidebarRow>
            <SidebarRow title="Explore" Icon={ExploreOutlinedIcon} />
            <SidebarRow title="Subscriptions" Icon={SubscriptionsOutlinedIcon} />
            <SidebarRow title="Library" Icon={VideoLibraryOutlinedIcon} />
        </div>
    )
}

export default Sidebar;


