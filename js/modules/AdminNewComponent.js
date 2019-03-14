export default {

    template: `
    <div class="create_form">
    <a @click="$router.go(-1)">back</a>
    <h1>Create New User</h1>
        <div class="newUser">
            <form>
                <input v-model="input.username" type="text" id="name" placeholder="username" required>
                <input v-model="input.email" type="email" id="name" placeholder="email" required>
                <input v-model="input.password" type="text" id="name" placeholder="password" required>
                <select v-model="input.rating">
                <option disable selected>rating</option>
                <option v-for="rate in rating" v-bind:value="rate.rating_id">{{rate.rating_type}}</option>
                </select>
                <input type="checkbox" id="admin" v-model="input.admin">
                <label for="admin">Admin?</label>
                <button v-on:click.prevent="submitNew()" type="submit">Create User</button>
            </form>  
        </div>          
    </div>`,

    data() {
        return {
            input: {
                username: '',
                email: '',
                password: '',
                rating: '',
                admin: false,
            },

            adminNum: 0,
            
            rating: []
        }
    },

    created: function() {
        this.getAllRatings();
    },

    methods: {
        getAllRatings(){
            let url = `./admin/scripts/rating.php?allRatings=true`;

            fetch(url)
                .then(res => res.json())
                .then(data => {this.rating = data})
            .catch(function(error) {
                console.error(error);
            });
        },

        submitNew(){
            if(this.input.username != "" && this.input.email != "" && this.input.password != "" && this.input.rating !=""){

                let url =  `./admin/admin_createuser.php`;

                if (this.input.admin == true){
                    this.input.admin = 1;
                }else{
                    this.input.admin = 0;
                }

                const formData = new FormData();

                formData.append("name", this.input.username);
                formData.append("email", this.input.email);
                formData.append("password", this.input.password);
                formData.append("rating", this.input.rating);
                formData.append("admin", this.input.admin);


                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                .then(res=>res.json())
                .then(data =>{
                    if ( data != "success"){
                        console.warn(data);
                        console.log('create failed');
                        return;
                    }else{
                        this.$router.replace({name: 'settings'});
                    }
                })
                .catch(function(error){
                    console.log(error);
                });
            }else{
                console.log('fields cannot be blank!!');
                //make error div instead
            }
        }
    }
}