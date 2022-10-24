import React from "react";
import { Link } from "react-router-dom";
const NavigationSidebar = (
    {
      active = 'explore'
    }
   ) => {
    return (
      <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <a className={`list-group-item
                       ${active === 'home'?'active':''}`}>
          <Link to="/tuiter/home" style={{"textDecoration":"none", "color":"black"}}>Home</Link>
          </a>
        <a className={`list-group-item
                       ${active === 'explore'?'active':''}`}>
        <Link to="/tuiter/explore" style={{"textDecoration":"none", "color":"black"}}>Explore</Link>
         
        </a>
        <a className={`list-group-item
                       ${active === 'notifications'?'active':''}`}>
          Notifications
        </a>
        <a className={`list-group-item
                       ${active === 'messages'?'active':''}`}>
          Messages
        </a>
        <a className={`list-group-item
                       ${active === 'bookmarks'?'active':''}`}>
          Bookmarks
        </a>
        <a className={`list-group-item
                       ${active === 'lists'?'active':''}`}>
          Lists
        </a>
        <a className={`list-group-item
                       ${active === 'profile'?'active':''}`}>
          Profile
        </a>
        <a className={`list-group-item
                       ${active === 'more'?'active':''}`}>
          More
        </a>
      </div>
    );
   };
   
export default NavigationSidebar;

