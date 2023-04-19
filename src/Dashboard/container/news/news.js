import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';

const News = () => {
  
    return(
      <div className="latest-news p-20 bg-white rad-10 txt-c-mobile bs">
      <h2 className="mt-0 mb-20">Latest News</h2>
      <div className="news-row d-flex align-center">
        <img src="imgs/news-01.png" alt="" />
        <div className="info">
          <h3>Created Rocket </h3>
          <p className="m-0 fs-14 c-grey">New Space Rocket </p>
        </div>
        <div className="btn-shape bg-eee fs-13 label">3 Days Ago</div>
      </div>
      <div className="news-row d-flex align-center">
        <img src="imgs/news-02.png" alt="" />
        <div className="info">
          <h3>Changed The Design</h3>
          <p className="m-0 fs-14 c-grey">A New Rover Design</p>
        </div>
        <div className="btn-shape bg-eee fs-13 label">5 Days Ago</div>
      </div>
      <div className="news-row d-flex align-center">
        <img src="imgs/news-03.png" alt="" />
        <div className="info">
          <h3>Team Increased</h3>
          <p className="m-0 fs-14 c-grey">3 Developers Joined The Team</p>
        </div>
        <div className="btn-shape bg-eee fs-13 label">7 Days Ago</div>
      </div>
      <div className="news-row d-flex align-center">
        <img src="imgs/news-04.png" alt="" />
        <div className="info">
          <h3>Added Rover Gateway</h3>
          <p className="m-0 fs-14 c-grey">Many New Rover Gateways Added</p>
        </div>
        <div className="btn-shape bg-eee fs-13 label">9 Days Ago</div>
      </div>
    </div>
     
        )
  
}

export default News;