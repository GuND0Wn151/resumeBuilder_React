import React from 'react'
import Acheive from './Acheive'
function Achivements(props) {
      return (
            <>
                  <div className="box">
                        <Acheive  b1={props.data1} b2={props.data2}  data={props.total} setdata={props.totalset} />
                  </div>
            </>
      )
}

export default Achivements
