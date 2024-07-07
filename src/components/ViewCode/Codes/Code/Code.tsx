import * as React from "react";
import { Div } from "@vkontakte/vkui";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import go from "react-syntax-highlighter/dist/esm/languages/hljs/go";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import theme from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("go", go);
SyntaxHighlighter.registerLanguage("json", json);

export function Code({
  style,
  ...props
}: React.ComponentProps<typeof SyntaxHighlighter>) {
  return (
    <Div>
      <SyntaxHighlighter
        style={{ ...theme, ...style }}
        customStyle={{ borderRadius: 8, padding: 16, margin: 0 }}
        {...props}
      />
    </Div>
  );
}
