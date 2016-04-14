import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';


class I18nComponent extends React.Component {
  render() {
    return (<span>
      {this.props.i18nResult}
    </span>);
  }
}

I18nComponent.propTypes = {
  i18nkey: React.PropTypes.string,
  options: React.PropTypes.object,
  lang_tag: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ])
};

I18nComponent.defaultProps = {
  i18nkey: '',
  options: {},
  lang_tag: false
};


export default I18n = createContainer(({i18nkey, options, lang_key})=>{
  let i18nResult = TAPi18n.__(i18nkey, options, lang_key);
  return {
    i18nResult
  };
}, I18nComponent);
