const PostList = (posts) =>{

    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src="${posts.image}" class="rounded-circle"  height="40px" width="40px">
                </div>
                <div class="col-10 p-0">
                    <span class="text-white">${posts.username}</span>
                    <i class="fa fa-check-circle"></i>
                    <span class="text-secondary">${posts.handle}.${posts.time}</span><br/>
                    <span class="text-white">${posts.content}</span>
                </div>
            </div>
            <div class="row rounded border border-secondary">
                <div class=" border-bottom  border-secondary ${posts.comment}?'rounded':''}">
                    <img  class="rounded  w-100" style="border-radius20px"src="${posts.cover}">
                    ${posts.comment?`
                    <div class="card-body border-top w-100  border-secondary  ${posts.comment?'':''}" >
                        <h6 class="card-title text-white ">${posts.comment}</h6>
                        <span class="card-text text-secondary">${posts.theory}</span>
                    </div>`:''}
                </div>
            </div>
            <div class="row">
            <div class="col-3">
                <i class='fa fa-comment text-secondary'>&nbsp;${posts.comments}</i>
            </div>
            <div class="col-3">
                <i class='fa fa-share-alt text-secondary'>&nbsp;${posts.shares}</i>
            </div>
            <div class="col-3">
                <i class='fa fa-heart text-secondary'>&nbsp;${posts.hearts}</i>
            </div>
            <div class="col-3">
                <i class='fa fa-download text-secondary'></i>
            </div>
            </div>
        </div>
    `);
}

export default PostList;