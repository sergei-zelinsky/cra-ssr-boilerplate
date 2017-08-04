import React, {Component} from 'react';
import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';
import {setLocale} from 'actions/i18n';
import {DEFAULT_LOCALE} from 'constants/i18n/locales'

class IntlProviderWrapper extends Component {
  componentWillMount() {
    const {locale, messages} = this.props;
    if (!locale || !messages){
      this.props.setLocale(locale || DEFAULT_LOCALE);
    }
  }

  render(){
    const {locale, messages} = this.props;
    if (!locale || !messages){
      return null;
    }

    return (
      <IntlProvider
        locale={locale}
        messages={messages}
      >
        {this.props.children}
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    locale: state.i18n.locale,
    messages: state.i18n.messages
  };
};

const ConnectedIntlProvider = connect(
  mapStateToProps, {
    setLocale
  }
)(IntlProviderWrapper);

export default ConnectedIntlProvider;
