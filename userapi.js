const api = "https://jsonplaceholder.typicode.com/users";

//attaching event listener to search user
let Data = [];
var search = document.getElementById('search');
search.addEventListener("keyup", (e) => {
    const filterdata = Data.filter((d) => d.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    clear();
    renderdata(filterdata);
    });


function clear(){
  const contain = document.getElementById('contact-list');
  contain.innerHTML = "";
}

function create(contact = {}){
    const col = document.createElement('div');
    col.className = "col-lg-3 col-md-6 col-sm-12 col-xs-12";
    col.innerHTML = ` 
    <div class="card">
     <div class="card-body">
      <div class="row" mb-3>
        <div class="col-2">
          <img class="user-avatar" src="https://th.bing.com/th/id/OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa?pid=ImgDet&rs=1" alt="user-avatar" >
        </div>
        <div class="col-10">
        <h5 class="card-title sliced-text mx-3" id="name" style="width:100%;">${contact.name}</h5>
        <p class="card-subtitle mx-3 mb-2 text-body-secondary contact_email" id="email">${contact.email}</p>
        <p class="contact_address sliced-text" id="address" style="width:100%;"><span><i class='bx bx-map mx-2'></i>${contact.address.street},${contact.address.city}</span></p>
        </div>
      </div>
    </div>
 </div>`;
    return col;
} 

function renderdata(data=[]){
   const contactnodes = [];
   const container = document.getElementById('contact-list');
   if(data && data.length >0){

   for(var i=0;i<data.length;i++){
    contactnodes.push(create(data[i]));
   }
}
container.append(...contactnodes);
}
//getting data from json server
async function getAllUsers() {
    const response = await fetch(api);
    Data = await response.json();
    renderdata(Data);
}
getAllUsers();