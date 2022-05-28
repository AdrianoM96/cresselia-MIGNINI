# Cresselia
Este proyecto es un E-Commerce de ropa, realizado con React JS

## Demo
 ![](./src/assets/gif/preEntrega.gif)

## Instalacion
1) Clonar el repositorio.
2) Ejecutar npm install.
3) Ejecutar npm start para iniciar el proyecto en localhost 3000.

## Contenido
### Rutas
`path "/"` direcciona al componente ItemListContainer , este muestra todos los productos a vender.\
`path "/category/:categoryId"` direcciona tambien al componente ItemListContainer pero filtrando los productos
segun su categoria. En este caso, hombre o mujer.\
`path "/item/:itemId"` direcciona al componente DetailContainer, este muestra al producto seleccionado, mostrando su nombre,precio,stock,descripcion. Tiene la posibilidad de elegir cuantos productos agregar al carrito segun su stock
La funcion de agregar al carrito esta en desarrollo

## Dependencias/librerias
Este proyecto de ReactJs utiliza estas dependencias/librerias.\
ReactJs.\
React Router DOM.\
Bootstrap 4.2.\
Icons bootstrap 1.8
