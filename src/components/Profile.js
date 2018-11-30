import React from 'react'
import Icon from './Icon'

const Profile = ({ name, tagline, bio, email, links, hireable, proforma }) => (
  <article className="student-profile">
    <div className="primary">
      <figure>
        <img src={`/photos/${name.split(' ')[0].toLowerCase()}.png`} alt="" />
      </figure>
      <div className="content">
        <div className="name-title">
          <h3>{name}</h3>
          <h4 dangerouslySetInnerHTML={{ __html: tagline }} />
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
                  <a href={links[platform]} target="_blank" rel="noopener noreferrer">
                    <Icon n={platform} />
                  </a>
                </li>
              )
          )}
        </ul>
      </nav>
      {hireable && (
        <span className="hireable">
          <a href={`mailto:${email}`}>Available for Hire</a>
        </span>
      )}
      {proforma && <span className="proforma">Proforma Beneficiary</span>}
    </footer>
  </article>
)

export default Profile
