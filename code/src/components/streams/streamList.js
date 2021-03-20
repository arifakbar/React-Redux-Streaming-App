import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchStreams } from "../../actions/index";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/stream/edit/${stream.id}`} className="ui  button primary">Edit</Link>
          <Link to={`/stream/delete/${stream.id}`} className="ui  button negative">Delete</Link>
        </div>
      );
    }
  }
  renderStreams() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/stream/${stream.id}`} className="header">
            {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  renderCreateBtn(){
          if(this.props.isSignedIn){
                  return(
                          <div style={{textAlign:"right"}}>
                                  <Link to="/stream/new" className="ui button green"> Create Stream 
                                  </Link>
                          </div>
                  )
          }
  }
  render() {
    return (
      <div>
        <h3>Streams List</h3>
        <div className="ui celled list">{this.renderStreams()}</div>
        {this.renderCreateBtn()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streamReducer),
    currentUserId: state.AuthReducer.userId,
    isSignedIn:state.AuthReducer.isSignedIn
  };
};

export default connect(mapStateToProps, {
  fetchStreams: fetchStreams,
})(StreamList);
