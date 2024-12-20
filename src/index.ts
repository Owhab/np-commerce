import express, {Express, Request, Response} from 'express';

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Hello World!'});
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


