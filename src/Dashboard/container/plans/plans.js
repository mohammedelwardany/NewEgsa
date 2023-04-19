import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';

const Plans = () => {
  
    return(
        <div>
        <h1 className="p-relative">Plans</h1>
        <div className="settings-page m-20 d-grid gap-20"></div>  
        <div className="projects p-20 bg-white rad-10 m-20 bs">
          <h2 className="mt-0 mb-20">Plans</h2>
          <div className="responsive-table">
            <table className="fs-15 w-full">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Finish Date</td>
                  <td>Developer</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ministry Wikipedia</td>
                  <td>10 July 2023</td>
                  <td>Mona</td>
                  <td><span class="label btn-shape bg-orange c-white">Pending</span></td>
                </tr>
                <tr>
                  <td>Shop</td>
                  <td>12 Oct 2023</td>
                  <td>Abdlerahman</td>
                  <td><span class="label btn-shape bg-blue c-white">In Progress</span></td>
                </tr>
                <tr>
                  <td>Bouba App</td>
                  <td>05 Sep 2023</td>
                  <td>Mohamed</td>
                  <td><span class="label btn-shape bg-green c-white">Completed</span></td>
                </tr>
                <tr>
                  <td>Mahmoud Website</td>
                  <td>22 May 2023</td>
                  <td>Baher</td>
                  <td><span class="label btn-shape bg-green c-white">Completed</span></td>
                </tr>
                <tr>
                  <td>Sayed Website</td>
                  <td>24 Feb 2023</td>
                  <td>Ali</td>
                  <td><span class="label btn-shape bg-red c-white">Rejected</span></td>
                </tr>
                <tr>
                  <td>Arena Application</td>
                  <td>01 Nov 2023</td>
                  <td>Omar</td>
                  <td><span class="label btn-shape bg-green c-white">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        </div>
        )
  
}

export default Plans;