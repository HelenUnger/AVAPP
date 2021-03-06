export default {
    props: ['movie'],

    template: `
    <div class="watch-container">
    <a @click="$router.go(-1)">back</a>

        <h2>{{movie[0].title}}</h2>
        <p>{{movie[0].year}}</p>
        <video autoplay controls playsinline preload>
            <source :src="'video/' + movie[0].link" type="video/mp4">
        </video>
        <p>movie description.</p>
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
}