export default {

    template: `
    <div class="container">
        <h2>{{message}}</h2>
        <input type="text" v-model="search" placeholder="Search title.."/>
        <div class="movie-container">
            <div v-for="movie in searchMovie" class="movie-box" v-on:click="watchMovie(movie.id)">
                <img :src="'./images/' + movie.img">
                <p>{{movie.title}}</p>
                <p>{{movie.year}}</p>
            </div>
        </div>
    </div>
    `,

    data() {
        return {
            search: '',
            message: "Movies",
            movieList: [],
            currentuser: []
        }
    },

    created: function() {
        this.currentuser = this.$parent.currentuser;
        if(this.currentuser.length == 0){
            this.$router.replace({name: 'users'});
        }
        this.getAllMovies();
    },

    computed: {
        searchMovie() {
            return this.movieList.filter(mov => mov.title.toLowerCase().includes(this.search.toLowerCase()))
        }
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
            this.$router.push({ name: "watchMovie", params: {movie: this.selectedMovie} });
        }

    }
}