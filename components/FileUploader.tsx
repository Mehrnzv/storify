"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "./ui/button";
import { cn, convertFileToUrl, getFileType } from "@/lib/utils";
import Image from "next/image";
import upload from "../public/icons/upload.svg";
import Thumbnail from "./Thumbnail";
import fileLoader from '../public/icons/file-loader.gif'
import remove from '../public/icons/remove.svg'

interface Props {
  accountId: string;
  ownerId: string;
  className?: string;
}

const FileUploader = ({ ownerId, accountId, className }: Props) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleRemoveFile = (e: React.MouseEvent<HTMLImageElement>, fileName: string) => {
    e.stopPropagation()
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName))
  }

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <Button type="button" className={cn("uploader-button", className)}>
        <Image src={upload} width={24} height={24} alt="upload" />
        <p>Upload</p>
      </Button>

      {files.length > 0 && (
        <ul className="uploader-preview-list">
          <h4 className="h-4 text-light-100">Uploading</h4>
          {files.map((file, index) => {
            const { type, extension } = getFileType(file.name);
            return (
              <li key={`${file.name}-${index}`} className="uploader-preview-item">
                <div className="flex items-center gap-3">
                  <Thumbnail
                    type={type}
                    extension={extension}
                    url={convertFileToUrl(file)}
                  />
                  <div className="preview-item-name">
                    {file.name}
                    <Image src={fileLoader} width={80} height={26} alt="loader"/>
                  </div>
                </div>
                <Image src={remove} width={24} height={24} alt="remove" onClick={(e) => handleRemoveFile(e, file.name)}/>
              </li>
            );
          })}
        </ul>
      )}

      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag & drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileUploader;
