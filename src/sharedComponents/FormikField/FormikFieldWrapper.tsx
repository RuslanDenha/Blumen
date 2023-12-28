import React, { FC } from 'react';
import { Grid, InputLabel } from '@mui/material';

interface IFormikFieldWrapperProps {
  children: React.ReactNode
  fieldName: string
  label: string
  required?: boolean
}

const FormikFieldWrapper: FC<IFormikFieldWrapperProps> = ({
  children, fieldName, required = false, label,
}) => {
  return (
    <Grid
      item
      container
      rowSpacing={1}
    >
      <Grid
        item
        justifyContent="center"
        xs={2}
      >
        <InputLabel
          htmlFor={fieldName}
          required={required as boolean}
        >
          {label}
        </InputLabel>
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default FormikFieldWrapper;
