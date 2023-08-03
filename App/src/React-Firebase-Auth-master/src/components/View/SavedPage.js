import React, { useEffect, useState } from "react";
import classes from "./Application.module.css";
import moment from 'moment';
import {MdOutlineStadium} from 'react-icons/md'
import {BsFillTrashFill} from 'react-icons/bs'
function SavedPage(props) {
  const [show, setShow] = useState(false);
  const [storedGames,setStoredGames] = useState([])

const showsavedGames = props.showSaved

const SavedGame = props.games
useEffect(() => {
  if(SavedGame) {
  const addSavedGame = [...storedGames,SavedGame]
setStoredGames(addSavedGame)
  }

},[SavedGame])

  function deleteGameHandler(Saved) {
    setStoredGames(oldValues => {
      return oldValues.filter(value => value !== Saved)
    })
 
  console.log(storedGames);  
  }
    console.log(storedGames);
    if(showsavedGames && storedGames.length == 0) {
      return <div className={classes.saved_Games}>
      
      <h3 className={classes.Saved_Games_noGames_error}>No games saved, saved upcoming games will appear here!</h3>
      </div>
     }
 if(showsavedGames) {
  return <div>
  <div className={classes.saved_Games}>

 {storedGames.length > 0 &&  storedGames.map((Saved,index) => (
<div>
             <div className={classes.Saved_standings_fixtures} key={index}>
              <div onClick={() => deleteGameHandler(Saved)}
               className={classes.Saved_Games_delete}><BsFillTrashFill/></div>
                <img src={Saved.teams.home.logo} className={classes.Saved_standings_fixtures_home_image}/>
                <h3 className={classes.Saved_fixtures_home}>{Saved.teams.home.name}</h3>         
                <div className={classes.Saved_square}><p>{moment(Saved.fixture.date).format('MMM DD,YYYY')}</p></div>
                         <img src={Saved.teams.away.logo} className={classes.Saved_away_logo}/>
                            <h3 className={classes.Saved_fixtures_away}>{Saved.teams.away.name}</h3>
                        <MdOutlineStadium className={classes.Saved_fixtures_venue_icon}/>
               <h5 className={classes.Saved_fixtures_venue_name}>{Saved.fixture.venue.name},  {Saved.fixture.venue.city}</h5>
               
                     
                         
                      
         
             </div>
                  <hr className={classes.Saved_fixtures_line}/>
                    </div>
      ))}
  
        
     
  
  
   
    </div>
     </div>
 } else {
  return <div></div>;
 }



}

export default SavedPage;
