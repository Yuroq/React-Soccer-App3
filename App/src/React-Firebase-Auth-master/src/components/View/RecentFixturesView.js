import React, {useEffect, useState} from "react";
import classes from "./Application.module.css";
import {MdOutlineStadium} from 'react-icons/md'
function RecentFixtures(props) {
  const [recentFixtures, setRecentFixtures] = useState([])

  const leaguesRecent = props.leagues
  const standingsShowing = props.isShowing   


  
    

    
  const [league, setLeague] = useState('')
  useEffect(() => {

    if(standingsShowing == 'Recent') {
    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leaguesRecent}&season=2020&from=2021-01-01&to=2021-04-07`,
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
      .catch((error) => {
        console.error("Error fetching API data:", error);

      
      });
    
    }
  },[leaguesRecent, standingsShowing])


  return (
    <div>
       {recentFixtures.map((Recent) => (


<div>

<h2 className={classes.recent_fixtures_home}>{Recent.teams.home.name}</h2>
<img src={Recent.teams.home.logo} className={classes.recent_fixtures_home_img}/>
<div className={classes.recent_fixtures_scoreboard}><p>{Recent.goals.home}</p><div className={classes.vertical_line}></div> 
<p className={classes.goals_away}>{Recent.goals.away}</p></div>
<img src={Recent.teams.away.logo} className={classes.recent_fixtures_away_img}/>
<h2 className={classes.recent_fixtures_away}>{Recent.teams.away.name}</h2>
  <MdOutlineStadium className={classes.recent_fixtures_venue_icon}/>
<h5 className={classes.recent_fixtures_venue}>{Recent.fixture.venue.name},  {Recent.fixture.venue.city}</h5>
<img src={Recent.league.logo} className={classes.recent_fixtures_league_img}/>
<hr className={classes.Recent_fixtures_line}/>
</div>

))} 
    </div>
  )
}
export default RecentFixtures