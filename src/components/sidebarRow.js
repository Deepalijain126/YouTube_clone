import React from 'react';
import "./sidebarRow.css";

function SidebarRow({Icon,title}) {
    return (
        <div className='sidebarRow'>
        <div> <Icon className= 'sidebar_icon'></Icon></div>
        <h2 className='sidebar_title'>{title}</h2>    
        </div>
    );
}

export default SidebarRow;
