import React from 'react'

function Education(props) {

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
                    <div className="topbox">
                              <div className="heading">
                                    <h2>Secondary Education</h2>
                              </div>
                                    <div className="butonpara">
                                          <div><p>College Name</p><input onChange={handlerinput}  type="text" name="secondaryclg" id="" ></input></div>
                                          <div><p>Specilization</p><input onChange={handlerinput} type="text" name="secondaryspec" id="" ></input></div>
                                          <div><p>Marks/Percentage</p><input onChange={handlerinput} type="text" name="secondarymarks" id="" ></input></div>
                                    </div>
                                    <div className="butonpara">
                                         <div> <p>Starting Year</p><input onChange={handlerinput} type="date" name="secondarystart" id="" ></input></div>
                                         <div> <p>Ending Year</p><input onChange={handlerinput} type="date" name="secondaryend" id="" ></input></div>
                                         <div> <p>Discription</p><input onChange={handlerinput} type="text" name="secondarydesc" id="" ></input></div>
                                    </div>
                        </div>
                              <div className="heading">
                                    <h2>High School</h2>
                              </div>
                              <div className="topbox">
                                    <div className="butonpara">
                                          <div><p>School Name</p><input onChange={handlerinput}  type="text" name="highclg" id="" ></input></div>
                                          <div><p>Board Type</p><input onChange={handlerinput} type="text" name="highspec" id="" ></input></div>
                                          <div><p>Marks/Percentage</p><input onChange={handlerinput} type="text" name="highmarks" id="" ></input></div>
                                    </div>
                                    <div className="butonpara">
                                         <div> <p>Starting Year</p><input onChange={handlerinput} type="date" name="highstart" id="" ></input></div>
                                         <div> <p>Ending Year</p><input onChange={handlerinput} type="date" name="highend" id="" ></input></div>
                                         <div> <p>Discription</p><input onChange={handlerinput} type="text" name="highdesc" id="" ></input></div>
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

export default Education
