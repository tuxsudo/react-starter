import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { init as initNav } from '../actions/site-nav.js';
import AppView from '../views/AppView';
import { selectSiteNav, selectPageMeta } from '../store.js';


// argument 1 of react-redux `connect` maps store data to props
const mapStateToProps = (state) => {
    const nav = selectSiteNav(state);
    const {title, meta} = selectPageMeta(state);
    return {
        nav,
        homelink: (nav.find(n=>n.rel==="home")||{}).href,
        title, meta
    }
};

// argument 2 of react-redux `connect` maps actions to dispatch to props
const bindActionsToDispatch = ({initNav});

// create the store connector HoC
const storeConnector = connect(
  mapStateToProps,
  bindActionsToDispatch
);

// create the container
class AppContainer extends Component {

  // if a promise is returned, server will wait
  // to send response...
  static onServer(props, store) {
    return store.dispatch( initNav() );
  }

  componentDidMount() {
    return this.props.initNav();
  }

  render() {
    const {children, title, meta, ...props} = this.props;
    return (
      <AppView {...props}>
        <Helmet title={title} meta={meta} />
        {children}
      </AppView>
    );
  }

}


// Export the connected, container component...
export default storeConnector(AppContainer);
