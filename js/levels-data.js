// Definición completa de los 25 niveles de la academia
// Soporta dinámicamente 4 temáticas: 'space', 'vet', 'cafe', 'rock'

const THEMES_CONFIG = {
    space: {
        id: 'space',
        name: 'Agencia Espacial',
        brand: 'AstroCode Mission Control 🚀',
        badge: '🚀 Astronauta Web',
        accentColor: '#38bdf8',
        welcomeDescription: '¡Bienvenido a la base de lanzamiento! Configura los sistemas, paneles lunares y naves espaciales con código web.'
    },
    vet: {
        id: 'vet',
        name: 'Clínica Veterinaria',
        brand: 'Patitas & Co. Rescue 🐾',
        badge: '🐾 Guardián Animal',
        accentColor: '#4ade80',
        welcomeDescription: '¡El refugio te necesita! Diseña las fichas de adopción, horarios de atención y páginas de rescate para perros y gatos.'
    },
    cafe: {
        id: 'cafe',
        name: 'Cafetería Moderna',
        brand: 'Pixel Café & Bakery ☕',
        badge: '☕ Barista Digital',
        accentColor: '#fb923c',
        welcomeDescription: '¡Abre las puertas de la cafetería más geek! Crea el menú interactivo, promociones de medialunas y pedidos online.'
    },
    rock: {
        id: 'rock',
        name: 'Banda de Rock',
        brand: 'Los Byte-les On Tour 🎸',
        badge: '🎸 Estrella del Rock',
        accentColor: '#f43f5e',
        welcomeDescription: '¡Sube el volumen al amplificador! Diseña la web oficial de la banda, las fechas de la gira mundial y las portadas de álbumes.'
    }
};

const LEVEL_VISUALS = {
    1:  { icon: '🏗️', shortTitle: 'Cimientos Web', tag: '<!DOCTYPE> & <body>' },
    2:  { icon: '👑', shortTitle: 'Títulos Reales', tag: '<h1> & <h2>' },
    3:  { icon: '✍️', shortTitle: 'Texto con Estilo', tag: '<strong> & <em>' },
    4:  { icon: '📋', shortTitle: 'Lista con Viñetas', tag: '<ul> & <li>' },
    5:  { icon: '🔢', shortTitle: 'Pasos Numerados', tag: '<ol> & <li>' },
    6:  { icon: '🖼️', shortTitle: 'Galería de Fotos', tag: '<img> & src' },
    7:  { icon: '🔗', shortTitle: 'Portales y Enlaces', tag: '<a> & href' },
    8:  { icon: '📦', shortTitle: 'Cajas Mágicas', tag: '<div>' },
    9:  { icon: '🗂️', shortTitle: 'Tarjeta Completa', tag: 'Integración HTML' },
    10: { icon: '🏰', shortTitle: 'Castillo Web', tag: 'Proyecto HTML' },
    11: { icon: '📊', shortTitle: 'Tablas de Datos', tag: '<table> & <tr>' },
    12: { icon: '🗓️', shortTitle: 'Planilla Avanzada', tag: '<th> & <td>' },
    13: { icon: '🎨', shortTitle: 'Paleta de Pintura', tag: '<style> & color' },
    14: { icon: '🌌', shortTitle: 'Lienzo de Fondo', tag: 'background-color' },
    15: { icon: '🔤', shortTitle: 'Tipografía Cool', tag: 'font-size & family' },
    16: { icon: '🎯', shortTitle: 'Diana de Alineación', tag: 'text-align' },
    17: { icon: '🏷️', shortTitle: 'Etiqueta de Clase', tag: 'Selector .clase' },
    18: { icon: '🔑', shortTitle: 'Llave Maestra', tag: 'Selector #id' },
    19: { icon: '📐', shortTitle: 'Modelo de Caja', tag: 'margin & padding' },
    20: { icon: '🛡️', shortTitle: 'Esquinas Suaves', tag: 'border-radius' },
    21: { icon: '🪄', shortTitle: 'Magia Flexbox', tag: 'display: flex' },
    22: { icon: '🤹', shortTitle: 'Reparto en Fila', tag: 'justify-content' },
    23: { icon: '⚖️', shortTitle: 'Equilibrio Vertical', tag: 'align-items' },
    24: { icon: '🧭', shortTitle: 'Brújula de Dirección', tag: 'flex-direction' },
    25: { icon: '🏆', shortTitle: 'Trofeo Maestro', tag: 'Flexbox + Tablas' }
};

window.LEVEL_VISUALS = LEVEL_VISUALS;

const makeHtmlDoc = (title, bodyContent) => `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
</head>
<body>
${bodyContent}
</body>
</html>`;

