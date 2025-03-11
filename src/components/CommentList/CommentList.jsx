import React from "react";
import { CommentInfo } from "../CommentInfo/CommentInfo";
export const CommentList = ({comments}) => {
    return(
    <div className="CommentList">    
        {comments.map((comment,key)=><CommentInfo key={key} comment={comment} />)}
    </div>
    )
};
