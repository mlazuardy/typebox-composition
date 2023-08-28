"use client";
import { Fragment } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { FenceToken } from "./FenceToken";

interface Props {
  code: string;
  language?: string;
}

export const Fence: React.FC<Props> = ({ code, language = "typescript" }) => {
  return (
    <Highlight code={code} language={language} theme={themes.vsDark}>
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className}>
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <FenceToken
                      key={tokenIndex}
                      token={token}
                      {...getTokenProps({ token })}
                    />
                  ))}
                {"\n"}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
