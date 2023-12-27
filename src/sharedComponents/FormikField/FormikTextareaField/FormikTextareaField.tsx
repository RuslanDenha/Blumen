import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
import FormikTextareaFieldWrapper from './FormikTextareaFieldWrapper';

interface IFormikTextareaFieldProps {
  fieldName: string,
  label?: string,
  required?: boolean,
  disabled?: boolean,
}

const FormikTextareaField: React.FC<
  IFormikTextareaFieldProps
> = ({
  fieldName, label, required, disabled,
}) => {
  const [field, error] = useField(fieldName);

  const isError = Boolean(error.error && error.touched);
  const errorText = isError ? error.error : ' ';

  return (
    <FormikTextareaFieldWrapper
      fieldName={fieldName}
      label={label as string}
      required={required as boolean}
    >
      <TextField
        {...field}
        multiline
        rows={5}
        error={isError}
        disabled={disabled as boolean}
        required={required as boolean}
        fullWidth
        helperText={errorText}
      />
    </FormikTextareaFieldWrapper>
  );
};

FormikTextareaField.defaultProps = {
  label: '',
  required: false,
  disabled: false,
};

export default FormikTextareaField;
