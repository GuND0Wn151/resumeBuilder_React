import React from 'react'
import "./resume.css"
const template=(props,a)=>{
      if (a===1){
      return(
            <>
            <div className="nameheading">
                  <h1>{props.data.FirstName}</h1>
                  <h1>{props.data.Middlname}</h1>
                  <h1>{props.data.LastName}</h1>
                  
            </div>
            <div className='infoheading'>
                  <p><b>ph no:- {props.data.Phone}</b></p>
                  <p><b>Email:- {props.data.Email}</b></p>
            </div>
            </>
      );}
      else if (a===2){
            return(
                  <>

                  <div className="aboutmedata">
                        <h2>About Me</h2>
                        <p>
                              {props.data.aboutme}
                        </p>
                  </div>
                  </>
            );
      }
}




function resume(props) {
      console.log(props.data);

      return (
            <>
                  <div className="resumepage">
                        <div className="heading1">
                              {template(props,1)}
                        </div>
                        <div className="data">
                              <div className="leftresume">
                              {template(props,2)}
                              </div>
                              <div className="rightresume">

                              </div>
                        </div>
                  </div>
                  
            </>
      )
}

export default resume
