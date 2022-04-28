import { mailerController } from './mailer.controller';
import { GetOrDeleteEmailSchema } from './validationSchemas/getOrDeleteEmail.schema';
import { SendEmailSchema } from './validationSchemas/sendEmail.schema';

export const mailerRoutes = [
  {
    method: 'GET',
    url: '/mailer/get',
    schema: { params: GetOrDeleteEmailSchema },
    handler: mailerController.getEmail,
  },
  {
    method: 'POST',
    url: '/mailer/send',
    schema: SendEmailSchema,
    handler: mailerController.sendEmail,
  },
  {
    method: 'DELETE',
    url: '/mailer/delete/:id',
    schema: { params: GetOrDeleteEmailSchema },
    handler: mailerController.deleteEmail,
  },
];
