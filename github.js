class GitHub {

    constructor() {
        this.client_id = 'c18252760c7e3f087c93';
        this.client_secret = 'b9df7650ee5d504505b1b2d4cb8994e3ba02888a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await 
            fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const reposResponse = await 
            fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json(); 
        const repos = await reposResponse.json(); 

        return {
            profile,
            repos
        }
    }

}