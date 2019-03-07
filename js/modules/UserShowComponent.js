export default {

    template: `
    <div class="container">
        <h2>{{message}}</h2>
        <input type="text" v-model="search" placeholder="Search title.."/>
        <div class="movie-container">
            <div v-for="show in searchShow" class="movie-box" v-on:click="watchShow(show.id)">
                <img :src="'./images/' + show.img">
                <p>{{show.title}}</p>
                <p>{{show.year}}</p>
            </div>
        </div>
    </div>
    `,

    data() {
        return {
            search: '',
            message: "Tv Shows",
            showList: [],
            selectedshow: [],
            currentuser: []
        }
    },

    created: function() {
        this.currentuser = this.$parent.currentuser;
        if(this.currentuser.length == 0){
            this.$router.replace({name: 'users'});
        }
        this.getAllShows();
    },

    computed: {
        searchShow() {
            return this.showList.filter(show => show.title.toLowerCase().includes(this.search.toLowerCase()))
        }
    },

    methods: {
        getAllShows(){
            let url = `./admin/scripts/shows.php?getshows=${this.currentuser.access}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {this.showList = data})
            .catch(function(error) {
                console.error(error);
            });
        },

        watchShow(id){

            this.selectedShow = this.showList.filter(show=>show.id == id);

            let url = `./admin/scripts/shows.php?singleShow=${id}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.seasons = data;
                    this.$router.push({ name: "watchShow", params: {show: this.selectedshow, seasons: this.seasons} });
                })
            .catch(function(error) {
                console.error(error);
            });

            // console.log(id);
            // console.log(this.selectedshow);
            // // this.selectedshow = e;
            // // this.selectedshow = this.showList.filter(show=>show.id == id);
            // this.$router.push({ name: "watch", params: {show: data, dataType: 'show' } });
        }

    }
}