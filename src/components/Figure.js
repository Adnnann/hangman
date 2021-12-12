import React from 'react'

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length

  return (
    <svg height="100px" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="40" y1="10" x2="100" y2="10" />
      <line x1="100" y1="10" x2="100" y2="30" />
      <line x1="40" y1="10" x2="40" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      {errors > 0 &&
        <circle cx="100" cy="40" r="10" />
      }
      {/* <!-- Body --> */}
      {errors > 1 &&
        <line x1="100" y1="50" x2="120" y2="70" />
      }
      {/* <!-- Arms --> */}
      {errors > 2 &&
        <line x1="100" y1="50" x2="80" y2="70" />
      }
      {errors > 3 &&
        <line x1="100" y1="50" x2="100" y2="90" />
      }
      {/* <!-- Legs --> */}
      {errors > 4 &&
        <line x1="100" y1="90" x2="140" y2="120" />
      }
      {errors > 5 &&
        <line x1="100" y1="90" x2="60" y2="120" />
      }
    </svg>
  )
}

export default Figure
