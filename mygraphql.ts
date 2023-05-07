import fs from 'fs';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, GraphQLSchema } from 'graphql';

export const router = express.Router();

export class MyGraphQL {
    constructor() {
        const typeDefinitions: GraphQLSchema = buildSchema(fs.readFileSync('./graphTypes.txt', { encoding: 'utf-8' }))
        const resolver = {
            test: () => "This is test from graphQL",
            submit: (argument) => {
                console.log(argument);
                return argument.myInput
            }
        }

        router.use('/graphql', graphqlHTTP({
            schema: typeDefinitions,
            rootValue: resolver,
            graphiql: true // enables the GraphiQL web interface for testing
        }));

    }
}

module.exports = { MyGraphQL, router }