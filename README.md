# Nora & Guille
Web de la boda de Nora y Guille, el 26 de septiembre de 2026 en La Tejera de Fausto.

## index.html
Contenido de la web:

##### head
Contiene el título, metatags (seo), carga los estilos y el favicon (imagen mostrada en la barra de navegación).

##### body
Contiene la información.

###### header
Logo y enlaces del menú.
- Se adapta a las pantallas, mostrandose en una *"hamburguesa"* en dispositivos móviles.

###### hero
Información inicial de presentación.

###### main
Secciones de la web, divididas por `<section>...</section>`.

###### footer
Información final con el logo y enlaces de nuevo.

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
