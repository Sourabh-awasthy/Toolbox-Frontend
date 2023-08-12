import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setData] = useState();
  const Navigate = useNavigate();

  const callAbout = async () => {
    try {

      const tokenFrom=  localStorage.getItem('jwttoken');

      const res= await fetch("https://mern-backend-2w8y.onrender.com/about",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true,
        body:JSON.stringify({
          tokenFrom
        })
      });
      const data = await res.json()
      if(res.status===401 || !data){
        console.log("error data not found")
      }
      else{
        setData(data);
      }
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    callAbout();
  }, []);

  function onLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("jwttoken")
    Navigate("/login");
  }

  return (
    <div className="container user-profile card p-4">
    <img style={{height:"300px"}}src="https://icon-library.com/images/android-profile-icon/android-profile-icon-2.jpg" alt="profilePhoto"/>
      {userData ? (
        <>
          <div className="user-info">
            <h2>Name: {userData.name}</h2>
            <p>Email: {userData.email}</p>
          </div>
          <div className="user-bio">
            <p> Mobile No: {userData.phone}</p>
          </div>
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
