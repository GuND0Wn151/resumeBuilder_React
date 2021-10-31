import React,{useState} from 'react'
import Personal from './Personal'
function PersonalDetails(props) {
      const [data, setdata] = useState([])


      const handlerinput=(val)=>{
            
            // const formdata=new FormData(val.target)
            // val.preventDefault();
            // for (let i of formdata.entries()){
            //       t[i[0]]=i[1]
            // }
            setdata({
                 ...data,
                  [val.target.name]:val.target.value,
                  
                  
            })
            console.log(data)
      }
      
      return (

            <>
                  <div className="box">
                        {/* <form onSubmit={handlerinput}> */}
                        {/* <input type="text"  name="name" onChange={handlerinput}/>text
                        <input type="text"  name="phone" onChange={handlerinput}/>text */}
                        {/* <button onClick={()=>console.log(data)}>here</button> */}
                        {/* </form> */}
                        <Personal b1={props.data1} b2={props.data2} datataking={handlerinput} data={data} setdata={setdata}/>
                  </div>
            </>

      )
}

export default PersonalDetails
