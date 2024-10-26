import React, { Component } from 'react'

export class Alert extends Component {
  render() {
    return (
      this.props.showAlert !== null && (
        <div className="alert alert-danger d-flex align-items-center mt-3 w-100" role="alert">
            <div>
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {this.props.showAlert.msg}
            </div>
        </div>
      )
    )
  }
}

export default Alert