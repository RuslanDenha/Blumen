import mongoose, { Schema } from 'mongoose';

const ticketSchema = new Schema(
  {
    name: String,
    email: String,
    description: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose?.models?.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;
