export default {
    props: ['album'],

    template: `
    <div class="listen-container">
    <a class="back" @click="$router.go(-1)">back</a>

        <div class="audio-header">
        <img :src="'./images/' + album[0].album_img">
        <div class="half">
        <h2>{{album[0].album_title}}</h2>
        <p>{{album[0].album_year}}</p>
        <p>{{album[0].album_desc}}</p>
        </div>
        </div>

        <audio controls :src="'audio/' + album[0].song_src"></audio>

        <div class="songs">
        <ul>
        <li v-for="song in album" v-on:click="changeSrc(song.song_src)">
        {{song.song_title}}
        </li>
        </ul>
        </div>

    </div>
    `,

    data() {
        return {
            message: "Watch",
            currentuser: []
        }
    },

    created: function() {
        this.currentuser = this.$parent.currentuser;
        console.log('params:', this.$route.params);
    },

    methods:{
        changeSrc(source){
            document.querySelector('audio').setAttribute.src = "audio/" + source;
            this.album[0].song_src = source;
        }
    }
}