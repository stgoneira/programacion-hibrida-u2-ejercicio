# Programación Híbrida - Ejercicio U2

Usando Ionic Framework y Angular desarrolle una aplicación que ayude a las personas que van físicamente al supermercado. Debe permitir anotar un listado de productos para comprar y marcar los que ya estén en el carro (revise las figuras con la solución sugerida):

1.	Cree y utilice al menos 2 servicios de Angular: se sugiere tener ProductoService y ConfiguracionService

2.	Por el momento, es suficiente con que almacene la información en memoria (todavía no es necesario utilizar bases de datos).

3.	Cree un componente de Angular que se llame ListaDeCompras. Dentro de éste utilice otros 2 componentes llamados: ListaDeProductos y FormularioProducto.

4.	El componente ListaDeProductos debe mostrar el listado de productos. Los elementos que ya hayan sido agregados al carro deben aparecer tachados. El usuario debe poder pinchar sobre un checkbox para marcar un producto que ya se agregó.

5.	Utilice los decoradores @Input y @Output para que los componentes conversen

6.	Genere una página nueva para contener las configuraciones de la aplicación

7.	El componente de configuraciones debe permitir marcar si se desea ordenar la lista en orden alfabético

8.	Genere un enlace en la cabecera de la aplicación hacia la configuración usando un icono. Para volver a la pantalla principal utilice el componente ion-back-button.
