import React, { FC, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["PDF"] as const;

export const PdfUploader: FC = () => {
  return (
    <FileUploader
      handleChange={(file: File) => Bun.write("input.pdf", file)}
      types={fileTypes}
      name="file"
    />
  );
};
