export interface DadosPaciente {
  idPaciente: string;
  nomePaciente: string;
  telefonePaciente: string;
  cuidador: Cuidador;
  scoreDeRisco: number;
  nivelDeRisco: "ALTO" | "MEDIO" | "BAIXO";
  fatoresDeRisco: string[];
  proximaConsulta: ConsultaDTO;
  linhaDoTempo: LinhaDoTempoDTO[];
}

export interface Cuidador {
  nomeCuidador: string | null;
  telefoneCuidador: string | null;
}
export interface ConsultaDTO {
  dataConsulta: string;
  horaConsulta: string;
  nomeMedico: string;
  especialidadeConsulta: string;
}

export type TipoInteracao = | "CONSULTA" | "INTERACAO_SISTEMA" | "ANOTACAO_EQUIPE";

export interface InteracaoBase {
  id: string;
  tipo: TipoInteracao;
  data: string;
  hora: string;
}

export interface InteracaoEquipe extends InteracaoBase {
  tipo: "ANOTACAO_EQUIPE";
  anotacao: string;
  idUsuario: string;
  nomeUsuario: string;
}

export interface InteracaoConsulta extends InteracaoBase {
  tipo: "CONSULTA";
  status: "Realizada" | "Faltou" | "Agendada";
  modalidade: "Telefone" | "Vídeo" | "Presencial" | "Híbrida";
  profissional: string;
  especialidade: string;
}

export interface InteracaoSistema extends InteracaoBase {
  tipo: "INTERACAO_SISTEMA";
  log: string;
}

export type LinhaDoTempoDTO = | InteracaoConsulta | InteracaoSistema | InteracaoEquipe;