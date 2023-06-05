import fastify, {RequestGenericInterface} from "fastify";
import dotenv from 'dotenv';
import {GetGHProxySecureOptions, GetGHProxyOptions } from "./proxy";
import cors from '@fastify/cors';
import fastifyHttpProxy from "@fastify/http-proxy";
import  {MockData}  from "./db";

dotenv.config();

const server = fastify()

let proxyOptsSecure = GetGHProxySecureOptions(process.env.GH_ACCESS_TOKEN)
server.register(fastifyHttpProxy, proxyOptsSecure)

let proxyOpts = GetGHProxyOptions()
server.register(fastifyHttpProxy, proxyOpts)


//setup CORS - this will be necessary for API requests from a VUE or any SPA app 
server.register(cors, {
    origin: "*"
})

server.get('/repository', async (request, reply) => {
  return MockData;
})

//If you want to pass a parameter like /Repository/1 setup an interface
//for the parameter
interface requestId extends RequestGenericInterface {
    Params: {
      id: string
    }
}
//Now in the .get make sure you stereotype the request <requestId> and
//then you can get the parameter like in the second line with const
//thus /Repository/1will pull 1 out of the constant
server.get<requestId>('/repository/:id', async (request, reply) => {
    const { id } = request.params;
    const repo = MockData.find(element => element.id == id);
    if (repo) {
        return repo;
    } else {
        let errObj = {error: `The Repository with Repository id = ${id} was not found`};
        reply.code(404).send(errObj);
        return
    }
  })


//If you want to pass a parameter like Repository/1 setup an interface
//for the parameter
interface requestQry extends RequestGenericInterface {
    Querystring: {
      id: string,
      dec: string
    }
}
//Now in the .get make sure you stereotype the request <requestId> and
//then you can get the parameter like in the second line with const
//thus Repository/1 will pull 123 out of the constant
server.get<requestQry>('/search', async (request, reply) => {
    const { id,dec} = request.query;
    
    if (id){
        const repo = MockData.find(element => element.id == id);
        if (repo) {
            return [repo];
        } else {
            let errObj = {error: `The Repository with Repository id = ${id} was not found`};
            reply.code(404).send(errObj);
            return
        }
    }else if (dec){
        const repo= MockData.filter(element => element.html_url == dec);
        if (dec.length > 0) {
            return repo;
        } else {
            let errObj = {error: `The no Repositories were found with Repository description = ${dec} was not found`};
            reply.code(404).send(errObj);
            return
        }
    }else {
        let errObj = {error: "The /search API requires an id or description query parameter"};
        reply.code(400).send(errObj);
        return
    }
  })

server.listen({ port: 9500 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})


//If you want to pass a parameter like /Repository/1 setup an interface
//for the parameter
interface requestId extends RequestGenericInterface {
    Params: {
      id: string
    }
}