import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import {Layout} from "./components/Layout";
import { TestForm } from "./components/TestForm";
import {Counter} from "./components/Counter";

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Route render={({location}) => (
                <Layout>
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <Switch location={location} key={location.pathname}>
                            <Route exact path={'/'} component={TestForm}/>
                            <Route exact path={'/users/:id'} render={() => (<div style={{color: 'red'}}>hello</div>)}/>
                            <Route exact path={'/counter'} component={Counter}/>
                        </Switch>
                    </AnimatePresence>
                </Layout>
            )}/>
        </BrowserRouter>
    );
}
