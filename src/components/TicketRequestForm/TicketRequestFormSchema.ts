import * as Yup from 'yup';
import { TICKET_STATUS } from '@/tsModels/ticket.models';

const TicketRequestFormSchema = Yup.object().shape({
  name: Yup
    .string()
    .required('Name is required')
    .default(''),
  email: Yup
    .string()
    .email()
    .required('Email is required')
    .default(''),
  status: Yup
    .mixed<TICKET_STATUS>()
    .oneOf(Object.values(TICKET_STATUS))
    .required('Status is required')
    .default(TICKET_STATUS.NEW),
  description: Yup
    .string()
    .required('Description is required')
    .default(''),
});

export default TicketRequestFormSchema;
