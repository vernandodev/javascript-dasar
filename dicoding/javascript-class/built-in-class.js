// const myAge = birthday => {
//     const birtday = new Date(birthday);
//     const today = Date.now(); // today menghasilkan nilai miliseconds saat ini

//     const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
//     const diffDate = new Date(diff_ms);

//     return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
//   };

//   console.log(myAge('2000-01-22')); // 21 tahun

const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now();

    const diff_ms = today - birtday.getTime();
    const diffDate = new Date(diff_ms);
    return diffDate.getFullYear() - 1970;
};

console.log(myAge('1998-06-19'));