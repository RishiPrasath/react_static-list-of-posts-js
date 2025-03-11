import React from "react";
import { useEffect } from "react";
export const UserInfo = ({user}) => {

    

    return (
        <p>
            {' Posted by  '}
            <a className="UserInfo" href={`mailto:${user.email}`}>
                {user.name}
            </a>
        </p>
    );


};
