// server.js
import express from "express";
import cors from "cors";
import multer from "multer";
import XLSX from "xlsx";

const app = express();
const PORT = 8080;

// Configuração do CORS
app.use(cors());

// Configuração do multer para armazenar arquivos na memória
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Endpoint de upload
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado" });
  }

  if (!file.originalname.endsWith(".xlsx")) {
    return res.status(400).json({ error: "Apenas arquivos .xlsx são aceitos" });
  }

  try {
    // Ler o arquivo do buffer
    const workbook = XLSX.read(file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0]; // pegar a primeira aba
    const worksheet = workbook.Sheets[sheetName];

    // Converter a planilha em JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

    // Retornar JSON
    res.json(jsonData);
  } catch (err) {
    console.error("Erro ao processar a planilha:", err);
    res.status(500).json({ error: "Erro ao processar a planilha" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
