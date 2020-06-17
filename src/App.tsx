import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import {Layout} from "./components/Layout";
import {TestForm} from "./components/TestForm";
import {Counter} from "./components/Counter";
import {UsersView} from "./components/UsersView";
import {Wpfui} from "./components/Wpfui";

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Route render={({location}) => (
                <Layout>
                    <Link to={'/'}>Root</Link>
                    <Link to={'/users'}>Users</Link>
                    <Link to={'/users/1'}>User 1</Link>
                    <Link to={'/counter'}>Counter</Link>
                    <Link to={'/wpf-ui'}>wpf-ui</Link>
                    {/*<AnimatePresence exitBeforeEnter initial={false}>*/}
                        {/*<Switch location={location} key={location.pathname}>*/}
                            <Route exact path={'/'} component={TestForm}/>
                            <Route exact path={'/users/:id'} render={() => (<div style={{color: 'red'}}>hello</div>)}/>
                            <Route exact path={'/users'} component={UsersView}/>
                            <Route exact path={'/counter'} component={Counter}/>
                            <Route exact path={'/wpf-ui'} component={Wpfui}/>
                        {/*</Switch>*/}
                    {/*</AnimatePresence>*/}
                </Layout>
            )}/>
        </BrowserRouter>
    );
}

