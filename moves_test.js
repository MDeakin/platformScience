Feature('Movement of the application');
// The bulk of tests are in Postman, this section was added afterwards to demonstrate that with time, I could add similar in cudeceptJS format

Scenario('Sends example request from test', ({ I }) => {
    I.sendPostRequest('/v1/cleaning-sessions', { "roomSize": [10, 10], "coords": [0,0], "patches": [], "instructions": "NENENEEENNWWNNS"});
});
