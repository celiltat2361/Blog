import React, { useRef, useEffect, useState } from "react";
import "./dropdown.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dropdown() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("/users");
      setUsers(res.data);
    };
    getUsers();
  }, []);
  

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
          <ul className="sidebarList">
            {users.map((user) => (
              <Link to={`/?user=${user.name}`} className="link">
                <li className="sidebarListItem">{user.name}</li>
              </Link>
          
            ))}
          </ul>
         
        </nav>
      </div>
    </div>
  )
}
