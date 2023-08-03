import React, { Profiler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as PiIcons from "react-icons/pi";
import { SidebarData } from "./sidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import SearchView from "../Search/SearchView";
import HomeView from "./HomeView";
import ProfileInfo from "../ProfileInfo";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [teamLookup, setTeamLookup] = useState("");
  const [officialTeam, setOfficialTeam] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [showSavedPage, setShowSavedPage] = useState(false);
  const [league, setLeague] = useState("");
  const [value, setValue] = useState("");

  const showSidebar = () => setSidebar(!sidebar);

  function showResultsHandler(e) {
    e.preventDefault();
    setShowSearch(true);
    setShowSavedPage(false);
    setTeamLookup(value);
    console.log(teamLookup);
    setOfficialTeam(teamLookup);
    showSidebar();
    setValue("");
  }
  function homeHandler(e) {
    e.preventDefault();
    setShowSearch(false);
    setShowSavedPage(false);
    showSidebar();
  }
  function teamLookupSearch(name) {
    setValue(name.target.value);
  }
  function setLeaguePrem() {
    setLeague(39);
  }
  function setLeagueBundesliga() {
    setLeague(78);
  }
  function setLeagueLiga() {
    setLeague(140);
  }
  function setLeagueMls() {
    setLeague(253);
  }

  function savedPagehandler() {
    setShowSavedPage(!showSavedPage);
    setShowSearch(false);
  }
  const savedGameArray = [];



  return (
    <>

      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          {/* <ul className='nav-menu-items' onClick={showSidebar}> */}

          <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={showSidebar}>
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li>
              <ProfileInfo/>
            </li>

            <form onSubmit={showResultsHandler}>
              <li>
                <input
                  value={value}
                  type="text"
                  id="userInput"
                  className="Placeholder"
                  placeholder="search"
                  onChange={teamLookupSearch}
                />
                <span className="tooltip">Search</span>
              </li>
            </form>
            <li className="home" onClick={homeHandler}>
              <AiIcons.AiFillHome /> Home
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={showSidebar}>
                  {/* <AiIcons.AiFillHome /> <button onClick={homeHandler} className='home_button'>Home</button> */}
                </li>
              );
            })}

            <li className="saved_game" onClick={savedPagehandler}>
              <span className="saved-games-icon">
                {!showSavedPage && <AiIcons.AiOutlineHeart />}
                {showSavedPage && <AiIcons.AiFillHeart />}
              </span>
              <span className="Saved-span">Saved</span>

              <span class="tooltip">Saved</span>
            </li>
            <li></li>
            <div style={{ position: "absolute", top: "450px" }}>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <PiIcons.PiSoccerBallFill />
                    <strong>Leagues</strong>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div>
                      <button onClick={setLeaguePrem} className="Prem-Button">
                        Premier League
                      </button>

                      <br></br>
                      <button
                        onClick={setLeagueBundesliga}
                        className="Bundesliga-Button"
                      >
                        Bundesliga
                      </button>
                      <br></br>

                      <button onClick={setLeagueLiga} className="Liga-Button">
                        La Liga
                      </button>

                      <br></br>
                      <button onClick={setLeagueMls} className="Mls-Button">
                        MLS
                      </button>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>

      {showSearch && <SearchView teamName={teamLookup} />}
      {!showSearch && (
        <HomeView
          leagueChosen={league}
          savedGameHandler={(game) => savedGameArray.push(game)}
          showSavedGame={showSavedPage}
        />
      )}
    </>
  );
}

export default Navbar;
