'use client';

// global-error.tsx is only enabled in production. In development, our error overlay will show instead.
// reference: https://nextjs.org/docs/app/building-your-application/routing/error-handling
export default function GlobalError() {
  return (
    <html>
      <body>
        <h2>網站發生錯誤，請稍後再試</h2>
        <p>造成不便，敬請見諒</p>
      </body>
    </html>
  );
}