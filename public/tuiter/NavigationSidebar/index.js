const NavigationSidebar = (active) => {
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <a href="../HomeScreen/HomeScreen.html"  class="list-group-item ${active==='home'?'active':''} list-group-item-action">
          <div class="row">
              <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                  <i class="fa fa-home"></i>
              </div>
              <div class="d-none  d-xl-block d-xxl-block col-xxl-10 col-xl-10">
                  <span>Home</span>
              </div>
          </div>
      </a>
      <a href="../explore/index.html" class="list-group-item ${active==='explore'?'active':''} list-group-item-action">
          <div class="row">
              <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                  <i class="fa fa-hashtag"></i>
              </div>
              <div class="d-none  d-xl-block d-xxl-block col-xxl-10 col-xl-10">
                  <span>Explore</span>
              </div>
          </div>
      </a>
      <a href="../notifications.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                  <i class="fa fa-bell"></i>
              </div>
              <div class="d-none d-md-none d-sm-none  d-xl-block d-xxl-block col-xxl-10 col-xl-10">
                  <span>Notifications</span>
              </div>
          </div>
      </a>

      <a href="../messages.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                  <i class="fa fa-envelope"></i>
              </div>
              <div class="d-none d-md-none d-sm-none  d-xl-block d-xxl-block col-xxl-10 col-xl-10">
                  <span>Messages</span>
              </div>
          </div>
      </a>
      <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                  <i class="fa fa-bookmark"></i>
              </div>
              <div class="d-none d-md-none d-sm-none   d-xl-block d-xxl-block col-xxl-10 col-xl-10">
                  <span>Bookmarks</span>
              </div>
          </div>
      </a>
      <a href="../lists.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                  <i class="fa fa-list"></i>
              </div>
              <div class="d-none d-md-none d-sm-none  d-xl-block d-xxl-block col-xxl-10 col-xl-10">
                  <span>Lists</span>
              </div>
          </div>
      </a>
      <a href="../profile.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                  <i class="fa fa-user"></i>
              </div>
              <div class="d-none d-md-none d-sm-none   d-xl-block d-xxl-block col-xxl-10 col-xl-10">
                  <span>Profile</span>
              </div>
          </div>
      </a>
      <a href="../more.html" class="list-group-item list-group-item-action">
          <div class="row">
              <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                  <i class="fa fa-circle"></i>
              </div>
              <div class="d-none d-md-none d-sm-none  d-xl-block d-xxl-block col-xxl-10 col-xl-10">
                  <span>More</span>
              </div>
          </div>
      </a>
      </div>
      <button type="button" class="w-100 rounded-pill btn btn-primary">Tuit</button>
    `);
   }
   export default NavigationSidebar;
   
   