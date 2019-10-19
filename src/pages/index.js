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
        repo: 'https://github.com/martin2844'
    },
    {
        title: 'Bitcoin hoy',
        sinopsis: 'Una web app simple que muestra el valor al dia del bitcoin contra el ARS',
        desc: 'Hecha con un backend de node, el front end es simple HTML con Bootsrap. Interactua con la API usando calls de ajax',
        img: '../img/bitcoinhoy.jpg',
        live: 'bitcoinhoy.com.ar',
        repo: 'https://github.com/martin2844'
    }
]

console.log(pieces[0].title);

function renderFolio() {
  return  pieces.map(({title, sinopsis}) => {
        console.log(title);
        return (
            <div key={title + 'div'}>
            <p key={title} className='folio-title'>{title} · </p>
            <p key={title + 'sinopsis'} className='folio-sinopsis'>{sinopsis}</p>
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