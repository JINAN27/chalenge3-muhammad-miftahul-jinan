function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // menggunakan forEach untuk mengulang isi setiap result
  result.forEach(() => {
    // masuk ke array objek result
    for (let i = 1; i < result.length; i++) {
      if (result[i].year < result[i - 1].year) {
        let temp = result[i - 1];
        result[i - 1] = result[i];
        result[i] = temp;
      }
    }
  });

  // Rubah code ini dengan array hasil sorting secara ascending

  console.log("Setelah di sort ascending");
  console.log(result);


  return result;
}
