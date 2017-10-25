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

  .inactive {
    display: grid;
    background-size: cover;
    background-position: center center;
    font-size: 1.2em;
    .message {
      display: none;
    }
    :hover {
      font-size: 2em;
      border: 1px solid white;
      background-color: rgba(0,0,0, .4);
      transition: background .5s;
      align-self: stretch;
      text-align: center;
      // align-items: center;
      h2 {
        height: 100%;
        padding: 0px;
        font-size: 2em;
      }
    }
  }
  .inactive h2, .active h2 {
    font-size: 1.2em;
    padding: 20px;
    margin: 0px;
    cursor: pointer;
    color: #ffffff;
    text-transform: capitalize;
    text-shadow: 2px 2px 4px #000;
  }

  .active {
    display: grid;
    background-size: cover;
    background-position: center center;
    grid-column: 1 / -1;
    grid-row-start: 1 ;
    grid-row-end: 5 ;
    transition: all 1s ease;
    z-index: 100;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: stretch;
    h2 {
      font-size: 2.5em;
      text-align: center;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      align-self: center;
    }
    .message {
      grid-column: 1 / -1;
      grid-row: 2 / -1;
      text-align: center;
      font-size: 1.5em;
      font-weight: 100;
    }
  }
  .active:hover {
    background-color: rgba(200,0,0, 0.5);
  }
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
