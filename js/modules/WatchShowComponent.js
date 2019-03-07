export default {
    props: ['show'],

    template: `
    <div class="watch-container">
        <h2>{{show[0].show_title}}</h2>
        <p>{{show[0].show_year}}</p>
        <iframe :src="show[0].show_link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div>
        <h2>Seasons</h2>
            <div class="tab" v-for="season in seasons">
            <input id="tab-one" type="checkbox" name="tabs">
            <label for="tab-one">{{season.season_title}}</label>
                <div class="tab-content" v-for="sho in show">
                    <p>Episode {{sho.episode_id}}</p>
                    <p>{{sho.episode_title}}</p>
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
        logClicked(e) {
            console.log("trying shorthand click");
            this.vidActive = !this.vidActive;

            let vid = document.querySelector('video');
            vid.muted = !vid.muted;
        }
    }
}