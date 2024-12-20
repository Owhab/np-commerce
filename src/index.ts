import express, {Express, Request, Response} from 'express';
import { PORT } from './secrets';
import RootRouter from './routes';

const app: Express = express();
app.use(express.json());

app.use('/api', RootRouter);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});


