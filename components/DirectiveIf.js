let DirectiveIf = {
    template: ` <div>
    <h1 v-text="title"></h1>
    <p v-if="show" v-html="message"></p>
    <h1>Uso de v-if / v-else</h1>
    <p v-if="user.permission">El usuario tiene permiso para ver esto</p>
    <p v-else>El usuario no tiene permiso</p>

    <h1>Uso de v-if / v-else-if / v-else</h1>
    <p v-if="user.permission && user.vip">El usuario tiene permiso y es VIP</p>
    <p v-else-if="user.permission">El usuario tiene permiso</p>
    <p v-else-if="user.vip">El usuario es VIP</p>
    <p v-else>El usuario no tiene Permiso ni es VIP</p>

</div>`,
    data() {
        return {
            title: 'Directiva v-if',
            message: '<strong>hola desde directive v-if</strong>',
            show: true,
            user: {
                permission: false,
                vip: true
            }
        }
    }
}