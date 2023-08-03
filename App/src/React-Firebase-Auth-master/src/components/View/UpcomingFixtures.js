import React, { useEffect, useState } from "react";
import classes from "./Application.module.css";
import moment from "moment";
import * as BiIcons from "react-icons/bi";
import SavedPage from "./SavedPage";
import { MdOutlineStadium } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

function UpcomingFixtures(props) {
  const [savedGame, setSavedGames] = useState();
  const [upcomingFixtures, setUpcomingFixtures] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [heartSaved, setheartSaved] = useState([]);
  const [gamesArray, setGamesArray] = useState([]);
  const [show, setShow] = useState(false);
  const [storedGames, setStoredGames] = useState([]);
  const showSaved = props.showSavedGame;
  console.log(savedGame);

  const leaguesUpcoming = props.leagues;
  const showingUpcoming = props.isShowing;

  function saveGameHandler(Upcoming) {
    // const saveHeartHandler = [...heartSaved,Upcoming]
    // setheartSaved(saveHeartHandler)
    // const saveGameHandler = [...savedGame,Upcoming]
    setSavedGames(Upcoming);
    console.log(savedGame);
    console.log(heartSaved);
  }

  useEffect(() => {
    {
      showingUpcoming == "Upcoming" &&
        fetch(
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leaguesUpcoming}&season=2022`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
              "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            },
          }
        )
          .then((response) => response.json())

          .then((json) => {
            setUpcomingFixtures(json.response.slice(-13));
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
    }
  }, [leaguesUpcoming, showingUpcoming]);
  return (
    <div>
      <SavedPage games={savedGame} showSaved={showSaved} />
      {showingUpcoming == "Upcoming" && (
        <div>
          {/* {showSaved && <SavedPage games={savedGame} showSavedList={showSaved}/>} */}

          <div className={classes.upcoming_fixtures_info}>
            <h3 className={classes.upcoming_fixtures_home}>Home team</h3>
            <h3 className={classes.upcoming_fixtures_date}>Date</h3>
            <h3 className={classes.upcoming_fixtures_away}>Away team</h3>
            <h3 className={classes.upcoming_fixtures_venue}>Venue</h3>
          </div>
          {upcomingFixtures.map((Upcoming, index) => (
            <div>
              <div className={classes.league_standings_fixtures} key={index}>
                <span onClick={() => saveGameHandler(Upcoming)}>
                  {!isSaved && <BiIcons.BiHeart />}
                  {isSaved && <AiFillHeart />}
                </span>
                <img
                  src={Upcoming.teams.home.logo}
                  className={classes.league_standings_fixtures_home_image}
                />
                <h3 className={classes.Upcoming_fixtures_home}>
                  {Upcoming.teams.home.name}
                </h3>
                <div className={classes.square}>
                  <p>{moment(Upcoming.fixture.date).format("MMM DD,YYYY")}</p>
                </div>
                <img
                  src={Upcoming.teams.away.logo}
                  className={classes.fixtures_away_logo}
                />
                <h3 className={classes.fixtures_away}>
                  {Upcoming.teams.away.name}
                </h3>
                <MdOutlineStadium
                  className={classes.upcoming_fixtures_venue_icon}
                />
                <h5 className={classes.upcoming_fixtures_venue_name}>
                  {Upcoming.fixture.venue.name}, {Upcoming.fixture.venue.city}
                </h5>
              </div>
              <hr className={classes.Upcoming_fixtures_line} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
  //  if(showSaved) {

  //         <div>
  //     <div className={classes.saved_Games}>

  // {savedGame.map((Saved,index) => (
  //   <div>
  //               <div className={classes.Saved_standings_fixtures} key={index}>
  //               <span className={classes.Saved_Delete_Icon} onClick={() => deleteGameHandler(Saved)}><BsFillTrashFill/></span>
  //                   <img src={Saved.teams.home.logo} className={classes.Saved_standings_fixtures_home_image}/>
  //                          <h3 className={classes.fixtures_home}>{Saved.teams.home.name}</h3>
  //                          <div className={classes.Saved_square}><p>{moment(Saved.fixture.date).format('MMM DD,YYYY')}</p></div>
  //                          <img src={Saved.teams.away.logo} className={classes.Saved_away_logo}/>
  //                          <h3 className={classes.Saved_fixtures_away}>{Saved.teams.away.name}</h3>
  //                          <MdOutlineStadium className={classes.Saved_fixtures_venue_icon}/>
  //               <h5 className={classes.Saved_fixtures_venue_name}>{Saved.fixture.venue.name},  {Saved.fixture.venue.city}</h5>

  //              </div>
  //                    <hr className={classes.Saved_fixtures_line}/>
  //                    </div>
  //       ))}

  //     </div>
  //     </div>

  // }
}

export default UpcomingFixtures;
