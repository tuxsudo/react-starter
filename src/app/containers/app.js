import { connect } from 'react-redux';
import { init as initNav } from '../actions/site-nav.js';
import AppLayout from '../components/AppLayout';
import mountLoad from '../lib/mount-load';
import { wrap } from '../lib/ss-resolve';


// Inject Async Data Loading...

// This higher-order function which takes a regular ReactClass
// and super-imposes it lifecycle `componentDidMount` functionality.
// Useful when a component needs props but the app can't provide them
// until `componentDidMount`.
// This allows components be written agnostically of app limitations.

// tl;dr: `mountLoad` will call the `onLoad` prop when `componentDidMount` occurs
// and potentially waits for it to resolve before showing its `children`
const LazyApp = mountLoad(AppLayout);


// callback used server-side to resolve data before responding
const resolveOnServer = (props, store) => store.dispatch(initNav());

// Higher-order function takes a regular react class, returns a regular react
// class but superimposes it with a static method that a corresponding
// module looks for on server before rendering...
const SSResolvedComponent = wrap(LazyApp, resolveOnServer)




// Create args for the react-redux `connect` function
// https://github.com/reactjs/react-redux/blob/master/docs/api.md

// argument 1 of react-redux `connect` maps store data to props
const mapStateToProps = ({nav}) => ({nav});

// argument 2 of react-redux `connect` maps actions to dispatch to props
const mapDispatchToProps = (dispatch) => ({
    onLoad: () => dispatch( initNav() )
});

// arg 3 lets you define how the props from
// mapStateToProps, mapDispatchToProps and incoming from react-router are merged
// you can statically inject props here as well

// in this file, we don't actually need this functionality,
// but if we did, it would look like the following and we'd pass it as the
// third argument in `connect`:
/*
const mergeProps = (state, actions, own) => ({
    ...state, ...actions, ...own, // this merges are 3 prop sources

    // this pretends we need to pass in a route parameter
    // to an action we defined in `mapStateToProps`
    onLoad: () => actions.onLoad(own.params)
})
*/


// Export the resulting component...
export default connect(mapStateToProps, mapDispatchToProps)( SSResolvedComponent );
