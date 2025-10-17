import { InformacoesDashboard } from "../components/pageDashboard/primeiroBloco/InformacoesDashboard";
import { InformacoesPaciente } from "../components/pageDashboard/segundoBloco/InformacoesGerais";

export function Dashboard(){
    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="w-3/4 p-6 bg-gray-50 border-r border-gray-200">
                <InformacoesDashboard />
            </div>

            <div className="w-1/4 overflow-y-auto p-6">
                <InformacoesPaciente /> 
            </div>
        </div>
    )
}