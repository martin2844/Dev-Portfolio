import React from "react";
import Layout from '../components/Layout';
import './index.styles.scss';

const pieces = [
    {
        title: 'Faduense',
        sinopsis: 'Una web app en Mern para subir finales',
        desc: 'Como no hay ninguna pagina funcionando para subir examenes de las carreras de la fadu, decidi bla bla',
        img: '../img/faduense.jpg',
        live: 'https://faduense.com',
        repo: 'https://github.com/martin2844',
        idx: 1
    },
    {
        title: 'Bitcoin hoy',
        sinopsis: 'Una web app simple que muestra el valor al dia del bitcoin contra el ARS',
        desc: 'Hecha con un backend de node, el front end es simple HTML con Bootsrap. Interactua con la API usando calls de ajax',
        img: '../img/bitcoinhoy.jpg',
        live: 'bitcoinhoy.com.ar',
        repo: 'https://github.com/martin2844',
        idx: 2
    },
    {
        title: 'ejs blog',
        sinopsis: 'Un blog hecho con node y mongoDB, usando como templeting EJS',
        desc: 'Hecha con un backend de node, el front end es simple HTML con Bootsrap. Interactua con la API usando calls de ajax',
        img: '../img/bitcoinhoy.jpg',
        repo: 'https://github.com/martin2844',
        idx: 3
    }
]

console.log(pieces[0].title);

function renderFolio() {
  return  pieces.map(({title, sinopsis, idx, desc, repo, live}) => {
        console.log(title);
        return (
           

            <div key={'div' + idx} className="tab">
            <input key={'index' + idx}  type="checkbox" id={idx + title}/>
            <label key={'label' + idx}  className="tab-label" for={idx + title}>  <span key={'pTit' + idx} className='folio-title'>{title} </span>
            <span key={'dot' + idx} className='folio-title'>· </span>
                    <span  key={'pSinop' + idx} className='folio-sinopsis'>{sinopsis}</span></label>
            <div key={'tab' + idx} class="tab-content">
            <img src='https://cdn.vox-cdn.com/thumbor/zqpf00bPZBpa4w9PylwrbmN40Ig=/0x0:1024x683/920x613/filters:focal(431x261:593x423):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59618085/8a6dafce2c43d574ff6e7ea9caa8a980_1024x683.0.png'/>
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