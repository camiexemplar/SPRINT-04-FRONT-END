import { PatientSearch } from "../components/pagePatientHistory/PatientSearch";
import { IdentificationBlock } from "../components/pagePatientHistory/IdentificationBlock/IdentificationBlock";
import { ActionsBlock } from "../components/pagePatientHistory/ActionsBlock/ActionsBlock";
import { Timeline } from "../components/pagePatientHistory/TimeLine/Timeline";
import { usePatientData } from "../components/pagePatientHistory/Hooks/usePatientData";
import { useTimelineLogic } from "../components/pagePatientHistory/Hooks/useTimelineLogic";


export function PatientHistory() {
  
  const { 
    patientId, 
    setPatientId, 
    patient, 
    setPatient, 
    loading 
  } = usePatientData();

  const {
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    filteredAndSortedHistory,
  } = useTimelineLogic(patient?.history);

  if (!patientId || loading) {
    return (
      <div className="justify-center">
        {loading ? (
          <div className="text-xl text-blue-600">
            Carregando Histórico de {patientId}...
          </div>
        ) : (
          <PatientSearch setPatientId={setPatientId} />
        )}
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
        <p className="text-xl text-red-500 p-8">
          Paciente com ID "{patientId}" não encontrado.
        </p>
        <button
          onClick={() => setPatientId(null)}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
        >
          Nova Busca
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-1/4 p-6 bg-gray-50 border-r border-gray-200">
        <IdentificationBlock patient={patient} />
      </div>

      <div className="w-2/4 overflow-y-auto p-6">
        <Timeline 
          history={filteredAndSortedHistory}
          filter={filter} 
          setFilter={setFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>

      <div className="w-1/4 p-6 bg-gray-100 border-l border-gray-200">
        <ActionsBlock patientId={patient.id} setPatient={setPatient} />
      </div>
    </div>
  );
}