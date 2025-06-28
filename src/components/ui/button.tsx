interface ButtonProps {
  value: string;
  onClick: () => void;
  font?: "arial" | "calibri" | "times-new-roman";
}

const Button: React.FC<ButtonProps> = ({ value, onClick, font }) => {
  return (
    <button
      className={`w-fit h-10 px-3 text-sm rounded-full border-[1px] bg-[#fffdd0] ${
        font === "arial"
          ? "font-arial"
          : font === "calibri"
          ? "font-calibri"
          : font === "times-new-roman"
          ? "font-times-new-roman"
          : ""
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
