const app = require('./app');
const http = require('http')
const dotenv = require('dotenv');
const { loadPlanetsData } = require('./models/planets.model');
const {connectDB} = require('./db/connect')
const {loadLaunchData} = require('./models/launches.model')

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);


dotenv.config({
  path: './configs/config.env'
});

async function startServer() {
  try {
    await connectDB(process.env.MONGO_URI)
    await loadPlanetsData();
    await loadLaunchData();
  server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  } catch (err) {
    console.log(err)
  }
}
  startServer();