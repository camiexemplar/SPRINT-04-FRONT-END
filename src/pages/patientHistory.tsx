import { useEffect, useState } from "react";
import type { PatientData } from "../types/Patient";
import { PatientSearch } from "../components/PatientSearch";

const mockData: PatientData[] = [
  { id: '1', name: 'John Doe', phone: '123-456-7890' },
  { id: '2', name: 'Jane Smith', phone: '987-654-3210' },
];

const fetchPatientData = (id: string) => {
    // Simula a busca no seu array de mockData
    return mockData.find(p => p.id === id) || null;
};

export function PatientHistory() {

  const [patientId, setPatientId] = useState<string | null>(null);
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
        // Se não houver ID, pare a execução (estado de busca)
        if (!patientId) {
            setPatient(null);
            return;
        }

        // 1. Inicia o estado de carregamento
        setLoading(true);
        setPatient(null); // Limpa o paciente anterior, se houver

        // 2. Simulação de um atraso de rede (1.5s)
        setTimeout(() => {
            // Na implementação real, esta seria sua chamada API: 
            // const data = await axios.get(`/api/patient/${patientId}`);
            
            const fetchedData = fetchPatientData(patientId);
            
            setPatient(fetchedData);
            setLoading(false);
        }, 1500);

    }, [patientId]);
  
  if (!patientId || loading) {
        return (
            <div className="justify-center">
                {loading ? (
                    <div className="text-xl text-blue-600">Carregando Histórico de {patientId}...</div>
                ) : (
                    // Renderiza o PatientSearch e passa a função setPatientId como prop
                    <PatientSearch setPatientId={setPatientId} />
                )}
            </div>
        );
    }

    // 2. Se a busca terminou (loading=false) e o paciente é null (ID inválido/404)
    if (!patient) {
        return (
            <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
                <p className="text-xl text-red-500 p-8">Paciente com ID "{patientId}" não encontrado.</p>
                <button 
                    onClick={() => setPatientId(null)} // Volta para a tela de busca
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Nova Busca
                </button>
            </div>
        );
    }

    // 3. Renderização de Sucesso (Blocos 1, 2, 3 - Futuro)
    return (
        <div className="w-full p-4 bg-white shadow-lg">
            <h1 className="text-3xl font-bold text-blue-800">Histórico de {patient.name} Carregado com Sucesso!</h1>
            <p className="mt-2 text-gray-600">Próximo Passo: Construir os Blocos 1, 2 e 3.</p>
        </div>
    );
}