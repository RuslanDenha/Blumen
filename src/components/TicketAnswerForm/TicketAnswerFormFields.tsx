import { useFormikContext } from 'formik';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import FormikTextareaField from '@/sharedComponents/FormikField/FormikTextareaField';
import FormikTextField from '@/sharedComponents/FormikField/FormikTextField';
import FormikSelectField from '@/sharedComponents/FormikField/FormikSelectField';
import { ticketStatusOptions } from '@/tsModels/ticket.models';

const TicketAnswerFormFields = () => {
  const { submitForm } = useFormikContext();

  return (
    <Paper
      className="p-6 mt-6"
      variant="outlined"
    >
      <Grid
        container
        direction="row"
        columnSpacing={5}
      >
        <FormikSelectField
          label="status"
          fieldName="status"
          options={ticketStatusOptions}
          required
          fullWidth
        />
        <FormikTextField
          label="name"
          fieldName="name"
          required
          fullWidth
          disabled
        />
        <FormikTextField
          label="email"
          fieldName="email"
          required
          fullWidth
          disabled
        />
        <FormikTextareaField
          label="description"
          fieldName="description"
          required
          disabled
        />
        <FormikTextareaField
          label="answer"
          fieldName="answer"
          required
        />
        <Grid
          className="mt-2"
          container
          justifyContent="center"
        >
          <Button
            onClick={submitForm}
            type="submit"
            variant="outlined"
            color="primary"
          >
            Respond to the request
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TicketAnswerFormFields;
