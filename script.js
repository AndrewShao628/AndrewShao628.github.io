// script.js

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Skill detail data — click an icon in the skills wall to see specifics
const skillData = {
  cpp: {
    title: 'C++',
    bullets: [
      'Debugged concurrency issues in C/C++ services inside the Logix Designer enterprise codebase during my internship at Rockwell Automation.',
      'When working on the FactoryTalk Echo SDK sample projects, I used C++ to write unit and integration tests integrated into a Jenkins CI/CD pipeline to improve release confidence.',
      'Engineered a high-throughput, asynchronous gRPC and Protobuf telemetry pipeline in C++ during my internship at Sigwise, streaming real-time application service metrics and reducing monitoring collection latency from 200ms to 130ms.',
      'Developed a document processing backend microservice in C++ with PostgreSQL during my internship at Hyland Software, using indexing to reduce document ingestion latency by 30% and enable sub-second search retrieval.',
      'As a student at the University of Michigan, the majority of my projects were done in C++. Used in classes such as Operating Systems, Data Structures and Algorithms, and Applied Parallel Programming with GPUs.'
    ]
  },
  c: {
    title: 'C',
    bullets: [
      'Debugged low-level concurrency issues in C inside the Logix Designer enterprise codebase during my internship at Rockwell Automation.',
      'Built a full LC-2K computer architecture toolchain in C for EECS 370, including an assembler, a linker, and a pipelined simulator with cache modeling and hazard detection/forwarding.',
      'Designed and implemented a custom CPU in C as my EECS 370 final project, extending the LC-2K architecture with additional functionality.'
    ]
  },
  java: {
    title: 'Java',
    bullets: [
      'Built an Android motion-detection security camera app in Java as part of a Sigwise software internship, using OpenCV to trigger recordings based on intensity thresholds.',
      'Integrated a JavaMail/SMTP-based notification pipeline into the app to automatically deliver snapshots and clips via email.',
      'In my MapReduce Framework + Search Engine project, I built a Spring Boot REST API to expose the search engine\'s tf-idf and PageRank rankings to a ReactJS frontend, enabling users to query the inverted index and retrieve ranked search results.',
    ]
  },
  go: {
    title: 'Go',
    bullets: [
      'Designed a resilient, horizontally scalable distributed key-value store in Go using Paxos consensus and a sharded architecture across 12 shards and 30+ nodes, ensuring linearizable consistency at 15,000 ops/sec with live shard migration.',
      'Built a fault-tolerant distributed job scheduler in Go, using gRPC for inter-node communication, Raft-backed consensus for scheduler state, and bin-packing for CPU/memory-aware job allocation.',
      'Developed a full-stack movie streaming platform with a Go/Gin backend for S-Watch, sas well as erving a self-trained ALS matrix factorization recommendation engine per-request with a 0.72 hit-rate at 10.',
    ]
  },
  python: {
    title: 'Python',
    bullets: [
      'In my internship with Rockwell Automation, I built an AI agent with LangChain and FastAPI that analyzes 2M+ CI/CD logs to auto-detect failures, reducing manual review time by 85%.',
      'Also at Rockwell, I wrote a Python automation script integrating the Black Duck API with Jira to auto-generate security tickets from vulnerability scans, which was integrated into the Jenkins CI/CD pipeline.',
      'Implemented a MapReduce-based search engine backend with an inverted index and tf-idf ranking for parallelized queries.'
    ]
  },
  csharp: {
    title: 'C#',
    bullets: [
      'During my internship at Rockwell Automation, I used C# and .NET to develop 8 sample projects for the FactoryTalk Echo SDK enabling controller automation and co-simulation.',
      "Also at Rockwell, I used C# to write unit and integration tests for these sample projects that were integrated into a Jenkins CI/CD pipeline to improve release confidence."
    ]
  },
  javascript: {
    title: 'JavaScript',
    bullets: [
      'As a student computer consultant for the University of Michigan, I built a Chrome browser extension in Javascript that restructured helpdesk ticket data into a condensed dashboard and automated repetitive workflow actions using custom macros, greatly reducing ticket triage time for 100+ support agents.',
      'Built the scroll animations, navbar behavior, and interactive elements on this personal portfolio site.',
      'Used JavaScript across full-stack projects to wire up frontend interactivity alongside React.'
    ]
  },
  react: {
    title: 'React',
    bullets: [
      'Built the frontend for S-Watch, an AI-powered movie streaming platform with personalized recommendations.',
      'In my class EECS 485, Web Systems, I built a client-side Instagram clone feed in React, using the Fetch API to consume a REST backend and implementing infinite scroll, real-time like/unlike, and comment add/delete without page reloads.'
    ]
  },
  bash: {
    title: 'Bash',
    bullets: [
      'Built custom log-parsing Bash scripts and Zabbix monitoring dashboards to track system health and network performance across 4 campus computing sites as a Student Computer Consultant, reducing network troubleshooting time by 30%.'
    ]
  },
  html: {
    title: 'HTML5',
    bullets: [
      'In my project S-Watch, I structured the markup for the React frontend with semantic HTML to support a responsive movie streaming interface.',
      'Structured this personal portfolio site and multiple dashboard front-ends with semantic HTML.',
      'In my class project, I built a Jinja2-based HTML templating system for an Instagram clone in EECS 485, structuring semantic markup for a multi-page static site.'
    ]
  },
  css: {
    title: 'CSS3',
    bullets: [
      'In my project S-Watch, I styled S-Watch\'s React frontend with CSS to create a responsive UI for browsing and streaming movies.',
      'I used CSS to style this personal portfolio site, including custom animations, gradients, and responsive layouts.',
      'In my class project, I styled the Instagram clone UI for EECS 485 with CSS to match the original app\'s layout and responsive design.'
    ]
  },
  mongodb: {
    title: 'MongoDB',
    bullets: [
      'For my personal project, I used MongoDB as the database layer for S-Watch, an AI-powered movie streaming platform built with React and Go.'
    ]
  },
  docker: {
    title: 'Docker',
    bullets: [
      'During my internship at Sigwise, I worked with Docker to set up containerized deployments for backend alert services.'
    ]
  },
  kubernetes: {
    title: 'Kubernetes',
    bullets: [
      'During my internship at Sigwise, I worked with Kubernetes for cluster management and scaling, cutting environment setup time from 2 hours to under 15 minutes and streamlining testing across the team.'
    ]
  },
  kafka: {
    title: 'Apache Kafka',
    bullets: [
      'Built an asynchronous telemetry data pipeline at Rockwell Automation using Kafka for high-throughput data streaming.'
    ]
  },
  fastapi: {
    title: 'FastAPI',
    bullets: [
      'Built an AI agent with LangChain and FastAPI that analyzes 2M+ CI/CD logs to auto-detect failures, reducing manual review time by 85%.'
    ]
  },
  gcp: {
    title: 'Google Cloud',
    bullets: [
      'Integrated Google Cloud Storage into an Android backend video storage service at Sigwise for low-latency video playback from the camera roll.',
      'Deployed the S-Watch backend to GCP Cloud Run, pairing it with MongoDB Atlas for scalable data storage and a Vercel-hosted React frontend to ensure high availability and seamless media playback.'
    ]
  },
  aws: {
    title: 'AWS',
    bullets: [
      'For my class EECS 485, Web Systems, I deployed a full-stack Instagram clone (Flask backend + React frontend) to an AWS EC2 instance, configuring the server to serve the production JavaScript bundle and verifying the live deployment via HTTP request testing.'
    ]
  },
  android: {
    title: 'Android',
    bullets: [
      'Interned at Sigwise developing a motion-detection Android security camera app using OpenCV, triggering video capture with intensity-based recording thresholds, and implemented a JavaMail/SMTP notification system to deliver snapshots and clips via email.'
    ]
  },
  opencv: {
    title: 'OpenCV',
    bullets: [
      'Built an Android motion-detection security camera app in Java as part of a Sigwise software internship, using OpenCV to trigger recordings based on intensity thresholds.'
    ]
  },
  redis: {
    title: 'Redis',
    bullets: [
      'In my personal project, Real-Time Language Vocabulary Review Scheduler, I used Redis to serve scheduling decisions from a Half-Life Regression model via a low-latency, containerized prediction API, using asynchronous batching to stay responsive under load spikes.'
    ]
  },
  git: {
    title: 'Git',
    bullets: [
      'At CoreLogic, I utilized Git for version control, employing branching strategies and pull request workflows to facilitate collaboration and ensure seamless code integration.',
      'Used Git for version control across every project on this site, from solo work to class project collaboration to internship codebases.',
    ]
  },
  github: {
    title: 'GitHub',
    bullets: [
      'I use GitHub to host and maintain project repositories on GitHub, including the source for this portfolio site.',
      'In internship and class projects, I used GitHub to manage team collaboration, ensuring seamless integration of code with multiple contributors.'
    ]
  },
  linux: {
    title: 'Linux',
    bullets: [
      'Developed and debugged distributed systems and backend services in Linux environments throughout coursework and internships.'
    ]
  }
};

const DEFAULT_SKILL = 'cpp';

const skillTitle = document.getElementById('skill-detail-title');
const skillList = document.getElementById('skill-detail-list');

function showSkill(key) {
  const data = skillData[key];
  if (!data) return;

  document.querySelectorAll('.skill-icon').forEach(i => {
    i.classList.toggle('active', i.dataset.skill === key);
  });

  skillTitle.textContent = data.title;
  skillList.innerHTML = data.bullets.map(b => `<li>${b}</li>`).join('');
}

document.querySelectorAll('.skill-icon').forEach(icon => {
  icon.addEventListener('click', () => showSkill(icon.dataset.skill));
});

showSkill(DEFAULT_SKILL);

// Navbar subtly shrinks when scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '0.7rem 3rem';
  } else {
    navbar.style.padding = '1.1rem 3rem';
  }
}, { passive: true });
