import Application from './app';

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const app = new Application(port);

app.listen();