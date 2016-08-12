import Helmet from 'react-helmet';

export const addMeta = Component => ({meta=[], title="", ...props}) => (
    <div>
        <Helmet title={title} meta={meta} />
        <Component {...props} />
    </div>
)