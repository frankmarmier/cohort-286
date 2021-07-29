const btnFetch = document.getElementById("fetch-phone");
const btnCreate = document.getElementById("btn-create");
const btnUpdate = document.getElementById("btn-update-phone");

btnFetch.onclick = () => {
  fetchPhones()
    .then((apiResponse) => {
      displayPhones(apiResponse.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

btnCreate.onclick = (event) => {
  event.preventDefault();

  const form = document.getElementById("form-create");

  const inputName = form.querySelector("input[name='name']");
  const inputPrice = form.querySelector("input[name='price']");

  const name = inputName.value;
  const price = inputPrice.value;

  const data = { name, price };

  createPhone(data)
    .then((apiResponse) => {
      addPhoneToList(apiResponse.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

btnUpdate.onclick = (event) => {
  event.preventDefault();

  const form = document.getElementById("form-update");

  const inputName = form.querySelector("input[name='name']");
  const inputPrice = form.querySelector("input[name='price']");

  const name = inputName.value;
  const price = inputPrice.value;

  const phoneId = btnUpdate.getAttribute("data-id");

  const data = {
    name,
    price,
  };

  updatePhone(phoneId, data)
    .then((apiRes) => {
      fetchPhones()
        .then((apiResponse) => {
          displayPhones(apiResponse.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });

  //
};

const addPhoneToList = (phone) => {
  const listPhones = document.getElementById("phone-list");
  listPhones.innerHTML += `<li >${phone.name} <button class="btn-update" data-id=${phone._id}>Update</button> 
  
  <button class="btn-delete" data-id="${phone._id}">Delete</button>
  
  </li>`;
  attachUpdateListeners();
  attachDeleteListners();
};

const displayPhones = (phones) => {
  const listPhones = document.getElementById("phone-list");

  listPhones.innerHTML = "";
  phones.forEach((phone) => {
    listPhones.innerHTML += `<li >${phone.name} <button class="btn-update" data-id=${phone._id}>Update</button>
        
        <button class="btn-delete" data-id="${phone._id}">Delete</button>
    </li>`;
  });

  attachUpdateListeners();
  attachDeleteListners();
};

const attachDeleteListners = () => {
  const deleteButtons = document.querySelectorAll(".btn-delete");

  deleteButtons.forEach((btn) => {
    btn.onclick = () => {
      const phoneId = btn.getAttribute("data-id");

      deletePhone(phoneId)
        .then(() => {
          const phoneItem = btn.closest("li");
          phoneItem.remove();
        })
        .catch((error) => {
          console.log(error);
        });
    };
  });
};

const attachUpdateListeners = () => {
  const buttonsUpdate = document.querySelectorAll(".btn-update");

  buttonsUpdate.forEach((btn) => {
    btn.onclick = () => {
      const phoneId = btn.getAttribute("data-id");
      getOnePhone(phoneId)
        .then((apiResponse) => {
          fillFormWithPhone(apiResponse.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  });
};

const fillFormWithPhone = (phone) => {
  const form = document.getElementById("form-update");

  const inputName = form.querySelector("input[name='name']");
  const inputPrice = form.querySelector("input[name='price']");

  inputName.value = phone.name;
  inputPrice.value = phone.price;

  btnUpdate.setAttribute("data-id", phone._id);
};

const createPhone = (phone) => {
  return axios.post("http://localhost:4004/phones", phone);
};

const getOnePhone = (id) => {
  return axios.get(`http://localhost:4004/phones/${id}`);
};

const fetchPhones = () => {
  return axios.get("http://localhost:4004/phones");
};

const updatePhone = (id, data) => {
  return axios.patch(`http://localhost:4004/phones/${id}`, data);
};

const deletePhone = (id) => {
  return axios.delete(`http://localhost:4004/phones/${id}`);
};

const charactersAPI = new APIHandler("http://localhost:8000");
const pokemonAPI = new APIHandler("https://pokeapi.co/api/v2");

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters");
  }

  getOneRegister() {}

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {}
}
