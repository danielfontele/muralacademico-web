export class TelefoneDto {
    id: number;
    codigoArea: string;
    ddd: string;
    numero: string;
    tipo: TelefoneTipo;
    versao: number;
}

export enum TelefoneTipo {
    fixo = "fixo",
    celular = "celular"
}