// javascripting: 
/// 2026 -> 0xSakCodes :)

const root = document.getElementById("root");

/* adding contexts: */
const scenes = `
Idhar tak pahuch gyee? Congrats! :)
Aapka Thoda Sa Samay Lunga!
Lekin Last tak padhna! :)

> Oii You Dropped Somethingg, :)
> Ohh, Its Brain, Listen Carefully :D.
>> Hehe, Sorry haan..
>>> Ready For Surprise?
>>> Okayyy! Reading Message For You... :)
`;

// adding personalised message: 
const message = `
Henloo, Xyz! :)
🐾 Happy New Year!! 🎉
Hopefully you're doing gud today!

Uhm.. Wait!
Analyzing..What should I say, Okay.. +_+

I actually, dunno what to say :(, ahhh..
Lekin firbhi, i’ll try :),

Well, I hope you have a great journey ahead strong hardworking maam jii..
I know you've been dealing with lots of stuffs, usi baare me kehna chaahunga, Well Done! :)

But, plij haan yeh khud sochke pareshaan hona band krdo :(, isse koi fayeda thodi hai..
Baaki, bohot baare bola hai aur abhi firse bata de rha - koi bhi dikkat, im just few taps awayyy :).
Baar baar thodi naa bata paaunga, >_<! ( shayad bata bhi dun but who knows lol ).

Ek Free Ki Tip Dun!?
Kii, Kuch nhi just Take Care! I hope this feels special on a special day!:).

Ek aur baat, Seedha Seedha bata rha: You matter more than this code can express 👾 ( no selfdoubts okay? )
> (toh befaltu ke jhanjhat band! Chalo Kam se Kam iss special letter me jyada gyaan nhi deta hun lool)
Sometimes, Most of things are unexpected, like us meeting in a game >_<!

At Last, I wont forget to wish yaa. :)
Happiest 20th Birthday!! 🎉❤️
- by Kuch Bhi Keh Lo :)
🎂 ( party kab de rhe loll. )
`;

// external images;
const photos = [
  "",
  "",
  ""
];

// loading intro;
function loadScenes() {
  // iterating over length of scenes;
  const div = document.createElement("div");
  div.className = "scene terminal";
  root.appendChild(div);
  setTimeout(() => div.classList.add("show"), 150);
  let i = 0;
  function types(){
    if (i < scenes.length){
      let char = scenes[i];
      if(char === "\n"){
        div.innerHTML += "<br>";
      } else {
        div.innerHTML += char;
      };
      i++;
      let delay = 125;
      if ([".", ",", "❤️"].includes(message[i - 1])) delay += 120;
      if (Math.random() < 0.03) delay += 180;
      setTimeout(types, delay);
    } else {
      loadMessageScene();
    };
  };
  setTimeout(types, 1200);
};

// loading messages;
function loadMessageScene() {
  const div = document.createElement("div");
  div.className = "scene message";
  root.appendChild(div);

  setTimeout(() => div.classList.add("show"), 150);
  let idx = 0;
  function type(){
    if(idx < message.length){
      let char = message[idx];

      // add gltich :)
      if(char === "." || char === "," || char === ":" || char === ")" || char === "!" || char === "("){
        div.innerHTML += `<span class="glitch">${char}</span>`;
      } else if(char === "\n") {
        div.innerHTML += "<br>";
      } else {
        div.innerHTML += char;
      };
      idx++;
      let delay = 100;
      if ([".", ",", "❤️"].includes(message[idx - 1])) delay += 120;
      if (Math.random() < 0.03) delay += 180;
      setTimeout(type, delay);
    } else {
      document.getElementById("buttonsScene").classList.add("show");
      document.getElementById("buttons").style.display = "flex";
    };
  };
  setTimeout(type, 1200);
};

// start intro;
loadScenes();

// load surprise;
// to be added :)
