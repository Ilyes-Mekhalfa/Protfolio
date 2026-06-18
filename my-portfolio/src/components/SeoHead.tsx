import Head from "next/head";

export default function SeoHead() {
  const title = "Ilyes Mekhalfa — Full-Stack Developer";
  const description =
    "Computer Science engineering student at ESI SBA, Algeria. Full-Stack Developer specializing in React.js, Node.js, Nest.js, MongoDB, Socket.io and Redis. Open to backend and full-stack opportunities.";
  const url = "https://ilyes-mekhalfa.vercel.app";
  const image = `${url}/og-image.png`;

  return (
    <Head>
      {/* ── Basic ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Ilyes Mekhalfa, full-stack developer, backend developer, React, Node.js, Nest.js, MongoDB, Socket.io, Redis, Prisma, Algeria, ESI SBA, web developer portfolio" />
      <meta name="author" content="Ilyes Mekhalfa" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#ffb000" />

      {/* ── Open Graph (Facebook, LinkedIn previews) ── */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Ilyes Mekhalfa Portfolio" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ── Favicon ── */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* ── Viewport & theme ── */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0d1117" />

      {/* ── Structured Data (JSON-LD) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ilyes Mekhalfa",
            url: url,
            email: "ilyesmekalfa@gmail.com",
            telephone: "+213665582005",
            jobTitle: "Full-Stack Developer",
            description: description,
            nationality: "Algerian",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Guelma",
              addressCountry: "DZ",
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Higher School of Computer Science, 08 May 1945 (ESI SBA)",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sidi Bel Abbès",
                addressCountry: "DZ",
              },
            },
            sameAs: [
              "https://www.linkedin.com/in/ilyes-mekhalfa-6477b61b6",
              "https://github.com/Ilyes-Mekhalfa",
            ],
            knowsAbout: [
              "JavaScript", "TypeScript", "React.js", "Node.js", "Nest.js",
              "Express", "MongoDB", "PostgreSQL", "Redis", "Prisma ORM",
              "Socket.io", "Docker", "REST API", "Angular.js",
            ],
          }),
        }}
      />
    </Head>
  );
}