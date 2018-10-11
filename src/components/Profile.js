import React from 'react'
import Icon from './Icon'

const Profile = ({ name, tagline, bio, links, hireable }) => (
  <article className="student-profile">
    <div className="primary">
      <figure>
        <img src={`/photos/${name.split(' ')[0].toLowerCase()}.jpg`} alt="" />
      </figure>
      <div className="content">
        <div className="name-title">
          <h3>{name}</h3>
          <h4>{tagline}</h4>
        </div>
        <div className="biography">
          <p>{bio}</p>
        </div>
      </div>
    </div>
    <footer container="true">
      <nav className="links">
        <ul>
          {Object.keys(links).map(
            platform =>
              links[platform] && (
                <li key={platform}>
                  <a href={links[platform]}>
                    <Icon n={platform} />
                  </a>
                </li>
              )
          )}
        </ul>
      </nav>
      {hireable && <span className="hireable">Available for Hire</span>}
    </footer>
  </article>
)

export default Profile
