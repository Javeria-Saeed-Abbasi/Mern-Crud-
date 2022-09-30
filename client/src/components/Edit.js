import {React, useState} from 'react'
import { NavLink } from "react-router-dom";
const Edit = () => {
    const [inpVal , setInp] = useState({
        name: "",
        email:"",
        age:"",
        work:"",
        mobile:"",
        add:"",
        desc:"",

    })
    
    const setdata = (e)=> {
        console.log(e.target.value);
        const {name,value} = e.target;
        setInp((intialval)=>{
          return{
            ...intialval,
            [name]:value,
          }
        })
    }
    // const checkeddata = (e)=> {
    //   // const checked = e.target.checked;
    //   console.log(e.target.checked);
    //   const {name,value} = e.target;
    //   setInp((intialval)=>{
    //     return{
    //       ...intialval,
    //       [name]:value,
    //     }
    //   })
    // };
  return (
    <div className="container">
    <NavLink to="/">home</NavLink>
<form className="row g-3 needs-validation">
<div className="col-md-4">
    <label  htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" name="name" value={inpVal.name} onChange={setdata} id="validationCustom01" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
</div>

<div className="col-md-4">
    <label htmlFor="validationCustom11" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={inpVal.password} onChange={setdata} id="validationCustom11"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomEmail" className="form-label">Email</label>
    <div className="input-group has-validation">
      <input type="email" className="form-control" name="email" value={inpVal.email} onChange={setdata} id="validationCustomEmail" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a email.
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom06" className="form-label">Age</label>
    <input type="number" className="form-control" name="age" value={inpVal.age} onChange={setdata} id="validationCustom06"  required/>
    <div className="invalid-feedback">
      Please provide a valid Age.
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom07" className="form-label">Mobile</label>
    <input type="number" className="form-control" name="mobile" value={inpVal.mobile} onChange={setdata} id="validationCustom07"  required/>
    <div className="invalid-feedback">
      Please provide a valid Mobile.
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom08" className="form-label">Work</label>
    <input type="text" className="form-control" name="work" value={inpVal.work} onChange={setdata} id="validationCustom08"  required/>
    <div className="invalid-feedback">
      Please provide a valid Work.
    </div>
  </div>
  <div className="col-lg-6 mb-3">
  <label htmlFor="validationCustom09" className="form-label">Address</label>
  <textarea type="text" className="form-control" name="add" value={inpVal.add} onChange={setdata} rows="3" sid="validationCustom09"  required>
  </textarea>
</div>
<div className="col-lg-6 mb-3">
  <label htmlFor="validationCustom10" className="form-label">Description</label>
  <textarea type="text" className="form-control" name="desc" value={inpVal.desc} onChange={setdata} rows="3" id="validationCustom10"  required>
  </textarea>
</div>
<div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
</div>
  )
}

export default Edit;
