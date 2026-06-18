# 🎉 Invitación Web - Mi Primer Año

Una hermosa invitación web interactiva para la celebración del primer cumpleaños de Iken Sebastián.

## 📋 Contenido

- **index.html** - Estructura HTML de la invitación
- **style.css** - Estilos y animaciones
- **script.js** - Funcionalidad JavaScript (música, modales, etc.)
- **images/** - Carpeta para las imágenes

## 🖼️ Imágenes Necesarias

Agrega las siguientes imágenes en la carpeta `images/`:

1. **giraffe.png** - Imagen de la jirafa (tamaño recomendado: 150x150px)
2. **elephant.png** - Imagen del elefante (tamaño recomendado: 150x150px)
3. **lion.png** - Imagen del león (tamaño recomendado: 150x150px)

Las imágenes pueden ser:
- PNG con fondo transparente (recomendado)
- JPG
- Cualquier formato de imagen web

## 🎵 Agregar Música

1. Coloca tu archivo de música en la carpeta principal con el nombre: **musica-fondo.mp3**
   
   O con otro nombre y edita la línea en `index.html`:
   ```html
   <source src="tu-musica.mp3" type="audio/mpeg">
   ```

2. Formatos soportados:
   - MP3 (.mp3)
   - OGG (.ogg)
   - WAV (.wav)
   - M4A (.m4a)

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `style.css` (líneas 6-12):
```css
:root {
    --gold: #D4AF37;        /* Color dorado */
    --green: #708238;       /* Color verde */
    /* ... más colores ... */
}
```

### Cambiar nombre
En `index.html` busca "Iken 'Sebastián" y reemplázalo.

### Cambiar fecha
Reemplaza:
- `27` por el día
- `JUNIO` por el mes
- `5:30 pm` por la hora

### Cambiar ubicación
Reemplaza "Jirón Pangoa" con tu ubicación.

### Agregar mapa real
Reemplaza el contenido de `.map-placeholder` en el modal de ubicación con un iframe de Google Maps:
```html
<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

## ✨ Características

- 🎵 Música de fondo con controles de volumen
- 🎨 Diseño hermoso y responsivo
- ✨ Animaciones suaves
- 📱 Compatible con dispositivos móviles
- 🎁 Sección de confirmación de asistencia
- 📍 Modal para ubicación
- 🎊 Confeti decorativo animado

## 🚀 Usar la Invitación

1. **Localmente**: Abre `index.html` en un navegador web
2. **En línea**: Sube los archivos a un servidor web (Netlify, Vercel, etc.)

## 📝 Notas

- Las plantas (🌿) y decoraciones son emojis - se mostrarán en todos los navegadores
- El confeti es generado por CSS animado - muy ligero
- La música se reproducirá automáticamente (algunos navegadores pueden requerir interacción del usuario)
- El diseño es totalmente responsivo y se adapta a todos los tamaños de pantalla

## 🔧 Estructura de archivos

```
INVITACION_IKER/
├── index.html
├── style.css
├── script.js
├── README.md
├── musica-fondo.mp3 (opcional)
└── images/
    ├── giraffe.png
    ├── elephant.png
    └── lion.png
```

## 💡 Tips

- Para mejor rendimiento, optimiza las imágenes antes de subirlas
- Usa una música que sea libre de derechos de autor
- Prueba en diferentes navegadores para asegurar compatibilidad
- En dispositivos móviles, algunos navegadores requieren que el usuario haga clic para reproducir la música

¡Que disfrutes la celebración! 🎉
