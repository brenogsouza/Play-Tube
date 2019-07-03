import React, { Component } from "react";
import { List, Image, Dimmer, Loader } from "semantic-ui-react";
import { connect } from 'react-redux'

class VideoList extends Component {
  
  renderVideo(video) {
    return(
      <List animated verticalAlign="middle" key={video.etag}>
          <List.Item>
            <Image src={video.snippet.thumbnails.default.url} />
            <List.Content>
              <List.Header>{video.snippet.title}</List.Header>
            </List.Content>
          </List.Item>
      </List>
    )
  }

  render(){
    return (
      <div className="video-list">
        {
          this.props.loading && (<Dimmer active>
            <Loader>Loading . . .</Loader>
          </Dimmer>)
        }
        {
          this.props.video.map(video => {
            console.log('myVideo', video)
            return this.renderVideo(video)
          })
        }
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    video: state.searchVideoReducer.video,
    loading: state.searchVideoReducer.loading,
    error: state.searchVideoReducer.error
  }
}

export default connect(mapStateToProps, null)(VideoList)
