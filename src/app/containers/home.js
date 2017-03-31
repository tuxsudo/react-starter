import React, {Component} from 'react';
import LandingView from '../views/LandingView';
import { connect } from 'react-redux';
import { setPageMeta } from '../actions/page-meta';

const pageMeta = {
  title: "Homepage, yo!!",
  tags: [
      {"name": "description", "content": "A React Starter"},
      {"property": "og:type", "content": "article"}
  ]
};


const storeConnector = connect(
  undefined,
  {setPageMeta},
  (store, actions) => ({
    init: () => actions.setPageMeta(pageMeta),
    title: "React/Redux Starter",
    subtitle: "for isounimorphic applications",
    hero: "http://lorempixel.com/1200/500/",
    cta: "https://github.com/tuxsudo/react-starter"
  })
);



class HomeContainer extends Component {

  static onServer(props, store) {
    return store.dispatch(setPageMeta(pageMeta))
  }

  componentDidMount() {
    this.props.init();
  }

  render() {
    return <LandingView {...this.props} />
  }

}

export default storeConnector(HomeContainer);
