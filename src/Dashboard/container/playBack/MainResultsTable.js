import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';

const MainResults = () => {
  
    return(
        <div className='ResultsContainer'>
        <div className="projects p-20 bg-white rad-10 m-20 bs">
          <h2 className="mt-0 mb-20">DHT11&ULTRASONIC results</h2>
          <div className="responsive-table">
            <table className="fs-15 w-full">
              <thead>
                <tr>
                  <td >no.</td>
                  <td>temp</td>
                  <td>Hum</td>
                  <td>distance</td>
              
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>30</td>
                  <td>20</td>
                  <td>70</td>

                </tr>
                <tr>
                <td>2</td>
                  <td>30</td>
                  <td>20</td>
                  <td>70</td>
     
                </tr>
                <tr>
                <td>1</td>
                  <td>30</td>
                  <td>20</td>
                  <td>70</td>
            
                </tr>
                <tr>
                <td>1</td>
                  <td>30</td>
                  <td>20</td>
                  <td>70</td>
           
                </tr>
                <tr>
                <td>1</td>
                  <td>30</td>
                  <td>20</td>
                  <td>70</td>
     
                </tr>
                <tr>
                <td>1</td>
                  <td>30</td>
                  <td>20</td>
                  <td>70</td>
     
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        </div>
        )
  
}

export default MainResults;