import React from 'react';
import { Col } from 'react-bootstrap';

export default function City(props) {
  return (
    <Col xs={6} className="text-center">
      <div className="bg-info cityBlock">
        <label className="h3 clear-margin">{props.city.name}</label>
      </div>
    </Col>
  )
}
