function userServices() {
    this.getListProductApi = function () {
        return axios({
            url: "https://60c9eb09772a760017204c3b.mockapi.io/api/products",
            method: "GET",
        });
    };
}
