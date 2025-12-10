// Projects data
const projetosData = {
  1: {
    title: "Bate Ponto Motorista",
    description: `
      Trata-se de uma plataforma web e mobile completa permite que os motoristas registrem suas jornadas de trabalho em tempo real, com geolocalização e validação de horários, utilizando Vue.js na parte administrativa(frontend) e Ruby on Rails na parte do backend.\n
      Atuei nesse projeto no início da minha carreira como desenvolvedor, trabalhando ao lado de profissionais mais experientes que me deram abertura para aprender, errar e evoluir. Tive sempre o suporte necessário para entregar o melhor dentro das minhas capacidades, contribuindo de forma crescente para o produto.`,
    image: "images/bate_ponto_motorista.png",
    technologies: ["Vue.js", "Ruby on Rails", "MySQL"],
    links: {}
  },
  2: {
    title: "Caveo",
    description: `A Caveo é uma plataforma financeira voltada para contabilidade médica, incluindo aplicativo mobile e aplicação web. Desenvoldia a partir de um projeto inicialmente focado na emissão de notas fiscais, seu admin foi inicialmente contruido em Handlebars, Jquery e Bootstrap. A API foi construida em Node.js e Express e um banco MySQL.
    Dentre as funcionalidades, estão Emissão de notas fiscais, Gestão de plantões, Gerenciamento de tributos entre outras.
    
    Atuei ativamente para o crescimento do produto implementando integrações essenciais com gateways de pagamento(Stripe), sistemas de emissão de notas, como a Omie (plataforma de ERP), além de desenvolver integrações diretas com prefeituras de diversas cidades para permitir a consulta e o download automático de notas fiscais. Também participei da implementação de integrações com plataformas de envio de mensagens via WhatsApp, como Z-API e Chatwoot, ampliando as possibilidades de comunicação do sistema.`,
    image: "images/caveo.png",
    modalImage: "images/caveo2.jpeg",
    technologies: ["JavaScript", "Node.js", "MySQL"],
    links: {
      website: "https://caveo.com.br/",
      linkedin: "https://www.linkedin.com/company/caveotecnologia/",
      instagram: "https://www.instagram.com/caveotecnologia/"
    }
  },
  3: {
    title: "Vordesk",
    description: `A Vordesk tem  como objetivo unificar diferentes canais de atendimento ao cliente — como WhatsApp, Instagram, Email e outros — em um único ambiente.Sua interface administrativa foi construída utilizando Vue.js, com componentes reutilizáveis e uma arquitetura escalável. O backend foi desenvolvido em Ruby on Rails, estruturado como uma API RESTful integrada a múltiplas plataformas de comunicação, utilizando MySQL para armazenar e organizar grandes volumes de conversas.
      Entre as funcionalidades, estão histórico completo de mensagens, organização por tags, distribuição e transferência de atendimentos, integração com múltiplos agentes, métricas de desempenho e notificações em tempo real.
      
      Atuei ativamente desenvolvendo integrações essenciais com APIs de canais externos, como WhatsApp e Instagram para que mensagens fossem recebidas e tratadas dentro da plataforma de forma unificada.`,
    image: "images/vordesk.png",
    modalImage: "images/vordesk2.png",
    technologies: ["Vue.js", "Ruby on Rails", "MySQL"],
    links: {
      website: "https://www.vordesk.com.br/",
      linkedin: "https://www.linkedin.com/company/vordeskoficial",
      instagram: "https://www.instagram.com/vordeskoficial/"
    }
  },
  4: {
    title: "Medban",
    description: `A plataforma é uma solução web completa para gestão de cirurgias em clínicas médicas, criada para centralizar e organizar todo o processo cirúrgico de pacientes. Desenvolvida inicialmente com foco no agendamento e controle de cirúrgias, sua interface administrativa foi construída utilizando React. O backend foi implementado em Python, estruturado como uma API robusta responsável por gerenciar dados de cirurgias, pacientes, equipes médicas e recursos hospitalares, utilizando MySQL para armazenar informações complexas do setor.
      Entre as funcionalidades, estão gestao completa da jornada cirúrgica, desde de o agendamento até o pós cirurgico, gestão de materiais, histórico completo de procedimentos, prontuários, controle de equipamentos e geração de relatórios médicos.

      Atuei diretamente desde o início do projeto, focando na estruturação do banco de dados, definição dos fluxos cirúrgicos e construção das funcionalidades essenciais para atender às necessidades reais das clínicas. Trabalhei lado a lado com o cliente para entender demandas, propor soluções e tomar decisões que ajudaram a moldar o produto, garantindo uma base sólida, escalável e alinhada ao dia a dia dos profissionais da saúde.`,
    image: "images/medban.png",
    technologies: ["React", "Python", "MySQL"],
    links: {
      website: "https://medban.com.br/",
      linkedin: "https://www.linkedin.com/company/medban-healthtech/",
    }
  }
};

