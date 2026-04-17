// javascripting: 
/// 2026 -> 0xSakCodes :)

const root = document.getElementById("root");

/* adding contexts: */
const scenes = `
Hello! :)
World! :)
`;

// adding personalised message: 
const message = `
Henloo, Xyz! :)
Hopefully you're doing gud today!

Uhm.. Wait!
Analyzing..What should I say, Okay.. +_+
Resuming... :)

I actually, dunno what to say :(, ahhh..
Well, I hope you have a great journey ahead. I know you have lots of stuff to deal with.
Never Forget one thing, You matter more than this code can express 👾
Sometimes, Most of things are unexpected, like us meeting in a game >_<!

At Last, I wont forget to wish yaa. :)
Happiest 20th Birthday!! 🎉❤️
- by Nickname :)
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
      div.innerHTML += char;
      i++;
      let delay = 125;
      if ([".", ",", "❤️"].includes(message[idx - 1])) delay += 120;
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
      let delay = 125;
      if ([".", ",", "❤️"].includes(message[i - 1])) delay += 120;
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
