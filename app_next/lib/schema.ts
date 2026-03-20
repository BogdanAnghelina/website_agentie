export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Antigravity Digital',
    description: 'Agenție de marketing digital specializată în Google Ads, SEO și Web Development',
    url: 'https://antigravitydigital.ro',
    telephone: '+40700000000',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RO',
    },
  }
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Antigravity Digital',
    },
    url,
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}
