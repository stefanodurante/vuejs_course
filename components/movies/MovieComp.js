let MovieComp = {
    template: `
    <div class="movie-card">
        <img :src="cover"/>
        <h2 v-text="title"></h2>
        <p v-text="synopsis"></p>
        <button @click="toggleLike" v-text="like ? 'Favorita' : 'Agregar a favoritas' "></button>
        <hr>
    </div>
    `,
    /*props: [
        'id',
        'title',
        'synopsis',
        'cover'
    ]*//* otra forma de pasar props */
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            default: 'No posee Synopsis'
            
        },
        cover: {
            type: String,
            required: true
        },
        like: {
            type: Boolean,
            required: true,
            default () {
                return false
            }
        }
    },
    methods: {
        toggleLike () {
            //this.like = !this.like
            let data = {
                id: this.id,
                like: !this.like
            }
            this.$emit('toggleLike', data);
        }
    }
}
