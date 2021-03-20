import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import Modal from "../Modal";
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions/index';

class StreamDelete extends React.Component {
  componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
  }
  actions = () => {
    return (
      <React.Fragment>
        <button onClick={ () => {this.props.deleteStream(this.props.match.params.id)} } className="ui negative button">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };
  showContent = () => {
          if(!this.props.stream){
                  return "Are you sure you want to delete this stream ?";
          }
          return `Are you sure you want to the stream with title : ${this.props.stream.title}`;
  }
  render() {
    return (
      <div>
        Delete Stream
        <Modal
          title="Delete the stream"
          content={this.showContent()}
          action={this.actions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
        return {stream:state.streamReducer[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{
        fetchStream:fetchStream,
        deleteStream:deleteStream
})(StreamDelete);
