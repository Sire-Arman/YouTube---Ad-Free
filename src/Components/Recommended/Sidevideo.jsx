import React from 'react'

function Sidevideo(props) {
  return (
    <div className="side-video-list">
            <img src={props.src} alt="" />
            <div className="vid-info">
                <h4>{props.title}</h4>
                <p>{props.channel}</p>
                <p>{props.views} views &bull; {props.time} </p>
            </div>
        </div>
  )
}

export default Sidevideo