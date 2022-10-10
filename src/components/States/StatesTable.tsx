import React from 'react';
import { stateColumns, statePlaceholderData } from '../../utilities/states';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const TableHeader = (): JSX.Element => {
  return (
    <thead>
      <tr>
        {stateColumns.map(col => {
          return <th key={col.name}>{col.name}</th>;
        })}
      </tr>
    </thead>
  );
};

const TableBody = (): JSX.Element => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  );
};

const StatesTable = (): JSX.Element => {
  return (
    <Container>
      <h1>U.S. States</h1>
      <Table hover striped>
        <TableHeader />
      </Table>
    </Container>
  );
};

export default StatesTable;
