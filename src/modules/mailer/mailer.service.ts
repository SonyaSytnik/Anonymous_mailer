import { Document } from 'mongoose';
import { EmailI } from '../email/email.model';
import { emailRepository } from '../email/email.repository';
import { emailService } from '../email/email.service';
import { EmailOptionsI } from '../email/interfaces/emailOptions.interface';

/**
 * Class for mailer service
 */
class MailerService {
  /**
   * Sends email
   * @param options 
   */
  async sendEmail(options: EmailOptionsI): Promise<Document<EmailI, {}>> {
    await emailService.send(options);
    return await emailRepository.createEmail(options as EmailI);
  }

  /**
   * Get email by id from db
   * @param id 
   */
  async getEmail(id: string): Promise<Document<EmailI, {}>> {
    return await emailRepository.findEmailById(id);
  }

  /**
   * Delete email by id from db
   * @param id 
   */
  async deleteEmail(id: string): Promise<string> {
    await emailRepository.deleteEmailById(id);
    return 'Success';
  }
}

export const mailerService = new MailerService();
