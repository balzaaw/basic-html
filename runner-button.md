## Instalación CDN

Copie y pegue la url del cdn en un html a traves de la etiqueta script

```
<script src="https://raw.githack.com/balzaaw/basic-html/727a508/runner-button.js"></script>
```

## Implementacion

Cree su etiqueta de boton y agrege las dependencias como propiedades del boton

```
    <button
        data-clientid="abc1234"
        data-environment="dev"
        data-metadata="{'key': 'value'}"
        id="runner-button"
    >
        Llama funcion
    </button>
```

## Propiedades del boton

### data-clientid

Es el identificador unico del cliente en formato string

### data-environment

Permite diferenciar la ejecución en un ambiente de desarrollo o producción en formato string

### data-metadata

JSON con datos y valores extras en formato string

### id

Nombre unico para identificar el componente y ejecutar las funciones dentro del mismo.

### data-img

Url o ruta del recurso o logo para mostrar en el boton en formato string

```
data-img="url/to/img.png"
```

### data-style

Remplaza los estilos por defecto y aplica los estilos descritos es esta propiedad en una unica cadena de texto en formato string

```
data-style="background:#3f3f3f;color:white;"
```

### data-ignorestyle

Propiedad para deshabilitar todos los estilos del boton para casos donde desee crear sus propios estilos personalizados en su proyecto, esta opcion tambien deshabilita la propiedad _data-style_

```
data-ignorestyle="1"
```
