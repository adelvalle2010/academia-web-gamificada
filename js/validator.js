// Motor de validación semántica inteligente y pedagógico
class CodeValidator {
    constructor() {
        this.parser = new DOMParser();
    }

    validate(levelData, rawCode, themeId = 'space', mode = 'guided') {
        if (!rawCode || !rawCode.trim()) {
            return {
                valid: false,
                error: mode === 'intermediate' 
                    ? "La hoja está en blanco. Escribe el documento HTML5 completo (doctype, html, head, title, body) y la misión."
                    : "El editor está vacío. Escribe tu código HTML/CSS para cumplir la misión."
            };
        }

        // 1. Chequeo antifraude de copia de plantilla inicial sin modificar (solo en modo guiado)
        if (mode !== 'intermediate') {
            const starterCheck = this.checkUnchangedStarterCode(levelData, rawCode, themeId);
            if (!starterCheck.valid) {
                return starterCheck;
            }
        }

        // 2. Chequeo antifraude de copia del ejemplo de sintaxis
        const antiCopyCheck = this.checkExampleCopy(levelData, rawCode);
        if (!antiCopyCheck.valid) {
            return antiCopyCheck;
        }

        // 3. Chequeo de etiquetas HTML comunes no cerradas o rotas
        const unclosedTagCheck = this.checkCommonUnclosedTags(rawCode);
        if (!unclosedTagCheck.valid) {
            return unclosedTagCheck;
        }

        // 4. Parsear a DOM virtual
        let doc;
        try {
            doc = this.parser.parseFromString(rawCode, 'text/html');
        } catch (e) {
            return {
                valid: false,
                error: "Hubo un problema al procesar el código HTML. Revisa que no haya símbolos extraños o etiquetas rotas."
            };
        }

        // 5. Revisar si el parser detectó errores sintácticos graves en XML/XHTML
        const parserError = doc.querySelector('parsererror');
        if (parserError) {
            return {
                valid: false,
                error: "Hay un error de sintaxis en el HTML. Verifica haber cerrado todas las etiquetas con '</>'."
            };
        }

        // 6. Validación estructural obligatoria para Nivel Intermedio (Hoja en blanco)
        if (mode === 'intermediate') {
            const structureCheck = this.checkIntermediateStructure(doc, rawCode);
            if (!structureCheck.valid) {
                return structureCheck;
            }
        }

        // 7. Si el nivel tiene validador semántico específico, ejecutarlo
        if (levelData && typeof levelData.validator === 'function') {
            try {
                const result = levelData.validator(doc, rawCode, themeId, mode);
                if (!result.valid) {
                    return result;
                }
            } catch (err) {
                console.error("Error en validador de nivel:", err);
                return {
                    valid: false,
                    error: "No se pudo validar el código: " + (err.message || "revisa la sintaxis.")
                };
            }
        }

        return {
            valid: true,
            message: "¡Excelente trabajo! Todo el código cumple a la perfección los requisitos del nivel."
        };
    }

    checkUnchangedStarterCode(levelData, rawCode, themeId) {
        if (!levelData || !levelData.themes) return { valid: true };
        const themeInfo = levelData.themes[themeId] || levelData.themes.space;
        if (!themeInfo || !themeInfo.starterCode) return { valid: true };

        const normalize = (str) => (str || '')
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();

        const cleanRaw = normalize(rawCode);
        const cleanStarter = normalize(themeInfo.starterCode);

        // Si después de quitar comentarios el código es idéntico al starterCode o no tiene texto adicional
        if (cleanRaw.length === 0 || cleanRaw === cleanStarter) {
            return {
                valid: false,
                error: "⚠️ No has agregado tu código a la plantilla inicial. Lee las instrucciones de la misión y escribe tu solución."
            };
        }

        return { valid: true };
    }

