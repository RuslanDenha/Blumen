import {
  FormHelperText, MenuItem, Select, FormControl, SelectChangeEvent,
} from '@mui/material';
import { useField } from 'formik';
import FormikFieldWrapper from '../FormikFieldWrapper';

export interface IOption {
  value: string | number
  label: string | number
}

interface IFormikSelectFieldProps {
  label: string
  fieldName: string
  options: IOption[]
  required?: boolean
  fullWidth?: boolean
  disabled?: boolean
}

const FormikSelectField = ({
  fieldName, label, options, required = false, fullWidth = false, disabled = false,
}: IFormikSelectFieldProps) => {
  const [field, error] = useField(fieldName);

  const onChangeHandler = (event: SelectChangeEvent<any>) => {
    field.onChange(event);
  };

  const isError = Boolean(error.error && error.touched);
  const errorText = isError ? error.error : ' ';

  return (
    <FormikFieldWrapper
      fieldName={fieldName}
      label={label}
      required={required as boolean}
    >
      <FormControl error={isError}>
        <Select
          {...field}
          id={fieldName}
          variant="outlined"
          className="formik-select-field"
          onChange={onChangeHandler}
          fullWidth={fullWidth as boolean}
          required={required as boolean}
          disabled={disabled as boolean}
        >
          {options.map(({
            value: optionValue,
            label: optionLabel,
          }) => (
            <MenuItem
              key={`${optionValue}`}
              value={`${optionValue}`}
            >
              {optionLabel}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error={isError}>
          {errorText}
        </FormHelperText>
      </FormControl>
    </FormikFieldWrapper>
  );
};

export default FormikSelectField;
