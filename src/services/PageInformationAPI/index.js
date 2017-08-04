const MOCKED_PAGE_INFORMATION = {
  '/my-seo-friendly-url-for-home-page': {
    page: 'Home',
    locale: 'en'
  },
  '/ru/my-seo-friendly-url-for-home-page': {
    page: 'Home',
    locale: 'ru'
  },
  '/my-seo-friendly-url-for-about-page': {
    page: 'About',
    locale: 'en'
  },
  '/ru/my-seo-friendly-url-for-about-page': {
    page: 'About',
    locale: 'ru'
  }
};

const DEFAULT_PAGE_INFORMATION = {
  page: 'Home',
  locale: 'en'
};

export default class PageInformationAPI {
  static fetchPageInformation(pathname) {
    const pageInformation = MOCKED_PAGE_INFORMATION[pathname]
      || DEFAULT_PAGE_INFORMATION;
    return new Promise(resolve => setTimeout(() => resolve(pageInformation), 500))
  }
}
