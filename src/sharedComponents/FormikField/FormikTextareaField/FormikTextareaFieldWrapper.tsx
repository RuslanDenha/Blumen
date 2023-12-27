import React from 'react';
import { Grid, InputLabel } from '@mui/material';

interface IFormikTextareaFieldWrapperProps {
  fieldName: string,
  label?: string,
  required: boolean,
  children: JSX.Element | JSX.Element[],
}

const FormikTextareaFieldWrapper: React.FC<
  IFormikTextareaFieldWrapperProps
> = ({
  fieldName, label, required, children,
}) => {
  if (!label) {
    return children as JSX.Element;
  }

  return (
    <Grid
      item
      container
      direction="row"
      xs={12}
    >
      <Grid
        item
        container
        direction="row"
        xs={6}
      >
        <Grid
          item
          container
          direction="row"
          xs={12}
          mb={1}
        >
          <Grid item>
            <InputLabel
              className="formik-textarea-field__title"
              htmlFor={fieldName}
              required={required as boolean}
            >
              {label}
            </InputLabel>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

FormikTextareaFieldWrapper.defaultProps = {
  label: '',
};

export default FormikTextareaFieldWrapper;
