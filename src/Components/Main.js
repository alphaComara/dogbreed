import React, { Component } from 'react';
 import { Switch, Route } from 'react-router-dom';
 
 // Our all component files
 import ListDog from './ListDog';
 import AddDog from '../Components/AddDog';
 import EditDog from '../Components/EditDog';
 
 class Main extends Component {
     render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={ListDog} />
                    <Route path='/list' component={ListDog} /> 
                    <Route path='/adddogs' component={AddDog} />
                    <Route path='/editdogs/:id' component={EditDog} />
                </Switch>
            </main>
        );
    }
 }

export default Main;