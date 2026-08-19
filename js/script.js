// ============================================
// MENU MOBILE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// FILTRO DE PROJETOS
// ============================================

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projeto-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove classe active de todos os botões
        filterBtns.forEach(b => b.classList.remove('active'));
        // Adiciona active ao botão clicado
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'todos') {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 0);
            } else {
                const categoria = card.getAttribute('data-categoria');
                if (categoria === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 0);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            }
        });
    });
});

// ============================================
// SCROLL NAVBAR
// ============================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.borderBottom = '1px solid rgba(0, 217, 255, 0.2)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.borderBottom = '1px solid rgba(0, 217, 255, 0)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// SCROLL REVEAL - ANIMAÇÕES
// ============================================

const revealElements = document.querySelectorAll('.projeto-card, .servico-card, .contato-item');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Criar mensagem para WhatsApp
    const mensagemWhatsApp = encodeURIComponent(
        `Olá RIROPSD! 🎨\n\n` +
        `Meu nome é: ${nome}\n` +
        `Meu e-mail é: ${email}\n` +
        `Assunto: ${assunto}\n` +
        `Mensagem: ${mensagem}`
    );

    // Redirecionar para WhatsApp
    const telefone = '5585987654321'; // Altere com seu número
    window.open(`https://wa.me/${telefone}?text=${mensagemWhatsApp}`, '_blank');

    // Limpar formulário
    contactForm.reset();

    // Mensagem de sucesso
    alert('Sua mensagem será enviada via WhatsApp!');
});

// ============================================
// SCROLL SUAVE PARA LINKS INTERNOS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// EFEITO DE PARALLAX SUAVE
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// ============================================
// CONTADOR ANIMADO (OPCIONAL)
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target);
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// MENU RESPONSIVO PARA MOBILE
// ============================================

// CSS adicional para o menu mobile (injetado dinamicamente)
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            position: absolute;
            flex-direction: column;
            background-color: rgba(26, 26, 26, 0.99);
            width: 100%;
            text-align: center;
            top: 60px;
            left: 0;
            gap: 0;
            padding: 20px 0;
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
        }

        .nav-menu.active li {
            padding: 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-menu.active li:last-child {
            border-bottom: none;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(10px, 10px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// LAZY LOADING PARA IMAGENS (FUTURA)
// ============================================

// Placeholder para quando você adicionar imagens reais
// Descomentar e usar quando tiver imagens
/*
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
*/

// ============================================
// LOG INICIAL
// ============================================

console.log('🎨 RIROPSD - Portfólio Carregado com Sucesso!');
