import React from 'react';
import { Meteor } from 'meteor/meteor';


export default I18n = React.createClass({
  mixins: [ReactMeteorData],
  getDefaultProps() {
    return {
      i18nkey: '',
      options: {},
      lang_tag: false
    };
  },
  getMeteorData() {
    let {i18nkey, options, lang_key} = this.props;
    let i18nResult = TAPi18n.__(i18nkey, options, lang_key);
    return {
      i18nResult
    };
  },
  propTypes() {
    return {
      i18nkey: React.PropTypes.string,
      options: React.ProPTypes.object,
      lang_tag: React.PropTypes.string
    };
  },
  render() {
    return (<span>
      {this.data.i18nResult}
    </span>);
  }
});
