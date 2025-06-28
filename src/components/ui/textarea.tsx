interface TextAreaProps {
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="resize-none h-28 w-full bg-transparent outline-none text-sm placeholder:text-[#142246be] placeholder:text-sm"
    ></textarea>
  );
};

export default TextArea;
