// const loading = $("#loading_img");

// loading.hide();

const URL = "http://localhost:5000/amigos";

let showFriends = function () {
  $("#lista").empty();
  $.get("http://localhost:5000/amigos", function (friends) {
    friends.forEach((f) => {
      $("#lista").append(`<li> ${f.name} X</li>`);
    });
  });
  const loading = $("#loading_img");
  loading.hide();
};

$("#boton").on("click", showFriends);

$("#search").click(() => {
  let id = $("#input").val();
  // let id = document.getElementById("input").value ==> otra forma de asignar el value del elemento
  if (id) {
    let rta = $.get(`${URL}/${id}`, (friend) => {
      // aca estamos agregando el id al final de la URL. Seria lo mismo que http://localhost:5000/amigos/${id}
      $("#amigo").text(`${friend.name} - ${friend.age} - ${friend.email}`);
    });
  } else {
    $("#amigo").text("Tenes que ingresar un ID");
  }
});

let deleteFriend = function () {
  let id;
  id = $("#inputDelete").val();
  if (id) {
    $.ajax({
      url: `${URL}/${id}`,
      type: "DELETE",
      success: function () {
        $("#sucess").text("Tu amigo fue borrado");
        $("#inputDelete").val("");
        showFriends();
      },
    });
  } else {
    $("#sucess").text("Tenes que ingresar un ID");
  }
};

$("#delete").on("click", deleteFriend);

// Diegui
// $("#boton").click(() => {
//   const lista = $("#lista");
//   lista.empty();
//   $.get("http://localhost:5000/amigos", (data) => {
//     loading.hide();
//     data.forEach((amigo) => {
//       const li = document.createElement("li");
//       li.innerHTML = amigo.name;
//       lista.append(li);
//     });
//   });
// });
