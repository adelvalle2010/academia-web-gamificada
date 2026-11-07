# Academia Web Gamificada

Plataforma gamificada para aprender **HTML, CSS, tablas y Flexbox** resolviendo niveles con un editor de código en el navegador.

Esta es una copia offline del sitio original, publicado en <https://ephemeral-cocada-e55735.netlify.app/>. Las librerías externas quedaron incluidas en el repo, así que funciona sin conexión a internet.

## Cómo usarlo

- **Local:** descargá el repo (Code → Download ZIP) y abrí `index.html` en el navegador.
- **GitHub Pages:** Settings → Pages → Branch `main` / carpeta `/ (root)`. El sitio queda publicado en `https://adelvalle2010.github.io/academia-web-gamificada/`.

## Estructura

```
index.html            Página principal (SPA)
css/styles.css        Estilos del sitio
js/
  app.js              Lógica de la aplicación y navegación entre niveles
  levels-data.js      Contenido y consignas de los niveles
  validator.js        Validación de las respuestas del alumno
  storage.js          Guardado del progreso (localStorage)
  audio.js            Efectos de sonido
  jszip.min.js        JSZip 3.10.1 (exportar trabajos en .zip)
vendor/
  codemirror/         CodeMirror 5.65.16 + tema Dracula y modos HTML/CSS/JS
  confetti.browser.min.js   canvas-confetti 1.9.2
  fonts/              Outfit y JetBrains Mono (Google Fonts, uso local)
```

## Notas

- El progreso se guarda solo en el `localStorage` del navegador de cada persona.
- **Guardar y cargar el avance en otra compu:** en el mapa de niveles (o con 💾 en la pantalla de juego) el botón **Guardar progreso** baja un archivo `academia-web-progreso-AAAA-MM-DD.json` con niveles, estrellas, puntos, temática y el código de cada nivel. En otra computadora, **Cargar progreso** (también en la bienvenida: «Cargar mi progreso») lo restaura después de mostrar un resumen. El archivo se valida antes de cargarse y reemplaza el avance que hubiera en esa compu.
- Cambios respecto al original: corrección de las etiquetas de código de las tarjetas de nivel (antes `<body>` o `<em>` se interpretaban como HTML real y se veían rotas), y se quitaron el parámetro `?v=1.5`, los `preconnect` a Google Fonts y el script de Netlify.
- Las librerías de `vendor/` y `js/jszip.min.js` conservan sus propias licencias (MIT / OFL).
