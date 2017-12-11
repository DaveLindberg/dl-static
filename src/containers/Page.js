import React from 'react'
import { getRouteProps, Link, Head } from 'react-static'
//

export default getRouteProps(({ page }) => (
  <div>
    <Head>
      <title>{page.title} | Dave Lindberg Marketing &amp; Design</title>
    </Head>
    <Link to="/home/">{'<'} Back</Link>
    <br />
    <h3>{page.title}</h3>
    <p>{page.body}</p>
  </div>
))
