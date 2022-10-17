import PostItem from "../PostList/PostItem.js"
import posts from "../PostList/posts.js"
const PostList = () => {
    const res=`
    <div class="list-group">
        ${posts.map(p=>{
             return PostItem(p);
    }).join('')
    }
    </div>
    `
    return res;
}

export default PostList;