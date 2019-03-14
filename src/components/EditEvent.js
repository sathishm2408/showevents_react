import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class EditEvent extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            eventName:'',
            city:''
        }

        this.handleInputChange=this.handleInputChange.bind(this);
    }
   
   componentWillMount(){
       this.getEventDetails();
   }

   getEventDetails(){
    let eventId=this.props.match.params.id;
    axios.get('http://localhost:3000/api/events/'+eventId)
    .then(response=>{
        this.setState({
            id: response.data.id,
            eventName: response.data.eventName,
            city: response.data.city
        },()=>{
            console.log(this.state);
        });
    }).catch(err=>console.log(err));

   }

   editEvent(newEvent){
    axios.request({
        method:'put',
        url:'http://localhost:3000/api/events/'+this.state.id,
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

        this.editEvent(newEvent);
        e.preventDefault();
    }

    handleInputChange(e){
        const target= e.target;
        const value =target.value;
        const name= target.name;

        this.setState({
            [name]: value
        });
    }
   
    render() {
      return (
        <div>
             <br />
            <Link className="btn grey" to="/"> Back </Link>
            
            <h1>Edit Meetup</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
                <input type="text" name="eventName" ref="eventName" value={this.state.eventName} 
                onChange={this.handleInputChange}/>
                <label htmlFor="eventName">eventName</label>
            </div>    
            <div className="input-field">
                <input type="text" name="city" ref="city" value={this.state.city}
                onChange={this.handleInputChange}/>
                <label htmlFor="eventName">city</label>
            </div> 
            <input type="submit" value="save" className="btn" />
            </form>    
        </div>    
      );
    }
  }
  
  export default EditEvent;