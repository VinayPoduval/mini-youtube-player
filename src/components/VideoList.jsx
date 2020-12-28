import React, { Component } from 'react';
import VideoItem from './VideoItem.jsx';

class VideoList extends Component {
    render() { 
        return (
            <div className="ui relaxed divided list">
                {this.props.videos.map(video=>
                    <VideoItem
                        key={video.id.videoId}
                        onVideoSelect={this.props.onVideoSelect}
                        video={video} 
                    />
                )}
            </div>
        );
    }
}
 
export default VideoList;