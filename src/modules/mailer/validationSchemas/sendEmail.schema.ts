import { FastifySchema } from 'fastify/types/schema';

export const SendEmailSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['to', 'subject', 'text'],
    properties: {
      to: { type: 'string' },
      subject: { type: 'string', pattern: '^[A-Za-z]+$' },
      text: { type: 'string', pattern: '^[A-Za-z]+$' },
    },
  },
};
