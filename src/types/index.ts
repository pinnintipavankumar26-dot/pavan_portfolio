export interface EducationItem {
  id: string;
  degree: string;
  stream: string;
  institution: string;
  years: string;
  gradeLabel: string;
  gradeValue: string;
  secondaryGradeLabel?: string;
  secondaryGradeValue?: string;
  status?: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    description: string;
    iconName: string;
    level?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  iconName: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  category: string[];
  issuer: string;
  year: string;
  imageSrc: string;
  tagLabel: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}
