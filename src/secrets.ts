import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: '.env',

});

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
export const JWT_SECRET: string = process.env.JWT_SECRET!;

