export default{
    props: ['liveuser'],

    template: `
        <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <pre>{{ liveuser }}</pre>
                </div>
            </div>
        </div>
    `
}