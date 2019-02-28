import React from 'react';

import { Record } from '../item-details';
import ItemDetails from '../item-details';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PersonDetails = ({
  itemId,
  swapiService: { getPerson, getPersonImage }
}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field={'gender'} label={'Gender'} />
      <Record field={'eyeColor'} label={'Eye Color'} />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
