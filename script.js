// Elementos del DOM
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const volumeSlider = document.getElementById('volumeSlider');

// Estado de la música
let isMusicPlaying = false;

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    setupSplashScreen();
    setupEventListeners();
});

// Pantalla de bienvenida
function setupSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    const splashBtn = document.getElementById('splashBtn');

    splashBtn.addEventListener('click', () => {
        backgroundMusic.volume = 0.3;
        backgroundMusic.play().then(() => {
            isMusicPlaying = true;
            updateMusicButtonState();
        }).catch(() => {
            isMusicPlaying = false;
            updateMusicButtonState();
        });

        splashScreen.classList.add('hide');
    });
}

// Configurar listeners de eventos
function setupEventListeners() {
    musicToggle.addEventListener('click', toggleMusic);
    volumeSlider.addEventListener('change', changeVolume);
    volumeSlider.addEventListener('input', changeVolume);
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (event) => {
        const locationModal = document.getElementById('locationModal');
        const confirmModal = document.getElementById('confirmModal');
        
        if (event.target === locationModal) {
            closeModal('locationModal');
        }
        if (event.target === confirmModal) {
            closeModal('confirmModal');
        }
    });
    
    // Manejar envío de formulario
    const confirmForm = document.getElementById('confirmForm');
    if (confirmForm) {
        confirmForm.addEventListener('submit', handleFormSubmit);
    }
}

// Toggle música
function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
    } else {
        const playPromise = backgroundMusic.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    isMusicPlaying = true;
                })
                .catch(() => {
                    console.log('No se pudo reproducir la música');
                });
        }
        isMusicPlaying = true;
    }
    updateMusicButtonState();
}

// Cambiar volumen
function changeVolume(e) {
    const volume = e.target.value / 100;
    backgroundMusic.volume = volume;
}

// Actualizar estado del botón
function updateMusicButtonState() {
    if (isMusicPlaying) {
        musicToggle.textContent = '🔊';
    } else {
        musicToggle.textContent = '🔇';
    }
}

// Manejar ubicación
function handleLocation(event) {
    event.preventDefault();
    window.open('https://www.google.com/maps/place/Internet+Le+Forest/@-10.7307974,-73.7537438,90m/data=!3m1!1e3!4m15!1m8!3m7!1s0x910adca9d1a9bd11:0xdec9ffa34d172ce5!2sAtalaya!3b1!8m2!3d-10.7317689!4d-73.7585828!16zL20vMGM4aHR6!3m5!1s0x910adcabf578d9af:0x9fae4b15ae8e2650!8m2!3d-10.7307976!4d-73.7536509!16s%2Fg%2F11c76kf9lb?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D', '_blank');
}

// Manejar confirmación
function handleConfirm(event) {
    event.preventDefault();
    const mensaje = encodeURIComponent('Hola Jhomaira 👋🏻 gracias por la invitación... confirmo mi asistencia al 1er Añito de IKER SEBASTIÁN 🦁🐘🐯 NOS VEMOS EL 27/06/2026 🎂🥳🎁');
    window.open('https://wa.me/51907089628?text=' + mensaje, '_blank');
}

// Cerrar modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Manejar envío de formulario
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Aquí puedes agregar código para enviar los datos
    // Por ahora mostramos un mensaje de confirmación
    alert('¡Gracias por confirmar tu asistencia! 🎉');
    
    // Limpiar formulario
    event.target.reset();
    
    // Cerrar modal
    closeModal('confirmModal');
}

// Reproducir confeti al cargar
window.addEventListener('load', () => {
    createConfetti();
});

// Crear confeti adicional
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    
    // Crear más confeti para efecto más llamativo
    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('span');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = confetti.style.width;
        
        // Variación de colores
        const colors = ['#D4AF37', '#A8C68F', '#708238', '#FFD700'];
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        confettiContainer.appendChild(confetti);
    }
}

// Efectos adicionales: animación al scroll
document.addEventListener('scroll', () => {
    const content = document.querySelector('.content');
    const scrollTop = window.pageYOffset;
    const maxScroll = content.offsetHeight - window.innerHeight;
    
    if (scrollTop > 0 && scrollTop < maxScroll) {
        // Pequeño efecto de paralax (opcional)
        content.style.transform = `translateY(${scrollTop * 0.1}px)`;
    }
});

// Hacer que la página sea interactiva en dispositivos móviles
if ('ontouchstart' in window) {
    // Agregar clase para estilos táctiles si es necesario
    document.body.classList.add('touch-enabled');
}
