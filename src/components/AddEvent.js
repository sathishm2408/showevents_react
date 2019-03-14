import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class AddEvent extends Component {
    addEvent(newEvent){
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/events',
            data:newEvent
        }).then(response=>{
            this.props.history.push('/');
        }).catch(err=>console.log(err));
    }

    onSubmit(e){
        const newEvent={
            eventName: this.refs.eventName.value,
            city: this.refs.city.value
        }

        this.addEvent(newEvent);
        e.preventDefault();
    }

    render() {
      return (
        <div>
             <br />
            <Link className="btn grey" to="/"> Back </Link>
            
            <h1>Add Meetup</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
                <input type="text" name="eventName" ref="eventName" />
                <label htmlFor="eventName">eventName</label>
            </div>    
            <div className="input-field">
                <input type="text" name="city" ref="city" />
                <label htmlFor="eventName">city</label>
            </div> 
            <input type="submit" value="save" className="btn" />
            </form>    
        </div>    
      );
    }
  }
  
  export default AddEvent;