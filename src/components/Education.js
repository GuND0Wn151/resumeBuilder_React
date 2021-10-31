import React from 'react'

function Education(props) {
      	return (
            <>
                <div className="container-box">
                    <div className="container">
                    	<div className="butonsub">
                            <div><button onClick={props.b1}>Back</button><button onClick={props.b2}>Next</button></div>
                        </div>
                    </div>
                </div>
            </>
      )
}

export default Education
