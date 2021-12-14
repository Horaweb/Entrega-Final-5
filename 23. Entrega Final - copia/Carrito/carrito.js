



let botonCompra = document.querySelectorAll(".botonCompra");
let carrito = [];
let productos = JSON.parse(localStorage.getItem("botonCompra"));
mostrarCarrito(productos)

console.log(botonCompra);

for (let boton of botonCompra) {
  boton.addEventListener("click", agregarCarrito);
}

function agregarCarrito(e) {
  let hijo = e.target;
  let padre = hijo.parentNode.parentNode;

  let nombreProducto = padre.querySelector("h5").textContent;
  let img = padre.querySelector("img").src;
  let precio = padre.querySelector("span").textContent;
  let parrafo = padre.querySelector("p").textContent;

  const producto = {
    nombre: nombreProducto,
    img: img,
    precio: precio,
    desc: parrafo,
    cantidad: 1,
  };

  carrito.push(producto);
  localStorage.setItem("botonCompra", JSON.stringify(carrito));
  let productos = JSON.parse(localStorage.getItem("botonCompra"));
  mostrarCarrito(productos);
}

function mostrarCarrito(productos) {
    if(productos){
        let tbody = document.getElementById("tbody");
        tbody.innerHTML = ""
        for (let producto of productos) {
          let fila = document.createElement("tr");
      
          fila.innerHTML = `<td><img src="${producto.img} "></td>
                            <td>${producto.nombre}</td>
                            <td>${producto.precio}</td>
                            <td><button class="btn btn-danger">Eliminar</button></td>
                          `;
      
      
      
          tbody.appendChild(fila);
        }
    }
}





/* uso de animación */
$("#carrito").hide();

$(".botonCompra").click(function(){
    $("#carrito").show();
})


<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
    integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
    crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
    crossorigin="anonymous"></script>


<script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function () {
            $(".btnFinalizar").click(function () {
                $("#myModal").modal('show');
            });
        });

        $(document).ready(function () {
            $(".close").click(function () {
                $("#myModal").modal('hide');
            });
        });
    </script>