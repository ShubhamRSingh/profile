import Header from "./components/Header";
import Home from "./components/Home";
import ClientsHandled from "./components/ClientsHandled";
import Experience from "./components/Experience";
import Others from "./components/Others";
import Projects from "./components/Projects";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const companyDetails = [
  {
      id: "1",
      name: 'Powerweave Software Services Pvt. Ltd.',
      location: 'Mumbai',
      position: 'Front-End Developer',
      siteUrl: 'https://www.powerweave.com/',
      tenureStart: 'July 2019',
      tenureEnd: 'Present',
      responsibilties: ['Creating E-commerce websites for US based clients.','Maintenance of corporate web sites.']
  },
  {
      id: "2",
      name: 'CreativeLand Asia Pvt. Ltd.',
      location: 'Mumbai',
      position: 'Front-End Developer',
      siteUrl: 'http://creativelandasia.com/',
      tenureStart: 'June 2016',
      tenureEnd: 'June 2019',
      responsibilties: ['Created corporate web sites, campaign websites and maintenance of corporate sites like Mercedes and MTS.','Developed emailers and html5 ad banners for Mercedes, Dominos, United colors of Benetton and Godrej, Taj, , Narendra Modi, Government of India.']
  },
  {
      id: "3",
      name: 'GlueLagoon Interactive',
      location: 'Mumbai',
      position: 'Front-End Developer',
      siteUrl: 'https://www.gluelagoon.com/',
      tenureStart: 'November 2015',
      tenureEnd: 'June 2016',
      responsibilties: ['Developed and designed new web layouts and responsive sites.','Responsible for quality assurance of finished websites.']
  }
  
]

function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/experience" render={(props) => (<Experience compnyDetails={companyDetails} {...props}/>)} />
          <Route path="/projects" component={Projects} />
          <Route path="/clients-handled" component={ClientsHandled} />
          <Route path="/others" component={Others} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;