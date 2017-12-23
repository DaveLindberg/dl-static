/* Duped from Blog.js *//* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

export default getRouteProps(({ pages }) => (
  <div>
    <h1>Content Pages</h1>
    <br />
    All pages:
    <ul>
      {pages.map(page => (
        <li key={page.title}>
          <Link to={`/pages/${page.title}/`}>{page.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
