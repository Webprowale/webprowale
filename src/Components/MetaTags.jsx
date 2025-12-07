import { Helmet } from 'react-helmet-async';

function MetaTags({ 
  title = "Joshua Akinwale - Full Stack Software Engineer", 
  description = "Experienced Full Stack Developer specializing in Laravel, React, Next.js, and AI integration. Building scalable web applications and innovative solutions.",
  image = "https://webprowale.com/og-image.jpg",
  url = "https://webprowale.com",
  type = "website"
}) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Webprowale Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@webprowale" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Joshua Akinwale (Webprowale)" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default MetaTags;
