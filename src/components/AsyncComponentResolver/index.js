import React, {Component} from 'react';
import AsyncHome from 'components/AsyncHome';
import AsyncAbout from 'components/AsyncAbout';

const MAP_PAGE_TO_COMPONENT = {
  'Home': AsyncHome,
  'About': AsyncAbout
};

class AsyncComponentResolver extends Component {
  componentWillMount(){
    // TODO: use another environment check
    if (typeof window !== 'undefined'){
      this.props.fetchPageInformation(this.props.location.pathname)
    }
  }

  componentWillReceiveProps(nextProps){
    // TODO: use another environment check
    if (typeof window !== 'undefined' && nextProps.location !== this.props.location){
      this.props.fetchPageInformation(nextProps.location.pathname)
    }
  }

  render(){
    const {pageInformation, ...rest} = this.props;
    if (!pageInformation.page){
      return null;
    }
    const ResolvedComponent = MAP_PAGE_TO_COMPONENT[pageInformation.page];
    return (
      <ResolvedComponent {...rest}/>
    );
  }
}

export default AsyncComponentResolver;

