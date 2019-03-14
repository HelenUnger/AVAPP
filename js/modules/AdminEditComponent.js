export default {
    props: ['userID'],

    template: `
    <div class="edit_form">
    <a @click="$router.go(-1)">back</a>
    <h1>Edit {{userData.user_name}}</h1>
        <div class="editUser">
            <form>
                <input v-model="input.username" type="text" id="name" placeholder="username" required>
                <select v-model="input.rating">
                <option disabled="disabled">rating</option>
                <option v-for="rate in rating" v-bind:value="rate.rating_id">{{rate.rating_type}}</option>
                </select>
                <button v-on:click.prevent="submitEdit()" type="submit">Edit</button>
            </form>  
        </div>          
    </div>`,

    data() {
        return {
            input: {
                username: '',
                rating: ''
            },
            
            userData: [],
            rating: []
        }
    },

    created: function() {
        this.getUser(this.userID);
        this.getAllRatings();
    },

    methods: {
        getUser(id){
            let url = `./admin/scripts/users.php?singleUser=${id}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {this.userData = data;
                    console.log(this.userData);
                    this.input.username = this.userData.user_name; })
            .catch(function(error) {
                console.error(error);
            });
        },

        getAllRatings(){
            let url = `./admin/scripts/rating.php?allRatings=true`;

            fetch(url)
                .then(res => res.json())
                .then(data => {this.rating = data;
                    this.input.rating = this.userData.user_access;})
            .catch(function(error) {
                console.error(error);
            });
        },

        submitEdit(){
            if(this.input.username != "" && this.input.rating != ""){

                let url =  `./admin/admin_edituser.php`;

                const formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("rating", this.input.rating);
                formData.append("id", this.userID);

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                .then(res=>res.json())
                .then(data =>{
                    if ( data != "success"){
                        console.warn(data);
                        console.log('update failed');
                        return;
                    }else{
                        this.$router.replace({name: 'settings'});
                    }
                })
                .catch(function(error){
                    console.log(error);
                });
            }else{
                console.log('username and rating cannot be blank');
                //make error div instead
            }
        }
    }
}