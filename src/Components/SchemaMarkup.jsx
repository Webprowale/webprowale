import { Helmet } from 'react-helmet-async';

function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webprowale",
    "legalName": "Webprowale",
    "url": "https://webprowale.com",
    "logo": "https://webprowale.com/og-image.jpg",
    "image": "https://webprowale.com/og-image.jpg",
    "description": "Webprowale is an AI engineering company that helps businesses build, deploy, and automate intelligent AI systems. It develops AI agents, business automation, RAG and knowledge systems, voice AI, AI integrations, and custom AI software that connect directly to a company's existing tools and workflows.",
    "email": "contact@webprowale.com",
    "telephone": "+2349035874126",
    "areaServed": "Worldwide",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@webprowale.com",
      "telephone": "+2349035874126",
      "contactType": "customer support",
      "availableLanguage": "English"
    },
    "knowsAbout": [
      "AI Engineering",
      "AI Agents",
      "Business Automation",
      "Retrieval-Augmented Generation",
      "Voice AI",
      "AI Integration",
      "Custom AI Software",
      "Custom Software Development",
      "SaaS Platforms",
      "Backend Engineering",
      "API Development",
      "Large Language Models"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Webprowale",
    "url": "https://webprowale.com",
    "description": "Webprowale is an AI engineering company that builds AI agents, business automation, RAG and knowledge systems, voice AI, AI integrations, and custom AI software.",
    "publisher": {
      "@type": "Organization",
      "name": "Webprowale"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Webprowale",
    "description": "AI engineering, custom AI software, AI agents, business automation, RAG systems, voice AI, and backend development services.",
    "url": "https://webprowale.com",
    "email": "contact@webprowale.com",
    "telephone": "+2349035874126",
    "areaServed": "Worldwide",
    "provider": {
      "@type": "Organization",
      "name": "Webprowale"
    },
    "serviceType": [
      "AI Engineering",
      "AI Agent Development",
      "Business Automation",
      "RAG and Knowledge Systems",
      "Voice AI",
      "AI Integration",
      "Custom Software Development",
      "Backend and API Development"
    ]
  };

  const faqs = [
    {
      question: "What is Webprowale?",
      answer: "Webprowale is an AI engineering company that helps businesses build, deploy, and automate intelligent AI systems. It develops AI agents, business automation, RAG and knowledge systems, voice AI, AI integrations, and custom AI software that connect directly to a company's existing tools and workflows."
    },
    {
      question: "What does Webprowale build?",
      answer: "Webprowale builds custom software products, SaaS platforms, AI agents, automation systems, internal business tools, APIs, backend systems, RAG applications, voice AI systems, and custom AI architectures."
    },
    {
      question: "Does Webprowale build custom software for startups?",
      answer: "Yes. Webprowale works with startups to design and build custom software products from the ground up, including SaaS platforms, MVPs, backend infrastructure, AI-powered applications, internal tools, APIs, and production systems."
    },
    {
      question: "Can Webprowale build an entire startup product?",
      answer: "Yes. Webprowale can help turn a product idea into a working software system, covering product architecture, backend development, frontend integration, databases, APIs, AI functionality, automation, deployment, and ongoing engineering."
    },
    {
      question: "Does Webprowale provide AI agent development?",
      answer: "Yes. Webprowale develops custom AI agents that can understand business context, use tools, access approved data, interact with APIs, execute workflows, and perform business tasks with defined rules and permissions."
    },
    {
      question: "What types of AI agents does Webprowale build?",
      answer: "Webprowale builds customer support agents, sales agents, lead qualification agents, appointment booking agents, knowledge agents, onboarding agents, internal business agents, voice agents, research agents, and workflow automation agents."
    },
    {
      question: "Can Webprowale connect AI agents to existing business systems?",
      answer: "Yes. Webprowale can connect AI systems to databases, REST APIs, CRMs, ERPs, internal applications, communication platforms, document stores, and other approved business systems."
    },
    {
      question: "Does Webprowale build private AI systems?",
      answer: "Yes. Webprowale builds private and controlled AI systems for organizations that need greater control over their data, models, infrastructure, access permissions, and integrations."
    },
    {
      question: "What is custom AI architecture?",
      answer: "Custom AI architecture is the design of an AI system around a company's specific requirements rather than simply connecting a chatbot to an LLM. This can include model selection, agent orchestration, RAG, memory, tool calling, databases, APIs, evaluation, security, observability, and deployment infrastructure."
    },
    {
      question: "Can Webprowale build AI systems using private company data?",
      answer: "Yes. Webprowale can build AI systems that work with approved company knowledge and data through approaches such as retrieval-augmented generation, structured data access, APIs, databases, and controlled tool integrations."
    },
    {
      question: "Does Webprowale build RAG systems?",
      answer: "Yes. Webprowale develops retrieval-augmented generation systems that allow AI applications to retrieve relevant information from approved business documents, databases, knowledge bases, and other sources before generating responses."
    },
    {
      question: "Can Webprowale build internal AI tools?",
      answer: "Yes. Webprowale builds private internal tools that help teams automate repetitive work, search company knowledge, analyze information, generate documents, interact with internal systems, and execute controlled workflows."
    },
    {
      question: "Can Webprowale automate existing business processes?",
      answer: "Yes. Webprowale designs automation systems that connect AI agents, APIs, databases, business applications, and workflow logic to automate repetitive or complex business processes."
    },
    {
      question: "What is the difference between an AI chatbot and an AI agent?",
      answer: "A chatbot primarily responds to conversations. An AI agent can be designed to reason through a task, access approved information, call tools, interact with external systems, make decisions within defined boundaries, and execute a workflow."
    },
    {
      question: "Can Webprowale build AI voice agents?",
      answer: "Yes. Webprowale can build conversational voice AI systems that combine speech recognition, language models, business knowledge, tools, APIs, and text-to-speech to support real-time voice interactions."
    },
    {
      question: "Does Webprowale build APIs and backend systems?",
      answer: "Yes. Backend engineering is part of Webprowale's software development work. This includes APIs, authentication, databases, business logic, integrations, queues, background processing, AI services, and scalable application infrastructure."
    },
    {
      question: "Can Webprowale modernize an existing software product?",
      answer: "Yes. Webprowale can help companies improve existing software through backend modernization, AI integration, automation, API development, architecture improvements, performance optimization, and new product capabilities."
    },
    {
      question: "Does Webprowale work with companies that already have a development team?",
      answer: "Yes. Webprowale can work alongside an existing engineering team to design AI architecture, develop specialized AI systems, build integrations, automate workflows, or provide engineering support for complex AI initiatives."
    },
    {
      question: "Does Webprowale build custom software instead of using no-code tools?",
      answer: "Yes. Webprowale develops custom software when a business requires functionality, integrations, security, control, scalability, or architecture that existing off-the-shelf or no-code solutions cannot adequately provide."
    },
    {
      question: "Who is Webprowale for?",
      answer: "Webprowale works with startups, technology companies, growing businesses, and organizations that need custom software, AI agents, business automation, private AI tools, or specialized AI infrastructure."
    },
    {
      question: "What makes Webprowale different?",
      answer: "Webprowale approaches AI as an engineering problem, not simply as a chatbot implementation. Its work combines software engineering, backend architecture, AI agents, LLMs, data systems, integrations, automation, and production infrastructure to build systems around specific business requirements."
    },
    {
      question: "Can Webprowale build a custom AI system for my business?",
      answer: "Yes. Webprowale can analyze the business process, identify where AI or automation provides value, design the architecture, build the required software and AI components, integrate existing systems, and deploy the solution."
    },
    {
      question: "How do I work with Webprowale?",
      answer: "Businesses can contact Webprowale with a product idea, existing software problem, automation requirement, or AI use case. Webprowale can then assess the requirements and propose an appropriate technical architecture and development approach. Reach Webprowale at contact@webprowale.com or +2349035874126."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
}

export default SchemaMarkup;
