import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const error = meta.touched && meta.error ? "error" : "";
    return (
      <div className={`field ${error}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onFormSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  render() {
    return (
      <div style={{ paddingTop: "20px" }}>
        <h3 className="heading">Create New Stream</h3>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Stream Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Stream Description "
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Enter title";
  }
  if (!formValues.description) {
    errors.description = "Enter description";
  }
  return errors;
};
export default reduxForm(
  {
    form: "streamForm",
    validate: validate,
  })(StreamForm);
