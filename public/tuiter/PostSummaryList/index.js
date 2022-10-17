import  PostSummaryItem from "../PostSummaryList/PostSummaryItem.js"
import post from "../PostSummaryList/post.js"
const PostSummaryList = () => {
    return (`
            <div class="list-group">               
                ${
                   post.map(p=>{
                       return PostSummaryItem(p);
                   }).join('')
    }
            </div>
`); }

export default PostSummaryList;