const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.) ",
        (meal) => {
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (foodItem) => {
              rl.question(
                "Which sport is your absolute favourite? ",
                (sport) => {
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (superpower) => {
                      console.log(
                        `${name} likes to ${activity}, and listens to ${music} while doing it. ${name}'s favorite meal is ${meal} and enjoys ${foodItem} the most. ${name}'s favorite sport is ${sport}. ${name}'s superpower is ${superpower}.`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
