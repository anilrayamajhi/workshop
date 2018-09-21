import React from 'react';
import _ from 'lodash';


let style = {
  heading: {
    fontSize: '21px'
  },
  info:{
    fontSize: '14px'
  }
}

var puke = (obj) => {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

const VideoDetail = ({video}) =>{
  if(!video){
    return (
      <div className="loadStyle col-sm-offset-4 col-md-4">
        <div className="text-center">Loading!!</div>
      </div>)
  }

  // const videoData = video.snippet;
  // const url = `https://www.youtube.com/embed/${}`

  return (
    <div className="video-detail col-md-8">
      {puke(video)}
      {/* <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={}></iframe>
      </div>
      <div className="details">
        <div style={style.heading}>{videoData.title}</div>
        <div style={style.info}>{videoData.description}</div>
      </div> */}
    </div>
  )
}

export default VideoDetail;
