// src/data/profile.js
// Your core identity — used by the Hero and About sections.

export const profile = {
  name: "Ravi Yadav",

  // Roles cycle with a typewriter effect in the hero.
  // 👉 Tweak if you'd rather lead with "ML Engineer" etc.
  roles: ["AI Developer", "Data Engineer", "Database Developer"],

  location: "Gurugram, India",  // (you wrote "Gurgaon" — same city; matches your resume as Gurugram)

  // Hero summary — condensed from the longer blurb you sent.
  summary:
    "I build systems that turn messy data into decisions — quietly, efficiently, and at scale. With ~2.5 years across data engineering and applied AI, I design automation-heavy solutions that actually get used.",

  // "PLAYER INFO" dialogue box (About section)
  playerInfo: {
    level: "~3 Years Experience",            // resume shows 2 yrs 11 mos
    favoriteWeapon: "Python",
    currentQuest: "Learning REST APIs & Azure",
  },

  links: {
    email: "raviyadav68358@gmail.com",
    github: "https://github.com/raviyadav44",
    linkedin: "https://www.linkedin.com/in/ravi-yadav-471508193/",
    twitter: "https://x.com/RaviYad94128356",            // 👉 no X link in your resume — add one or leave "" to hide it
    resume: "/resume.pdf",  // 👉 put your PDF at public/resume.pdf (rename it resume.pdf)
  },
};
