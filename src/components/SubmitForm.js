import React, { Component } from 'react';

class SumitForm extends Component {

    state = { 'name' : '' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.onSubmit();
    }

    onSubmit = () => {

        let postData = {
           id: 50,
           name: this.state.name,
           start_date: new Date,
           end_date: new Date
         }
         //fetch('http://e0aa048f.ngrok.io/events', {
         fetch('http://localhost:4000/events', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify(postData)
         }).then(resData => {
           alert('your event has been added successfully.')
         }).catch(err => console.log(err))
       }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.onFormSubmit} >
                <div>
                    <label>Enter new event name:</label>
                    <input type="text" 
                            onChange={ e =>this.setState({ name :e.target.value})}
                                 />
                </div>
                </form>
            </div>
         );
    }
}
 
export default SumitForm;