let DirectiveShow = {
    template: ` <div>
    <h1 v-text="title"></h1>
    <p v-show="show" v-html="message"></p>
    <p v-show="user.permission">El usuario no tiene permiso</p>
    <p v-show="!user.permission">El usuario no tiene permiso</p>

</div>`,
    data() {
        return {
            title: 'Directiva v-show',
            message: '<strong>hola desde directive v-show</strong>',
            show: true,
            user: {
                permission: false,
            }
        }
    }
}