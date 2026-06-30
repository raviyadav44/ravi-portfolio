// src/data/skills.js
// Grouped to match your resume. Items WITH a `level` (1–10) render as XP bars;
// items without render as pills. 👉 Levels are my estimate — tune them.

export const skills = [
  {
    category: "Languages & Databases",
    items: [
      { name: "Python", level: 9 },
      { name: "SQL", level: 9 },
      { name: "PostgreSQL", level: 8 },
      { name: "MongoDB", level: 7 },
      { name: "VBA", level: 6 },
      { name: "C", level: 5 },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "Machine Learning" }, { name: "NLP" }, { name: "Generative AI" },
      { name: "LLMs" }, { name: "RAG" }, { name: "Deep Learning" },
      { name: "OCR" }, { name: "Computer Vision" }, { name: "Transfer Learning (BERT, RoBERTa)" },
    ],
  },
  {
    category: "Automation & Data",
    items: [
      { name: "Workflow Automation" }, { name: "Custom GPTs" }, { name: "FastAPI" },
      { name: "n8n" }, { name: "Azure Data Factory" }, { name: "ETL / Data Pipelines" },
      { name: "Data Migration" }, { name: "Salesforce" }, { name: "PySpark" },
    ],
  },
  {
    category: "Visualization & Frameworks",
    items: [
      { name: "Pandas" }, { name: "Matplotlib" }, { name: "Seaborn" }, { name: "Power BI" },
      { name: "TensorFlow" }, { name: "LangChain" }, { name: "Streamlit" }, { name: "OpenAI" },
    ],
  },
  {
    category: "Platforms & DevOps",
    items: [
      { name: "Git" }, { name: "GitHub" }, { name: "Bitbucket" }, { name: "Jenkins" },
      { name: "Azure" }, { name: "AWS" }, { name: "Linux" }, { name: "Jira" }, { name: "Confluence" },
    ],
  },
];