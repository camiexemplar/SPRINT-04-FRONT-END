import { useState, type ChangeEvent } from "react";

type UploadStatus = "idle" | "uploading" | "success" | "error";

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  function handleFileUpload() {
    if (!file) return;

    setStatus("uploading");
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://httpbin.org/post", true); // ENVIO PARA QUARKUS 


    //progressao barra de upload
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded * 100) / event.total);
        setUploadProgress(progress);
      }
    };


    xhr.onload = () => {
      if (xhr.status === 200) {
        setStatus("success");
        setUploadProgress(100);
      } else {
        setStatus("error");
        setUploadProgress(0);
      }
    };

    xhr.onerror = () => {
      setStatus("error");
      setUploadProgress(0);
    };

    xhr.send(formData);
  }

  return (
    
    <div className="px-4 py-2 bg-blue-200 text-black rounded-lg shadow text-center w-150 h-60">
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div className="text-center">
          <p>Nome do Arquivo: {file.name}</p>
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>Type: {file.type}</p>
        </div>
      )}

      {file && status !== "uploading" && (
        <div className="flex justify-center m-4">
        <button
  onClick={handleFileUpload}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition" >Upload</button>
      </div>)} 

      {status === "uploading" && (
        <div>
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 text-center"
              style={{ width: `${uploadProgress}%` }}
            ></div>

          <p>
            {uploadProgress}%
          </p>
        </div>
      )}

      {status === "success" && (
        <p className="text-center">Upload concluído</p>
      )}
      {status === "error" && (
        <p className="text-center">Erro no upload</p>
      )}
    </div>
  );
}