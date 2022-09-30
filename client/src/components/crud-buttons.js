import React from "react";
import { NavLink } from "react-router-dom";

const CrudBtns = () => {
    return (
        <>
        {/* <td><button className="btn btn-success"><i className="fa-solid fa-eye"></i>  
        <NavLink to={`/Details/${element._id}`} className="btn btn-primary" role="button">
            Add Data
          </NavLink></button></td>  */}
      <td><button className="btn btn-primary"><i className="fa-regular fa-pen-to-square"></i></button></td>
      <td><button className="btn btn-danger"> <i className="fa-solid fa-trash"></i></button></td>
      </>
    );
};
export default CrudBtns;
