import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
//
import Routes from 'react-static-routes'

injectGlobal`
  body {
    font-family: 'Montserrat', sans-serif;
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

.main{
  grid-column: 1 / -1;
  grid-row: 3 / -1;

}

  .inactive {
    display: grid;
    background-size: cover;
    background-position: center center;
    font-size: 1.2em;
    grid-template-columns: 1fr 1em;
    grid-template-rows: 1fr;
    overflow: hidden;

    .color-overlay {
      background-color: rgba(0,0,0, .0);
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      display: grid;
      min-height: 0px;
    }
    .closer, p, a {
      display: none;
    }
    :hover {
      font-size: 1.2em;
      border: 1px solid white;
      align-self: stretch;
      text-align: center;
      // align-items: center;
      .color-overlay {
        background-color: rgba(0,0,0, .4);
        transition: background .5s;
        padding: 0em;
      }
      h2 {
        height: 100%;
        padding: 0px;
        font-size: 2em;
        grid-row: 2 / 3;
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
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    background-size: cover;
    background-position: center center;
    transition: all 1s ease;
    z-index: 100;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: stretch;

    .color-overlay {
      grid-column: 1 / 2;
      grid-row: 1 / -1;
      padding: 0em;
      display: grid;
      grid-template-columns: 1fr 1em;
      grid-template-rows: 1em 3fr 1fr 2fr;
      background-color: rgba(0,0,0, .4);
      transition: background .5s;
    }
    .closer {
      display: block;
      padding: 1em;
      cursor: pointer;
      grid-column: 2 / -1;
      grid-row: 1 / 2;
      justify-self: end;
    }

    h2 {
      font-size: 2.5em;
      text-align: center;
      padding: 0 4em;
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      align-self: center;
    }
    p {
      grid-column: 1 / -1;
      grid-row: 3 / 4;
      padding: 0 4em;
    }
    a {
      grid-column: 1 / -1;
      grid-row: 4 / -1;
      align-item: center;
      align-self: start;
      justify-self: center;
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
