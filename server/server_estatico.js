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
  [
  {
    "ID da Teleconsulta": "TC-011",
    "Paciente": "Marcos Pereira",
    "Data de Nascimento": "12/03/1982",
    "Médico Responsável": "Dr. João Pereira",
    "Especialidade": "Cardiologia",
    "Data e Hora": "21/10/2024 09:00",
    "Status": "Agendada",
    "Anotações": "Primeira consulta para avaliação de hipertensão.",
    "Telefone do Paciente": "11999990001"
  },
  {
    "ID da Teleconsulta": "TC-012",
    "Paciente": "Beatriz Almeida",
    "Data de Nascimento": "04/07/1998",
    "Médico Responsável": "Dra. Ana Costa",
    "Especialidade": "Clínica Geral",
    "Data e Hora": "21/10/2024 13:45",
    "Status": "Concluída",
    "Anotações": "Queixa de dor de cabeça recorrente. Prescrito analgésico leve."
  },
  {
    "ID da Teleconsulta": "TC-013",
    "Paciente": "Lucas Carvalho",
    "Data de Nascimento": "29/11/2005",
    "Médico Responsável": "Dra. Ana Costa",
    "Especialidade": "Pediatria",
    "Data e Hora": "22/10/2024 10:30",
    "Status": "Agendada",
    "Anotações": "Consulta de acompanhamento escolar.",
    "Telefone do Cuidador": "11988887777"
  },
  {
    "ID da Teleconsulta": "TC-014",
    "Paciente": "Patrícia Nunes",
    "Data de Nascimento": "15/01/1970",
    "Médico Responsável": "Dr. Lucas Martins",
    "Especialidade": "Dermatologia",
    "Data e Hora": "22/10/2024 15:00",
    "Status": "Cancelada",
    "Anotações": "Cancelamento por motivo pessoal do paciente."
  },
  {
    "ID da Teleconsulta": "TC-015",
    "Paciente": "Felipe Rocha",
    "Data de Nascimento": "08/06/1993",
    "Médico Responsável": "Dr. João Pereira",
    "Especialidade": "Cardiologia",
    "Data e Hora": "23/10/2024 11:15",
    "Status": "Em Andamento",
    "Anotações": "Acompanhamento de colesterol alto.",
    "Telefone do Paciente": "21988884444"
  },
  {
    "ID da Teleconsulta": "TC-016",
    "Paciente": "Camila Fernandes",
    "Data de Nascimento": "27/09/1987",
    "Médico Responsável": "Dra. Ana Costa",
    "Especialidade": "Clínica Geral",
    "Data e Hora": "23/10/2024 14:00",
    "Status": "Concluída",
    "Anotações": "Exames laboratoriais revisados. Tudo dentro da normalidade."
  },
  {
    "ID da Teleconsulta": "TC-017",
    "Paciente": "Eduardo Ribeiro",
    "Data de Nascimento": "30/05/1975",
    "Médico Responsável": "Dr. Lucas Martins",
    "Especialidade": "Dermatologia",
    "Data e Hora": "24/10/2024 09:30",
    "Status": "Agendada",
    "Anotações": "Lesões suspeitas em braço direito.",
    "Telefone do Paciente": "11977776666"
  },
  {
    "ID da Teleconsulta": "TC-018",
    "Paciente": "Sofia Lima",
    "Data de Nascimento": "19/02/2012",
    "Médico Responsável": "Dra. Ana Costa",
    "Especialidade": "Pediatria",
    "Data e Hora": "24/10/2024 11:00",
    "Status": "Agendada",
    "Anotações": "Consulta de rotina anual.",
    "Telefone do Cuidador": "21999992222"
  },
  {
    "ID da Teleconsulta": "TC-019",
    "Paciente": "André Barbosa",
    "Data de Nascimento": "05/04/1990",
    "Médico Responsável": "Dr. João Pereira",
    "Especialidade": "Cardiologia",
    "Data e Hora": "25/10/2024 10:15",
    "Status": "Concluída",
    "Anotações": "Check-up cardiovascular completo.",
    "Telefone do Paciente": "11966665555"
  },
  {
    "ID da Teleconsulta": "TC-020",
    "Paciente": "Gabriela Torres",
    "Data de Nascimento": "11/12/1985",
    "Médico Responsável": "Dr. Lucas Martins",
    "Especialidade": "Dermatologia",
    "Data e Hora": "25/10/2024 14:45",
    "Status": "Em Andamento",
    "Anotações": "Primeira avaliação para alergia de contato."
  }
]

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
