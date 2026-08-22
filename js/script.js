/* =========================================================
   RIROPSD — JAVASCRIPT DO PORTFÓLIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIGURAÇÕES DE CONTATO
       ===================================================== */

    const numeroWhatsApp = "5584996495160";
    const seuEmail = "riropsd@gmail.com";

    /* =====================================================
       MENU MOBILE
       ===================================================== */

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            nav.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                nav.classList.remove("active");
            });
        });
    }

    /* =====================================================
       SCROLL SUAVE
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const destino = link.getAttribute("href");

            if (!destino || destino === "#") return;

            const elemento = document.querySelector(destino);

            if (elemento) {
                event.preventDefault();

                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

    /* =====================================================
       BOTÃO "VER PROJETOS"
       ===================================================== */

    const botoesProjetos = document.querySelectorAll(
        ".btn-projetos, .btn-primary, [href='#projetos']"
    );

    botoesProjetos.forEach(botao => {

        botao.addEventListener("click", event => {

            const projetos = document.querySelector("#projetos");

            if (projetos) {
                event.preventDefault();

                projetos.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

    /* =====================================================
       BOTÕES "FALE COMIGO" / "CONTATO"
       ===================================================== */

    const botoesContato = document.querySelectorAll(
        ".btn-contato, .btn-secondary, [href='#contato']"
    );

    botoesContato.forEach(botao => {

        botao.addEventListener("click", event => {

            const contato = document.querySelector("#contato");

            if (contato) {
                event.preventDefault();

                contato.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

    /* =====================================================
       BOTÃO "TEM UM PROJETO? ENVIA AQUI"
       ===================================================== */

    const botoesEnviarProjeto = document.querySelectorAll(
        ".btn-enviar-projeto, .btn-projeto, [data-contato='projeto']"
    );

    botoesEnviarProjeto.forEach(botao => {

        botao.addEventListener("click", event => {

            const contato = document.querySelector("#contato");

            if (contato) {
                event.preventDefault();

                contato.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                setTimeout(() => {

                    const nome = document.querySelector("#nome");

                    if (nome) {
                        nome.focus();
                    }

                }, 700);
            }

        });

    });

    /* =====================================================
       FORMULÁRIO DE CONTATO
       ===================================================== */

    const formulario = document.querySelector(
        "#form-contato, .form-contato, form"
    );

    if (formulario) {

        formulario.addEventListener("submit", event => {

            event.preventDefault();

            const nomeCampo = document.querySelector("#nome");
            const emailCampo = document.querySelector("#email");
            const telefoneCampo = document.querySelector("#telefone");
            const projetoCampo = document.querySelector("#projeto");

            const nome = nomeCampo ? nomeCampo.value.trim() : "";
            const email = emailCampo ? emailCampo.value.trim() : "";
            const telefone = telefoneCampo ? telefoneCampo.value.trim() : "";
            const projeto = projetoCampo ? projetoCampo.value.trim() : "";

            if (!nome || !email || !telefone || !projeto) {

                alert("Preencha todos os campos antes de enviar.");

                return;
            }

            /* =============================================
               MENSAGEM PARA O WHATSAPP
               ============================================= */

            const mensagem =
                `Olá, RIROPSD!%0A%0A` +
                `Meu nome: ${encodeURIComponent(nome)}%0A` +
                `Meu e-mail: ${encodeURIComponent(email)}%0A` +
                `Meu WhatsApp: ${encodeURIComponent(telefone)}%0A%0A` +
                `Sobre meu projeto:%0A` +
                `${encodeURIComponent(projeto)}`;

            const linkWhatsApp =
                `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

            /* =============================================
               ABRIR WHATSAPP
               ============================================= */

            window.open(linkWhatsApp, "_blank");

        });

    }

    /* =====================================================
       BOTÃO DIRETO PARA WHATSAPP
       ===================================================== */

    document.querySelectorAll(
        "[data-whatsapp], .btn-whatsapp"
    ).forEach(botao => {

        botao.addEventListener("click", event => {

            event.preventDefault();

            const mensagem =
                "Olá, RIROPSD! Vim pelo seu portfólio e gostaria de falar sobre um projeto.";

            const link =
                `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

            window.open(link, "_blank");

        });

    });

    /* =====================================================
       BOTÃO DE E-MAIL
       ===================================================== */

    document.querySelectorAll(
        "[data-email], .btn-email"
    ).forEach(botao => {

        botao.addEventListener("click", event => {

            event.preventDefault();

            window.location.href =
                `mailto:${seuEmail}?subject=${encodeURIComponent(
                    "Contato pelo portfólio RIROPSD"
                )}`;

        });

    });

    /* =====================================================
       FILTRO DE PROJETOS
       ===================================================== */

    const filtros = document.querySelectorAll(
        "[data-filtro], .filtro-projeto"
    );

    const projetos = document.querySelectorAll(
        "[data-categoria], .projeto-card"
    );

    filtros.forEach(filtro => {

        filtro.addEventListener("click", () => {

            const categoria =
                filtro.dataset.filtro ||
                filtro.dataset.categoria ||
                filtro.textContent.trim().toLowerCase();

            filtros.forEach(item => {
                item.classList.remove("ativo", "active");
            });

            filtro.classList.add("ativo");

            projetos.forEach(projeto => {

                const categoriaProjeto =
                    projeto.dataset.categoria ||
                    projeto.dataset.filtro ||
                    "";

                if (
                    categoria === "todos" ||
                    categoria === "all" ||
                    categoriaProjeto === categoria
                ) {

                    projeto.style.display = "";

                    setTimeout(() => {
                        projeto.classList.add("mostrar");
                    }, 50);

                } else {

                    projeto.classList.remove("mostrar");
                    projeto.style.display = "none";

                }

            });

        });

    });

    /* =====================================================
       ANIMAÇÃO DOS ELEMENTOS AO ENTRAR NA TELA
       ===================================================== */

    const elementosAnimados = document.querySelectorAll(
        ".reveal, .animar, .projeto-card, .servico-card, .sobre-content, .contato-container"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entradas, observador) => {

                entradas.forEach(entrada => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("visivel");

                        observador.unobserve(entrada.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        elementosAnimados.forEach(elemento => {
            observer.observe(elemento);
        });

    } else {

        elementosAnimados.forEach(elemento => {
            elemento.classList.add("visivel");
        });

    }

    /* =====================================================
       EFEITO DE MOVIMENTO DO MOUSE
       ===================================================== */

    const elementosMovimento = document.querySelectorAll(
        ".hero-card, .hero-logo, .logo-destaque, .elemento-flutuante"
    );

    document.addEventListener("mousemove", event => {

        const mouseX =
            (event.clientX / window.innerWidth - 0.5);

        const mouseY =
            (event.clientY / window.innerHeight - 0.5);

        elementosMovimento.forEach((elemento, index) => {

            const intensidade = 8 + (index * 2);

            elemento.style.transform =
                `translate(${mouseX * intensidade}px, ${mouseY * intensidade}px)`;

        });

    });

    /* =====================================================
       EFEITO DE SCROLL NO HEADER
       ===================================================== */

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }

    /* =====================================================
       ANO AUTOMÁTICO NO RODAPÉ
       ===================================================== */

    const ano = document.querySelector("#ano");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

    /* =====================================================
       LOG NO CONSOLE
       ===================================================== */

    console.log("RIROPSD Portfolio carregado.");
    console.log("WhatsApp:", numeroWhatsApp);
    console.log("E-mail:", seuEmail);

});
