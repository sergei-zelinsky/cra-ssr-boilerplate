import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {FormattedMessage, injectIntl} from 'react-intl';
import SimpleCounter from 'containers/SimpleCounter';

class Home extends Component {
  render(){
    const {match, intl} = this.props;
    return (
      <div>
        <Helmet>
          <title>
            {intl.formatMessage({id: 'home.page_title'})}
          </title>
          <meta
            property="og:title"
            content={intl.formatMessage({id: 'home.page_title'})}
          />
        </Helmet>
        <h2>
          <FormattedMessage id="home.title"/>
        </h2>
        <p>
          <FormattedMessage
            id="home.description"
            values={{
              location: match.url
            }}
          />
        </p>
        <div>
          <SimpleCounter/>
        </div>
      </div>
    );
  }
}

export default injectIntl(Home);
