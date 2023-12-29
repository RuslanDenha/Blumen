"use client";

import { Formik, Form, } from 'formik';
import { ITicketDraft } from '@/tsModels/ticket.models';
import { postTicket } from '@/components/TicketRequestForm/request';
import TicketRequestFormSchema from '@/components/TicketRequestForm/TicketRequestFormSchema';
import TicketRequestFormFields from '@/components/TicketRequestForm/TicketRequestFormFields';


interface ITicketRequestFormProps {
  loadTickets: () => void;
}

const TicketRequestForm = ({ loadTickets }: ITicketRequestFormProps) => {
  const onSubmit = async (values: ITicketDraft) => {
    try {
      await postTicket(values);
      await loadTickets();
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
