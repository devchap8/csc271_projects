const mySign = "Virgo"
const birthMonth = "September"
const birthday = 16
const luckyNumber = 8.0
const horoscopeDesc = "Today's your lucky day"
const believe = false

document.getElementById("sign").innerHTML = mySign;
document.querySelector(".birthday").innerHTML += `${birthMonth} ${birthday}th`;
document.querySelector(".luckyNum").innerHTML += luckyNumber;
const paras = document.querySelectorAll("p");
paras[0].innerHTML = horoscopeDesc;
paras[1].innerHTML = `<strong>${believe}</strong>`;

const virgoMood = 3;
const picesMood = 4;
const taurusMood = 5;
const avgMood = (virgoMood + picesMood + taurusMood) / 3;
paras[2].innerHTML = `
    Today's mood rating for Virgo: ${virgoMood} out of 5. <br/>
    Today's mood rating for Pices: ${picesMood} out of 5. <br/>
    Today's mood rating for Taurus: ${taurusMood} out of 5. <br/>
    The average mood rating for Virgo, Pices, and Taurus is: ${avgMood}
`;

const signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", 
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
const devinSign = signs[8];
const ethanSign = signs[2];
const emilioSign = signs[4];

paras[3].innerHTML = `My zodiac sign is ${devinSign}`;
paras[4].innerHTML = `Ethan's zodiac sign is ${ethanSign}`;
paras[5].innerHTML = `Emilio's zodiac sign is ${emilioSign}`;

const horoscopes = [
  "Today is a day for new beginnings. Embrace change and seize opportunities.",
  "Your determination will lead to success today. Stay focused on your goals.",
  "Communication is key today. Express yourself clearly and listen to others.",
  "Trust your intuition. It will guide you in making the right decisions.",
  "Your creativity shines today. Use it to inspire and lead others.",
  "Pay attention to the details. Your meticulous work will pay off.",
  "Balance is essential. Find harmony in all aspects of your life.",
  "Embrace transformation. Let go of what no longer serves you.",
  "Adventure awaits. Explore new horizons and expand your horizons.",
  "Hard work leads to success. Keep pushing toward your goals.",
  "Your unique perspective is an asset. Share your ideas with others.",
  "Trust your emotions. They will guide you in making the right choices."
];

horoscopes[8] = "Adventure awaits. Open new doors and expand your horizons.";
const devinHoro = horoscopes[8];
const ethanHoro = horoscopes[2];
const emilioHoro = horoscopes[4];

paras[3].innerHTML += `<br> My horoscope is ${devinHoro}`;
paras[4].innerHTML += `<br> Ethan's horoscope is ${ethanHoro}`;
paras[5].innerHTML += `<br> Emilio's horoscope is ${emilioHoro}`;

