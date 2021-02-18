import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todo from "./views/Todo/Todo";

const App = ()=>{
        return (
            <React.Fragment>
                    <BrowserRouter>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route exact path="/" component={Todo}/>
                            </Switch>
                        </Suspense>
                    </BrowserRouter>
            </React.Fragment>
        );
    }


export default App;
