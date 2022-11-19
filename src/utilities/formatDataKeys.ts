import { State } from './states';
import camelCase from 'camelcase';

export default function formatDataKeys(rawData: object[]): State[] {
  return rawData
    .map(state => Object.entries(state).map(s => [camelCase(s[0]), s[1]]))
    .map(x => Object.fromEntries(x));
}
