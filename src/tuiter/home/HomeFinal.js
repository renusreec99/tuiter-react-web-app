
import React from "react";
import PostListnew from "./HomeComponent"
import postsArray from "./posts.json"

const HomeNew = () => {
    return (
        <>
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