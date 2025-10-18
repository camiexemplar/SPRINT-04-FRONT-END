import { InformacoesDashboard } from "../components/pageDashboard/primeiroBloco/InformacoesDashboard";
import { InformacoesGerais } from "../components/pageDashboard/segundoBloco/InformacoesGerais";

export function Dashboard(){
    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="w-[65%] p-8 bg-gray-100 border-r border-gray-200">
                <InformacoesDashboard />
            </div>

            <div className="w-[35%] overflow-y-auto p-8 bg-white shadow-lg">
                <InformacoesGerais /> 
            </div>
        </div>
    );
}