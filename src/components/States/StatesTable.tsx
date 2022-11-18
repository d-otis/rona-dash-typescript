import React from 'react';
import {
  stateColumns,
  statePlaceholderData,
  State,
} from '../../utilities/states';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import camelCase from 'camelcase';

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

const TableRow = ({ stateData }: { stateData: State }): JSX.Element => {
  const { provinceState, lastUpdate, confirmed, deaths } = stateData;
  return (
    <tr>
      <td>{provinceState}</td>
      <td>{lastUpdate}</td>
      <td>{confirmed}</td>
      <td>{deaths}</td>
    </tr>
  );
};

// TODO: can this type be pulled out and repeated?
const TableBody = ({ data }: { data: State[] }): JSX.Element => {
  return (
    <tbody>
      {data.map((state: State) => (
        <TableRow stateData={state} />
      ))}
    </tbody>
  );
};

const StatesTable = (): JSX.Element => {
  const formattedData = statePlaceholderData
    .map(state => Object.entries(state).map(s => [camelCase(s[0]), s[1]]))
    .map(x => Object.fromEntries(x));
  return (
    <Container>
      <h1>U.S. States</h1>
      <Table hover striped>
        <TableHeader />
        <TableBody data={formattedData} />
      </Table>
    </Container>
  );
};

export default StatesTable;
