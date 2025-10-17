import { Chart } from 'react-google-charts';

// REMOVA O 'export' AQUI
const dados = [
  ['Tarefa', 'Horas por Dia'],
  ['Trabalho', 11],
  ['Comer', 2],
  ['Locomoção', 2],
  ['Assistir TV', 2],
  ['Dormir', 7],
];

// REMOVA O 'export' AQUI
const opcoes = {
  title: 'Minhas Atividades Diárias',
  is3D: false, 
};

export function GraficoDePizza() {
  return (
    <Chart
      chartType="PieChart"
      data={dados}
      options={opcoes}
      width={'100%'}
      height={'400px'}
    />
  );
}

export default GraficoDePizza;