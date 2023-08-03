import React, { useEffect, useState } from "react";
import classes from "../View/Application.module.css"
function TeamStats(props) {
    const [teamStats,setTeamStats] = useState([])
    const stats = props.teamStats
    const showInfo = props.showInfo
    const team = props.team
    const league = props.league
    useEffect(() => {
fetch(
        `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2020&team=${league}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          },
        })
        .then((response) => response.json())
        .then((json) => {
          setTeamStats([json]);
      
     
        })
        
        .catch((err) => {
      console.log(err);
        })
      
    },[stats])
  
  return (
    <div>
    {teamStats.map((stats) =>


   <section style={{display:"flex"}}>
    <div className={classes.grid_item}>
    <div className={classes.info}>
              <hr className={classes.info_line_1}/>
              <h2>Attack</h2>
          <hr/>
              <p><span>Goals:<p>{stats.response.goals.for.total.total}</p></span></p>
     <hr/>
             <p><span className={classes.stat_padding}>Goals Per Match:<p>{stats.response.goals.for.average.total}</p></span></p> 
             <hr/>
              <p> <span className={classes.stat_padding}>Games failed to score:<p>{stats.response.failed_to_score.total}</p></span></p>
              <hr/>
              <p></p><p><span className={classes.stat_padding}>Penalties scored:<p>{stats.response.penalty.scored.total}</p></span></p>
            </div>
          </div>
          <div className={classes.grid_item}>
            <div className={classes.info}>
              <hr className={classes.info_line_2}/>
              <h2>Team Play</h2>
              <hr/>
             <p><span>Yellow Cards:<p>12</p></span></p>
             <hr/>
              <p><span>Red Cards:<p>12</p></span></p>
              <hr/>
              <p><span>Largest win streak<p>{stats.response.biggest.streak.wins}</p></span></p>
              <hr/>
              <p><span>Largest losing streak<p>{stats.response.biggest.streak.loses}</p></span></p>
            </div>
          </div>
          
          <div className={classes.grid_item}>
            <div className={classes.info}>
              <hr className={classes.info_line_3}/>
              <h2>Defense</h2>
              <hr/>
              <p><span>Passes per match:<p>{stats.response.goals.against.total.total}</p></span></p>
              <hr/>
              <p><span>Goals Conceded:<p>{stats.response.goals.against.total.total}</p></span></p>
              <hr/>
              <p><span>Total Clean Sheets:<p>{stats.response.clean_sheet.total}</p></span></p>
              <hr/>
              <p><span>Home Clean Sheets:<p>{stats.response.clean_sheet.home}</p></span></p>
              <hr/>
              <p><span>Away Clean Sheets:<p>{stats.response.clean_sheet.away}</p></span></p>
              
            </div>
          </div>
           
      
    </section>)}
        </div>
  )
}
export default TeamStats;