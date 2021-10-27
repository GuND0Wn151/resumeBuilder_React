import React from 'react'
import Personal from './Personal'
function PersonalDetails(props) {
      return (

            <>
                  <div className="box">
                        <Personal b1={props.data1} b2={props.data2}/>
                  </div>
            </>

      )
}

export default PersonalDetails
