import React, { Component } from 'react'
import Emoji from './Emoji'
import Icon from './Icon'
import { ReactComponent as Banner } from '../images/banner.svg'
import { ReactComponent as Logo } from '../images/logo.svg'
import x from '../images/x.svg'
import proforma from '../images/proforma.png'
import malwarebytes from '../images/malwarebytes.png'
import Profile from './Profile'

import profiles from '../profiles.json'

class App extends Component {
  render() {
    profiles.sort(() => 0.5 - Math.random())
    profiles.sort(a => {
      if (a.hireable) return -1
      if (a.proforma) return 1
      return 0
    })
    return (
      <>
        <header className="app-header">
          <h1 className="banner">
            <Banner />
          </h1>
          <h2 className="subtitle">Cohort X Demo Day</h2>
          <time>
            October 12
            <sup>th</sup>, 2018
          </time>
          <img src={x} alt="Cohort X" height="120" />
          <footer>
            <Icon n="down" />
          </footer>
        </header>
        <section className="intro">
          <div container="true">
            <p>
              After their 12-week journey to becoming Full-Stack Developers, our students have grown their technical
              skills. These students have gone from little to no experience to learning HTML/CSS, JavaScript, React and
              then diving into .NET or Ruby on Rails to round out their full-stack understanding. We are proud to
              present to you our graduating students from Cohort X.
            </p>

            <h3>Interested in hiring a graduate?</h3>
            <p>
              All of our graduates are ready for their first jobs as junior developers. If you meet someone today who
              would be a great fit for your team, please feel free to reach out to them directly. If you want more
              information about how our career support program works or direct recommendations for your needs, please
              contact us at <a href="mailto:hello@theironyard.com">hello@suncoast.io</a>.
            </p>

            <h3>Interested in taking classes or learning more?</h3>
            <p>
              We are still accepting applications for our next cohorts begining October 22
              <sup>nd</sup> and January 28
              <sup>th</sup>.
            </p>
          </div>
        </section>
        <main>
          <section className="student-profiles" container="true">
            <header>
              <h2>Our Graduates</h2>
            </header>
            {profiles.map(profile => (
              <Profile key={profile.name} {...profile} />
            ))}
          </section>
          <section className="special-thanks">
            <div container="true">
              <h4>A very special thanks:</h4>
              <p>
                We would like to say a special thank you to PROforma for their continued support. PROforma has sent
                their employees through our program, provided mock interview opportunities for our students, and
                continues to be involved in helping us not only to continue our program but improve it.
              </p>
              <figure>
                <img src={proforma} alt="PROForma" height="48" />
              </figure>
            </div>
          </section>
          <section className="sponsor-feature">
            <div container="true">
              <p>
                We would also like to thank Malwarebytes, an active member of our Advisory Board, for providing food and
                beverages for all of us to enjoy and celebrate with the graduates.
              </p>
              <figure>
                <img src={malwarebytes} alt="Malwarebytes" height="64" />
              </figure>
            </div>
          </section>
        </main>
        <footer className="app-footer">
          <aside container="true">
            <figure className="logo">
              <Logo />
            </figure>
          </aside>
          <div className="copyright">
            <p container="true">&copy; 2018 Suncoast Developers Guild, Inc.</p>
          </div>
          <div className="love">
            <p container="true">
              Built with <Emoji n="love" /> in St Petersburg, Florida.
            </p>
          </div>
        </footer>
      </>
    )
  }
}

export default App
