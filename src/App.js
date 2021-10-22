
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import BookNow from './feed/BookNow';
// import FAQs from './feed/FAQs';

import PeopleBehindThis from './feed/PeopleBehindThis';
import WhatWeOffer from './feed/WhatWeOffer';
import ContactUs from './feed/ContactUs';
// import DonationInfo from './components/DonationInfo';
import HowWeWork from './components/HowWeWork';
// import Navbar from './components/Navbar';
import Home from './feed/Home';
import BookNow from './feed/BookNow';
// import PeopleBehindThis from './components/PeopleBehindThis';

function App() {
  return (
    <>
    <div >
      <Router>

      <Navbar/>
      <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/peoplebd" component={PeopleBehindThis}/>
      <Route path="/howwework" component={HowWeWork}/>
      <Route path="/whatweoffer" component={WhatWeOffer}/>
      <Route path="/contactUs" component={ContactUs}/>
      <Route path="/booknow" component={BookNow}/>

      </Switch>
     </Router>
    </div>
    </>
  );
}

export default App;
