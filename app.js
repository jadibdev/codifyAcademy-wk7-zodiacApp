var horoscopes = [

		{
			img: "<img src='cancer.png'/>",
			cancer: "Cancer traits. Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. ... Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering. The sign of Cancer belongs to the element of Water, just like Scorpio and Pisces."
		},
		{
			img: "<img src='leo.png'/>",
			leo: "Leo is the fifth sign of the zodiac. These folks are impossible to miss, since they love being center stage. ... It's the Lion that symbolizes Leos, and the king (or queen) of the jungle is a most appropriate mascot, since they consider themselves the rulers of their universe (and the zodiac at that)."
		},
		{
			img: "<img src='aquarius.png'",
			aquarius: "Aquarius is the eleventh sign of the zodiac, and Aquarians are the perfect representatives for the Age of Aquarius. Those born under this sign have the social conscience needed to carry us into the new millennium. These folks are humanitarian, philanthropic and keenly interested in making the world a better place."
		},
		{
			img: "<img src='sagittarius.png'",
			sagittarius: "Sagittarius traits. Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes."
		},
		{
			img: "<img src='capricorn.png'",
			capricorn: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise."
		},
		{
			img: "<img src='pisces.png'",
			pisces: "Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity. Their ruling planet is Neptune, so Pisces are more intuitive than others and have an artistic talent."
		},
		{
			img: "<img src='scorpio.png'",
			scorpio: "Scorpios, born between October 23 and November 21, are known as the hypersexual, super passionate, all-around difficult sign of the Zodiac. And as a Scorpio, I feel no personal shame or guilt in admitting this"
		},
		{
			img: "<img src='libra.png'",
			libra: "Libra (♎) is the seventh astrological sign in the Zodiac. ... Under the tropical zodiac, Sun transits this area on average between (northern autumnal equinox) September 23 and October 23, and under the sidereal zodiac, the sun currently transits the constellation of Libra from approximately October 16 to November 17."
		},
		{
			img: "<img src='virgo.png'",
			virgo: "Virgo is the sixth sign of the zodiac, to be exact, and that's the way Virgos like it: exacting. Those born under this sign are forever the butt of jokes for being so picky and critical (and they can be), but their 'attention to detail' is for a reason: to help others."
		},
		{
			img: "<img src='taurus.png'",
			taurus: "Taurus, the second sign of the zodiac, is all about reward. Unlike the Aries love of the game, Taurus loves the rewards of the game. Think physical pleasures and material goods, for those born under this sign revel in delicious excess. They are also a tactile lot, enjoying a tender, even sensual, touch."
		},
		{
			img: "<img src='aries.png'",
			aries: "Aries (♈) /ˈɛəriːz/ (meaning 'ram') is the first astrological sign in the zodiac, spanning the first 30 degrees of celestial longitude (0°≤ λ <30°). Under the tropical zodiac, the Sun transits this sign mostly from March 21 to April 20 each year. ... March 19 at 23:20 will occur in 2044 UT1."
		},
		{
			img: "<img src='gemini.png'",
			gemini: "Gemini (pronunciation: /ˈdʒɛmɪnaɪ/ or /ˈdʒɛmɪniː/ JEM-in-eye or JEM-in-ee) (♊) is the third astrological sign in the zodiac, originating from the constellation of Gemini. Under the tropical zodiac, the sun transits this sign between May 21 and June 21."
		}
]
var inputBox = document.getElementById("input");
var current_look = document.getElementById("div");
var reset = document.getElementById("div");
var button = document.getElementById("button");
var old_inner = current_look.innerHTML;

button.addEventListener("click", function() {
	var userInput = document.getElementById("input").value.toLowerCase();
	for (var i = 0; i < horoscopes.length; i++) {
		if (horoscopes[i].hasOwnProperty(userInput)) {
			current_look.innerHTML = horoscopes[i].img + "<br>" + "<br>" + horoscopes[i][userInput] + "<br>" + "<br>" + "<button id='button'>Try another sign</button>";
			document.getElementById("button").addEventListener("click", function() {
				location.reload();
			});
		} else {
		document.getElementById("err-par").innerHTML = "no signs with that name, try again!";
	}
}
	//document.getElementById("button").addEventListener("click", function() {
		//location.reload();
	//});
});







inputBox.addEventListener("keyup", function(event) {
	var userInput = document.getElementById("input").value.toLowerCase();
	if (event.which === 13) {
		for (var i = 0; i < horoscopes.length; i++) {
			if (horoscopes[i].hasOwnProperty(userInput)) {
				current_look.innerHTML = horoscopes[i].img + "<br>" + "<br>" + "<br>" + "<br>" + horoscopes[i][userInput] + "<br>" + "<br>" + "<button id='button'>Try another sign</button>";
				document.getElementById("button").addEventListener("click", function() {
					location.reload();
				});
			} else {
				document.getElementById("err-par").innerHTML = "no signs with that name, try again!";
		} 
	} 
}
});

