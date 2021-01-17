import React from "react";
import { NavLink } from "react-router-dom";
import {signOut} from "../../actions/authActions"
import {useDispatch, useSelector } from "react-redux"

export default function NavItems() {
     const uid = useSelector(state => state.firebase.auth.uid)
     const dispatch = useDispatch();
     if(uid){
         return(<div style={{ display: "flex", justifyContent: "space-between" }}>
         <NavLink 
             className="nav-link"
             to="/signin"
             activeStyle={{
                 
                 color: "red",
             }}
             style={{fontFamily:"sans-serif"}} onClick ={()=>dispatch(signOut())}
         >
             Sign Out
   </NavLink> </div>
   )
     }
     else{

    return (<div style={{ display: "flex", justifyContent: "space-between" }}>
        
            <NavLink
                className="nav-link"
                to="/signup"
                activeStyle={{
                   
                    color: "red",
                }}
                style={{fontFamily:"sans-serif"}}
            >
                SignUp
      </NavLink>
            <NavLink
                className="nav-link"
                to="/signin"
                activeStyle={{
                   
                    color: "red",
                }}
                style={{fontFamily:"sans-serif"}}
            >
                SignIn
      </NavLink>
        </div>
    );}
}
