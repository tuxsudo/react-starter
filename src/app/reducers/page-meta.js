export const RECEIVE_PAGE_META = "RECEIVE_PAGE_META";

export default (state = {}, {type, payload}) => {
  switch(type) {
    case RECEIVE_PAGE_META: {
      const {title, meta} = payload;
      return {title, meta}
    }

    default:
      return state;
  }
}

export const selectPageMeta = (state) => state;
export const selectPageTitle = (state) => state.title;
export const selectMetaTags = (state) => state.meta;
