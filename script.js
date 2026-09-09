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
      'Built interactive dashboards and data visualization modules in C++ for Rockwell Automation\'s FactoryTalk Echo IDE.'
    ]
  },
  c: {
    title: 'C',
    bullets: [
      'Debugged low-level concurrency issues in C inside the Logix Designer enterprise codebase during my internship at Rockwell Automation.'
    ]
  },
  go: {
    title: 'Go',
    bullets: [
      'Built a fault-tolerant distributed job scheduler in Go, using gRPC for inter-node communication, Raft-backed consensus for scheduler state, and bin-packing for CPU/memory-aware job allocation.',
      'Used Go (Gin-Gonic) as the backend framework for S-Watch, an AI-powered movie streaming platform.'
    ]
  },
  python: {
    title: 'Python',
    bullets: [
      'In my internship with Rockwell Automation, I built an AI agent with LangChain and FastAPI that analyzes 2M+ CI/CD logs to auto-detect failures, reducing manual review time by 85%.',
      'Implemented a MapReduce-based search engine backend with an inverted index and tf-idf ranking for parallelized queries.',
      'Wrote a Python automation script integrating the Black Duck API with Jira to auto-generate security tickets from vulnerability scans.'
    ]
  },
  csharp: {
    title: 'C#',
    bullets: [
      'Built interactive web dashboards and data visualization modules in C# for Rockwell Automation\'s FactoryTalk Echo IDE, improving usability and performance testing workflows.'
    ]
  },
  java: {
    title: 'Java',
    bullets: [
      'Built an Android motion-detection security camera app in Java as part of a Sigwise software internship, using OpenCV to trigger recordings based on intensity thresholds.',
      'Integrated a JavaMail/SMTP-based notification pipeline into the app to automatically deliver snapshots and clips via email.'
    ]
  },
  javascript: {
    title: 'JavaScript',
    bullets: [
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
      'Structured this personal portfolio site and multiple dashboard front-ends with semantic HTML.'
    ]
  },
  css: {
    title: 'CSS3',
    bullets: [
      'I used CSS to style this personal portfolio site, including custom animations, gradients, and responsive layouts.'
    ]
  },
  mongodb: {
    title: 'MongoDB',
    bullets: [
      'Used MongoDB as the database layer for S-Watch, an AI-powered movie streaming platform built with React and Go.'
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
      'Used Git for version control across every project on this site, from solo work to class project collaboration to internship codebases.'
    ]
  },
  github: {
    title: 'GitHub',
    bullets: [
      'I use GitHub to host and maintain project repositories on GitHub, including the source for this portfolio site.'
    ]
  },
  linux: {
    title: 'Linux',
    bullets: [
      'Developed and debugged distributed systems and backend services in Linux environments throughout coursework and internships.'
    ]
  }
};

const skillTitle = document.getElementById('skill-detail-title');
const skillList = document.getElementById('skill-detail-list');

document.querySelectorAll('.skill-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const key = icon.dataset.skill;
    const data = skillData[key];
    if (!data) return;

    document.querySelectorAll('.skill-icon').forEach(i => i.classList.remove('active'));
    icon.classList.add('active');

    skillTitle.textContent = data.title;
    skillList.innerHTML = data.bullets.map(b => `<li>${b}</li>`).join('');
  });
});

// Navbar subtly shrinks when scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '0.7rem 3rem';
  } else {
    navbar.style.padding = '1.1rem 3rem';
  }
}, { passive: true });
