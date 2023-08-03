import React, { useEffect, useState } from "react";
import classes from "../View/Application.module.css"
import TeamStats from "./TeamStats";
import {GiSoccerKick} from 'react-icons/gi'
import {FcNegativeDynamic} from 'react-icons/fc'
import {FcPositiveDynamic} from 'react-icons/fc'
import {GiGoalKeeper} from 'react-icons/gi'     
import {GiGloves} from 'react-icons/gi'
function TeamInfo(props) {
    const [teamInfo, setTeamInfo] = useState([])
    const [league,setLeague] = useState()
    const Info = props.teamInfo
    const showInfo = props.showInfo
    const team = props.team
    const leagues = props.league
useEffect(() => {
fetch(
  `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${leagues}&season=2020&team=${team}`,
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
    setTeamInfo([json]);

  })
  
  .catch((err) => {
console.log(err);
  })

setLeague(leagues)
},[Info])

return <div>


 {teamInfo.map((res) => (
 <div>
 
 <GiSoccerKick className={classes.Matches_played_icons}/>
   <h2 className={classes.stats_1}>{res.response.fixtures.played.total}</h2>
   <h2 className={classes.stats_Played}>Matches Played</h2>
   <div className={classes.line_1}></div>
   <div className={classes.line_2}></div>
   <FcPositiveDynamic className={classes.Wins_icons}/>
   
   <h2 className={classes.stats_2}>{res.response.fixtures.wins.total}</h2>
   <h2 className={classes.stats_wins}>Wins</h2>
   <div className={classes.line_3}></div>
   <FcNegativeDynamic className={classes.Losses_icons}/>
   
   <h2 className={classes.stats_3}>{res.response.fixtures.loses.total}</h2>
   <h2 className={classes.stats_losses}>Losses</h2>
   <div className={classes.line_4}></div>
   <GiGoalKeeper className={classes.Conceeded_icons}/>
  
   <h2 className={classes.stats_4}>{res.response.goals.against.total.total}</h2>
   <h2 className={classes.stats_Goals_conceeded}>Goals Conceeded</h2>
   <GiGloves className={classes.Clean_sheet_icons}/>
   
   <h2 className={classes.stats_5}>{res.response.clean_sheet.total}</h2>
   <h2 className={classes.stats_clean_sheets}>Clean Sheets</h2>
   </div>
))} 
 {league && <TeamStats teamStats={teamInfo} showInfo={showInfo} team={team} league={league}/>} 
</div>
}

export default TeamInfo;