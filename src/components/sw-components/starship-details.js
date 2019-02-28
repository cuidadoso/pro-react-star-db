import React from 'react';

import { Record } from '../item-details';
import ItemDetails from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = ({
  itemId,
  swapiService: { getStarship, getStarshipImage }
}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field={'model'} label={'Model'} />
      <Record field={'length'} label={'Length'} />
      <Record field={'costInCredits'} label={'Cost'} />
    </ItemDetails>
  );
};

export default withSwapiService(StarshipDetails);
