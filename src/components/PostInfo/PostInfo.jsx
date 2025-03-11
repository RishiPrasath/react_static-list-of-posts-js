import React from "react";
import { useEffect } from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import { CommentList } from "../CommentList/CommentList";
export const PostInfo = ({post}) => {
    // useEffect(()=>{
    //     console.log('post:',post)
        
    //   },[])
    return(
        
        <div className="PostInfo">
            <div className="PostInfo__header">
            <h3 className="PostInfo__title">{post.title}</h3>

            {/* <p>
                {' Posted by  '}

                <a className="UserInfo" href="mailto:Sincere@april.biz">
                Leanne Graham
                </a>
            </p> */}
            <UserInfo user={post.user} />

            </div>

            <p className="PostInfo__body">
            {post.body}
            </p>

            <hr />

            {post.comments.length > 0 ?(
                <CommentList comments={post.comments}/>
            ):(
                <b data-cy="NoCommentsMessage">No comments yet</b>
            )}

            
        </div>
    )


};
