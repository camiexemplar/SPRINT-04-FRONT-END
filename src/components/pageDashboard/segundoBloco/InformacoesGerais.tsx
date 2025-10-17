import { AlertasPendentes } from "./AlertasPendentes";
import GraficoDeBarras from "./GraficoDeBarras";
import GraficoDePizza from "./GraficoDePizza";
import { TotalConsultas } from "./TotalConsultas";

export function InformacoesPaciente(){
    return (
        <div>
            <div className="flex bg-gray-50">
                <div className="w-1/2 p-6 ">
                    <TotalConsultas />
                </div>
                <div className="w-1/2 p-6 ">
                    <AlertasPendentes />
                </div>
            </div>
            <GraficoDePizza />
            <GraficoDeBarras />
        </div>
    );
};