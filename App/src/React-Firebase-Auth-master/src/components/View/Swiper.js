import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// import WhiteBackground from '../Capture.white-background.PNG'

// import 'swiper/css';
// import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
// import { EffectCards } from 'swiper/modules';

export default function Swipers(props) {
  const swiperInfo = props.swiperInfo
  function ClickTest() {
    console.log(swiperInfo);
  }
  console.log(swiperInfo);
  return (
    <>

{/* <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

            
{swiperInfo.map((player) => ( <SwiperSlide> <div className="swiper-slide">
  <img src={WhiteBackground} class="player-card-background"
          />
            <div className="player-card">
              
            <img src={player.player.photo} class="player-card-image"/>

            <h3>{player.statistics[0].goals.total}</h3>
            <h5>{player.statistics[0].games.position}</h5>
            <img src={player.statistics[0].team.logo} className="player-card-flagLogo"/>
            <img src={player.statistics[0].league.logo} className="player-card-teamLogo"/>
         
          </div>
         
          <h2 className='player-card-name'>{player.player.name}</h2>
          <div class="container2">
            
         
             
          <h2 className='container_fouls'>Fouls:</h2>
          <span className='fouls-score'>{player.statistics[0].fouls.committed}</span>
            <h2 className='container_assists'>Assists:</h2>
            <span className='assists-score'>{player.statistics[0].goals.assists}</span>
            <h2 className='container_ratings'>Rating:</h2>
            <span className='rating-score'>{player.statistics[0].games.rating.slice(0,3)}</span>
          

            <h2 className='container_shots'>Shots:</h2>
            <span className='shots-score'>{player.statistics[0].shots.total}</span>
              <h2 className='container_apps'>Apps:</h2>
              <span className='apps-score'>{player.statistics[0].games.appearences}</span>
            <h2 className='container_cards'>Cards:</h2>
            <span className='cards-score'>{player.statistics[0].cards.yellow}</span>
            </div>
            </div>
            </SwiperSlide> 
            
))}
      </Swiper> */}
    </>
  );
}

