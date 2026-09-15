interface ButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  fontSize: string;
  link: string;
  isBorder?: boolean;
  border?: string;
}

export default function Button({
  text,
  backgroundColor,
  textColor,
  fontSize,
  link,
  isBorder,
  border,
}: ButtonProps) {
  return (
    <a
      href={`${link}`}
      className={`hidden md:block ${
        isBorder ? border : ""
      }  ${backgroundColor} ${textColor} font-medium font-display ${fontSize} px-6 py-2.5 rounded-full shadow-brand transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(21,50,41,0.22)]`}
    >
      {text}
    </a>
  );
}

