import React from 'react';

import { Container, Table } from './styles';

function WeatherTable() {
  return (
      <Container>
          <h2>Capitais</h2>
          <Table>
            <thead>
                <th>Min</th>
                <th>Max</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td>18°</td>
                    <td>27°</td>
                    <td>Rio de Janeiro</td>
                </tr>
                <tr>
                    <td>18°</td>
                    <td>27°</td>
                    <td>Rio de Janeiro</td>
                </tr>
                <tr>
                    <td>18°</td>
                    <td>27°</td>
                    <td>Rio de Janeiro</td>
                </tr>
                <tr>
                    <td>18°</td>
                    <td>27°</td>
                    <td>Rio de Janeiro</td>
                </tr>
            </tbody>
          </Table>
      </Container>
  );
}

export default WeatherTable;