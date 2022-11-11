import React from "react";
import { Link } from "react-router-dom";
const NavigationSidebar = (
    {
      active = 'explore'
    }
   ) => {
    return (
      <div className="list-group">
        <a className="list-group-item" href="i">Tuiter</a>
        <a href="/tuiter/home" className={`list-group-item
                       ${active === 'home'?'active':''}`}>
          <Link to="/tuiter" style={{"textDecoration":"none", "color":"black"}}>Home</Link>
          </a>
        <a href="/tuiter/explore" className={`list-group-item
                       ${active === 'explore'?'active':''}`}>
        <Link to="/tuiter/explore" style={{"textDecoration":"none", "color":"black"}}>Explore</Link>
         
        </a>
        <a href="/tuiter" className={`list-group-item
                       ${active === 'notifications'?'active':''}`}>
          Notifications
        </a>
        <a href="/tuiter" className={`list-group-item
                       ${active === 'messages'?'active':''}`}>
          Messages
        </a>
        <a href="/tuiter" className={`list-group-item
                       ${active === 'bookmarks'?'active':''}`}>
          Bookmarks
        </a>
        <a href="/tuiter" className={`list-group-item
                       ${active === 'lists'?'active':''}`}>
          Lists
        </a>
        <a href="/tuiter/Profile" className={`list-group-item
                       ${active === 'Profile'?'active':''}`}>
                <Link to="/tuiter/Profile" style={{"textDecoration":"none", "color":"black"}}>Profile</Link>

        </a>
        <a href="/tuiter" className={`list-group-item
                       ${active === 'more'?'active':''}`}>
          More
        </a>
      </div>
    );
   };
   
export default NavigationSidebar;

