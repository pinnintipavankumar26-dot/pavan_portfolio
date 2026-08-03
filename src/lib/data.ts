import { EducationItem, SkillCategory, ProjectItem, CertificateItem, ContactInfo } from '@/types';

export const HERO_DATA = {
  greeting: "Hello, I'm",
  name: "Pinninti Pavan Kumar",
  role: "B.Tech ECE Student & Software Developer",
  badge: "ECE & JAVA DEVELOPER",
  shortIntro: "Passionate Electronics & Communication Engineering undergraduate specializing in Java, Python, Artificial Intelligence & Machine Learning, and Verilog/HDL design. Building next-generation tech solutions bridging hardware and software logic.",
  profileImage: "/assets/profile.png",
  resumeUrl: "#contact", // or path to resume
};

export const ABOUT_DATA = {
  aboutMe: [
    "I am a B.Tech student in Electronics and Communication Engineering (ECE) at KL University with a strong interest in software development, Artificial Intelligence, Machine Learning, and Verilog/HDL design. I am passionate about building innovative solutions by combining software and digital hardware technologies.",
    "Currently, I am strengthening my programming skills in Java and Python through hands-on projects, algorithmic problem-solving, and continuous learning. I enjoy integrating digital design concepts with modern AI technologies to develop efficient and intelligent systems."
  ],
  careerObjective: "To leverage my foundation in Electronics Engineering and Software Development (Java, Python, AI/ML) to contribute to cutting-edge technology teams. Aiming to solve complex engineering challenges through clean code, innovative hardware-software integration, and continuous skill refinement."
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech",
    stream: "Electronics & Communication Engineering",
    institution: "KL University",
    years: "2024 – Present",
    gradeLabel: "CGPA",
    gradeValue: "8.3",
    status: "Currently Pursuing",
    description: "Specializing in ECE core subjects, embedded hardware, software logic in Java & Python, and Artificial Intelligence & Machine Learning.",
    icon: "GraduationCap"
  },
  {
    id: "inter",
    degree: "Intermediate (MPC)",
    stream: "Mathematics, Physics & Chemistry",
    institution: "Narayana Jr College",
    years: "2022 – 2024",
    gradeLabel: "Marks",
    gradeValue: "889/1000",
    secondaryGradeLabel: "Percentage",
    secondaryGradeValue: "88.9%",
    description: "Focused on Higher Secondary Education in Mathematics, Physics, and Chemistry, laying analytical foundations for technical & engineering disciplines.",
    icon: "BookOpen"
  },
  {
    id: "ssc",
    degree: "SSC",
    stream: "Secondary School Certificate",
    institution: "Narayana High School",
    years: "Completed: 2022",
    gradeLabel: "Marks",
    gradeValue: "401/500",
    secondaryGradeLabel: "Percentage",
    secondaryGradeValue: "80.2%",
    description: "Successfully completed secondary school education with distinction, building high competency in mathematics, science, and computer basics.",
    icon: "Award"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    skills: [
      {
        name: "Java",
        description: "Core Java, object-oriented programming, data structures, and algorithmic logic.",
        iconName: "Code2",
        level: "85%"
      },
      {
        name: "Python",
        description: "Scripting, data handling, algorithmic automation, and AI/ML model foundations.",
        iconName: "FileCode2",
        level: "80%"
      },
      {
        name: "C Language",
        description: "Structured programming, memory pointers, and low-level algorithmic logic.",
        iconName: "Cpu",
        level: "75%"
      },
      {
        name: "Verilog / HDL",
        description: "Digital circuit modeling, hardware description languages, and logic simulation.",
        iconName: "Binary",
        level: "70%"
      }
    ]
  },
  {
    id: "aiml",
    title: "AI & ML",
    skills: [
      {
        name: "AI & Machine Learning",
        description: "Applied machine learning algorithms, model training, and predictive AI systems.",
        iconName: "Brain",
        level: "75%"
      },
      {
        name: "Data Structures",
        description: "Arrays, lists, stacks, queues, trees, searching, and sorting algorithms.",
        iconName: "Database",
        level: "82%"
      }
    ]
  },
  {
    id: "electronics",
    title: "Electronics",
    skills: [
      {
        name: "Digital Electronics",
        description: "Logic gates, flip-flops, registers, counters, and digital system synthesis.",
        iconName: "CircuitBoard",
        level: "88%"
      },
      {
        name: "Circuit Analysis",
        description: "AC/DC circuit theorems, signal processing, and frequency analysis.",
        iconName: "Zap",
        level: "85%"
      }
    ]
  },
  {
    id: "tools",
    title: "EDA & Tools",
    skills: [
      {
        name: "Siemens EDA & LTspice",
        description: "Schematic capture, analog circuit simulation, and waveform verification.",
        iconName: "Sliders",
        level: "80%"
      },
      {
        name: "Vivado & MATLAB",
        description: "FPGA synthesis, signal processing visualizer, and numerical matrix computing.",
        iconName: "Activity",
        level: "78%"
      },
      {
        name: "Git & GitHub",
        description: "Version control management, repository tracking, and code collaboration workflow.",
        iconName: "GitBranch",
        level: "82%"
      }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "student-result",
    title: "Student Result Program",
    badge: "JAVA MODULE",
    description: "An interactive Java application that receives student record details and subject marks, automatically computing totals, percentages, grade allocations, and pass/fail evaluations.",
    techStack: ["Java", "OOP", "Logic Processing"],
    iconName: "GraduationCap",
    githubUrl: "https://github.com/pinnintipavankumar26-dot",
    liveUrl: "#"
  },
  {
    id: "employee-payroll",
    title: "Employee Payroll Program",
    badge: "JAVA MODULE",
    description: "A comprehensive salary processing engine implemented in Java that calculates net employee compensation factoring in basic pay, HRA, DA allowances, and statutory PF deductions.",
    techStack: ["Java", "Financial Logic", "Functions"],
    iconName: "Calculator",
    githubUrl: "https://github.com/pinnintipavankumar26-dot",
    liveUrl: "#"
  },
  {
    id: "shopping-bill",
    title: "Online Shopping Bill",
    badge: "PRACTICE MODULE",
    description: "E-commerce billing simulator program that calculates final invoice amounts with dynamic item prices, applicable GST tax structures, and promotional discount deductions.",
    techStack: ["Java", "Tax Algorithms", "Arrays"],
    iconName: "ShoppingCart",
    githubUrl: "https://github.com/pinnintipavankumar26-dot",
    liveUrl: "#"
  },
  {
    id: "pattern-programs",
    title: "Java Pattern Programs",
    badge: "LOGIC MODULE",
    description: "Advanced algorithmic pattern printing suites focusing on numerical, star pyramid, and alphabetical matrices to hone complex nested loop mechanics and logic optimization.",
    techStack: ["Java", "Nested Loops", "Algorithms"],
    iconName: "Code",
    githubUrl: "https://github.com/pinnintipavankumar26-dot",
    liveUrl: "#"
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Applied AI & Machine Learning with Real-World Applications",
    category: ["all", "aiml"],
    issuer: "KL University & Sense Semiconductor",
    year: "2026",
    imageSrc: "/assets/certificates/cert-1.png",
    tagLabel: "AI / ML"
  },
  {
    id: "cert-2",
    title: "Artificial Intelligence and Machine Learning Using Python",
    category: ["all", "aiml", "python"],
    issuer: "Taras System & Solutions",
    year: "2026",
    imageSrc: "/assets/certificates/cert-2.png",
    tagLabel: "Python AI"
  },
  {
    id: "cert-3",
    title: "MATLAB Signals Certificate",
    category: ["all", "matlab"],
    issuer: "MathWorks / Academic Training",
    year: "2025",
    imageSrc: "/assets/certificates/cert-3.png",
    tagLabel: "Signals"
  },
  {
    id: "cert-4",
    title: "NPTEL Certificate",
    category: ["all", "nptel"],
    issuer: "NPTEL / IIT Ministry of Education",
    year: "2025",
    imageSrc: "/assets/certificates/cert-4.png",
    tagLabel: "NPTEL IIT"
  },
  {
    id: "cert-5",
    title: "Programming for Everybody",
    category: ["all", "python", "coursera"],
    issuer: "Coursera – Univ. of Michigan",
    year: "2025",
    imageSrc: "/assets/certificates/cert-5.png",
    tagLabel: "Python"
  },
  {
    id: "cert-6",
    title: "Python Data Structures",
    category: ["all", "python", "coursera"],
    issuer: "Coursera – Univ. of Michigan",
    year: "2025",
    imageSrc: "/assets/certificates/cert-6.png",
    tagLabel: "Data Structures"
  },
  {
    id: "cert-7",
    title: "Using Python to Access Web Data",
    category: ["all", "python", "coursera"],
    issuer: "Coursera – Univ. of Michigan",
    year: "2025",
    imageSrc: "/assets/certificates/cert-7.png",
    tagLabel: "Web Data"
  }
];

export const CONTACT_DATA: ContactInfo = {
  email: "pinnintipavankumar26@gmail.com",
  phone: "+91 8897451230", // or editable contact
  location: "Andhra Pradesh, India",
  github: "https://github.com/pinnintipavankumar26-dot",
  linkedin: "https://www.linkedin.com/in/pinninti-pavan-kumar-a8016a31a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
};
