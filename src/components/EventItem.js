import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class EventItem extends Component {
    constructor(props){
        super(props);
        this.state={
            item:props.item
        }
    }

    render() {
      return (
        <li className="collection-item">
            <Link to={'/events/'+this.state.item.id}>
            {this.state.item.eventName}
            </Link>
        </li>
      );
    }
  }
  
  export default EventItem;