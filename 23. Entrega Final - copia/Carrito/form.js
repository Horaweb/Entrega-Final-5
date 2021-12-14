
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function () {
            $(".btnConfirmarCompra").click(function () {
                $("#myModal").modal('show');
            });
        });

        $(document).ready(function () {
            $(".close").click(function () {
                $("#myModal").modal('hide');
            });
        });
    </script>


$("#form").submit(guardarLocal)
 function guardarLocal(e){
   e.preventDefault()
   let usuariosStorage = JSON.parse(localStorage.getItem("Usuarios"))
   let nombre = $("#nombre")[0].value
   let apellido = $("#apellido")[0].value
   let direccion = $("#direccion")[0].value
   let email = $("#email")[0].value
   if(usuariosStorage){
     usuariosStorage.push({nombre: nombre, apellido: apellido, direccion: direccion, email: email})
     localStorage.setItem("Usuarios", JSON.stringify(usuariosStorage))
   } else {
     let arrayUsuarios = []
     arrayUsuarios.push({nombre: nombre, apellido: apellido, direccion: direccion, email: email})
     localStorage.setItem("Usuarios", JSON.stringify(arrayUsuarios))
   }
   $("#myModal").show()
}

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"></script>