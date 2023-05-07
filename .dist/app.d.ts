import { Application } from "express";
export default class App {
    port: number;
    app: Application;
    constructor(port: number | any);
    configureGraphQL(): void;
    listen(): void;
}
