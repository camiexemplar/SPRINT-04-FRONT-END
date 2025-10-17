import { useState } from "react";
import { ConsultaDeHojeCard } from "./ConsultaDeHojeCard";
interface ConsultaItem {
    nomePaciente: string;
    horaConsulta: string;
    especialidadeConsulta: string;
    nomeMedico: string;
    scoreDeRisco: number;
    // Adicionar telefonePaciente aqui se for usá-lo
    telefonePaciente: string; 
}

// Mock de dados para simular uma chamada de API
const mockConsultas: ConsultaItem[] = [
    { nomePaciente: "Maria da Silva", horaConsulta: "14:30", especialidadeConsulta: "Cardiologia", nomeMedico: "Dr. João", scoreDeRisco: 92, telefonePaciente: "1198784501" },
    { nomePaciente: "José Santos", horaConsulta: "10:00", especialidadeConsulta: "Pediatria", nomeMedico: "Dra. Ana", scoreDeRisco: 81, telefonePaciente: "1198784501" },
    { nomePaciente: "Ana Cláudia", horaConsulta: "11:45", especialidadeConsulta: "Dermatologia", nomeMedico: "Dr. Lucas", scoreDeRisco: 67, telefonePaciente: "1198784501"},
];

export function InformacoesDashboard(){

    const [input, setInput] = useState('');

    // Função para renderizar cada card de consulta
    const renderizarConsultas = (item: ConsultaItem) => {
        // A prop correta é "ConsultaDeHojeDashboard"
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
        <div>
            <h1>Consultas Agendadas para hoje (14/10/2025)</h1>
            <h1> Pacientes em alto risco: 8</h1>
            <form className="w-full max-w-sm flex space-x-3">
                <input
                    type="text"
                    placeholder="Pesquisar por nome"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow p-1 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                />

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg transition duration-200"
                >
                    Filtros Avançados
                </button>
            </form>

            <div className="flex bg-gray-50">
                <div className="w-1/3 p-6 ">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg transition duration-200"
                    >   
                        Status: TODOS
                    </button>
                </div>
                <div className="w-1/3 p-6 ">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg transition duration-200"
                    >   
                        EM TRATAMENTO
                    </button>
                </div>
                <div className="w-1/3 p-6 ">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg transition duration-200"
                    >   
                        RESOLVIDO
                    </button>
                </div>
            </div>

            <div className="relative">
                {mockConsultas.length === 0 ? (
                <p className="text-center text-gray-500 p-8 bg-white rounded-lg">
                    Nenhuma interação encontrada para este paciente.
                </p>
                ) : (
                mockConsultas.map((consulta, index) => (
                    <div key={index} className="relative mb-6">
                        {renderizarConsultas(consulta)}
                    </div>
                ))
                )}
            </div>
        </div>
    );
};