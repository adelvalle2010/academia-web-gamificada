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

- El progreso se guarda en el `localStorage` del navegador de cada persona.
- Cambios respecto al original: se quitaron el parámetro `?v=1.5` de las rutas, los `preconnect` a Google Fonts y el script de Netlify del hosting.
- Las librerías de `vendor/` y `js/jszip.min.js` conservan sus propias licencias (MIT / OFL).
