import React from 'react';

import { Record } from '../item-details';
import ItemDetails from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({
  itemId,
  swapiService: { getPlanet, getPlanetImage }
}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field={'population'} label={'Population'} />
      <Record field={'rotationPeriod'} label={'Rotation Period'} />
      <Record field={'diameter'} label={'Diameter'} />
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);
