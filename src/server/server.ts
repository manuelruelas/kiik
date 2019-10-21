import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import router from '../router';
import mongoose = require('mongoose');

export default class Server {
    public app: express.Application;
    public port: number;
    constructor(port: number) {
        this.port = port;
        this.app = express();
    }

    static init(port: number) {
        return new Server(port);
    }
    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

    private initMongo() {
        mongoose.connect('mongodb://localhost:27017/kiik', { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => {
            throw err;
        });
    }
    start(callback: () => void) {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(router);
        this.initMongo();
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
}