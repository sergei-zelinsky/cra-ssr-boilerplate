import AsyncComponentResolver from 'components/AsyncComponentResolver';
import {connect} from 'react-redux';
import {fetchPageInformation} from 'actions/page-information';

function mapStateToProps(state){
  return {
    pageInformation: state.pageInformation
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchPageInformation: pathname => dispatch(fetchPageInformation(pathname))
  };
}

const ConnectedAsyncComponentResolver = connect(mapStateToProps, mapDispatchToProps)(AsyncComponentResolver);

export default ConnectedAsyncComponentResolver;
