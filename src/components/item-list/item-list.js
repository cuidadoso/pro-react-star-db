import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {
  state = {
    itemleList: null
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemleList) => {
      this.setState({ itemleList });
    });
  }

  renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);

      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  render() {
    const { itemleList } = this.state;
    if (!itemleList) {
      return <Spinner />;
    }
    const items = this.renderItems(itemleList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}
