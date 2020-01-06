new Vue({
    el: '#app',
    data: {
        gols: 0,
        ordem: {
            colunas: ['pontos', 'golsMarcados', 'golsSofridos', 'saldo'],
            orientacao: ['desc', 'desc', 'asc', 'desc']
        },
        times: teams
        ,
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
        timesLibertadores() {
            return this.times.slice(0, 6)
        },

        timesRebaixados() {
            return this.times.slice(16, 20)
        },

        timesOrdenados() {
            return _.orderBy(this.times, this.ordem.colunas, this.ordem.orientacao)
        }
    },
    methods: {
        createGame() {
            let indiceCasa = Math.floor(Math.random() * 20)
            let indiceFora = Math.floor(Math.random() * 20)
            this.newGame.casa.time = this.times[indiceCasa]
            this.newGame.casa.gols = 0;
            this.newGame.fora.time = this.times[indiceFora]
            this.newGame.fora.gols = 0;
            this.isShowTable = false
        },
        endGame() {
            let golsCasa = parseInt(this.newGame.casa.gols)
            let timeFora = this.newGame.fora.time
            let golsFora = parseInt(this.newGame.fora.gols)
            this.newGame.casa.time.endJogo(timeFora, golsCasa, golsFora)
            this.isShowTable = true
        }
    }
})