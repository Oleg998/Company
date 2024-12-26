import { TextField } from "@mui/material";

interface InputFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  value,
  onChange,
}) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
