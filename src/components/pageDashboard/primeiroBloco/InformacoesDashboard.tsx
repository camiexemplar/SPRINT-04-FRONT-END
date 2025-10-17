import { useState } from "react";
import { ConsultaDeHojeCard } from "./ConsultaDeHojeCard";

interface ConsultaItem {
    nomePaciente: string;
    horaConsulta: string;
    especialidadeConsulta: string;
    nomeMedico: string;
    scoreDeRisco: number;
    telefonePaciente: string; 
}

const mockConsultas: ConsultaItem[] = [
    { nomePaciente: "Maria da Silva", horaConsulta: "14:30", especialidadeConsulta: "Cardiologia", nomeMedico: "Dr. João", scoreDeRisco: 92, telefonePaciente: "1198784501" },
    { nomePaciente: "José Santos", horaConsulta: "10:00", especialidadeConsulta: "Pediatria", nomeMedico: "Dra. Ana", scoreDeRisco: 81, telefonePaciente: "1198784501" },
    { nomePaciente: "Ana Cláudia", horaConsulta: "11:45", especialidadeConsulta: "Dermatologia", nomeMedico: "Dr. Lucas", scoreDeRisco: 67, telefonePaciente: "1198784501"},
];

export function InformacoesDashboard(){

    const [input, setInput] = useState('');

    const renderizarConsultas = (item: ConsultaItem) => {
        return <ConsultaDeHojeCard
            scoreDeRisco={item.scoreDeRisco}
            nomePaciente={item.nomePaciente}
            telefonePaciente={item.telefonePaciente}
            horaConsulta={item.horaConsulta}
            nomeMedico={item.nomeMedico}
            especialidadeConsulta={item.especialidadeConsulta}
        />
    };

    return (
        <div className="space-y-6">
            
            <h1 className="text-3xl font-bold text-gray-800">
                Fila de Intervenção Diária
            </h1>
            <h2 className="text-xl font-semibold text-gray-600 mb-4">
                Consultas Agendadas para hoje (17/10/2025)
            </h2>

            <div className="flex justify-between items-center bg-red-600 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Priorização de Atendimento</h2>
                <h2 className="text-2xl font-extrabold">8 Pacientes em ALTO RISCO</h2>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex space-x-3 mb-4">
                    <input
                        type="text"
                        placeholder="Pesquisar por nome do paciente..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    />

                    <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 flex items-center"
                    >
                        Filtros Avançados
                    </button>
                </div>
                
                <div className="flex space-x-4 pt-3 border-t border-gray-100">
                    <button
                        type="button"
                        className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200"
                    > 
                        Status: TODOS
                    </button>
                    <button
                        type="button"
                        className="px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                    > 
                        EM TRATAMENTO
                    </button>
                    <button
                        type="button"
                        className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800 hover:bg-green-200"
                    > 
                        RESOLVIDO
                    </button>
                </div>
            </div>

            <div className="relative space-y-4">
                {mockConsultas.length === 0 ? (
                <p className="text-center text-gray-500 p-8 bg-white rounded-lg shadow-sm">
                    Nenhuma consulta de alto risco agendada para hoje.
                </p>
                ) : (
                mockConsultas.map((consulta, index) => (
                    <div key={index}>
                        {renderizarConsultas(consulta)}
                    </div>
                ))
                )}
            </div>
        </div>
    );
};