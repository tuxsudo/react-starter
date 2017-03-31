import React from 'react';


export const addServerSideResolve = (beforeServerResponse) => (Component) => {

    return React.createClass({ // eslint-disable-line
        statics: {
            onServer: function(props, store) {
                return beforeServerResponse ? beforeServerResponse(props, store) : null;
            }
        },

        render: function() {
            return <Component {...this.props} />
        }
    });
};

export default addServerSideResolve;
