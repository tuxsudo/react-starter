import {RECEIVE_PAGE_META} from '../reducers/page-meta';

export const setPageMeta = ({title, meta}) => ({
  type: RECEIVE_PAGE_META,
  payload: {title, meta}
});
