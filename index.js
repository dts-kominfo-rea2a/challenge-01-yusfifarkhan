// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Constructor for Favorite Color and Restaurant
function Favcolor(colors) {
    this.favoriteColor = new Set(colors);
    return Array.from(this.favoriteColor);
}

function Favresto(restos) {
    this.favoriteRestaurant = new Set(restos);
    return Array.from(this.favoriteRestaurant)
}

/* Using Constructor Object For Adding Favorite Color */

const monicaFavColor = new Favcolor([
    "Yellow", "Pink", "White", "Purple",    
    "Yellow", "Pink", "White", "Purple"
]);

const wendyFavColor = new Favcolor([
    "Blue", "Black", "Grey",
    "Blue", "Black", "Grey",
]);

/* Using Constructor Object For Adding Favorite Color */

const monicaFavResto = new Favresto([
    "Bento", "Sushi", "Pancake", "Eggy", 
    "Tempura", "Bento","Eggy", "Padang", 
    "Tteok", "Sushi", "Sushi"
]);

const wendyFavResto = new Favresto(
    [
        "Tempura", "Bento", "Sushi", "Pancake", 
        "Padang", "Katsu", "Geprek", "Pancake", "Eggy"
    ]
)



const firstUser = {};

firstUser.name = "Monica";
firstUser.gender ="Female";
firstUser.age = 19;
firstUser.email = "monica@dingdong.com";
firstUser.favoriteColor = monicaFavColor;

// Old Assignment with Set
// firstUser.favoriteColor = new Set([
// "Yellow", "Pink", "White", "Purple",    
// "Yellow", "Pink", "White", "Purple"
// ])

firstUser.isHavePet = "Yes";
firstUser.education = [
    {name: "SD 01", city: "Jakarta", graduate: 2016},
    {name: "SMP 02", city: "Jakarta", graduate: 2019},
    {name: "SMA 03", city: "Tangerang"}
]
firstUser.favoriteRestaurant = monicaFavResto;

// Old Assignment with Set
// firstUser.favoriteRestaurant = new Set([
// "Bento", "Sushi", "Pancake", "Eggy", 
// "Tempura", "Bento","Eggy", "Padang", 
// "Tteok", "Sushi", "Sushi"
// ])


const secondUser = {};
secondUser.name = "Wendy";
secondUser.gender ="Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.favoriteColor = wendyFavColor;

// Old Assignment with Set
// secondUser.favoriteColor = new Set([
// "Blue", "Black", "Grey",
// "Blue", "Black", "Grey",
// ])

secondUser.isHavePet = "No";
secondUser.education = [
    {name: "SD 02", city: "Jakarta", graduate: 2010},
    {name: "SMP 03", city: "Bogor", graduate: 2013},
    {name: "SMA 01", city: "Surabaya", graduate: 2016},
    {name: "Universitas Maju", city: "Tangerang"}
]
secondUser.favoriteRestaurant = wendyFavResto;

// Old Assignment with Set
// secondUser.favoriteRestaurant = new Set([
//     "Tempura", "Bento", "Sushi", "Pancake", 
//     "Padang", "Katsu", "Geprek", "Pancake", "Eggy"
// ])



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