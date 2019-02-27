import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row';

import './people-page.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boundary';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
