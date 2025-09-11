import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

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

    

<div className="flex items-center justify-center min-h-[calc(100vh-5rem)] p-4 overflow-x-hidden">
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4 
                  w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] box-border">
    <h1 className="text-xl font-bold text-gray-800 text-center">
      Upload de Arquivo
    </h1>

    <div className="flex flex-col items-center gap-4 w-full">
      <input
        type="file"
        onChange={handleFileChange}
        className="file:mr-4 file:py-2 file:px-4 
                   file:rounded-lg file:border-0 
                   file:text-sm file:font-medium 
                   file:bg-blue-600 file:text-white 
                   hover:file:bg-blue-700 
                   cursor-pointer w-full"
      />

      {file && status !== "uploading" && (
        <div className="flex justify-center w-full">
          <button
            onClick={handleFileUpload}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
          >
            Enviar Arquivo
          </button>
        </div>
      )}

      {status === "uploading" && (
        <div className="space-y-2 w-full">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-700 font-medium">
            {uploadProgress}%
          </p>
        </div>
      )}

      {status === "success" && (
        <div className="">
        <p className="text-green-600 text-center font-semibold p-5">
          ✅ Upload concluído!

        </p>
        <div className="text-center">
        <Link
        to="/validacao" className="px-6 py-2 bg-blue-700 text-white font-medium rounded-lg shadow hover:bg-blue-800 transition ">Validar</Link>
        </div>
        </div>

      )}

      {status === "error" && (
        <p className="text-red-600 text-center font-semibold">
          ❌ Erro no upload, tente novamente.
        </p>
      )}
    </div>
  </div>
</div>
)};