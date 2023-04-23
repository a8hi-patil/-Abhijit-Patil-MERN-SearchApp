import React from 'react'

const Addcard = (props) => {
    return (
        <div className="card">
            {/* <img src="https://imageio.forbes.com/specials-images/dam/imageserve/43382149/960x0.jpg?format=jpg&width=960" height={"350px"} width={"350px"} /> */}
            <img src={props.img} height={"350px"} width={"350px"} />
            <div className="container">
                <h4><b>{props.companyName}</b></h4>
                <p>   {props.headline ? props.headline : null}</p>
                <p> {props.desc ? props.desc:null} </p>
            </div>

        </div>
    )
}

export default Addcard