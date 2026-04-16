// 🔐 PASSWORD
function checkPassword() {
    let pass = document.getElementById("password").value;

    if (pass === "Sabiha Aarif") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("intro").style.display = "flex";
    } else {
        alert("Wrong password 😢");
    }
}

// 🚀 START
function startSurprise() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").style.display = "block";

    document.getElementById("music").play();

    typeText();
    startSlideshow();
}

// 💌 LONG EMOTIONAL MESSAGE
let text = "Nakchadi ❤️...\n\n" +

"Jab maine tumhe pehli baar 2017 me dekha tha...\n" +
"tab shayad mujhe kuch samajh nahi aaya tha,\n" +
"par dil ne kuch feel zaroor kiya tha 💖\n\n" +

"Phir 11 September 2022...\n" +
"wo din jab maine tumhe propose kiya ❤️\n" +
"aur us din ke baad meri life change ho gayi Jaanu 💕\n\n" +

"Sach bolu...\n" +
"tumse pehle mujhe pyaar ka matlab nahi pata tha,\n" +
"par tumne mujhe pyaar feel karaya 💖\n\n" +

"Ab har khushi tumse judi hai,\n" +
"har smile tumhari wajah se hai 😊\n\n" +

"BoltaHu...\n" +
"tum meri life ka sabse beautiful part ho ❤️\n\n" +

"Har fight bhi special hai,\n" +
"kyunki wo bhi tumhare saath hoti hai 😅💖\n\n" +

"Kabhi kabhi darr lagta hai,\n" +
"tumhe kho dene ka...\n" +
"kyunki ab tum meri aadat nahi,\n" +
"meri zarurat ban chuki ho ❤️\n\n" +

"Jaanu...\n" +
"tumne mujhe better insaan banaya hai 💕\n\n" +

"I don’t want perfect life...\n" +
"bas tum chahiye har moment me ❤️\n\n" +

"Aaj bas ek hi baat bolni hai...\n\n" +

"I LOVE YOU SO MUCH NAKCHADI ❤️💖\n\n";

let i = 0;

function typeText() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 35);
    }
}

// 📸 20 IMAGES SUPPORT
let images = [
    "assets/img1.jpg","assets/img2.jpg","assets/img3.jpg","assets/img4.jpg",
    "assets/img5.jpg","assets/img6.jpg","assets/img7.jpg","assets/img8.jpg",
    "assets/img9.jpg","assets/img10.jpg","assets/img11.jpg","assets/img12.jpg",
    "assets/img13.jpg","assets/img14.jpg","assets/img15.jpg","assets/img16.jpg",
    "assets/img17.jpg","assets/img18.jpg","assets/img19.jpg","assets/img20.jpg"
];

let index = 0;

function startSlideshow() {
    setInterval(() => {
        index = (index + 1) % images.length;
        document.getElementById("slide").src = images[index];
    }, 2000);
}

// 💖 FINAL
function showFinal() {
    document.getElementById("finalMessage").style.display = "block";
}

// 😍 YES → NEXT LEVEL
function yesLove() {
    document.body.innerHTML = `
    <div style="text-align:center; margin-top:100px;">
        <h1 style="color:pink;">Yayyy Jaanu 😍💖</h1>
        <h2>Ab tum officially meri ho ❤️</h2>
        <p>Main promise karta hu ki hamesha tumhare saath rahunga 💕</p>
        <button onclick="nextPage()">Next Surprise 🎁</button>
    </div>
    `;
}

// 🎁 FINAL PAGE
function nextPage() {
    document.body.innerHTML = `
    <div style="text-align:center; margin-top:100px;">
        <h1>One Last Thing... 💌</h1>
        <h2>Tum meri life nahi... meri duniya ho ❤️</h2>
        <h2>I LOVE YOU FOREVER NAKCHADI 💖</h2>
    </div>
    `;
}

// 😂 NO BUTTON
function noLove() {
    alert("Wrong answer 😜💖 Try again");
}