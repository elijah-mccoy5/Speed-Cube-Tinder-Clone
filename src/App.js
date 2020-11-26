import './App.css';
import Header from './components/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TinderCard from './components/tindercard';
import Buttons from './components/buttons';
import Chats from './components/chats';
import ChatScreen from './components/chats/chatscreen'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header  backButton="/chat"/>
           <ChatScreen/>
          </Route>
          <Route path="/chat">
             <Header backButton="/"/>
             <Chats/>
          </Route>
          <Route path="/">
          <Header />
           <TinderCard/>
            <Buttons/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
