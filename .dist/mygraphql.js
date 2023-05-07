"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyGraphQL = exports.router = void 0;
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
exports.router = express_1.default.Router();
class MyGraphQL {
    constructor() {
        const typeDefinitions = (0, graphql_1.buildSchema)(fs_1.default.readFileSync('./graphTypes.txt', { encoding: 'utf-8' }));
        const resolver = {
            test: () => "This is test from graphQL",
            submit: (argument) => {
                console.log(argument);
                return argument.myInput;
            }
        };
        exports.router.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
            schema: typeDefinitions,
            rootValue: resolver,
            graphiql: true // enables the GraphiQL web interface for testing
        }));
    }
}
exports.MyGraphQL = MyGraphQL;
module.exports = { MyGraphQL, router: exports.router };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlncmFwaHFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbXlncmFwaHFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQjtBQUNwQixzREFBOEI7QUFDOUIscURBQThDO0FBQzlDLHFDQUFxRDtBQUV4QyxRQUFBLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXZDLE1BQWEsU0FBUztJQUNsQjtRQUNJLE1BQU0sZUFBZSxHQUFrQixJQUFBLHFCQUFXLEVBQUMsWUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDOUcsTUFBTSxRQUFRLEdBQUc7WUFDYixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsMkJBQTJCO1lBQ3ZDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUE7WUFDM0IsQ0FBQztTQUNKLENBQUE7UUFFRCxjQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFBLDZCQUFXLEVBQUM7WUFDL0IsTUFBTSxFQUFFLGVBQWU7WUFDdkIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxpREFBaUQ7U0FDbkUsQ0FBQyxDQUFDLENBQUM7SUFFUixDQUFDO0NBQ0o7QUFsQkQsOEJBa0JDO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQU4sY0FBTSxFQUFFLENBQUEifQ==