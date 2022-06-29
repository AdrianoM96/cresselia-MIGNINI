# Cresselia
Este proyecto es un E-Commerce de indumentaria, realizado con React JS y utilizando el servicio de backend de Firebase

## Demo
 ![](./src/assets/gif/demo.gif)

## Instalacion
1) Clonar el repositorio.
2) Estando en la raíz del proyecto, corra el comando
```
npm install
```
3) Ejecutar para inciar el proyecto:
```
npm start
``` 
El proyecto estará disponible en http://localhost:3000

## Firebase
Para que puedas ver todo correctamente deberás crear tu propio proyecto en firebase y colocar sus credenciales en un archivo .env siguiendo este ejemplo.\

[env.example](https://github.com/AdrianoM96/cresselia-MIGNINI/blob/workshop/.env.example)

Además, deberás crear una colección y ponerle el nombre de "items" y colocarle los siguiente campos:\

* title: string
* category: string
* description: string
* image: string
* price: number
* stock: number 

También deberás crear una colección llamada categories y deberá tener el siguiente campo:
* description: string

La última colección que se necesita es "orders" y ésta se creará automáticamente al crear una orden de compra.

* Contendrá algunos datos del comprador como: nombre, apellido, teléfono y su email.
* Los productos que compró.
* El total de la compra .
* La fecha en la que se realizó la orden de compra.
* El estado de la orden de compra. Predeterminadamente se da el valor de "generada".

## Contenido
Este proyecto con
* Catálogo de todos los productos .
* Filtro por categorías, las cuales son : Hombres, Mujeres y Niños.
* Detalle de cada producto , mostrando en pantalla su nombre,descripción, precio ,stock disponible y la posibilidad de poder elegir la cantidad que queremos agregar al carrito, siempre respetando el stock disponible.
* Carrito: en el cual podemos ver todos los productos que hemos agregado a nuestro carrito, mostrando su imagen,nombre, cantidad elegida, sub total de cada producto y el total del carrito completo. Tenemos la posibilidad de eliminar algun producto en caso de no quererlo o eliminar el carrito por completo. Si queremos efectuar la compra, hay un botón para "Finalizar la compra", para luego ir al siguiente paso.
* Formulario para que el usuario llene con información correcta y obligatoria, de lo contrario no podrá proceder con la compra. Una vez llenado correctamente, se le da al usuario el código de referencia de su compra.
* Control de stock: Controla que la orden de compra se pueda efectuar correctamente, revisando si hay stock disponible de los productos que quiere comprar, si hay, se genera la orden de compra , de lo contrario sale un aviso en pantalla que no hay stock de uno de los productos.

## Librerias
Este proyecto de ReactJs utiliza estas dependencias/librerias.\
[ReactJs](https://es.reactjs.org/) - Librería principal del proyecto.\
[React^Router^DOM](https://reactrouter.com/) - Navegación de la App.\
[React^Hook^Form](https://react-hook-form.com/) - Para el formulario.\
[Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) - Para el uso de estilos.\
[SweetAlert2](https://sweetalert2.github.io/) - Para notificaciones mas estéticas.\

