import {Request, Response} from "express";
import * as express from 'express';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/login')
    .post(loginRoute);

const RSA_PRIVATE_KEY = fs.readFileSync('.demos/private.key');

export function loginRoute(req: Request, res: Response) {
    const email = req.body.email;
    const password = req.body.password;

    if (validateEmailAndPassword()) {
        const userId = findUserIdForEmail(email);

        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 120,
            subject: userId
        })

        res.status(200).json({
            idToken: jwtBearerToken,
            expiresIn: 120
        })
    } else {
        res.sendStatus(401);
    }
}