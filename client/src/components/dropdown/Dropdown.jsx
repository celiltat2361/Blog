import React, { useRef, useEffect, useState } from "react";
import "./dropdown.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Link } from "react-router-dom";
import axios from "axios";

import { useLocation } from "react-router";

export default function Dropdown() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  
  

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("/users/");
      setUsers(res.data);
    };

    getUsers();
  }, []);
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      
    };
    getPost();
  }, [path]);
  return (
   <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Authors</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        > 
          <ul className="dropList">
            {users.map((u) => (
              <Link to={`/?user=${u.username}`} className="link">
              <b>{u.username}</b>
            </Link>
          
            ))}
          </ul>
         
        </nav>
      </div>
    </div>
  )
}
