# CINETRIX

![PAGINA](https://user-images.githubusercontent.com/91749195/139700370-cc667f55-28c3-49fb-9820-3f509fad04de.png)

![catalogo](https://user-images.githubusercontent.com/91749195/139725884-01859403-92c2-4b81-a9da-855d721cd7c3.png)

![carrito](https://user-images.githubusercontent.com/91749195/139725928-5350c594-132c-4523-a3ec-ac56945d7c17.png)


- Encuentra un variado catalogo de peliculas de todos los tiempos, y disfrutalas en tu hogar comprandolas en el mejor formato.

~~~
ARCHIVOS USADOS
~~~
- Se hace uso de 7 scripts para el manejo de diferentes formulas java:

1. App.js : Para darle vida a las particulas del backgroud del body.
2. Bootstrap.main.js : Para manejo con la libreria 
3. Carrito.js: Maneja los codigos script para el carrito de compras
4. Data.js: Contiene el array de las peliculas y la funcion para la lectura de las mismas
5. Forms.js: Contiene los comandos para el formulario de registro de usuarios
6. Main.js : Comandos para el slider con las imagenes , con su respectivo boton adelante y atras
7. Particles.js : contiene la formacion de las particulas.

- se usan comandos style para el diseño de todo el contentido asi como la libreria de Bootstrap.main.css
- se hace inserción de 3 archivos HTML para manejar los enlaces a cada uno de los ítem de la cabecera

![image](https://user-images.githubusercontent.com/91749195/139701048-f6a664cc-c3e6-4f60-8f8a-e6fc1ed2965f.png)


~~~
ETIQUETAS HTML USADAS
~~~

## Cabecera

Se inserta logo con nombre de pagina y los enlaces a carrito y registro de usuarios.

![cabecera](https://user-images.githubusercontent.com/91749195/139702843-40335e01-dcd4-4995-9754-8be7a0744c16.png)

## Particulas

Se inserta un contenedor con las particulas de fondo de la pagina 

![particulas](https://user-images.githubusercontent.com/91749195/139703430-89939032-b9b7-434e-8533-de3a9bc1a445.png)

## ALERTAS

Se insertan mensajes de alerta que se disparan al dar click en agregar un producto al carrito o eliminarlo

![alertas](https://user-images.githubusercontent.com/91749195/139703737-d2968eec-8071-4a15-a504-82d9109e4580.png)

## IMAGEN PRINCIPAL Y BOTONES

Esta division contiene los botones que dan paso a las imagenes de la parte inicial de la pagina

![botones](https://user-images.githubusercontent.com/91749195/139703964-3fdd292b-ba71-4f24-9424-7ba176efcdf6.png)

## CUERPO Y PIE DE PAGINA

Aqui se inserta el titulo: "catalogo"; y las tarjetas que contienen la informacion de las peliculas, ademas del pie de pagina.

![cuerpo y pie](https://user-images.githubusercontent.com/91749195/139704361-82d72a08-6a17-4e8d-a0e9-ded97044c17a.png)

## COMANDOS SCRIPT

Se insertan los enlaces a cada uno de los archivos script que se han creado para que la pagina tome cada una de las funciones que estos contienen.

![scripts](https://user-images.githubusercontent.com/91749195/139704700-e8c9a92a-2fcb-4efd-a5dc-c3f730ccaee6.png)

## HTML FORMULARIO

Se crea el formulario en un html aparte para darle contenido.

![formulario](https://user-images.githubusercontent.com/91749195/139704987-995ed8a7-d1e4-4e04-b6a3-75696ef14e09.png)

## HTML CARRITO

Se crea el carrito de compras por medio de una tabla que contendra los articulos seleccionados por el usuario, y esta se complementa en el archivo script "carrito.js"

![carrito](https://user-images.githubusercontent.com/91749195/139705265-f0a09fa6-28bb-4094-a08b-4b990dba97d0.png)

~~~
2. CODIGOS JAVASCRIPTS USADOS
~~~

## ARCHIVO DATA.JS

Este contiene el ARRAY de las imagenes que se usaron para las tarjetas y la descripcion de las mismas, con su respectivo precio y boton de agregar al carrito

![array](https://user-images.githubusercontent.com/91749195/139706152-1b26a2fa-8b42-46d2-b06d-b380e77c3fec.png)

![funcion array](https://user-images.githubusercontent.com/91749195/139706218-38e7e49a-1a2d-4da8-a0e9-1c7ed9b90dd8.png)

## ESCUCHAR EVENTO

Se le da propiedades al addEventListener al evento "click", se crea la constante para el "carrito[]" como universal ya que se usara en todas las funciones, se selecciona el cuerpo de la tabla que contiene el carrito y el boton.

![click](https://user-images.githubusercontent.com/91749195/139706980-a20e0842-9b1a-4f7c-b979-6b77ef66241b.png)


## FUNCION ADERIR AL CARRITO

Aqui al darle click a la pelicula que deseamos comprar , nos tomara el titulo, el precio y la imagen de la tarjeta , ademas se crea una constante para la adecion de estos 
al momento de agregar un producto diferente.

![aderir al carro](https://user-images.githubusercontent.com/91749195/139710725-f865715d-8cb0-442b-bda9-2d04a9642695.png)

## FUNCION NUEVO ITEM

Al tener ya seleccionado el producto que llevaremos al carro , ahora mostramos la alerta de que se añadio el producto al carro, para ello usamos la
funcion "setTimeout. Despues usaremos una funcion para que nos vaya sumando la cantidad del producto que hemos seleccionado, por medio de un ciclo for, con la constante 
"InputElemnto", despues lo sumamos el valor al total de productos carrito.

![nuevo item](https://user-images.githubusercontent.com/91749195/139710849-fd217d5b-2fcd-4fd9-a05b-3fa4213ce5f8.png)

## FUNCION CREAR CARRO 

Con esta funcion complememtamos el div del "carrito.html", "table", para crear la tabla del carrito, ya que los valores de titulo, iamgen y precio seran cambiantes
  se debe hacer por medio de una insercion "InnerHtml", y aqui es donde se mostrara los productos seleccionados a comprar. 

![crear tabla](https://user-images.githubusercontent.com/91749195/139714037-078d41e2-5d47-4cdd-9ee4-0c5b1d30282e.png)

## FUNCION TOTAL CARRITO

Aqui logramos calcular el total del valor de los productos seleccionados, por medio de la funcion "carritototal", quien nos trae el item donde va el total de los productos, 
recorremos el "item" que son los productos del carrito "tabla", y su precio como esta en modo nombre lo cambiamos a numero, para asi poder calcular el total al multiplicar el
precio por la cantidad.

![Total carrito](https://user-images.githubusercontent.com/91749195/139714974-c195805c-ff83-4d28-9e96-c33276de953d.png)

## FUNCION SUMAR CANTIDAD 

Sumaremos el valor de la cantidad de cada producto, creamos constantes para traer el titulo y el producto a sumar, y por medio de un foreach creamos una condicion
que si el titulo del producto seleccionado es igual al titulo del producto que ya se encuentra en el carrito entonces le ponga la cantidad del item seleccionado.

![image](https://user-images.githubusercontent.com/91749195/139716341-81773a32-1b5e-4a2c-926a-0fe1da1966fc.png)

guardamos el resultado en el local storage y que al refrescar la ventana estos nos quede guardado hasta finalizar la compra. 
  
 
 ~~~
 3. COMANDOS CSS USADOS
 ~~~
 
 ## BACKGROUND PAGINA
 
 ![image](https://user-images.githubusercontent.com/91749195/139722354-9df369f1-d113-4485-b0bb-85d129692a35.png)

 
 ## CABECERA
 
 ![image](https://user-images.githubusercontent.com/91749195/139722169-f942efbb-4762-470c-b57c-8b4769f174e4.png)
 
 ![image](https://user-images.githubusercontent.com/91749195/139722206-ae276442-8750-4574-b6db-555e25b5a4ce.png)

## BOTONES Y CONTENEDOR INICIAL

![image](https://user-images.githubusercontent.com/91749195/139722503-cdd13a2d-6cf7-4337-b77f-1a1ae23c99bd.png)

![image](https://user-images.githubusercontent.com/91749195/139722548-bb677cc7-c874-4170-b572-0f6702215d2b.png)

## TARJETAS Y DESCRIPCION 

![image](https://user-images.githubusercontent.com/91749195/139722745-dd37af6d-6c24-403f-8ad2-813175e23769.png)

![image](https://user-images.githubusercontent.com/91749195/139722774-f46ad330-cfc4-4d81-8089-2575cc05531e.png)

## FORMULARIO

![image](https://user-images.githubusercontent.com/91749195/139722865-e8730b5c-c4dd-4eea-b10a-2e6201297383.png)


## CARRITO

![image](https://user-images.githubusercontent.com/91749195/139722894-a54b1e09-e36e-4981-b754-7c20f7c0184f.png)


  
  


















