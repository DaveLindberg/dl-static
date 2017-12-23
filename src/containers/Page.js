import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

export default getRouteProps(({ page }) => (
  <div>
    <Link to="/pages/">{'<'} Back</Link>
    <br />
    <h3>{page.title}</h3>
    <p>{page.body}</p>
  </div>
))
