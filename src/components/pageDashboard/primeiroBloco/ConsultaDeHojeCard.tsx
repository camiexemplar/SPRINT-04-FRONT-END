export interface ConsultaDeHojeCardProps{
    scoreDeRisco : number;
    nomePaciente: string;
    telefonePaciente: string;
    horaConsulta: string;
    nomeMedico: string;
    especialidadeConsulta: string;
}

export function ConsultaDeHojeCard({ scoreDeRisco, nomePaciente, telefonePaciente, horaConsulta, nomeMedico, especialidadeConsulta}: ConsultaDeHojeCardProps){

  return (
    <div className="p-4 border-l-4 border-red-500 bg-white rounded-lg shadow-sm mb-4">

        <div className="flex justify-between items-start">
            <h4 className="font-bold text-gray-800">Score de risco</h4>
        </div>
        <h5 className="font-bold text-gray-800">{scoreDeRisco}</h5>
        <p className="text-sm text-gray-600 mt-1">
            Nome: {nomePaciente} | {telefonePaciente}
        </p>
        <p className="text-sm text-gray-600">
            Próxima consulta: {horaConsulta} com Dr(a). {nomeMedico} - {especialidadeConsulta}
        </p>
        <p className="text-sm text-gray-600">
            Fatores críticos: histórico de falta de consultas, não aderência ao tratamento.
        </p>
    </div>
  );
}