import { Helmet } from 'react-helmet-async';

function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joshua Akinwale",
    "alternateName": "Webprowale",
    "jobTitle": "Full Stack Software Engineer",
    "description": "Experienced Full Stack Developer specializing in Laravel, React, Next.js, Python, and AI integration",
    "url": "https://webprowale.com",
    "image": "https://webprowale.com/profile.jpg",
    "sameAs": [
      "https://github.com/Webprowale",
      "https://www.linkedin.com/in/webprowale-akinwale",
      "https://twitter.com/webprowale"
    ],
    "knowsAbout": [
      "JavaScript",
      "React",
      "Next.js",
      "Laravel",
      "PHP",
      "Python",
      "Node.js",
      "TypeScript",
      "Web Development",
      "Full Stack Development",
      "AI Integration",
      "Software Engineering"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Software Engineer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Nigeria"
      },
      "skills": "Laravel, React, Next.js, Python, TypeScript, Node.js, AI/ML Integration"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Webprowale Portfolio",
    "url": "https://webprowale.com",
    "description": "Portfolio website of Joshua Akinwale, a Full Stack Software Engineer",
    "author": {
      "@type": "Person",
      "name": "Joshua Akinwale"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Webprowale Development Services",
    "description": "Full Stack Web Development, AI Integration, and Software Consulting Services",
    "provider": {
      "@type": "Person",
      "name": "Joshua Akinwale"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Development",
      "Full Stack Development",
      "AI Integration",
      "Software Consulting"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
    </Helmet>
  );
}

export default SchemaMarkup;
