import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script, ViteClient } from "vite-ssr-components/hono";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <ViteClient />
        <Script src="/src/client/main.tsx" />
        <Link href="/src/client/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
});
