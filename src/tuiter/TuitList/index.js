
import React from "react";
import PostListnew from "../TuitItem"
import {useSelector} from "react-redux";
// import postsArray from "../tuits/tuits.json"

const HomeNew = () => {
    const postsArray = useSelector(state => state.tuits)

    return (
        <>
        <h2>Home</h2> 
        <div className="list-group">
            {
                postsArray.map(p => {
                    return (<PostListnew posts={p}/>);
                })
            }
        </div>
        </>
    );
}

export default HomeNew;