import React,{useState} from "react";
import Educationaldetails from "./Educationaldetails";
import PersonalDetails from "./PersonalDetails";
import Achivements from "./Achivements";
import Resume from "./Resume";
function Main() {
      const buttonhanlder1=()=>{
            setpageno(pageno+1)
            if (pageno>2){
                  setpageno(0)
            }

      }
      const [totaldata, settotaldata] = useState([])
      const buttonhanlder2=()=>{
            setpageno(pageno-1)
            if (pageno<0){
                  setpageno(2)
            }

      }
      const buttonhanlder3=()=>{
            setsubmit(1)

      }
      const [submit, setsubmit] = useState(0)
      const [pageno, setpageno] = useState(0)
      let page;
      if (pageno === 0){
            page=<PersonalDetails total={totaldata} totalset={settotaldata} data1={buttonhanlder1} data2={buttonhanlder2}/>
      }
      else if (pageno===1){
            page=<Achivements total={totaldata} totalset={settotaldata} data1={buttonhanlder3} data2={buttonhanlder2}/>
      }
      else{
            
            page=<Educationaldetails total={totaldata} totalset={settotaldata} data1={buttonhanlder1} data2={buttonhanlder2}/>
      }

      if (submit===1){
            page=<Resume data={totaldata} />
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
