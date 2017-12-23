import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
//
import Routes from 'react-static-routes'
var contentful = require('contentful')

/*
olive      #999900 // olive
gold       #CC9900
blue       #2D7173
orange     #B26330
red        #94353C
gray       #796969
light-grey #ADA0A0
*/


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
  }

  nav {
    display: grid;
    grid-template-columns: 1fr 2fr;
    background: #fff;
    padding: 1rem 2rem 0 ;

    div {
      justify-self: end;
    }
    a {
      color: #999900;
      padding: 1rem;
      display: inline-block;
      @media (max-width: 767px) {
        font-size: 16px;
        display: block;
        padding: .2rem 0;
      }
      :hover {
        color: #CC9900;
        font-weight: 400;
      }
    }
  }

  .content {
    padding: 0rem;
  }

  .main{
    grid-column: 1 / -1;
    grid-row: 3 / -1;

    h1 span {
      color: #ADA0A0;
      font-size: 80%;
    }
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
        @media (max-width: 767px) {
          font-size: 1.5em;
        }
      }
    }
  }
  .inactive h2, .active h2 {
    padding: 3% 7%;
    margin: 0px;
    cursor: pointer;
    color: #ffffff;
    text-transform: capitalize;
    text-shadow: 2px 2px 4px #000;
    @media (max-width: 767px) {
      padding: 0 0;
      text-align: center;
    }
  }


  .active {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    max-height: 100vh;
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
      max-height: inherit;
      overflow: scroll;
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
      font-size: 5em;
      color: #999900;
      text-align: center;
      padding: 0 4em;
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      align-self: center;
      @media (max-width: 767px) {
        font-size: 2em;
        padding: 0 0em;
        grid-row: 2 / 3;
      }
  }
    p {
      grid-column: 1 / -1;
      grid-row: 3 / 4;
      padding: 0 25%;
      font-weight: 300;
      text-shadow: 0px 0px 4px #000;
      @media (max-width: 767px) {
        font-size: 1em;
      }
    }
    a {
      grid-column: 1 / -1;
      grid-row: 4 / -1;
      align-item: center;
      align-self: start;
      justify-self: center;
      @media (max-width: 767px) {
        font-size: 1em;
        text-align: center;
        margin: 0 10%;
      }
    }
    a:hover {
      color: #999900 !important;
      border-color: #999900 !important;
      background: rgba(0,0,0, 0.8);
    }
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
