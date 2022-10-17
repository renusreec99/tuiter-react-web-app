import PostSummaryList from "../PostSummaryList/index.js"
const ExploreComponent = () => {
    return(`

            <div class="row">
                <div class="col-10">
                    <div class="input-group">
                        <!-- <div class="input-group-text" style="background-color: white"><span
                                style="border-right: 1px solid white"><i class="fa fa-magnifying-glass"></i></span>
                        </div> -->
                        <input type="text" class="form-control position-relative rounded-pill wd-rounded-buttons ps-4"
                            placeholder="Search Tuiter">
                        <div style="position:absolute; color:gray; top:10%">O-</div>
                        

                    </div>
                    <!-- <input class="form-control pd-1 rounded-pill" placeholder="Search Tuiter" /> -->
                </div>

                <div class="col-2"><i class="fa fa-cog position-relative top-5 "></i>
                </div>
            </div>
            <br />
            <div col="12">
                <ul class="nav nav-tabs w-100">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div class="position-relative">
                <img src="images/stars.jpeg" width="100%"/>
                <h1 class="position-absolute bottom-0 left-15 text-white">SpaceX's Starship</h1>
              </div>


    ${PostSummaryList()}
    
    `);
}
export default ExploreComponent;