    checkExampleCopy(levelData, rawCode) {
        if (!levelData || !levelData.exampleCode) return { valid: true };

        const normalize = (str) => (str || '')
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();

        const cleanRaw = normalize(rawCode);
        const cleanExample = normalize(levelData.exampleCode);

        // 1. Detección de coincidencia exacta o inclusión total del ejemplo
        if (cleanRaw === cleanExample || (cleanExample.length > 20 && cleanRaw.includes(cleanExample))) {
            return {
                valid: false,
                error: "🚫 ¡Detectamos que copiaste el ejemplo de sintaxis! El ejemplo es solo una guía para aprender la estructura. Escribe tu propio código resolviendo la consigna de tu misión."
            };
        }

        // 2. Frases genéricas comunes usadas en los ejemplos de sintaxis
        const genericPhrases = [
            { text: 'título principal de la página', desc: 'Título Principal' },
            { text: 'título principal', desc: 'Título Principal' },
            { text: 'subtítulo de sección', desc: 'Subtítulo de Sección' },
            { text: '¡hola mundo!', desc: '¡Hola Mundo!' },
            { text: 'hola mundo', desc: 'Hola Mundo' },
            { text: 'palabra muy importante', desc: 'palabra muy importante' },
            { text: 'muy importante', desc: 'muy importante' },
            { text: 'tono suave', desc: 'tono suave' },
            { text: 'primer elemento de la lista', desc: 'Primer elemento' },
            { text: 'primer elemento', desc: 'Primer elemento' },
            { text: 'segundo elemento', desc: 'Segundo elemento' },
            { text: 'tercer elemento', desc: 'Tercer elemento' },
            { text: 'paso número 1', desc: 'Paso 1' },
            { text: 'paso número 2', desc: 'Paso 2' },
            { text: 'paso 1', desc: 'Paso 1' },
            { text: 'paso 2', desc: 'Paso 2' },
            { text: 'foto-ejemplo.jpg', desc: 'foto-ejemplo.jpg' },
            { text: 'foto-ejemplo', desc: 'foto-ejemplo' },
            { text: 'https://ejemplo.com', desc: 'ejemplo.com' },
            { text: 'ejemplo.com', desc: 'ejemplo.com' },
            { text: 'visitar sitio web', desc: 'visitar sitio web' },
            { text: 'título dentro de la caja', desc: 'Título dentro de la caja' },
            { text: 'párrafo dentro de la caja', desc: 'Párrafo dentro de la caja' },
            { text: 'dato 1', desc: 'Dato 1' },
            { text: 'dato 2', desc: 'Dato 2' },
            { text: 'columna 1', desc: 'Columna 1' },
            { text: 'columna 2', desc: 'Columna 2' }
        ];

        for (const item of genericPhrases) {
            if (cleanRaw.includes(item.text)) {
                return {
                    valid: false,
                    error: `🚫 El texto o valor "${item.desc}" pertenece al ejemplo genérico. Por favor escribe el contenido propio que pide la consigna de tu misión.`
                };
            }
        }

        // 3. Extracción dinámica de textos del ejemplo de este nivel específico
        try {
            const exDoc = this.parser.parseFromString(levelData.exampleCode, 'text/html');
            const allElements = exDoc.querySelectorAll('*');
            for (const el of allElements) {
                if (el.children.length === 0) {
                    const text = el.textContent.trim().toLowerCase();
                    if (text.length >= 8 && !text.includes('{') && !text.includes(';') && !text.includes('<')) {
                        if (cleanRaw.includes(text)) {
                            return {
                                valid: false,
                                error: `🚫 El contenido "${el.textContent.trim()}" fue tomado del ejemplo de sintaxis. Recuerda que debes resolver la consigna con tus propios datos.`
                            };
                        }
                    }
                }
            }
        } catch (e) {
            // Silencioso en caso de error de parseo
        }

        return { valid: true };
    }

    checkIntermediateStructure(doc, rawCode) {
        const lower = (rawCode || '').toLowerCase();

        // 1. Declaración <!DOCTYPE html>
        if (!lower.includes('<!doctype html>')) {
            return {
                valid: false,
                error: "⚠️ En el Nivel Intermedio debes crear el documento HTML5 completo: te falta la declaración <!DOCTYPE html> al inicio."
            };
        }

        // 2. Etiqueta raíz <html>
        const html = doc.querySelector('html');
        if (!html) {
            return {
                valid: false,
                error: "⚠️ Te falta la etiqueta raíz <html>...</html> que envuelve todo el documento."
            };
        }

        // 3. Sección <head>
        const head = doc.querySelector('head');
        if (!head) {
            return {
                valid: false,
                error: "⚠️ Debes incluir la sección <head>...</head> para los metadatos de la página."
            };
        }

        // 4. Etiqueta <title> con texto
        const title = head.querySelector('title');
        if (!title || !title.textContent.trim()) {
            return {
                valid: false,
                error: "⚠️ Dentro del <head>, debes incluir una etiqueta <title> con el nombre o título de tu página."
            };
        }

        // 5. Sección <body>
        const body = doc.querySelector('body');
        if (!body) {
            return {
                valid: false,
                error: "⚠️ Te falta la sección <body>...</body> donde se coloca el contenido visible del sitio."
            };
        }

        return { valid: true };
    }

    checkCommonUnclosedTags(code) {
        // Remover comentarios HTML y CSS para no contar etiquetas explicativas en comentarios
        const cleanCode = code
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/\/\*[\s\S]*?\*\//g, '');

        // Etiquetas pareadas que los estudiantes suelen olvidar cerrar
        const pairedTags = ['h1', 'h2', 'h3', 'p', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'div', 'table', 'tr', 'th', 'td', 'style', 'head', 'body', 'html'];
        
        for (const tag of pairedTags) {
            const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
            const closeRegex = new RegExp(`</${tag}>`, 'gi');

            const openMatches = cleanCode.match(openRegex) || [];
            const closeMatches = cleanCode.match(closeRegex) || [];

            if (openMatches.length > closeMatches.length) {
                return {
                    valid: false,
                    error: `¡Cuidado! Abriste la etiqueta <${tag}> pero te olvidaste de cerrarla con </${tag}>.`
                };
            }
        }

        // Verificar comillas no cerradas en atributos clave
        const srcUnclosed = cleanCode.match(/src="[^"]*$/m);
        if (srcUnclosed) {
            return {
                valid: false,
                error: "Parece que dejaste el atributo src=\"... sin cerrar las comillas."
            };
        }
        const hrefUnclosed = cleanCode.match(/href="[^"]*$/m);
        if (hrefUnclosed) {
            return {
                valid: false,
                error: "Parece que dejaste el atributo href=\"... sin cerrar las comillas."
            };
        }

        return { valid: true };
    }
}

window.codeValidator = new CodeValidator();
