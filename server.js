/**
 * copyright 2019 (C) ELAIYA
 *
 * created on: Aug, 2019
 * @author: Elaiya Raja E
 *
 * ---------------------------------------------------------
 * Revision History (Release 1.0.0)
 * ---------------------------------------------------------
 * VERSION | AUTHOR - DATE       | DESCRIPTION OF CHANGE
 * ---------------------------------------------------------
 * 1.0     | ELAIYA - 13-08-2019 | Initial Creation
 * ---------------------------------------------------------
 *
 */
//Libraries
import {ApolloServer} from "apollo-server";
import Redis from 'ioredis';

//GraphQl Files
import {typeDefs} from './schema';
import {resolvers} from './resolvers';

const PORT = 5000;
const redis = new Redis();

const server = new ApolloServer({typeDefs, resolvers, context:{redis}});
server.listen(PORT).then(r => console.log(`server ready at ${PORT}`));

