import React, { Component } from 'react';
import axios from 'axios';
import EventItem from './EventItem';

class Events extends Component {
  constructor(){
    super();
    this.state={
      events:[]
    }
  }

  componentWillMount(){
    this.getEvents();
  }

  getEvents(){
    axios.get('http://localhost:3000/api/events')
      .then(response=>{
        this.setState({events: response.data})
          //console.log(this.state);
      })
  }

  render() {
    const eventItems = this.state.events.map((event,i)=>{
      return(
        <EventItem key={event.id} item={event} />
      )
    })
    return (
      <div>
      <h1>Events</h1> 
      <ul className="collection">
        {eventItems}
      </ul> 
      </div>
    );
  }
}

export default Events;
