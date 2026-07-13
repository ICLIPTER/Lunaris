import { Extension } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { rust } from "@codemirror/lang-rust";
import { go } from "@codemirror/lang-go";
import { php } from "@codemirror/lang-php";
import { sql } from "@codemirror/lang-sql";
import { xml } from "@codemirror/lang-xml";
import { yaml } from "@codemirror/lang-yaml";

export const getLanguageExtension = (fileName?: string): Extension => {
  if (!fileName) {
    return javascript({ typescript: true });
  }

  const extension = fileName.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "js":
    case "mjs":
    case "cjs":
      return javascript();

    case "jsx":
      return javascript({ jsx: true });

    case "ts":
      return javascript({ typescript: true });

    case "tsx":
      return javascript({
        typescript: true,
        jsx: true,
      });

    case "html":
    case "htm":
      return html();

    case "css":
    case "scss":
    case "sass":
    case "less":
      return css();

    case "json":
    case "jsonc":
      return json();

    case "md":
    case "mdx":
      return markdown();

    case "py":
      return python();

    case "java":
      return java();

    case "c":
    case "cc":
    case "cpp":
    case "cxx":
    case "h":
    case "hpp":
      return cpp();

    case "rs":
      return rust();

    case "go":
      return go();

    case "php":
      return php();

    case "sql":
      return sql();

    case "xml":
    case "svg":
      return xml();

    case "yaml":
    case "yml":
      return yaml();

    default:
      return [];
  }
};
