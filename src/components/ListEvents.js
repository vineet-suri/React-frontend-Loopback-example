import React, { Component } from 'react';
import { Spinner } from 'react-mdl';

const style = {
    margin: 'auto',
    top:0,
    bottom:0,
    right:0,
    left:0,
    position:'fixed'
}

class ListEvents extends Component {
    state = { events: [] , isLoaded: false }

    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        //fetch('http://e0aa048f.ngrok.io/events')
        fetch('http://localhost:4000/events')
            .then(res => {
            return res.json();
            }).then(resData => {
            this.setState({events: resData, isLoaded: true});
            })
        }

    render() { 
        const eventList = this.state.events.map(evt => {
            return (
              <ul>{evt.name}{" : "}{evt.start_date}</ul>
            );
          })

        return ( 
        <div>
            <div>List of events(from event list page)</div> 
            <div>{!this.state.isLoaded && <Spinner style={style}/>}{eventList}</div>
        </div>
        );
    }
}
 
export default ListEvents;