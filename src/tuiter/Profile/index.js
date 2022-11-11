
import NavigationSidebar from "../navigation-sidebar";

import WhoToFollowList from "../who-to-follow-list";
import Profile from "./profile-component";


const ProfileScreen = () => {

    return (<>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                    <NavigationSidebar active='Profile'/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <Profile/>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
    );
};
export default ProfileScreen;





