# 🛡️ Heróis em Ação  

Imagine um **mago**, um **guerreiro**, um **monge** e até mesmo um **ninja** entrando em uma arena...  
Cada um traz consigo sua essência, sua arma e sua forma única de atacar.  

Este pequeno projeto em JavaScript transforma essa ideia em código: uma classe `heroi` capaz de gerar personagens que agem de acordo com seu **tipo**.  

### 🎯 O que acontece aqui?
- Crie um herói com nome, idade e classe.  
- Peça para ele **atacar**.  
- E veja a magia (ou a espada, ou a shuriken) acontecer no console.  

### ⚔️ Exemplos
```js
let mago = new heroi("Gandalf", 180, "mago");
mago.atacar(); 
// saída: o mago atacou usando magia
```

```js
let ninja = new heroi("Douglas", 30, "ninja");
ninja.atacar(); 
// saída: o ninja atacou usando shuriken
```

### 🧩 Estrutura básica
- `nome`: Identidade do herói.  
- `idade`: Quantos anos de batalha (ou sabedoria) ele carrega.  
- `tipo`: Define a classe — e também a arma do ataque.  

### 🚀 Como executar
Clone o repositório e rode o arquivo com Node.js:  

```bash
node index.js
```

### ✨ Inspiração
Este projeto é uma forma simples (mas divertida) de praticar, explorando construtores, objetos e métodos com um tempero de fantasia medieval.  
