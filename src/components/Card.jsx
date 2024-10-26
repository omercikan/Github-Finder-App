import React, { Component } from 'react'
import Img from '../img/user.png';

export class Card extends Component {
  render() {
    // const {login, avatar_url, html_url} = this.props.user;
    const {name, login, avatar_url, html_url, location, blog, company, created_at, twitter_username, bio, public_repos, followers, following} = this.props.userOther

    return (
      <div className='card-container mt-3 w-100'>
        <div className="card-top d-flex justify-content-between gap-5">
          <div className="card-top__user d-flex gap-3">
            <div className="card-img">
              <img src={avatar_url ? avatar_url : "https://res.cloudinary.com/dwyvwkzap/image/upload/v1729898000/admin_b4mqiy.png"} alt={name} height={120} className='rounded-circle'/>
            </div>

            <div className="card-info">
              <h2>
                <a href={html_url ? html_url : "https://github.com/omercikan"} target='_blank' rel='noreferrer' className='username'>{name ? name : "Ömer Çıkan"}</a>
              </h2>
              <h3>{login ? "@" + login : "@omercikan"}</h3>
              <p className='desc'>{bio}</p>
            </div>
          </div>

          <div className="card-top__date pe-3">
            <time>{created_at}</time>
          </div>
        </div>

        <div className="card-infos d-flex justify-content-center gap-5 my-4">
          <div className="card-infos__item">
            <span>Depolar</span>
            <span>{public_repos ? public_repos : "11"}</span>
          </div>

          <div className="card-infos__item">
            <span>Takipçiler</span>
            <span>{followers ? followers : 0}</span>
          </div>

          <div className="card-infos__item">
            <span>Takip edilen</span>
            <span>{following ? following : 0}</span>
          </div>
        </div>

        <div className="card-contact">
          <div className="contact-item">
            <i className="bi bi-geo-alt-fill"></i>
            <span className='card-text'>{location ? location : 'Bulunamadı'}</span>
          </div>

          <div className="contact-item">
            <i className="bi bi-buildings-fill"></i>
            <span className='card-text'>{company ? company : 'Bulunamadı'}</span>
          </div>

          <div className="contact-item">
            <i className="bi bi-twitter-x"></i>
            <span className='card-text'>{twitter_username ? twitter_username : 'Bulunamadı'}</span>
          </div>

          <div className="contact-item">
            <i className="bi bi-link-45deg"></i>
            <span className='card-text'>{blog ? blog : 'Bağlantı buluanamadı'}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Card