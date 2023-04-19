import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import News from '../news/news';
import Reminders from '../reminders/reminders';
import Tickets from '../tickets/tickets';
import LastPlan from '../lastplan/lastplan';
import History from '../history/history';
import Draft from '../draft/draft';
import Welcome from '../welcome/welcome';

const Intro = () => {
  
    return(
        <div >
    
     <h1 className="p-relative">Dashboard</h1>
        <div className="wrapper d-grid gap-20">
          <Welcome/>
          <Draft/>
          <News/>
          <History/>
          <LastPlan/>
          <Reminders/>
          </div>
          <Tickets/>     
          </div>
        )
  
}

export default Intro;