import { ReturnI } from '../../interfaces/return.interface';
import { mailerService } from './mailer.service';

/**
 * Class for mailer controller
 */
class MailerController {
  /**
   * Sends email
   */
  async sendEmail(req): Promise<ReturnI> {
    try {
      const data = await mailerService.sendEmail(req.body);
      return { statusCode: 200, result: 'Success', data };
    } catch (error) {
      return { statusCode: 400, result: 'Error', error: error.message };
    }
  }

  /**
   * Get email by id from db
   */
  async getEmail(req): Promise<ReturnI> {
    try {
      const data = await mailerService.getEmail(req.params.id);
      return { statusCode: 200, result: 'Success', data };
    } catch (error) {
      return { statusCode: 400, result: 'Error', error: error.message };
    }
  }

  /**
   * Delete email from db
   */
  async deleteEmail(req): Promise<ReturnI> {
    try {
      const data = await mailerService.deleteEmail(req.params.id);
      return { statusCode: 200, result: 'Success', data };
    } catch (error) {
      return { statusCode: 400, result: 'Error', error: error.message };
    }
  }
}

export const mailerController = new MailerController();
