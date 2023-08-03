import React, { useRef, useState, useEffect } from "react";
import classes from "./Application.module.css";
import UpcomingFixtures from "./UpcomingFixtures";
import RecentFixtures from "./RecentFixturesView";
import Standings from "./Standings";
import TopScorers from "./topScorersView";

import "./LeaguesNavBar";


function HomeView(props, { leagueChosen, showSavedGame }) {
  const [searchInput, setSearchInput] = useState("");
  const [league, setLeague] = useState("");

  const [ShowStandings, setStandings] = useState(false);
  const [ShowUpcoming, setUpcoming] = useState(false);
  const [ShowRecent, setRecent] = useState(false);
  const [currentlyShowing, setCurrentlyShowing] = useState("");
  const [showSavedPage, setSavedGames] = useState();
  useEffect(() => {
    const leagues = props.leagueChosen;
    setLeague(leagues);
    console.log(league);
    const showSaving = props.showSavedGame;
    setSavedGames(showSaving);
    console.log(showSavedPage);
  });

  function showStandings() {
    setStandings(true);
    setCurrentlyShowing("Standings");
    const whichLeague = props.leagueChosen;
    setLeague(whichLeague);
  }
  function showUpcomingHandler() {
    setUpcoming(true);
    setCurrentlyShowing("Upcoming");
    const whichLeague = props.leagueChosen;
    setLeague(whichLeague);
  }
  function showRecentHandler() {
    setRecent(true);
    setCurrentlyShowing("Recent");
    const whichLeague = props.leagueChosen;
    setLeague(whichLeague);
  }

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.notebook}>
          <div className={classes.Results}>
            {league && (
              <TopScorers league={league} hideTopScorers={showSavedPage} />
            )}
          </div>
        </div>
      </div>
      <div className={classes.nav}>
        <span>
          <button className={classes.standings_Button} onClick={showStandings}>
            Standings
          </button>
        </span>
        <span>
          <button
            onClick={showUpcomingHandler}
            className={classes.Upcoming_Button}
          >
            Upcoming fixtures
          </button>
        </span>
        <span>
          <button onClick={showRecentHandler} className={classes.Recent_Button}>
            Recent fixtures
          </button>
        </span>
      </div>
      <div className={classes.fixtures}>
        <div className={classes.fixturesinfo}>
          <ol className={classes.league_standings}>
            {/* <Context.Provider value={league}>
              <span>
                <button onClick={setLeaguePrem}>Prem</button>
              </span>
              <span>
                <button onClick={setLeagueBundesliga}>Bundesliga</button>
              </span>
              <span>
                <button onClick={setLeagueLiga}>La Liga</button>
              </span>
              <span>
                <button onClick={setLeagueMls}>MLS</button>
              </span>

            </Context.Provider> */}

            {currentlyShowing == "Standings" && (
              <Standings leagues={league} isShowing={currentlyShowing} />
            )}
            {currentlyShowing == "Recent" && (
              <RecentFixtures leagues={league} isShowing={currentlyShowing} />
            )}
            <UpcomingFixtures
              leagues={league}
              isShowing={currentlyShowing}
              showSavedGame={showSavedPage}
            />
            {/* {currentlyShowing == 'Upcoming' && <UpcomingFixtures leagueChosen={leagueChosen} isShowing={currentlyShowing} />} */}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
