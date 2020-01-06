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

new Vue({
    el: '#app',
    data: {
        gols: 0,
        sort: 'desc',
        times:[
            new Time('Internacional', 'assets/internacional.png'),
            new Time('Grêmio', 'assets/gremio.png'),
            new Time('Santos', 'assets/santos.png'),
            new Time('São Paulo', 'assets/sao_paulo.png'),
            new Time('América MG', 'assets/america_mg.png'),
            new Time('Atlético MG', 'assets/atletico_mg.png'),
            new Time('Atlético PR', 'assets/atletico_pr.png'),
            new Time('Vasco', 'assets/vasco.png'),
            new Time('Botafogo', 'assets/botafogo.png'),
            new Time('Flamengo', 'assets/flamengo.png'),
            new Time('Fluminense', 'assets/fluminense.png'),
            new Time('Corinthians', 'assets/corinthians.png'),
            new Time('Palmeiras', 'assets/palmeiras.png'),
            new Time('Bahia', 'assets/bahia.png'),
            new Time('Ceará', 'assets/ceara.png'),
            new Time('Chapecoense', 'assets/chapecoense.png'),
            new Time('Cruzeiro', 'assets/cruzeiro.png'),
            new Time('Paraná', 'assets/parana.png'),
            new Time('Sport', 'assets/sport.png'),
            new Time('Vitória', 'assets/vitoria.png')
        ],
        newGame: {
            casa: {
                time: '',
                gols: 0
            },
            fora: {
                time: '',
                gols: 0
            },
        },
        isShowTable: true 
    },
    computed: {
        timesLibertadores(){
            return this.times.slice(0,6)
        },
        
        timesRebaixados(){
            return this.times.slice(16,20)
        },

        timesOrdenados(){
            return  _.orderBy(this.times, 'pontos', this.sort)
        }
    },
    methods: {
        createGame(){
            let indiceCasa = Math.floor(Math.random() * 20)
            let indiceFora = Math.floor(Math.random() * 20)
            this.newGame.casa.time = this.times[indiceCasa]
            this.newGame.casa.gols = 0;
            this.newGame.fora.time = this.times[indiceFora]
            this.newGame.fora.gols = 0;
            this.isShowTable = false
        },
        endGame(){
            let golsCasa = parseInt(this.newGame.casa.gols)
            let timeFora = this.newGame.fora.time
            let golsFora = parseInt(this.newGame.fora.gols)
            this.newGame.casa.time.endJogo(timeFora, golsCasa, golsFora)
            this.isShowTable = true
        }
    }
})