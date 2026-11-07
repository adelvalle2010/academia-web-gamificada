# Academia Web Gamificada

Plataforma gamificada para aprender **HTML, CSS, tablas y Flexbox** resolviendo niveles con un editor de código en el navegador.

Esta es una copia offline del sitio original, publicado en <https://ephemeral-cocada-e55735.netlify.app/>. Las librerías externas quedaron incluidas en el repo, así que funciona sin conexión a internet.

## Diseño: identidad PIXEL 9

El sitio usa la identidad visual **PIXEL 9**, pensada para estudiantes de 12 a 15 años: fondo crema claro (se lee bien proyectado en salones con luz), bordes gruesos, sombras duras estilo sticker y botones que se hunden al apretarlos. Tiene un **modo noche** opcional (botón ☀️/🌙).

Los colores tienen un rol fijo, así el estudiante aprende el código sin que se lo expliquen:

| Color | Rol |
|---|---|
| 🟣 Violeta `#6c4df6` | HTML, estructura, concepto clave |
| 🔵 Cian `#22bcf0` | CSS, estilo, vista previa |
| 🔴 Coral `#ff5d73` | Errores y advertencias |
| 🟢 Lima `#22c58b` | Correcto, logrado, objetivo |
| 🟡 Amarillo `#ffc233` | Juego, misión, puntaje, pistas |

Tipografías (incluidas en el repo): **Bricolage Grotesque** para títulos, **Inter** para texto y **JetBrains Mono** para código (sin ligaduras, para que `<!--` se vea tal cual se escribe).

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
  codemirror/         CodeMirror 5.65.16 y modos HTML/CSS/JS (tema propio "pixel9" en styles.css)
  confetti.browser.min.js   canvas-confetti 1.9.2
  fonts/              JetBrains Mono (+ Outfit original sin uso)
  fonts/pixel9/       Bricolage Grotesque e Inter (OFL)
```

## Notas

- El progreso se guarda en el `localStorage` del navegador de cada persona.
- Cambios respecto al original: nuevo diseño PIXEL 9 (modo claro por defecto), corrección de las etiquetas de código de las tarjetas de nivel (antes `<body>` o `<em>` se interpretaban como HTML real y se veían rotas), y se quitaron el parámetro `?v=1.5`, los `preconnect` a Google Fonts y el script de Netlify.
- Las librerías de `vendor/` y `js/jszip.min.js` conservan sus propias licencias (MIT / OFL).
