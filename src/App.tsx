import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
      <BrowserRouter>
        <Route render={({location}) => (
            <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                    <Route exact path={'/'} render={() => (<div style={{color: 'red'}}>hello</div>)} />
                    <Route exact path={'/users/:id'} render={() => (<div style={{color: 'red'}}>hello</div>)} />
                </Switch>
            </AnimatePresence>
        )}/>
      </BrowserRouter>
  );
}

export default App;
