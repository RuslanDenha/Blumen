import React from 'react';
import { useFormikContext } from 'formik';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FormikTextField from '@/sharedComponents/FormikField/FormikTextField';
import FormikTextareaField from '@/sharedComponents/FormikField/FormikTextareaField';

const TicketRequestFormFields = () => {
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
        <FormikTextField
          label="name"
          fieldName="name"
          required
          fullWidth
        />
        <FormikTextField
          label="email"
          fieldName="email"
          required
          fullWidth
        />
        <FormikTextareaField
          label="description"
          fieldName="description"
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
            Submit ticket request
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TicketRequestFormFields;
