export enum TipoAcomodacao{
  CASA, APARTAMENTO, QUARTO,
}
export interface Acomodacao {


  id: number;
  tipo: TipoAcomodacao;
  capacidade: number;
  localizacao: String;
  permiteanimais: boolean;
  temestacionamento: boolean;


}

export const acomodacoes = [

{id: 1, tipo:TipoAcomodacao.CASA, capacidade: 13, localizacao: "New york", permiteanimais: true, temestacionamento: true,}


]