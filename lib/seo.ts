import type {Metadata} from 'next';

const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || 'Bravix Next Starter';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export function createMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}