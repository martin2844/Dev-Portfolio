import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from 'gatsby'


const Blog = () => {
    const postsQuery = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
          edges{
            node {
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `)
    
    const posts = postsQuery.allMarkdownRemark.edges.map((posts) => {

        return ( <ul>
                <h1>{posts.node.frontmatter.title}</h1> 
                <p>{posts.node.frontmatter.date}</p>
                </ul>
        )
        
    })

    
    
return (
    <Layout>
    
        <h1>blog</h1>
           {posts}
    </Layout>
)
};

export default Blog;
