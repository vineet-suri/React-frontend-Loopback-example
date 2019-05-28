import React from 'react';
import './App.css';
import SubmitForm from './components/SubmitForm';
import ListEvents from './components/ListEvents';
import { Layout, Header, Content, Navigation, Drawer } from 'react-mdl';
import { Redirect, Route, Link, HashRouter as Router } from 'react-router-dom'

function closeDrawer() {
  document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
}

const App = () => {
  return ( 
    <div className="App">
      <Router>
        <Layout fixedHeader>
          <Header title="All about events">
            <Navigation className="hide-on-sm">
                <Link to='/listevents'>List all events</Link>
                <Link to='/addevent'>Add a new event</Link>
            </Navigation>
          </Header>
          <Drawer title="All about events">
            <Navigation>  
                <Link to='/listevents' onClick={closeDrawer}>List all events</Link>
                <Link to='/addevent' onClick={closeDrawer}>Add a new event</Link>
            </Navigation>
          </Drawer>
          <Content>
              <div>
                  <Route exact path='/' render={() => <Redirect to='/listevents'/> } />
                  <Route exact path='/listevents' component={ListEvents} />
                  <Route exact path='/addevent' component={SubmitForm} />
              </div>
          </Content>
        </Layout>
      </Router>
    </div>
   );
}

 
export default App;
