import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Register = () => {
    
    const [inpVal , setInp] = useState({
        name: "",
        email:"",
        password:"",
        age:"",
        mobile:"",
        work:"",
        add:"",
        desc:"",
        // city:"",
        // state:"",
        // zip_code:"",
        // form_check:"",
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
const addInpdata = async(e)=>{
e.preventDefault();

const { name,email,age,mobile,work,add,desc} = inpVal;
console.log(inpVal)
axios.post('/register', {
  name,email,age,mobile,work,add,desc
},
{headers:{
      "Content-Type":"application/json"
    }} )
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
    // const res = await fetch("/register",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //         body:JSON.stringify({
    //           name,email,age,mobile,work,add,desc
    //   })

    // }).then(async(res)=>{
    //   console.log(res)
    //   const data = await res.json(
    //   );
    //   console.log(data);
  
    //   if(res.status === 404 || !data) 
    //   {
    //     alert("error")
    //     console.log("error");
    //   }
    //   else{
    //     alert("data Added");
    //     console.log("data Added");
    //   }
    // }).catch((err)=> {
    //   console.log(err)
    // });

   
}
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
  {/* <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" name="l_name" value={inpVal.l_name} onChange={setdata} id="validationCustom02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div> */}
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
  {/* <div className="col-md-6">
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
  </div> */}
  <div className="col-12">
    <button className="btn btn-primary" onClick={addInpdata} type="submit">Submit form</button>
  </div>
</form>
        </div>
    );
};
export default Register;