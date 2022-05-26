// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Constructor for set
function Favcolor(colors) {
    this.favoriteColor = new Set(colors);
    return Array.from(this.favoriteColor);
}

function Favresto(restos) {
    this.favoriteRestaurant = new Set(restos);
    return Array.from(this.favoriteRestaurant)
}

const firstUser = {};

firstUser.name = "Monica";
firstUser.gender ="Female";
firstUser.age = 19;
firstUser.email = "monica@dingdong.com";
const monicaFavColor = new Favcolor([
    "Yellow", "Pink", "White", "Purple",    
    "Yellow", "Pink", "White", "Purple"
]);
firstUser.favoriteColor = monicaFavColor;
firstUser.isHavePet = "Yes";
firstUser.education = [
    {name: "SD 01", city: "Jakarta", graduate: 2016},
    {name: "SMP 02", city: "Jakarta", graduate: 2019},
    {name: "SMA 03", city: "Tangerang"}
]
const monicaFavResto = new Favresto([
    "Bento", "Sushi", "Pancake", "Eggy", 
    "Tempura", "Bento","Eggy", "Padang", 
    "Tteok", "Sushi", "Sushi"
]);
firstUser.favoriteRestaurant = monicaFavResto;

const secondUser = {};

secondUser.name = "Wendy";
secondUser.gender ="Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
const wendyFavColor = new Favcolor([
    "Blue", "Black", "Grey",
    "Blue", "Black", "Grey",
])
secondUser.favoriteColor = wendyFavColor;
secondUser.isHavePet = "No";
secondUser.education = [
    {name: "SD 02", city: "Jakarta", graduate: 2010},
    {name: "SMP 03", city: "Bogor", graduate: 2013},
    {name: "SMA 01", city: "Surabaya", graduate: 2016},
    {name: "Universitas Maju", city: "Tangerang"}
]
const wendyFavResto = new Favresto(
    [
        "Tempura", "Bento", "Sushi", "Pancake", 
        "Padang", "Katsu", "Geprek", "Pancake", "Eggy"
    ]
)
secondUser.favoriteRestaurant = wendyFavResto;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};