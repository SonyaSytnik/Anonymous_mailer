import fastify from 'fastify';
import pino from 'pino';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { pinoConfig } from './config/pino.config';
import { mailerRoutes } from './modules/mailer/mailer.routes';


dotenv.config();

const logger = pino(pinoConfig);
const server = fastify({ logger });
const port = +process.env.PORT || 8080;

server.register(require('fastify-formbody'));

server.register(require('fastify-swagger'), {
  routePrefix: '/',
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'user', description: 'User related end-points' },
      { name: 'code', description: 'Code related end-points' }
    ],
    definitions: {
      User: {
        type: 'object',
        required: ['id', 'email'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          email: {type: 'string', format: 'email' }
        }
      }
    },
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'apiKey',
        in: 'header'
      }
    }
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  exposeRoute: true
})

server.register(require('fastify-oas'), {
  routePrefix: '/openapi',
  swagger: {
    info: {
      title: 'Test openapi',
      description: 'testing the fastify swagger api',
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true
});

mailerRoutes.forEach((route) => {
  switch (route.method) {
    case 'GET':
      server.get(route.url, { schema: route.schema }, route.handler);
      break;
    case 'POST':
      server.post(route.url, { schema: route.schema }, route.handler);
      break;
    case 'DELETE':
      server.delete(route.url, { schema: route.schema }, route.handler);
      break;
  }
});

const bootStrap = async () => {
  try {
    await server.listen(port);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Successfully connected to DB');
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
};

process.on('uncaughtException', (error) => {
  server.log.error(error);
});

bootStrap();