// Function to create links dynamically
function createProjectLinks(linksContainer, links, isModal = false) {
  if (!linksContainer || !links) return;
  
  linksContainer.innerHTML = '';
  
  const linkConfig = [
    { key: 'website', icon: 'fas fa-globe', iconPath: null, label: 'Website', title: 'Website' },
    { key: 'github', icon: 'fab fa-github', iconPath: 'icons/github.svg', label: 'GitHub', title: 'GitHub' },
    { key: 'linkedin', icon: 'fab fa-linkedin', iconPath: 'icons/linkedin.svg', label: 'LinkedIn', title: 'LinkedIn' },
    { key: 'instagram', icon: 'fab fa-instagram', iconPath: null, label: 'Instagram', title: 'Instagram' }
  ];
  
  linkConfig.forEach(config => {
    if (links[config.key] && links[config.key] !== '#' && links[config.key].trim() !== '') {
      const link = document.createElement('a');
      link.href = links[config.key];
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      if (isModal) {
        link.className = 'modal-link';
        if (config.iconPath) {
          const icon = document.createElement('img');
          icon.src = config.iconPath;
          icon.alt = config.label;
          icon.className = 'modal-link-icon';
          const span = document.createElement('span');
          span.textContent = config.label;
          link.appendChild(icon);
          link.appendChild(span);
        } else {
          const icon = document.createElement('i');
          icon.className = config.icon;
          const span = document.createElement('span');
          span.textContent = config.label;
          link.appendChild(icon);
          link.appendChild(span);
        }
    } else {
        link.className = 'projeto-link';
        link.title = config.title;
        if (config.iconPath) {
          const icon = document.createElement('img');
          icon.src = config.iconPath;
          icon.alt = config.title;
          icon.className = 'projeto-link-icon';
          link.appendChild(icon);
        } else {
          const icon = document.createElement('i');
          icon.className = config.icon;
          link.appendChild(icon);
        }
      }

      linksContainer.appendChild(link);
    }
  });
}

// Modal functionality
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const projetoCards = document.querySelectorAll('.projeto-card');

// Open modal when clicking on project card
projetoCards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.projeto-link')) return;

    const projectId = card.getAttribute('data-project');
    const projectData = projetosData[projectId];

    if (projectData) openModal(projectData);
  });
});

if (modalClose) modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.style.display === 'block') {
    closeModal();
  }
});

function openModal(projectData) {
  if (!modal) return;

  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalTags = document.getElementById('modalTags');
  const modalLinks = document.getElementById('modalLinks');

  // Use modalImage if available, otherwise use image
  const imageToUse = projectData.modalImage || projectData.image;
  if (modalImg) modalImg.src = imageToUse;
  if (modalImg) modalImg.alt = projectData.title;
  if (modalTitle) modalTitle.textContent = projectData.title;
  // Convert \n to <br> for line breaks in description
  if (modalDescription) {
    const descriptionWithBreaks = projectData.description.replace(/\n/g, '<br>');
    modalDescription.innerHTML = descriptionWithBreaks;
  }

  // Add tags in modal
  if (modalTags && projectData.technologies) {
    modalTags.innerHTML = '';
    const techClassMap = {
      'React': 'react',
      'Node.js': 'node',
      'MySQL': 'mysql',
      'Vue.js': 'vue',
      'Firebase': 'firebase',
      'JavaScript': 'js',
      'MongoDB': 'mongodb',
      'CSS3': 'css',
      'HTML5': 'html',
      'Next.js': 'next',
      'Strapi': 'strapi',
      'TypeScript': 'ts',
      'Ruby on Rails': 'ruby',
      'Express': 'express',
      'Bootstrap': 'bootstrap',
      'jQuery': 'jquery',
      'Python': 'python'
    };
    
    projectData.technologies.forEach(tech => {
      const tag = document.createElement('span');
      const techClass = techClassMap[tech] || tech.toLowerCase().replace('.', '').replace(' ', '-');
      tag.className = `tag tag-${techClass}`;
      tag.textContent = tech;
      modalTags.appendChild(tag);
    });
  }

  // Create links dynamically in modal
  if (modalLinks && projectData.links) {
    createProjectLinks(modalLinks, projectData.links, true);
  }

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;

  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Update project card links
projetoCards.forEach(card => {
  const projectId = card.getAttribute('data-project');
  const projectData = projetosData[projectId];

  if (projectData && projectData.links) {
    const linksContainer = card.querySelector('.projeto-links');
    if (linksContainer) {
      createProjectLinks(linksContainer, projectData.links, false);
    }
  }
});