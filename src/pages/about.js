import React from 'react';
import Layout from '../components/Layout';
import aboutStyle from './About.module.scss';
import Img from 'gatsby-image';
import {graphql} from 'gatsby'
import {Helmet} from 'react-helmet';

export const query = graphql`
query {
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        
        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = (props) => {
    console.log(query)
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Martin Chammah | About</title>
                <meta name="description" content="About" />
                <meta name="keywords" content="Acerca de Martin Chammah" />
                </Helmet>
            <h2>Hola, me llamo Martin</h2>

            <div className={aboutStyle.main}>
            

            <div className={aboutStyle.izquierda}>
                <div className={aboutStyle.imagen}> <Img className={aboutStyle.img} fluid={props.data.file.childImageSharp.fluid} /></div>
                <div className={aboutStyle.texto}>

                <div className={aboutStyle.iconos}><i className="fas fa-map-marker-alt fa-sm"></i><p>Buenos Aires, Argentina</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-graduation-cap fa-sm"></i><p>Universidad de Buenos Aires</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-code fa-sm"></i><p>HTML, JS, CSS, noSQL</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-language fa-sm"></i><p>Castellano, Inglés, Portugués</p></div>
            


                </div>
          
            </div>
            <div className={aboutStyle.derecha}>
            <p>
            ¿Quién soy? Soy un Arquitecto recibido de la UBA, un programador web autodidacta, y mecánico del ITCA. 
            Hablo Ingles, Portugués, un poco de Francés y Español.</p>
            <p> Me encanta aprender cosas nuevas, sobre todo en cuanto a la programación, +
                y mi sueño es poder aplicar lo que vengo aprendiendo en el ambito profesional. </p>
                <p>Desde muy chico me intereso el HTML y el diseño web, pero lo deje de lado al comenzar la carrera de Arquitectura, 
                    y ahora lo estoy redescubriendo.
                </p>
                <p>En esta pagina vas a poder encontrar algunos de los proyectos que realize, fundamentalmente web-apps. Actualmente estoy fascinado con nodeJs y React.
                </p>
               
                <div className={aboutStyle.logoContainer}>
                <p>Algunas de las tecnologías que use son:</p>
                <img alt="javascript" className={aboutStyle.logo} src="./logos/javascript.svg" />
                <img alt="Gatsby" className={aboutStyle.logo} src="./logos/gatsby.svg" />
                <img alt="GraphQl" className={aboutStyle.logo} src="./logos/graphql.svg" />
                <img alt="React" className={aboutStyle.logo} src="./logos/react.svg" />
                <img alt="nodeJs" className={aboutStyle.logo} src="./logos/nodejs-icon.svg" />
                <img alt="Mongo" className={aboutStyle.logo} src="./logos/mongodb.png" />
                <img alt="Sass" className={aboutStyle.logo} src="./logos/sass-1.svg" />
                <img alt="HTML" className={aboutStyle.logo} src="./logos/html5.svg" />
                </div>

           
                <div className={aboutStyle.socialContainer}>
                <p>Comunicate conmigo! mandame un mensaje</p>
                <a className={aboutStyle.social} href="https://github.com/martin2844"><i className="fab fa-github"></i></a>
            <a className={aboutStyle.social}  href='https://www.linkedin.com/in/chammah/'><i className="fab fa-linkedin"></i></a>
            <a className={aboutStyle.social} href="https://www.youtube.com/channel/UC9nNIxlNohIoIrjtC4ueIOA"><i className="fab fa-youtube"></i></a>
                <a className={aboutStyle.social} href="https://www.twitter.com/codigomate"><i class="fab fa-twitter"></i></a>
                </div>


            </div>

            </div>
        </Layout>
    )
}

export default About