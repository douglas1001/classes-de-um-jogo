class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }
    
    atacar(){

        let ataque;

        switch(this.tipo){
            case "mago":
                ataque = "magia"
                break;
            case "guerreiro":
                ataque = "espada"
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break;
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let nomeHeroi = new heroi ("Gandalf","180", "mago")
let nomeHeroi2 = new heroi ("Attila","35", "guerreiro")
let nomeHeroi3 = new heroi ("Dalai Lama","89", "monge")
let nomeHeroi4 = new heroi ("Douglas","30", "ninja")

nomeHeroi.atacar()
nomeHeroi2.atacar()
nomeHeroi3.atacar()
nomeHeroi4.atacar()