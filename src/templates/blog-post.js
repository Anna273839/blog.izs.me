import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Taglist from '../components/taglist.js'

import yaml from "js-yaml"

export default ({ data }) => {
  const post = data.markdownRemark
  const front = post.frontmatter
  // XXX Link posts
  return (
    <Layout>
      <div class={`post ${front.type}`}>
        { (front.title) ? (<h1>{front.title}</h1>) : '' }
        <pre style={{ margin:0, overflow:"auto", width:"100%" }}>{
          yaml.dump(front)
        }</pre>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        { front.source ? (
          <p class="source">Source: <a href={front.source.url}>{
          front.source.title }</a></p> ) : '' }
        { front.via ? (
          <p class="via">Via: <a href={front.via.url}>{
          front.via.title || front.via.name }</a></p> ) : '' }
        { front.tags ? ( <Taglist tags={front.tags} /> ) : '' }

      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        # common fields
        title # optional!
        type # text, link, photo, chat, answer, quote, video, audio
        date
        slug # just the texty bit of the slug, not the gatsby "slug"
        tumblrid
        tags
        redirect_from # map from the tumblr urls

        # video content
        video {
          type
          url
          embed
        }

        # wont actually need this here once the plugin is doing its thing
        photos

        audio {
          album_art
          embed
          plays
          source_url
          track_name
          type
          url
        }

        # link posts
        link_url
        link_publisher

        source {
          title
          url
        }
        via {
          name
          title
          url
        }
      }
    }
  }
`
