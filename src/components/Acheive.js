import React from 'react'

function Acheive(props) {
      
      const handlerinput=(val)=>{
            
            
            props.setdata({
                  ...props.data,
                   [val.target.name]:val.target.value,
                   
                   
             })
            //console.log(data3)
      }




      return (
            <>
                  <div className="container-box">
                        <div className="container">
                        <div className="topbox">
                              <div className="heading">
                                    <h2>Skills, Interests</h2>
                              </div>
                              <div className="skills">
                                    <div className="skilist">
                                          <p>Skills</p>
                                          <div><input onChange={handlerinput}  type="text" name="secondaryclg" id="" ></input></div>
                                          <div><input onChange={handlerinput}  type="text" name="secondaryclg" id="" ></input></div>
                                          <div><input onChange={handlerinput}  type="text" name="secondaryclg" id="" ></input></div>
                                    </div>
                                    <div className="skilist">
                                          <p>Interets</p>
                                          <div><input onChange={handlerinput}  type="text" name="secondaryclg" id="" ></input></div>
                                          <div><input onChange={handlerinput}  type="text" name="secondaryclg" id="" ></input></div>
                                          <div><input onChange={handlerinput}  type="text" name="secondaryclg" id="" ></input></div>
                                    </div>
                                    <div className="skilist">
                                          <p>Hobbies</p>
                                          <div><input onChange={handlerinput}  type="text" name="secondaryclg" id="" ></input></div>
                                          <div><input onChange={handlerinput}  type="text" name="secondaryclg" id="" ></input></div>
                                          <div><input onChange={handlerinput}  type="text" name="secondaryclg" id="" ></input></div>
                                    </div>
                              </div>
                        </div>
                        <div className="heading2">
                              <h2>Projects</h2>
                        </div>
                        <div className="botombox">
                                    <div className="listdata">
                                          <div id="ds">
                                                <div id='ds1'><p>Project Title</p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="github" id="prj1name" ></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Project Link</p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="linkedin" id="prj1link" ></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Description</p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="prj1desc" id="" ></input></div>
                                          </div>
                                    </div>
                                    <div className="listdata">
                                          <div id="ds">
                                                <div id='ds1'><p>Project Title</p></div><div  id='ds2'><input onChange={handlerinput} type="text" name="prj2name" id="" ></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Project Link</p></div>
                                                <div  id='ds2'><input onChange={handlerinput} type="email" name="prj2link" id="" ></input></div>
                                          </div>
                                          <div id="ds">
                                                <div id='ds1'><p>Description</p></div >
                                                <div  id='ds2'><input onChange={handlerinput} type="text" name="prj2desc" id="" ></input></div>
                                          </div>
                                    </div>
                                    
                              </div>  
                              
                              
                              
                              
                              
                              
                              <div className="butonsub">
                                          <div><button onClick={props.b2}>Back</button><button onClick={props.b1}>Submit</button></div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Acheive
