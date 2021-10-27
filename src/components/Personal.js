import React from 'react'
import "./index.css"
function Personal(props) {
      return (
            <>
                  <div className="container-box">
                        <div className="container">
                              <div className="topbox">
                                    <div className="butonpara">
                                          <div><p>First Name</p><input type="text" name="" id="" ></input></div>
                                          <div><p>Middle Name</p><input type="text" name="" id="" ></input></div>
                                          <div><p>Last Name</p><input type="text" name="" id="" ></input></div>
                                    </div>
                                    <div className="butonpara">
                                         <div> <p>Phone NO</p><input type="text" name="" id="" ></input></div>
                                         <div> <p>Email Address</p><input type="email" name="" id="" ></input></div>
                                    </div>
                              </div>
                              <div className="botombox">
                                    <div className="butonpara">
                                          <div><p>First Name</p><input type="text" name="" id="" ></input></div>
                                          <div><p>Middle Name</p><input type="text" name="" id="" ></input></div>
                                          <div><p>Last Name</p><input type="text" name="" id="" ></input></div>
                                    </div>
                                    <div className="butonpara">
                                          <div><p>Phone NO</p><input type="text" name="" id="" ></input></div>
                                         <div> <p>Email Address</p><input type="email" name="" id="" ></input></div>
                                         
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
