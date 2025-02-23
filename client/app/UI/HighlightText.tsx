interface HighlightTextProps {
  text: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({ text }) => {
  return (
    <span
      className="bg-gradient-to-b from-[#8e7f42] via-[#e2d116] to-[#b6653a] 
          text-transparent bg-clip-text font-bold"
    >
      {text}
    </span>
  );
};

export default HighlightText;
