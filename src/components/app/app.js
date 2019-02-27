import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from '../swapi-service-context';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundary from '../error-boundary';
import {
  PersonDetails,
  PersonList,
  PlanetDetails,
  PlanetList,
  StarshipDetails,
  StarshipList
} from '../sw-components';

import './app.css';
import Row from '../row';
import ErrorButton from '../error-button';

export default class App extends Component {
  swapiService = new DummySwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiService;
    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field={'gender'} label={'Gender'} />
        <Record field={'eyeColor'} label={'Eye Color'} />
      </ItemDetails>
    );
    const starshopDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field={'model'} label={'Model'} />
        <Record field={'length'} label={'Length'} />
        <Record field={'costInCredits'} label={'Cost'} />
      </ItemDetails>
    );

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />

          <ErrorButton />

          <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />
          <Row left={<StarshipList />} right={<StarshipDetails itemId={9} />} />
          <Row left={<PlanetList />} right={<PlanetDetails itemId={5} />} />

          {/*<PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList />

          <StarshipList />

          <PlanetList />*/}

          {/*<button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />*/}

        </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
