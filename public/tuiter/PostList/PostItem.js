const PostList = (posts) =>{

    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <img src="${posts.image}" class="rounded-circle" width="50px" height="50px">
                </div>
                <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 p-0">
                    <span class="text-white">${posts.username}</span>
                    <i class="fa fa-check-circle"></i>
                    <span class="text-secondary">${posts.handle}&nbsp;.&nbsp;${posts.time}</span><br/>
                    <span class="text-white">${posts.content}</span>
                </div>
            </div>
            <div class="row rounded border border-secondary mt-3">
                <div class=" border-bottom  border-secondary ${posts.comment}?'rounded':''}">
                    <img  class="rounded m-0 p-1 w-100" src="${posts.cover}">
                    ${posts.comment?`
                    <div class="card-body border-top w-100  border-secondary  ${posts.comment?'':''}" >
                        <h6 class="card-title text-white ">${posts.comment}</h6>
                        <p class="card-text text-secndary">${posts.theory}</p>
                    </div>`:''}
                </div>
            </div>
            <div class="row mt-2">
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i class='fa fa-comment text-secondary'>&nbsp;${posts.comments}</i>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i class='fa fa-share-alt text-secondary'>&nbsp;${posts.shares}</i>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i class='fa fa-heart text-secondary'>&nbsp;${posts.hearts}</i>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i class='fa fa-download text-secondary'></i>
            </div>
            </div>
        </div>
    `);
}

export default PostList;