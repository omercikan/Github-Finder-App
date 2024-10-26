import React, { Component } from 'react'

export class Loader extends Component {
  render() {
    return (
        <div className="spinner-wrapper w-100 mt-3">
            <div className="spinner-grow text-white">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
  }
}

export default Loader