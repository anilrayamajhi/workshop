import React from 'react';
import VideoListItem from './video_list_item';

var puke = (obj) => {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}


const VideoList = (props) =>{
  // const videoItems = props.videos.map((video) =>{
  //   return (
  //     <VideoListItem
  //       onVideoSelect = "a"
  //       key="1"
  //       video="b" />
  //   )
  // })

  return (
    <ul className="col-md-4 list-group">
      {/* {puke(props)} */}
      {/* {videoItems} */}
    </ul>
  )
}

export default VideoList;
