import React, {Component} from 'react';

export const appendLifeCycle = ({
  componentWillMount,
  componentDidMount,
  componentWillReceiveProps,
  shouldComponentUpdate,
  componentWillUpdate,
  componentDidUpdate,
  componentWillUnmount
}) => (LambdaComponent) => (

  class AppendedLifeCycle extends Component {

    componentWillMount() {
      return componentWillMount && componentWillMount.call(this);
    }

    componentDidMount() {
      return componentDidMount && componentDidMount.call(this);
    }

    componentWillReceiveProps(nextProps) {
      return componentWillReceiveProps && componentWillReceiveProps.call(this, nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
      return shouldComponentUpdate
        ? shouldComponentUpdate.call(this, nextProps, nextState)
        : true;
    }

    componentWillUpdate(nextProps, nextState) {
      return componentWillUpdate && componentWillUpdate.call(this, nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
      return componentDidUpdate && componentDidUpdate.call(this, prevProps, prevState);
    }

    componentWillUnmount() {
      return componentWillUnmount && componentWillUnmount.call(this);
    }

    render() {
      return <LambdaComponent {...this.props} />
    }

  }
)

export default appendLifeCycle;
