"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyGraphQL = exports.router = void 0;
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
exports.router = express_1.default.Router();
class MyGraphQL {
    constructor() {
        const typeDefinitions = fs_1.default.readFileSync('./graphTypes.txt', { encoding: 'utf-8' });
        const resolver = {
            Query: {
                test: () => "This is test from graphQL"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2dyYXBocWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNENBQW9CO0FBQ3BCLHNEQUE4QjtBQUM5QixxREFBOEM7QUFHakMsUUFBQSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUV2QyxNQUFhLFNBQVM7SUFDbEI7UUFDSSxNQUFNLGVBQWUsR0FBRyxZQUFFLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkYsTUFBTSxRQUFRLEdBQUc7WUFDYixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLDJCQUEyQjthQUMxQztTQUNKLENBQUE7UUFFRCxjQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFBLDZCQUFXLEVBQUM7WUFDL0IsTUFBTSxFQUFFLGVBQWU7WUFDdkIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxpREFBaUQ7U0FDbkUsQ0FBQyxDQUFDLENBQUM7SUFFUixDQUFDO0NBQ0o7QUFoQkQsOEJBZ0JDO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQU4sY0FBTSxFQUFFLENBQUEifQ==