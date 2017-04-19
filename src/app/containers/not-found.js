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

// takes values from the redux store and maps them to props
const mapStateToProps = state => ({
  //propName: state.data.specificData
});

// binds the result of action creators to redux dispatch, wrapped in callable functions
const bindActionsToDispatch = dispatch => ({
  setPageMeta: (meta) => { dispatch(setPageMeta(meta)) }
});

const mergeAllProps = (state, actions) => ({
    init: () => actions.setPageMeta(pageMeta),
    title: "Page Not Found",
    subtitle: "Sorry Not Sorry"
  })

const storeConnector = connect(
  mapStateToProps, 
  bindActionsToDispatch, 
  mergeAllProps
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
