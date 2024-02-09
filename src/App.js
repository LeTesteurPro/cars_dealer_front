import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Index2 from './pages/Index2';
import About from './pages/About';
import Service from './pages/Service';
import Booking from './pages/Booking';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import C404 from './pages/C404';
import Login from './pages/Login';
import Annonce from './pages/Annonce';
import Favoris from './pages/Favoris';

import './css/bootstrap.min.css'; // Charger les styles Bootstrap
import './lib/animate/animate.min.css'; // Charger les styles d'animation
import './lib/owlcarousel/assets/owl.carousel.min.css'; // Charger les styles Owl Carousel
import './lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'; // Charger les styles Tempus Dominus
import './css/style.css'; // Charger votre propre feuille de style


function App() {
  return (
    <BrowserRouter>
     <Helmet>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      </Helmet>
      <Switch>
        <Route exact path="/" component={Index2} />
        <Route path="/index2" component={Index2} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/booking" component={Booking} />
        <Route path="/annonce" component={Annonce} />
        <Route path="/favoris" component={Favoris} />
        <Route path="/team" component={Team} />
        <Route path="/testimonial" component={Testimonial} />
        <Route path="/c404" component={C404} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
