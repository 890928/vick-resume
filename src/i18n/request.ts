import { getRequestConfig } from 'next-intl/server';
import { Locale, locales } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'zh';
  }

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
  };
});
