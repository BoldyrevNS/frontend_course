import React from 'react';

import { BrowserHistory } from 'history';
import { Router } from 'react-router-dom';

type Props = {
  history: BrowserHistory;
  children: React.ReactNode;
};

const CustomRouter: React.FC<Props> = ({ history, children }) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router navigator={history} location={state.location} navigationType={state.action}>
      {children}
    </Router>
  );
};

export default CustomRouter;
