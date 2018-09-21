import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = process.env.REACT_APP_API_KEY;



class App extends Component {
  constructor(){
    super();

    this.state = {
      videos : [],
      selectedVideo: null
    };
    this.videoSearch('GNR')
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        }
      )
    })
  }

  render(){
    // const videoSearch = _.debounce(term => this.videoSearch(term), 500)

    return (
      <div>
          <div className="logo-container text-center"><img src="../Logo.png" /></div>
          {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> */}
          <div >
            {/* <VideoDetail video={this.state.selectedVideo} /> */}
            {/* <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} /> */}
          </div>
      </div>
    )
  }
}


export default App;
