import cert1 from '../assets/certificates/cert-1.png';
import cert2 from '../assets/certificates/cert-2.png';
import cert3 from '../assets/certificates/cert-3.png';
import cert4 from '../assets/certificates/cert-4.png';
import cert5 from '../assets/certificates/cert-5.png';
import cert6 from '../assets/certificates/cert-6.png';
import cert7 from '../assets/certificates/cert-7.png';

export const certificatesData = [
  {
    id: 1,
    title: "Applied AI & Machine Learning with Real-World Applications",
    issuer: "KL University & Sense Semiconductor",
    year: "2026",
    image: cert1,
    category: ["aiml"],
    badgeIcon: "FaMicrochip",
    badgeLabel: "AI / ML",
    tags: [
      { label: "AI & Machine Learning", type: "aiml" }
    ]
  },
  {
    id: 2,
    title: "Artificial Intelligence and Machine Learning Using Python",
    issuer: "Taras System & Solutions",
    year: "2026",
    image: cert2,
    category: ["aiml", "python"],
    badgeIcon: "FaRobot",
    badgeLabel: "Python AI",
    tags: [
      { label: "AI & Machine Learning", type: "aiml" },
      { label: "Python", type: "python" }
    ]
  },
  {
    id: 3,
    title: "MATLAB Signals Certificate",
    issuer: "MathWorks / Academic Training",
    year: "2025",
    image: cert3,
    category: ["matlab"],
    badgeIcon: "FaWaveSquare",
    badgeLabel: "Signals",
    tags: [
      { label: "MATLAB", type: "matlab" }
    ]
  },
  {
    id: 4,
    title: "NPTEL Certificate",
    issuer: "NPTEL / IIT Ministry of Education",
    year: "2025",
    image: cert4,
    category: ["nptel"],
    badgeIcon: "FaAward",
    badgeLabel: "NPTEL IIT",
    tags: [
      { label: "NPTEL", type: "nptel" }
    ]
  },
  {
    id: 5,
    title: "Programming for Everybody",
    issuer: "Coursera – Univ. of Michigan",
    year: "2025",
    image: cert5,
    category: ["python", "coursera"],
    badgeIcon: "FaPython",
    badgeLabel: "Python",
    tags: [
      { label: "Python", type: "python" },
      { label: "Coursera", type: "coursera" }
    ]
  },
  {
    id: 6,
    title: "Python Data Structures",
    issuer: "Coursera – Univ. of Michigan",
    year: "2025",
    image: cert6,
    category: ["python", "coursera"],
    badgeIcon: "FaDatabase",
    badgeLabel: "Data Structures",
    tags: [
      { label: "Python", type: "python" },
      { label: "Coursera", type: "coursera" }
    ]
  },
  {
    id: 7,
    title: "Using Python to Access Web Data",
    issuer: "Coursera – Univ. of Michigan",
    year: "2025",
    image: cert7,
    category: ["python", "coursera"],
    badgeIcon: "FaGlobe",
    badgeLabel: "Web Data",
    tags: [
      { label: "Python", type: "python" },
      { label: "Coursera", type: "coursera" }
    ]
  }
];
