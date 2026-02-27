# 🔍 AuditaFácil — Auditoría de Sistemas Explicada Fácil

> Landing page educativa que explica los 12 conceptos clave de auditoría de sistemas con lenguaje simple, ejemplos cotidianos y diseño moderno. Pensada para todo público, sin importar su nivel técnico.

---

## 📸 Vista Previa

```
┌──────────────────────────────────────────────┐
│  🔍 AuditaFácil              [Aprender Fácil]│
├──────────────────────────────────────────────┤
│                                              │
│  Auditoría de Sistemas    [ 📊 Ilustración ] │
│  Explicada Fácil                             │
│                                              │
│  12 conceptos · 100% fácil · 0 tecnicismos   │
├──────────────────────────────────────────────┤
│  📖 Los 12 conceptos — tarjetas detalladas   │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐  │
│  │🌍 ISO     │ │🔄 Int/Ext │ │📄 Docum.  │  │
│  └───────────┘ └───────────┘ └───────────┘  │
├──────────────────────────────────────────────┤
│  ⚡ Sin auditoría  vs  Con auditoría         │
├──────────────────────────────────────────────┤
│  ✅ Checklist de lo aprendido + CTA final    │
└──────────────────────────────────────────────┘
```

---

## 🗂️ Estructura del Proyecto

```
audita-facil/
│
├── index.html    ← Estructura y contenido (HTML semántico)
├── styles.css    ← Todos los estilos, variables y animaciones
├── main.js       ← Scroll reveal e interactividad
└── README.md     ← Este archivo
```

**¿Por qué esta estructura?**
Separar HTML, CSS y JS sigue las buenas prácticas de desarrollo frontend: cada archivo tiene una sola responsabilidad, es más fácil de mantener, escalar y depurar.

---

## 🚀 Cómo usarlo

No requiere servidor ni dependencias. Solo clona y abre:

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/audita-facil.git

# 2. Entra a la carpeta
cd audita-facil

# 3. Abre en el navegador
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

> ⚠️ Las fuentes (Google Fonts) se cargan desde CDN. Necesitas conexión a internet para verlas. Sin conexión, el navegador usará una fuente sans-serif de respaldo.

---

## 📚 Conceptos Cubiertos

| # | Ícono | Concepto | Descripción corta |
|---|-------|----------|-------------------|
| 01 | 🌍 | **ISO** | Organización mundial que crea normas de calidad y seguridad |
| 02 | 🔄 | **Auditoría Interna vs. Externa** | Revisión desde adentro vs. revisión independiente desde afuera |
| 03 | 📄 | **Documentación de Referencia** | Normas, manuales y leyes que guían la auditoría |
| 04 | 🎯 | **Alcance** | Límites de lo que se va a revisar |
| 05 | 👤 | **Auditor de Calidad** | Persona imparcial que evalúa y reporta hallazgos |
| 06 | 📅 | **Programa de Auditoría** | Plan y calendario de todas las auditorías del año |
| 07 | ⚖️ | **Criterios** | Reglas con las que se mide si algo cumple o no |
| 08 | 🔎 | **Hallazgo** | Lo que el auditor descubre al comparar realidad vs. norma |
| 09 | ✅ | **Conformidad** | Cuando algo cumple plenamente con los requisitos |
| 10 | ❌ | **No Conformidad** | Incumplimiento de un requisito que debe corregirse |
| 11 | 🚀 | **Oportunidad de Mejora** | Algo que cumple, pero podría hacerse mejor |
| 12 | 🇨🇴 | **Ley 1581 de 2012** | Ley colombiana de protección de datos personales |

---

## ✨ Características Técnicas

| Característica | Detalle |
|----------------|---------|
| **Tecnología** | HTML5 + CSS3 + JavaScript vanilla (sin frameworks) |
| **Fuentes** | `Outfit` (títulos/UI) + `Source Serif 4` (cuerpo de texto) |
| **Animaciones** | CSS puro + `IntersectionObserver` para scroll reveal |
| **Responsive** | Mobile-first, funciona en móvil, tablet y escritorio |
| **Accesibilidad** | Roles ARIA, contraste WCAG AA, navegación por teclado |
| **Dependencias** | Cero. Solo Google Fonts vía CDN |
| **Peso total** | ~20 KB (sin contar fuentes externas) |

---

## 🎨 Sistema de Diseño

