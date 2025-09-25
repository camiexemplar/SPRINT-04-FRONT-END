import { useState, useEffect } from 'react';
import PatientHistoryTable from '../components/PatientHistoryTable';
import type { ProcessedData } from '../components/FileUploader'; 
import { Link } from 'react-router-dom';

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
        <div className="text-center text-gray-500 mt-10 flex flex-col items-center">
          Nenhum dado encontrado. Por favor, importe uma planilha.
          <div className='p-4 m-4 w-40 bg-blue-600 rounded-2xl text-white hover:text-blue-200'>
        <Link to="/importar">
          <button>Ir para importar</button>
        </Link>
        </div>
        </div>
      )}
    </div>
    
  );
}