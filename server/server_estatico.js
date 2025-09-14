// server.js
import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const PORT = 8080;

// Configurar CORS
app.use(cors());

// Configuração do multer para arquivos em memória
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Exemplo de dados retornados
const exampleData = [
  {
    "ID da Teleconsulta": "TC-001",
    "Paciente": "Maria da Silva",
    "Médico Responsável": "Dr. João Pereira",
    "Especialidade": "Cardiologia",
    "Data e Hora": "15/10/2024 14:30",
    "Status": "Concluída",
    "Anotações": "Paciente com quadro de arritmia. Sugerido exame de ECG.",
    "Telefone do Cuidador": "1198784501",
    "Telefone do Paciente": "1198784501"
  },
  {
    "ID da Teleconsulta": "TC-002",
    "Paciente": "José Santos",
    "Data de Nascimento": "22/01/2010",
    "Médico Responsável": "Dra. Ana Costa",
    "Especialidade": "Pediatria",
    "Data e Hora": "16/10/2024 10:00",
    "Status": "Agendada",
    "Anotações": "Avaliação de rotina do desenvolvimento infantil.",
    "Telefone do Cuidador": "1198784501",
    "Telefone do Paciente": "1198784501"
  },
  // ... outros registros
];

// Endpoint de upload
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado" });
  }

  // Opcional: verificar extensão
  if (!file.originalname.endsWith(".xlsx")) {
    return res.status(400).json({ error: "Apenas arquivos .xlsx são aceitos" });
  }

  // Aqui você poderia processar a planilha com 'xlsx' ou 'exceljs'
  // Por enquanto, retornaremos apenas o JSON de exemplo
  res.json(exampleData);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
