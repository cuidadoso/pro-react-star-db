import React, { Component } from 'react';

import './item-details.css';
import ErrorButton from '../error-button';
import Spinner from '../spinner';

const Record = ({ field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{field}</span>
    </li>
  );
};

export {
  Record
}

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem = () => {
    this.setState({
      loading: true
    });
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
        loading: false
      });
    });
  };

  render() {
    const { item, image, loading } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = item;

    const spinner = loading ? <Spinner /> : null;

    return (
      <div className="person-details card">
        <img className="person-image" src={image} alt="character" />

        <div className="card-body">
          <h4>
            {name}
          </h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return child;
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
