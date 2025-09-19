import React from 'react';

const patients = [
  { name: 'Maria Silva', date: '25/09/2025' },
  { name: 'João Santos', date: '26/09/2025' },
  { name: 'Ana Oliveira', date: '27/09/2025' },
  { name: 'Carlos Ferreira', date: '28/09/2025' },
];

const PatientList: React.FC = () => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg w-64 h-64 overflow-y-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Próximas Consultas</h2>
      <ul className="divide-y divide-gray-200">
        {patients.map((patient, index) => (
          <li key={index} className="py-2 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900">{patient.name}</span>
            <span className="text-sm text-gray-500">{patient.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;