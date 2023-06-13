import { EmailOptionsI } from './emailOptions.interface';

/**
 * Email provider interface
 */
export interface EmailProviderI {
  send(options: EmailOptionsI): Promise<string>;
}
