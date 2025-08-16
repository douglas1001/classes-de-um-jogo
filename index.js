class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }
    
    atacar(){
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let nomeHeroi = new heroi ("Douglas","30", "mago")

nomeHeroi.atacar()