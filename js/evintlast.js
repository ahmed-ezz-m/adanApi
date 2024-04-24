let citise = [
  {
    arbekname: "سوهاج",
    name: "Sohag",
  },
  {
    arbekname: "شمال سيناء",
    name: "North Sinai",
  },
  {
    arbekname: "قنا",
    name: "Qena",
  },
  {
    arbekname: "مطروح",
    name: "Matrouh",
  },
  {
    arbekname: "كفر الشيخ",
    name: "Kafr el-Sheikh",
  },
  {
    arbekname: "جنوب سيناء",
    name: "South Sinai",
  },
  {
    arbekname: "دمياط",
    name: "Damietta",
  },
  {
    arbekname: "بورسعيد",
    name: "	Port Said",
  },
  {
    arbekname: "بني سويف",
    name: "Beni Suef",
  },
  {
    arbekname: "أسيوط",
    name: "Asyut",
  },
  {
    arbekname: "أسوان",
    name: "Aswan",
  },
  {
    arbekname: "الشرقية",
    name: "Al Sharqia",
  },
  {
    arbekname: "السويس",
    name: "Suez",
  },
  {
    arbekname: "الوادي الجديد",
    name: "New Valley",
  },
  {
    arbekname: "الأقصر",
    name: "Luxor",
  },
  {
    arbekname: "القليوبية",
    name: "Qalyubia",
  },
  {
    arbekname: "القاهرة",
    name: "Cairo",
  },
  {
    arbekname: "المنيا",
    name: "Minya",
  },
  {
    arbekname: "المنُوفيّة",
    name: "Monufia",
  },
  {
    arbekname: "الجيزة",
    name: "Giza",
  },
  {
    arbekname: "الإسماعيلية",
    name: "Ismailia",
  },
  {
    arbekname: "الإسكندرية",
    name: "Alexandria",
  },
  {
    arbekname: "الغربية",
    name: "Gharbia",
  },
  {
    arbekname: "الفيوم",
    name: "Faiyum",
  },
  {
    arbekname: "الدقهلية",
    name: "Dakahlia",
  },
  {
    arbekname: "البحيرة",
    name: "Beheira",
  },
  {
    arbekname: "البحر الأحمر",
    name: "Red Sea",
  },
];

for (let citi of citise) {
  document.getElementById("citiTime").innerHTML += `
<option>${citi.arbekname}</option>
`;
}
// function of time citi -----------------
document.getElementById("citiTime").addEventListener("change", function () {
  document.getElementById("citi").innerHTML = this.value;
  let citiName = "";
  for (let citi of citise) {
    if (citi.arbekname == this.value) {
      citiName = citi.name;
    }
  }
  getUser(citiName);
});

// time and date of adan----------------------------
async function getUser(nameciti) {
  try {
    const response = await axios.get(
      "http://api.aladhan.com/v1/timingsByCity",
      {
        params: {
          country: "EG",
          city: nameciti,
        },
      }
    );
    let responseTim = response.data.data.timings;
    gitelement("Fajr", responseTim.Fajr);
    gitelement("Sunrise", responseTim.Sunrise);
    gitelement("Dhuhr", responseTim.Dhuhr);
    gitelement("Asr", responseTim.Asr);
    gitelement("Sunset", responseTim.Sunset);
    gitelement("Isha", responseTim.Isha);

    // dateMelady----------------
    const dateMelady = response.data.data.date.readable;
    const daytim = response.data.data.date.hijri.weekday.ar;
    //  dat hijti ----------------
    const datehijri = response.data.data.date.hijri.date;
    gitelement("dateMelady", dateMelady + ":" + daytim);
    gitelement("datehijri", datehijri + ":" + daytim);
  } catch (error) {
    console.error(error);
  }
  function gitelement(id, tim) {
    document.getElementById(id).innerHTML = tim;
  }
}
getUser("Sohag");

















// // data loop------------------
// let backrawn = [
//   { back: "bsck1" },
//   { back: "bsck2" },
//   { back: "bsck3" },
//   { back: "bsck4" },
//   { back: "bsck5" },
//   { back: "bsck6" },
//   { back: "bsck7" },
//   { back: "bsck8" },
// ];
// for (let back of backrawn) {
//   document.getElementById("backrawn").innerHTML += `
// <option>${back.back}</option>
// `;
// }
// document.getElementById("backrawn").addEventListener(
//   "change",
//   function () {
//     // document.getElementById("content").classList.add(this.value);
//     console.log(this.value);
//     let removeclass = document.getElementsByClassName("content");

//     for (let elemant of removeclass) {
//       elemant.classList.remove(this.value);
//     }
//     removeclass.classList.add("back2");
//   }
//   // let citiName = "";
//   // for (let citi of citise) {
//   //   if (citi.arbekname == this.value) {
//   //     citiName = citi.name;
//   //   }
//   // }
//   // getUser(citiName);
// );
