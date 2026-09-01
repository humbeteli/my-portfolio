export type Language = "az" | "en";

export interface Translations {
  navbar: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };

  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta_projects: string;
    cta_cv: string;
  };

  about: {
    title: string;
    description: string;
  };

  skills: {
    title: string;
    frontend: string;
    stateData: string;
    tools: string;
  };

  experience: {
    title: string;
    certificate: string;
  };

  projects: {
    title: string;
    viewGithub: string;
    viewLive: string;
  };

  contact: {
    title: string;
    cta: string;
    whatsapp: string;
  };

  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  az: {
    navbar: {
      about: "Haqqımda",
      skills: "Bacarıqlar",
      experience: "Təcrübə",
      projects: "Layihələr",
      contact: "Əlaqə",
    },

    hero: {
      subtitle: "Frontend Developer",

      title:
        "MÜASİR VEB ÜÇÜN TƏMİZ VƏ DÜŞÜNÜLMÜŞ RƏQƏMSAL TƏCRÜBƏLƏR YARADIRAM.",

      description:
        "React, TypeScript və müasir frontend texnologiyalarından istifadə edərək təmiz, responsive və istifadəçi-yönümlü veb tətbiqlər hazırlayıram.",

      cta_projects: "Layihələrə bax",
      cta_cv: "CV-ə bax",
    },

    about: {
      title: "Haqqımda",

      description:
        "Frontend development sahəsinə yönəlmədən əvvəl fərqli bir karyera yolunda çalışmışam. Daha sonra özümə öyrənmə, strukturlaşdırılmış təlim və praktiki layihələr vasitəsilə frontend development sahəsinə keçmişəm.\n\nProblemləri həll etməyə, ardıcıl olmağa və davamlı inkişaf etməyə inanıram. Real layihələr qurmaq öyrənmə prosesimin əsas hissəsidir.",
    },

    skills: {
      title: "Bacarıqlar",
      frontend: "Frontend",
      stateData: "State və Məlumat",
      tools: "Alətlər",
    },

    experience: {
      title: "Təcrübə",
      certificate: "Sertifikata bax",
    },

    projects: {
      title: "Seçilmiş Layihələr",
      viewGithub: "GitHub",
      viewLive: "Canlı Demo",
    },

    contact: {
      title: "Əlaqə",
      cta: "Layihə fikriniz var? Gəlin danışaq.",
      whatsapp: "WhatsApp-dan yazın",
    },

    footer: {
      copyright: "© 2026 Hümbətəli Qurbanov",
    },
  },

  en: {
    navbar: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },

    hero: {
      subtitle: "Frontend Developer",

      title:
        "I BUILD CLEAN DIGITAL EXPERIENCES FOR THE MODERN WEB.",

      description:
        "Building clean, responsive and user-focused web applications with React, TypeScript and modern frontend technologies.",

      cta_projects: "View Projects",
      cta_cv: "View CV",
    },

    about: {
      title: "About",

      description:
        "I started my professional career outside software development and later transitioned into frontend development through self-directed learning, structured training, and hands-on projects.\n\nI believe in solving problems, staying consistent, and continuously improving. Building real projects is at the heart of my learning process.",
    },

    skills: {
      title: "Skills",
      frontend: "Frontend",
      stateData: "State & Data",
      tools: "Tools",
    },

    experience: {
      title: "Experience",
      certificate: "View Certificate",
    },

    projects: {
      title: "Selected Projects",
      viewGithub: "GitHub",
      viewLive: "Live Demo",
    },

    contact: {
      title: "Get In Touch",
      cta: "Have a project in mind? Let's talk.",
      whatsapp: "Send me a message",
    },

    footer: {
      copyright: "© 2026 Humbeteli Gurbanov",
    },
  },
};
