document.addEventListener("DOMContentLoaded", function () {
  // Hacer solicitud HTTP a la API
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      // Obtener el contenedor de datos en el HTML
      const apiDataContainer = document.getElementById("apiDataContainer");

      // Iterar sobre los datos y mostrar la información
      data.forEach((country) => {
        const countryElement = document.createElement("div");
        countryElement.classList.add("country-info");

        // Crear elemento de imagen para la bandera
        const flagImage = document.createElement("img");
        flagImage.src = country.flags.svg; // Puedes cambiar a country.flags.png para obtener la versión PNG
        flagImage.alt = `${country.name.common} Flag`;
        countryElement.appendChild(flagImage);

        // Crear elementos de párrafo para el nombre y la capital
        const nameElement = document.createElement("p");
        nameElement.textContent = `Nombre: ${country.name.common}`;

        const capitalElement = document.createElement("p");
        capitalElement.textContent = `Capital: ${country.capital[0]}`;

        // Agregar elementos al contenedor
        countryElement.appendChild(nameElement);
        countryElement.appendChild(capitalElement);
        apiDataContainer.appendChild(countryElement);
      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );
});


function procesarDatos(datos) {
  // Agregar el nombre al elemento `div`
  var div = document.querySelector("div.datos");
  div.innerHTML += "<p>Nombre: " + datos.nombre + "</p>";

  // Agregar el correo electrónico al elemento `div`
  div.innerHTML += "<p>Correo electrónico: " + datos.correo + "</p>";
}