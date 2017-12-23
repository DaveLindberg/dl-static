import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getSiteProps: () => ({
    title: 'Dave Lindberg Marketing & Design',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const { data: pages } = await axios.get('https://cdn.contentful.com/spaces/nduvinekhcuh/entries?access_token=cbf632c5d3957190b1494ee74e53a9a491551dc112ba4796a427af0e0a1af07c')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getProps: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getProps: () => ({
            post,
          }),
        })),
      },
      {
        path: '/pages',
        component: 'src/containers/Pages',
        getProps: () => ({
          pages,
        }),
        /* add children */
        children: pages.map(page => ({
          path: `/page/${page.title}`,
          component: 'src/containers/Page',
          getProps: () => ({
            page,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Html: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children } = this.props

      const sheet = new ServerStyleSheet()
      const newChildren = sheet.collectStyles(children)
      const styleTags = sheet.getStyleElement()

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400,600" rel="stylesheet"/>
            {styleTags}
          </Head>
          <Body>{newChildren}</Body>
        </Html>
      )
    }
  },
}
