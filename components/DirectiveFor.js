let DirectiveFor = {
    template: ` <div>
                <h1 v-text="title"></h1>
                <p v-html="message"></p>
                <h3>Lista de un Array</h3>
                <ul>
                    <li v-for="(color, index) in list" :key="index" v-text="color">
                    </li>
                </ul>
                <h3>Lista de un Objeto</h3>
                <ul>
                    <li v-for="( item, key, index ) in object_list" :key="index" >
                        {{ key }}: {{item}}
                    </li>
                </ul>
                <h3>Lista de un Array con Objetos</h3>
                <ul>
                    <li v-for="( item, index ) in other_list" :key="index" >
                        Nombre: {{item.name}}<br/>
                        Apellido: {{item.last_name}}<br/>
                        Apellido: {{item.nick}}<br/><br/>
                    </li>
                </ul>
            </div>`,
    data() {
        return {
            title: 'Directiva v-for',
            message: '<strong>hola desde directive v-for</strong>',
            list: ['Red', 'Yellow', 'Cyan', 'Purple', 'Pink'],
            object_list: {
                name: 'Gato',
                last_name: 'Lopez',
                nick: 'GatoSka'
            },
            other_list: [{
                name: 'Gato',
                last_name: 'Lopez',
                nick: 'GatoSka'
            }, {
                name: 'Lobo',
                last_name: 'Lopez',
                nick: 'LoboBueno'
            }, {
                name: 'Citizen',
                last_name: 'Kane',
                nick: 'GatoPardo'
            }]
        }
    }
}