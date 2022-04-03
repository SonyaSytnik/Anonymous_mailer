import mongoose, { Schema, Document } from 'mongoose';

const EmailSchema: Schema = new Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  text: { type: String, required: true },
});

export interface EmailI extends Document {
  to: string;
  subject: string;
  text: string;
}

export default mongoose.model<EmailI>('Email', EmailSchema);
