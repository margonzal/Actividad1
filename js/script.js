const restaurantes = [
    {
      nombre: "Sabores Mexicanos",
      descripcion: "Todo el sabor de mexico al alcance de tu mano.",
      direccion: "calle 23-10",
      telefono: "777 777 777",
      imagen: "https://i.pinimg.com/736x/ac/88/a9/ac88a9e675bec17a98ff422febaa34ef.jpg",
      etiquetas: ["México", "Hecho en casa", "Picante"]
    },
    {
      nombre: "Strada dei fiori",
      descripcion: "Comida Italiana",
      direccion: "cra 89-56",
      telefono: "897 487 777",
      imagen: "https://i.pinimg.com/736x/b7/32/84/b732847d2b6dba5ec3f7a43199704574.jpg",
      etiquetas: ["Pastas", "Vinos", "Postres"]
    },
    {
      nombre: "Parrilla donde Juancho",
      descripcion: "Los mejores asados",
      direccion: "cra 11-52",
      telefono: "777 456 777",
      imagen: "https://i.pinimg.com/736x/5b/f1/39/5bf1394bd1300f782abc125d45847e75.jpg",
      etiquetas: ["Asados", "Familia"]
    }
  ];
  
  const input = document.getElementById("searchInput");
const results = document.getElementById("results");

function mostrarResultado(nombreBuscado) {
  results.innerHTML = "";

  if (nombreBuscado.trim() === "") return;

  const resultado = restaurantes.find(r =>
    r.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())
  );

  if (!resultado) {
    results.innerHTML = `<p class="text-center text-gray-600 col-span-3">No se encontró el restaurante</p>`;
    return;
  }

  const etiquetasHTML = resultado.etiquetas.map(et =>
    `<span class="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">${et}</span>`
  ).join("");

  const card = `
    <div class="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <img src="${resultado.imagen}" alt="${resultado.nombre}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">${resultado.nombre}</h3>
        <p class="text-gray-600 mb-2">${resultado.descripcion}</p>
        <p class="text-sm text-gray-500">Dirección: ${resultado.direccion}</p>
        <p class="text-sm text-gray-500">Tel: ${resultado.telefono}</p>
        <div class="mt-3 flex flex-wrap gap-2">${etiquetasHTML}</div>
      </div>
    </div>
  `;

  results.innerHTML = card;
}

input.addEventListener("input", () => {
  mostrarResultado(input.value);
});