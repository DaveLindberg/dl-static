/* Duped from Post.js */

/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

export default getRouteProps(({ posts }) => (
  <div>
    <h1>Content Pages</h1>
    <br />


    All pages:
    <ul>
      {pages.map(page => (
        <li key={page.id}>
          <Link to={`/pages/page/${page.id}/`}>{page.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
