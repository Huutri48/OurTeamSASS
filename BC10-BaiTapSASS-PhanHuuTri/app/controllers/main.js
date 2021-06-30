var service = new userServices();

function getData() {
    service
        .getListProductApi()
        .then(function (result) {
            console.log(result.data);
            renderProduct(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getData();

function renderProduct(list) {
    var contentHTML = "";

    list.forEach(function (product) {
        if (product.loaiND === "GV") {
            contentHTML += `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 pl-4 pr-4">
        <div class="item text-center">
          <div class="teachImg">
          <img class="img-fluid" src="../../assets/img/${product.hinhAnh}" alt="" />
        </div>
          <div class="content">
            <h1>${product.ngonNgu}</h1>
            <h2>${product.hoTen}</h2>
            <p class="pb-3">${product.moTa}</p>
          </div>
        </div>
      </div>
        `;
        }
    });
    document.getElementById("teach").innerHTML = contentHTML;
}

