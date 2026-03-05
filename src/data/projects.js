import react from "@/assets/icons/react.svg";
import html from "@/assets/icons/html5.svg";
import css from "@/assets/icons/css3.svg";
import js from "@/assets/icons/js.svg";
import sass from "@/assets/icons/scss.svg";
import figma from "@/assets/icons/figma.svg";
import vercel from "@/assets/icons/vercel.svg";

import projeto1 from "@/assets/images/projeto1.png";
import projeto2 from "@/assets/images/projeto2.png";
import projeto2_1 from "@/assets/images/projeto2_1.png";
import projeto2_2 from "@/assets/images/projeto2_2.png";
import projeto3 from "@/assets/images/projeto3.png";

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
    - Autenticação segura (admin)

    Em breve: 
    - Controle de horários disponíveis
    - Gestão de alunos
    - Confirmação de agendamento
    `,

		video: "https://www.youtube.com/embed/pVWxjwhSx_IY",

		images: [projeto2, projeto2_1, projeto2_2],

		techs: [react, sass, figma],

		liveUrl: "https://agenda-pro-cyan-iota.vercel.app/",
		githubUrl: "https://github.com/joaoemanuels/AgendaPro",
	},
	{
		id: 2,
		title: "MoneyFlow",
		date: "11 de Fevereiro de 2026",

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

		techs: [react, sass, figma, vercel],

		liveUrl: "https://moneyflow.site/",
		githubUrl: "https://github.com/joaoemanuels/MoneyFlow",
	},
	{
		id: 3,
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
];
