import { FastifySchema } from 'fastify';

export const GetOrDeleteEmailSchema: FastifySchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
    },
  },
};
