// lib/resumeData.ts
// SOURCE OF TRUTH — Keep public portfolio claims accurate and interview-defensible.

export const RESUME_DATA = {
  name: "Praddyumn Wadekar",
  title: "Python Backend & Automation Engineer",
  location: "Pune, India",
  email: "wadekarpraddyumn1@gmail.com",
  github: "https://github.com/praddyumnwadekar",
  linkedin: "https://www.linkedin.com/in/praddyumnwadekar/",
  resumeUrl: "/praddyumn-wadekar-resume.pdf",

  summary:
    "Python Developer with 5+ years of experience designing scalable Python applications, automation frameworks, and software validation solutions at Espressif Systems. Experienced in OOP, Git, CI/CD, debugging, and building Django REST APIs and data-driven systems.",

  heroHeadline: "Engineering reliable Python systems at scale.",
  heroBadge: "PYTHON · AUTOMATION · BACKEND · CI/CD",
  heroSub:
    "I build robust backend applications with Django/DRF and production automation frameworks at Espressif Systems — driving Bluetooth validation coverage to 95%+ and reducing active debugging effort by 30%.",

  impactMetrics: [
    {
      value: "95",
      suffix: "%+",
      label: "Bluetooth Test Coverage",
      description: "Expanded through reusable Python automation across regression, stress, interoperability and performance validation suites.",
    },
    {
      value: "30",
      suffix: "%",
      label: "Less Debugging Effort",
      description: "Automated log-analysis tooling reduced active manual triage and accelerated root-cause isolation.",
    },
    {
      value: "5",
      suffix: "+yr",
      label: "Production Python",
      description: "Production engineering across automation, validation, backend APIs and data-driven systems.",
    },
    {
      value: "3",
      suffix: "",
      label: "Engineering Focus Areas",
      description: "Automation infrastructure, Django backend systems, and reliability-oriented tooling.",
    },
  ],

  experience: [
    {
      role: "Python Automation Developer",
      company: "Espressif Systems",
      period: "Jul 2021 – Present",
      location: "Pune, India",
      overview:
        "Production Python engineering across test automation, reusable OOP libraries, software validation and log-analysis tooling for Wi-Fi and Bluetooth products. Scope grew from individual automation work toward reusable framework and tooling ownership.",
      progression: [
        "Built and maintained production-grade Python automation for hardware-adjacent software validation.",
        "Expanded from test implementation into reusable libraries, automation architecture and debugging tooling.",
        "Worked across validation workflows, CI/CD execution and cross-functional debugging without exposing proprietary implementation details.",
      ],
      architecture: [
        "Reusable OOP components keep common test behavior centralized and reduce duplication across suites.",
        "Test suites cover regression, stress, interoperability and performance scenarios for Bluetooth validation.",
        "Log-analysis tooling parses and filters large execution outputs to surface runtime anomalies faster.",
        "Automation is integrated into CI/CD workflows for repeatable release and regression validation.",
      ],
      challenges: [
        {
          solution:
            "Engineered scalable Python automation frameworks with reusable OOP libraries covering regression, stress, interoperability, and performance test suites for Bluetooth protocol validation.",
          impact: "Expanded Bluetooth validation test coverage to 95%+",
        },
        {
          solution:
            "Architected specialized Python log-analysis tools to automatically parse, filter, and isolate runtime anomalies from gigabytes of execution output — replacing hours of manual triage.",
          impact: "Decreased active debugging effort by 30% across engineering teams",
        },
      ],
      technologies: [
        "Python", "OOP", "Git", "Jenkins", "GitLab CI", "JIRA", "Linux",
        "Regression Testing", "Stress Testing", "Interoperability Testing", "Log Analysis",
      ],
    },
  ],

  projects: [
    {
      id: "shipshop",
      title: "ShipShop",
      subtitle: "Full-Stack Django & DRF E-Commerce Engine",
      featured: true,
      category: "FULL-STACK / BACKEND",
      description:
        "A modular e-commerce platform built with Python, Django, and Django REST Framework — featuring catalog discovery, variation-aware carts, custom authentication, order management, reviews, and PayPal checkout.",
      problem:
        "An e-commerce application needs reliable cart and order state, secure user ownership, predictable payment handling, and database access that remains maintainable as features grow.",
      solution:
        "Designed feature-oriented Django apps around MVT, relational models and ORM queries; implemented authentication and ownership checks, cart/order flows, product variations, and PayPal REST API integration.",
      impact:
        "Designed ShipShop to model a reliable end-to-end e-commerce experience, using secure authentication, user-scoped cart/order operations, product variations, and PayPal integration to reduce transaction risk and provide a foundation that can scale with future customer and catalog growth.",
      architecture: [
        "Backend: Django & Django REST Framework",
        "Data: MySQL with relational models and Django ORM",
        "Commerce: catalog, variations, cart, orders, reviews and checkout",
        "Payments: PayPal REST API integration with payment/order flow handling",
        "Security: authenticated access, user ownership checks and role-aware behavior",
      ],
      engineeringDecisions: [
        "User-scoped authorization for cart and order operations",
        "Variation-aware cart and inventory handling",
        "PayPal REST API integration",
        "Django ORM with MySQL persistence",
        "Security-focused testing for authorization and cart operations",
      ],
      technologies: ["Python", "Django", "DRF", "MySQL", "Django ORM", "REST APIs", "PayPal API", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/praddyumnwadekar/shipshop",
      confidential: false,
    },
    {
      id: "automation-framework",
      title: "Python Validation Framework",
      subtitle: "Professional Engineering Case Study · Proprietary Details Omitted",
      featured: false,
      category: "AUTOMATION / RELIABILITY",
      description:
        "A high-level case study of the reusable Python automation and log-analysis work used for production software validation at Espressif Systems. Proprietary implementation details are intentionally omitted.",
      problem:
        "Hardware-adjacent validation becomes expensive when test logic is duplicated, new scenarios require large changes, and engineers manually inspect large volumes of execution output.",
      solution:
        "Built reusable OOP automation components and validation suites, then complemented them with automated log parsing and filtering to accelerate failure triage and support repeatable CI/CD execution.",
      impact: "95%+ Bluetooth validation coverage · 30% less active debugging effort",
      architecture: [
        "Reusable Python/OOP layer for shared test behavior",
        "Protocol-focused regression, stress, interoperability and performance suites",
        "Automated log parsing and anomaly filtering",
        "CI/CD execution for repeatable validation workflows",
      ],
      technologies: ["Python", "OOP", "Automation", "CI/CD", "Linux", "Bluetooth Validation", "Log Analysis"],
      engineeringDecisions: [],
      githubUrl: "",
      confidential: true,
    },
    {
      id: "speech-emotion",
      title: "Speech Emotion Recognition",
      subtitle: "Earlier ML Project · TensorFlow / CNN",
      featured: false,
      category: "EARLIER WORK / MACHINE LEARNING",
      description:
        "An earlier academic-style CNN pipeline trained on 12,000+ speech samples to classify acoustic patterns into target emotional states, evaluated with standard classification diagnostics.",
      problem: "Extracting useful acoustic features and classifying speech samples across varied audio inputs.",
      solution: "Trained a multi-layer CNN architecture using TensorFlow and evaluated model behavior with Precision, Recall, F1-score and Confusion Matrix diagnostics.",
      impact: "12,000+ speech samples processed",
      technologies: ["Python", "TensorFlow", "CNN", "Machine Learning", "Data Processing"],
      engineeringDecisions: [],
      confidential: false,
      githubUrl: "https://github.com/praddyumnwadekar/SpeechEmotionRecognition_main",
    },
  ],

  skillCategories: [
    {
      category: "Backend & Systems",
      skills: ["Python", "Django", "Django REST Framework", "Django ORM", "REST APIs", "Authentication", "Payment Integration"],
    },
    {
      category: "Automation & QA Engineering",
      skills: ["Python Automation", "Regression Testing", "Stress Testing", "Interoperability Testing", "Performance Testing", "Log Analysis Tools", "Bluetooth Validation"],
    },
    {
      category: "Databases & Storage",
      skills: ["MySQL", "SQLite", "Relational Schema Design", "Query Optimization"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "Jenkins", "GitLab CI", "CI/CD", "Linux", "Postman", "OOP", "Data Structures", "Debugging"],
    },
    {
      category: "Machine Learning & Frontend",
      skills: ["TensorFlow", "CNN", "JavaScript", "HTML/CSS", "Bootstrap"],
    },
  ],

  engineeringPillars: [
    {
      n: "01",
      title: "Design for Reuse",
      desc: "I prefer clear abstractions and reusable components over repeated test or application logic. The goal is to make the next feature cheaper to add than the last one.",
      metric: "OOP · Modular Systems",
    },
    {
      n: "02",
      title: "Automate the Feedback Loop",
      desc: "When engineers repeatedly perform the same inspection or triage step, I look for a reliable way to turn it into tooling — especially around logs, validation and regression workflows.",
      metric: "−30% Debugging Effort",
    },
    {
      n: "03",
      title: "Make Failure Observable",
      desc: "Reliable systems need useful failure signals. I focus on predictable validation, actionable diagnostics, explicit ownership boundaries and backend behavior that is easy to test and debug.",
      metric: "Reliability First",
    },
  ],

  education: {
    degree: "B.E. in Computer Engineering",
    institution: "MES Wadia College of Engineering",
    period: "2018 – 2021",
    grade: "CGPA: 8.83 / 10",
  },

  certifications: [
    { name: "Python (Basic) & C++ (Basic)", issuer: "HackerRank" },
    { name: "5-Star Python & Problem Solving", issuer: "HackerRank" },
    { name: "SQL Database Administration & Query Skills", issuer: "Udemy" },
    { name: "IBM Data Science Professional", issuer: "Coursera" },
    { name: "Python for Machine Learning & ML Foundations", issuer: "Great Learning" },
    { name: "100+ Data Structures & Algorithms Solved", issuer: "LeetCode" },
  ],
};
