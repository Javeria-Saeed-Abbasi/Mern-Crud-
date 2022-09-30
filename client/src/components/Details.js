import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create'; 
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Details = () => {


  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  
  const {id} = useParams("");
  console.log(id);

  const getdata = async (e) => {
    const res = await fetch(`getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data)
    {
      console.log("error");
    }
    else{
      getdata(data);
      console.log("get data");
    }
  }
  useEffect(()=>{
    getdata();
  }, [])

 const deleteuser = async(id) =>{
const res2 =await fetch (`/deleteuser/${id}`,{
  method: "DELETE",
  headers: {
    "Content-Type" : "application/json"
  }
});
const deletedata = await res2.json();
console.log(deletedata);

if(res2.status === 422 || !deletedata){
  console.log("error");
}  
else{
  console.log("user deleted");
  getdata();
}
 }
  return (
    <div className='container mt-3'>
      <h1 style={{ fontWeight: 400}}> Welcome Javeria</h1>
      <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='left_view col-lg-6 col-md-6 col-12'>
                <img src='/profile.png' style={{width:50}} alt="profile"/>
                <h3 className='mt-3'> Name: <span>Javeria</span></h3>
                <h3 className='mt-3'> Age: <span>23yrs</span></h3>
                <p> <MailOutlineIcon/> Email: <span>Javeria</span></p>
                <p> <WorkIcon/>Occupation:<span>Web Developer</span> </p>
                </div>
                <div className='right_view col-lg-6 col-md-6 col-12'>
                    <div className='add_btn'>
                        <NavLink to={`/Edit/${getuserdata._id}`}/><button className='btn btn-primary mx-2'><CreateIcon/></button>
                        <button className='btn btn-primary mx-2' onClick={()=>deleteuser(getuserdata._id)}><DeleteOutlineIcon/></button>
                    </div>
                <p> <PhoneAndroidIcon/> Phone: <span>+099999999999</span></p>
                <p> <LocationIcon/>Location:<span>Karachi</span> </p>
                <p> Description:<span>Lorem Ipsum</span> </p>
                </div>
            </CardContent>
      </Card>
    </div>
  )
}

export default Details
