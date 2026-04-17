// javascripting: 
/// 2026 -> 0xSakCodes :)

const root = document.getElementById("root");

/* adding contexts: */
const scenes = [
  "hello :)",
  "world :)"
];

// adding personalised message: 
const message = `
Henloo, Xyz!
Hopefully you're doing gud today!

Uhm.. Wait!
Analyzing..What should I, Okay..
Resuming...

I actually, dunno what to say :(, ahhh..
Well, I hope you have a great journey ahead. I know you have lots of stuff to deal with.
Never Forget one thing, You matter more than this code can express 👾
Sometimes, Most of things are unexpected, like us meeting in a game >_<!

At Last,
Happiest 20th Birthday!! ❤️
- by Nickname :)
`;

// external images;
const photos = [
  "",
  "",
  ""
];

let i = 0;
// loading intro;
function loadScenes() {
  // iterating over length of scenes;
  if(i < scenes.length){
    const div = document.createElement("div");
    div.className = "scene terminal";
    div.innerText = scenes[i];

    // push the text;
    root.appendChild(div);
    setTimeout(() => div.classList.add("show"), 150);
    i++;
    setTimeout(loadScenes, 900);
  } else {
    loadMessageScene();
  };
};

// loading messages;
function loadMessageScene() {
  const div = document.createElement("div");
  div.className = "scene message";
  root.appendChild("div");

  setTimeout(() => div.classList.add("show"), 150);
  let idx = 0;
  function type(){
    if(idx < message.length){
      let char = message[idx];

      // add gltich :)
      if(char === "." || char === "," || char === ":" || char === ")"){
        div.innerHTML += `<span class="glitch">${char}</span>`;
      } else if(char === "\n") {
        div.innerHTML += "<br>";
      } else {
        div.innerHTML += char;
      };
      idx++;
      let delay = 125;
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
