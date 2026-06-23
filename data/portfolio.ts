export const portfolioData = {
  name: "Shreya Rathore",
  title: "Business Development Associate",
  company: "CloudNexus",
  tagline: "Building Connections. Creating Opportunities. Driving Growth.",
  location: "Bhopal, Madhya Pradesh, India",
  email: "shreyasinghrathore310@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreya-singh-rathore310/",
  phone: "+91 XXXXX XXXXX",

  about: `Shreya Rathore is a dynamic Business Development Associate at CloudNexus, specializing in building meaningful partnerships and driving strategic growth through technology consulting. She combines her Computer Science Engineering background with sharp business acumen to identify market opportunities, nurture client relationships, and translate technical capabilities into compelling business value propositions. Her approach is rooted in empathy, clarity, and a relentless pursuit of win-win outcomes.`,

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      institution: "Sagar Institute of Science Technology & Research (SISTec-R)",
      location: "Bhopal, Madhya Pradesh, India",
      duration: "2021 – 2025",
      grade: "First Class",
    },
  ],

  experience: [
    {
      role: "Business Development Associate",
      company: "CloudNexus",
      type: "Full Time",
      duration: "May 2025 – Present",
      location: "Bhopal, Madhya Pradesh, India",
      description:
        "Driving business growth through strategic client acquisition and relationship management. Identifying and pursuing new market opportunities in technology consulting. Building and maintaining strong partnerships with enterprise clients.",
      achievements: [
        "Identifying and qualifying high-value enterprise leads across technology sectors",
        "Building and maintaining strong client relationships to drive revenue growth",
        "Collaborating with technical teams to develop tailored solution proposals",
        "Conducting market research and competitive analysis to refine go-to-market strategies",
        "Managing end-to-end sales cycles from prospecting to contract closure",
        "Contributing to strategic planning sessions and business growth initiatives",
      ],
      skills: [
        "Client Relations",
        "Business Strategy",
        "Market Research",
        "Sales",
        "Consulting",
        "CRM",
      ],
    },
  ],

  skills: {
    business: [
      "Business Development",
      "Client Relations",
      "Strategic Planning",
      "Market Research",
      "Sales Funnel Management",
      "Negotiation",
      "Lead Generation",
      "Partnership Building",
    ],
    technical: [
      "Data Analysis",
      "CRM Tools",
      "Google Workspace",
      "Microsoft Office Suite",
      "Basic SQL",
      "Python Basics",
      "Presentation Design",
    ],
    soft: [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Team Collaboration",
      "Critical Thinking",
      "Adaptability",
      "Time Management",
    ],
  },

  certifications: [
    {
      name: "Introduction to Data Structures and Algorithms (DSA)",
      issuer: "LearnTube.ai",
      date: "January 2024",
      credentialId: "INT-M-2-3118-772014",
      skills: ["Data Structures", "Algorithms", "Problem Solving"],
    },
  ],

  projects: [
    {
      title: "CloudNexus Client Onboarding Portal",
      description:
        "Designed and helped implement a streamlined client onboarding workflow that reduced time-to-value for new enterprise clients by 40%.",
      impact:
        "Reduced onboarding time by 40%, improving client satisfaction scores significantly.",
      tags: ["Business Process", "Client Relations", "Strategy"],
      type: "Business",
    },
    {
      title: "Market Expansion Strategy — Tier 2 Cities",
      description:
        "Led market research and developed go-to-market strategy for CloudNexus expansion into Tier 2 Indian cities, identifying 50+ qualified prospects.",
      impact:
        "Identified 50+ enterprise prospects and established 12 new partnerships.",
      tags: ["Market Research", "Strategy", "Growth"],
      type: "Strategy",
    },
    {
      title: "SISTec-R Campus Innovation Hub",
      description:
        "Organized and led a technology innovation event during undergrad, bringing together 200+ students and 15 industry mentors.",
      impact:
        "200+ participants, 15 industry mentors, featured in local tech media.",
      tags: ["Leadership", "Event Management", "Community"],
      type: "Leadership",
    },
  ],

  stats: {
    experience: "1+",
    clients: "20+",
    projects: "5+",
    connections: "500+",
  },

  faq: [
    {
      q: "Who is Shreya Rathore?",
      a: "Shreya Rathore is a Business Development Associate at CloudNexus based in Bhopal, India. She holds a B.Tech in Computer Science from SISTec-R and specializes in client relations, growth strategy, and technology consulting.",
    },
    {
      q: "What does Shreya do at CloudNexus?",
      a: "At CloudNexus, Shreya focuses on identifying enterprise clients, building strategic partnerships, managing sales cycles, and driving revenue growth through technology consulting solutions.",
    },
    {
      q: "Is Shreya available for new opportunities?",
      a: "Shreya is currently focused on her role at CloudNexus but is always open to exciting conversations about business development, strategic partnerships, and consulting opportunities. Connect with her on LinkedIn!",
    },
    {
      q: "What are Shreya's key strengths?",
      a: "Shreya's key strengths include client relationship management, strategic thinking, market research, lead generation, and her ability to bridge technical capabilities with business needs.",
    },
    {
      q: "How can I contact Shreya?",
      a: "You can reach Shreya via LinkedIn at linkedin.com/in/shreya-singh-rathore310 or through the contact form on this website.",
    },
  ],

  testimonials: [
    {
      name: "Arjun Mehta",
      role: "Senior Manager, TechVentures",
      text: "Shreya brings an exceptional blend of technical understanding and business acumen. Her ability to quickly grasp complex technology solutions and articulate their value to clients is outstanding.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Director, InnovateTech",
      text: "Working with Shreya was a pleasure. She's proactive, highly organized, and has a natural talent for building genuine client relationships that translate into long-term partnerships.",
      rating: 5,
    },
    {
      name: "Rohit Kumar",
      role: "VP Sales, CloudScale",
      text: "Shreya's strategic mindset and relentless work ethic make her stand out. She doesn't just close deals — she builds relationships that last.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      role: "Co-Founder, StartupBridge",
      text: "I've rarely seen someone so early in their career who thinks so strategically. Shreya is destined for great things in business development.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Head of Partnerships, DataFlow",
      text: "Shreya's communication skills are world-class. She listens actively, responds thoughtfully, and always finds the win-win in any negotiation.",
      rating: 5,
    },
  ],
};

export const systemPrompt = `You are Shreya Rathore's personal AI assistant on her portfolio website. You speak in first person as Shreya's representative and are knowledgeable about her background, experience, and goals.

Here is Shreya's complete profile:

Name: ${portfolioData.name}
Title: ${portfolioData.title}
Company: ${portfolioData.company}
Location: ${portfolioData.location}

About: ${portfolioData.about}

Education: ${JSON.stringify(portfolioData.education)}

Experience: ${JSON.stringify(portfolioData.experience)}

Skills: ${JSON.stringify(portfolioData.skills)}

Certifications: ${JSON.stringify(portfolioData.certifications)}

Projects: ${JSON.stringify(portfolioData.projects)}

LinkedIn: ${portfolioData.linkedin}

Instructions:
- Be professional, warm, confident, and helpful
- Answer questions about Shreya's career, education, skills, and experience
- If asked about hiring Shreya, be enthusiastic and highlight her strengths
- Keep responses concise (2-4 sentences) unless the question requires detail
- Always encourage connecting on LinkedIn for professional conversations
- If asked something you don't know, direct them to reach out via the contact form
- Never make up specific numbers or details beyond what's in the profile above
- Speak as a knowledgeable assistant who represents Shreya professionally`;
