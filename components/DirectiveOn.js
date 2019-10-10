let DirectiveOn = {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-text="message"></p>

                    <p v-text="movie"></p>
                    <button @click.stop="buyEntry">Comprar Entrada</button>
                    <input type="text" @keydown="decirHola"/>
                    <p>Disponibles <span v-text="entry"></span></p>
                    <div>
                        <h1>Modificando visto y modelo</h1>
                        <input type="text" :value="textInput" @keyup="updateDataTextInput">
                    </div>
                </div>`,
    data() {
        return {
            title: 'Directiva v-on',
            message: 'hola desde directive v-on',
            welcome_text: 'Bienvenido desde la data',
            movie: 'Fritz the Cats',
            entry: 5,
            textInput: 'Valor por defecto del input text'
        }
    },
    methods: {
        updateDataTextInput(event) {
            this.textInput = event.target.value
        },
        decirHola() {
            alert(this.welcome_text)
        },
        buyEntry() {
            if (this.entry > 0) {
                this.entry--
                    return alert(`Entrada para ${this.movie} comprada`)
            }
            return alert('Ya no hay entradas')
        }
    }
}