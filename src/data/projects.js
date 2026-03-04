import react from "@/assets/icons/react.svg";
import sass from "@/assets/icons/scss.svg";
import figma from "@/assets/icons/figma.svg";
import vercel from "@/assets/icons/vercel.svg";

import projeto1 from "@/assets/images/projeto1.png";
import projeto2 from "@/assets/images/projeto2.png";
import projeto2_1 from "@/assets/images/projeto2_1.png";
import projeto2_2 from "@/assets/images/projeto2_2.png";

export const projects = [
  {
    id: 1,
    title: "Agenda Pro",
    date: "10 de Fevereiro de 2026",

    shortDescription: "Sistema de agendamento para personal trainer.",

    fullDescription: `
    O Agenda Pro é um sistema completo de agendamento online
    desenvolvido para personal trainers gerenciarem seus alunos,
    horários e sessões de treino de forma prática e organizada.

    O projeto foi construído com foco em performance, UX
    e arquitetura escalável utilizando React e SCSS.

    Funcionalidades:
    - Página Landing page
    - Agendamento de planos
    - Controle de horários disponíveis
    - Painel administrativo
    - Gestão de alunos
    - Confirmação de agendamento
    - Autenticação segura (admin)
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
    githubUrl: "https://github.com/usuario/moneyflow",
  },
];
