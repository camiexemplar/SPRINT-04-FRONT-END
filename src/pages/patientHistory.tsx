import { useState, useEffect } from 'react';
import PatientHistoryTable from '../components/PatientHistoryTable';
import type { ProcessedData } from '../components/FileUploader'; 

export default function PatientHistory() {
  const [patientData, setPatientData] = useState<ProcessedData[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('patientData');
    if (savedData) {
      setPatientData(JSON.parse(savedData) as ProcessedData[]);
    }
  }, []);

  
  return (

    <div className="w-full p-4">
      {patientData.length > 0 ? (
        <PatientHistoryTable data={patientData} />
      ) : (
        <div className="text-center text-gray-500 mt-10">
          Nenhum dado encontrado. Por favor, importe uma planilha.
        </div>
      )}
    </div>
    
  );
}