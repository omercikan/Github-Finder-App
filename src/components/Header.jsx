import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Header extends Component {
  themeMode = () => {
    const body = document.querySelector('body');
    document.querySelectorAll('body, .main-header, input, .card-container, .username, .desc, .card-top__date, .card-infos, .card-text').forEach((item) => item.classList.toggle('light'))

    if(body.classList.contains('light')) {
      document.getElementById('themeIcon').className = 'bi bi-moon-fill ms-1'
      document.getElementById('themeText').textContent = 'Koyu'
    } else {
      document.getElementById('themeIcon').className = 'bi bi-brightness-high-fill ms-1'
      document.getElementById('themeText').textContent = 'Açık'
    }
  }

  render() {
    return (
      <header className='main-header'>
        <h1>{this.props.brandName}</h1>
        <p onClick={this.themeMode}><span id='themeText'>Açık</span> <i className="bi bi-brightness-high-fill ms-1" id='themeIcon'></i></p>
      </header>
    )
  }
}

Header.defaultProps = {
  brandName: "Github Finder",
}

Header.propTypes = {
  brandName: PropTypes.string,
}

export default Header