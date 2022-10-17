const WhoToFollowListItem=(who)=>
{
    return(`
            <div class="list-group-item">
                <div class="row">
                <div class="col-2">
                    <img class="float-start rounded-circle" src="${who.avatarIcon}" height="40px">
                </div>
                <div class="col-8">
                    <span class="font-weight-bold wd-font-white">${who.userName}</span>&nbsp;
                    <i class="fa fa-circle-check"></i><br>
                    <span class="wd-gray-color" >@${who.handle}</span>
                </div>
                <div class="col-2">
                <div class="text-white float-end rounded-pill btn btn-primary">Follow</button>
                </div>
                 </div>
                 </div>
                 </div>

           
            
    `);
}

export default WhoToFollowListItem;