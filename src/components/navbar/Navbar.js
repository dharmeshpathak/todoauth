import React from "react";
import {  NavLink } from "react-router-dom";
import NavItems from "./NavItems";
// import { useSelector } from "react-redux";

export default function Navbar() {
  //  const uid = useSelector(state => console.log(state))
  return (
    <>
      <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        <NavLink
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          className=" nav-link"
        >
          <h3>TodoApp</h3>
        </NavLink>
        <NavItems />
      </nav>
    </>
  );
}
