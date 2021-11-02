# Platform Science code test
Tests a robotic hoover application.
User defines the room size, starting position, dirt patch locations, and the route. The application responds with the number of dirt patches cleaned and the ending position.

Test Author: Matt Deakin
https://github.com/MDeakin

Original code test:
https://bitbucket.org/platformscience/pltsci-sdet-assignment/src/main/

You must spin up the service locally using the instructions contained in the bitbucket repo in order to proceed.

# API Documentation:
- https://documenter.getpostman.com/view/25974/UVByKWTo
# Test report:
- https://docs.google.com/spreadsheets/d/18Hgi1HyYOJaaPA-Qw6686-jNEwTLGRlTF4xtzY184uU/edit?usp=sharing
# Running tests via Postman:
- Download the current version of Postman (skip if you already have it):
  - https://www.postman.com/downloads/
- Import the test environment (required):
  - https://go.postman.co/workspace/My-Workspace~0df1e0c7-a97a-477e-88a5-713e79e41ba0/environment/25974-09ffa6f2-284d-4c0f-9eb2-aeabadf9dd7f
- Import the 'roboHoover' collection:
  - https://go.postman.co/workspace/My-Workspace~0df1e0c7-a97a-477e-88a5-713e79e41ba0/collection/25974-3c7a0fd0-e1f6-4b45-8e73-6c9dfb097183
- Tests are built in to each request and will be run each time a request is sent.
- Run the entire collection by:
  - Opening the Postman collection runner by clicking 'runner' in the bottom section of the app, then selecting the 'roboHoover' collection
  - Selecting 'roboHoover' from your list of collections, then clicking the 'run' button in the toolbar
  - You can find help using the collection runner here:
    - https://learning.postman.com/docs/running-collections/intro-to-collection-runs/

# CodeceptJS sandbox learning exercise (you can skip this, I just included it to satisfy my curiosity)
Spinning up codecetJS in order to learn the framework

# Requirements:
- Node
- Axios

# Installation instructions:
```
npx create-codeceptjs .
```
# Build:
```
npx codeceptjs init
```
# Run your test:
```
npx codeceptjs run
```

# Other:
Generate type definitions for auto-completion
```
npx codeceptjs def
```
Create first test
```
npx codeceptjs gt
```