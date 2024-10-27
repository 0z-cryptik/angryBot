const emojis = {
  slightlySmilingFace: "🙂",
  unamusedFace: "😒",
  smirkingFace: "😏",
  faceWithHandOverMouth: "🤭",
  foldedHands: "🙏"
};

export const roastFunc = (name: string, message: string): string => {
  const roastsArr: string[] = [
    `Hi ${name}, kindly fuck off ${emojis.slightlySmilingFace}`,
    `Oh shut your stupid ass up, talking bout "${message}" ${emojis.unamusedFace}`,
    "Shut your goofy ass up bitch and go get a job",
    "Shut the fuck up",
    `Shut the fuck up ${name}`,
    `Ain't you got something better to do? ${emojis.smirkingFace}`,
    `Fuck you ${name}`,
    `Fuck off ${name}`,
    "Mirror mirror on the wall, you're the stupidest of them all",
    "blah blah blah... I don't remember asking your dumb ass for a damn thing",
    "Do you have a mental condition? or are you just this fucking stupid naturally?",
    "Please shut up before I make you cry",
    "You sound just as dumb as I expected",
    "Somewhere out there there is a tree that's giving you oxygen. You need to go find that tree and apologise",
    "You asked your mom what her biggest mistake is, she asked you to go look in the mirror",
    "The person that said nobody is ugly must not have met you",
    "You have a face that would make onions cry",
    "I am jealous of all the people that have never met you",
    `You know ${name} I was thinking of you today, and it reminded me to take out the trash`,
    `"${message}"\n\n Were you born this dumb, or did you have to take lessons??`,
    `You know ${name} everyone is allowed to act stupid once in a while, but you're really abusing the privilege ${emojis.faceWithHandOverMouth}`,
    "You must have been born on a highway, because that's where most accidents happen",
    `${name} you're not the dumbest person on the planet, but you sure better hope they don't die ${emojis.foldedHands}`
  ];

  const randomIndex = Math.floor(Math.random() * roastsArr.length);
  return roastsArr[randomIndex];
};
