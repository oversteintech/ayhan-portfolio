import { Fragment } from "react";
import { tokenize } from "@/i18n/format";

/** Renders a message template, emphasising interpolated figures. */
export default function Rich({ template, values }: { template: string; values: Record<string, string> }) {
  return (
    <>
      {tokenize(template).map((part, i) =>
        "text" in part ? (
          <Fragment key={i}>{part.text}</Fragment>
        ) : (
          <strong key={i} className="figure">
            {values[part.key] ?? `{${part.key}}`}
          </strong>
        ),
      )}
    </>
  );
}
