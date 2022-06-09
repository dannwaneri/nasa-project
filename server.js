const app = require('./app');
const http = require('http')
const dotenv = require('dotenv');
const { loadPlanetsData } = require('./models/planets.model');
const {connectDB} = require('./db/connect')
const {loadLaunchesData} = require('./models/launches.model')

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);


dotenv.config({
  path: './configs/config.env'
});

//console.log(process.env.MONGO_URI)
async function startServer() {
  try {
    await connectDB(process.env.MONGO_URI)
    await loadPlanetsData();
    await loadLaunchesData();
  server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  } catch (err) {
    console.log(err)
  }
}
  startServer();