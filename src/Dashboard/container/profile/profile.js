import  React from 'react';
import { useSelector } from 'react-redux';




const Profile = () => {
  const { allUserData } = useSelector(state => state.user)

    return(
        <div>
        <h1 className="p-relative">Profile</h1>
        <div className="settings-page m-20 d-grid gap-20">
         
          <div className="p-20 bg-white rad-10 bs">
            <h2 className="mt-0 mb-10">Welcome</h2>
          
            <div className="mb-15 between-flex">
            <div className="d-flex flex-column align-items-center text-center p-2 py-5">
                <img className="rounded-circle mt-5" width="200px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                </div>
              <div>
                <span>{allUserData.firstName} {allUserData.lastName}</span>
                <p className="c-grey fs-13 pt-5 pb-25">frontend Developer And Admin</p>
                <a className="button bg-blue c-white btn-shape mr-10" href="#">Edit Profile</a>
                <a className="button bg-blue c-white btn-shape ml-10" href="#">Delete Profile</a>
              </div>  
            </div>
          </div>
          
          <div className="p-20 bg-white rad-10 bs">
            <h2 className="mt-0 mb-10">General Info</h2>
            <p className="mt-0 mb-20 c-grey fs-15">General Information About Your Account</p>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-10" for="first">First Name</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                type="text"
                id="first"
                placeholder="Anss"
                disabled
              />
            </div>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-5" for="last">Last Name</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="Mohamed"
                disabled
              />
            </div>
            <div>
              <label className="fs-14 c-grey d-block mb-5" for="email">Email</label>
              <input
                className="email b-none border-ccc p-10 rad-6 w-full mr-10"
                id="email"
                type="email"
                value="Anssmohamed@gmail.com"
                disabled
              />
              <a className="c-blue" href="#">Change</a>
            </div>
          </div>
        
          <div className="targets p-20 bg-white rad-10 bs">
            <h2 className="mt-0 mb-10">Yearly Targets</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Targets Of The Year</p>
            <div className="target-row mb-20 blue center-flex">
              <div className="icon center-flex">
                <i className="fa-solid fa-dollar-sign fa-lg c-blue"></i>
              </div>
              <div className="details">
                <span className="fs-14 c-grey">Money</span>
                <span className="d-block mt-5 mb-10 fw-bold">$20.000</span>
                <div className="progress p-relative">
                  <span className="bg-blue blue" style={{width: "80%"}}>
                    <span className="bg-blue">80%</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="target-row mb-20 center-flex orange">
              <div className="icon center-flex">
                <i className="fa-solid fa-code fa-lg c-orange"></i>
              </div>
              <div className="details">
                <span className="fs-14 c-grey">Projects</span>
                <span className="d-block mt-5 mb-10 fw-bold">24</span>
                <div className="progress p-relative">
                  <span className="bg-orange orange" style={{width: "55%"}}>
                    <span className="bg-orange">55%</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="target-row mb-20 center-flex green">
              <div className="icon center-flex">
                <i className="fa-solid fa-user fa-lg c-green"></i>
              </div>
              <div className="details">
                <span className="fs-14 c-grey">Team</span>
                <span className="d-block mt-5 mb-10 fw-bold">12</span>
                <div className="progress p-relative">
                  <span className="bg-green green" style={{width: "75%"}}>
                    <span className="bg-green">75%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        
          <div className="social-boxes p-20 bg-white rad-10 bs">
            <h2 className="mt-0 mb-10">Social Info</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Social Media Information</p>
            <div className="d-flex align-center mb-15">
              <i className="fa-brands fa-twitter center-flex c-grey"></i>
              <input className="w-full" type="text" placeholder="Twitter Username" />
            </div>
            <div className="d-flex align-center mb-15">
              <i className="fa-brands fa-facebook-f center-flex c-grey"></i>
              <input className="w-full" type="text" placeholder="Facebook Username" />
            </div>
            <div className="d-flex align-center mb-15">
              <i className="fa-brands fa-linkedin center-flex c-grey"></i>
              <input className="w-full" type="text" placeholder="Linkedin Username" />
            </div>
            <div className="d-flex align-center">
              <i className="fa-brands fa-youtube center-flex c-grey"></i>
              <input className="w-full" type="text" placeholder="Youtube Username" />
            </div>
          </div>
          </div>
          </div>
        )
  
}

export default Profile;