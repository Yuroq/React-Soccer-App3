import React, { useEffect, useState } from "react";
import classes from "../View/Application.module.css"
import playerBackground from './abstract-geometric-white-and-gray-on-light-silver-gradient-background-modern-banner-design-illustration-free-vector.jpg'
function Lineup(props) {
    const [teamLineup,setTeamLineUp] = useState([])
    const [showLineup,setShowLineup] = useState(false)
    const Lineup = props.Lineup
    const showInfo = props.showInfo
    const team = props.team
    useEffect(() => {
          fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${team}`,
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
        setTeamLineUp(json.response[0].players);

      })
       .catch((err) => {
        console.log(err);
       })
       
         
        setShowLineup(showInfo)
        console.log(teamLineup);
    },[])
    console.log(teamLineup);
  return <section className={classes.team_section}>
    <div className={classes.players_grid}>
    {teamLineup.map((player) => (


         <div className={classes.player_grid}>           
  <div className={classes.squad}>
  <img src={playerBackground} className={classes.player_background_image}/>
  <h2 className={classes.player_number}>{player.number}</h2>
  <h2 className={classes.player_name}>{player.name}</h2>
  <h2 className={classes.player_position}>{player.position}</h2>
  <h3 className={classes.player_info}>
  
  <img src={player.photo} className={classes.player_picture}/>
  </h3>
  </div>
  </div>
        ))} 
        </div>
        </section>
}

export default Lineup