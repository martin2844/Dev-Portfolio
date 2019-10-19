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
    }
]

console.log(pieces[0].title);

function renderFolio() {
  return  pieces.map(({title, sinopsis, idx, desc}) => {
        console.log(title);
        return (
           

            <div key={'div' + idx} className="tab">
            <input key={'index' + idx}  type="checkbox" id={idx + title}/>
            <label key={'label' + idx}  className="tab-label" for={idx + title}>  <p key={'pTit' + idx} className='folio-title'>{title} · </p>
                    <p  key={'pSinop' + idx} className='folio-sinopsis'>{sinopsis}</p></label>
            <div key={'tab' + idx} class="tab-content">
            {desc}


            </div>
            </div>


        )
    })
}

const Index = () => {
    return (
        <Layout>
            
            
            <p>tHIS IS THE MAIN CONTENT</p>
            {renderFolio()}
        </Layout>
    )
}

export default Index