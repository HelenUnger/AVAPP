export default {

    template: `
    <div class="container">
        <h2>{{message}}</h2>
        <div class="filters">
        <ul>
        <li v-for="genre in genres" v-on:click="filterGenres" :data-type="genre.genre_id">{{genre.genre_name}}</li>
        <li v-on:click="getAllMovies" >All</li>
        </ul>
        </div>
        <div class="movie-container">
            <div v-for="movie in filteredList" class="movie-box" v-on:click="watchMovie(movie.id)">
                <img :src="'./images/' + movie.img">
                <div class="details">
                <p>{{movie.title}}</p>
                <p>{{movie.year}}</p>
                </div>
            </div>
        </div>
    </div>
    `,

    data() {
        return {
            message: "Movies",
            movieList: [],
            filteredList: [],
            currentuser: [],
            genres: []
        }
    },

    created: function() {
        this.currentuser = this.$parent.currentuser;
        if(this.currentuser.length == 0){
            this.$router.replace({name: 'users'});
        }
        this.getAllMovies();
        this.getAllGenres();
    },

    methods: {
        getAllMovies(){
            let url = `./admin/scripts/movies.php?getmovies=${this.currentuser.access}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {this.movieList = data;
                this.filteredList = data;})
            .catch(function(error) {
                console.error(error);
            });
        },

        filterGenres(e){
            let id = e.currentTarget.dataset.type;
            let currentData = this.movieList.filter(movie=>movie.genreID == id);
            this.filteredList = currentData;
        },

        getAllGenres(){
            let url = `./admin/scripts/genre.php?getgenres=true`;

            fetch(url)
                .then(res => res.json())
                .then(data => {this.genres = data})
            .catch(function(error) {
                console.error(error);
            });
        },

        watchMovie(id){
            console.log(id);
            // this.selectedMovie = e;
            this.selectedMovie = this.movieList.filter(mov=>mov.id == id);
            this.$router.push({ name: "watchMovie", params: {movie: this.selectedMovie} });
        }

    }
}