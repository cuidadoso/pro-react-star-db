import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from '../swapi-service-context';
import { DummySwapiService, SwapiService } from '../../services';
import ErrorBoundary from '../error-boundary';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

import './app.css';

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
          <div className="stardb-app">
            <Header onServiceChage={this.onServiceChage} />
            <RandomPlanet />
            <PeoplePage />
            <StarshipPage />
            <PlanetPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
