import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setHttpResponseCode } from '../actions/system';
import { setPageMeta } from '../actions/page-meta';
import NotFound from '../components/Error';

const pageMeta = {
    title: "Page Not Found :(",
    tags: [
        {"name": "description", "content": "This page was not found or an error occured"},
        {"property": "og:type", "content": "article"}
    ]
};

const storeConnector = connect(
  undefined,
  {setPageMeta},
  (state, actions) => ({
    init: () => actions.setPageMeta(pageMeta),
    title: "Page Not Found",
    subtitle: "Sorry Not Sorry"
  })
);

class NotFoundContainer extends Component {

  static onServer(props, store) {
    return Promise.all([
      store.dispatch(setPageMeta(pageMeta)),
      store.dispatch(setHttpResponseCode(404))
    ]);
  }

  componentDidMount() {
    this.props.init();
  }

  render() {
    return <NotFound {...this.props} />
  }

}

export default storeConnector(NotFoundContainer);
