import express, { Application } from "express"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { MyGraphQL, router } from "./mygraphql"

dotenv.config()

export default class App {
    port: number
    app: Application
    constructor(port: number | any) {
        this.port = port;
        this.app = express();
        this.app.use(express.json());
        this.configureGraphQL();
        this.app.use(router);
    }

    configureGraphQL() {
        new MyGraphQL()
    }

    listen() {
        this.app.listen(this.port, () => console.log('app is running on port ' + this.port))
    }

}