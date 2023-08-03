import React, { useEffect, useState } from "react";

import classes from "../View/Application.module.css"
import RecentGames from "./RecentGames";
import TeamInfo from "./TeamInfo";
import Lineup from "./Lineup";
import circle from '../pngtree-white-circle-background-png-image_2975665-removebg-preview.png'
import {AiOutlineTrophy} from 'react-icons/ai'
import {MdOutlineStadium} from 'react-icons/md'
import {BsFillBuildingFill} from 'react-icons/bs'
import {GiSoccerBall} from 'react-icons/gi'
function SearchView(props) {
  const [team,setTeam] = useState()
  const [league,setLeague] = useState()
  const [showLeague, setShowLeague] = useState(false)
  const [showInfo,setShowInfo] = useState(false)
  const [banner,setBannerInfo] = useState([])
  const [teamInfo,setTeamInfo] = useState([])
  const [recentFixtures,setRecentFixtures] = useState([])
  const [lineup,setLineup] = useState([])
const [showLineup, setShowLineup] = useState(false)
const [showRecentGames,setShowRecentGames] = useState(false)
const [showStats,setShowStats] = useState(false)
const teamName = props.teamName
useEffect(() => {

fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?search=${teamName}`,
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
      setBannerInfo([json]);
setTeam(json.response[0].team.id)
    })
    

 



          
      


},[teamName])
useEffect(() => {
{team && fetch(
  `https://api-football-v1.p.rapidapi.com/v3/leagues?team=${team}`,
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
setLeague(json.response[0].league.id)

  })}
},[team])
console.log(league);
function showFixturesHandler() {
  setShowRecentGames(true)
setShowStats(false)
setShowLineup(false)
}
function showStatsHandler() {
  setShowStats(true)
  setShowRecentGames(false)
  setShowLineup(false)
  }
function showLineupHandler() {
  setShowLineup(true)
  setShowRecentGames(false)
  setShowStats(false)
}


    return (
    <section style={{backgroundColor:'orange'}}>
        <div> 

 
  <div>

{team && [banner[0].response[0]].map((banner) => ( 
   <div>
   <div>  
    <section className={classes.banner_background}>
     <section className={classes.Team_Info_Pics}>
           <section className={classes.top_section}>
           
           </section>
          <div className={classes.test}>
      
        <h3 className={classes.first_txt}>
        <img src={banner.venue.image} className={classes.stadium_logo} />
        </h3> 
      </div>

       </section>
          </section>
</div>
<h3 className={classes.team_name}>{banner.team.name}</h3>
 <section className={classes.bottom_section}>
 <div className={classes.gfg2}>

   <h3 className={classes.second_txt}>
         <img src={circle} className={classes.team_emblem_background}/>
         <img src={banner.team.logo} className={classes.team_logo} />
                </h3>
          
              <div className={classes.stadium_name2}>
              <div className={classes.stadium_name_icon}><MdOutlineStadium/></div> 
              <span className={classes.stadium_icon_name}>{banner.venue.name}</span>
            </div>
        
        <div className={classes.est_name2}>
        <h2 className={classes.est_name_icon}><BsFillBuildingFill/></h2>
        <span className={classes.est_icon_name}>Est:{banner.team.founded}</span>
        </div>
            
   </div>
   </section>
  </div>
 ))}

   
</div>
<div className={classes.search_page_navbar}>
  <span>
<button className={showStats ? classes.Navbar_clicked : classes.Navbar_stats} onClick={showStatsHandler}>Stats</button>
</span>
<span>
<button className={showRecentGames  ? classes.Navbar_clicked : classes.Navbar_fixtures} onClick={showFixturesHandler}>Fixtures</button>
</span>
<span>
<button className={showLineup ? classes.Navbar_clicked : classes.Navbar_Lineup} onClick={showLineupHandler}>Lineup</button>
</span>
</div>
<section className={classes.middle_section}>




  {showRecentGames && <div className={classes.search_recent_games}>

   <RecentGames recentGames={recentFixtures} showInfo={showInfo} team={team}/>
 

  </div>}
  


  {showStats && <div className={classes.grid_container}>

<div class={classes.team_stats}>

 <TeamInfo teamInfo={teamInfo} showInfo={showInfo} team={team} league={league}/>

</div>

</div>}

{showLineup && <Lineup Lineup={lineup} showInfo={showInfo} team={team}/>} 
</section>



      </div>


</section>
        
              
    )
}

export default SearchView;