import React from "react";
import { Field,reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from './streamForm';

class StreamCreate extends React.Component {
  onFormSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div style={{ paddingTop: "20px" }}>
        <h3 className="heading">Create New Stream</h3>
        <StreamForm onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}
export default connect(null,{
  createStream:createStream
})(StreamCreate);
