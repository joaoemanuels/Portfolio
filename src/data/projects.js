import react from "@/assets/icons/react.svg";
import html from "@/assets/icons/html5.svg";
import css from "@/assets/icons/css3.svg";
import js from "@/assets/icons/js.svg";
import figma from "@/assets/icons/figma.svg";
import render from "@/assets/icons/render.svg";
import vercel from "@/assets/icons/vercel.svg";
import n8n from "@/assets/icons/n8n.svg";

import projeto1 from "@/assets/images/projeto1.png";
import projeto2 from "@/assets/images/projeto2.png";
import projeto2_1 from "@/assets/images/projeto2_1.png";
import projeto2_2 from "@/assets/images/projeto2_2.png";
import projeto5 from "@/assets/images/projeto5.png";
import projeto4 from "@/assets/images/projeto4.png";
import projeto4_1 from "@/assets/images/projeto4_1.png";
import projeto4_2 from "@/assets/images/projeto4_2.png";
import projeto4_3 from "@/assets/images/projeto4_3.png";

export const projects = [
	{
		id: 1,
		title: "Agenda Pro",
		date: "Em desenvolvimento...",

		shortDescription: "Sistema de agendamento para personal trainer.",

		fullDescription: `
    O Agenda Pro é um sistema completo de agendamento online
    desenvolvido para personal trainers gerenciarem seus alunos,
    horários e sessões de treino de forma prática e organizada.

    O projeto foi construído com foco em performance, UX
    e arquitetura escalável utilizando React.

    Funcionalidades:
    - Página Landing page
    - Agendamento de planos
    - Painel administrativo

    Em breve: 
    - Autenticação segura (admin)
    - Controle de horários disponíveis
    - Gestão de alunos
    - Confirmação de agendamento
    `,

		video: "https://www.youtube.com/embed/LJtXLGRG6Fo",

		images: [projeto2, projeto2_1, projeto2_2],

		techs: [react, figma, vercel, render],

		liveUrl: "https://agendapro.fun",
		githubUrl: "https://github.com/joaoemanuels/AgendaPro",
	},
	{
		id: 2,
		title: "Decisio",
		date: "13 de abril de 2026",

		shortDescription: "Sistema interativo de tomada de decisão.",

		fullDescription: `
      O Decisio é uma aplicação interativa desenvolvida para auxiliar usuários
      na tomada de decisões de forma estruturada e guiada.

      Através de um fluxo dinâmico de perguntas, o sistema analisa as respostas
      do usuário e gera recomendações personalizadas com base em uma lógica definida.

      O projeto foi desenvolvido com foco em prática de lógica de programação,
      componentização e experiência do usuário utilizando React.

      Funcionalidades:
      - Fluxo de perguntas dinâmico
      - Seleção de respostas com feedback visual
      - Barra de progresso do fluxo
      - Geração de resultado baseado nas respostas
      - Interface moderna e responsiva
    `,

		video: "https://www.youtube.com/embed/8ED6CWbucG8",

		images: [projeto4, projeto4_1, projeto4_2, projeto4_3],

		techs: [react, n8n, figma, vercel],

		liveUrl: "https://decisio-ashen.vercel.app/",
		githubUrl: "https://github.com/joaoemanuels/Decisio",
	},
	{
		id: 3,
		title: "MoneyFlow",
		date: "13 de Fevereiro de 2026",

		shortDescription: "Sistema de controle financeiro.",

		fullDescription: `
      O MoneyFlow é um sistema completo de controle financeiro
      desenvolvido para ajudar usuários a organizarem receitas,
      despesas e metas financeiras.

      O projeto foi construído com foco em performance, UX
      e arquitetura escalável utilizando React.
      
      Funcionalidades:
      - Cadastro de transações
      - Filtros por período
      - Dashboard com gráficos
    `,

		video: "https://www.youtube.com/embed/pVWxjhSx_IY",

		images: [projeto1],

		techs: [react, figma, vercel],

		liveUrl: "https://moneyflow.site/",
		githubUrl: "https://github.com/joaoemanuels/MoneyFlow",
	},
	{
		id: 4,
		title: "Lab Hooks",
		date: "em desenvolvimento...",

		shortDescription: "Sistema de uso variado de consumo de API",

		fullDescription: `
    O Lab Hooks é uma aplicação desenvolvida para demonstrar o consumo de APIs
    em um cenário real de gerenciamento de tarefas.
    
    O projeto foi construído com foco em manipulação de dados, controle de estado
    e experiência do usuário, simulando um fluxo completo de criação, leitura,
    atualização e remoção de tarefas (CRUD), utilizando React.
    
    A aplicação consome dados de uma API (mockada ou real) e permite interação
    dinâmica com os dados, refletindo alterações em tempo real.
    
    Funcionalidades:
    - Listagem de tarefas via API
    - Criação de novas tarefas
    - Marcação de tarefas como concluídas
    - Atualização e remoção de tarefas
    - Controle de estado e sincronização com API
    - Tratamento de loading e erros
    `,

		video: "https://www.youtube.com/embed/1sRwpb4ShwA4",

		images: [projeto5],

		techs: [html, css, js, vercel],

		liveUrl: "https://lab-hooks-1mty.vercel.app/",
		githubUrl: "https://github.com/joaoemanuels/lab-hooks",
	},
];
