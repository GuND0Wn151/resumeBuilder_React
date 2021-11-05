import React from 'react'
import "./index.css"
function Personal(props) {

      //const [data, setdata] = useState([])
      const handlerinput=(val)=>{

            props.setdata({
                 ...props.data,
                  [val.target.name]:val.target.value,
                  
                  
            })
      }
      
      return (
            <>
                  <div className="container-box">
                        <div className="container">
                        <div className="heading">
                                    <h2>Personal Details</h2>
                        </div>
                              <div className="topbox">
                                    <div className="butonpara">
                                          <div><p>First Name</p><input onChange={handlerinput}  type="text" name="FirstName" id=""   required></input></div>
                                          <div><p>Middle Name</p><input onChange={handlerinput} type="text" name="Middlname" id=""  required></input></div>
                                          <div><p>Last Name</p><input onChange={handlerinput} type="text" name="LastName" id=""  required></input></div>
                                    </div>
                                    <div className="butonpara">
                                         <div> <p>Phone NO</p><input onChange={handlerinput} type="text" name="Phone" id=""  required></input></div>
                                         <div> <p>Email Address</p><input onChange={handlerinput} type="Email" name="Email" id=""  required></input></div>
                                         <div> <p>Date Of Birth</p><input onChange={handlerinput} type="date" name="dob" id=""  required></input></div>
                                    </div>
                              </div>
                        <div className="heading">
                              <h2>Social Links</h2>
                        </div>
                              <div className="botombox">
                                    <div className="listdata">
                                          <div id="ds">
                                                <div id='ds1'><p>Github Profile:= </p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="github" id="data1"  required></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Linkedin Profile:= </p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="linkedin" id="data2"  required></input></div>
                                          </div>
                                          <div id="ds">
                                                
                                                <div id='ds1'><p>Portforlio Link:= </p></div><div  id='ds2'><input onChange={handlerinput} type="text" name="protforlio" id=""  required></input></div>
                                          </div>
                                    </div>
                                    <div className="listdata">
                                          {/* <div id="ds">
                                                <div id='ds1'><p>Portforlio Link</p></div><div  id='ds2'><input onChange={handlerinput} type="text" name="protforlio" id=""  required></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Facebook Id</p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="email" name="facebook" id=""  required></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Instagram Profile</p></div >
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="instagram" id=""  required></input></div>
                                          </div> */}
                                          <div id="ds">
                                                <div id='ds1'><p>Experiences:- </p></div >
                                                <textarea onChange={handlerinput} name="exp" id="" cols="40" rows="5"></textarea>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Certificates:- </p></div >
                                                <textarea onChange={handlerinput} name="cert" id="" cols="40" rows="5"></textarea>
                                          </div>
                                    </div>
                                    
                              </div>
                              <div className="butonsub">
                                          <div><button  onClick={props.b1}>Back</button><button onClick={props.b2}>Next</button></div>
                                          
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Personal
