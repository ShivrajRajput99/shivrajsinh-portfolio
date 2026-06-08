import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Server,
  Sparkles,
  TerminalSquare
} from 'lucide-react';

export const profile = {
  name: 'Shivrajsinh Rajput',
  title: 'Python Developer & Data Analytics Student',
  intro:
    'I build practical web applications and data-driven tools with Python, Django, SQL, and modern analytics libraries. My focus is turning clean code and clear insights into products that are useful, reliable, and easy to use.',
  email: 'smrajput2004@gmail.com',
  phone: '+91 9313171723',
  linkedin: 'www.linkedin.com/in/shivrajsinh-rajput-093204321',
  TerminalSquare: 'https://github.com/ShivrajRajput99',
  location: 'India',
  resume: '/Shivrajsinh-Rajput-Resume.pdf'
};

export const navItems = ['About', 'Skills', 'Projects', 'Timeline', 'Contact'];

export const education = [
  {
    degree: 'DIPLOMA IN COMPUTER ENGINEERING',
    school: 'GANPAT UNIVERSITY',
    detail: 'Successfully completed Diploma in Computer Engineering, achieving a CGPA of 9+. Developed strong technical knowledge in programming, databases, and software development while demonstrating leadership, teamwork, and continuous learning through academic and extracurricular activities.'
  },
  {
    degree: 'B.TECH IN COMPUTER ENGINEERING',
    school: 'GANPAT UNIVERSITY',
    detail: 'Currently pursuing a Bachelor of Technology (B.Tech) in Computer Engineering, driven by a passion for Data Analytics, Python Development, Artificial Intelligence, and innovative software solutions. Continuously expanding technical expertise through hands-on projects, practical problem-solving, and emerging technologies while developing a strong foundation in software engineering. Focused on transforming ideas into impactful digital solutions and building the skills required to excel in the rapidly evolving technology landscape.'
  }
];

export const goals = [
  'Build strong expertise in Python, Data Analytics, and AI-driven technologies through continuous learning and hands-on projects.',
  'Create scalable software solutions and intelligent applications that deliver real-world value and meaningful user experiences.',
  'Grow into a versatile software and data professional capable of leading innovative technology initiatives and driving digital innovation.'
];

export const skills = [
  { name: 'Python', icon: TerminalSquare },
  { name: 'Django', icon: Server },
  { name: 'Pandas', icon: BarChart3 },
  { name: 'NumPy', icon: Sparkles },
  { name: 'SQL', icon: Database },
  { name: 'Data Analytics', icon: LayoutDashboard },
  { name: 'HTML', icon: Code2 },
  { name: 'CSS', icon: Code2 },
  { name: 'Git, GitHub & Terminal', icon: TerminalSquare }
];

export const projects = [
  {
    title: "Delhi-House-Price-Prediction",
    image: "/Delhi-House-Price-Prediction.png",
    category: "Machine Learning",
    description:
      "A secure web application for managing student records and attendance.",

    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],

    github: "https://github.com/ShivrajRajput99/Delhi-House-Price-Prediction/tree/main",

    demo: "https://github.com/ShivrajRajput99",

    accent: "from-slate-700 via-slate-800 to-slate-900"
  },

  {
    title: "Student Management System",
    category: "Django",
    image: "/Student Management System.png",
    description:
      "A secure web application for managing student records and attendance.",

    tech: ["Python", "Django", "MySQL"],

    github: "https://github.com/yourusername/student-management-system",

    demo: "https://student-management-demo.vercel.app",

    accent: "from-slate-700 via-slate-800 to-slate-900"
  },

  {
    title: "Product Management System",
    image: "/product Management System.png",
    category: "Django",
    description:
      "Inventory and product tracking platform with CRUD operations.",

    tech: ["Python", "Django", "MySQL"],

    github: "https://github.com/yourusername/product-management-system",

    demo: "https://product-management-demo.vercel.app",

    accent: "from-emerald-500 via-teal-500 to-cyan-500"
  }
];

export const timeline = [
  {
    date: '2026',
    title: 'B.Tech in Computer Engineering (Pursuing)',
    type: 'Education',
    icon: GraduationCap,
    description:
      'Currently pursuing B.Tech in Computer Engineering while strengthening skills in Python Development, Data Analytics, Artificial Intelligence, and modern software technologies through continuous learning and practical projects.'
  },
  {
    date: '2025',
    title: 'Django Project Development',
    type: 'Experience',
    icon: BriefcaseBusiness,
    description:
      'Developed real-world Django projects including Student Management System and Product Management System. Gained hands-on experience with CRUD operations, database management, authentication, and backend development.'
  },
  {
    date: '2024',
    title: 'Diploma in Computer Engineering (CGPA 9+)',
    type: 'Education',
    icon: BookOpen,
    description:
      'Successfully completed Diploma in Computer Engineering with a CGPA above 9. Built a strong foundation in programming, database systems, software development, networking, and problem-solving.'
  },
  {
    date: 'Goal',
    title: 'Data Scientist & AI Engineer',
    type: 'Career',
    icon: Rocket,
    description:
      'Passionate about leveraging data, machine learning, and artificial intelligence to solve real-world problems. Continuously building expertise in Python, Data Analytics, and AI technologies to create intelligent, data-driven solutions that deliver meaningful impact.'
  }
];

export const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/shivrajsinh-rajput', href: profile.linkedin, icon: Mail },

{ label: 'TerminalSquare', value: 'TerminalSquare.com/shivrajsinh-rajput', href: profile.TerminalSquare, icon: TerminalSquare },
  { label: 'Location', value: profile.location, href: '#contact', icon: MapPin }
];