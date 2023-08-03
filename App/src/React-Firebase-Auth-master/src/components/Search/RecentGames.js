import React, { useEffect, useState } from "react";
import classes from "../View/Application.module.css"
import {BsFillTrophyFill} from 'react-icons/bs'


function RecentGames(props) {
  const [recentFixtures, setRecentFixtures] = useState([]);
  const team = props.team
  useEffect(() => {
    fetch(
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022&team=${team}`,
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
      setRecentFixtures(json.response);

    })
.catch((err) => {
    console.log(err);
   })
   
  }, [props.recentGames]);

  return <div>
  
  {recentFixtures.slice(-20).map((fixtures) => (
  <div className={classes.Search_fixtures}>

  <div>
    {/* <span onClick={() => saveGameHandler(Upcoming)}>{!isSaved && <BiIcons.BiHeart/>}
           {isSaved && <AiFillHeart/>}</span> */}
           <h3 className={classes.Search_fixtures_home}>{fixtures.teams.home.name}</h3>
    <img src={fixtures.teams.home.logo} className={classes.Search_fixtures_home_image}/>
    
    <div className={classes.Search_fixtures_scoreboard}>
      <p>{fixtures.goals.home}</p><div className={classes.Search_vertical_line}></div> 
<p className={classes.Search_goals_away}>{fixtures.goals.away}</p></div>
           <img src={fixtures.teams.away.logo} className={classes.Search_away_logo}/>
           <h3 className={classes.Search_away}>{fixtures.teams.away.name}</h3>
           <BsFillTrophyFill className={classes.Search_fixtures_venue_icon}/>
<h5 className={classes.Search_fixtures_venue_name}>{fixtures.league.name}</h5>

     
         
  

</div>
<hr className={classes.Search_fixtures_line}/>
</div>

))}

</div>



}
export default RecentGames;
