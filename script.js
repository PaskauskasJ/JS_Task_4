/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

async function getCar() {
  try {
    const response = await fetch("./cars.json");
    carData = await response.json();
    console.log(carData);

    drawCarCards(carData);
  } catch (error) {
    console.error(error);
  }
}

function drawCarCards(data) {
  const output = document.getElementById("output");

  data.forEach((itemData) => {
    const carBrand = document.createElement("h2");
    carBrand.textContent = itemData.brand;
    console.log(itemData.models);
    output.append(carBrand);
    itemData.models.forEach((element) => {
      console.log(element);
      const carModel = document.createElement("p");
      carModel.textContent = element;
      output.append(carModel);
    });
  });
}

getCar();
