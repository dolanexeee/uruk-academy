import { useMemo } from 'react';
import katex from 'katex';

/* MathText — renders a content string that may embed KaTeX formulas:
   $…$ inline and $$…$$ display. Formulas become LTR islands inside the
   RTL Arabic flow; plain text passes through untouched (so every English
   string in the app renders exactly as before). Rendering is fully
   client-side from the bundled KaTeX — it works in the offline PWA. */

const SEGMENT = /(\$\$[^$]+?\$\$|\$[^$]+?\$)/g;

function render(tex: string, display: boolean): string {
  try {
    return katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: false });
  } catch {
    return tex;
  }
}

export default function MathText({ text }: { text: string }) {
  const html = useMemo(() => {
    if (!text || !text.includes('$')) return null;
    return text.split(SEGMENT).map((part, i) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return { key: i, display: true, html: render(part.slice(2, -2), true) };
      }
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        return { key: i, display: false, html: render(part.slice(1, -1), false) };
      }
      return { key: i, display: false, html: null, text: part };
    });
  }, [text]);

  if (!html) return <>{text}</>;
  return (
    <>
      {html.map((seg) =>
        seg.html ? (
          <span
            key={seg.key}
            dir="ltr"
            className={seg.display ? 'math-display' : 'math-inline'}
            dangerouslySetInnerHTML={{ __html: seg.html }}
          />
        ) : (
          <span key={seg.key}>{seg.text}</span>
        ),
      )}
    </>
  );
}
