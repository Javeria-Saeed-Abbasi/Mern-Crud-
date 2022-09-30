import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CrudBtns from "./crud-buttons";
const axios = require("axios").default;


const Home = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    axios
      .get("/getuser")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    // await fetch("/getuser",{
    //   method:"GET",
    //   headers:{
    //     "Content-Type":"application/json"
    //   }

    // }).then(async(res)=>{
    //   console.log(res);

    //   const data = await res.json();
    //   console.log(data);

    //   if(res.status === 404 || !data)
    //   {
    //     console.log("error");
    //   }
    //   else{
    //     setUserdata(data)
    //     console.log("Get datA");
    //   }
    // }).catch((err)=> {
    //   console.log(err)
    // });
  };
  useEffect(() => {
    getdata();
  }, []);

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
    <div className="mt-5">
      <div className="container bg-light mx-3">
        <div className="add-btn mt-2 mb-2 mx-4 text-end">
          <NavLink to="/register" className="btn btn-primary" role="button">
            Add Data
          </NavLink>
        </div>
        <div className="table-data text-center table-responsive">
          <table className="table table-danger table-striped">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Job</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.work}</td>
                      <td>{element.mobile}</td>
                      <td className="d-flex justify-content-center">
                      <td><button className="btn btn-success"><i className="fa-solid fa-eye"></i>  
        <NavLink to={`/Details/${element._id}`} className="btn btn-primary" role="button">
            Add Data
          </NavLink></button>
          </td> 
          <td><button className="btn btn-danger"> <i className="fa-solid fa-trash"></i></button></td>
                      </td>
                    </tr>
                  </>
                );
              })}

              {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td className="d-flex justify-content-center">
      <CrudBtns/>
      </td>
    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>Larry the Bird</td>
      <td>Larry the Bird</td>
      <td className="d-flex justify-content-center">
      <CrudBtns/>
      </td>
    </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
