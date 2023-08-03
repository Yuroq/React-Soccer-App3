import React, { useState, useEffect } from "react";
import classes from "./Application.module.css";


function Standings(props) {
  const [Standings, setStandings] = useState([]);

  const leaguesStandings = props.leagues;
  const standingsShowing = props.isShowing;

  console.log(leaguesStandings);
  useEffect(() => {
    if (standingsShowing == "Standings") {
      fetch(
        `https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=${leaguesStandings}`,
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
          setStandings(json.response[0].league.standings[0]);
        })
        .catch((error) => {});
    }
  }, [leaguesStandings, standingsShowing]);
  console.log(Standings);
  return (
    <div>
      <div className={classes.fixtures_info}>
        <h3 className={classes.fixtures_info_Position}>position</h3>
        <h3 className={classes.fixtures_info_Club}>Club</h3>
        <h3 className={classes.fixtures_info_Played}>Played</h3>
        <h3 className={classes.fixtures_info_Won}>Won</h3>
        <h3 className={classes.fixtures_info_Drawn}>Drawn</h3>
        <h3 className={classes.fixtures_info_Lost}>Lost</h3>
        <h3 className={classes.fixtures_info_GD}>GD</h3>
        <h3 className={classes.fixtures_info_Points}>Points</h3>
      </div>
      <ol className={classes.league_standings}>
        {Standings.map((user) => (
          <li className={classes.Standings_list}>
            <div className={classes.Li_styling}>
              <p className={classes.Standings_rank}>{user.rank}.</p>
              <img
                src={user.team.logo}
                className={classes.Standings_team_logo}
              />
              <p className={classes.standings_list_team_name} key={user.rank}>
                {user.team.name}
              </p>

              <div className={classes.aligned}>
                <p className={classes.games_rank}>{user.rank}</p>
                <p className={classes.games_played}>{user.all.played}</p>
                <p className={classes.games_Winned}>{user.all.win}</p>
                <p className={classes.games_Tie}>{user.all.draw}</p>
                <p className={classes.games_Loosed}>{user.all.lose}</p>
                <p className={classes.games_Gd}>{user.goalsDiff}</p>
                <p className={classes.games_Points}>{user.points}</p>
              </div>
            </div>
            <hr className={classes.Upcoming_fixtures_line} />
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Standings;
