// src/data/experience.js
// Each entry is an expandable "quest" card. Pulled from your resume.

export const experience = [
  {
    role: "AI Developer",
    company: "Everest Group",
    location: "Gurugram, India",
    period: "Jul 2025 – Present",
    current: true,
    responsibilities: [
      "Built 5+ custom GPTs and LLM-powered assistants that accelerated internal research, content generation, and operational workflows, cutting manual turnaround on repetitive knowledge tasks by ~40%.",
      "Engineered an automated PowerPoint generation pipeline (Python, Salesforce, Zoho) for client decks, reducing preparation from 2–3 hours to minutes across ~50 decks per month and freeing 100+ hours of analyst effort monthly.",
      "Automated business workflows with Python and FastAPI, including a .msg email-validation service that flags salutation–recipient mismatches and a Playbook generator that cut a 3-day manual process by ~1.5 days per request.",
      "Designed automation flows in n8n (with JavaScript) for Marketo duplicate detection and CRM data synchronization, and built VBA-based Excel diagnostic and benchmarking tools adopted across multiple internal teams.",
      "Building Azure Data Factory CI/CD pipelines (POC) and Excel-to-PostgreSQL ingestion pipelines that standardize 3+ source formats, with reusable PostgreSQL stored procedures running 6+ automated data-quality checks across 3 severity levels.",
    ],
    technologies: ["Python", "FastAPI", "n8n", "Salesforce", "Zoho", "Azure Data Factory", "PostgreSQL", "VBA", "JavaScript"],
  },
  {
    role: "Associate Development Engineer",
    company: "Avizva Solutions Pvt. Ltd.",
    location: "Gurugram, India",
    period: "Jul 2023 – May 2025",
    current: false,
    responsibilities: [
      "Designed 10+ normalized ERDs and revamped indexing strategies and stored procedures, improving data-retrieval speeds by up to 30% and strengthening consistency across reporting dashboards.",
      "Built Python and AWS automation for data purging and archiving (70% less manual effort) and optimized complex MongoDB aggregation queries for Elasticsearch within Agile workflows (Jira, Bitbucket, Confluence).",
    ],
    technologies: ["Python", "AWS", "MongoDB", "Elasticsearch", "SQL", "Jira", "Bitbucket", "Confluence"],
  },
  {
    role: "Machine Learning Intern",
    company: "AIW – Artificially Intelligent Workforce",
    location: "Delhi, India",
    period: "Jan 2023 – Jul 2023",
    current: false,
    responsibilities: [
      "Engineered and deployed ML models, NLP algorithms, OCR, and computer-vision solutions that improved medical-claim processing efficiency by 40% and accuracy by 35%.",
      "Led a cross-functional team of 10–12, defining goals and timelines and enforcing 100% data-privacy and AI compliance while reducing project bottlenecks by 30%.",
    ],
    technologies: ["Machine Learning", "NLP", "OCR", "Computer Vision"],
  },
  {
    role: "Machine Learning Intern",
    company: "Xebia",
    location: "Remote",
    period: "Jul 2022 – Aug 2022",
    current: false,
    responsibilities: [
      "Built and fine-tuned ML classification models (84% accuracy) and integrated transfer-learning models (BERT, RoBERTa), improving text-classification accuracy by 20%.",
    ],
    technologies: ["Machine Learning", "BERT", "RoBERTa", "Transfer Learning"],
  },
];