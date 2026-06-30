// src/data/projects.js
// Each project is a "game cartridge" card. Pulled from your resume.

export const projects = [
  {
    title: "HR Policy Chatbot",
    description:
      "RAG-based HR policy chatbot built on an open-source LLM and a Chroma vector database, with a Streamlit UI for self-service policy retrieval and HR escalation — improving answer accuracy while lowering inference cost.",
    stack: ["Python", "LangChain", "RAG", "Chroma", "Streamlit"],
    image: "/images/projects/hr-policy-chatbot.jpg", // 👉 add a screenshot here (optional)
    github: "https://github.com/raviyadav44/gen-ai-chatbot",
    demo: "",       // 👉 add a live demo URL or leave "" to hide the button
    caseStudy: "",
    featured: true,
  },
  {
    title: "Fake News Classifier",
    description:
      "End-to-end NLP classifier with tokenization and lemmatization preprocessing, using GRU/LSTM and word embeddings, deployed via Streamlit for real-time inference.",
    stack: ["Python", "TensorFlow", "GRU/LSTM", "Word Embeddings", "Streamlit"],
    image: "/images/projects/fake-news-classifier.jpg", // 👉 add a screenshot here (optional)
    github: "https://github.com/raviyadav44/Fake-new-classification-a-comparitive-study",
    demo: "",
    caseStudy: "",
    featured: false,
  },
];