import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';

const PlanTable = ({statusstate,dataSet,planName,planDate}) => {
  
    return(
        <div>
        <h1 className="p-relative">Plan Table</h1>
        <div className="projects p-20 bg-white rad-10 m-20 bs">
          <h2 className="mt-0 mb-20">Plan : {planName}<sub> execute at : {planDate}</sub></h2>
          <div className="responsive-table">
            <table className="fs-15 w-full">
              <thead>
                <tr>
                  <td>no.</td>
                  <td>sub system</td>
                  <td>Commend</td>
                  <td>repeat</td>
                  <td>delay</td>
                  <td style={{display:`${statusstate}`}}>Status</td>
                </tr>
              </thead>
              <tbody>
                

              {


                dataSet.map(((dataSet,i)=>{

                  return(
   
                    <tr key={dataSet.sequenceNumber}>
                    <td>{dataSet.sequenceNumber}</td>
                    <td>{dataSet.subSystemName}</td>
                    <td>{dataSet.CommendDescription}</td>
                    <td>{dataSet.repeat}</td>
                    <td>{dataSet.delay}</td>
                    <td style={{display:`${statusstate}`}}><span className="label btn-shape bg-orange c-white">Pending</span></td>
                  </tr>
  
  
  )

})

)
}








                {/* <tr>
                  <td>1</td>
                  <td>mpu6050</td>
                  <td>Get Gyro</td>
                  <td>2</td>
                  <td>1</td>
                  <td style={{display:`${statusstate}`}}><span className="label btn-shape bg-orange c-white">Pending</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>mpu6050</td>
                  <td>Get inner temp</td>
                  <td>2</td>
                  <td>1</td>
                  <td style={{display:`${statusstate}`}}><span className="label btn-shape bg-blue c-white">In Progress</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>DHT11</td>
                  <td>Get outer temp</td>
                  <td>2</td>
                  <td>1</td>
                  <td style={{display:`${statusstate}`}}><span className="label btn-shape bg-green c-white">Completed</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>ULTRASONIC</td>
                  <td>get distance</td>
                  <td>2</td>
                  <td>1</td>
                  <td style={{display:`${statusstate}`}}><span className="label btn-shape bg-green c-white">Completed</span></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>CAMERA</td>
                  <td>cupture image</td>
                  <td>2</td>
                  <td>1</td>
                  <td style={{display:`${statusstate}`}}><span className="label btn-shape bg-red c-white">Rejected</span></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>DHT11</td>
                  <td>get temp</td>
                  <td>2</td>
                  <td>1</td>
                  <td style={{display:`${statusstate}`}}><span className="label btn-shape bg-green c-white">Completed</span></td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        </div>
        )
  
}

export default PlanTable;