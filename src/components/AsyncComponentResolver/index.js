import React from 'react';
import {asyncComponent} from 'react-async-component';

const asyncComponents = {
  'components/Home':  () => import('components/Home'),
  'components/About': () => import('components/About')
};

class FakeRouteResolver {
  static resolveRouteInformation(url) {
    let modulePath;
    switch (url){
      case '/my-seo-friendly-url-for-home-page':
        modulePath = 'components/Home';
        break;
      case '/my-seo-friendly-url-for-about-page':
        modulePath = 'components/About';
        break;

      default:
        modulePath = 'components/Home';
    }
    return new Promise(resolve => setTimeout(() => resolve({modulePath}), 500))
  }
}

export default asyncComponent({
  resolve: (props) => {
    return FakeRouteResolver.resolveRouteInformation(props.location.pathname)
      .then(({modulePath}) => {
        console.log('modulePath', modulePath);
        return asyncComponents[modulePath]()
      })
  },
  LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
});
