
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostListnew from "../TuitItem";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

// import postsArray from "../tuits/tuits.json"

const HomeNew = () => {
    const {posts, loading} = useSelector(state => state.postsData)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(findTuitsThunk())
    }, [])
   
    return (
        <div className="list-group">
        {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }

            {

                posts.map(p => {
                    return (<PostListnew key={p._id} posts={p}/>);
                })
            }
        </div>
    
    );
}

export default HomeNew;