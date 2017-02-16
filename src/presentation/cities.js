import React from 'react';
import City from './city'
import { Grid, Row} from 'react-bootstrap';

export default function Cities(props) {
  return (
    <Grid>
      <Row className="show-grid">
        {
          props.citiesList.cities.map((city, key) => <City city={city} key={city.slug} />)
        }
      </Row>
    </Grid>
  );
}
