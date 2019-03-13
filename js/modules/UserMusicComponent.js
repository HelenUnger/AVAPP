export default {

    template: `
    <div class="container">
        <h2>{{message}}</h2>
        <input type="text" id="search" v-model="search" placeholder="Search title.."/>
        <div class="movie-container">
            <div v-for="album in searchAlbum" class="movie-box" v-on:click="listenAlbum(album.id)">
                <img :src="'./images/' + album.img">
                <div class="details">
                <p>{{album.title}}</p>
                <p>{{album.year}}</p>
                </div>
            </div>
        </div>
    </div>
    `,

    data() {
        return {
            search: '',
            message: "Music",
            albumList: [],
            selectedalbum: [],
            currentuser: []
        }
    },

    created: function() {
        this.currentuser = this.$parent.currentuser;
        if(this.currentuser.length == 0){
            this.$router.replace({name: 'users'});
        }
        this.getAllAlbums();
    },

    computed: {
        searchAlbum() {
            return this.albumList.filter(album => album.title.toLowerCase().includes(this.search.toLowerCase()))
        }
    },

    methods: {
        getAllAlbums(){
            let url = `./admin/scripts/music.php?getAlbums=${this.currentuser.access}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {this.albumList = data})
            .catch(function(error) {
                console.error(error);
            });
        },

        listenAlbum(id){

            // this.selectedShow = this.showList.filter(show=>show.id == id);

            let url = `./admin/scripts/music.php?singleAlbum=${id}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.selectedalbum = data;
                    this.$router.push({ name: "listen", params: {album: this.selectedalbum} });
                })
            .catch(function(error) {
                console.error(error);
            });
        }

    }
}