export default{
    template: `
    <div class="login_form">
    <h1>Welcome to Flashback!</h1>
    <p>Login to continue your binge</p>
    <div class="login-errors"></div>
        <form>
            <input v-model="input.username" type="text" id="name" placeholder="username" required>
            <input v-model="input.password" type="password" id="password" placeholder="password" required>
            <button v-on:click.prevent="login()" type="submit">Login</button>
        </form>            
    </div>`,

    data() {
        return {
            input: {
                username: "",
                password: "",
            }
        }
    },

    methods: {
        login(){
            console.log('trying to log in');

            if(this.input.username != "" && this.input.password != ""){
                //do login check
                //fetch the data from the server adn match
                let url =  `./admin/admin_login.php`;

                const formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                .then(res=>res.json())
                .then(data =>{
                    if (typeof data != "object"){
                        console.warn(data);
                        console.log('login attempt failed');
                        return;
                    }else{
                        this.$emit("auth", true);
                        this.$router.replace({name: 'users'});
                    }
                })
                .catch(function(error){
                    console.log(error);
                });
            }else{
                console.log('username and password cannot be blank');
                //make error div instead
            }
        }
    }
}