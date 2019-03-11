export default {
    props: ['show'],

    template: `
    <div class="watch-container">

        <a @click="$router.go(-1)">back</a>

        <h2>{{show[0].show_title}}</h2>
        <p>{{show[0].show_year}}</p>
        <video autoplay controls playsinline :src="'video/' + show[0].show_link"></video>

        <div>
        <h2>Seasons</h2>
            <div class="tab" v-for="sho in show">
                <input :id="sho.season_title" type="checkbox" name="tabs">
                <label :for="sho.season_title">{{sho.season_title}}</label>
                <div class="tab-content" v-for="episode in JSON.parse(sho.episodes)" v-on:click="changeSrc(episode.link)">
                    <p>Episode {{episode.title}}</p>
                </div>
            </div>
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

    methods: {
        changeSrc(source){
            console.log(source);
            document.querySelector('video').setAttribute.src = "video/" + source;
            this.show[0].show_link = source;

        }
    }
}