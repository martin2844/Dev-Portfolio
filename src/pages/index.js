import React from "react";
import Layout from '../components/Layout';
import './index.styles.scss';
import portfolioItems from '../components/portfolio-items';


function renderFolio() {
  return  portfolioItems.map(({title, sinopsis, idx, desc, repo, live}) => {
        console.log(title);
        return (
           

            <div key={'div' + idx} className="tab">
            <input key={'index' + idx}  type="checkbox" id={idx + title}/>
            <label key={'label' + idx}  className="tab-label" for={idx + title}>  <span key={'pTit' + idx} className='folio-title'>{title} </span>
            <span key={'dot' + idx} className='folio-title'>· </span>
                    <span  key={'pSinop' + idx} className='folio-sinopsis'>{sinopsis}</span></label>
            <div key={'tab' + idx} class="tab-content">
            <img alt="nicasia" src='https://cdn.vox-cdn.com/thumbor/zqpf00bPZBpa4w9PylwrbmN40Ig=/0x0:1024x683/920x613/filters:focal(431x261:593x423):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59618085/8a6dafce2c43d574ff6e7ea9caa8a980_1024x683.0.png'/>
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
            
            <h1 className="opener">Me gusta programar</h1>
            <p className="subtitle">Estos son algunos de los proyectos realizé por ahora. Mucho Javascript, algo de css. Fascinado por React.</p>
            {renderFolio()}
        </Layout>
    )
}

export default Index