function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // menggunakan forEach untuk mengulang isi setiap result
  result.forEach(() => {
    // masuk ke array objek result
    // terus mengulang jika masih true dari awal idex ke 1
    for (let i = 1; i < result.length; i++) {

      if (result[i].year > result[i - 1].year) {
        let tmp = result[i - 1];
        result[i - 1] = result[i];
        result[i] = tmp;
      }
    }
  });

  // Rubah code ini dengan array hasil sorting secara descending

  console.log("Setelah di sort descending");
  console.log(result);

  return result;
}
