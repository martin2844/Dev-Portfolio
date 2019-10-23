import React from 'react';
import Layout from '../components/Layout';
import {Link, graphql, useStaticQuery} from 'gatsby'
import {Helmet} from 'react-helmet';


const Blog = () => {
    const postsQuery = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
          edges{
            node {
              frontmatter {
                title
                date
                sinopsis
              }
              fields {
                  slug
              }
            }
          }
        }
      }
    `)
    
    const posts = postsQuery.allMarkdownRemark.edges.map((posts) => {

        return ( <ul>
                <Link className='nodecor' to={`/blog/${posts.node.fields.slug}`}  >
                <h1 className="opener">{posts.node.frontmatter.title}</h1> 
                <p>{posts.node.frontmatter.date}</p>
                </Link>
                <p>{posts.node.frontmatter.sinopsis}</p>
                </ul>
        )
        
    })

    
    
return (
    <Layout>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Martin Chammah | Blog</title>
                <meta name="description" content="Blog" />
                <meta name="keywords" content="Blog personal Martin Chammah" />
                </Helmet>
    
        <h1 className="opener">blog...</h1>
           {posts}
    </Layout>
)
};

export default Blog;
