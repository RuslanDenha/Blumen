import React, { FC } from 'react';
import {
  TextField,
} from '@mui/material';
import { useField } from 'formik';
import FormikFieldWrapper from '../FormikFieldWrapper';

type TextFieldVariant = 'outlined' | 'standard' | 'filled';

type TFormatValue = (value: string | number | Date | string[]) => string | number | Date | null;

interface IFormikTextFieldProps {
  label: string
  fieldName: string
  formatValue?: TFormatValue | null
  variant?: TextFieldVariant
  disabled?: boolean
  required?: boolean
  fullWidth?: boolean
}

const FormikTextField: FC<IFormikTextFieldProps> = ({
  label,
  fieldName,
  variant,
  formatValue,
  disabled,
  required,
  fullWidth,
}) => {
  const [field, error] = useField(fieldName);

  const isError = Boolean(error.error && error.touched);
  const errorText = isError ? error.error : ' ';

  const value = formatValue?.(field.value) || field.value || '';

  return (
    <FormikFieldWrapper
      fieldName={fieldName}
      label={label}
      required={required as boolean}
    >
      <TextField
        {...field}
        value={value}
        id={fieldName}
        variant={variant as TextFieldVariant}
        error={isError}
        disabled={disabled as boolean}
        required={required as boolean}
        fullWidth={fullWidth as boolean}
        helperText={errorText}
      />
    </FormikFieldWrapper>
  );
};

FormikTextField.defaultProps = {
  formatValue: null,
  variant: 'outlined',
  disabled: false,
  required: false,
  fullWidth: false,
};

export default FormikTextField;
