# 🔍 AuditaFácil — Auditoría de Sistemas Explicada Fácil

> Landing page educativa que explica los conceptos clave de auditoría de sistemas con lenguaje simple, ejemplos cotidianos y diseño moderno. Pensada para público no técnico.

---

## 📸 Vista Previa

![Preview](img/home.png)

---

## 🚀 Demo

Abre el archivo directamente en tu navegador:

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/audita-facil.git

# Entra a la carpeta
cd audita-facil

# Abre en el navegador (cualquier sistema)
open auditoria-sistemas.html        # macOS
start auditoria-sistemas.html       # Windows
xdg-open auditoria-sistemas.html    # Linux
```

> ✅ No requiere servidor, dependencias ni instalación. Un solo archivo HTML listo para usar.

---

## 📚 Conceptos Cubiertos

| # | Concepto | Resumen |
|---|----------|---------|
| 01 | 🌍 **ISO** | Organización mundial que crea normas de calidad |
| 02 | 🔄 **Auditoría Interna vs. Externa** | Revisión desde adentro vs. desde afuera |
| 03 | 📄 **Documentación de Referencia** | Papeles y manuales base para la revisión |
| 04 | 🎯 **Alcance de la Auditoría** | Límites de lo que se va a revisar |
| 05 | 👤 **Auditor de Calidad** | Persona responsable de evaluar y reportar |
| 06 | 📅 **Programa de Auditoría** | Plan y calendario de todas las auditorías |
| 07 | ⚖️ **Criterios de Auditoría** | Reglas con las que se mide si algo está bien |
| 08 | 🔎 **Hallazgo** | Lo que se descubre al comparar con las normas |
| 09 | ✅ **Conformidad** | Cuando algo cumple exactamente con las reglas |
| 10 | ❌ **No Conformidad** | Cuando algo no cumple con lo establecido |
| 11 | 🚀 **Oportunidad de Mejora** | Cumple, pero podría hacerse mejor |
| 12 | 🇨🇴 **Ley 1581 de 2012** | Ley colombiana de protección de datos personales |

---

## ✨ Características

- **⚡ Zero dependencias** — HTML + CSS + JS vanilla puro, sin frameworks
- **📱 Mobile-first** — Responsive en cualquier tamaño de pantalla
- **🎨 Diseño moderno** — Paleta azul-blanco-gris, tipografía Outfit (Google Fonts)
- **🎞️ Animaciones suaves** — Fade-up al hacer scroll con Intersection Observer
- **♿ Accesibilidad** — Roles ARIA, contraste adecuado, navegación por teclado
- **🧠 Lenguaje simple** — Explicaciones en 2–3 líneas + ejemplos cotidianos
- **🏠 Un solo archivo** — Todo en `auditoria-sistemas.html`

---

## 🗂️ Estructura del Proyecto

```
audita-facil/
│
├── auditoria-sistemas.html   # ← Archivo principal (todo incluido)
└── README.md                 # ← Este archivo
```

> Las fuentes de Google Fonts se cargan desde CDN. Se requiere conexión a internet para verlas correctamente. Sin conexión, el navegador usará una fuente sans-serif de respaldo.

---

## 🎨 Decisiones de Diseño

| Elemento | Decisión |
|----------|----------|
| **Tipografía** | `Outfit` — moderna, legible y amigable |
| **Color principal** | `#2d5be3` — azul corporativo, transmite confianza |
| **Acento** | `#00c9b1` (teal) — frescura y positividad |
| **Fondo** | Blanco + `#f0f5ff` (azul hielo muy suave) |
| **Cards** | Sombra suave + borde superior de color al hover |
| **Animaciones** | CSS puro con `Intersection Observer` — sin JS pesado |
| **Comparación** | Verde vs. Rojo — semántica visual universal |

---

## 🧩 Secciones de la Landing

```
1. 🧭 Navbar fija          → Logo + CTA "Aprender Fácil"
2. 🦸 Hero                 → Título, subtítulo, CTA, ilustración SVG, estadísticas
3. 📖 12 Conceptos         → Grid de cards con ícono, explicación y ejemplo
4. ⚡ Comparación          → Sin auditoría vs. Con auditoría (cards visuales)
5. ✅ Checklist + CTA      → Resumen visual + llamado a la acción final
6. 🦶 Footer               → Breve crédito
```

---

## 🛠️ Tecnologías Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white)

- **HTML5 semántico** — `<article>`, `<section>`, `<nav>`, `<footer>`
- **CSS3 moderno** — Variables CSS, Grid, Flexbox, `clamp()`, `backdrop-filter`
- **JavaScript vanilla** — `IntersectionObserver` para animaciones al scroll
- **Google Fonts** — Familia `Outfit` (300–800)
- **SVG inline** — Ilustración del hero sin dependencias externas

---

## 📖 Uso y Personalización

### Cambiar colores
Edita las variables CSS al inicio del archivo:

```css
:root {
  --blue-mid: #2d5be3;    /* Color principal */
  --accent-teal: #00c9b1; /* Color de acento */
  --blue-deep: #1a2f5a;   /* Títulos y fondos oscuros */
}
```

### Agregar un nuevo concepto
Copia este bloque dentro del `<div class="concepts-grid">` y personaliza:

```html
<article class="concept-card reveal" role="listitem">
  <div class="card-icon-wrap ic-blue" aria-hidden="true">🆕</div>
  <div class="card-num">13</div>
  <h3 class="card-title">Nombre del Concepto</h3>
  <p class="card-desc">Explicación en 2–3 líneas simples sin tecnicismos.</p>
  <div class="card-example" aria-label="Ejemplo práctico">
    <span class="card-example-icon">💡</span>
    <span><strong>Ejemplo:</strong> Analogía cotidiana aquí.</span>
  </div>
</article>
```

### Clases de color disponibles para `card-icon-wrap`

| Clase | Color |
|-------|-------|
| `ic-blue` | Azul |
| `ic-teal` | Verde azulado |
| `ic-amber` | Ámbar/amarillo |
| `ic-rose` | Rosa/rojo |
| `ic-violet` | Violeta |
| `ic-green` | Verde |
| `ic-orange` | Naranja |
| `ic-sky` | Azul cielo |

---

## ♿ Accesibilidad

- Roles semánticos ARIA: `role="list"`, `role="listitem"`, `role="region"`, `role="contentinfo"`
- Etiquetas `aria-label` en elementos interactivos y decorativos
- Atributos `aria-hidden="true"` en elementos puramente decorativos
- Contraste de color ≥ 4.5:1 en texto principal (WCAG AA)
- Navegación funcional por teclado
- HTML semántico con jerarquía de encabezados correcta (`h1 → h2 → h3`)

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo, modificarlo y distribuirlo libremente.

```
MIT License — feel free to use, modify and share.
```

---

## 🤝 Contribuciones

¿Quieres mejorar el contenido o el diseño? ¡Las PRs son bienvenidas!

1. Haz un fork del repositorio
2. Crea tu rama: `git checkout -b mejora/nuevo-concepto`
3. Realiza tus cambios y haz commit: `git commit -m 'feat: agregar concepto 13'`
4. Sube tu rama: `git push origin mejora/nuevo-concepto`
5. Abre un Pull Request

---

<div align="center">

Hecho con ❤️ para que aprender sea **fácil y divertido**

**AuditaFácil** · 2025

</div>
