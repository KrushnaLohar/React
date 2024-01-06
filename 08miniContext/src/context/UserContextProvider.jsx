// context provide in fragments like div tag or any other custom tag as well <></> tag also

import React from "react";
import UserContext from "./UserContext";

// children is generic name any it pass only parameter from context api and render in return value 
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;