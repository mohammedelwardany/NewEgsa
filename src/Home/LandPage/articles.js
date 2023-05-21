import  React from 'react';
import '../../css/land.css';
import Header from './header';
import Start from './start';
import Footer from './footer';

const Articles = () => {

    return(
      <>
      <Header/>
    
        <div className="articles" id="articles">
        <h2 className="main-title"> Our Space News </h2>
        <div className="container">
          <div className="box">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b114083-d744-4ffb-aac3-bef2103c725b/de2udj7-fb0a6635-e44a-4713-963f-b2720a35da30.jpg/v1/fill/w_1095,h_730,q_70,strp/mars_2020_perseverance_by_macrebisz_de2udj7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcLzhiMTE0MDgzLWQ3NDQtNGZmYi1hYWMzLWJlZjIxMDNjNzI1YlwvZGUydWRqNy1mYjBhNjYzNS1lNDRhLTQ3MTMtOTYzZi1iMjcyMGEzNWRhMzAuanBnIiwid2lkdGgiOiI8PTI1NjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.61wLt1X6snhmX0Q4fXTuvBtWgJj2umZDhBleVJIGTCU" alt="" />
            <div className="content">
              <h3>Mars Rover</h3>
              <p>NASA's Mars Fleet Lies Low with Sun Between Earth and Red Planet</p>
            </div>
            <div className="info">
              <a href="https://mars.nasa.gov/news/9051/nasas-mars-fleet-lies-low-with-sun-between-earth-and-red-planet/?site=msl">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.mos.cms.futurecdn.net/n7CYgJw4nijqUgSKdtm9aW-1200-80.jpg.webp" alt="" />
            <div className="content">
              <h3>NASA's Curiosity Mars</h3>
              <p>NASA's Curiosity Mars Rover Gets a Major Software Upgrade</p>
            </div>
            <div className="info">
              <a href="https://mars.nasa.gov/news/9378/nasas-curiosity-mars-rover-gets-a-major-software-upgrade/?site=msl">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="https://i2.wp.com/cornellsun.com/wp-content/uploads/2018/09/Pg-1-Mars-Rover-1.jpg?fit=1200%2C960&ssl=1" alt="" />
            <div className="content">
              <h3>First 'Sun Rays' on Mars</h3>
              <p>NASA's Curiosity Views First 'Sun Rays' on Mars</p>
            </div>
            <div className="info">
              <a href="https://mars.nasa.gov/news/9358/nasas-curiosity-views-first-sun-rays-on-mars/?site=msl">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="https://cdn.arstechnica.net/wp-content/uploads/2022/11/GettyImages-1438783830.jpg" alt="" />
            <div className="content">
              <h3>Finds Surprise Clues to Mars</h3>
              <p>NASA's Curiosity Finds Surprise Clues to Mars' Watery Past</p>
            </div>
            <div className="info">
              <a href="https://mars.nasa.gov/news/9344/nasas-curiosity-finds-surprise-clues-to-mars-watery-past/?site=msl">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043cbd3-bf35-45a5-958b-b3dcaee284f1/d85l2qg-890e6a88-1586-48df-8ad3-6ff9dd873285.png/v1/fill/w_1382,h_578,q_70,strp/lunar_3440x1440__9__by_starl0rd84_d85l2qg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0MCIsInBhdGgiOiJcL2ZcLzcwNDNjYmQzLWJmMzUtNDVhNS05NThiLWIzZGNhZWUyODRmMVwvZDg1bDJxZy04OTBlNmE4OC0xNTg2LTQ4ZGYtOGFkMy02ZmY5ZGQ4NzMyODUucG5nIiwid2lkdGgiOiI8PTM0NDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1RBNB0bvLHtZr64sZlR15q6UiMG-kOEk7Hw5htdF2rw" alt="" />
            <div className="content">
              <h3>Curiosity Mars Rover</h3>
              <p>Curiosity Mars Rover Reaches Long-Awaited Salty Region</p>
            </div>
            <div className="info">
              <a href="https://mars.nasa.gov/news/9281/curiosity-mars-rover-reaches-long-awaited-salty-region/?site=msl">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/302bf410-2eae-4b7f-84e6-54af6ff8a162/dfbv4hv-cc236c2c-3a3c-4b88-aa43-692c9dcf43d7.png/v1/fill/w_1192,h_670,q_70,strp/planet_rover_by_crazysiberian_dfbv4hv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzMwMmJmNDEwLTJlYWUtNGI3Zi04NGU2LTU0YWY2ZmY4YTE2MlwvZGZidjRodi1jYzIzNmMyYy0zYTNjLTRiODgtYWE0My02OTJjOWRjZjQzZDcucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4dri9qt9R211AeFzG0XZK_1wxkkffIrTiSz14V_w1vE" alt="" />
            <div className="content">
              <h3>Inventory of Key Life Ingredient on Mars</h3>
              <p>NASA's Curiosity Takes Inventory of Key Life Ingredient on Mars</p>
            </div>
            <div className="info">
              <a href="https://mars.nasa.gov/news/9214/nasas-curiosity-takes-inventory-of-key-life-ingredient-on-mars/?site=msl">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="https://mars.nasa.gov/system/news_items/main_images/9175_1-solar-system-illo-web.jpg" alt="" />
            <div className="content">
              <h3>NASA Extends Exploration</h3>
              <p>NASA Extends Exploration for 8 Planetary Science Missions</p>
            </div>
            <div className="info">
              <a href="https://mars.nasa.gov/news/9175/nasa-extends-exploration-for-8-planetary-science-missions/?site=msl">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="https://mars.nasa.gov/system/news_items/main_images/9080_1-PIA24937-web.jpg" alt="" />
            <div className="content">
              <h3>Picture Postcard From Mars</h3>
              <p>NASA's Curiosity Rover Sends a Picture Postcard From Mars</p>
            </div>
            <div className="info">
              <a href="https://mars.nasa.gov/news/9080/nasas-curiosity-rover-sends-a-picture-postcard-from-mars/?site=msl">Read More</a>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="spikes"></div>
      <Footer/>
      </>
    
     ) 
}
    
export default Articles;