import { Chart } from 'react-google-charts';

const dados = [
  ['Nível de Risco', 'Contagem de Pacientes'],
  ['Alto Risco (Score > 80)', 8], // Vermelho
  ['Médio Risco (Score 60-80)', 18], // Amarelo
  ['Baixo Risco (Score < 60)', 102], // Azul/Verde
];

const opcoes = {
  title: 'Distribuição de Pacientes por Nível de Risco',
  pieHole: 0.4,
  colors: ['#DC3545', '#FFC107', '#007BFF'],
  legend: { position: 'right' },
  chartArea: { left: 10, top: 30, width: '95%', height: '85%' },
};

export function GraficoDePizza() {
  return (
    <Chart
      chartType="PieChart"
      data={dados}
      options={opcoes}
      width={'100%'}
      height={'300px'}
    />
  );
}

export default GraficoDePizza;