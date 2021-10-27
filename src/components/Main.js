import React,{useState} from "react";
import Educationaldetails from "./Educationaldetails";
import PersonalDetails from "./PersonalDetails";
import Achivements from "./Achivements";
function Main() {
      const buttonhanlder1=()=>{
            setpageno(pageno+1)
            if (pageno>2){
                  setpageno(0)
            }

      }
      const buttonhanlder2=()=>{
            setpageno(pageno-1)
            if (pageno<0){
                  setpageno(2)
            }

      }
      const [pageno, setpageno] = useState(0)
      let page;
      if (pageno === 0){
            page=<PersonalDetails data1={buttonhanlder1} data2={buttonhanlder2}/>
      }
      else if (pageno===1){
            page=<Educationaldetails data1={buttonhanlder1} data2={buttonhanlder2}/>
      }
      else{
            page=<Achivements data1={buttonhanlder1} data2={buttonhanlder2}/>
      }
      return (
            <div>
                  
                  <div className="maincontianer">

                        {page}
                        <div className="buttonbox">
                              <button onClick={buttonhanlder1} >Click Me plz</button>
                        </div>
                  </div>
                  
            </div>
      )
}

export default Main
