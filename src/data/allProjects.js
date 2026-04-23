import html from "@/assets/icons/html5.svg";
import css from "@/assets/icons/css3.svg";
import js from "@/assets/icons/js.svg";
import react from "@/assets/icons/react.svg";
import vite from "@/assets/icons/vite.svg";
import vercel from "@/assets/icons/vercel.svg";

import projeto1 from "@/assets/images/allprojeto1.png";
import projeto2 from "@/assets/images/allprojeto2.png";
import projeto3 from "@/assets/images/allprojeto3.png";
import projeto4 from "@/assets/images/allprojeto4.png";


export const allProjects = [
	{
		id: 1,
		title: "Minisystem",
		date: "30 de Outubro de 2025",

		shortDescription: "Pequenos sistemas pra teste de lógica",

		fullDescription: `
    O MiniSystems é um conjunto de pequenos sistemas desenvolvidos
    para treinar lógica de programação, estrutura de dados
    e organização de código através de aplicações executadas
    diretamente no terminal.

    Os sistemas foram construídos com foco em clareza de código,
    boas práticas de programação e evolução gradual da lógica.
      
    Funcionalidades atuais:
    - caixa-eletronico.js
    - carrinho-compras.js
    - gerador-relatorios.js
    - jogo-adivinhacao.js
    - simulador-investimento.js
    - sistema-notaSchool.js
      
    Objetivo do projeto:
    - Treinar lógica de programação
    - Praticar manipulação de dados
    - Simular pequenos sistemas reais
    - Melhorar organização de código
    `,

		video: [projeto1],

		images: [projeto1],

		techs: [js],

		liveUrl: "",
		githubUrl: "https://github.com/joaoemanuels/minisystem",
	},
	{
		id: 2,
		title: "Fokus",
		date: "5 de Dezembro de 2025",

		shortDescription:
			"Inspirado em técnicas de produtividade como o método Pomodoro.",

		fullDescription: `
    O Fokus é uma aplicação web desenvolvida para ajudar usuários
    a manterem o foco e a organização durante atividades e estudos.

    O projeto combina um sistema de cronômetro com uma lista
    de tarefas (to-do list), permitindo que o usuário gerencie
    seu tempo e acompanhe suas atividades de forma simples
    e produtiva.

    Funcionalidades atuais:
    - Sistema de cronômetro para controle de tempo
    - Lista de tarefas (to-do) para organização de atividades
    - Adição e remoção de tarefas
    - Interface simples e focada em produtividade

    Objetivo do projeto:
    - Praticar desenvolvimento de aplicações interativas
    - Trabalhar manipulação de estado e eventos
    - Simular ferramentas reais de produtividade
    - Melhorar organização e estrutura de código,
    `,

		video: "https://www.youtube.com/embed/Rhs0iP7Ogng",

		images: [projeto2],

		techs: [html, css, js],

		liveUrl: "https://fokus-base.vercel.app/",
		githubUrl: "https://github.com/joaoemanuels/Fokus-projeto-base",
	},
	{
		id: 3,
		title: "Memoteca",
		date: "26 de Dezembro de 2025",

		shortDescription: "projeto focado em treinar logica do CRUD",

		fullDescription: `
    A Memoteca é uma aplicação web desenvolvida para permitir que
    usuários registrem, organizem e gerenciem seus pensamentos
    de forma simples e prática.

    O projeto utiliza um sistema de cards para armazenar ideias,
    frases ou reflexões, possibilitando ao usuário visualizar,
    editar ou remover seus registros sempre que necessário.

    Funcionalidades atuais:
    - Cadastro de pensamentos em formato de cards
    - Visualização de todos os pensamentos salvos
    - Edição de pensamentos existentes
    - Exclusão de pensamentos
    - Operações completas de CRUD (Create, Read, Update, Delete)

    Objetivo do projeto:
    - Praticar a construção de aplicações com operações CRUD
    - Trabalhar integração com API para manipulação de dados
    - Desenvolver lógica de manipulação de eventos e estado
    - Melhorar organização e estruturação de código no front-end
    `,

		video: "https://www.youtube.com/embed/3rnIUzGt8tY",

		images: [projeto3],

		techs: [html, css, js],

		liveUrl: "https://memoteca-steel.vercel.app/",
		githubUrl: "https://github.com/joaoemanuels/memoteca",
	},
	{
		id: 4,
		title: "Eventify",
		date: "16 de Janeiro de 2026",

		shortDescription:
			"projeto focado em treinar o uso do useState e renderização",

		fullDescription: `
    O Eventify é uma aplicação web desenvolvida para permitir que
    usuários criem e organizem eventos de forma rápida e intuitiva.

    O projeto funciona através de um formulário onde o usuário
    preenche informações do evento, como nome, data, local e descrição.
    Após o envio, o evento é automaticamente adicionado e renderizado
    na interface em formato de card, permitindo uma visualização
    clara dos eventos cadastrados.

    Funcionalidades atuais:
    - Cadastro de eventos através de formulário
    - Renderização automática dos eventos na interface
    - Exibição dos eventos em formato de cards
    - Atualização dinâmica da lista de eventos
    - Interface simples e focada em organização

    Objetivo do projeto:
    - Praticar manipulação do DOM com JavaScript
    - Trabalhar com formulários e eventos de interface
    - Desenvolver renderização dinâmica de elementos
    - Melhorar organização e estruturação de código no front-end
    `,

		video: "https://www.youtube.com/embed/FP32v_dkkOQ",

		images: [projeto4],

		techs: [react, vite, js],

		liveUrl: "https://eventify-virid.vercel.app/",
		githubUrl: "https://github.com/joaoemanuels/Eventify",
	},
	{
		id: 5,
		title: "Checklist",
		date: "11 de Fevereiro de 2026",

		shortDescription: "Sistema de controle financeiro.",

		fullDescription: `
        O Checklist é um sistema de organização de estudos
        desenvolvido *para estudo* com foco em ajudar usuários a planejarem,
        acompanharem e gerenciarem suas tarefas de estudo.
  
        O projeto foi construído para teste de lógica, com intuito de foco em produtividade,
        experiência do usuário e organização de rotinas,
        utilizando React.
  
        Funcionalidades:
        - Criação e gerenciamento de tarefas de estudo
        - Marcação de tarefas concluídas
        - Organização por prioridades
        - Interface simples e intuitiva
      `,

		video: "https://www.youtube.com/embed/1sRwpb4ShA4",

		images: [projeto3],

		techs: [html, css, js, vercel],

		liveUrl: "https://checklist-ruddy-six.vercel.app/",
		githubUrl: "https://github.com/joaoemanuels/checklist",
	},
	{
		id: 6,
		title: "Em breve...",
		date: "",

		shortDescription: "",

		video: "",

		images: [],

		techs: [],

		liveUrl: "",
		githubUrl: "",
	},
];
