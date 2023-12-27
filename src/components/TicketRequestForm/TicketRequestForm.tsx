"use client";

import { Formik, Form, } from 'formik';
import TicketRequestFormSchema from './TicketRequestFormSchema';
import TicketRequestFormFields from './TicketRequestFormFields';

const TicketRequestForm = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  }

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={TicketRequestFormSchema.getDefault()}
        validationSchema={TicketRequestFormSchema}
      >
        <Form>
          <TicketRequestFormFields />
        </Form>
      </Formik>
    </div>
  );
};

export default TicketRequestForm;
