"use client";

import { Formik, Form, } from 'formik';
import { ITicket } from '@/tsModels/ticket.models';
import {postTicket} from '@/components/TicketRequestForm/request';
import TicketRequestFormSchema from '@/components/TicketRequestForm/TicketRequestFormSchema';
import TicketRequestFormFields from '@/components/TicketRequestForm/TicketRequestFormFields';


const TicketRequestForm = () => {
  const onSubmit = async (values: ITicket) => {
    try {
      await postTicket(values);
    } catch (error) {
      console.log(error);
    }
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