**Paleta de colores**

| Variable | Color | Uso |
|----------|-------|-----|
| `--blue-deep` | `#1a2f5a` | Títulos, navbar, fondos oscuros |
| `--blue-mid` | `#2d5be3` | Color principal, botones, CTA |
| `--blue-soft` | `#4f8bff` | Gradientes, acentos suaves |
| `--blue-ice` | `#f0f5ff` | Fondos de secciones, ejemplos en cards |
| `--teal` | `#00c9b1` | Acento positivo, gradientes |
| `--amber` | `#ffb547` | Iconos de advertencia/información |
| `--rose` | `#ff6b8a` | Iconos de alerta/no conformidad |

**Tipografía**

- `Outfit` (pesos 300–800): para todos los títulos, labels, botones y navegación
- `Source Serif 4`: para los párrafos descriptivos de las tarjetas, mejorando la lectura de textos largos

---

## 🛠️ Personalización

### Cambiar colores del tema
Edita las variables en la parte superior de `styles.css`:
```css
:root {
  --blue-mid:  #2d5be3;  /* Color principal */
  --teal:      #00c9b1;  /* Acento */
  --blue-deep: #1a2f5a;  /* Fondos oscuros y títulos */
}
```

### Agregar un nuevo concepto
Copia este bloque dentro de `.concepts-grid` en `index.html`:
```html
<article class="card reveal" role="listitem">
  <div class="card-icon ic-blue" aria-hidden="true">🆕</div>
  <p class="card-num">Concepto 13</p>
  <h3 class="card-title">Nombre del Concepto</h3>
  <p class="card-desc">
    Explicación detallada en 5-6 líneas con lenguaje simple y claro.
    Explica qué es, para qué sirve y por qué es importante.
  </p>
  <div class="card-example" aria-label="Ejemplo práctico">
    <span class="ex-icon">💡</span>
    <span><strong>Ejemplo:</strong> Analogía cotidiana que lo ilustre.</span>
  </div>
</article>
```

**Clases de color disponibles para el ícono de la tarjeta:**

| Clase CSS | Color |
|-----------|-------|
| `ic-blue` | Azul |
| `ic-teal` | Verde azulado |
| `ic-amber` | Ámbar |
| `ic-rose` | Rosa/rojo |
| `ic-violet` | Violeta |
| `ic-green` | Verde |
| `ic-orange` | Naranja |
| `ic-sky` | Azul cielo |

---

## ♿ Accesibilidad

- HTML semántico: `<nav>`, `<section>`, `<article>`, `<footer>` con jerarquía de headings correcta
- Atributos `aria-label` en todos los elementos interactivos
- `aria-hidden="true"` en íconos y elementos puramente decorativos
- `role="list"` y `role="listitem"` en grids de tarjetas
- Contraste de color ≥ 4.5:1 en texto principal (cumple WCAG 2.1 AA)
- Todos los botones y enlaces son accesibles por teclado (`Tab`, `Enter`)

---

## 📁 Archivos Explicados

### `index.html`
Contiene toda la estructura y el contenido de la página. Usa HTML5 semántico con etiquetas que describen el propósito de cada sección. Solo enlaza los recursos externos (fuentes, CSS, JS) — no tiene estilos ni scripts embebidos.

### `styles.css`
Contiene todas las reglas de estilo organizadas en secciones comentadas:
- Variables CSS globales
- Reset y estilos base
- Keyframes de animación
- Componentes (navbar, hero, cards, comparación, checklist)
- Media queries responsive (mobile-first)

### `main.js`
Contiene toda la lógica JavaScript:
- `IntersectionObserver` para animar elementos al entrar en pantalla (scroll reveal con efecto escalonado)
- Detección de scroll para agregar sombra a la navbar

---

## 🤝 Contribuciones

¿Quieres mejorar el contenido o el diseño? ¡Las PRs son bienvenidas!

```bash
# 1. Haz fork del repositorio
# 2. Crea tu rama
git checkout -b mejora/descripcion-breve

# 3. Haz tus cambios y commit
git commit -m "feat: descripción del cambio"

# 4. Sube y abre un Pull Request
git push origin mejora/descripcion-breve
```

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Libre para usar, modificar y distribuir.

---

<div align="center">

Hecho con ❤️ para que aprender sea **fácil y divertido**

**AuditaFácil &copy; 2025**

</div>
