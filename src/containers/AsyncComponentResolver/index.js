import AsyncComponentResolver from 'components/AsyncComponentResolver';
import {connect} from 'react-redux';
import {fetchPageInformation} from 'actions/page-information';

function mapStateToProps(state){
  return {
    pageInformation: state.pageInformation
  }
}

const ConnectedAsyncComponentResolver = connect(
  mapStateToProps, {
  fetchPageInformation
})(AsyncComponentResolver);

export default ConnectedAsyncComponentResolver;
