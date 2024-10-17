# David Schwartz Official Page (Not Really)
https://davidschwartz.biz is the official page for David Schwartz.

## Server(Backend)
- Mongo/Mongoosejs
- Express.js
- Node.js
- Colors
- Nodemon
- Dotenv

### To Run:
touch .env
- add Environment variables for PORT=5000 and MONGO_URI=MONGO_URI=mongodb://localhost:27017/daveofficial
npm install
npm start

## Client(Frontend)
- React.js/Vite
- React-Router-Dom
- React-Bootstrap
- Axios

### To Run:
npm install
npm run dev

### Comments
- Application was a trial to get a Docker container up and running with images for Node, React, and MongoDB.
- Uses Caddy for reverse Proxy (not Successful yet. Need to add certificates to windows)
- Bugs in Api for adding users.
- You can test the api with the server running using /server/apiRouteTests/userRoutesTest.rest