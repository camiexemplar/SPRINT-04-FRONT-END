import type { InteractionType, LinhaDoTempoDTO } from "../../../types/Patient";
import { ConsultationCard } from "./ConsultationCard";
import { SystemInteractionCard } from "./SystemInteractionCard";
import { TeamNoteCard } from "./TeamNoteCard";

export interface TimelineProps {
  history: LinhaDoTempoDTO[];
  filter: 'TODOS' | InteractionType;
  setFilter: (filter: 'TODOS' | InteractionType) => void;
  sortOrder: 'RECENTE' | 'ANTIGA';
  setSortOrder: (order: 'RECENTE' | 'ANTIGA') => void;
}

export function Timeline({ history, filter, setFilter, sortOrder, setSortOrder }: TimelineProps) {
    const renderInteractionCard = (item: LinhaDoTempoDTO) => {
        switch (item.type) {
        case 'CONSULTA':
            return <ConsultationCard consultationInteraction={item} />;;
        case 'INTERACAO_SISTEMA':
            return <SystemInteractionCard systemInteraction={item} />;
        case 'ANOTACAO_EQUIPE':
            return <TeamNoteCard teamNoteInteraction={item} />;
        default:
            return null;
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Linha do Tempo (Histórico Cronológico)</h1>
            
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md sticky top-0 z-10">
                <label className="font-medium text-sm text-gray-700">FILTRAR POR:</label>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as 'TODOS' | InteractionType)}
                    className="p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="TODOS">Tipo de Interação (Todos)</option>
                    <option value="CONSULTA">Consultas</option>
                    <option value="INTERACAO_SISTEMA">Interações do Sistema</option>
                    <option value="ANOTACAO_EQUIPE">Anotações da Equipe</option>
                </select>

                <label className="font-medium text-sm text-gray-700">ORDENAR:</label>
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as 'RECENTE' | 'ANTIGA')}
                    className="p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="RECENTE">Mais Recente</option>
                    <option value="ANTIGA">Mais Antiga</option>
                </select>
            </div>

            <div className="relative">
                {history.length === 0 ? (
                <p className="text-center text-gray-500 p-8 bg-white rounded-lg">Nenhuma interação encontrada para os filtros selecionados.</p>
                ) : (
                history.map((item) => (
                    <div key={item.id} className="relative mb-6">
                    {renderInteractionCard(item)}
                    </div>
                ))
                )}
            </div>
        </div>
    );
}