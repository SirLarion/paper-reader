import React, { FC } from "react";
import { PdfUploader } from "./components/PdfUploader";

export const App: FC = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/manifest.json" />
      <title>paper-reader</title>
    </head>
    <body>
      <PdfUploader />
    </body>
  </html>
);
