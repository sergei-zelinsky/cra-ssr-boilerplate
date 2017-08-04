import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {FormattedMessage, injectIntl} from 'react-intl';

class About extends Component {
  render(){
    const {match, intl} = this.props;
    return (
      <div>
        <Helmet>
          <title>
            {intl.formatMessage({id: 'about.page_title'})}
          </title>
          <meta
            property="og:title"
            content={intl.formatMessage({id: 'about.page_title'})}
          />
        </Helmet>
        <h2>
          <FormattedMessage id="about.title"/>
        </h2>
        <p>
          <FormattedMessage
            id="about.description"
            values={{
              location: match.url
            }}
          />
        </p>
      </div>
    );
  }
}

export default injectIntl(About);