const LEVELS_DATA = [
    // ==========================================
    // NIVELES 1 A 10: ESTRUCTURA BÁSICA HTML
    // ==========================================
    {
        id: 1,
        title: "La Estructura Base de Todo Sitio Web",
        category: "html",
        badge: "Fundamentos HTML",
        theory: "Todo documento HTML moderno necesita una estructura base obligatoria: `<!DOCTYPE html>`, la etiqueta raíz `<html>`, el `<head>` (para configuraciones ocultas como `<title>`) y el `<body>` (donde va todo lo que se ve en la pantalla).",
        exampleCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Mi Página</title>\n  </head>\n  <body>\n    ¡Hola Mundo!\n  </body>\n</html>`,
        themes: {
            space: {
                missionTitle: "Misión: Inicializar la Computadora de Vuelo",
                instructions: "Antes de despegar hacia Marte, necesitamos encender el sistema central creando la estructura HTML básica con el título 'AstroCode Misión 1' y el texto 'Sistemas listos para el despegue' dentro del body.",
                targetDescription: "Crea las etiquetas <!DOCTYPE html>, <html>, <head> con su <title>, y un <body> con el mensaje de despegue.",
                hint: "Asegúrate de cerrar cada etiqueta: <head></head> y <body></body> dentro de <html></html>.",
                starterCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Escribe el title aquí -->\n  </head>\n  <body>\n    <!-- Escribe el texto de bienvenida aquí -->\n  </body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Registrar el Sitio del Refugio",
                instructions: "¡Abrimos el refugio de mascotas! Escribe la estructura base del sitio con el título 'Clínica Veterinaria Patitas' y el texto 'Bienvenidos al rescate animal' dentro del body.",
                targetDescription: "Crea las etiquetas base: <!DOCTYPE html>, <html>, <head> con su <title>, y el <body> con la bienvenida.",
                hint: "El texto debe estar entre <body> y </body>.",
                starterCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Escribe el title aquí -->\n  </head>\n  <body>\n    <!-- Escribe el texto de bienvenida aquí -->\n  </body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Abrir la Web del Café",
                instructions: "¡El café de especialidad abre sus puertas en internet! Prepara la estructura base con el título 'Pixel Café' y dentro del body el texto 'El mejor café recién tostado'.",
                targetDescription: "Crea la estructura <!DOCTYPE html>, <html>, <head> con <title> y el <body> con la frase del café.",
                hint: "No olvides cerrar la etiqueta </body> y </html> al final.",
                starterCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Escribe el title aquí -->\n  </head>\n  <body>\n    <!-- Escribe el texto de bienvenida aquí -->\n  </body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Lanzar el Sitio Oficial de la Banda",
                instructions: "¡Los amplificadores están al máximo! Configura la estructura HTML con el título 'Los Byte-les Oficial' y dentro del body el texto '¡Bienvenidos a la gira mundial!'.",
                targetDescription: "Escribe la estructura <!DOCTYPE html>, <html>, <head> con <title> y el <body> con el anuncio de la gira.",
                hint: "Coloca el título entre <title> y </title> dentro del <head>.",
                starterCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Escribe el title aquí -->\n  </head>\n  <body>\n    <!-- Escribe el texto de bienvenida aquí -->\n  </body>\n</html>`
            }
        },
        validator: (dom, rawCode) => {
            if (!rawCode.toLowerCase().includes('<!doctype html>')) {
                return { valid: false, error: "Te falta agregar la declaración <!DOCTYPE html> al inicio de tu archivo." };
            }
            const htmlTag = dom.querySelector('html');
            if (!htmlTag) {
                return { valid: false, error: "No se encontró la etiqueta raíz <html>." };
            }
            const headTag = dom.querySelector('head');
            if (!headTag) {
                return { valid: false, error: "Debes incluir la etiqueta <head> para los metadatos." };
            }
            const titleTag = dom.querySelector('title');
            if (!titleTag || !titleTag.textContent.trim()) {
                return { valid: false, error: "Agrega una etiqueta <title> con texto dentro de <head>." };
            }
            const bodyTag = dom.querySelector('body');
            if (!bodyTag || !bodyTag.textContent.trim()) {
                return { valid: false, error: "El <body> no puede estar vacío. Escribe tu texto de bienvenida dentro de él." };
            }
            return { valid: true };
        }
    },

    {
        id: 2,
        title: "Encabezados: Jerarquía de Títulos (h1 y h2)",
        category: "html",
        badge: "Títulos h1 y h2",
        theory: "HTML ofrece 6 niveles de encabezados: `<h1>` es el título principal más importante (solo debe haber uno por página), seguido por `<h2>` para subtítulos o secciones.",
        exampleCode: `<h1>Título Principal de la Página</h1>\n<h2>Subtítulo de Sección</h2>`,
        themes: {
            space: {
                missionTitle: "Misión: Anunciar la Misión Espacial",
                instructions: "Crea un encabezado principal `<h1>` con el nombre de tu cohete o nave (ej. 'Cohete Orión X') y un subtítulo `<h2>` con el destino (ej. 'Rumbo a la Estación Espacial Lunar').",
                targetDescription: "Usa un <h1> para el nombre de la nave y un <h2> para el destino.",
                hint: "Recuerda abrir y cerrar: <h1>Nombre</h1> y luego <h2>Destino</h2>.",
                starterCode: makeHtmlDoc("AstroCode - Misión 2", "  <!-- Escribe tu <h1> y tu <h2> aquí adentro -->\n")
            },
            vet: {
                missionTitle: "Misión: Anuncio del Rescate del Mes",
                instructions: "Crea un encabezado `<h1>` que diga 'Refugio Patitas' y un subtítulo `<h2>` que diga 'Mascota del Mes: Firulais'.",
                targetDescription: "Agrega una etiqueta <h1> y una etiqueta <h2> con los textos indicados.",
                hint: "Los encabezados se escriben: <h1>Texto</h1> y <h2>Subtexto</h2>.",
                starterCode: makeHtmlDoc("Refugio Patitas", "  <!-- Escribe tu <h1> y tu <h2> aquí adentro -->\n")
            },
            cafe: {
                missionTitle: "Misión: Título del Menú Cafetero",
                instructions: "Presenta tu cafetería usando un `<h1>` que diga 'Pixel Café' y un `<h2>` que anuncie 'Especialidades de Invierno'.",
                targetDescription: "Escribe un encabezado <h1> y un subtítulo <h2>.",
                hint: "Usa <h1>Pixel Café</h1> y <h2>Especialidades de Invierno</h2>.",
                starterCode: makeHtmlDoc("Pixel Café", "  <!-- Escribe tu <h1> y tu <h2> aquí adentro -->\n")
            },
            rock: {
                missionTitle: "Misión: Nombre del Tour Musical",
                instructions: "Prepara el escenario agregando un `<h1>` con el nombre de la banda 'Los Byte-les' y un `<h2>` con el nombre de la gira 'Tour Algoritmo Eléctrico'.",
                targetDescription: "Coloca un <h1> para la banda y un <h2> para la gira.",
                hint: "Escribe <h1>Los Byte-les</h1> y debajo <h2>Tour Algoritmo Eléctrico</h2>.",
                starterCode: makeHtmlDoc("Los Byte-les", "  <!-- Escribe tu <h1> y tu <h2> aquí adentro -->\n")
            }
        },
        validator: (dom) => {
            const h1 = dom.querySelector('h1');
            if (!h1 || !h1.textContent.trim()) {
                return { valid: false, error: "Te falta agregar el encabezado principal <h1> con texto." };
            }
            const h2 = dom.querySelector('h2');
            if (!h2 || !h2.textContent.trim()) {
                return { valid: false, error: "Te falta agregar el subtítulo <h2> con texto." };
            }
            return { valid: true };
        }
    },

    {
        id: 3,
        title: "Párrafos y Formato: Texto, Negrita e Itálica",
        category: "html",
        badge: "Párrafos y Énfasis",
        theory: "Los párrafos se definen con `<p>`. Para resaltar palabras clave con importancia usamos `<strong>` (texto en negrita) y para dar énfasis sutil usamos `<em>` (letra cursiva/itálica).",
        exampleCode: `<p>Este es un texto normal con una palabra <strong>muy importante</strong> y otra en <em>tono suave</em>.</p>`,
        themes: {
            space: {
                missionTitle: "Misión: Informe de Bitácora Cósmica",
                instructions: "Escribe un párrafo `<p>` describiendo las condiciones espaciales. Dentro del párrafo, resalta una palabra clave usando `<strong>` (ej. <strong>oxígeno</strong>) y otra palabra usando `<em>` (ej. <em>silencio cósmico</em>).",
                targetDescription: "Escribe un <p> que contenga al menos una etiqueta <strong> y una etiqueta <em>.",
                hint: "Debes colocar <strong> y <em> adentro del párrafo <p>...</p>.",
                starterCode: makeHtmlDoc("Bitácora de Vuelo", "  <!-- Escribe tu párrafo con strong y em aquí adentro -->\n  <p>Bitácora de vuelo día 4: Todo en orden...</p>")
            },
            vet: {
                missionTitle: "Misión: Historia de la Mascota",
                instructions: "Escribe un párrafo `<p>` contando la historia de un perrito rescatado. Resalta con `<strong>` que es <strong>muy cariñoso</strong> y con `<em>` su raza o rasgo (ej. <em>mestizo orejón</em>).",
                targetDescription: "Crea un <p> con etiquetas <strong> y <em> en su interior.",
                hint: "Ejemplo: <p>Firulais es <strong>muy juguetón</strong> y es un <em>cachorro rescatado</em>.</p>",
                starterCode: makeHtmlDoc("Historia de Rescate", "  <!-- Escribe tu párrafo con strong y em aquí adentro -->\n  <p>Historia del perrito: ...</p>")
            },
            cafe: {
                missionTitle: "Misión: Descripción del Grano de Café",
                instructions: "Crea un párrafo `<p>` describiendo el café de la casa. Destaca con `<strong>` que es <strong>100% orgánico</strong> y con `<em>` su aroma (ej. <em>aroma a caramelo</em>).",
                targetDescription: "Escribe un <p> conteniendo al menos un <strong> y un <em>.",
                hint: "Verifica cerrar </p>, </strong> y </em> correctamente.",
                starterCode: makeHtmlDoc("El Grano de Café", "  <!-- Escribe tu párrafo con strong y em aquí adentro -->\n  <p>Nuestro café es elaborado con...</p>")
            },
            rock: {
                missionTitle: "Misión: Reseña del Álbum Musical",
                instructions: "Escribe un párrafo `<p>` comentando el nuevo tema musical. Usa `<strong>` para destacar que es un <strong>éxito total</strong> y `<em>` para mencionar el <em>solo de guitarra</em>.",
                targetDescription: "Usa un elemento <p> con <strong> y <em> adentro.",
                hint: "Recuerda anidar: <p>El tema es <strong>increíble</strong> con un <em>riff poderoso</em>.</p>",
                starterCode: makeHtmlDoc("Reseña Musical", "  <!-- Escribe tu párrafo con strong y em aquí adentro -->\n  <p>La crítica dice que...</p>")
            }
        },
        validator: (dom) => {
            const p = dom.querySelector('p');
            if (!p || !p.textContent.trim()) {
                return { valid: false, error: "Te falta agregar una etiqueta de párrafo <p> con texto." };
            }
            const strong = p.querySelector('strong');
            if (!strong || !strong.textContent.trim()) {
                return { valid: false, error: "Dentro del párrafo <p>, debes incluir una etiqueta <strong> con texto." };
            }
            const em = p.querySelector('em');
            if (!em || !em.textContent.trim()) {
                return { valid: false, error: "Dentro del párrafo <p>, debes incluir una etiqueta <em> con texto." };
            }
            return { valid: true };
        }
    },

    {
        id: 4,
        title: "Listas Desordenadas: Viñetas con ul y li",
        category: "html",
        badge: "Listas ul y li",
        theory: "Cuando el orden de los elementos no importa, usamos una lista desordenada `<ul>` (Unordered List). Cada elemento dentro de la lista se define con la etiqueta `<li>` (List Item).",
        exampleCode: `<ul>\n  <li>Primer elemento</li>\n  <li>Segundo elemento</li>\n  <li>Tercer elemento</li>\n</ul>`,
        themes: {
            space: {
                missionTitle: "Misión: Lista de Herramientas del Astronauta",
                instructions: "Crea una lista desordenada `<ul>` con al menos 3 elementos `<li>` que contengan herramientas necesarias en el espacio (ej: 'Casco presurizado', 'Botas térmicas', 'Tanque de oxígeno').",
                targetDescription: "Crea una etiqueta <ul> con al menos 3 etiquetas <li> adentro.",
                hint: "Recuerda meter cada <li> dentro del <ul> y cerrar </ul> al final.",
                starterCode: makeHtmlDoc("Herramientas del Astronauta", "  <!-- Escribe tu lista con <ul> y 3 <li> aquí adentro -->\n")
            },
            vet: {
                missionTitle: "Misión: Cuidados Esenciales de Mascotas",
                instructions: "Crea una lista desordenada `<ul>` con 3 cuidados básicos `<li>` para los animalitos (ej: 'Paseos diarios', 'Vacunación al día', 'Agua fresca').",
                targetDescription: "Crea una etiqueta <ul> y coloca al menos 3 elementos <li>.",
                hint: "Estructura: <ul> <li>Paseo</li> <li>Comida</li> <li>Amor</li> </ul>",
                starterCode: makeHtmlDoc("Cuidados de Mascotas", "  <!-- Escribe tu lista con <ul> y 3 <li> aquí adentro -->\n")
            },
            cafe: {
                missionTitle: "Misión: Ingredientes para el Capuchino",
                instructions: "Crea una lista desordenada `<ul>` con 3 ingredientes `<li>` (ej: 'Café espresso', 'Leche vaporizada', 'Canela en polvo').",
                targetDescription: "Crea una etiqueta <ul> que contenga 3 elementos <li>.",
                hint: "Asegúrate de no usar <ol>, sino <ul> para viñetas.",
                starterCode: makeHtmlDoc("Ingredientes del Café", "  <!-- Escribe tu lista con <ul> y 3 <li> aquí adentro -->\n")
            },
            rock: {
                missionTitle: "Misión: Instrumentos en el Escenario",
                instructions: "Crea una lista desordenada `<ul>` con los 3 instrumentos principales de la banda `<li>` (ej: 'Guitarra eléctrica', 'Batería acústica', 'Bajo de 4 cuerdas').",
                targetDescription: "Usa <ul> y define al menos 3 elementos <li>.",
                hint: "Cada instrumento va entre <li> y </li>.",
                starterCode: makeHtmlDoc("Instrumentos de Rock", "  <!-- Escribe tu lista con <ul> y 3 <li> aquí adentro -->\n")
            }
        },
        validator: (dom) => {
            const ul = dom.querySelector('ul');
            if (!ul) {
                return { valid: false, error: "Te falta crear la etiqueta de lista desordenada <ul>." };
            }
            const items = ul.querySelectorAll('li');
            if (items.length < 3) {
                return { valid: false, error: `Tu lista <ul> tiene solo ${items.length} elemento(s). Debes agregar al menos 3 <li>.` };
            }
            for (let item of items) {
                if (!item.textContent.trim()) {
                    return { valid: false, error: "Uno de tus elementos <li> está vacío. Escríbele texto." };
                }
            }
            return { valid: true };
        }
    },

    {
        id: 5,
        title: "Listas Ordenadas: Secuencias Numeradas (ol)",
        category: "html",
        badge: "Listas ol y li",
        theory: "Cuando el paso a paso o el orden secuencial es fundamental (recetas, rankings, protocolos), usamos una lista ordenada `<ol>` (Ordered List). El navegador numera automáticamente cada `<li>` (1, 2, 3...).",
        exampleCode: `<ol>\n  <li>Paso uno: Encender motores</li>\n  <li>Paso dos: Comprobar radar</li>\n  <li>Paso tres: Despegar</li>\n</ol>`,
        themes: {
            space: {
                missionTitle: "Misión: Secuencia de Conteo Regresivo",
                instructions: "Crea una lista ordenada `<ol>` con los 3 pasos cronológicos para el lanzamiento del cohete en elementos `<li>` (ej: 'Cierre de compuertas', 'Ignición de motores', 'Despegue').",
                targetDescription: "Crea un elemento <ol> con 3 pasos en <li>.",
                hint: "Usa <ol> en lugar de <ul> para que se numere automáticamente.",
                starterCode: makeHtmlDoc("Conteo Regresivo", "  <!-- Crea una lista numerada con <ol> y 3 <li> aquí adentro -->\n")
            },
            vet: {
                missionTitle: "Misión: Pasos para Bañar a un Perro",
                instructions: "Crea una lista ordenada `<ol>` con los 3 pasos para bañar a una mascota `<li>` (ej: 'Cepillar el pelo', 'Mojar con agua tibia y aplicar champú', 'Secar con toalla').",
                targetDescription: "Usa <ol> con al menos 3 <li> para los pasos del baño.",
                hint: "Escribe <ol><li>Paso 1</li><li>Paso 2</li><li>Paso 3</li></ol>.",
                starterCode: makeHtmlDoc("Pasos de Higiene", "  <!-- Crea tu lista con <ol> y 3 <li> aquí adentro -->\n")
            },
            cafe: {
                missionTitle: "Misión: Pasos para Preparar el Café Filtro",
                instructions: "Crea una lista ordenada `<ol>` con 3 pasos secuenciales para preparar un café perfecto en elementos `<li>` (ej: 'Moler los granos', 'Calentar el agua a 90°C', 'Verter despacio en círculos').",
                targetDescription: "Crea una etiqueta <ol> con 3 elementos <li>.",
                hint: "Verifica escribir <ol> al inicio y </ol> al final.",
                starterCode: makeHtmlDoc("Preparación del Café", "  <!-- Crea tu lista con <ol> y 3 <li> aquí adentro -->\n")
            },
            rock: {
                missionTitle: "Misión: El Top 3 de Canciones (Ranking)",
                instructions: "Crea una lista ordenada `<ol>` con las 3 mejores canciones de la banda en el ranking `<li>` (ej: '1. Código en Furia', '2. Bit & Roll', '3. Balada Binaria').",
                targetDescription: "Crea una etiqueta <ol> con 3 canciones en <li>.",
                hint: "No necesitas escribir el número a mano, <ol> lo numera solo.",
                starterCode: makeHtmlDoc("Top Canciones", "  <!-- Crea tu lista con <ol> y 3 <li> aquí adentro -->\n")
            }
        },
        validator: (dom) => {
            const ol = dom.querySelector('ol');
            if (!ol) {
                return { valid: false, error: "Te falta crear la etiqueta de lista ordenada <ol>." };
            }
            const items = ol.querySelectorAll('li');
            if (items.length < 3) {
                return { valid: false, error: `Tu lista <ol> contiene ${items.length} elemento(s). Necesitas al menos 3 <li>.` };
            }
            return { valid: true };
        }
    },

    {
        id: 6,
        title: "Imágenes: Etiquetas Auto-cerradas y Atributos",
        category: "html",
        badge: "Imágenes con img",
        theory: "La etiqueta `<img>` permite mostrar imágenes. No lleva etiqueta de cierre (es auto-cerrada). Tiene dos atributos vitales: `src` (la dirección o URL de la imagen) y `alt` (un texto descriptivo si la imagen no carga o para personas con lectores de pantalla).",
        exampleCode: `<img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400" alt="Vista del planeta Tierra desde el espacio">`,
        themes: {
            space: {
                missionTitle: "Misión: Transmitir Fotografía Satelital",
                instructions: "Inserta una imagen `<img>` del telescopio espacial con el atributo `src=\"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500\"` y un atributo `alt` que describa la imagen (ej: alt=\"Planeta Tierra visto desde órbita\").",
                targetDescription: "Inserta una etiqueta <img> con los atributos src y alt bien definidos.",
                hint: "La etiqueta img no necesita </img>, se escribe: <img src=\"...\" alt=\"...\">",
                starterCode: makeHtmlDoc("Fotografía Satelital", "  <!-- Inserta aquí tu imagen con src y alt adentro del body -->\n")
            },
            vet: {
                missionTitle: "Misión: Foto de Portada del Perrito",
                instructions: "Inserta una imagen `<img>` tierna con `src=\"https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500\"` y un atributo `alt` que describa al cachorro (ej: alt=\"Perrito sonriente esperando adopción\").",
                targetDescription: "Agrega una etiqueta <img> con atributos src y alt.",
                hint: "Recuerda incluir alt=\"descripción\" para accesibilidad.",
                starterCode: makeHtmlDoc("Foto de la Mascota", "  <!-- Inserta aquí tu imagen con src y alt adentro del body -->\n")
            },
            cafe: {
                missionTitle: "Misión: Fotografía del Café con Arte Latte",
                instructions: "Inserta una imagen `<img>` con `src=\"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500\"` y un texto `alt` descriptivo como 'Taza de café espresso con espuma'.",
                targetDescription: "Usa <img> con los atributos src y alt.",
                hint: "La etiqueta se escribe: <img src=\"url\" alt=\"texto\">",
                starterCode: makeHtmlDoc("Café con Arte Latte", "  <!-- Inserta aquí tu imagen con src y alt adentro del body -->\n")
            },
            rock: {
                missionTitle: "Misión: Póster del Concierto de Rock",
                instructions: "Inserta la foto del recital usando `<img>` con `src=\"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500\"` y su texto `alt=\"Banda de rock tocando en vivo ante miles de fans\"`.",
                targetDescription: "Coloca una etiqueta <img> con src y alt.",
                hint: "Asegúrate de colocar las comillas en los atributos.",
                starterCode: makeHtmlDoc("Póster del Recital", "  <!-- Inserta aquí tu imagen con src y alt adentro del body -->\n")
            }
        },
        validator: (dom) => {
            const img = dom.querySelector('img');
            if (!img) {
                return { valid: false, error: "Te falta agregar la etiqueta <img>." };
            }
            const src = img.getAttribute('src');
            if (!src || !src.trim()) {
                return { valid: false, error: "La etiqueta <img> debe tener el atributo src con la URL de la imagen." };
            }
            const alt = img.getAttribute('alt');
            if (!alt || !alt.trim()) {
                return { valid: false, error: "¡Muy importante! Agrega el atributo alt=\"...\" en tu <img> para describir la imagen." };
            }
            return { valid: true };
        }
    },

    {
        id: 7,
        title: "Hipervínculos: Enlaces con la etiqueta a",
        category: "html",
        badge: "Enlaces con a",
        theory: "Los enlaces conectan páginas web mediante la etiqueta `<a>` (Anchor). El atributo `href` indica a dónde viaja el usuario cuando hace clic, y el texto entre `<a>` y `</a>` es lo que se puede cliquear.",
        exampleCode: `<a href="https://google.com">Haz clic aquí para buscar</a>`,
        themes: {
            space: {
                missionTitle: "Misión: Enlace al Archivo de Telemetría",
                instructions: "Crea un enlace `<a>` que apunte a `https://nasa.gov` con el texto 'Ver Datos en Vivo de la Misión'.",
                targetDescription: "Crea un enlace <a> con href='https://nasa.gov' y un texto descriptivo.",
                hint: "Estructura: <a href=\"https://nasa.gov\">Ver Datos en Vivo de la Misión</a>",
                starterCode: makeHtmlDoc("Telemetría Espacial", "  <!-- Crea un enlace con <a> y el atributo href adentro del body -->\n")
            },
            vet: {
                missionTitle: "Misión: Enlace al Formulario de Adopción",
                instructions: "Crea un enlace `<a>` con el atributo `href=\"https://adopciones.org\"` y el texto de botón '¡Quiero adoptar esta mascota!'.",
                targetDescription: "Escribe una etiqueta <a> con su atributo href y texto dentro.",
                hint: "No olvides cerrar con </a> después del texto.",
                starterCode: makeHtmlDoc("Formulario de Adopción", "  <!-- Crea un enlace con <a> adentro del body -->\n")
            },
            cafe: {
                missionTitle: "Misión: Botón para Descargar el Menú",
                instructions: "Crea un enlace `<a>` que lleve a `https://pixelcafe.com/menu` con el texto 'Descargar Carta Digital en PDF'.",
                targetDescription: "Crea la etiqueta <a> con href=\"https://pixelcafe.com/menu\".",
                hint: "Usa <a href=\"...\">Texto del enlace</a>",
                starterCode: makeHtmlDoc("Carta Digital", "  <!-- Crea un enlace con <a> adentro del body -->\n")
            },
            rock: {
                missionTitle: "Misión: Enlace a Comprar Entradas",
                instructions: "Crea un enlace `<a>` que lleve a `https://tickets-rock.com` con el texto 'Comprar Entradas para el Concierto'.",
                targetDescription: "Crea una etiqueta <a> con href=\"https://tickets-rock.com\" y texto de venta.",
                hint: "Verifica que el atributo href tenga las comillas correctas.",
                starterCode: makeHtmlDoc("Entradas del Concierto", "  <!-- Crea un enlace con <a> adentro del body -->\n")
            }
        },
        validator: (dom) => {
            const a = dom.querySelector('a');
            if (!a) {
                return { valid: false, error: "Te falta crear la etiqueta de enlace <a>." };
            }
            const href = a.getAttribute('href');
            if (!href || !href.trim()) {
                return { valid: false, error: "El enlace <a> debe tener un atributo href con el destino web." };
            }
            if (!a.textContent.trim()) {
                return { valid: false, error: "El enlace <a> debe tener un texto visible entre <a> y </a>." };
            }
            return { valid: true };
        }
    },

    {
        id: 8,
        title: "Contenedores: Agrupando con div",
        category: "html",
        badge: "Contenedor div",
        theory: "La etiqueta `<div>` (Division) es una caja invisible que se utiliza para agrupar elementos relacionados. Es el bloque fundamental para construir tarjetas, secciones y layouts ordenados.",
        exampleCode: `<div>\n  <h2>Título de la Tarjeta</h2>\n  <p>Descripción dentro de la tarjeta.</p>\n</div>`,
        themes: {
            space: {
                missionTitle: "Misión: Módulo de la Estación Espacial",
                instructions: "Crea un contenedor `<div>` y dentro de él coloca un encabezado `<h2>` con el nombre del módulo (ej: 'Módulo de Navegación') y un párrafo `<p>` con su estado (ej: 'Operando al 100% de potencia').",
                targetDescription: "Crea un <div> que contenga un <h2> y un <p> en su interior.",
                hint: "El <h2> y el <p> deben estar encerrados entre <div> y </div>.",
                starterCode: makeHtmlDoc("Módulo Espacial", "  <!-- Crea un div contenedor con un h2 y un p adentro -->\n")
            },
            vet: {
                missionTitle: "Misión: Tarjeta de Ficha de Mascota",
                instructions: "Crea un contenedor `<div>` y dentro coloca un `<h2>` con el nombre de un gatito o perrito (ej: 'Mishi') y un `<p>` con su edad y descripción (ej: '2 años, juguetón y vacunado').",
                targetDescription: "Envuelve un <h2> y un <p> dentro de una etiqueta <div>.",
                hint: "Recuerda: <div> <h2>...</h2> <p>...</p> </div>",
                starterCode: makeHtmlDoc("Ficha de Mascota", "  <!-- Crea un contenedor <div> con <h2> y <p> adentro -->\n")
            },
            cafe: {
                missionTitle: "Misión: Tarjeta de Producto del Menú",
                instructions: "Crea un `<div>` que represente una tarjeta de producto. Adentro pon un `<h2>` con el producto (ej: 'Mocca de Avellanas') y un `<p>` con el precio y descripción.",
                targetDescription: "Crea un <div> conteniendo un <h2> y un <p>.",
                hint: "Asegúrate de cerrar tanto el <h2>, el <p> como el </div> final.",
                starterCode: makeHtmlDoc("Producto Especial", "  <!-- Crea un <div> con un <h2> y un <p> adentro -->\n")
            },
            rock: {
                missionTitle: "Misión: Ficha de Integrante de la Banda",
                instructions: "Crea un `<div>` que agrupe la información del guitarrista. Adentro coloca un `<h2>` con su nombre y un `<p>` con su solo favorito.",
                targetDescription: "Agrupa un <h2> y un <p> dentro de un <div>.",
                hint: "Estructura: <div> <h2>Nombre</h2> <p>Rol</p> </div>",
                starterCode: makeHtmlDoc("Integrante de la Banda", "  <!-- Crea un <div> con un <h2> y un <p> adentro -->\n")
            }
        },
        validator: (dom) => {
            const div = dom.querySelector('div');
            if (!div) {
                return { valid: false, error: "Te falta crear la etiqueta contenedora <div>." };
            }
            const h2 = div.querySelector('h2');
            if (!h2 || !h2.textContent.trim()) {
                return { valid: false, error: "Dentro del <div> debes colocar un encabezado <h2>." };
            }
            const p = div.querySelector('p');
            if (!p || !p.textContent.trim()) {
                return { valid: false, error: "Dentro del <div> debes colocar un párrafo <p>." };
            }
            return { valid: true };
        }
    },

    {
        id: 9,
        title: "Integración HTML: Tarjeta Completa",
        category: "html",
        badge: "Tarjeta Integrada",
        theory: "En el desarrollo web real, combinamos varios elementos dentro de un `<div>`: encabezados, párrafos, imágenes y botones/enlaces para formar una 'Card' o tarjeta de contenido.",
        exampleCode: `<div>\n  <img src="https://via.placeholder.com/150" alt="Demo">\n  <h2>Título de la Card</h2>\n  <p>Breve descripción.</p>\n  <a href="#">Saber más</a>\n</div>`,
        themes: {
            space: {
                missionTitle: "Misión: Ficha Técnica del Planeta",
                instructions: "Crea un `<div>` que contenga: una imagen `<img>` del espacio (con src y alt), un título `<h2>` con el nombre de un planeta, un párrafo `<p>` con datos curiosos y un enlace `<a>` para 'Explorar órbita'.",
                targetDescription: "Crea un <div> con: <img> (con src y alt), <h2>, <p> y <a> en su interior.",
                hint: "Todos los elementos (img, h2, p, a) deben estar dentro del mismo <div>.",
                starterCode: makeHtmlDoc("Ficha Planetaria", "  <div>\n    <!-- Agrega aquí: img, h2, p y a -->\n  </div>")
            },
            vet: {
                missionTitle: "Misión: Ficha de Adopción Completa",
                instructions: "Crea un `<div>` que contenga: la foto del perrito `<img>` (con src y alt), su nombre en un `<h2>`, su historia en un `<p>` y un enlace `<a>` con texto 'Adoptar ahora'.",
                targetDescription: "Crea un <div> que contenga: <img>, <h2>, <p> y <a>.",
                hint: "Verifica que el <a> tenga atributo href y el <img> tenga src y alt.",
                starterCode: makeHtmlDoc("Ficha de Adopción", "  <div>\n    <!-- Agrega aquí: img, h2, p y a -->\n  </div>")
            },
            cafe: {
                missionTitle: "Misión: Tarjeta Promocional de la Cafetería",
                instructions: "Crea un `<div>` con: una imagen `<img>` del café, un título `<h2>` (ej. 'Combo Desayuno'), un párrafo `<p>` con el detalle y un enlace `<a>` para 'Ordenar por Delivery'.",
                targetDescription: "Crea un <div> con los 4 elementos: <img>, <h2>, <p> y <a>.",
                hint: "Revisa cerrar todas las etiquetas correctamente.",
                starterCode: makeHtmlDoc("Promoción del Café", "  <div>\n    <!-- Agrega aquí: img, h2, p y a -->\n  </div>")
            },
            rock: {
                missionTitle: "Misión: Tarjeta del Nuevo Sencillo",
                instructions: "Crea un `<div>` con: la portada del disco en un `<img>`, el título de la canción en un `<h2>`, un `<p>` con la fecha de estreno y un enlace `<a>` que diga 'Escuchar en Spotify'.",
                targetDescription: "Agrupa un <img>, <h2>, <p> y <a> dentro de un <div>.",
                hint: "Coloca los 4 elementos dentro del bloque <div>...</div>.",
                starterCode: makeHtmlDoc("Nuevo Sencillo", "  <div>\n    <!-- Agrega aquí: img, h2, p y a -->\n  </div>")
            }
        },
        validator: (dom) => {
            const div = dom.querySelector('div');
            if (!div) return { valid: false, error: "Te falta crear la etiqueta contenedora <div>." };
            const img = div.querySelector('img');
            if (!img || !img.getAttribute('src') || !img.getAttribute('alt')) {
                return { valid: false, error: "Dentro del <div> debe haber una imagen <img> con atributos src y alt." };
            }
            const h2 = div.querySelector('h2');
            if (!h2 || !h2.textContent.trim()) {
                return { valid: false, error: "Dentro del <div> debe haber un título <h2> con texto." };
            }
            const p = div.querySelector('p');
            if (!p || !p.textContent.trim()) {
                return { valid: false, error: "Dentro del <div> debe haber un párrafo <p> con texto." };
            }
            const a = div.querySelector('a');
            if (!a || !a.getAttribute('href') || !a.textContent.trim()) {
                return { valid: false, error: "Dentro del <div> debe haber un enlace <a> con href y texto." };
            }
            return { valid: true };
        }
    },

    {
        id: 10,
        title: "Proyecto HTML: Sitio Web Estructural Completo",
        category: "html",
        badge: "Página HTML Completa",
        theory: "¡Llegó la hora de demostrar todo tu poder en HTML! Una página web real une la estructura base, encabezados, párrafos explicativos, una lista ordenada o desordenada y enlaces de acción.",
        exampleCode: `<!DOCTYPE html>\n<html>\n  <head><title>Título</title></head>\n  <body>\n    <h1>Encabezado</h1>\n    <p>Texto</p>\n    <ul><li>Opción</li></ul>\n    <a href="#">Ir</a>\n  </body>\n</html>`,
        themes: {
            space: {
                missionTitle: "Misión: Portal de la Agencia Espacial",
                instructions: "Construye la página completa de la estación espacial. Debe tener: estructura completa (<!DOCTYPE html>, <html>, <head> con <title>, <body>), un `<h1>`, un `<p>` de introducción, una lista `<ul>` con 3 objetivos de la misión y un enlace `<a>` a la sala de control.",
                targetDescription: "Arma la estructura HTML completa con <h1>, <p>, <ul> con 3 <li> y un <a>.",
                hint: "Recuerda meter el <h1>, <p>, <ul> y <a> adentro del <body>.",
                starterCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Centro Espacial</title>\n  </head>\n  <body>\n    <!-- Completa aquí con h1, p, ul con 3 li y un enlace a -->\n  </body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Portal Web del Refugio Patitas",
                instructions: "Construye la página oficial del refugio con: estructura completa, un título `<h1>`, un `<p>` que invite a adoptar, una lista `<ul>` con 3 beneficios de adoptar y un enlace `<a>` con href para contactar.",
                targetDescription: "Escribe un documento HTML completo con <h1>, <p>, <ul> con 3 <li> y <a>.",
                hint: "El <h1> y la lista <ul> deben estar dentro de <body>...</body>.",
                starterCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Refugio Patitas</title>\n  </head>\n  <body>\n    <!-- Tu código aquí -->\n  </body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Portal Web del Pixel Café",
                instructions: "Construye la página principal de la cafetería con: estructura base, un `<h1>` con el nombre del café, un `<p>` sobre el café de especialidad, una lista `<ul>` con 3 postres de la casa y un enlace `<a>` para hacer pedidos.",
                targetDescription: "Crea el archivo HTML completo con <h1>, <p>, <ul> con 3 <li> y un <a>.",
                hint: "Verifica que el <ul> tenga sus tres <li> cerrados.",
                starterCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Pixel Café</title>\n  </head>\n  <body>\n    <!-- Tu código aquí -->\n  </body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Sitio Web Oficial de la Banda",
                instructions: "Construye el sitio oficial de Los Byte-les con: estructura completa, un título `<h1>`, un `<p>` con la historia del grupo, una lista `<ul>` con 3 países de la gira y un enlace `<a>` para comprar mercancía oficial.",
                targetDescription: "Crea el documento HTML con <h1>, <p>, <ul> (con 3 <li>) y un enlace <a>.",
                hint: "Asegúrate de cerrar todas las etiquetas en orden inverso.",
                starterCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Los Byte-les</title>\n  </head>\n  <body>\n    <!-- Tu código aquí -->\n  </body>\n</html>`
            }
        },
        validator: (dom, rawCode) => {
            if (!rawCode.toLowerCase().includes('<!doctype html>')) {
                return { valid: false, error: "Incluye <!DOCTYPE html> al principio." };
            }
            const body = dom.querySelector('body');
            if (!body) return { valid: false, error: "Falta la etiqueta <body>." };
            const h1 = body.querySelector('h1');
            if (!h1 || !h1.textContent.trim()) return { valid: false, error: "Falta el encabezado <h1> en el body." };
            const p = body.querySelector('p');
            if (!p || !p.textContent.trim()) return { valid: false, error: "Falta un párrafo <p> explicativo." };
            const ul = body.querySelector('ul');
            if (!ul || ul.querySelectorAll('li').length < 3) {
                return { valid: false, error: "Falta una lista <ul> con al menos 3 elementos <li>." };
            }
            const a = body.querySelector('a');
            if (!a || !a.getAttribute('href')) {
                return { valid: false, error: "Falta un enlace <a> con atributo href." };
            }
            return { valid: true };
        }
    },

    // ==========================================
    // NIVELES 11 Y 12: TABLAS EN HTML
    // ==========================================
    {
        id: 11,
        title: "Tablas Básicas: Filas, Cabeceras y Celdas",
        category: "tables",
        badge: "Tablas table y tr",
        theory: "Las tablas en HTML se crean con `<table>`. Cada fila horizontal se define con `<tr>` (Table Row). Para los títulos de las columnas usamos `<th>` (Table Header, que sale en negrita y centrado) y para las celdas con datos usamos `<td>` (Table Data).",
        exampleCode: `<table>\n  <tr>\n    <th>Nombre</th>\n    <th>Rol</th>\n  </tr>\n  <tr>\n    <td>Leo</td>\n    <td>Piloto</td>\n  </tr>\n</table>`,
        themes: {
            space: {
                missionTitle: "Misión: Tabla de Tripulación Espacial",
                instructions: "Crea una tabla `<table>` con una fila de cabecera `<tr>` que tenga dos `<th>` ('Astronauta' y 'Especialidad') y debajo una fila `<tr>` de datos con dos celdas `<td>` con los datos de un tripulante.",
                targetDescription: "Crea una tabla <table> con 2 filas (tr): la primera con 2 <th> y la segunda con 2 <td>.",
                hint: "Recuerda: <table> <tr> <th>...</th> <th>...</th> </tr> <tr> <td>...</td> <td>...</td> </tr> </table>",
                starterCode: makeHtmlDoc("Tripulación Espacial", "  <!-- Crea tu tabla adentro del body -->\n  <table>\n    <!-- Fila 1 de encabezados -->\n    <!-- Fila 2 de datos -->\n  </table>")
            },
            vet: {
                missionTitle: "Misión: Tabla de Mascotas Registradas",
                instructions: "Crea una tabla `<table>` que tenga una fila de cabeceras con dos `<th>` ('Mascota' y 'Especie') y una fila de datos con dos `<td>` (ej: 'Milo' y 'Gato persa').",
                targetDescription: "Crea una tabla <table> con una fila de títulos (th) y una fila de datos (td).",
                hint: "Usa <th> para los encabezados y <td> para los datos.",
                starterCode: makeHtmlDoc("Registro de Mascotas", "  <!-- Crea tu tabla adentro del body -->\n  <table>\n    <!-- Agrega tus filas tr, th y td -->\n  </table>")
            },
            cafe: {
                missionTitle: "Misión: Tabla de Bebidas y Precios",
                instructions: "Crea una tabla `<table>` con una fila de cabecera que contenga dos `<th>` ('Bebida' y 'Precio') y una fila de datos con dos `<td>` (ej: 'Capuchino' y '$350').",
                targetDescription: "Crea una tabla <table> con 2 <tr>: una con 2 <th> y otra con 2 <td>.",
                hint: "Escribe <tr> <th>Bebida</th> <th>Precio</th> </tr>",
                starterCode: makeHtmlDoc("Menú de Cafetería", "  <!-- Crea tu tabla adentro del body -->\n  <table>\n    <!-- Agrega tus filas tr, th y td -->\n  </table>")
            },
            rock: {
                missionTitle: "Misión: Tabla de Integrantes de la Banda",
                instructions: "Crea una tabla `<table>` con una fila de cabecera con dos `<th>` ('Músico' e 'Instrumento') y una fila de datos con dos celdas `<td>` con los datos del guitarrista.",
                targetDescription: "Crea una tabla <table> con encabezados <th> y datos <td>.",
                hint: "Verifica cerrar cada <th>, <td>, <tr> y el </table> final.",
                starterCode: makeHtmlDoc("Integrantes de la Banda", "  <!-- Crea tu tabla adentro del body -->\n  <table>\n    <!-- Agrega tus filas tr, th y td -->\n  </table>")
            }
        },
        validator: (dom) => {
            const table = dom.querySelector('table');
            if (!table) return { valid: false, error: "Te falta crear la etiqueta <table>." };
            const rows = table.querySelectorAll('tr');
            if (rows.length < 2) {
                return { valid: false, error: `Tu tabla debe tener al menos 2 filas <tr> (una para encabezados y otra para datos). Ahora tiene ${rows.length}.` };
            }
            const headers = rows[0].querySelectorAll('th');
            if (headers.length < 2) {
                return { valid: false, error: "La primera fila de tu tabla debe tener al menos 2 encabezados <th>." };
            }
            const dataCells = rows[1].querySelectorAll('td');
            if (dataCells.length < 2) {
                return { valid: false, error: "La segunda fila debe tener al menos 2 celdas de datos <td>." };
            }
            return { valid: true };
        }
    },

    {
        id: 12,
        title: "Tablas Estructuradas: Múltiples Filas de Datos",
        category: "tables",
        badge: "Tabla Multilínea",
        theory: "Las tablas suelen organizar gran cantidad de datos. Mantienen una primera fila de títulos con `<th>`, seguida de 3 o más filas `<tr>` con celdas `<td>` que coinciden en el número de columnas.",
        exampleCode: `<table>\n  <tr>\n    <th>Misión</th>\n    <th>Año</th>\n    <th>Estado</th>\n  </tr>\n  <tr>\n    <td>Apolo 11</td>\n    <td>1969</td>\n    <td>Éxito</td>\n  </tr>\n  <tr>\n    <td>Artemis I</td>\n    <td>2022</td>\n    <td>Completado</td>\n  </tr>\n  <tr>\n    <td>Artemis II</td>\n    <td>2025</td>\n    <td>En curso</td>\n  </tr>\n</table>`,
        themes: {
            space: {
                missionTitle: "Misión: Cronograma de Misiones Espaciales",
                instructions: "Crea una tabla con 3 columnas en su cabecera `<th>` ('Misión', 'Planeta', 'Año') y al menos 3 filas `<tr>` de datos con 3 celdas `<td>` cada una describiendo diferentes expediciones.",
                targetDescription: "Crea una <table> con 1 fila de encabezado (3 th) y al menos 3 filas de datos (3 td en cada una).",
                hint: "Tendrás en total 4 filas <tr>: 1 con th y 3 con td.",
                starterCode: makeHtmlDoc("Cronograma Espacial", "  <table>\n    <tr>\n      <th>Misión</th>\n      <th>Planeta</th>\n      <th>Año</th>\n    </tr>\n    <!-- Agrega aquí 3 filas <tr> con 3 <td> cada una -->\n  </table>")
            },
            vet: {
                missionTitle: "Misión: Registro de Turnos de Vacunación",
                instructions: "Crea una tabla con 3 columnas `<th>` ('Paciente', 'Vacuna', 'Fecha') y al menos 3 filas `<tr>` de datos con sus respectivos `<td>` para diferentes mascotas.",
                targetDescription: "Crea una tabla con cabecera de 3 <th> y 3 filas de datos con 3 <td> cada una.",
                hint: "Cada fila de datos debe tener exactamente 3 <td> para coincidir con las columnas.",
                starterCode: makeHtmlDoc("Turnos de Vacunación", "  <table>\n    <tr>\n      <th>Paciente</th>\n      <th>Vacuna</th>\n      <th>Fecha</th>\n    </tr>\n    <!-- Agrega aquí 3 filas <tr> con 3 <td> cada una -->\n  </table>")
            },
            cafe: {
                missionTitle: "Misión: Carta de Precios y Tamaños",
                instructions: "Crea una tabla con 3 columnas `<th>` ('Café', 'Tamaño', 'Precio') y al menos 3 filas `<tr>` de datos con 3 celdas `<td>` cada una (ej. Espresso, Latte, Mocca).",
                targetDescription: "Crea una tabla con 3 <th> y al menos 3 filas de datos con 3 <td> cada una.",
                hint: "Asegúrate de que cada fila <tr> tenga 3 celdas <td>.",
                starterCode: makeHtmlDoc("Precios del Café", "  <table>\n    <tr>\n      <th>Café</th>\n      <th>Tamaño</th>\n      <th>Precio</th>\n    </tr>\n    <!-- Agrega aquí 3 filas <tr> con 3 <td> cada una -->\n  </table>")
            },
            rock: {
                missionTitle: "Misión: Calendario de Gira Mundial",
                instructions: "Crea una tabla con 3 columnas `<th>` ('Ciudad', 'Estadio', 'Fecha') y al menos 3 filas `<tr>` de recitales con 3 celdas `<td>` cada una (ej. Santiago, Buenos Aires, Madrid).",
                targetDescription: "Crea una tabla con 3 encabezados <th> y 3 filas de recitales con 3 <td> cada una.",
                hint: "En total la tabla tendrá 4 <tr>: la de títulos y las 3 de recitales.",
                starterCode: makeHtmlDoc("Gira Mundial", "  <table>\n    <tr>\n      <th>Ciudad</th>\n      <th>Estadio</th>\n      <th>Fecha</th>\n    </tr>\n    <!-- Agrega aquí 3 filas <tr> con 3 <td> cada una -->\n  </table>")
            }
        },
        validator: (dom) => {
            const table = dom.querySelector('table');
            if (!table) return { valid: false, error: "Falta la etiqueta <table>." };
            const rows = table.querySelectorAll('tr');
            if (rows.length < 4) {
                return { valid: false, error: `Tu tabla debe tener al menos 4 filas <tr> en total (1 de cabecera y 3 de datos). Tienes ${rows.length}.` };
            }
            const headers = rows[0].querySelectorAll('th');
            if (headers.length < 3) {
                return { valid: false, error: `La fila de cabecera debe tener 3 columnas <th>. Tienes ${headers.length}.` };
            }
            for (let i = 1; i <= 3; i++) {
                const tds = rows[i].querySelectorAll('td');
                if (tds.length < 3) {
                    return { valid: false, error: `La fila de datos ${i} debe tener 3 celdas <td>.` };
                }
            }
            return { valid: true };
        }
    },

    // ==========================================
    // NIVELES 13 A 20: CSS INTERNO (<style>)
    // ==========================================
    {
        id: 13,
        title: "CSS Interno: Etiqueta <style> y Color de Texto",
        category: "css",
        badge: "CSS color",
        theory: "Para darle estilo a nuestro HTML, podemos incluir la etiqueta `<style>` dentro del `<head>`. La propiedad `color` cambia el color del texto. Puedes usar nombres de colores en inglés (`red`, `gold`, `deepskyblue`) o códigos hexadecimales (`#38bdf8`).",
        exampleCode: `<head>\n  <style>\n    h1 {\n      color: deepskyblue;\n    }\n  </style>\n</head>`,
        themes: {
            space: {
                missionTitle: "Misión: Luces Neón en la Cabina",
                instructions: "Dentro del `<head>`, agrega la etiqueta `<style>`. Luego escribe una regla CSS que seleccione el `h1` y le asigne un color espacial llamativo usando la propiedad `color` (por ejemplo: `color: cyan;` o `color: #38bdf8;`).",
                targetDescription: "Agrega <style> dentro de <head> y dale a h1 la propiedad color.",
                hint: "Sintaxis: <style> h1 { color: cyan; } </style>",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>AstroCode CSS</title>\n  <!-- Agrega la etiqueta <style> aquí -->\n</head>\n<body>\n  <h1>Estación Alfa en Órbita</h1>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Color para el Título del Refugio",
                instructions: "Dentro del `<head>`, crea una etiqueta `<style>`. Aplica una regla CSS al `h1` con la propiedad `color` para que tenga un verde amigable (ej: `color: forestgreen;` o `color: #22c55e;`).",
                targetDescription: "Crea <style> en <head> y define color para el elemento h1.",
                hint: "Escribe: <style> h1 { color: #22c55e; } </style>",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Refugio Patitas</title>\n  <!-- Agrega <style> aquí -->\n</head>\n<body>\n  <h1>¡Salva una Mascota Hoy!</h1>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Color Cálido para el Café",
                instructions: "Dentro del `<head>`, escribe una etiqueta `<style>` y aplica la propiedad `color` al selector `h1` para que luzca de color marrón café o naranja (ej: `color: chocolate;` o `color: #ea580c;`).",
                targetDescription: "Añade <style> en el <head> y aplica color al h1.",
                hint: "Usa: <style> h1 { color: chocolate; } </style>",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Pixel Café</title>\n  <!-- Agrega <style> aquí -->\n</head>\n<body>\n  <h1>El Rincón del Café</h1>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Color Eléctrico del Logo de Rock",
                instructions: "Dentro del `<head>`, crea la etiqueta `<style>`. Haz que el `h1` tenga un color rojo o púrpura vibrante usando la propiedad `color` (ej: `color: crimson;` o `color: #f43f5e;`).",
                targetDescription: "Agrega <style> en <head> y asigna la propiedad color al h1.",
                hint: "Escribe: <style> h1 { color: crimson; } </style>",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Los Byte-les</title>\n  <!-- Agrega <style> aquí -->\n</head>\n<body>\n  <h1>Los Byte-les En Vivo</h1>\n</body>\n</html>`
            }
        },
        validator: (dom, rawCode) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta agregar la etiqueta <style> dentro de <head>." };
            const styleText = style.textContent.toLowerCase();
            if (!styleText.includes('h1') || !styleText.includes('color')) {
                return { valid: false, error: "Debes seleccionar h1 y aplicarle la propiedad 'color: ...;' dentro de <style>." };
            }
            return { valid: true };
        }
    },

    {
        id: 14,
        title: "Fondos de Pantalla: background-color",
        category: "css",
        badge: "CSS background",
        theory: "La propiedad `background-color` permite cambiar el color de fondo de cualquier elemento. Si se lo aplicamos a `body`, cambiará el fondo de toda la página web.",
        exampleCode: `<style>\n  body {\n    background-color: #0f172a;\n    color: white;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Fondo Oscuro del Espacio Profundo",
                instructions: "En tu etiqueta `<style>`, selecciona el `body` y dale un color de fondo oscuro usando `background-color` (ej: `background-color: #0b0f19;` o `background-color: black;`) y cambia el `color` del texto a blanco (`white`) para que se lea.",
                targetDescription: "Aplica background-color oscuro y color a la etiqueta body.",
                hint: "Dentro de <style>: body { background-color: #0b0f19; color: white; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Escribe la regla para el body aquí */\n  </style>\n</head>\n<body>\n  <h1>Observatorio Galáctico</h1>\n  <p>Vistas desde la órbita terrestre.</p>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Fondo Suave para el Refugio",
                instructions: "En tu etiqueta `<style>`, dale al `body` un color de fondo amigable con `background-color` (ej: `background-color: #f0fdf4;` o `background-color: honeydew;`).",
                targetDescription: "Aplica background-color a la etiqueta body.",
                hint: "Escribe: body { background-color: #f0fdf4; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Escribe la regla para el body aquí */\n  </style>\n</head>\n<body>\n  <h1>Clínica Veterinaria</h1>\n  <p>Cuidando a tus mejores amigos.</p>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Ambiente Acogedor del Café",
                instructions: "En tu etiqueta `<style>`, dale al `body` un fondo cálido tipo crema o vainilla usando `background-color` (ej: `background-color: #fffbeb;` o `background-color: floralwhite;`).",
                targetDescription: "Aplica background-color al selector body.",
                hint: "Usa: body { background-color: #fffbeb; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Escribe la regla para el body aquí */\n  </style>\n</head>\n<body>\n  <h1>Pixel Café & Bakery</h1>\n  <p>Disfruta de una taza caliente.</p>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Escenario Oscuro de Concierto",
                instructions: "En tu etiqueta `<style>`, dale al `body` un fondo negro o gris oscuro con `background-color: #121212;` y pon el `color: white;` para el texto.",
                targetDescription: "Aplica background-color al body y color para el texto.",
                hint: "Escribe: body { background-color: #121212; color: white; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Escribe la regla para el body aquí */\n  </style>\n</head>\n<body>\n  <h1>Noche de Rock Pesado</h1>\n  <p>El recital comienza en minutos.</p>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const text = style.textContent.toLowerCase().replace(/\s+/g, '');
            if (!text.includes('body{') && !text.includes('body {')) {
                return { valid: false, error: "Debes seleccionar la etiqueta 'body' en tu CSS." };
            }
            if (!text.includes('background-color:') && !text.includes('background:')) {
                return { valid: false, error: "Falta la propiedad 'background-color' dentro de la regla de body." };
            }
            return { valid: true };
        }
    },

    {
        id: 15,
        title: "Tipografía: font-size y font-family",
        category: "css",
        badge: "CSS Tipografía",
        theory: "Podemos controlar el tamaño de la letra con `font-size` (usando píxeles como `32px` o `18px`) y cambiar la fuente tipográfica con `font-family` (por ejemplo `sans-serif`, `'Segoe UI'`, o `monospace`).",
        exampleCode: `<style>\n  h1 {\n    font-size: 36px;\n    font-family: sans-serif;\n  }\n  p {\n    font-size: 18px;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Tipografía Digital Futurista",
                instructions: "En tu `<style>`, dale al `h1` un tamaño `font-size: 32px;` y una familia tipográfica futurista `font-family: monospace;`. Luego dale al `<p>` un tamaño `font-size: 18px;`.",
                targetDescription: "Aplica font-size y font-family a h1, y font-size a p.",
                hint: "Escribe: h1 { font-size: 32px; font-family: monospace; } y p { font-size: 18px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Agrega estilos de font-size y font-family */\n  </style>\n</head>\n<body>\n  <h1>SISTEMA DE RADAR ACTIVO</h1>\n  <p>Escaneando el cuadrante espacial...</p>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Letra Clara y Amigable",
                instructions: "En tu `<style>`, dale al `h1` un `font-size: 30px;` y `font-family: sans-serif;`. Dale al `<p>` un `font-size: 16px;` para que se lea cómodamente.",
                targetDescription: "Configura font-size y font-family en h1, y font-size en p.",
                hint: "Usa: h1 { font-size: 30px; font-family: sans-serif; } p { font-size: 16px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Reglas para h1 y p */\n  </style>\n</head>\n<body>\n  <h1>Horarios de Atención Veterinaria</h1>\n  <p>Abierto todos los días de 8:00 a 20:00.</p>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Estilo Elegante en la Carta",
                instructions: "En tu `<style>`, dale al `h1` un `font-size: 34px;` y `font-family: serif;`. Dale al `<p>` un tamaño `font-size: 18px;`.",
                targetDescription: "Aplica font-size y font-family al h1, y font-size al p.",
                hint: "Usa: h1 { font-size: 34px; font-family: serif; } p { font-size: 18px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Define fuentes y tamaños */\n  </style>\n</head>\n<body>\n  <h1>Granos Seleccionados</h1>\n  <p>Café de origen colombiano tostado artesanalmente.</p>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Título Gigante de Rock",
                instructions: "En tu `<style>`, haz que el `h1` sea enorme con `font-size: 40px;` y dale `font-family: sans-serif;`. Dale al párrafo `<p>` un `font-size: 20px;`.",
                targetDescription: "Aplica font-size: 40px y font-family a h1, y font-size: 20px a p.",
                hint: "Escribe: h1 { font-size: 40px; font-family: sans-serif; } p { font-size: 20px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Estilos para h1 y p */\n  </style>\n</head>\n<body>\n  <h1>LOS BYTE-LES EN VIVO</h1>\n  <p>¡Gira sudamericana confirmada!</p>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const text = style.textContent.toLowerCase();
            if (!text.includes('font-size')) {
                return { valid: false, error: "Debes usar la propiedad 'font-size' para cambiar el tamaño de letra." };
            }
            if (!text.includes('font-family')) {
                return { valid: false, error: "Debes usar la propiedad 'font-family' para cambiar el tipo de fuente." };
            }
            return { valid: true };
        }
    },

    {
        id: 16,
        title: "Alineación de Texto: text-align",
        category: "css",
        badge: "CSS text-align",
        theory: "La propiedad `text-align` define la alineación horizontal del texto dentro de un contenedor. Los valores más utilizados son `center` (centrado), `right` (a la derecha) y `left` (a la izquierda por defecto).",
        exampleCode: `<style>\n  h1 {\n    text-align: center;\n  }\n  p {\n    text-align: center;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Centrar el Panel de Transmisión",
                instructions: "En tu `<style>`, centra tanto el `h1` como el `<p>` usando la propiedad `text-align: center;` para que queden alineados simétricamente en el monitor.",
                targetDescription: "Aplica text-align: center a h1 y p.",
                hint: "Puedes hacer: h1, p { text-align: center; } o definirlo por separado.",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Centra el h1 y el p con text-align: center */\n  </style>\n</head>\n<body>\n  <h1>TRANSMISIÓN DESDE MARTE</h1>\n  <p>Conexión satelital establecida con éxito.</p>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Centrar el Cartel de Bienvenida",
                instructions: "Aplica `text-align: center;` tanto a `h1` como a `p` en tu hoja de estilos `<style>` para que la presentación del refugio quede perfectamente centrada.",
                targetDescription: "Centra el texto de h1 y p con text-align: center.",
                hint: "Escribe: h1 { text-align: center; } p { text-align: center; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Tu CSS aquí */\n  </style>\n</head>\n<body>\n  <h1>Bienvenido a Patitas Felices</h1>\n  <p>El hogar temporal de más de 40 cachorros.</p>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Portada Centrada del Menú",
                instructions: "Usa `text-align: center;` en tu `<style>` para centrar el encabezado `h1` y el párrafo `<p>` de tu cafetería.",
                targetDescription: "Aplica text-align: center al h1 y al p.",
                hint: "Dentro de <style>: h1 { text-align: center; } p { text-align: center; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Tu CSS aquí */\n  </style>\n</head>\n<body>\n  <h1>Pixel Specialty Coffee</h1>\n  <p>Pasión por cada gota extraída.</p>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Centrar el Título del Escenario",
                instructions: "En tu bloque `<style>`, alinea al centro el `h1` y el `<p>` con `text-align: center;`.",
                targetDescription: "Centra el texto del h1 y p con text-align: center.",
                hint: "Usa text-align: center;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Tu CSS aquí */\n  </style>\n</head>\n<body>\n  <h1>GRAN CONCIERTO EN VIVO</h1>\n  <p>Entradas agotadas en tiempo récord.</p>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const text = style.textContent.toLowerCase().replace(/\s+/g, '');
            if (!text.includes('text-align:center')) {
                return { valid: false, error: "Debes incluir la propiedad 'text-align: center;' en tu CSS." };
            }
            return { valid: true };
        }
    },

    {
        id: 17,
        title: "Selectores de Clase: El Punto (.)",
        category: "css",
        badge: "Clases CSS .clase",
        theory: "Si queremos aplicar estilos solo a elementos específicos y no a todos los elementos del mismo tipo, usamos una clase en HTML con el atributo `class=\"mi-clase\"`. En CSS, seleccionamos esa clase anteponiendo un punto: `.mi-clase`.",
        exampleCode: `<!-- En HTML -->\n<p class=\"destacado\">Este párrafo resalta.</p>\n\n<!-- En CSS -->\n<style>\n  .destacado {\n    color: gold;\n    font-weight: bold;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Alerta de Presión en Rojo",
                instructions: "En el HTML, dale a un párrafo el atributo `class=\"alerta\"`. Luego, en `<style>`, crea la regla `.alerta` y dale `color: red;` o `color: #ef4444;`.",
                targetDescription: "Agrega class=\"alerta\" a un párrafo y estílala con .alerta { color: red; } en CSS.",
                hint: "Recuerda el punto en CSS: .alerta { color: red; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Escribe la regla para .alerta aquí */\n  </style>\n</head>\n<body>\n  <p>Nivel de combustible: 85%</p>\n  <!-- Agrega class=\"alerta\" a este párrafo -->\n  <p>¡Pérdida de presión en sector 4!</p>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Resaltar Mascota Urgente",
                instructions: "En el HTML, agrega `class=\"urgente\"` al segundo párrafo. En `<style>`, selecciona `.urgente` y dale un `color: orange;`.",
                targetDescription: "Usa class=\"urgente\" en HTML y .urgente con la propiedad color en CSS.",
                hint: "En CSS se selecciona con un punto: .urgente { color: orange; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Escribe la clase .urgente */\n  </style>\n</head>\n<body>\n  <p>Perro labrador - Adoptado</p>\n  <!-- Agrega class=\"urgente\" aquí -->\n  <p>Cachorro callejero necesita hogar urgente</p>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Etiqueta de Producto Vegano",
                instructions: "En el HTML, agrega `class=\"vegano\"` al segundo párrafo. En `<style>`, dale a `.vegano` un `color: green;`.",
                targetDescription: "Agrega class=\"vegano\" en HTML y estílalo en CSS con .vegano { color: green; }.",
                hint: "En CSS: .vegano { color: green; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Estiliza la clase .vegano */\n  </style>\n</head>\n<body>\n  <p>Tostada tradicional con queso</p>\n  <!-- Agrega class=\"vegano\" aquí -->\n  <p>Tostón de palta y semillas 100% plant-based</p>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Resaltar Entrada VIP",
                instructions: "En el HTML, añade `class=\"vip\"` al segundo párrafo. En `<style>`, selecciona `.vip` y aplícale `color: gold;`.",
                targetDescription: "Añade class=\"vip\" al párrafo y estílalo con .vip { color: gold; } en CSS.",
                hint: "Usa el punto en CSS: .vip { color: gold; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Define la clase .vip */\n  </style>\n</head>\n<body>\n  <p>Entrada General: Campo</p>\n  <!-- Agrega class=\"vip\" aquí -->\n  <p>Pase VIP: Acceso a Camarines y Prueba de Sonido</p>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const elWithClass = dom.querySelector('[class]');
            if (!elWithClass) {
                return { valid: false, error: "Te falta agregar el atributo class=\"...\" en uno de tus párrafos HTML." };
            }
            const className = elWithClass.getAttribute('class').trim();
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const styleText = style.textContent;
            if (!styleText.includes('.' + className)) {
                return { valid: false, error: `Debes usar el selector de clase en tu CSS con un punto: .${className} { color: ...; }` };
            }
            if (!styleText.toLowerCase().includes('color')) {
                return { valid: false, error: `Recuerda asignarle la propiedad 'color' dentro de tu clase .${className}.` };
            }
            return { valid: true };
        }
    },

    {
        id: 18,
        title: "Selectores de ID: El Numeral (#)",
        category: "css",
        badge: "ID CSS #id",
        theory: "A diferencia de las clases (que pueden repetirse en varios elementos), el atributo `id` es un identificador único: solo debe haber un elemento con ese ID por página. En CSS, seleccionamos un ID anteponiendo el símbolo numeral: `#mi-id`.",
        exampleCode: `<!-- En HTML -->\n<div id=\"cabecera-principal\">\n  <h1>Mi Sitio</h1>\n</div>\n\n<!-- En CSS -->\n<style>\n  #cabecera-principal {\n    background-color: navy;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Panel Maestro con ID Único",
                instructions: "En el HTML, asigna el atributo `id=\"panel-control\"` al `<div>`. Luego, en `<style>`, dale a `#panel-control` un `background-color: #1e293b;`.",
                targetDescription: "Asigna id=\"panel-control\" al div y estílalo en CSS con #panel-control.",
                hint: "En CSS los IDs llevan numeral: #panel-control { background-color: #1e293b; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Escribe la regla para el ID #panel-control */\n  </style>\n</head>\n<body>\n  <!-- Agrega id=\"panel-control\" a este div -->\n  <div>\n    <h2>Reactor Núcleo</h2>\n    <p>Operando con estabilidad.</p>\n  </div>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Ficha del Perro Destacado",
                instructions: "En el HTML, coloca `id=\"perro-mes\"` al contenedor `<div>`. En `<style>`, dale a `#perro-mes` un `background-color: #dcfce7;`.",
                targetDescription: "Usa id=\"perro-mes\" en el div y estílalo con #perro-mes en CSS.",
                hint: "Escribe: #perro-mes { background-color: #dcfce7; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Regla para #perro-mes */\n  </style>\n</head>\n<body>\n  <!-- Agrega id=\"perro-mes\" -->\n  <div>\n    <h2>Mascota Estrella: Rocky</h2>\n    <p>¡Listo para irse con una linda familia!</p>\n  </div>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Sección del Menú Especial",
                instructions: "En el HTML, dale `id=\"combo-dia\"` al contenedor `<div>`. En `<style>`, aplica a `#combo-dia` un `background-color: #fef3c7;`.",
                targetDescription: "Añade id=\"combo-dia\" al div y estílalo con #combo-dia.",
                hint: "Sintaxis CSS: #combo-dia { background-color: #fef3c7; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Regla para #combo-dia */\n  </style>\n</head>\n<body>\n  <!-- Agrega id=\"combo-dia\" -->\n  <div>\n    <h2>Combo Despertar</h2>\n    <p>Café Flat White + Croissant de manteca.</p>\n  </div>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Anuncio del Próximo Recital",
                instructions: "En el HTML, asigna `id=\"proximo-show\"` al contenedor `<div>`. En `<style>`, dale a `#proximo-show` un `background-color: #312e81;`.",
                targetDescription: "Coloca id=\"proximo-show\" al div y define estilos en #proximo-show.",
                hint: "Usa: #proximo-show { background-color: #312e81; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Estilos para #proximo-show */\n  </style>\n</head>\n<body>\n  <!-- Agrega id=\"proximo-show\" -->\n  <div>\n    <h2>Próximo Show: Estadio Obras</h2>\n    <p>Sábado 15 de Noviembre - 21:00 hs</p>\n  </div>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const elWithId = dom.querySelector('[id]');
            if (!elWithId) {
                return { valid: false, error: "Te falta agregar el atributo id=\"...\" en tu elemento <div>." };
            }
            const idName = elWithId.getAttribute('id').trim();
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const styleText = style.textContent;
            if (!styleText.includes('#' + idName)) {
                return { valid: false, error: `Debes usar el selector de ID con un numeral en tu CSS: #${idName} { background-color: ...; }` };
            }
            if (!styleText.toLowerCase().includes('background')) {
                return { valid: false, error: `Asigna 'background-color' dentro de tu selector #${idName}.` };
            }
            return { valid: true };
        }
    },

    {
        id: 19,
        title: "Modelo de Caja: Margen y Relleno (margin y padding)",
        category: "css",
        badge: "Margin y Padding",
        theory: "El modelo de caja de CSS tiene dos tipos de espacio: `padding` es el espacio interior (entre el contenido y su borde), mientras que `margin` es el espacio exterior (la separación que empuja a otros elementos hacia afuera).",
        exampleCode: `<style>\n  .caja {\n    padding: 20px;   /* Espacio por dentro */\n    margin: 15px;    /* Espacio por fuera */\n    background-color: lightgray;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Presurizar el Módulo de Control",
                instructions: "En tu `<style>`, dale a la clase `.modulo` un espacio interior `padding: 20px;` para que el texto no quede pegado a los bordes, y un `margin: 15px;` para separarlo del resto de la nave.",
                targetDescription: "Aplica padding: 20px y margin: 15px a la clase .modulo.",
                hint: "Escribe: .modulo { padding: 20px; margin: 15px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .modulo {\n      background-color: #1e293b;\n      color: white;\n      /* Agrega padding y margin aquí */\n    }\n  </style>\n</head>\n<body>\n  <div class=\"modulo\">\n    <h2>Cámara de Oxígeno</h2>\n    <p>Presión normal: 1 atm.</p>\n  </div>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Dar Espacio a la Ficha del Animal",
                instructions: "En `<style>`, aplica a `.tarjeta-mascota` un relleno interno `padding: 20px;` y un margen exterior `margin: 15px;`.",
                targetDescription: "Configura padding: 20px y margin: 15px en .tarjeta-mascota.",
                hint: "Usa: .tarjeta-mascota { padding: 20px; margin: 15px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .tarjeta-mascota {\n      background-color: #f0fdf4;\n      /* Aplica padding y margin */\n    }\n  </style>\n</head>\n<body>\n  <div class=\"tarjeta-mascota\">\n    <h2>Gatita Luna</h2>\n    <p>Super mimosa y juguetona.</p>\n  </div>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Espaciado en la Tarjeta de Postre",
                instructions: "En `<style>`, dale a la clase `.postre` un `padding: 20px;` y un `margin: 15px;` para una presentación limpia y apetitosa.",
                targetDescription: "Aplica padding: 20px y margin: 15px a la clase .postre.",
                hint: "Escribe: .postre { padding: 20px; margin: 15px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .postre {\n      background-color: #fffbeb;\n      /* Agrega padding y margin */\n    }\n  </style>\n</head>\n<body>\n  <div class=\"postre\">\n    <h2>Cheesecake de Frutos Rojos</h2>\n    <p>Receta clásica neoyorquina.</p>\n  </div>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Tarjeta del Álbum con Aire",
                instructions: "En `<style>`, dale a la clase `.album` un `padding: 20px;` y un `margin: 15px;`.",
                targetDescription: "Configura padding: 20px y margin: 15px en la clase .album.",
                hint: "Usa: .album { padding: 20px; margin: 15px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .album {\n      background-color: #1f2937;\n      color: white;\n      /* Agrega padding y margin */\n    }\n  </style>\n</head>\n<body>\n  <div class=\"album\">\n    <h2>Disco: Frecuencia Cero</h2>\n    <p>12 canciones inéditas de estudio.</p>\n  </div>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const text = style.textContent.toLowerCase();
            if (!text.includes('padding')) {
                return { valid: false, error: "Te falta la propiedad 'padding' para darle espacio interno a la caja." };
            }
            if (!text.includes('margin')) {
                return { valid: false, error: "Te falta la propiedad 'margin' para darle espacio externo a la caja." };
            }
            return { valid: true };
        }
    },

    {
        id: 20,
        title: "Bordes y Esquinas Redondeadas: border y border-radius",
        category: "css",
        badge: "Bordes y Curvas",
        theory: "La propiedad `border` dibuja un contorno alrededor de la caja indicando su grosor, estilo y color (ej: `2px solid #38bdf8;`). Para que no se vea rígida y cuadrada, usamos `border-radius` (ej: `12px` o `20px`) para redondear sus esquinas.",
        exampleCode: `<style>\n  .tarjeta {\n    border: 2px solid cyan;\n    border-radius: 16px;\n    padding: 15px;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Escotilla Redondeada del Transbordador",
                instructions: "En `<style>`, agrégale a la clase `.escotilla` un borde de `2px solid #38bdf8;` y redondea sus esquinas con `border-radius: 16px;`.",
                targetDescription: "Aplica border y border-radius a la clase .escotilla.",
                hint: "Escribe: .escotilla { border: 2px solid #38bdf8; border-radius: 16px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .escotilla {\n      background-color: #0f172a;\n      color: white;\n      padding: 20px;\n      /* Agrega border y border-radius aquí */\n    }\n  </style>\n</head>\n<body>\n  <div class=\"escotilla\">\n    <h2>Ventana Panorámica</h2>\n    <p>Vista a los anillos de Saturno.</p>\n  </div>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Tarjeta Suave y Curva del Cachorro",
                instructions: "En `<style>`, aplica a la clase `.tarjeta` un borde verde suave con `border: 2px solid #22c55e;` y esquinas redondeadas con `border-radius: 14px;`.",
                targetDescription: "Aplica border y border-radius a la clase .tarjeta.",
                hint: "Usa: .tarjeta { border: 2px solid #22c55e; border-radius: 14px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .tarjeta {\n      background-color: #f0fdf4;\n      padding: 20px;\n      /* Agrega border y border-radius */\n    }\n  </style>\n</head>\n<body>\n  <div class=\"tarjeta\">\n    <h2>Ficha Médica de Toby</h2>\n    <p>Vacunas al día y peso ideal.</p>\n  </div>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Cuadro de Promoción con Borde Cálido",
                instructions: "En `<style>`, dale a la clase `.promo` un borde con `border: 2px solid #f97316;` y bordes redondeados con `border-radius: 18px;`.",
                targetDescription: "Configura border y border-radius en .promo.",
                hint: "Escribe: .promo { border: 2px solid #f97316; border-radius: 18px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .promo {\n      background-color: #fff7ed;\n      padding: 20px;\n      /* Agrega border y border-radius */\n    }\n  </style>\n</head>\n<body>\n  <div class=\"promo\">\n    <h2>2x1 en Medialunas</h2>\n    <p>Todas las tardes de 17:00 a 19:00.</p>\n  </div>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Pase VIP con Borde Metálico",
                instructions: "En `<style>`, agrégale a la clase `.credencial` un borde llamativo con `border: 2px solid #f43f5e;` y esquinas modernas con `border-radius: 16px;`.",
                targetDescription: "Aplica border y border-radius a .credencial.",
                hint: "Usa: .credencial { border: 2px solid #f43f5e; border-radius: 16px; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .credencial {\n      background-color: #111827;\n      color: white;\n      padding: 20px;\n      /* Agrega border y border-radius */\n    }\n  </style>\n</head>\n<body>\n  <div class=\"credencial\">\n    <h2>Pase Backstage</h2>\n    <p>Acceso ilimitado al escenario principal.</p>\n  </div>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const text = style.textContent.toLowerCase();
            if (!text.includes('border:') && !text.includes('border-width:')) {
                return { valid: false, error: "Falta la propiedad 'border' para definir el contorno." };
            }
            if (!text.includes('border-radius:')) {
                return { valid: false, error: "Falta la propiedad 'border-radius' para redondear las esquinas." };
            }
            return { valid: true };
        }
    },

    // ==========================================
    // NIVELES 21 A 25: MAQUETACIÓN CON FLEXBOX
    // ==========================================
    {
        id: 21,
        title: "Flexbox: Activando la Magia con display: flex",
        category: "flexbox",
        badge: "display: flex",
        theory: "Normalmente los elementos en HTML se apilan uno debajo del otro en vertical. Cuando aplicamos `display: flex;` a un contenedor padre, se convierte en una 'caja flexible' y sus hijos se colocan uno al lado del otro en una fila horizontal automáticamente.",
        exampleCode: `<style>\n  .contenedor {\n    display: flex;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Alinear Monitores en Fila Horizontal",
                instructions: "Los tres paneles de telemetría están apilados uno debajo del otro. En tu `<style>`, aplícale a la clase `.cabina` la propiedad `display: flex;` para que se organicen lado a lado como una consola real de vuelo.",
                targetDescription: "Aplica display: flex a la clase .cabina.",
                hint: "Escribe: .cabina { display: flex; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .cabina {\n      background-color: #0f172a;\n      padding: 10px;\n      /* Activa flexbox aquí */\n    }\n    .pantalla {\n      background-color: #0284c7;\n      color: white;\n      padding: 15px;\n      margin: 5px;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"cabina\">\n    <div class=\"pantalla\">Sensor A</div>\n    <div class=\"pantalla\">Sensor B</div>\n    <div class=\"pantalla\">Sensor C</div>\n  </div>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Galería de Jaulitas en Fila",
                instructions: "Las tarjetas de los cachorros deben aparecer una al lado de la otra. En `<style>`, dale a la clase `.galeria` la propiedad `display: flex;`.",
                targetDescription: "Aplica display: flex a la clase .galeria.",
                hint: "Usa: .galeria { display: flex; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .galeria {\n      background-color: #f1f5f9;\n      padding: 10px;\n      /* Pon display: flex aquí */\n    }\n    .tarjeta {\n      background-color: #22c55e;\n      color: white;\n      padding: 15px;\n      margin: 5px;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"galeria\">\n    <div class=\"tarjeta\">Perrito 1</div>\n    <div class=\"tarjeta\">Perrito 2</div>\n    <div class=\"tarjeta\">Perrito 3</div>\n  </div>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Vitrina de Cafés en Fila",
                instructions: "En tu `<style>`, dale a la clase `.vitrina` la propiedad `display: flex;` para que los 3 tipos de grano se alineen uno al lado del otro.",
                targetDescription: "Añade display: flex a la clase .vitrina.",
                hint: "Escribe: .vitrina { display: flex; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .vitrina {\n      background-color: #fef3c7;\n      padding: 10px;\n      /* Pon display: flex aquí */\n    }\n    .grano {\n      background-color: #d97706;\n      color: white;\n      padding: 15px;\n      margin: 5px;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"vitrina\">\n    <div class=\"grano\">Colombia</div>\n    <div class=\"grano\">Etiopía</div>\n    <div class=\"grano\">Brasil</div>\n  </div>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Fila de Integrantes de la Banda",
                instructions: "En tu `<style>`, aplícale a la clase `.escenario` la propiedad `display: flex;` para que los músicos toquen parados uno al lado del otro.",
                targetDescription: "Configura display: flex en la clase .escenario.",
                hint: "Usa: .escenario { display: flex; }",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .escenario {\n      background-color: #1e1b4b;\n      padding: 10px;\n      /* Activa flexbox aquí */\n    }\n    .musico {\n      background-color: #8b5cf6;\n      color: white;\n      padding: 15px;\n      margin: 5px;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"escenario\">\n    <div class=\"musico\">Baterista</div>\n    <div class=\"musico\">Guitarrista</div>\n    <div class=\"musico\">Vocalista</div>\n  </div>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const text = style.textContent.toLowerCase().replace(/\s+/g, '');
            if (!text.includes('display:flex')) {
                return { valid: false, error: "Debes agregar la propiedad 'display: flex;' en la regla CSS del contenedor." };
            }
            return { valid: true };
        }
    },

    {
        id: 22,
        title: "Flexbox: Distribución con justify-content",
        category: "flexbox",
        badge: "justify-content",
        theory: "Una vez que el contenedor tiene `display: flex`, usamos `justify-content` para distribuir los elementos a lo largo del eje horizontal: `center` (los junta en el medio), `space-between` (los separa de punta a punta) o `space-around` (con espacios equilibrados).",
        exampleCode: `<style>\n  .contenedor {\n    display: flex;\n    justify-content: space-between;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Separar Instrumentos de Extremo a Extremo",
                instructions: "En tu clase `.panel`, ya tenemos `display: flex`. Agrega la propiedad `justify-content: space-between;` para que los instrumentos queden repartidos de lado a lado.",
                targetDescription: "Añade justify-content: space-between a la clase .panel.",
                hint: "Escribe dentro de .panel: justify-content: space-between;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .panel {\n      display: flex;\n      background-color: #0f172a;\n      padding: 15px;\n      /* Agrega justify-content: space-between aquí */\n    }\n    .item {\n      background-color: #0ea5e9;\n      color: white;\n      padding: 12px 20px;\n      border-radius: 6px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"panel\">\n    <div class=\"item\">Radar Izq</div>\n    <div class=\"item\">Compás Central</div>\n    <div class=\"item\">Propulsor Der</div>\n  </div>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Separar los Caniles Equitativamente",
                instructions: "En tu clase `.patio`, agrega `justify-content: space-around;` o `justify-content: space-between;` para distribuir a las mascotas a lo largo del patio.",
                targetDescription: "Agrega justify-content a la clase .patio.",
                hint: "Escribe: justify-content: space-between;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .patio {\n      display: flex;\n      background-color: #f0fdf4;\n      padding: 15px;\n      /* Agrega justify-content aquí */\n    }\n    .canil {\n      background-color: #16a34a;\n      color: white;\n      padding: 12px 20px;\n      border-radius: 6px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"patio\">\n    <div class=\"canil\">Canil 1</div>\n    <div class=\"canil\">Canil 2</div>\n    <div class=\"canil\">Canil 3</div>\n  </div>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Separar Menú y Botón de Pedido",
                instructions: "En la clase `.barra-superior`, agrega `justify-content: space-between;` para que el logo quede a la izquierda y el botón de pedido a la derecha.",
                targetDescription: "Aplica justify-content: space-between a la clase .barra-superior.",
                hint: "Usa: justify-content: space-between;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .barra-superior {\n      display: flex;\n      background-color: #fff7ed;\n      padding: 15px;\n      /* Agrega justify-content: space-between */\n    }\n    .elemento {\n      background-color: #c2410c;\n      color: white;\n      padding: 10px 18px;\n      border-radius: 6px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"barra-superior\">\n    <div class=\"elemento\">☕ Pixel Café</div>\n    <div class=\"elemento\">🛒 Mi Pedido</div>\n  </div>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Centrar los Altavoces del Escenario",
                instructions: "En la clase `.escenario`, usa `justify-content: center;` para colocar a los músicos perfectamente agrupados en el centro de la pista.",
                targetDescription: "Aplica justify-content: center a la clase .escenario.",
                hint: "Escribe: justify-content: center;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .escenario {\n      display: flex;\n      background-color: #18181b;\n      padding: 20px;\n      /* Centra con justify-content: center */\n    }\n    .ampli {\n      background-color: #e11d48;\n      color: white;\n      padding: 12px 20px;\n      margin: 0 10px;\n      border-radius: 6px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"escenario\">\n    <div class=\"ampli\">Marshall Izq</div>\n    <div class=\"ampli\">Marshall Der</div>\n  </div>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const text = style.textContent.toLowerCase().replace(/\s+/g, '');
            if (!text.includes('justify-content:')) {
                return { valid: false, error: "Te falta la propiedad 'justify-content' en tu contenedor flex." };
            }
            return { valid: true };
        }
    },

    {
        id: 23,
        title: "Flexbox: Alineación Vertical con align-items",
        category: "flexbox",
        badge: "align-items",
        theory: "Mientras que `justify-content` controla el eje horizontal, la propiedad `align-items` controla el eje vertical perpendicular: `center` (los centra verticalmente), `flex-start` (arriba), `flex-end` (abajo). ¡Es la forma más fácil y famosa de centrar algo en el medio exacto!",
        exampleCode: `<style>\n  .contenedor {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 200px;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Centrar la Nave en el Eje Vertical",
                instructions: "El contenedor `.espacio` tiene una altura de 150px. En `<style>`, agrégale `align-items: center;` (y mantén `justify-content: center;`) para que la cápsula quede suspendida exactamente en el centro.",
                targetDescription: "Aplica align-items: center al contenedor .espacio.",
                hint: "Escribe: align-items: center;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .espacio {\n      display: flex;\n      justify-content: center;\n      height: 150px;\n      background-color: #020617;\n      /* Agrega align-items: center aquí */\n    }\n    .capsula {\n      background-color: #38bdf8;\n      color: black;\n      padding: 15px 25px;\n      font-weight: bold;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"espacio\">\n    <div class=\"capsula\">🚀 Cápsula Orión</div>\n  </div>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Centrar el Logo del Refugio",
                instructions: "En tu clase `.banner`, agrega `align-items: center;` para que la imagen o texto del banner quede verticalmente centrado.",
                targetDescription: "Aplica align-items: center a la clase .banner.",
                hint: "Usa: align-items: center;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .banner {\n      display: flex;\n      justify-content: center;\n      height: 140px;\n      background-color: #ecfdf5;\n      /* Agrega align-items: center */\n    }\n    .logo {\n      background-color: #059669;\n      color: white;\n      padding: 12px 24px;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"banner\">\n    <div class=\"logo\">🐾 Patitas & Co.</div>\n  </div>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Centrar la Taza en el Cuadro",
                instructions: "En la clase `.vitrina-destacada`, agrega `align-items: center;` para que el producto quede verticalmente centrado en su expositor.",
                targetDescription: "Añade align-items: center a .vitrina-destacada.",
                hint: "Escribe: align-items: center;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .vitrina-destacada {\n      display: flex;\n      justify-content: center;\n      height: 150px;\n      background-color: #fffbeb;\n      /* Agrega align-items: center */\n    }\n    .taza {\n      background-color: #b45309;\n      color: white;\n      padding: 14px 22px;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"vitrina-destacada\">\n    <div class=\"taza\">☕ Café Supremo</div>\n  </div>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Cantante al Centro del Escenario",
                instructions: "En la clase `.centro-escena`, aplica `align-items: center;` para nivelar la altura del cantante en el show.",
                targetDescription: "Aplica align-items: center a .centro-escena.",
                hint: "Usa: align-items: center;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .centro-escena {\n      display: flex;\n      justify-content: center;\n      height: 160px;\n      background-color: #09090b;\n      /* Agrega align-items: center */\n    }\n    .cantante {\n      background-color: #ec4899;\n      color: white;\n      padding: 15px 30px;\n      border-radius: 8px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"centro-escena\">\n    <div class=\"cantante\">🎤 Voz Líder</div>\n  </div>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const text = style.textContent.toLowerCase().replace(/\s+/g, '');
            if (!text.includes('align-items:center')) {
                return { valid: false, error: "Debes agregar la propiedad 'align-items: center;' en tu CSS." };
            }
            return { valid: true };
        }
    },

    {
        id: 24,
        title: "Flexbox: Dirección con flex-direction (column vs row)",
        category: "flexbox",
        badge: "flex-direction",
        theory: "Por defecto, Flexbox alinea en filas (`flex-direction: row;`). Pero si queremos que los elementos sigan las reglas de Flexbox (como centrado y espaciado) pero apilados en columna vertical (ideal para celulares o tarjetas), usamos `flex-direction: column;`.",
        exampleCode: `<style>\n  .contenedor-columna {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión: Apilar los Cohetes en Columna Vertical",
                instructions: "La clase `.torre-lanzamiento` tiene `display: flex`. Agrégale `flex-direction: column;` y `align-items: center;` para que las etapas del cohete queden apiladas verticalmente en el centro.",
                targetDescription: "Aplica flex-direction: column y align-items: center a .torre-lanzamiento.",
                hint: "Escribe: flex-direction: column; align-items: center;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .torre-lanzamiento {\n      display: flex;\n      background-color: #0f172a;\n      padding: 20px;\n      /* Agrega flex-direction: column y align-items: center */\n    }\n    .modulo-cohete {\n      background-color: #0284c7;\n      color: white;\n      padding: 12px 30px;\n      margin: 6px;\n      border-radius: 6px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"torre-lanzamiento\">\n    <div class=\"modulo-cohete\">🚀 Módulo Superior</div>\n    <div class=\"modulo-cohete\">⛽ Tanque Principal</div>\n    <div class=\"modulo-cohete\">🔥 Propulsores</div>\n  </div>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión: Ficha de Rescate en Columna",
                instructions: "En tu clase `.tarjeta-vertical`, añade `flex-direction: column;` y `align-items: center;` para ordenar la foto, el nombre y el botón de adopción uno debajo de otro.",
                targetDescription: "Aplica flex-direction: column y align-items: center a .tarjeta-vertical.",
                hint: "Usa: flex-direction: column; align-items: center;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .tarjeta-vertical {\n      display: flex;\n      background-color: #f0fdf4;\n      padding: 20px;\n      /* Agrega flex-direction: column y align-items: center */\n    }\n    .item {\n      background-color: #15803d;\n      color: white;\n      padding: 10px 20px;\n      margin: 5px;\n      border-radius: 6px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"tarjeta-vertical\">\n    <div class=\"item\">🐶 Foto</div>\n    <div class=\"item\">Nombre: Bobby</div>\n    <div class=\"item\">Botón: Adoptar</div>\n  </div>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión: Menú Vertical para Móviles",
                instructions: "En la clase `.menu-movil`, agrega `flex-direction: column;` y `align-items: center;` para que los botones de navegación queden en una columna vertical centrada.",
                targetDescription: "Aplica flex-direction: column y align-items: center a .menu-movil.",
                hint: "Escribe: flex-direction: column; align-items: center;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .menu-movil {\n      display: flex;\n      background-color: #fff7ed;\n      padding: 20px;\n      /* Agrega flex-direction: column y align-items: center */\n    }\n    .boton-menu {\n      background-color: #c2410c;\n      color: white;\n      padding: 10px 25px;\n      margin: 6px;\n      border-radius: 6px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"menu-movil\">\n    <div class=\"boton-menu\">☕ Inicio</div>\n    <div class=\"boton-menu\">🥐 Carta</div>\n    <div class=\"boton-menu\">📍 Sucursales</div>\n  </div>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión: Cartel Vertical de la Gira",
                instructions: "En la clase `.afiche`, aplica `flex-direction: column;` y `align-items: center;` para armar el póster oficial apilado verticalmente.",
                targetDescription: "Configura flex-direction: column y align-items: center en .afiche.",
                hint: "Usa: flex-direction: column; align-items: center;",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .afiche {\n      display: flex;\n      background-color: #18181b;\n      padding: 20px;\n      /* Agrega flex-direction: column y align-items: center */\n    }\n    .linea-afiche {\n      background-color: #a855f7;\n      color: white;\n      padding: 10px 25px;\n      margin: 6px;\n      border-radius: 6px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"afiche\">\n    <div class=\"linea-afiche\">🎸 LOS BYTE-LES</div>\n    <div class=\"linea-afiche\">⚡ EN VIVO 2026</div>\n    <div class=\"linea-afiche\">🎟️ TICKETS DISPONIBLES</div>\n  </div>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const text = style.textContent.toLowerCase().replace(/\s+/g, '');
            if (!text.includes('flex-direction:column')) {
                return { valid: false, error: "Falta la propiedad 'flex-direction: column;' en tu clase flex." };
            }
            if (!text.includes('align-items:center')) {
                return { valid: false, error: "Falta la propiedad 'align-items: center;' para centrar los elementos de la columna." };
            }
            return { valid: true };
        }
    },

    {
        id: 25,
        title: "Desafío Final Maestro: Card Integrada con Flexbox y Tabla",
        category: "flexbox",
        badge: "🏆 Graduado Web",
        theory: "¡Felicidades! Has llegado al nivel 25, el proyecto integrador final. Aquí combinarás todo lo aprendido: estructura HTML semántica, estilos CSS modernos, una tabla de datos organizada y un layout maquetado con Flexbox.",
        exampleCode: `<style>\n  .contenedor-principal {\n    display: flex;\n    justify-content: center;\n    background-color: #0f172a;\n  }\n  .tarjeta {\n    border: 2px solid cyan;\n    border-radius: 12px;\n    padding: 20px;\n  }\n</style>`,
        themes: {
            space: {
                missionTitle: "Misión Final: Panel de Control del Explorador Cósmico",
                instructions: "Construye la página maestra de la misión. Debe incluir: 1) Estructura completa con `<style>`, 2) Un contenedor `.dashboard` con `display: flex` y `justify-content: center`, 3) Una tarjeta `.tarjeta` con `border`, `border-radius` y `padding`, 4) Un `<h1>` con el nombre del comandante, 5) Una `<table>` con al menos una fila `<th>` y una fila `<td>` de telemetría, y 6) Un botón o enlace `<a>`.",
                targetDescription: "Crea una página completa con contenedor flex (display: flex), tarjeta con bordes y padding, tabla de datos y enlace.",
                hint: "Asegúrate de tener un contenedor con display: flex, la tarjeta estilizada, la tabla y el enlace.",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Panel de Misión Final</title>\n  <style>\n    body { background-color: #090d16; color: white; font-family: sans-serif; }\n    .dashboard {\n      display: flex;\n      justify-content: center;\n      padding: 20px;\n    }\n    .tarjeta {\n      border: 2px solid #38bdf8;\n      border-radius: 16px;\n      padding: 25px;\n      background-color: #111827;\n    }\n    /* Agrega tus estilos adicionales */\n  </style>\n</head>\n<body>\n  <div class=\"dashboard\">\n    <div class=\"tarjeta\">\n      <h1>Comandante Estelar</h1>\n      <p>Reporte de vuelo finalizado con éxito.</p>\n      <!-- Agrega tu tabla aquí -->\n      <!-- Agrega tu enlace aquí -->\n    </div>\n  </div>\n</body>\n</html>`
            },
            vet: {
                missionTitle: "Misión Final: Ficha Maestra de Adopción VIP",
                instructions: "Construye la tarjeta maestra de adopción: 1) Contenedor con `display: flex` y `justify-content: center`, 2) Clase `.tarjeta` con `border`, `border-radius` y `padding`, 3) Encabezado `<h1>`, 4) Una `<table>` con los datos de salud (th y td), y 5) Un enlace `<a>` para 'Confirmar Adopción'.",
                targetDescription: "Crea un layout flex centrado, tarjeta estilizada, tabla de salud y enlace de adopción.",
                hint: "Revisa incluir display: flex, la tabla con tr, th y td, y el enlace <a>.",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Ficha Maestra</title>\n  <style>\n    body { background-color: #f8fafc; font-family: sans-serif; }\n    .contenedor {\n      display: flex;\n      justify-content: center;\n      padding: 20px;\n    }\n    .tarjeta {\n      border: 2px solid #22c55e;\n      border-radius: 16px;\n      padding: 25px;\n      background-color: #ffffff;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"contenedor\">\n    <div class=\"tarjeta\">\n      <h1>Adopción Estrella: Max</h1>\n      <!-- Agrega tu tabla de salud y enlace <a> -->\n    </div>\n  </div>\n</body>\n</html>`
            },
            cafe: {
                missionTitle: "Misión Final: Portal Web y Carta Digital del Café",
                instructions: "Diseña la tarjeta maestra del café: 1) Contenedor con `display: flex` y centrado, 2) Tarjeta con `border`, `border-radius` y `padding`, 3) Un título `<h1>`, 4) Una `<table>` con especialidades y precios (th y td), y 5) Un enlace `<a>` para pedir online.",
                targetDescription: "Combina layout flexbox, tarjeta con borde redondeado, tabla de precios y enlace.",
                hint: "Combina flexbox, tabla estructurada y enlace dentro de una tarjeta bonita.",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Pixel Café Oficial</title>\n  <style>\n    body { background-color: #fafaf9; font-family: sans-serif; }\n    .contenedor {\n      display: flex;\n      justify-content: center;\n      padding: 20px;\n    }\n    .tarjeta {\n      border: 2px solid #ea580c;\n      border-radius: 16px;\n      padding: 25px;\n      background-color: #ffffff;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"contenedor\">\n    <div class=\"tarjeta\">\n      <h1>Pixel Café & Lounge</h1>\n      <!-- Agrega tu tabla de productos y enlace -->\n    </div>\n  </div>\n</body>\n</html>`
            },
            rock: {
                missionTitle: "Misión Final: Póster Digital de la Gira Mundial",
                instructions: "Crea la pieza maestra de la banda: 1) Contenedor con `display: flex` y `justify-content: center`, 2) Tarjeta con `border`, `border-radius` y `padding`, 3) Título `<h1>` de la banda, 4) Una `<table>` con las fechas de conciertos (th y td), y 5) Un enlace `<a>` para adquirir tickets.",
                targetDescription: "Integra contenedor flex, tarjeta estilizada con bordes redondeados, tabla de conciertos y enlace.",
                hint: "Asegúrate de contar con display: flex, la tabla y el enlace dentro del diseño.",
                starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Gira Los Byte-les</title>\n  <style>\n    body { background-color: #09090b; color: white; font-family: sans-serif; }\n    .escenario {\n      display: flex;\n      justify-content: center;\n      padding: 20px;\n    }\n    .tarjeta {\n      border: 2px solid #f43f5e;\n      border-radius: 16px;\n      padding: 25px;\n      background-color: #18181b;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"escenario\">\n    <div class=\"tarjeta\">\n      <h1>Los Byte-les: World Tour</h1>\n      <!-- Agrega tabla de fechas y enlace -->\n    </div>\n  </div>\n</body>\n</html>`
            }
        },
        validator: (dom) => {
            const style = dom.querySelector('style');
            if (!style) return { valid: false, error: "Te falta la etiqueta <style>." };
            const styleText = style.textContent.toLowerCase();
            if (!styleText.includes('display: flex') && !styleText.includes('display:flex')) {
                return { valid: false, error: "Debes usar 'display: flex' en el contenedor principal." };
            }
            if (!styleText.includes('border-radius')) {
                return { valid: false, error: "Asegúrate de usar 'border-radius' para redondear las esquinas de la tarjeta." };
            }
            const table = dom.querySelector('table');
            if (!table) return { valid: false, error: "Te falta incluir una tabla <table> dentro de la tarjeta." };
            const th = table.querySelector('th');
            const td = table.querySelector('td');
            if (!th || !td) {
                return { valid: false, error: "La tabla debe tener al menos una cabecera <th> y una celda de datos <td>." };
            }
            const a = dom.querySelector('a');
            if (!a || !a.getAttribute('href')) {
                return { valid: false, error: "Te falta incluir un enlace <a> con su atributo href." };
            }
            return { valid: true };
        }
    }
];


// ==========================================
// MISIONES Y CONSIGNAS PARA MODO INTERMEDIO (1 AL 25)
// ==========================================
const INTERMEDIATE_MISSIONS = {
    "1": {
        "space": {
            "missionTitle": "Misión Intermedia: Radiotelescopio de Espacio Profundo",
            "instructions": "El radiotelescopio orbital ha interceptado señales cósmicas del sector Alfa. Crea desde cero la estructura HTML5 completa con el título 'Observatorio DeepSpace' y en el body escribe el mensaje 'Recibiendo telemetría del sector Alfa'.",
            "targetDescription": "Crea el documento HTML5 (<!DOCTYPE html>, <html>, <head> con <title> y <body>) con los textos del observatorio.",
            "hint": "Comienza con <!DOCTYPE html> y no olvides abrir y cerrar <html>, <head>, <title> y <body>."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Ambulancia Móvil de Emergencias",
            "instructions": "La unidad móvil de rescate animal sale a patrullar la ciudad. Escribe la estructura HTML5 completa desde cero con el título 'Ambulancia Patitas 24h' y en el body el mensaje 'Unidad móvil de rescate en patrullaje activo'.",
            "targetDescription": "Genera las etiquetas <!DOCTYPE html>, <html>, <head> con <title> y <body> con el mensaje de la ambulancia.",
            "hint": "Escribe la estructura base completa en la hoja en blanco y coloca el aviso dentro del <body>."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Laboratorio de Tostado Artesanal",
            "instructions": "Inauguramos el laboratorio de tueste especial. Escribe la estructura HTML5 completa desde cero con el título 'Laboratorio Pixel Roasters' y en el body la frase 'Tostando granos arábicos de origen único'.",
            "targetDescription": "Crea el documento HTML5 con <!DOCTYPE html>, <html>, <head> con <title> y el texto del tostadero en el <body>.",
            "hint": "Recuerda que todo documento web inicia con <!DOCTYPE html> y lleva <head> y <body> dentro de <html>."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Transmisión de Radio Indie Rock",
            "instructions": "La estación de radio independiente sale al aire. Diseña la estructura HTML5 desde cero con el título 'Radio Byte-les 98.5 FM' y en el body el mensaje 'Transmitiendo sesión acústica en vivo desde el estudio'.",
            "targetDescription": "Escribe la estructura HTML5 completa con doctype, html, head con title y body con el anuncio radial.",
            "hint": "Asegúrate de no olvidar el <!DOCTYPE html> y cerrar cada etiqueta que abras."
        }
    },
    "2": {
        "space": {
            "missionTitle": "Misión Intermedia: Sonda Exploradora Titán",
            "instructions": "Una nueva sonda no tripulada desciende sobre la luna Titán. Diseña el reporte creando un encabezado principal <h1> con el nombre 'Sonda Exploradora Titán-9' y un subtítulo <h2> que indique 'Aterrizaje en el Lago de Metano Kraken'.",
            "targetDescription": "Crea un encabezado principal <h1> y un subtítulo <h2> con los datos de la sonda espacial.",
            "hint": "Usa <h1> para el nombre de la sonda y <h2> para el sitio de aterrizaje."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Campaña Anual de Vacunación",
            "instructions": "Lanzamos la campaña comunitaria para perros y gatos. Escribe un encabezado <h1> que anuncie 'Campaña de Vacunación Anual' y un subtítulo <h2> que especifique 'Puesto Móvil: Plaza Central de 9 a 17hs'.",
            "targetDescription": "Agrega un <h1> para la campaña y un <h2> para la ubicación del puesto de atención.",
            "hint": "Recuerda la jerarquía: primero va el <h1> y luego el <h2>."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Carta de Tés e Infusiones",
            "instructions": "Ampliamos nuestra carta con infusiones de autor. Agrega un encabezado <h1> que diga 'Carta de Tés e Infusiones' y un subtítulo <h2> con la especialidad 'Infusión de Té Verde Matcha y Jazmín'.",
            "targetDescription": "Coloca un <h1> con el título de la carta y un <h2> con la variedad destacada.",
            "hint": "Usa <h1>Carta...</h1> seguido de <h2>Infusión...</h2> dentro del body."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Festival Rock de Verano",
            "instructions": "Se confirman los escenarios del festival más grande del año. Diseña los encabezados con un <h1> que diga 'Festival Rock Fest Verano' y un subtítulo <h2> que anuncie 'Escenario Principal: Apertura de Puertas 18hs'.",
            "targetDescription": "Escribe un encabezado <h1> para el festival y un <h2> para el escenario.",
            "hint": "El <h1> es el título principal del evento y el <h2> el subtítulo del escenario."
        }
    },
    "3": {
        "space": {
            "missionTitle": "Misión Intermedia: Alerta de Tormenta Geomagnética",
            "instructions": "El satélite solar advierte actividad inusual. Escribe un párrafo <p> detallando el fenómeno espacial. Dentro del párrafo, destaca con <strong> que es una <strong>radiación solar intensa</strong> y con <em> la advertencia de <em>interferencia en radares</em>.",
            "targetDescription": "Escribe un párrafo <p> que contenga al menos una etiqueta <strong> y una etiqueta <em>.",
            "hint": "Ambas etiquetas deben estar anidadas dentro de <p>: <p>Alerta: <strong>radiación intensa</strong> con <em>posibles fallas</em>.</p>"
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Ficha de la Gatita rescued",
            "instructions": "Presenta a la gatita rescatada en el refugio. Escribe un párrafo <p> describiéndola, resaltando con <strong> que es <strong>sumamente cariñosa</strong> y destacando con <em> que tiene <em>ojos verdes brillantes</em>.",
            "targetDescription": "Crea un <p> con <strong> para su personalidad y <em> para un rasgo físico.",
            "hint": "Recuerda cerrar las etiquetas en orden inverso a su apertura: <p>...<strong>...</strong>...<em>...</em>...</p>"
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Notas de Cata del Espresso",
            "instructions": "Describe el nuevo tueste de café de Etiopía. Escribe un párrafo <p> resaltando con <strong> que posee <strong>acidez cítrica balanceada</strong> y destacando con <em> sus sutiles <em>notas de jazmín y miel</em>.",
            "targetDescription": "Redacta un <p> conteniendo una etiqueta <strong> y otra <em>.",
            "hint": "Coloca las etiquetas de formato dentro del texto del párrafo <p>."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Crónica del Recital Acústico",
            "instructions": "Publica una breve crónica del concierto íntimo. Escribe un párrafo <p> destacando con <strong> que fue un <strong>show inolvidable</strong> y usando <em> para elogiar el <em>solo de armónica desenchufado</em>.",
            "targetDescription": "Escribe un <p> que incluya tanto <strong> como <em>.",
            "hint": "Verifica tener <p>, <strong>, </strong>, <em>, </em> y </p> en tu documento."
        }
    },
    "4": {
        "space": {
            "missionTitle": "Misión Intermedia: Alimentos Liofilizados para la Tripulación",
            "instructions": "La nave espacial necesita cargar las provisiones para el viaje a Júpiter. Crea una lista desordenada <ul> con al menos 3 raciones espaciales <li> (ej: 'Frutas liofilizadas en sobre', 'Pasta proteica deshidratada', 'Cubos de agua ionizada').",
            "targetDescription": "Crea una lista <ul> con un mínimo de 3 elementos <li> con raciones o víveres espaciales.",
            "hint": "Estructura: <ul> <li>Alimento 1</li> <li>Alimento 2</li> <li>Alimento 3</li> </ul>"
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Accesorios para el Área de Cachorros",
            "instructions": "Equipa la guardería de cachorros del refugio. Crea una lista desordenada <ul> con al menos 3 juguetes o accesorios <li> (ej: 'Pelotas de goma masticables', 'Mantas térmicas acolchadas', 'Mordillos para dentición').",
            "targetDescription": "Usa <ul> y agrega al menos 3 elementos <li> para los accesorios del refugio.",
            "hint": "Recuerda que cada accesorio va entre <li> y </li> dentro del contenedor <ul>."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Facturas y Pastelería Artesanal",
            "instructions": "Prepara la carta de dulces de la vitrina. Crea una lista desordenada <ul> con al menos 3 delicias de panadería <li> (ej: 'Medialunas de manteca hojaldradas', 'Rolls de canela glaseados', 'Scones de queso tibios').",
            "targetDescription": "Crea una lista desordenada <ul> con al menos 3 opciones <li> de pastelería.",
            "hint": "Usa <ul> y coloca al menos 3 <li> adentro, cerrando cada etiqueta correctamente."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Setlist para el Bis Final",
            "instructions": "El público pide más canciones antes de bajar el telón. Crea una lista desordenada <ul> con al menos 3 temas legendarios <li> para el bis (ej: 'Solo de Batería Infinito', 'Balada a Dos Guitarras', 'Himno de la Ciudad Eléctrica').",
            "targetDescription": "Escribe una lista <ul> con al menos 3 canciones <li> para el cierre del concierto.",
            "hint": "Asegúrate de abrir <ul>, listar los 3 <li> y cerrar </ul>."
        }
    },
    "5": {
        "space": {
            "missionTitle": "Misión Intermedia: Protocolo de Acoplamiento Orbital",
            "instructions": "La cápsula debe acoplarse con precisión milimétrica a la estación espacial. Crea una lista ordenada <ol> con los 3 pasos estrictos <li> (ej: 'Igualar velocidad relativa', 'Activar sensor láser de guiado', 'Fijar pestillos herméticos del túnel').",
            "targetDescription": "Crea una lista ordenada <ol> con al menos 3 pasos cronológicos <li>.",
            "hint": "Usa <ol> (con 'o' de ordered list) y define cada paso con un <li>."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Protocolo de Admisión de Pacientes",
            "instructions": "Establece el procedimiento de ingreso para nuevos animales en la clínica. Diseña una lista ordenada <ol> con 3 etapas <li> (ej: 'Control inicial de peso y temperatura', 'Revisión preventiva de oídos y pelaje', 'Aplicación de antiparasitario').",
            "targetDescription": "Crea una lista <ol> con al menos 3 pasos sucesivos <li> para la admisión.",
            "hint": "Recuerda que <ol> enumera automáticamente los pasos 1, 2 y 3."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Preparación del Cold Brew Artesanal",
            "instructions": "Guía a los baristas en la maceración de café frío. Escribe una lista ordenada <ol> con los 3 pasos de elaboración <li> (ej: 'Moler café en grano grueso', 'Infundir en agua fría filtrada durante 18 horas', 'Filtrar dos veces y embotellar en frío').",
            "targetDescription": "Define una lista <ol> con al menos 3 pasos de receta <li>.",
            "hint": "Abre con <ol>, coloca 3 <li> con cada paso y cierra con </ol>."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Rutina de Afinación y Prueba de Sonido",
            "instructions": "Antes de salir al escenario, la banda debe calibrar sus equipos. Crea una lista ordenada <ol> con los 3 pasos de prueba de sonido <li> (ej: 'Ecualizar el bombo de la batería', 'Afinar guitarras y bajo en tono estándar', 'Nivelar volumen del micrófono principal').",
            "targetDescription": "Crea una lista ordenada <ol> con al menos 3 pasos sucesivos <li>.",
            "hint": "No uses <ul>; usa <ol> para que los pasos aparezcan numerados automáticamente."
        }
    },
    "6": {
        "space": {
            "missionTitle": "Misión Intermedia: Imagen Satelital de los Anillos de Saturno",
            "instructions": "La sonda envió una fotografía de alta resolución de los anillos de hielo. Inserta la imagen usando <img> con el enlace 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600' y un atributo alt=\"Fotografía panorámica de los anillos de Saturno\".",
            "targetDescription": "Agrega una etiqueta <img> con sus atributos src y alt bien configurados.",
            "hint": "La etiqueta <img> no tiene etiqueta de cierre </>; solo lleva atributos: <img src=\"...\" alt=\"...\">."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Retrato del Gatito Siamés Rescatado",
            "instructions": "Publica la foto del nuevo inquilino del refugio. Agrega una imagen con <img> usando la URL 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600' y un atributo alt explicativo como alt=\"Gatito siamés de ojos azules en el refugio\".",
            "targetDescription": "Inserta una etiqueta <img> con src y alt descriptivo.",
            "hint": "Asegúrate de incluir las comillas tanto en src=\"...\" como en alt=\"...\"."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Foto de la Vitrina de Croissants",
            "instructions": "Muestra la bollería recién sacada del horno para tentar a los clientes. Añade una etiqueta <img> con la URL 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600' y el atributo alt=\"Croissants dorados recién horneados sobre madera\".",
            "targetDescription": "Coloca una etiqueta <img> con src válido y atributo alt.",
            "hint": "El atributo alt es obligatorio para que personas con lectores de pantalla sepan de qué es la imagen."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Batería Iluminada en Vivo",
            "instructions": "Comparte la toma épica del set de percusión bajo las luces de neón. Inserta una imagen <img> con la URL 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600' y alt=\"Batería profesional iluminada con reflectores violetas\".",
            "targetDescription": "Agrega un elemento <img> con src y alt.",
            "hint": "Verifica escribir correctamente src=\"URL\" y alt=\"descripción\" dentro de <img>."
        }
    },
    "7": {
        "space": {
            "missionTitle": "Misión Intermedia: Acceso al Catálogo de Exoplanetas",
            "instructions": "Permite a los astrónomos consultar la base de datos de mundos habitables. Crea un hipervínculo con la etiqueta <a> que apunte a 'https://exoplanets.nasa.gov' y cuyo texto visible sea 'Explorar Catálogo de Exoplanetas Habitables'.",
            "targetDescription": "Crea un enlace <a> con atributo href y texto visible entre <a> y </a>.",
            "hint": "Sintaxis: <a href=\"https://exoplanets.nasa.gov\">Texto visible</a>"
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Guía de Primeros Auxilios Veterinarios",
            "instructions": "Ofrece a los adoptantes información vital para emergencias caseras. Escribe un enlace <a> hacia 'https://primerosauxiliosanimales.org' con el texto 'Descargar Manual de Primeros Auxilios para Mascotas'.",
            "targetDescription": "Crea una etiqueta <a> con su href y un texto explicativo.",
            "hint": "Recuerda que el texto del enlace debe estar entre <a> y </a>."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Tienda de Café en Grano Tostado",
            "instructions": "Habilita la compra online de bolsas de café para el hogar. Crea un enlace <a> con href=\"https://tienda.pixelcafe.com/granos\" y el texto 'Comprar Bolsas de Café Tostado Online'.",
            "targetDescription": "Agrega un enlace <a> con el atributo href y texto para el botón.",
            "hint": "No olvides cerrar la etiqueta con </a> después del texto."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Escuchar Nuevo Sencillo en Streaming",
            "instructions": "Lanza el nuevo single de la banda en plataformas digitales. Diseña un enlace <a> con href=\"https://streaming.losbyteles.com/single\" y el texto 'Escuchar Nuevo Sencillo en Alta Definición'.",
            "targetDescription": "Inserta una etiqueta <a> con destino href y texto legible.",
            "hint": "Formato: <a href=\"URL\">Texto que hace clic el usuario</a>"
        }
    },
    "8": {
        "space": {
            "missionTitle": "Misión Intermedia: Módulo de Sensores de Radiación Cósmica",
            "instructions": "Agrupa los instrumentos de medición ambiental exterior dentro de un contenedor. Crea una etiqueta <div> que contenga un encabezado <h2> que diga 'Sensor de Viento Solar' y un párrafo <p> con el texto 'Medición estable: 450 km/s sin anomalías detectadas'.",
            "targetDescription": "Crea un <div> y dentro incluye un <h2> y un <p>.",
            "hint": "Mete el <h2> y el <p> adentro de <div>...</div>."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Ficha Médica de un Conejo Enano",
            "instructions": "Organiza los datos de los animales exóticos en una tarjeta contenedora. Crea un <div> que guarde en su interior un <h2> con el texto 'Paciente: Conejo Tambor' y un párrafo <p> que indique 'Revisión dental y vacunas al día. Peso: 1.4 kg'.",
            "targetDescription": "Crea un elemento <div> que contenga un <h2> y un <p>.",
            "hint": "Estructura: <div> <h2>Nombre</h2> <p>Datos</p> </div>"
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Tarjeta de Descuento Universitario",
            "instructions": "Presenta el beneficio especial para estudiantes. Crea un <div> que agrupe un subtítulo <h2> que diga 'Promo Estudiantes: 20% OFF' y un párrafo <p> con el texto 'Presentando tu libreta universitaria de lunes a viernes'.",
            "targetDescription": "Agrega un contenedor <div> con un <h2> y un <p> en su interior.",
            "hint": "El <div> sirve para agrupar ambos elementos en un mismo bloque."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Ficha Biográfica de la Bajista",
            "instructions": "Dedica un bloque de perfil a la encargada del bajo y los coros. Crea un <div> que envuelva un <h2> que diga 'Bajista: Laura \"Bass\" Gómez' y un párrafo <p> con el texto 'Especialista en líneas de bajo funk y distorsión vintage'.",
            "targetDescription": "Crea un <div> contenedor con un encabezado <h2> y un párrafo <p> adentro.",
            "hint": "Asegúrate de cerrar </h2>, </p> y finalmente </div>."
        }
    },
    "9": {
        "space": {
            "missionTitle": "Misión Intermedia: Ficha del Telescopio James Webb",
            "instructions": "Diseña una tarjeta completa de divulgación científica. Crea un <div> que contenga: una imagen <img> (con src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600' y su alt), un encabezado <h2> con 'Telescopio Espacial James Webb', un párrafo <p> sobre sus espejos de berilio dorado y un enlace <a> con href='https://webb.nasa.gov' que diga 'Ver Descubrimientos Infrarrojos'.",
            "targetDescription": "Crea un <div> con una imagen <img>, un <h2>, un <p> y un enlace <a> adentro.",
            "hint": "Dentro de <div> deben convivir los 4 elementos: <img>, <h2>, <p> y <a>."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Ficha del Cirujano Veterinario Jefe",
            "instructions": "Arma la tarjeta de presentación del especialista de la clínica. Crea un <div> contenedor que incluya una foto <img> (con src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600' y alt), un <h2> que diga 'Dr. Marcos Veterinario', un párrafo <p> sobre sus 15 años de experiencia en traumatología animal y un enlace <a> con href='https://patitas.com/turnos' que diga 'Reservar Consulta Médica'.",
            "targetDescription": "Crea un <div> conteniendo <img>, <h2>, <p> y <a>.",
            "hint": "Asegúrate de que los cuatro elementos estén dentro de las etiquetas <div> y </div>."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Tarjeta del Brunch Especial de Domingo",
            "instructions": "Crea la tarjeta promocional del brunch de fin de semana. En un <div> incluye una foto <img> (con src='https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600' y alt), un título <h2> que diga 'Brunch Degustación de Domingo', un párrafo <p> describiendo las tostadas de masa madre, café y jugo natural, y un enlace <a> con href='https://pixelcafe.com/reservas' que diga 'Reservar Mesa de Brunch'.",
            "targetDescription": "Crea un contenedor <div> con <img>, <h2>, <p> y <a> en su interior.",
            "hint": "Verifica que la imagen tenga src y alt, y el enlace tenga href y texto."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Tarjeta VIP Backstage Experience",
            "instructions": "Ofrece el pase exclusivo para conocer a la banda tras bambalinas. Diseña un <div> que contenga una imagen <img> (con src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600' y alt), un encabezado <h2> que diga 'Experiencia VIP Backstage', un párrafo <p> detallando el acceso a camerinos y prueba de sonido privada, y un enlace <a> con href='https://tickets.byteles.com/vip' que diga 'Comprar Pase Exclusivo'.",
            "targetDescription": "Organiza dentro de un <div> una imagen <img>, un <h2>, un <p> y un hipervínculo <a>.",
            "hint": "Los 4 elementos deben ser hijos directos del <div>."
        }
    },
    "10": {
        "space": {
            "missionTitle": "Misión Intermedia: Portal de Satélites en Órbita Terrestre",
            "instructions": "Crea una página HTML5 completa desde cero dedicada a la red de satélites. Debe incluir <!DOCTYPE html>, <html>, <head> con <title>, <body> con un <h1> principal ('Red Global de Satélites Meteorológicos'), un párrafo <p> explicativo, una lista <ul> con 3 satélites <li> (ej: 'MeteoSat-1', 'GOES-16', 'Himawari-8') y un enlace <a> con href hacia 'https://satellites.org' que diga 'Monitorear Satélites en Tiempo Real'.",
            "targetDescription": "Construye una página completa con <!DOCTYPE html>, <html>, <head>, <title>, <body>, <h1>, <p>, <ul> con 3 <li> y <a>.",
            "hint": "Revisa haber incluido cada etiqueta requerida y haber cerrado todas correctamente."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Portal de la Campaña de Rescate Urbano",
            "instructions": "Publica el sitio web completo de la iniciativa de rescate callejero. Escribe la estructura completa desde cero con doctype, html, head con title y body. En el body coloca un <h1> ('Campaña de Rescate Animal Urbano'), un párrafo <p> sobre la protección de animales sin hogar, una lista <ul> con al menos 3 áreas de acción <li> (ej: 'Rescate de urgencia', 'Rehabilitación veterinaria', 'Hogares de tránsito') y un enlace <a> con href='https://rescate.org' que diga 'Sumarse como Hogar de Tránsito'.",
            "targetDescription": "Genera el documento completo con doctype, html, head, title, body, <h1>, <p>, <ul> con 3 <li> y un <a>.",
            "hint": "Verifica que la lista <ul> tenga 3 <li> y el enlace <a> tenga su href."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Guía del Club de Suscriptores de Café",
            "instructions": "Desarrolla la página completa de suscripción mensual de café en grano. Diseña la estructura HTML5 con doctype, html, head con title y body. En el body incluye un <h1> ('Club Mensual Pixel Coffee Box'), un párrafo <p> explicando cómo llega café fresco de diferentes fincas cada mes, una lista <ul> con 3 beneficios exclusivos <li> (ej: 'Envíos gratis a todo el país', 'Descuento del 15% en cafetería', 'Guías de cata personalizadas') y un enlace <a> con href='https://pixelcafe.com/club' con el texto 'Suscribirme al Club Mensual'.",
            "targetDescription": "Crea el archivo HTML5 completo con doctype, html, head, title, body, <h1>, <p>, <ul> con 3 <li> y <a>.",
            "hint": "Recuerda incluir doctype al inicio y todos los elementos solicitados en el body."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Fan Page del Lanzamiento del Disco de Platino",
            "instructions": "Construye la página web oficial del nuevo disco galardonado. Diseña el documento HTML5 completo desde cero con doctype, html, head con title y body. En el body agrega un <h1> ('Celebración: Disco de Platino Mundial'), un párrafo <p> con agradecimientos a los seguidores de todo el mundo, una lista <ul> con 3 temas icónicos <li> (ej: 'Trueno de Medianoche', 'Frecuencia Analógica', 'Ruta 101 en Llamas') y un enlace <a> con href='https://tienda.byteles.com/platino' que diga 'Adquirir Edición Especial en Vinilo'.",
            "targetDescription": "Escribe la web completa con doctype, html, head, title, body, <h1>, <p>, <ul> con 3 <li> y <a>.",
            "hint": "Asegúrate de que la lista <ul> contenga al menos 3 <li> y el <a> tenga atributo href."
        }
    },
    "11": {
        "space": {
            "missionTitle": "Misión Intermedia: Comparativa Planetaria de Gravedad",
            "instructions": "Presenta las fuerzas gravitatorias de otros mundos en una tabla ordenada. Crea una etiqueta <table> con 2 filas <tr>: la primera fila con 2 encabezados <th> ('Planeta' y 'Gravedad relativa') y la segunda fila con 2 celdas de datos <td> ('Marte' y '0.38 g').",
            "targetDescription": "Crea una tabla <table> con 2 filas <tr>, encabezados <th> en la primera y celdas <td> en la segunda.",
            "hint": "Estructura: <table> <tr> <th>Planeta</th> <th>Gravedad</th> </tr> <tr> <td>Marte</td> <td>0.38 g</td> </tr> </table>"
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Tabla de Peso y Vacunación de Pacientes",
            "instructions": "Organiza el registro médico clínico de un animal en una tabla. Crea una tabla <table> con 2 filas <tr>: en la primera fila coloca 2 cabeceras <th> ('Paciente' y 'Estado de Vacunas') y en la segunda fila 2 celdas de datos <td> ('Gato Félix' y 'Al día - Triple Felina').",
            "targetDescription": "Crea una tabla <table> con al menos 2 <tr>, 2 <th> en la fila 1 y 2 <td> en la fila 2.",
            "hint": "Recuerda: <th> es para cabeceras y <td> para datos, cada grupo dentro de su propia fila <tr>."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Tabla de Tueste y Acidez del Café",
            "instructions": "Muestra las características sensoriales de los granos. Diseña una tabla <table> con 2 filas <tr>: la primera fila debe tener 2 encabezados <th> ('Origen' y 'Nivel de Acidez') y la segunda fila 2 celdas <td> ('Colombia Huila' y 'Media brillante con notas de ciruela').",
            "targetDescription": "Crea un <table> con 2 filas <tr>: fila 1 con al menos 2 <th> y fila 2 con al menos 2 <td>.",
            "hint": "Coloca los <th> en el primer <tr> y los <td> en el segundo <tr>."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Registro de Álbumes y Años de Edición",
            "instructions": "Informa sobre la discografía histórica del grupo. Construye una tabla <table> con 2 filas <tr>: la primera fila con 2 encabezados <th> ('Nombre del Álbum' y 'Año de Lanzamiento') y la segunda fila con 2 celdas <td> ('Algoritmo Sónico' y '2024').",
            "targetDescription": "Crea una tabla <table> con 2 filas <tr>, conteniendo al menos 2 <th> y 2 <td> respectivamente.",
            "hint": "Usa <th> para los títulos de columna y <td> para la información del disco."
        }
    },
    "12": {
        "space": {
            "missionTitle": "Misión Intermedia: Catálogo de Estaciones Espaciales Orbitantes",
            "instructions": "Construye una tabla completa de 4 filas en total: 1 fila de encabezados con 3 <th> ('Estación', 'Altitud Órbita', 'Tripulación') y 3 filas de datos <tr> con 3 celdas <td> cada una (ej: ISS, Tiangong, Lunar Gateway).",
            "targetDescription": "Crea una tabla <table> de 4 filas <tr> (1 cabecera con 3 <th> y 3 filas de datos con 3 <td> cada una).",
            "hint": "Necesitas 1 <tr> con 3 <th> y luego 3 <tr> adicionales con 3 <td> cada uno (4 filas en total)."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Tabla de Donaciones y Medicamentos Recibidos",
            "instructions": "Registra las donaciones de insumos de la semana. Diseña una tabla <table> con 4 filas <tr>: 1 fila de cabecera con 3 columnas <th> ('Insumo Médico', 'Cantidad', 'Destino') y 3 filas de datos con 3 celdas <td> en cada una (ej: gasas, sueros, pipetas).",
            "targetDescription": "Arma una tabla con 4 filas <tr> en total (3 columnas <th> arriba y 3 filas de 3 <td> cada una).",
            "hint": "Asegúrate de que cada una de las 3 filas de datos tenga exactamente 3 celdas <td>."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Menú de Desayunos Saludables",
            "instructions": "Presenta las opciones de desayuno del menú matutino. Crea una tabla <table> de 4 filas <tr>: 1 fila de cabecera con 3 columnas <th> ('Opción', 'Acompañamiento', 'Precio') y 3 filas de datos con 3 celdas <td> cada una (ej: Tostadas palta, Bowl acai, Granola yogurt).",
            "targetDescription": "Crea una tabla de 4 filas <tr> (1 fila con 3 <th> y 3 filas de datos con 3 <td> cada una).",
            "hint": "Verifica que el total de <tr> sea 4 y cada fila contenga 3 elementos (<th> o <td>)."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Comparativa de Festivales de la Gira",
            "instructions": "Publica las estadísticas de asistencia de los festivales. Escribe una tabla <table> con 4 filas <tr>: 1 fila inicial con 3 columnas <th> ('Festival', 'Ciudad', 'Público') y 3 filas de datos con 3 celdas <td> en cada una (ej: Rock in Park, Electric River, Sonic Sun).",
            "targetDescription": "Genera una tabla con 4 <tr> (la primera con 3 <th> y las otras 3 con 3 <td> cada una).",
            "hint": "Cada fila de datos <tr> debe tener exactamente 3 <td>."
        }
    },
    "13": {
        "space": {
            "missionTitle": "Misión Intermedia: Señalización Ámbar en Pantallas de Telemetría",
            "instructions": "Aplica estilos CSS para advertencias en la consola de mando. Agrega una etiqueta <style> dentro de <head> y utiliza la propiedad 'color' para cambiar el color del texto a ámbar solar (ej: #f59e0b o orange o goldenrod) en tu encabezado o párrafos.",
            "targetDescription": "Crea una etiqueta <style> y cambia el color del texto usando la propiedad color.",
            "hint": "Dentro de <head> escribe: <style> h1 { color: #f59e0b; } </style>"
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Resaltar Consejos Veterinarios con Verde Turquesa",
            "instructions": "Dale una identidad visual relajante a los mensajes de la clínica. En la sección <head>, añade una etiqueta <style> y asigna a tus párrafos o títulos un color turquesa o verde (ej: #0d9488 o teal o #10b981) usando la propiedad 'color'.",
            "targetDescription": "Usa la etiqueta <style> y define una regla con la propiedad color.",
            "hint": "Recuerda la sintaxis: selector { color: valor; } dentro de <style>."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Color Caramelo Tostado para Novedades del Barista",
            "instructions": "Embellece la tipografía del menú con tonos cálidos. Inserta una etiqueta <style> en el <head> y asigna un color caramelo o dorado (ej: #d97706 o chocolate o #b45309) a tus textos mediante la propiedad 'color'.",
            "targetDescription": "Agrega <style> y cambia el color del texto con la propiedad CSS color.",
            "hint": "Ejemplo: <style> p { color: chocolate; } </style>"
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Color Púrpura Eléctrico para Títulos de Canciones",
            "instructions": "Haz que los temas de la banda vibren con estética de neón. Crea una etiqueta <style> y asigna a los encabezados o párrafos un color púrpura neón (ej: #a855f7 o purple o #c084fc) utilizando la propiedad 'color'.",
            "targetDescription": "Incorpora una etiqueta <style> y usa la propiedad color para cambiar el tono de texto.",
            "hint": "Coloca <style> h1 { color: #a855f7; } </style> en la sección <head>."
        }
    },
    "14": {
        "space": {
            "missionTitle": "Misión Intermedia: Fondo Gris Titanio para la Cúpula Orbital",
            "instructions": "Simula el blindaje metálico de la nave espacial. En la etiqueta <style>, utiliza la propiedad 'background-color' sobre el <body> o sobre un <div> para darle un tono gris titanio oscuro (ej: #1e293b o #0f172a o slategray).",
            "targetDescription": "Crea una regla en <style> aplicando la propiedad background-color.",
            "hint": "Sintaxis: body { background-color: #1e293b; } dentro de <style>."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Fondo Lavanda Cálido para la Sala de Descanso",
            "instructions": "Crea un ambiente calmo para los animales convalecientes. Usa <style> y aplica la propiedad 'background-color' con un tono lavanda o pastel (ej: #f3e8ff o #ede9fe o lavender) sobre el body o el contenedor.",
            "targetDescription": "Usa la propiedad background-color dentro de la etiqueta <style>.",
            "hint": "Ejemplo: <style> body { background-color: #f3e8ff; } </style>"
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Fondo Crema Moca para el Salón",
            "instructions": "Haz que la página transmita la calidez de una taza de café recién servida. Añade la propiedad 'background-color' con un tono crema cálido (ej: #fef3c7 o #fffbeb o cornsilk) a tu body o contenedor en la etiqueta <style>.",
            "targetDescription": "Aplica background-color en la etiqueta <style> para modificar el fondo.",
            "hint": "Dentro de <style>: body { background-color: #fffbeb; }"
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Fondo Azul Noche para el Estudio de Grabación",
            "instructions": "Ambienta la web con la atmósfera de las sesiones nocturnas de estudio. Define en tu <style> la propiedad 'background-color' con un azul oscuro profundo (ej: #090d16 o #111827 o midnightblue) para el body o la sección.",
            "targetDescription": "Establece background-color en tu hoja de estilos <style>.",
            "hint": "Usa la propiedad background-color: #111827; dentro de tu regla CSS."
        }
    },
    "15": {
        "space": {
            "missionTitle": "Misión Intermedia: Cronómetro de Reingreso Atmosférico",
            "instructions": "Diseña la pantalla de cuenta regresiva con tipografía técnica. En la etiqueta <style>, aplica sobre tu encabezado o texto tanto la propiedad 'font-size' (ej: 32px o 2.5rem) como 'font-family' (ej: monospace o 'Courier New', sans-serif).",
            "targetDescription": "Usa las propiedades font-size y font-family dentro de la etiqueta <style>.",
            "hint": "Ejemplo: h1 { font-size: 32px; font-family: monospace; }"
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Diploma de Mascota Graduada",
            "instructions": "Elabora el certificado de obediencia canina. En <style>, estiliza el título con 'font-family' elegante (ej: Georgia, serif o cursive) y dale un 'font-size' grande y destacado (ej: 28px o 2rem).",
            "targetDescription": "Aplica font-size y font-family en tu regla CSS dentro de <style>.",
            "hint": "Recuerda incluir ambas propiedades: font-size y font-family."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Pizarra de Cafés Especiales del Barista",
            "instructions": "Crea el estilo de la carta de especialidad. En tu <style>, configura el encabezado usando 'font-size' destacado (ej: 30px o 2rem) y 'font-family' moderna (ej: 'Trebuchet MS', sans-serif o system-ui).",
            "targetDescription": "Configura font-size y font-family en tu bloque <style>.",
            "hint": "Escribe ambas propiedades dentro del selector en <style>."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Cartel Monumental del Recital",
            "instructions": "Diseña la tipografía impactante del titular del concierto. En <style>, personaliza el título aplicando 'font-size' gigante (ej: 36px o 3rem) y 'font-family' de gran peso (ej: Impact, 'Arial Black', sans-serif).",
            "targetDescription": "Incluye font-size y font-family en tus estilos de texto.",
            "hint": "Sintaxis: h1 { font-size: 36px; font-family: Impact, sans-serif; }"
        }
    },
    "16": {
        "space": {
            "missionTitle": "Misión Intermedia: Centrar Coordenadas en el Mapa Galáctico",
            "instructions": "Alinea las coordenadas estelares perfectamente en el centro de la consola. En la etiqueta <style>, utiliza la propiedad 'text-align: center;' para centrar tu título principal o tus textos informativos.",
            "targetDescription": "Aplica la propiedad text-align: center; dentro de tu etiqueta <style>.",
            "hint": "Regla CSS: h1 { text-align: center; } dentro de <style>."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Centrar el Lema Protector del Refugio",
            "instructions": "Ubica el lema de amor por los animales en el corazón de la pantalla. En tu <style>, aplica 'text-align: center;' para que el título o los párrafos de bienvenida queden centrados horizontalmente.",
            "targetDescription": "Usa text-align: center; en tu CSS para centrar los textos.",
            "hint": "Dentro de <style>, añade text-align: center; a tu selector."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Centrar la Frase de la Fortuna del Café",
            "instructions": "Cada taza viene acompañada de un mensaje inspirador centrado. Agrega en tu <style> la propiedad 'text-align: center;' sobre el encabezado o el párrafo con la frase del día.",
            "targetDescription": "Establece text-align: center; en una regla CSS dentro de <style>.",
            "hint": "Escribe: text-align: center; dentro de las llaves del selector."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Centrar el Estribillo del Himno de la Banda",
            "instructions": "Haz que la letra del tema principal se lea imponente y centrada en el escenario virtual. En la etiqueta <style>, incluye 'text-align: center;' para alinear el estribillo o titular en el centro de la página.",
            "targetDescription": "Usa la propiedad text-align: center; en tu bloque <style>.",
            "hint": "Verifica tener text-align: center; en tu regla CSS."
        }
    },
    "17": {
        "space": {
            "missionTitle": "Misión Intermedia: Destacar Satélite Activo con Selector de Clase",
            "instructions": "Marca los satélites en servicio diferenciándolos del resto. En tu HTML, asigna el atributo class=\"satelite-activo\" a uno de tus elementos y en tu <style> crea la regla con el selector de clase (.satelite-activo) asignándole la propiedad 'color'.",
            "targetDescription": "Usa el atributo class=\"...\" en un elemento HTML y selecciona esa clase en CSS con un punto (.) cambiando su color.",
            "hint": "HTML: <p class=\"satelite-activo\">...</p> | CSS: .satelite-activo { color: cyan; }"
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Identificar Animalitos en Adopción Urgente",
            "instructions": "Resalta a los cachorros que necesitan un hogar con prioridad. Agrega class=\"urgente\" a un párrafo HTML y en <style> crea la regla .urgente asignando la propiedad 'color' con un tono llamativo.",
            "targetDescription": "Crea una clase en HTML (class=\"...\") y defínela en <style> con el punto y la propiedad color.",
            "hint": "El selector de clase en CSS siempre inicia con punto: .urgente { color: coral; }"
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Resaltar Cosechas de Origen Único",
            "instructions": "Destaca los cafés de finca especial en la carta. Asigna el atributo class=\"origen-unico\" en un elemento HTML y en <style> estiliza la clase .origen-unico asignándole la propiedad 'color'.",
            "targetDescription": "Agrega class=\"...\" en HTML y estiliza .clase en CSS con la propiedad color.",
            "hint": "Recuerda no poner punto en el HTML (class=\"origen-unico\") pero sí en el CSS (.origen-unico { color: ...; })."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Destacar Sencillos Número Uno en las Listas",
            "instructions": "Resalta las canciones premiadas en la discografía. Coloca class=\"hit-mundial\" en un elemento HTML y en tu <style> escribe el selector .hit-mundial con la propiedad 'color'.",
            "targetDescription": "Usa un atributo class en HTML y define su estilo en CSS con punto (.) y la propiedad color.",
            "hint": "Asegúrate de que el nombre de la clase en HTML coincida con el selector en CSS precedido de un punto."
        }
    },
    "18": {
        "space": {
            "missionTitle": "Misión Intermedia: Panel de Control del Módulo de Oxígeno",
            "instructions": "Identifica de forma única el sistema de soporte vital. En un elemento <div> de tu HTML, agrega el atributo id=\"modulo-oxigeno\" y en tu etiqueta <style> crea el selector de ID (#modulo-oxigeno) asignándole la propiedad 'background-color'.",
            "targetDescription": "Asigna id=\"...\" a un <div> y estílizalo en CSS usando el numeral (#) con background-color.",
            "hint": "HTML: <div id=\"modulo-oxigeno\">...</div> | CSS: #modulo-oxigeno { background-color: #0f172a; }"
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Identificador Único de la Sala de Rayos X",
            "instructions": "Configura la sala médica especializada del hospital. Agrega el atributo id=\"sala-rayos\" a tu contenedor <div> y en <style> utiliza el selector de ID #sala-rayos para darle un 'background-color' distintivo.",
            "targetDescription": "Usa id=\"...\" en un <div> y crea en CSS una regla con el numeral (#) y background-color.",
            "hint": "En el HTML va id=\"sala-rayos\" y en el CSS va #sala-rayos { background-color: ...; }."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Barra de Despacho Take-Away",
            "instructions": "Destaca la zona de retiro rápido de pedidos. Coloca el atributo id=\"barra-takeaway\" en tu <div> y en la etiqueta <style> dale un 'background-color' único usando el selector de ID #barra-takeaway.",
            "targetDescription": "Agrega id a un <div> y estílizalo en CSS con el numeral (#) y la propiedad background-color.",
            "hint": "Los selectores de ID en CSS empiezan con numeral: #barra-takeaway { background-color: #3e2723; }."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Escenario Acústico Exclusivo",
            "instructions": "Personaliza el sector del recital reservado para las baladas. Añade el atributo id=\"escenario-acustico\" a tu <div> y en tu <style> define #escenario-acustico aplicando la propiedad 'background-color'.",
            "targetDescription": "Asigna id=\"...\" en tu <div> y dale estilo con #id y background-color en CSS.",
            "hint": "Asegúrate de que el ID en HTML no lleve numeral, pero el selector en CSS sí: #escenario-acustico."
        }
    },
    "19": {
        "space": {
            "missionTitle": "Misión Intermedia: Pantallas Táctiles de Presión con Espaciado",
            "instructions": "Separa los paneles de presión para que no se toquen y añade espacio interior para leer cómodamente. En tu <style>, aplica tanto la propiedad 'padding' (relleno interno) como 'margin' (margen externo) sobre tu contenedor o caja.",
            "targetDescription": "Usa las propiedades margin y padding dentro de una regla CSS en <style>.",
            "hint": "Ejemplo: div { padding: 20px; margin: 15px; } dentro de <style>."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Espaciado Equilibrado en Fichas de Mascotas",
            "instructions": "Mejora la legibilidad de las tarjetas de adopción separándolas del borde y entre sí. En <style>, define para tu tarjeta o contenedor las propiedades 'padding' (para que el texto respire adentro) y 'margin' (para despegar la tarjeta de afuera).",
            "targetDescription": "Incluye las propiedades CSS margin y padding en tu etiqueta <style>.",
            "hint": "Recuerda: padding es espacio hacia adentro y margin es espacio hacia afuera."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Etiquetas de Bolsas de Café de Especialidad",
            "instructions": "Diseña el packaging de los granos con buen aire gráfico. Aplica en tu <style> las propiedades 'padding' y 'margin' para crear separación interior y margen alrededor de la caja o tarjeta.",
            "targetDescription": "Configura margin y padding en tu selector CSS dentro de <style>.",
            "hint": "Ambas propiedades deben estar presentes en tu archivo dentro de <style>."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Estuche de Vinilo Coleccionable",
            "instructions": "Dale márgenes y espacio acolchado a la presentación del disco. En la etiqueta <style>, aplica 'padding' para alejar los textos del borde interior y 'margin' para separarlo de los otros elementos de la página.",
            "targetDescription": "Aplica las propiedades de modelo de caja margin y padding en tu CSS.",
            "hint": "Asegúrate de escribir tanto padding como margin en la regla de estilo."
        }
    },
    "20": {
        "space": {
            "missionTitle": "Misión Intermedia: Ventana Panorámica de Observación Curva",
            "instructions": "Diseña la ventana espacial con bordes resistentes y esquinas redondeadas aerodinámicas. En tu <style>, aplica sobre tu caja o tarjeta la propiedad 'border' (ej: 2px solid #38bdf8) y la propiedad 'border-radius' (ej: 16px o 20px).",
            "targetDescription": "Usa las propiedades border y border-radius en tu regla CSS.",
            "hint": "Ejemplo: div { border: 2px solid cyan; border-radius: 15px; }"
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Placa Identificatoria para Mascotas",
            "instructions": "Diseña la medalla que llevan los animales en su collar. En tu <style>, añade un contorno con la propiedad 'border' (ej: 2px solid #4ade80) y suaviza las esquinas con 'border-radius' (ej: 12px o 25px).",
            "targetDescription": "Aplica border y border-radius dentro de tu etiqueta <style>.",
            "hint": "No olvides ambas propiedades: border para la línea y border-radius para las curvas."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Pizarra Elegante de Ofertas del Día",
            "instructions": "Enmarca el pizarrón de promociones con un marco estilizado. En tu <style>, agrega la propiedad 'border' (ej: 3px solid #fb923c) y redondea las cuatro esquinas con 'border-radius' (ej: 14px).",
            "targetDescription": "Incorpora border y border-radius en tus estilos CSS.",
            "hint": "Verifica que el selector en <style> tenga tanto border como border-radius."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Credencial Laminada de Prensa y Staff",
            "instructions": "Diseña la credencial que cuelga del cuello del equipo técnico. En tu <style>, añade un borde definido con 'border' (ej: 2px solid #f43f5e) y esquinas redondeadas con 'border-radius' (ej: 18px).",
            "targetDescription": "Usa border y border-radius en tu regla de estilos.",
            "hint": "Sintaxis: selector { border: 2px solid red; border-radius: 16px; }"
        }
    },
    "21": {
        "space": {
            "missionTitle": "Misión Intermedia: Fila de Sensores en el Ala de la Nave",
            "instructions": "Alinea los sensores térmicos en una misma línea horizontal automáticamente. En tu <style>, aplica la propiedad 'display: flex;' sobre la regla CSS del contenedor que agrupa los elementos.",
            "targetDescription": "Añade display: flex; en el selector del contenedor dentro de <style>.",
            "hint": "Escribe display: flex; dentro de la regla CSS que envuelve a tus elementos."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Fila de Consultorios Veterinarios",
            "instructions": "Muestra los diferentes sectores de la clínica en una fila moderna y fluida. Agrega la propiedad 'display: flex;' en tu regla de <style> sobre el contenedor principal.",
            "targetDescription": "Usa display: flex; en el contenedor para activar Flexbox.",
            "hint": "Flexbox se activa en el contenedor padre usando: display: flex;"
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Fila de Métodos de Extracción de Café",
            "instructions": "Exhibe las cafeteras (V60, Chemex y Prensa Francesa) lado a lado. En tu etiqueta <style>, coloca 'display: flex;' en la clase o regla de tu contenedor para alinear las opciones horizontalmente.",
            "targetDescription": "Aplica display: flex; en tu contenedor mediante CSS.",
            "hint": "Dentro de <style>: .contenedor { display: flex; }"
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Fila de Pedales y Ecualizadores",
            "instructions": "Organiza la pedalera de efectos de guitarra en una sola línea horizontal. En <style>, añade la propiedad 'display: flex;' en el contenedor para que los pedales se ubiquen en fila de manera automática.",
            "targetDescription": "Establece display: flex; en tu regla contenedora en <style>.",
            "hint": "La propiedad mágica para convertir elementos en fila es display: flex;"
        }
    },
    "22": {
        "space": {
            "missionTitle": "Misión Intermedia: Distribuir Antenas de Comunicación en el Techo",
            "instructions": "Reparte las antenas de transmisión a lo largo del techo de la estación espacial. En tu <style>, dentro del contenedor con display: flex, utiliza la propiedad 'justify-content' (ej: space-between, space-around o center) para distribuir el espacio horizontal.",
            "targetDescription": "Usa la propiedad justify-content en tu contenedor flex.",
            "hint": "Ejemplo: .panel { display: flex; justify-content: space-between; }"
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Separar Estaciones de Juego de Cachorros",
            "instructions": "Distribuye los bebederos y juguetes a lo ancho del patio de juegos. En tu <style>, dentro de la regla flex, agrega 'justify-content' (ej: space-around o space-between) para equilibrar las distancias horizontales.",
            "targetDescription": "Aplica la propiedad CSS justify-content en el contenedor flex.",
            "hint": "justify-content controla cómo se reparte el espacio horizontal entre los hijos."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Espaciar Mesas en la Terraza al Aire Libre",
            "instructions": "Coloca las mesas de café con una separación uniforme y armónica. En tu etiqueta <style>, aplica la propiedad 'justify-content' (ej: space-between, space-evenly o space-around) en tu contenedor flex.",
            "targetDescription": "Incorpora justify-content en la regla flex dentro de <style>.",
            "hint": "Usa justify-content: space-between; (o space-around) en el padre flex."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Separar Bafles en Ambos Extremos del Escenario",
            "instructions": "Ubica los parlantes de sonido repartidos de punta a punta del escenario. En <style>, define 'justify-content' (ej: space-between o space-around) en tu contenedor flex para abrir espacio entre ellos.",
            "targetDescription": "Usa la propiedad justify-content para distribuir los elementos en el eje principal.",
            "hint": "justify-content: space-between; empuja los elementos hacia los extremos."
        }
    },
    "23": {
        "space": {
            "missionTitle": "Misión Intermedia: Nivelar Sensores de Altura Desigual",
            "instructions": "Alinea verticalmente las cámaras y radares aunque tengan alturas distintas. En tu <style>, dentro del contenedor con display: flex, utiliza la propiedad 'align-items: center;' para que todos queden perfectamente centrados verticalmente.",
            "targetDescription": "Aplica align-items: center; en la regla CSS del contenedor flex.",
            "hint": "align-items: center; alinea todos los hijos en el centro vertical de la fila."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Nivelar Frascos y Tuberías en el Laboratorio",
            "instructions": "Equilibra recipientes de diferente tamaño en el estante de análisis clínicos. En tu <style>, dentro del contenedor flex, agrega 'align-items: center;' para centrar verticalmente los elementos en la fila.",
            "targetDescription": "Usa align-items: center; en tu contenedor flex dentro de <style>.",
            "hint": "Sintaxis: align-items: center; dentro de la regla que tiene display: flex."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Centrar Tazas y Tetera en la Bandeja",
            "instructions": "Presenta el servicio de té con armonía vertical entre objetos de diferente altura. En <style>, añade 'align-items: center;' en tu contenedor flex para que la tetera y las tacitas compartan el mismo eje central.",
            "targetDescription": "Incluye align-items: center; en tu regla CSS contenedora.",
            "hint": "align-items: center; alinea la altura de los elementos al centro horizontal de la fila."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Centrar Proyectores y Luces en el Puente Colgante",
            "instructions": "Alinea los reflectores de diferentes modelos en la estructura superior del recital. En tu etiqueta <style>, incluye 'align-items: center;' en el contenedor flex para nivelar todos los focos en el centro vertical.",
            "targetDescription": "Establece align-items: center; en tu regla flex en <style>.",
            "hint": "Asegúrate de escribir exactamente: align-items: center; dentro de la regla flex."
        }
    },
    "24": {
        "space": {
            "missionTitle": "Misión Intermedia: Torre de Lanzamiento del Cohete Multi-Etapa",
            "instructions": "Apila verticalmente las 3 etapas del cohete y céntralas en una columna perfecta. En tu <style>, dentro de la regla con display: flex, agrega 'flex-direction: column;' y 'align-items: center;' para orientar los elementos en columna centrada.",
            "targetDescription": "Usa flex-direction: column; y align-items: center; en tu contenedor flex.",
            "hint": "Necesitas ambas propiedades: flex-direction: column; para apilar y align-items: center; para centrar."
        },
        "vet": {
            "missionTitle": "Misión Intermedia: Columna de Etapas de la Adopción Responsable",
            "instructions": "Diseña un flujo visual de pasos apilados uno debajo del otro y centrados. En <style>, dentro de tu contenedor flex, aplica 'flex-direction: column;' junto con 'align-items: center;'.",
            "targetDescription": "Aplica flex-direction: column; y align-items: center; en tu clase flex.",
            "hint": "flex-direction: column cambia el eje a vertical, y align-items: center centra los bloques en ese eje."
        },
        "cafe": {
            "missionTitle": "Misión Intermedia: Columna de Capas del Café Bombón Degustación",
            "instructions": "Representa visualmente las tres capas del café servidas en vaso alto (leche condensada, café espresso y crema batida). En tu <style>, añade 'flex-direction: column;' y 'align-items: center;' al contenedor flex.",
            "targetDescription": "Configura flex-direction: column; y align-items: center; en tu regla flex.",
            "hint": "Asegúrate de incluir flex-direction: column; y align-items: center; en <style>."
        },
        "rock": {
            "missionTitle": "Misión Intermedia: Columna de Parlantes de la Torre de Sonido",
            "instructions": "Construye la imponente columna vertical con la torre de bafles apilados. En <style>, en la regla del contenedor flex, establece 'flex-direction: column;' y 'align-items: center;' para ordenarlos verticalmente centrados.",
            "targetDescription": "Define flex-direction: column; y align-items: center; en tu CSS flex.",
            "hint": "Debes incluir ambas propiedades en la misma regla flex: flex-direction: column; y align-items: center;"
        }
    },
    "25": {
        "space": {
            "missionTitle": "Misión Maestra Intermedia: Tarjeta de la Base Lunar Alfa",
            "instructions": "¡El mayor desafío para graduarte como Ingeniero Web Espacial! Diseña desde cero una tarjeta completa y estilizada: usa un contenedor con 'display: flex' y 'border-radius', dentro incluye un título, una tabla <table> con cabeceras <th> y datos <td> (detallando recursos de la base como Oxígeno y Energía), y un enlace <a> con href que diga 'Ver Transmisión en Vivo de la Base Lunar'.",
            "targetDescription": "Crea una página con una tarjeta flex (display: flex, border-radius), una tabla <table> con <th> y <td>, y un enlace <a> con href.",
            "hint": "Integra todo lo aprendido: HTML completo, <style> con display: flex y border-radius, tabla con <th> y <td>, y enlace <a>."
        },
        "vet": {
            "missionTitle": "Misión Maestra Intermedia: Tarjeta del Santuario de Animales Silvestres",
            "instructions": "¡Tu proyecto de graduación como Guardián Web Animal! Crea una tarjeta completa desde cero: contenedor estilizado con 'display: flex' y 'border-radius', un encabezado con el nombre del santuario, una tabla <table> con <th> y <td> (listando recintos como Aves y Felinos con su capacidad), y un enlace <a> con href para 'Inscribirse como Voluntario del Santuario'.",
            "targetDescription": "Construye una tarjeta con display: flex, border-radius, tabla <table> con <th> y <td>, y un enlace <a> con href.",
            "hint": "Combina estructura HTML5, CSS con display: flex y border-radius, una tabla informativa y un enlace funcional."
        },
        "cafe": {
            "missionTitle": "Misión Maestra Intermedia: Tarjeta del Tour Internacional de Baristas",
            "instructions": "¡El examen final para convertirte en Barista Digital Maestro! Construye una tarjeta desde cero: utiliza un contenedor flex ('display: flex' y 'border-radius'), un título, una tabla <table> con <th> y <td> (con fechas de cata, ciudades y fincas de café invitadas), y un enlace <a> con su href que permita 'Reservar Lugar en el Tour de Catas'.",
            "targetDescription": "Desarrolla una tarjeta integrada con display: flex, border-radius, tabla <table> con <th> y <td>, y un enlace <a> con href.",
            "hint": "Verifica tener el contenedor con display: flex y border-radius, la tabla con cabecera y celdas, y el enlace <a>."
        },
        "rock": {
            "missionTitle": "Misión Maestra Intermedia: Tarjeta de la Gira del Disco de Platino",
            "instructions": "¡La prueba cumbre para consagrarte como Estrella Web del Rock! Diseña la tarjeta oficial de la gira mundial desde cero: contenedor flex con 'display: flex' y esquinas redondeadas 'border-radius', un título imponente, una tabla <table> con <th> y <td> (con fechas de recitales, estadios y entradas vendidas), y un enlace <a> con href para 'Comprar Entradas en Preventa VIP'.",
            "targetDescription": "Crea una tarjeta profesional combinando display: flex, border-radius, tabla <table> con <th> y <td>, y enlace <a> con href.",
            "hint": "Demuestra tu dominio: crea el documento HTML completo, aplica flex y border-radius, añade la tabla con <th> y <td> y el enlace <a>."
        }
    }
};

// Inyectar misiones intermedias en LEVELS_DATA
LEVELS_DATA.forEach(level => {
    const interData = INTERMEDIATE_MISSIONS[level.id];
    if (interData) {
        ['space', 'vet', 'cafe', 'rock'].forEach(themeKey => {
            if (level.themes && level.themes[themeKey] && interData[themeKey]) {
                level.themes[themeKey].intermediate = interData[themeKey];
            }
        });
    }
});

window.THEMES_CONFIG = THEMES_CONFIG;
window.LEVELS_DATA = LEVELS_DATA;
