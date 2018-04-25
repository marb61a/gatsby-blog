import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../images/logo.png';

const HeaderWrapper = styled.div`
  background: rebeccapurple,
  margin-bottom: 1.45rem
`

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Blog"/>
        </Link>
      </h1>
    </div>
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
    </nav>
  </div>
)

export default Header
