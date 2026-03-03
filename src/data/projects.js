import reactIcon from "@/assets/icons/react.svg";
import sass from "@/assets/icons/scss.svg";
import figma from "@/assets/icons/figma.svg";

import projeto1 from "@/assets/images/projeto1.png";
import projeto2 from "@/assets/images/projeto2.png";
import projeto2_1 from "@/assets/images/projeto2_1.png";
import projeto2_2 from "@/assets/images/projeto2_2.png";

export const projects = [
  {
    id: 1,
    title: "MoneyFlow",
    date: "02 de Fevereiro de 2026",

    shortDescription: "Sistema de controle financeiro moderno.",

    fullDescription: `
      O MoneyFlow é um sistema completo de controle financeiro
      desenvolvido para ajudar usuários a organizarem receitas,
      despesas e metas financeiras.

      O projeto foi construído com foco em performance, UX
      e arquitetura escalável utilizando React e SCSS.
      
      Funcionalidades:
      - Cadastro de transações
      - Filtros por período
      - Dashboard com gráficos
      - Autenticação segura
    `,

    video: "https://www.youtube.com/embed/pVWxjhSx_IY",

    images: [projeto1],

    techs: [reactIcon, sass, figma],

    liveUrl: "https://moneyflow.site",
    githubUrl: "https://github.com/joaoemanuels/MoneyFlow",
  },
  {
    id: 2,
    title: "AgendaPro",
    date: "02 de Fevereiro de 2026",

    shortDescription: "Sistema de controle financeiro moderno.",

    fullDescription: `
      O MoneyFlow é um sistema completo de controle financeiro
      desenvolvido para ajudar usuários a organizarem receitas,
      despesas e metas financeiras.

      O projeto foi construído com foco em performance, UX
      e arquitetura escalável utilizando React e SCSS.
      
      Funcionalidades:
      - Cadastro de transações
      - Filtros por período
      - Dashboard com gráficos
      - Autenticação segura
    `,

    video: "https://www.youtube.com/embed/pVWxjhSx_IY",

    images: [projeto2, projeto2_1, projeto2_2],

    techs: [reactIcon, sass, figma],

    liveUrl: "https://agenda-pro-cyan-iota.vercel.app/",
    githubUrl: "https://github.com/usuario/moneyflow",
  },
  {
    id: 3,
    title: "MoneyFlow",
    date: "02 de Fevereiro de 2026",

    shortDescription: "Sistema de controle financeiro moderno.",

    fullDescription: `
      O MoneyFlow é um sistema completo de controle financeiro
      desenvolvido para ajudar usuários a organizarem receitas,
      despesas e metas financeiras.

      O projeto foi construído com foco em performance, UX
      e arquitetura escalável utilizando React e SCSS.
      
      Funcionalidades:
      - Cadastro de transações
      - Filtros por período
      - Dashboard com gráficos
      - Autenticação segura
    `,

    video: "https://www.youtube.com/embed/ALsHGAx28t8",

    images: [projeto1],

    techs: [reactIcon, sass, figma],

    liveUrl: "https://moneyflow.com",
    githubUrl: "https://github.com/usuario/moneyflow",
  },
];
