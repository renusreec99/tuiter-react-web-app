const PostSummaryItem = (post) => {
    return(`

  
    <li class="list-group-item">
        <div class="row">
            <div class="col-9">
            ${post.topic ? `<span class="text-secondary">${post.topic}</span><br>` : ""}
                <span class=" text-dark wd-bold">${post.userName}</span>
                <i class="fa fa-check-circle"></i>
                <span class="text-secondary">&nbsp;${post.time}</span><br>
                <span class="text-dark wd-bold">${post.title}</span>
            </div>
            <div class="col-3">
                <img src="${post.image}" class="float-end " style="border-radius:20%" height="100px" />
            </div>
        </div>
    </li>



    `);
}

export default PostSummaryItem;