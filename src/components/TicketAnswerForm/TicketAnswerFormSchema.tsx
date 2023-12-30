import * as Yup from 'yup';
import TicketRequestFormSchema from '@/components/TicketRequestForm/TicketRequestFormSchema';

const TicketAnswerFormSchema = TicketRequestFormSchema.shape({
  answer: Yup
    .string()
    .required('Answer is required')
    .default(''),
});

export default TicketAnswerFormSchema;
