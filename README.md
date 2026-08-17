# Nora & Guille
Web de la boda de Nora y Guille, el 26 de septiembre de 2026 en La Tejera de Fausto.

## index.html
Contenido de la web.

Este archivo contiene todo el contenido visible de la web. Cada bloque está identificado con un comentario como `<!-- SECCION -->` para que sea fácil localizarlo.

1. Puedes cambiar los textos escribiendo entre las etiquetas. Por ejemplo, en `<h2>Este es el título</h2>` solo debes modificar `Este es el título`.
2. Las imágenes están en la carpeta `assets/img`. Para sustituir una, cambia el nombre que aparece en `src="assets/img/nombre-de-la-imagen.jpg"`.
3. Los enlaces se cambian modificando la dirección que aparece dentro de `href="..."`.
4. No cambies los valores de `class="..."`, `id="..."` o `data-config="..."`: se utilizan para conservar el diseño y el funcionamiento.
5. Conserva siempre los símbolos `< >` y las etiquetas de apertura y cierre.

### head - Configuración general
Es la parte situada entre `<head>` y `</head>`. Contiene el título de la pestaña del navegador, la descripción para buscadores, la información mostrada al compartir la web, los estilos y el favicon.

- Cambia el texto de `<title>` para modificar el título de la pestaña.
- Cambia el `content` de las etiquetas de descripción para actualizar el resumen de la web.
- La imagen para compartir se indica en `property="og:image"`.
- No borres los enlaces a los estilos, iconos o `site.webmanifest`.

### body
Contiene la información de la web.

#### header - Cabecera y menú
Contiene `N & G`, el botón del menú móvil y los enlaces de navegación.

- Puedes cambiar los nombres visibles de los enlaces.
- Cada `href`, por ejemplo `href="#historia"`, lleva a la sección que tiene ese mismo `id`. **No lo cambies salvo que también cambies el `id` de la sección correspondiente.**
- En dispositivos móviles el menú se muestra como un botón de tipo *"hamburguesa"*.

#### main - Contenido
Secciones de la web, divididas por `<section>...</section>`.

#### hero - Portada / inicio
- La imagen de portada se cambia desde `assets/css/styles.css`.
- Edita los textos en el `index.html`.

#### historia - Nuestra historia
Contiene la fotografía y los párrafos que cuentan la historia.

- Cambia la fotografía modificando `src="assets/img/historia.jpg"`.
- Puedes editar libremente el título y los párrafos.
- El valor de `data-kicker` es el pequeño texto que aparece encima del título.

#### lugar - Dónde y cuándo
Contiene el nombre de la finca, la localidad, la fecha, la descripción, una fotografía y el mapa.

- El enlace de Google Maps está en el `href` de la tarjeta “Cómo llegar”.
- La fotografía y el mapa se cambian modificando sus respectivos atributos `src`.

#### programa - Programa
Cada actividad del programa es una línea `<li>`.

- Cambia la hora dentro de `<time>`.
- Cambia la descripción de la actividad dentro de `<span>`.
- Puedes copiar una línea `<li>...</li>` completa para añadir otra actividad o borrarla para eliminarla.
- La fotografía se cambia modificando su atributo `src`.

#### transporte - Transportes
La sección contiene tres bloques `<article>`: autobús, servicio de taxi y vehículo propio.

- En cada bloque puedes cambiar el título `<h3>` y los párrafos `<p>`.
- Aquí se actualizan los puntos de encuentro, horarios, dirección e información del aparcamiento.

#### alojamiento - Alojamientos
Cada alojamiento está escrito como un enlace `<a>`.

- Cambia la dirección web dentro de `href="..."`.
- Cambia el nombre visible entre `<a>` y `</a>`.
- Copia una línea completa para añadir otro alojamiento.
- La fotografía central se cambia modificando su atributo `src`.

#### asistencia - Confirmación de asistencia
Contiene el título, el mensaje y el botón para confirmar la asistencia.

- El botón apunta actualmente a la sección de contacto mediante `href="#contacto"`.
- Si se utiliza un formulario externo, sustituye `#contacto` por la dirección completa del formulario.

#### regalitos - Regalitos
Contiene los textos, el botón para copiar el número de cuenta y una fotografía.

- Puedes editar los textos y cambiar la fotografía desde el `index.html`.
- El número de cuenta se cambia en el campo `cc` de `configuration.js`, no en el `index.html`.
- No borres el atributo `data-config="cc"`.

#### contacto - Contacto
Contiene los nombres y teléfonos de contacto.

- Los nombres se editan en el `index.html`.
- Los teléfonos se cambian dentro de `phones` en `configuration.js`.
- No borres los atributos `data-config`, ya que colocan automáticamente cada teléfono en su sitio.
- La imagen de fondo se cambia desde `assets/css/styles.css`.

#### footer - Pie de página
Contiene la fecha, los nombres y el lugar que aparecen al final de la web.
Esos textos se editan directamente en el `index.html`.

#### scripts - Archivos de funcionamiento
Las dos etiquetas `<script>` situadas al final cargan la configuración, las animaciones, el menú móvil y el botón para copiar el número de cuenta.
**No deben borrarse.**

## assets
Contiene las imágenes, estilos css y código javascript.

##### configuration.js
Archivo de configuración donde cambiar los datos generales.

##### main.js
Funciones generales útiles (no tocar).

### css
Estilos y colores de la web.

### img
Imágenes utilizadas.

### js
Código que gestiona las partes dinámicas y animaciones de la web.

### meta.jpg
Imagen *metatag* mostrada al compartir el enlace.

# Hacer cambios
Para realizar cambios, debes pulsar en el botón de **Editar** el archivo que quieras.

Por ejemplo, vamos a editar un texto del `index.html`:
1. Pulsar en `index.html` para acceder al archivo:

2. Pulsar en `Edit this file`:

3. Realizar los cambios que necesites (tranquila que hay historial de versiones).

4. Pulsar en el botón de **Commit changes**.

5. Guardar y publicar los cambios confirmando **Commit changes**.

6. Los cambios se autopublican, tardan poco (~1min).


# Revertir cambios ante desastre (la web no funciona)
¿Y si la lio? No pasa nada, ¡hay histórico de cambios!

1. Acceder al **Histórico de cambios** (`Commits`).

2. Pulsar en **Browse repository at this point** (`Acceder al repositorio en este punto`).

3. Copiar el contenido que había en ese punto.

4. Volver al repositorio.

5. Y pulsar en `index.html` para acceder al archivo con su contenido actual.

6. Pulsar en `Edit this file`.

7. Seleccionar todo el contenido actual con `Ctrl+A`.

8. Eliminar el contenido.

9. Pulsar `Cntrl+V` para pegar el contenido que teníamos copiado con `Copy raw file`.

10. **Commit changes** para actualizar el contenido actual con el que había en el punto anterior. 
