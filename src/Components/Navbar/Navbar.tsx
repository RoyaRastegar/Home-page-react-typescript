import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handelDropDown() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href="#">Software Recruitment co.</a>
        </div>
        <ul className="links">
          <li>
            <a href="jobseekers">For jobseekers</a>
          </li>
          <li>
            <a href="client">For clients</a>
          </li>
          <li>
            <a href="sector">Sectors</a>
          </li>
          <li>
            <a href="resources">Resources</a>
          </li>
        </ul>
        <div className="btn">
          <a href="#" className="action_btn_cv">
            Uploud cv
          </a>
          <a href="#" className="action_btn_contact">
            Contact us
          </a>
        </div>
        <button onClick={handelDropDown} className="toggle_btn">
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="dropdown_menu open">
          <li>
            <a href="jobseekers">For jobseekers</a>
          </li>
          <li>
            <a href="client">For clients</a>
          </li>
          <li>
            <a href="sector">Sectors</a>
          </li>
          <li>
            <a href="resources">Resources</a>
          </li>
          <a href="#" className="action_btn_cv">
            Uploud cv
          </a>
          <a href="#" className="action_btn_contact">
            Contact us
          </a>
        </div>
      )}
    </>
  );
};
export default Navbar;
