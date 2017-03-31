import {browserHistory} from 'react-router';

export const navigate = (url) => (
  browserHistory.push(url)
);

export const overrideAnchorClick = (e) => {
  navigate(e.target.href);
  e.preventDefault();
}
