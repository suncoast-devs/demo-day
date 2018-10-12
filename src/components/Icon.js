import React from 'react'

const ICONS = {
  down: 'fas fa-angle-double-down fa-2x',
  email: 'fas fa-envelope fa-2x',
  blog: 'fas fa-pen-fancy fa-2x',
  github: 'fab fa-github-alt fa-2x',
  twitter: 'fab fa-twitter fa-2x',
  linkedin: 'fab fa-linkedin fa-2x',
  portfolio: 'fas fa-briefcase fa-2x'
}

const Icon = ({ n }) => <i className={ICONS[n]} />

export default Icon
