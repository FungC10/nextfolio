import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
}: SEOProps): Metadata {
  const url = `https://yourname.dev${path}`
  const imageUrl = `https://yourname.dev${image}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Your Name - Frontend Developer',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  }
}
