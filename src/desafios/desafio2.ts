// Como podemos melhorar o esse código usando TS? 
interface IPessoa {
    nome: string,
    idade: number,
    profissao: 'Atriz' | 'Padeiro'
}
let pessoa1: IPessoa = {
    nome: "maria",
    idade: 29,
    profissao: 'Atriz'
}

let pessoa2: IPessoa = {
    nome: "roberto",
    idade: 19,
    profissao: 'Padeiro'
}

let pessoa3: IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: 'Atriz'
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: 'Padeiro'
}