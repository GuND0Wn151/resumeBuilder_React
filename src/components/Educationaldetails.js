import React from 'react'
import Education from './Education'
function Educationaldetails(props) {
      return (
            <>
                  <div className="box">
                        <Education  b1={props.data1} b2={props.data2} data={props.total} setdata={props.totalset}/>
                  </div>
            </>
      )
}

export default Educationaldetails
