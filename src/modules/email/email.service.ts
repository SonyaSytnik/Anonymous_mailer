import { EmailProviderI } from './interfaces/provider.interface';
import { NodemailerProvider } from './providers/nodemailer.provider';
import { EmailOptionsI } from './interfaces/emailOptions.interface';

/**
 * Class for email service
 */
class EmailService {
  private _provider: EmailProviderI;

  constructor(provider: EmailProviderI) {
    this._provider = provider;
  }

  /**
   * Get current provider
   */
  get getProvider(): EmailProviderI {
    return this._provider;
  }

  /**
   * Change provider from default
   * @param provider
   */
  set setProvider(provider: EmailProviderI) {
    this._provider = provider;
  }

  /**
   * Send email via provider
   * @param options 
   */
  async send(options: EmailOptionsI): Promise<any> {
    return await this._provider.send(options);
  }
}

export const emailService = new EmailService(new NodemailerProvider());
