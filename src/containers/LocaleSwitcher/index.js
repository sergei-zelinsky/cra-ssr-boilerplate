import LocaleSwitcher from 'components/LocaleSwitcher';
import {connect} from 'react-redux';
import {setLocale} from 'actions/i18n';

const mapStateToProps = state => {
  return {
    currentLocale: state.i18n.locale
  };
};

export default connect(
  mapStateToProps, {
    onLocaleChange: setLocale
  }
)(LocaleSwitcher);
