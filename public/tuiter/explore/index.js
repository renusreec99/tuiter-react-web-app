import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../explore/ExploreComponent.js";

function exploreComponent() {
  $("#wd-explore").append(`

        <div class="row mt-2">
   <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 mt-5">
   ${NavigationSidebar('explore')}

   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-10 col-10 mt-5">
    ${ExploreComponent()}
   </div>
   <div class="col-xxl-3 col-xl-4 col-lg-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block mt-5 ">

${WhoToFollowList()}
   </div>
  </div>

    `);
}

$(exploreComponent);
