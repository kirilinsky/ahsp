// Copy for every question lives here, keyed by the ids in data/questions.js.
// Dictionaries cross the server/client boundary as props, so every value must
// stay JSON-serializable — templates are strings with {placeholders},
// interpolated by i18n/format.js.

const en = {
  meta: {
    title: "AHSP — are here some pteryx?",
    description:
      "A quiz about dinosaurs, and about everything people file under 'dinosaur' by mistake.",
  },
  cover: {
    kicker: "Field notebook",
    title: "Are here some pteryx?",
    subtitle:
      "Eight questions about deep time. Most of what you know about dinosaurs was written by film studios.",
    start: "Open the notebook",
    meta: "8 questions · about 4 minutes",
  },
  ui: {
    question: "Question",
    of: "of",
    progress: "Question {current} of {total}",
    check: "Check",
    next: "Next",
    seeResult: "See the verdict",
    restart: "Start over",
    yourAnswer: "Your answer",
    correctAnswer: "Actually",
    language: "Language",
    theme: "Switch light / dark theme",
    true: "True",
    myth: "Myth",
    correctLabel: "Correct",
    wrongLabel: "Not quite",
    close: "Close enough",
    off: "Off",
  },
  eras: {
    cenozoic: "Cenozoic",
    cretaceous: "Cretaceous",
    jurassic: "Jurassic",
    triassic: "Triassic",
  },
  units: {
    cm: "{value} cm",
    g: "{value} g",
    kg: "{value} kg",
    Ma: "{value} Ma",
    Myr: "{value} million years",
  },
  result: {
    kicker: "Verdict",
    scoreLine: "{score} of {total}",
    restart: "Run it again",
  },
  ranks: {
    filmSchool: {
      title: "Graduate of Jurassic Park",
      note: "Everything you know came from a film studio. Good news: almost none of it was true, so there is a lot of room.",
    },
    giftShop: {
      title: "Museum gift shop",
      note: "You have the plastic dinosaurs and a rough idea of the order of things. The dates are still fiction.",
    },
    fieldAssistant: {
      title: "Field assistant",
      note: "You know a pterosaur is not a dinosaur and that birds got the last laugh. Deep time still slips.",
    },
    curator: {
      title: "Curator",
      note: "You keep the eras straight and you are not fooled by a sail on a back. One specimen got past you.",
    },
    palaeontologist: {
      title: "Palaeontologist",
      note: "Full marks. You know that Stegosaurus is further from T. rex than T. rex is from you.",
    },
  },

  questions: {
    "titanosaur-egg": {
      prompt: "A titanosaur weighed up to 70 tonnes. How wide was its egg?",
      fact:
        "About 30 cm — a football. Shell has to stay thin enough to let oxygen through to the embryo, so eggs hit a hard physical ceiling no matter how enormous the parent gets.",
    },
    "stego-brain": {
      prompt: "Stegosaurus carried five tonnes of body. What did its brain weigh?",
      fact:
        "Around 80 g — a walnut steering five tonnes of animal. Big bodies do not require big brains.",
    },
    "velociraptor-weight": {
      prompt: "How much did a real Velociraptor weigh?",
      fact:
        "About 15 kg — turkey-sized, and feathered. The films drew Deinonychus proportions and kept the snappier name.",
    },
    "trex-arm-lift": {
      prompt:
        "T. rex arms are the running joke of the Mesozoic. How much could one arm lift?",
      fact:
        "Roughly 200 kg per arm — several times what a trained human can curl. The arms were short, not weak.",
    },
    "smallest-dino": {
      prompt: "How long was the smallest non-avian dinosaur we know of?",
      fact:
        "About 34 cm from beak to tail — Anchiornis, pigeon-sized, feathers and all.",
    },
    "trex-timeline": {
      prompt: "When did Tyrannosaurus rex live?",
      fact:
        "66–68 million years ago. Stegosaurus died out some 83 million years before T. rex was born — T. rex is closer in time to you than to Stegosaurus.",
    },
    "dino-era-length": {
      prompt: "How long did the age of dinosaurs last?",
      fact:
        "About 165 million years, from roughly 230 to 66 Ma. Dinosaurs ruled for two and a half times longer than the entire stretch between their extinction and this quiz.",
    },
    "spino-trex": {
      prompt: "Spinosaurus and T. rex could have crossed paths.",
      fact:
        "A myth twice over. Different continents — Africa and North America — and about 30 million years apart. The film put them in the same swamp anyway.",
    },
    "versus-cassowary": {
      prompt: "What is this?",
      description:
        "Two legs, up to 1.8 m tall, a 12 cm dagger claw on the inner toe, lives in tropical rainforest, can kill a person with one kick.",
      optionA: "Bird",
      optionB: "Dinosaur",
      fact:
        "A cassowary — a very large flightless bird, alive right now in Australia and New Guinea, and widely rated the most dangerous bird on Earth. Birds are dinosaurs, technically. This one just never went extinct.",
    },
    "versus-ichthyosaur": {
      prompt: "What is this?",
      description:
        "Dolphin-shaped, hunted ammonites in the open ocean, breathed air, gave birth to live young.",
      optionA: "Marine reptile",
      optionB: "Dinosaur",
      fact:
        "An ichthyosaur — a marine reptile, not a dinosaur. Dinosaurs never took to the ocean at all; every 'sea dinosaur' belongs to a different reptile lineage.",
    },
    "versus-dunkleosteus": {
      prompt: "What is this?",
      description:
        "An armoured head the size of a fridge, bone blades instead of teeth, ocean, 380 million years ago.",
      optionA: "Fish",
      optionB: "Dinosaur",
      fact:
        "Dunkleosteus, an armoured fish. It predates the first dinosaurs by nearly 150 million years — they only show up around 240 Ma.",
    },
    "versus-terrorbird": {
      prompt: "What is this?",
      description:
        "A 2.5 m flightless predator that ran down prey the size of a horse — and lived after the dinosaur extinction.",
      optionA: "Bird",
      optionB: "Dinosaur",
      fact:
        "Phorusrhacos, a 'terror bird', hunting from 15 to 2 million years ago — tens of millions of years after the non-avian dinosaurs were gone.",
    },
    "versus-dimetrodon": {
      prompt: "What is this?",
      description:
        "A tall sail down the back, legs sprawling out to the sides, and a guaranteed slot in every bag of plastic dinosaurs.",
      optionA: "Dinosaur",
      optionB: "Mammal relative",
      fact:
        "Dimetrodon lived some 40 million years before the first dinosaur, and sits closer to us on the family tree than to any reptile.",
    },
    "versus-pterosaur": {
      prompt: "What is this?",
      description:
        "Membrane wings up to a 10 m span, shared the Mesozoic sky with dinosaurs for 150 million years.",
      optionA: "Flying dinosaur",
      optionB: "Flying reptile, but not a dinosaur",
      fact:
        "A pterosaur — its own branch of reptiles. It lived alongside dinosaurs, and lands in the same sticker album every time.",
    },
    pterodactyl: {
      prompt: "In palaeontology, 'pterodactyl' means:",
      options: {
        any: "Any flying reptile of the Mesozoic",
        genus: "Pterodactylus — one specific, fairly small genus",
        synonym: "Exactly the same thing as 'pterosaur'",
        invented: "Nothing — the films made the word up",
      },
      fact:
        "Pterodactylus is a single modest genus, wingspan about a metre. The big crested one you are picturing is Pteranodon.",
    },
    biggest: {
      prompt: "The largest dinosaur ever described:",
      options: {
        argentinosaurus: "Argentinosaurus",
        trex: "Tyrannosaurus rex",
        brachiosaurus: "Brachiosaurus",
        spinosaurus: "Spinosaurus",
      },
      fact:
        "Argentinosaurus — 30–35 m long and 65–75 tonnes. T. rex barely reaches a tenth of that weight.",
    },
    color: {
      prompt: "What do we actually know about the colour of dinosaurs?",
      options: {
        nothing: "Nothing — colour never fossilises",
        some: "For a few species we know it, from fossilised pigment structures",
        allGreen: "They were green and brown, like big lizards",
        everyone: "We can reconstruct the colour of most species",
      },
      fact:
        "Melanosomes — pigment capsules — survive in some fossils. Sinosauropteryx was ginger with a striped tail, Anchiornis grey with a red crest, Borealopelta reddish-brown with a pale belly.",
    },
    "stego-second-brain": {
      prompt: "Stegosaurus had a second brain in its hips.",
      fact:
        "Myth, and a Victorian one. There is a cavity in the hip vertebrae, but it most likely held a glycogen body — an energy store, like the one birds have — not nerve tissue.",
    },
    "polar-dinos": {
      prompt: "Dinosaurs lived above the polar circle, through snow and months of darkness.",
      fact:
        "True. Fossils come from Alaska, Antarctica and southern Australia. Some species were adapted to the cold and to half a year without sunlight.",
    },
  },
};

export default en;
