import { TextField } from "@mui/material";
import { useField } from "formik";

interface InputFieldProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field} 
      {...props} 
      label={label}
      variant="outlined"
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error} 
    />
  );
};

export default InputField;
