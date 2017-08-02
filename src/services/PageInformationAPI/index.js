const MOCKED_PAGE_INFORMATION = {
  '/my-seo-friendly-url-for-home-page': {
    page: 'Home'
  },
  '/my-seo-friendly-url-for-about-page': {
    page: 'About'
  }
};

const DEFAULT_PAGE_INFORMATION = {
  page: 'Home'
};

export default class PageInformationAPI {
  static fetchPageInformation(pathname) {
    const pageInformation = MOCKED_PAGE_INFORMATION[pathname]
      || DEFAULT_PAGE_INFORMATION;
    return new Promise(resolve => setTimeout(() => resolve(pageInformation), 500))
  }
}
