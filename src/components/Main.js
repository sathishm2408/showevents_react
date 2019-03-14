import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Events from './Events'
import About from './About'
import EventDetails from './EventDetails'
import AddEvent from './AddEvent'
import EditEvent from './EditEvent';

class Main extends Component {
    
    render() {
      return (
        <main>
            <Switch>
             <Route exact path="/" component={Events}/>
             <Route path="/about" component={About}/>
             <Route path="/events/add" component={AddEvent}/>
             <Route path="/events/edit/:id" component={EditEvent}/>
             <Route path="/events/:id" component={EventDetails}/>
                         
            </Switch>
        </main>
      );
    }
  }
  
  export default Main;