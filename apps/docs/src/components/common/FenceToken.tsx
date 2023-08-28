import { Token, TokenOutputProps } from "prism-react-renderer";
import colors from "tailwindcss/colors";

interface Props extends TokenOutputProps {
  token: Token;
}

function inArray(source: string[], target: string[]) {
  return source.every((value) => target.includes(value));
}

function getTokenColor(types: string[], defaultColor?: string) {
  if (types.length === 1 && types.includes("tag")) {
    return "#FF5572";
  }

  if (types.includes("attr-name")) {
    return "#FFCB6B";
  }

  if (inArray(types, ["tag", "class-name"])) {
    return "#d19a66";
  }

  return defaultColor;
}

export const FenceToken: React.FC<Props> = ({ token, style, ...props }) => {
  const color = getTokenColor(token.types, style?.color);

  return (
    <span
      {...props}
      style={{
        ...style,
        color: !color ? undefined : color,
      }}
    />
  );
};
