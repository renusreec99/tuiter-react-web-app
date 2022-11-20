import React from "react";
import {useDispatch} from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import TuitStats from "../TuitStat";
// import { deleteTuit } from "../tuits/home-reducer";
const PostListnew = ({posts}) =>{
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    
    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={posts.image} className="rounded-circle"  height="40px" width="40px" alt= "nt"/>
                </div>
                {console.log(posts)}
                <div className="col-10 p-0">
                    <span className="text-black">{posts.username}</span>
                    <i className="fa fa-check-circle"></i>
                    <span className="text-secondary">{posts.handle}.{posts.time}</span><br/>
                    <span className="text-black">{posts.content}</span>
                </div>
            </div>
            <div className="row rounded  border-secondary">
                <div className={` border-secondary ${posts.comment} ? 'rounded' : '' `}>
                    <img  className="rounded  w-100" style={{borderRadius: '20px'}}src={posts.cover} alt= "nt"/>
                    {posts.comment?
                    <div className={` border-top w-100  border-secondary ${posts.comment?'':''}`} >
                        <h6 className="text-black ">{posts.comment}</h6>
                        <span className=" text-secondary">{posts.theory}</span>
                    </div>:''}
                </div>
            </div>
            <div>
         <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(posts._id)}></i>
  </div>

            <div className="row">
            <div>
        <TuitStats tuit = {posts}/>
        </div>
            </div>
        </div>
    );
}

export default PostListnew;