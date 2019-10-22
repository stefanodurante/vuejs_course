Vue.component('props-comp',{
    template:`
        <div>
            <h1>Peliculas Props</h1>
            <div class="movies-wrapp">
            <MovieComp v-for="(movie, key) in movies" 
                :key="key" 
                :id="movie.id" 
                :title="movie.title" 
                :synopsis="movie.synopsis" 
                :cover="movie.cover"
                :like="movie.like"
                @toggleLike="onToggleLike"
                />
                </div>
                <MovieFav v-if="showFav" @hideFav="onHideFav"></MovieFav>
        </div>
    `,
    data () {
        return {
            movies: [
                {
                    id: 1,
                    title: 'Avatar',
                    synopsis: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
                    cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
                    like: false
                },
                {
                    id: 2,
                    title: 'I Am Legend',
                    synopsis: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
                    cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg',
                    like: false
                },
                {
                    id: 3,
                    title: 'Interstellar',
                    synopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
                    cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
                    like: false
                },
            ],
            showFav: false
        }
    },
    methods: {
        onToggleLike (data) {
            let movieLike = this.movies.find(movie => movie.id == data.id)
            movieLike.like = data.like
            this.showFav = data.like
        },
        onHideFav (show) {
            this.showFav = show;
        }
    },
    components: {
        MovieComp,
        MovieFav
    }
})
