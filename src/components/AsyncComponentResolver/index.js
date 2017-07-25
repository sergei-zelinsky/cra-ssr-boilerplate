import React, {Component} from 'react';
import {asyncComponent} from 'react-async-component';

function getComponentImportPromise(route){
  if (route === 'components/About'){
    return import('components/About')
  }
  return import('components/Home');
}

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

export default class extends Component {
  render(){
    const AsyncComponent = asyncComponent({
      resolve: () => {
        return FakeRouteResolver.resolveRouteInformation(this.props.location.pathname)
          .then(({modulePath}) => getComponentImportPromise(modulePath))
      },
      LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
    });
    return <AsyncComponent {...this.props}/>
  }
}
