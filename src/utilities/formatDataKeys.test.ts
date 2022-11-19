import formatDataKeys from './formatDataKeys';

const rawData = [
  {
    Province_State: 'Alabama',
    Country_Region: 'US',
    Last_Update: '2022-10-02 04:32:55',
    Lat: 32.3182,
    Long_: -86.9023,
    Confirmed: 1522135,
    Deaths: 20422,
    Recovered: null,
    Active: null,
    FIPS: 1,
    Incident_Rate: 31043.801121108016,
    Total_Test_Results: null,
    People_Hospitalized: null,
    Case_Fatality_Ratio: 1.3416681174797245,
    UID: 84000001,
    ISO3: 'USA',
    Testing_Rate: null,
    Hospitalization_Rate: null,
  },
  {
    Province_State: 'Alaska',
    Country_Region: 'US',
    Last_Update: '2022-10-02 04:32:55',
    Lat: 61.3707,
    Long_: -152.4044,
    Confirmed: 298178,
    Deaths: 1364,
    Recovered: null,
    Active: null,
    FIPS: 2,
    Incident_Rate: 40760.03526782358,
    Total_Test_Results: null,
    People_Hospitalized: null,
    Case_Fatality_Ratio: 0.4574448819161709,
    UID: 84000002,
    ISO3: 'USA',
    Testing_Rate: null,
    Hospitalization_Rate: null,
  },
];

describe('formatDataKeys', () => {
  it('should correctly format raw data', () => {
    const formattedData = formatDataKeys(rawData);
    expect(Object.keys(formattedData)).toContain('provinceState');
  });
});
