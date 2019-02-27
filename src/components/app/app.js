import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boundary';
import { PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList } from '../sw-components';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();
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
        <div className="stardb-app">
          <Header />
          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList>{(item) => item.name}</PersonList>

          <StarshipList>{(item) => item.name}</StarshipList>

          <PlanetList>{(item) => item.name}</PlanetList>
          {/*<Row left={personDetails} right={starshopDetails} />*/}
          {/*{planet}*/}

          {/*<button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />

        <PeoplePage />*/}

          {/*<div className="row mb2">
            <div className="col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
              >
                {(item) => item.name}
              </ItemList>
            </div>
            <div className="col-md-6" />
          </div>

          <div className="row mb2">
            <div className="col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarships}
              >
                {(item) => (
                  <span>
                  {item.name} <button>!</button>
                </span>
                )}
              </ItemList>
            </div>
            <div className="col-md-6" />
          </div>*/}
        </div>
      </ErrorBoundary>
    );
  }
}
