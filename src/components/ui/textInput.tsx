interface TextInputProps {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="bg-transparent outline-none text-sm"
      value={value}
    />
  );
};
export default TextInput;
