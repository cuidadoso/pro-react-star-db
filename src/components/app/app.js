import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from '../swapi-service-context';
import { DummySwapiService, SwapiService } from '../../services';
import ErrorBoundary from '../error-boundary';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

import './app.css';
import StarshipDetails from '../sw-components/starship-details';

export default class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService()
  };

  onServiceChage = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChage={this.onServiceChage} />
              <RandomPlanet />

              <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
              <Route path="/people" render={() => <h2>People</h2>} />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" component={StarshipPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
