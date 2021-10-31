import React,{ useState } from 'react'
import "./index.css"
function Personal(props) {
      
      const [data, setdata] = useState([])
      const handlerinput=(val)=>{
            
            
            setdata({
                 ...data,
                  [val.target.name]:val.target.value,
                  
                  
            })
            console.log(data)
      }

      return (
            <>
                  <div className="container-box">
                        <div className="container">
                              <div className="topbox">
                                    <div className="butonpara">
                                          <div><p>First Name</p><input onChange={handlerinput}  type="text" name="FirstName" id="" ></input></div>
                                          <div><p>Middle Name</p><input onChange={handlerinput} type="text" name="Middlname" id="" ></input></div>
                                          <div><p>Last Name</p><input onChange={handlerinput} type="text" name="LastName" id="" ></input></div>
                                    </div>
                                    <div className="butonpara">
                                         <div> <p>Phone NO</p><input onChange={handlerinput} type="text" name="Phone" id="" ></input></div>
                                         <div> <p>Email Address</p><input onChange={handlerinput} type="email" name="Email" id="" ></input></div>
                                         <div> <p>Date Of Birth</p><input onChange={handlerinput} type="date" name="dob" id="" ></input></div>
                                    </div>
                              </div>
                              <div className="botombox">
                                    <div className="listdata">
                                          <div id="ds">
                                                <div id='ds1'><p>Github Profile </p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="github" id="data1" ></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Linkedin Profile</p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="linkedin" id="data2" ></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Twitter Id</p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="twitter" id="" ></input></div>
                                          </div>
                                    </div>
                                    <div className="listdata">
                                          <div id="ds">
                                                <div id='ds1'><p>Portforlio Link</p></div><div  id='ds2'><input onChange={handlerinput} type="text" name="protforlio" id="" ></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Facebook Id</p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="email" name="facebook" id="" ></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Instagram Profile</p></div >
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="data5" id="" ></input></div>
                                          </div>
                                    </div>
                                    
                              </div>
                              <div className="butonsub">
                                          <div><button onClick={props.b1}>Back</button><button onClick={props.b2}>Next</button></div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Personal
