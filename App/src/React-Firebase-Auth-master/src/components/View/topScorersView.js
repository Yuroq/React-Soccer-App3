import React, { useEffect, useState } from "react";
import classes from "./Application.module.css";
import Swipers from "./Swiper";
import "./Swipe.css";
function TopScorers(props) {
  const [topScorers, setTopScorers] = useState([]);
  const [showLeague, setShowLeagueScorers] = useState("");
  const [hideLeagueScorers, setHideLeagueScorers] = useState(false);
  const showScorers = props.league;
  const hideScorers = props.hideTopScorers;

  useEffect(() => {
    setShowLeagueScorers(showScorers);
    console.log(showScorers);
    setHideLeagueScorers(hideScorers);
    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${showScorers}&season=2022`,
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
        setTopScorers(json.response);
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  }, [showScorers]);
  if (!hideScorers) {
    return (
      <div>
        <div className={classes.player_standings_info}>
          <h3 className={classes.player_standings_info_rank}>Rank</h3>
          <h3 className={classes.player_standings_info_player}>Player</h3>
          <h3 className={classes.player_standings_info_team}>Team</h3>
          <h3 className={classes.player_standings_info_nationality}>
            Nationality
          </h3>
          <h3 className={classes.player_standings_info_position}>Position</h3>
          <h3 className={classes.player_standings_info_stat}>Stat</h3>
        </div>
        <hr className={classes.Player_standings_line} />
        <ol className={classes.top_scorers_standings}>
          {topScorers.slice(0, 10).map((player) => (
            <div>
              <li className={classes.scorersList}>
                <div className={classes.goal_standings}>
                  <h2>{player.player.name}</h2>
                  <img
                    src={player.statistics[0].team.logo}
                    className={classes.Goal_standings_team_logo}
                  />
                  <p className={classes.goal_standings_team}>
                    {player.statistics[0].team.name}
                  </p>
                  {/* <img src={player.statistics[0].league.flag} className={classes.Goal_standings_country_logo}/> */}
                  <p className={classes.goal_standings_country}>
                    {player.player.nationality}
                  </p>
                  <p className={classes.goal_standings_position}>
                    {player.statistics[0].games.position}
                  </p>
                  <p className={classes.goal_standings_goals}>
                    {player.statistics[0].goals.total}
                  </p>
                </div>
              </li>

              <hr className={classes.goal_standings_line} />
            </div>
          ))}
        </ol>

        {/* <Swipers swiperInfo={topScorers}/> */}
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        <div className={classes.notebook}>
          <div className={classes.Results}></div>
        </div>
      </div>
    );
  }
}
export default TopScorers;
