import {getTranslations, setRequestLocale} from 'next-intl/server';
import {createMetadata} from '@/lib/seo';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Home'});

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: `/${locale}`,
  });
}

export default async function HomePage({params}: Props) {
  const {locale} = await params;

  setRequestLocale(locale);

  const t = await getTranslations('Home');

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111]">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-medium tracking-[0.3em] text-neutral-500">
            {t('eyebrow')}
          </p>

          <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            {t('title')}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            {t('description')}
          </p>
        </div>
      </section>
    </main>
  );
}