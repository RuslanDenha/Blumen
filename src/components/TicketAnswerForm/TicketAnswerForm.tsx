'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Form, Formik } from 'formik';
import { ITicket } from '@/tsModels/ticket.models';
import { editTicketById, getTicketById } from '@/components/TicketAnswerForm/request';
import TicketAnswerFormFields from '@/components/TicketAnswerForm/TicketAnswerFormFields';
import TicketAnswerFormSchema from '@/components/TicketAnswerForm/TicketAnswerFormSchema';

const TicketAnswerForm = () => {
  const { id } = useParams();
  const router = useRouter()

  const [initialValues, setInitialValues] = useState<ITicket | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const ticket = await getTicketById(id as string);
        setInitialValues(ticket);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onSubmit = async (values: ITicket) => {
    const { description, answer, name, status, email, _id} = values;
    const ticket = { description, answer, name, status, email }

    try {
      await editTicketById(_id, ticket);

      // email to the user
      console.log(`dear, ${name}`);
      console.log(`the problem description you have provided is:`);
      console.log(description)
      console.log(`your ticket status is:`);
      console.log(status)
      console.log(`your ticket answer is:`);
      console.log(answer)

      router.push(`/admin`)
    } catch (error) {
      console.log(error);
    }
  }

  if (!initialValues) {
    return (
      <div>
        loading...
      </div>
    )
  }

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={TicketAnswerFormSchema}
      >
        <Form>
          <TicketAnswerFormFields />
        </Form>
      </Formik>
    </div>
  )
}

export default TicketAnswerForm;
