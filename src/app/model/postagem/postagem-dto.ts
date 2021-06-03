export class PostagemDto {
    id: number;
    conteudo: string;
    data: Date;
    nivel: Nivel;
    versao: number;
}

export enum Nivel {
    Graduacao = "Graduacao",
    PosGraduacao = "PosGraduacao",
    Mestrado = "Mestrado",
    Doutorado = "Doutorado",
    PosDoutorado = "PosDoutorado"
}
