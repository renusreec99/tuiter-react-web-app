import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";
function exploreComponent() {
    $("#wd-explore").append(`
    
          <div class="row mt-2">
     <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 mt-5">
     ${NavigationSidebar('home')}
  
     </div>
     <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-10 col-sm-10 col-10 mt-5">
     ${PostList()}
     </div>
     <div class="col-xxl-4 col-xl-4 col-lg-5 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block mt-5 ">
  
     ${PostSummaryList()}
     </div>
    </div>
  
      `);
  }
  
  $(exploreComponent);