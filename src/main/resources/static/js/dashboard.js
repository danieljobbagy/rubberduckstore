fetchData();

function fetchData() {
fetch("/api/dashboard", {
method:"GET",
 })
 .then(function(response) {
return response.json();
         })
 .then(function(jsonData) {
fillDashboard(jsonData);
      })
        return false;
  }

function fillDashboard(jsonData){
 var mainDiv = document.getElementById("main-div");
 var str = "";
    str += `
                <div class="dashboard" id="users">
                   <b> <h3> ${jsonData.totalUsers} </h3> </b>
                    <p> Felhasználó</p>
                </div>
                <div class="dashboard" id="products">
                   <b> <h3> ${jsonData.totalProducts} </h3></b>
                    <p> Termék</p>
                </div>
                <div class="dashboard" id= "activeProducts">
                     <b><h3> ${jsonData.totalActiveProducts} </h3></b>
                     <p> Aktív termék</p>
                </div>
                <div class="dashboard" id= "orders">
                     <b><h3> ${jsonData.totalOrders} </h3></b>
                     <p> Összes megrendelés</p>
                </div>
                <div class="dashboard" id="activeOrders">
                     <b><h3> ${jsonData.totalActiveOrders} </h3></b>
                     <p>  Aktív megrendelés</p>
                 </div>
    `;
    mainDiv.innerHTML = str;
}











