import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
//
import Routes from 'react-static-routes'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: green;
    font-weight: 100;
  }

  nav {
    display: grid;
    grid-template-columns: 1fr 2fr;
    background: #fff;
    padding: 1rem 2rem;

    div {
      justify-self: end;
    }
    a {
      color: green;
      padding: 1rem;
      display: inline-block;
    }
  }

  .content {
    padding: 1rem;


  }
`

export default () => (
  <Router>
    <AppStyles>
      <nav>
        <Link to="/" className="home">Dave Lindberg Marketing & Design</Link>
        <div>
          <a href="/#marketing">Marketing</a>
          <a href="/#design">Design</a>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <a href="tel:802-282-3368">802 282-3368</a>
        </div>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)
