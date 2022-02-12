const fs = require("fs");

fs.readFile("animals.json", "utf8", function (err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
  for (let indi = 0; indi < animalJSON.length; indi++) {
    if (animalJSON[indi].species === "dog") {
      dogs.push(animalJSON[indi]);
    } else {
      cats.push(animalJSON[indi]);
    }
  }

  // console.log(dogs)
  // console.log(cats)
  fs.writeFile("doggys.json", JSON.stringify(dogs, null, 2), function (err) {
    if (err) throw err;

    console.log("every thing is fine");
  });

  fs.writeFile("kittys.json", JSON.stringify(cats, null, "\t"), function (err) {
    if (err) throw err;

    console.log("every thing is fine");
  });
});
