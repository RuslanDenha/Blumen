import * as Yup from 'yup';

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
  description: Yup
    .string()
    .required('Description is required')
    .default(''),
});

export default TicketRequestFormSchema;
