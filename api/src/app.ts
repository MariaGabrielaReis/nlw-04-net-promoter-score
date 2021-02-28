import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import createConnection from "./database";
import { router } from "./routes";
import { AppError } from "./errors/AppError";

createConnection();
const app = express();

app.use(express.json());
app.use(router);

app.use((erro: Error, request: Request, response: Response, _next: NextFunction) => {
    if(erro instanceof AppError) {
        return response.status(erro.statusCode).json({
            message: erro.message
        });
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${erro.message}`
    })
});

export { app };
