export class Disco {
    nome: string;
    valor: number;
    genero: GeneroEnum;
    idArtista: string;
    artista: string;
    imagem: string;
    idSpotify: string;
}

export enum GeneroEnum {
    POP, ROCK, MPB, CLASSIC
}

export class Venda {
    id: number;
    dataVenda: Date;
    itens: Array<ItemVenda>;
    total: number;
    totalCashback: number;
}

export class ItemVenda {
    id: number;
    quantidade = 1;
    valorUnitario: number;
    cachback: number;
    disco: Disco;
    venda: Venda;
}
