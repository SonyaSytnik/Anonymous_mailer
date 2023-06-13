/**
 * Controller return interface
 */
export interface ReturnI {
  statusCode: number;
  result: 'Success' | 'Error';
  error?: string;
  data?: any;
}
