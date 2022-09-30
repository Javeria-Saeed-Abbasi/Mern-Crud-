import {React, useState} from 'react'
import { NavLink } from "react-router-dom";
const Edit = () => {
    const [inpVal , setInp] = useState({
        f_name: "",
        l_name: "",
        email:"",
        password:"",
        city:"",
        state:"",
        zip_code:"",
        form_check:"",
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
    const checkeddata = (e)=> {
      // const checked = e.target.checked;
      console.log(e.target.checked);
      const {name,value} = e.target;
      setInp((intialval)=>{
        return{
          ...intialval,
          [name]:value,
        }
      })
    };
  return (
    <div className="container">
    <NavLink to="/">home</NavLink>
<form className="row g-3 needs-validation">
<div className="col-md-4">
<label  htmlFor="validationCustom01" className="form-label">First name</label>
<input type="text" className="form-control" name="f_name" value={inpVal.f_name} onChange={setdata} id="validationCustom01" required/>
<div className="valid-feedback">
Looks good!
</div>
</div>
<div className="col-md-4">
<label htmlFor="validationCustom02" className="form-label">Last name</label>
<input type="text" className="form-control" name="l_name" value={inpVal.l_name} onChange={setdata} id="validationCustom02"  required/>
<div className="valid-feedback">
Looks good!
</div>
</div>
<div className="col-md-4">
<label htmlFor="validationCustom06" className="form-label">Password</label>
<input type="password" className="form-control" name="password" value={inpVal.password} onChange={setdata} id="validationCustom06"  required/>
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
<div className="col-md-6">
<label htmlFor="validationCustom03" className="form-label">City</label>
<input type="text" className="form-control" name="city" value={inpVal.city} onChange={setdata} id="validationCustom03"  required/>
<div className="invalid-feedback">
Please provide a valid city.
</div>
</div>
<div className="col-md-3">
<label htmlFor="validationCustom04" className="form-label">State</label>
<select className="form-select"  name="state" value={inpVal.state} onChange={setdata} id="validationCustom04" required>
<option value="DEFAULTVALUE" disabled >DEFAULTVALUE</option>
<option value="1">Apple</option>
<option value="2">Banana</option>
<option value="3">Cranberry</option>
</select>
<div className="invalid-feedback">
Please select a valid state.
</div>
</div>
<div className="col-md-3">
<label htmlFor="validationCustom05" className="form-label">Zip</label>
<input type="text" className="form-control" name="zip_code" value={inpVal.zip_code} onChange={setdata} id="validationCustom05"  required/>
<div className="invalid-feedback">
Please provide a valid zip.
</div>
</div>
<div className="col-12">
<div className="form-check">
<input type="checkbox" className="form-check-input" name="form_check" defaultChecked={true} value={inpVal.form_check} onChange={checkeddata} id="invalidCheck" required/>
<label className="form-check-label" htmlFor="invalidCheck">
Agree to terms and conditions
</label>
<div className="invalid-feedback">
You must agree before submitting.
</div>
</div>
</div>
<div className="col-12">
<button className="btn btn-primary" type="submit">Submit form</button>
</div>
</form>
</div>
  )
}

export default Edit
