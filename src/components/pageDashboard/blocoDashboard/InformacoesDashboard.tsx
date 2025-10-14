import { AcoesTomadas } from "./AcoesTomadas";
import GraficoDeBarras from "./GraficoDeBarras";
import GraficoDePizza from "./GraficoDePizza";
import { RiscoAlto } from "./RiscoAlto";
import { TotalAlertas } from "./TotalAlertas";

export function InformacoesDashboard(){
    return (
        <div>
            <h1>Dashboard Geral</h1>
            <div className="flex bg-gray-50">
                <div className="w-1/3 p-6 bg-gray-50 border-r border-gray-200">
                    <TotalAlertas />
                </div>
                <div className="w-1/3 p-6 bg-gray-50 border-r border-gray-200">
                    <RiscoAlto />
                </div>
                <div className="w-1/3 p-6 bg-gray-50 border-r border-gray-200">
                    <AcoesTomadas />
                </div>
            </div>
            <div className="flex bg-gray-50">
                <div className="w-1/2 p-6 bg-gray-50 border-r border-gray-200">
                    <GraficoDePizza />
                </div>
                <div className="w-1/2 p-6 bg-gray-50 border-r border-gray-200">
                    <GraficoDeBarras />
                </div>
            </div>
        </div>
    );
};