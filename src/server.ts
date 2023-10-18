import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000; // Use port from environment variable or default to 3000

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

app.get('/', (_req: Request, res: Response) => { // Note the underscore and the type annotations
    res.send('Tarot Server is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
