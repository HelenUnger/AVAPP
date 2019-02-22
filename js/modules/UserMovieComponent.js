export default {

    template: `
    <div class="container">
        <h2>{{message}}</h2>
        <div class="movie-container">
            <div v-for="movie in movieList" class="movie-box" v-on:click="watchMovie(movie.id)">
                <img src="./images/alice1951.jpg">
                <p>{{movie.title}}</p>
                <p>{{movie.year}}</p>
            </div>
        </div>
    </div>
    `,

    data() {
        return {
            message: "Movies",
            movieList: [],
            currentuser: []
        }
    },

    created: function() {
        this.currentuser = this.$parent.currentuser;
        this.getAllMovies();
    },

    methods: {
        getAllMovies(){
            let url = `./admin/scripts/movies.php?getmovies=${this.currentuser.access}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {this.movieList = data})
            .catch(function(error) {
                console.error(error);
            });
        },

        watchMovie(id){
            console.log(id);
            // this.selectedMovie = e;
            this.selectedMovie = this.movieList.filter(mov=>mov.id == id);
            this.$router.push({ name: "watch", params: {movie: this.selectedMovie} });
        }

    }
}