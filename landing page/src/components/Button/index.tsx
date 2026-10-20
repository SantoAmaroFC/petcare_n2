interface ButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor: string;
  fontSize: string;
  link?: string;
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
      href={`${link || "#"}`}
      className={`hidden md:block ${isBorder ? border : ""} ${backgroundColor} ${textColor} font-medium ${fontSize} py-2.5 px-8 rounded-full shadow-2xl transition-all duration-200 hover:-translate-y-0.5`}
    >
      {text}
    </a>
  );
}