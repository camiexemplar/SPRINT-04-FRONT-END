import { useState } from "react";
import type { ProcessedData } from "./FileUploader";

interface PatientHistoryTableProps {
  data: ProcessedData[];
}

export default function PatientHistoryTable({ data }: PatientHistoryTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState<ProcessedData[]>(data);

  const filteredData = tableData.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const headers = [
    "ID Consulta",
    "Paciente",
    "Data de Nascimento",
    "Telefone do Cuidador",
    "Telefone do Paciente",
    "Médico Responsável",
    "Especialidade",
    "Data e Hora",
    "Status",
    "Anotações",
    "Link da Teleconsulta",
  ];


  const handleDelete = (rowIndex: number) => {
    setTableData((prev) => prev.filter((_, i) => i !== rowIndex));
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-4">
          <div className="font-bold text-lg text-gray-700">
            Visualizando planilha inserida
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Filtrar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
              FILTRAR
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full mb-4 bg-white rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-200">
              <tr>
                {headers.map((key) => (
                  <th
                    key={key}
                    className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    {key}
                  </th>
                ))}
                <th className="px-6 py-3 text-center text-xs font-bold text-black uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((key) => (
                    <td
                      key={key}
                      className="px-3 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      {row[key]}
                    </td>
                  ))}
                  <td className="px-3 py-4 text-center">
                    <button
                      onClick={() => handleDelete(rowIndex)}
                      className="text-lg hover:scale-110 transition"
                      title="Deletar linha"
                    >
                      ...
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
