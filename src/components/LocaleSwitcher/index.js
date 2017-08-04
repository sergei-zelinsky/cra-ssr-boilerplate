import React, {Component} from 'react';
import {EN, RU} from 'constants/i18n/locales';

class LocaleSwitcher extends Component {
  handleLocaleChange = (locale) => {
    this.props.onLocaleChange(locale);
  };

  render(){
    const {currentLocale} = this.props;
    return (
      <div>
        <div>Locale Switcher. Current locale: {currentLocale}</div>
        <button onClick={() => this.handleLocaleChange(EN)}>
          In English
        </button>
        <button onClick={() => this.handleLocaleChange(RU)}>
          На русском
        </button>
      </div>
    );
  }
}

export default LocaleSwitcher;
