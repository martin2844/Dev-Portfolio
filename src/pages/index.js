import React from "react";
import Layout from '../components/Layout';
import './index.styles.scss';
import portfolioItems from '../components/portfolio-items';
import {Helmet} from 'react-helmet';

function renderFolio() {
  return  portfolioItems.map(({title, sinopsis, idx, desc, repo, live,img}) => {
        console.log(title);
        return (
           

            <div key={'div' + idx} className="tab">
            <input key={'index' + idx}  type="checkbox" id={idx + title}/>
            <label key={'label' + idx}  className="tab-label" for={idx + title}>  <span key={'pTit' + idx} className='folio-title'>{title} </span>
            <span key={'dot' + idx} className='folio-title'>· </span>
                    <span  key={'pSinop' + idx} className='folio-sinopsis'>{sinopsis}</span></label>
            <div key={'tab' + idx} class="tab-content">
            <img alt="nicasia" src={img}/>
            {desc}
            <span className="repolinks" key={'repo' + idx}><a key={'repoLink' + idx} href={repo}>Github Repo</a></span>
            
            {live ? <span className="repolinks" key={'live' + idx}><a key={'liveLink' + idx} href={repo}>Check it live</a></span> : null }


            </div>
            </div>


        )
    })
}

const Index = () => {

    
    return (
        <Layout>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Martin Chammah | Portfolio</title>
                <meta name="description" content="Portfolio" />
                <meta name="keywords" content="Portfolio personal Martin Chammah" />
                </Helmet>
            <h1 className="opener">Me gusta programar</h1>
            <p className="subtitle">Estos son algunos de los proyectos realizé por ahora. Mucho Javascript, algo de css. Fascinado por React.</p>
            {renderFolio()}
        </Layout>
    )
}

export default Index