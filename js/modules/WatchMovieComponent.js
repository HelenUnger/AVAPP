export default {
    props: ['movie'],

    template: `
    <div class="watch-container">
        <h2>{{movie[0].movie_title}}</h2>
        <p>{{movie[0].movie_year}}</p>
        <iframe :src="movie[0].movie_link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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