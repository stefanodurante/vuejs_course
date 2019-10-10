let DirectiveModel = {
    template: ` <div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
        <input type="text" v-model="inputText"/>

        <h2>Tipo checkbox</h2>
        <label>
            <input type="checkbox" v-model="checked">
            Activado
        </label>

        <h2>Peliculas</h2>
        <label v-for="(movie, key) in movies" :key="key">
            <input :value="movie" type="checkbox" v-model="favoritesMovies">
            {{ movie }}
        </label>

        <div v-show="favoritesMovies.length > 0">
        <h2>Peliculas Favoritas</h2>
        <ul>
            <li v-for="(movie, key) in favoritesMovies" :key="key" v-text="movie"></li>
        </ul>
        </div>
        
    </div>`,
    data() {
        return {
            title: 'Directiva Model',
            message: '<strong>hola desde directive v-model</strong>',
            inputText: 'Data del input',
            checked: false,
            favoritesMovies: [],
            movies: ['Buscando a Nemo', 'Titanic', 'Toy storie']
        }
    }
}