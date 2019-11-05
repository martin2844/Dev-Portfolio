(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{209:function(e,a,o){"use strict";o.r(a);var t=o(0),n=o.n(t),i=o(204),s=(o(216),[{title:"Faduense",sinopsis:"Una web app en MERN stack para subir finales",desc:"Como no hay ninguna pagina funcionando para subir examenes de las carreras de la fadu, decidi crear una web app para que los alumnos puedan subirlos y que queden organizados. Es basicamente una API en NODE la cual se relaciona con un front end de react. La api escribe a una Base de datos de Mongo. Tiene AUTH con passport, y 0Auth con google. 80% completa.",img:"./portfolio/faduense.png",repo:"https://github.com/martin2844/faduense",idx:1},{title:"CodigoMate",sinopsis:"Un blog en gatsby + graphql para generar las paginas a partir de .md",desc:"Para probar la interfaz de Gatsby, y ver como se diferenciaba o como se asemejaba con React, decidi crear un simple blog de tutoriales, donde tengo un lugar para explayarme sobre las particularidades que me interesaron de la programación. No hay mejor forma para aprender que explicando, y eso es lo que apunto con el blog y canal de yt",img:"./portfolio/Mate.png",repo:"https://github.com/martin2844/codigoMate",live:"https://codigomate.com",idx:2},{title:"Dev Portfolio 1",sinopsis:"Un starter para Gatsby, el mismo que use para esta página",desc:"Mientras desarrollaba la web de faduense, decidi tomarme un tiempo para volver a Gatsby. Cree este Starter, que basicamente es un Portfolio minimalista, con el agregado de un Blog. Cada item del portfolio se pone en un array de JS, y a partir de un map se generan estos items automaticamente. También cuenta con una sección about.",img:"./portfolio/devPortfolio.png",repo:"https://github.com/martin2844/gatsby-starter-dev-portfolio",live:"https://martin2844.github.io/gatsby-starter-dev-portfolio/",idx:3},{title:"ejs blog",sinopsis:"Un blog hecho con node y mongoDB, usando como templeting EJS",desc:"Hecho con un backend de node, el front end es simple HTML, con templating en EJS, sumado a Bootstrap 4. Diseño responsive. Las caracteristicas principales que implemente son Autorización de usuarios con Passport, mongoose para el CRUD, pagination para los posts. Función de Archivo, función de filtro por tags y función de busqueda por palabras.",img:"./portfolio/ejs-blog.png",repo:"https://github.com/martin2844/ejs-blog",live:"https://my-ejs-blog.herokuapp.com/",idx:4},{title:"ejs - TODO",sinopsis:"Una Todo list - integrando lo basico de Node + MongoDB",desc:"Hecha con un backend de node, el front end es simple HTML con Bootstrap 4. Interactua con una base mongoDB Atlas. De esa manera demostramos simplemente el CRUD con mongo, a partir de una interfaz simple",img:"./portfolio/EJS.png",repo:"https://github.com/martin2844/ejs-todo-list",live:"https://my-ejs-todo-list.herokuapp.com",idx:5},{title:"Bitcoin hoy",sinopsis:"Una web app simple que muestra el valor al dia del bitcoin contra el ARS, y lo diferencia con el valor del dia anterior.",desc:"Node JS puro, y el front end muy simple HTML con Bootstrap 4. Interactua con la API de un sitio de BITCOIN usando calls de ajax, con promesas. Podria mejorarse usando async await.",img:"./portfolio/bitcoin.png",live:"bitcoinhoy.com.ar",repo:"https://github.com/martin2844/bitcoinHoy",idx:6}]),r=o(205);a.default=function(){return n.a.createElement(i.a,null,n.a.createElement(r.Helmet,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Martin Chammah | Portfolio"),n.a.createElement("meta",{name:"description",content:"Portfolio"}),n.a.createElement("meta",{name:"keywords",content:"Portfolio personal Martin Chammah"})),n.a.createElement("h1",{className:"opener"},"Me gusta programar"),n.a.createElement("p",{className:"subtitle"},"Estos son algunos de los proyectos realizé por ahora. Mucho Javascript, algo de css. Fascinado por React."),s.map((function(e){var a=e.title,o=e.sinopsis,t=e.idx,i=e.desc,s=e.repo,r=e.live,l=e.img;return console.log(a),n.a.createElement("div",{key:"div"+t,className:"tab"},n.a.createElement("input",{key:"index"+t,type:"checkbox",id:t+a}),n.a.createElement("label",{key:"label"+t,className:"tab-label",for:t+a},"  ",n.a.createElement("span",{key:"pTit"+t,className:"folio-title"},a," "),n.a.createElement("span",{key:"dot"+t,className:"folio-title"},"· "),n.a.createElement("span",{key:"pSinop"+t,className:"folio-sinopsis"},o)),n.a.createElement("div",{key:"tab"+t,class:"tab-content"},n.a.createElement("img",{alt:"nicasia",src:l}),i,n.a.createElement("span",{className:"repolinks",key:"repo"+t},n.a.createElement("a",{key:"repoLink"+t,href:s},"Github Repo")),r?n.a.createElement("span",{className:"repolinks",key:"live"+t},n.a.createElement("a",{key:"liveLink"+t,href:r},"Check it live")):null))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6ee60cb63f44c78852d5.js.map