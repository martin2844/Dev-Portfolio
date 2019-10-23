---
title: 'Gatsby vs HTML5'
date:  '2019-10-23'
sinopsis: "¿Por qué usar Gatsby en vez del HTML tradicional?"


---

![html](./images/vs.png)

## ¿Por qué usar Gatsby en vez del HTML tradicional?

Para responder esto, conviene creo yo, que primero empezemos definiendo que es Gatsby.

“Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.”

Osea, gatsby es un framework basado en otro framework, React, que nos va ayudar a crear aplicaciones o paginas web muyyy rapidas, blazing fast! Suena muy bien.

Por que no React directamente? Bueno, si usamos create-react-app, directamente estariamos generando un producto similar al de gatsby.
Es decir una web estática, que puede o no interactuar con un server, pero todo se hace desde el lado del cliente, osea el que trabaja es el browser que estas usando.

Gatsby, tiene dos beneficios principales:

1. gatsby-link
2. gatsby-image

link precarga las paginas, lo que genera que cuando usamos un link interno de nuestra app se va a sentir muy rapido.
y gatsby image, implementa un monton de optimizaciones para la carga de imagenes, incluyendo cosas como lazy loading. Muy facil de implementar y de utilizar.

Entonces, decididamente para una web rapida, facil de armar, como un blog, o un sitio de portfolio, gatsby tiene muchas ventajas.
Carga rapido, se siente muy rapido, es liviana. Y ademas viene con algunas utilidades, como createPages Api, que va a generar paginas por ejemplo desde archivos markdown para un blog, o, para lo que parece ser favorito de muchos, desde un content manager como contentful.

**Finalmente, Gatsby vs HTML5? si....**
debería ser fácil de notar la gran diferencia, primero, todos los beneficios de JSX, y REACT.
Componentes que podemos volver a utilizar, manejo de estado con hooks o simplemente class components con state.
Y encima, todos los beneficios de la optimizacion que ya vienen incluidos con Gatsby.

Y arrancar nunca fue más facil.

Solo hay que correr en nuestra terminal

```
npm install -g gatsby-cli
```

y luego preferentemente con un starter, que ya viene con todo lo que necesitamos como por ejemplo el mas basico, el hello-world:
directo desde la consola:

```
gatsby new gatsby-starter-hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world

```


Bueno, es por eso, y por más que me empeze a fascinar con React y Gatsby.

**Hasta la proxima....**



