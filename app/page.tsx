"use client";
import * as React from "react";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import { FileUploader } from "@aws-amplify/ui-react-storage";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

export default function App() {
  const onUploadStart = React.useCallback(() => {
    console.log("uploading");
  }, []);

  const onUploadSuccess = React.useCallback(() => {
    console.log("uploaded");
  }, []);

  const onUploadError = React.useCallback(() => {
    console.log("error");
  }, []);
  return (
    <main>
      <FileUploader
        isResumable
        onUploadStart={onUploadStart}
        onUploadSuccess={onUploadSuccess}
        onUploadError={onUploadError}
        maxFileCount={1}
        path={`public/`}
        acceptedFileTypes={["image/*"]}
      />
    </main>
  );
}
