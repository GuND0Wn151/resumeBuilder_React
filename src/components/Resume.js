import React from 'react'
import "./resume.css"


// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam consectetur, saepe quaerat, incidunt, atque voluptate dolorem illo modi dicta repudiandae consequatur inventore recusandae. Quas omnis nemo facere est non! At.



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
                  <div className="Educational_details">
                        <h2>Educational Details</h2>
                        <div className="edu">
                              <p>Secondary Education at {props.data.secondaryclg} in {props.data.secondaryspec} with a score of {props.data.secondarymarks}</p>
                              <p>Between {props.data.secondarystart} to {props.data.secondaryend}</p>
                              <p>{props.data.secondarydesc}</p>
                        </div>
                        <div className="edu">
                              <p>High School at {props.data.highclg} in {props.data.highspec} with a score of {props.data.highmarks}</p>
                              <p>Between {props.data.highstart} to {props.data.highend}</p>
                              <p>{props.data.highdesc}</p>
                        </div>
                  </div>
                  <div className="projectdetails">
                        <h2>Project Details</h2>
                        <p>Project Title: </p>
                        <p>Project Link: <a href="">{props.data.prjlink}</a></p>
                        <p>Project Discription: {props.data.linkedin}</p>
                  </div>
                  <div className="Social_Links">
                        <h2>Social Links</h2>
                        <p>Github:  <a href={props.data.github}>{props.data.github}</a></p>
                        <p>Linkedin Profile: <a href={props.data.linkedin}>{props.data.linkedin}</a></p>
                        <p>Portfolio Link:  <a href={props.data.protforlio}>{props.data.protforlio}</a></p>
                  </div>
                  <div className="Exp">
                        <h2>Experience and Certificates</h2>
                        <p>Experience details:  </p>
                        <p>{props.data.exp}</p>
                        <p>Certifications: </p>
                        <p>{props.data.cert}</p>
                        
                  </div>
                  </>
            );
      }else if (a===3){
            return(
                  <>
                  <div className="leftskills">
                        <div className="highlight">
                              <h2>Skills</h2>
                                    <div className='skillbox'><p><b>{props.data.skill1}</b></p>
                                    <div className="borderbtm1" id='skill'></div></div>
                                    <div className='skillbox'><p>{props.data.skill3}</p>
                                    <div className="borderbtm2" id='skill'></div></div>
                                    <div className='skillbox'><p>{props.data.skill2}</p>
                                    <div className="borderbtm3" id='skill'></div></div>
                              <h2 className='highlight' id='high'>Interests</h2>
                                    <div className='skillbox'><p>{props.data.interets1}</p>
                                    <div className="borderbtm2" id='skill'></div></div>
                                    <div className='skillbox'><p>{props.data.interets2}</p>
                                    <div className="borderbtm2" id='skill'></div></div>
                                    <div className='skillbox'><p>{props.data.interets3}</p>
                                    <div className="borderbtm3" id='skill'></div></div>
                              <h2 className='highlight' id='high'>Hobbies</h2>
                                    <div className='skillbox'><p>{props.data.Hobbies1}</p>
                                    <div className="borderbtm2" id='skill'></div></div>
                                    <div className='skillbox'><p>{props.data.Hobbies2}</p>
                                    <div className="borderbtm2" id='skill'></div></div>
                                    <div className='skillbox'><p>{props.data.Hobbies3}</p>
                                    <div className="borderbtm3" id='skill'></div></div>
                        </div>
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
                              {template(props,3)}
                              
                              </div>
                        </div>
                  </div>
                  
            </>
      )
}

export default resume
