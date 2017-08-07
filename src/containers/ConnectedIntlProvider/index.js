import React, {Component} from 'react';
import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';
import {setLocale} from 'actions/i18n';

class IntlProviderWrapper extends Component {
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
