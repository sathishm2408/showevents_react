import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class EventDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            details:''
        }
    }

    componentWillMount(){
        this.getEvent();
      }

    getEvent(){
        let eventId=this.props.match.params.id;
        console.log(eventId);
        axios.get('http://localhost:3000/api/events/'+eventId)
          .then(response=>{
            this.setState({details: response.data});
              //console.log(this.state);
          }).catch(err=>console.log(err));
      }

    onDelete(){
        let eventId=this.state.details.id;
        axios.delete('http://localhost:3000/api/events/'+eventId,)
        .then(response=>{
            this.props.history.push('/');
        }).catch(err=>console.log(err));
    }

    render() {
      return (
        <div>
            <br />
            <Link className="btn grey" to="/"> Back </Link>
            <h1>{this.state.details.eventName}</h1>
            <ul className="collection">
                <li className="collection-item">City:{this.state.details.city}</li>    
            </ul>

            <Link className="btn" to={'/events/edit/'+this.state.details.id}>
            Edit </Link>

            <button onClick={this.onDelete.bind(this)} className="btn red right"> Delete </button>
        </div>    
      );
    }
  }
  
  export default EventDetails;