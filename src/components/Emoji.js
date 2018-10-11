import React from 'react'

const EMOJI = {
  love: 128156
}

const Emoji = ({ n }) => <span role="img" aria-label={n} dangerouslySetInnerHTML={{ __html: `&#${EMOJI[n]};` }} />

export default Emoji
