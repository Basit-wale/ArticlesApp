interface TextInputProps {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type: string;
}

const Input: React.FC<TextInputProps> = ({ placeholder, onChange, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="bg-transparent outline-none text-sm placeholder:text-[#142246be] placeholder:text-sm w-full"
    />
  );
};
export default Input;
