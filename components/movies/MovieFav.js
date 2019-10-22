let MovieFav = {
    template: `
    <div class="movieFav-wrapper">
        <div :id="'fav-'+_uid" class="movieFav">
        </div>
    </div>
    `,
    beforeCreate(){
        console.log('Esto es antes de que se cree')
    },
    created(){
        console.log('Creado')
    },
    beforeMount() {
        console.log('Antes de montarse')
    },
    mounted() {
        let vm = this
        let $element = document.getElementById(`fav-${this._uid}`)

        $element.addEventListener('animationend', function () {
            vm.$emit('hideFav', false)
        })
    },
    beforeUpdate() {
        
    },
    updated() {
        
    },
    beforeDestroy() {
        console.log('Antes de destruirse')
    },
    destroyed() {
        console.log('Ya destruido')        
    }
}
