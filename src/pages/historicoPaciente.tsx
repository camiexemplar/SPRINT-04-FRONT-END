import { PatientSearch } from "../components/pagePatientHistory/PatientSearch";
import { ActionsBlock } from "../components/pagePatientHistory/BlocoAcoes/BlocoDeAcoes";
import { LinhaDoTempo } from "../components/pagePatientHistory/LinhaDoTempo/LinhaDoTempo";
import { useDadosPaciente } from "../components/pagePatientHistory/Hooks/useDadosPaciente";
import { useTimelineLogic } from "../components/pagePatientHistory/Hooks/useTimelineLogic";
import { BlocoIdentificacao } from "../components/pagePatientHistory/BlocoIdentificacao/BlocoIdentificacao";

export function PatientHistory() {
  const {
    idPaciente: idPaciente,
    setPatientId: setPacienteId,
    paciente: paciente,
    setPaciente: setPaciente,
    carregando: carregando,
  } = useDadosPaciente();

  const {
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    filteredAndSortedHistory,
  } = useTimelineLogic(paciente?.linhaDoTempo);

  if (!idPaciente || carregando) {
    return (
      <div className="justify-center">
        {carregando ? (
          <div className="text-xl text-blue-600">
            Carregando Histórico de {idPaciente}...
          </div>
        ) : (
          <PatientSearch setPatientId={setPacienteId} />
        )}
      </div>
    );
  }

  if (!paciente) {
    return (
      <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
        <p className="text-xl text-red-500 p-8">
          Paciente com ID "{idPaciente}" não encontrado.
        </p>
        <button
          onClick={() => setPacienteId(null)}
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
        <BlocoIdentificacao paciente={paciente} />
      </div>

      <div className="w-2/4 overflow-y-auto p-6">
        <LinhaDoTempo
          historico={filteredAndSortedHistory}
          filtro={filter}
          setFiltro={setFilter}
          ordenacao={sortOrder}
          setOrdenacao={setSortOrder}
        />
      </div>

      <div className="w-1/4 p-6 bg-gray-100 border-l border-gray-200">
        <ActionsBlock
          patientId={paciente.idPaciente}
          setPatient={setPaciente}
        />
      </div>
    </div>
  );
}
