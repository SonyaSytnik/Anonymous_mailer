import Email, { EmailI } from './email.model';
import { Model, Document } from 'mongoose';

/**
 * Class for email repository
 */
class EmailRepository {
  private readonly _model: Model<EmailI, {}>;
  constructor() {
    this._model = Email;
  }

  async findEmailById(id: string): Promise<Document<EmailI, {}>> {
    return await this._model.findById(id);
  }
  async deleteEmailById(id: string): Promise<void> {
    await this._model.findByIdAndDelete(id);
  }
  async createEmail(data: EmailI): Promise<EmailI> {
    const email = new Email(data);
    return await email.save();
  }
}

export const emailRepository = new EmailRepository();
