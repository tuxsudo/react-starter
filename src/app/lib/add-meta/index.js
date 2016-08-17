import Helmet from 'react-helmet';

export const addMeta = Component => ({meta=[], metaTitle="", ...props}) => (
    <div>
        <Helmet title={metaTitle} meta={meta} />
        <Component {...props} />
    </div>
)