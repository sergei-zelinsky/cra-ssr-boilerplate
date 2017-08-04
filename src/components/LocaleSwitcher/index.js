import React, {Component} from 'react';
import {EN, RU} from 'constants/i18n/locales';
import {FormattedMessage} from 'react-intl';

class LocaleSwitcher extends Component {
  handleLocaleChange = (locale) => {
    this.props.onLocaleChange(locale);
  };

  render(){
    const {currentLocale} = this.props;
    return (
      <div>
        <h3>
          <FormattedMessage id="locale_switcher.title"/>
        </h3>
        <p>
          <FormattedMessage id="locale_switcher.current_locale"/>
          <b> {currentLocale.toUpperCase()}</b>
        </p>
        <button onClick={() => this.handleLocaleChange(EN)}>
          <FormattedMessage id="locale_switcher.in_english"/>
        </button>
        <button onClick={() => this.handleLocaleChange(RU)}>
          <FormattedMessage id="locale_switcher.in_russian"/>
        </button>
      </div>
    );
  }
}

export default LocaleSwitcher;
