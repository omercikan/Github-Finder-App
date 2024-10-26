import React, { Component } from 'react'

export class Error extends Component {
  render() {
    return (
    this.props.showError !== null && (
        <div className="alert alert-danger d-flex align-items-center mt-3 w-100" role="alert">
          <div>
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {this.props.showError.err}
          </div>
        </div>
    ));
  }
}

export default Error;