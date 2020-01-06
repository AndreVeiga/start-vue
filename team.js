class Time {
    constructor(nome, escudo){
        this.nome = nome
        this.escudo = escudo
        this.pontos = 0
        this.golsMarcados = 0
        this.golsSofridos = 0
        this.saldo = 0
    }

    atualizaSaldo() {
        this.saldo = this.golsMarcados - this.golsSofridos
    }

    endJogo(timeFora, golsMarcados, golsSofridos){
        this.golsMarcados += golsMarcados
        this.golsSofridos += golsSofridos
        timeFora.golsMarcados += golsSofridos
        timeFora.golsSofridos += golsMarcados

        this.atualizaSaldo()
        timeFora.atualizaSaldo()

        if(golsMarcados > golsSofridos){
            this.pontos += 3
        } else if(golsSofridos > golsMarcados){
            timeFora.pontos += 3
        } else {
            this.pontos++
            timeFora.pontos++
        }
    }
}