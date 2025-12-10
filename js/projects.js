// Projects data
const projetosData = {
  1: {
    title: "Bate Ponto Motorista",
    description: "Desenvolvi uma plataforma web completa para controle de ponto de motoristas de caminhão, utilizando Vue.js no frontend e Ruby on Rails no backend. O sistema permite que os motoristas registrem suas jornadas de trabalho em tempo real, com geolocalização e validação de horários. Implementei uma API RESTful robusta com Rails, garantindo segurança e performance nas requisições. No frontend, criei uma interface intuitiva e responsiva com Vue.js, proporcionando uma experiência fluida mesmo em dispositivos móveis. O banco de dados MySQL foi estruturado para suportar grandes volumes de registros e consultas complexas relacionadas a jornadas de trabalho. O projeto inclui funcionalidades como relatórios gerenciais, validação de conformidade com a legislação trabalhista e integração com sistemas de GPS.",
    image: "images/bate_ponto_motorista.png",
    technologies: ["Vue.js", "Ruby on Rails", "MySQL"],
    links: {}
  },
  2: {
    title: "Caveo",
    description: "Desenvolvi uma plataforma financeira completa voltada para contabilidade médica, incluindo aplicativo mobile e aplicação web. A solução permite que médicos gerenciem suas finanças de forma integrada, com funcionalidades como controle de saldo em conta, emissão de notas fiscais, agendamento de pagamento de tributos e gestão de plantões. No backend, implementei uma API RESTful robusta utilizando Node.js e Express, garantindo alta performance e escalabilidade. O banco de dados MySQL foi estruturado para suportar transações financeiras complexas e relatórios contábeis detalhados. No frontend, utilizei JavaScript, jQuery e Bootstrap para criar uma interface responsiva e intuitiva, tanto para web quanto para mobile. O sistema inclui integração com sistemas de pagamento PIX, automação de pagamentos de tributos e geração de relatórios financeiros personalizados para o segmento médico.",
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
    description: "Desenvolvi uma plataforma completa de centralização de canais de atendimento ao cliente, permitindo que empresas gerenciem múltiplos canais de comunicação (WhatsApp, Instagram, Email, entre outros) em um único lugar. A solução elimina a necessidade de acessar cada canal separadamente, otimizando o tempo de resposta e melhorando a experiência do atendimento. No frontend, implementei uma interface moderna e intuitiva utilizando Vue.js, com componentes reutilizáveis e uma arquitetura escalável. O backend foi desenvolvido com Ruby on Rails, criando uma API RESTful robusta que integra com as APIs de diferentes plataformas de comunicação. O banco de dados MySQL foi estruturado para suportar grandes volumes de mensagens e conversas, com otimizações para consultas rápidas e eficientes. O sistema inclui funcionalidades como histórico de conversas, tags para organização, transferência de atendimento entre agentes, métricas de desempenho e notificações em tempo real.",
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
    description: "Desenvolvi uma plataforma web completa para gestão de cirurgias em clínicas médicas, permitindo que equipes médicas gerenciem todo o processo cirúrgico dos pacientes de forma organizada e eficiente. No frontend, implementei uma interface moderna e intuitiva utilizando React, com componentes reutilizáveis e uma experiência de usuário otimizada para profissionais da saúde. O backend foi desenvolvido com Python, criando uma API robusta que gerencia todo o fluxo de dados relacionados a cirurgias, pacientes, médicos e agendamentos. O banco de dados MySQL foi estruturado para suportar informações complexas do setor médico, incluindo histórico de cirurgias, prontuários, materiais cirúrgicos e recursos hospitalares. O sistema inclui funcionalidades como agendamento de cirurgias, gestão de salas cirúrgicas, controle de materiais e equipamentos, histórico completo de procedimentos, relatórios médicos e integração com sistemas hospitalares.",
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
  if (modalDescription) modalDescription.textContent = projectData.description;

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