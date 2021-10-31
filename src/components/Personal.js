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
                                    </div>
                              </div>
                              <div className="botombox">
                                    <div className="butonpara">
                                          <div><p>First Name</p><input onChange={handlerinput} type="text" name="data1" id="data1" ></input></div>
                                          <div><p>Middle Name</p><input onChange={handlerinput} type="text" name="data2" id="data2" ></input></div>
                                          <div><p>Last Name</p><input onChange={handlerinput} type="text" name="data3" id="" ></input></div>
                                    </div>
                                    <div className="butonpara">
                                          <div><p>Phone NO</p><input onChange={handlerinput} type="text" name="data4" id="" ></input></div>
                                         <div> <p>Email Address</p><input onChange={handlerinput} type="email" name="data5" id="" ></input></div>
                                         
                                    </div>
                                    <div className="butonsub">
                                          <div><button onClick={props.b1}>Back</button><button onClick={props.b2}>Next</button></div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Personal
