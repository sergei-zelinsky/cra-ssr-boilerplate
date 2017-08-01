import React from 'react';
import {asyncComponent} from 'react-async-component';

export default asyncComponent({
  resolve: () => import('components/About'),
  LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
})
