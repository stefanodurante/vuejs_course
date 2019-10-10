Vue.component('saludar-comp', {
    template: ` <div @click="upps">
                    <h1>{{ title }}</h1>
                    <button @click.stop="greeting">Saludar</button>
                </div>`,
    data() {
        return {
            title: 'Saludo para ti',
            name: 'Stefano',
            country: 'Italia',
            clickAfuera: 'No hagas clic en el botón'
        }
    },
    methods: {
        upps() {
            alert(this.clickAfuera)
        },
        greeting() {
            alert(`Hola mi nombre es ${this.name} y soy de  ${this.country}`)
        },
    },
});