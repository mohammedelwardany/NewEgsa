import  React from 'react';

const EditProfile = () => {
  
    return(
        <div>
        <h1 className="p-relative">Edit Profile</h1>
          <div className="editinfo p-20 bg-white rad-10 bs">
            <div className="mb-15 between-flex">
            <div className="d-flex flex-column align-items-center text-center p-2 py-5 ml-15">
              <img className="rounded-circle mt-5 ml-15" width="190px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
            </div>
          <div className="p-10 bg-white rad-10" style={{width: "72%"}}>
            <h2 className="mt-0 mb-10">General Info</h2>
            <div className="mb-15 editform">
              <label className="fs-14 c-grey d-block mb-10" for="first">UserName</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                type="text"
                id="first"
                placeholder="Anss"
      
              />
            </div>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-5" for="last">First Name</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="Anss"
        
              />
            </div>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-5" for="last">Last Name</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="Mohamed"
        
              />
            </div>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-5" for="last">Password</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="**********"
        
              />
            </div>
            <div>
              <label className="fs-14 c-grey d-block mb-5" for="email">Email</label>
              <input
                className="b-none border-ccc p-10 rad-6 w-full mr-10"
                id="email"
                type="email"
                placeholder="Anssmohamed@gmail.com"
              />
             </div>
            
            </div>
            
           </div>
           <div style={{textAlign: "right"}}>
             <a className="button bg-blue c-white btn-shape ml-10" href="#">Save Changes</a>
             </div>
          </div>

          <div className="settings-page m-20 d-grid gap-20">

          <div className="p-20 bg-white rad-10 bs">
            <h2 className="mt-0 mb-10">Security Info</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Security Information About Your Account</p>
            <div className="sec-box mb-15 between-flex">
              <div>
                <span>Password</span>
                <p className="c-grey mt-5 mb-0 fs-13">Last Change On 25/10/2021</p>
              </div>
              <a className="button bg-blue c-white btn-shape" href="#">Change</a>
            </div>
            <div className="sec-box mb-15 between-flex">
              <div>
                <span>Two-Factor Authentication</span>
                <p className="c-grey mt-5 mb-0 fs-13">Enable/Disable The Feature</p>
              </div>
              <label>
                <input className="toggle-checkbox" type="checkbox" checked />
                <div className="toggle-switch"></div>
              </label>
            </div>
            <div className="sec-box between-flex">
              <div>
                <span>Devices</span>
                <p className="c-grey mt-5 mb-0 fs-13">Check The Login Devices List</p>
              </div>
              <a className="bg-eee c-black btn-shape" href="#">Devices</a>
            </div>
          </div>
        
         <div className="backup-control p-20 bg-white rad-10 bs">
            <h2 className="mt-0 mb-10">Backup Plans</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Control Backup Time And Location</p>
            <div className="date d-flex align-center mb-15">
              <input type="radio" name="time" id="daily" checked />
              <label for="daily">Daily</label>
            </div>
            <div className="date d-flex align-center mb-15">
              <input type="radio" name="time" id="weekly" />
              <label for="weekly">Weekly</label>
            </div>
            <div className="date d-flex align-center mb-15">
              <input type="radio" name="time" id="monthly" />
              <label for="monthly">Monthly</label>
            </div>
          </div>
         
          </div>

          </div>
 
        )
  
}

export default EditProfile;