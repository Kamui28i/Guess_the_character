export type Tier = "easy" | "medium" | "hard";

export interface SketchHints {
  headShape: string;
  accent: string;
  extras: string[];
  palette: string[];
}

export interface Character {
  slug: string;
  displayName: string;
  series: string;
  aliases: readonly string[];
  tier: Tier;
  descriptions: readonly [string, string, string];
  sketchHints: SketchHints;
  bodyPartHints: readonly string[];
  funFacts: readonly string[];
  wikiUrl: string;
}

export const CHARACTERS: Character[] = [
  // ========== EASY TIER ==========
  {
    slug: "goku",
    displayName: "Son Goku",
    series: "Dragon Ball",
    aliases: ["Goku", "Kakarot", "Son Goku"],
    tier: "easy",
    descriptions: [
      "A cheerful warrior from an alien warrior race raised on Earth; signature power-up turns his hair golden.",
      "Rides a flying cloud, carries a red magic staff, and shouts the name of a beam attack that ends in '-hameha'.",
      "The spiky-black-haired hero of the most famous shonen franchise ever; his signature move is the Kamehameha."
    ],
    sketchHints: { headShape: "adult-male-spiky", accent: "orange-gi", extras: ["black-spiky-hair","wristbands","blue-belt"], palette: ["#e86a17","#1a1a1a","#f0c040"] },
    bodyPartHints: ["wild black spiky hair", "orange gi with kanji symbol", "blue wristbands"],
    funFacts: ["His alien birth name is Kakarot", "First appeared in 1984"],
    wikiUrl: "https://dragonball.fandom.com/wiki/Goku"
  },
  {
    slug: "naruto-uzumaki",
    displayName: "Naruto Uzumaki",
    series: "Naruto",
    aliases: ["Naruto", "Uzumaki Naruto", "Seventh Hokage"],
    tier: "easy",
    descriptions: [
      "An outcast orphan who carries a nine-tailed demon fox sealed inside him; dreams of leading his village.",
      "Bright orange jumpsuit, whisker marks on his cheeks, and a headband with a leaf symbol.",
      "The blond spiky-haired ninja whose clone-jutsu and 'rasengan' made him the face of his franchise."
    ],
    sketchHints: { headShape: "teen-male-spiky", accent: "leaf-headband", extras: ["whisker-cheeks","orange-jumpsuit"], palette: ["#f08020","#1a3a5a","#ffd040"] },
    bodyPartHints: ["three whisker marks on each cheek", "metal forehead protector with leaf engraving", "spiky blond hair"],
    funFacts: ["Hosts the Nine-Tailed Fox Kurama", "Ended up as Seventh Hokage"],
    wikiUrl: "https://naruto.fandom.com/wiki/Naruto_Uzumaki"
  },
  {
    slug: "luffy",
    displayName: "Monkey D. Luffy",
    series: "One Piece",
    aliases: ["Luffy", "Straw Hat", "Straw Hat Luffy", "Monkey D Luffy"],
    tier: "easy",
    descriptions: [
      "An endlessly optimistic captain whose body stretches like rubber after eating a cursed fruit.",
      "Wears a red open vest, blue shorts, and a straw hat he got from a pirate mentor.",
      "The grinning rubber-bodied pirate who wants to become King of the Pirates."
    ],
    sketchHints: { headShape: "teen-male-round", accent: "straw-hat", extras: ["red-vest","scar-under-eye"], palette: ["#d4a017","#c41e3a","#1a1a1a"] },
    bodyPartHints: ["straw hat with red ribbon", "scar under the left eye", "red open vest"],
    funFacts: ["Ate the Gum-Gum Fruit", "Scar under his eye is self-inflicted to impress a hero"],
    wikiUrl: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy"
  },
  {
    slug: "ichigo-kurosaki",
    displayName: "Ichigo Kurosaki",
    series: "Bleach",
    aliases: ["Ichigo", "Strawberry", "Kurosaki Ichigo"],
    tier: "easy",
    descriptions: [
      "A teenager who becomes a substitute death god after an accident involving a soul-reaper and his family.",
      "Bright orange hair, perpetually scowling, wields a giant cleaver-like sword.",
      "The orange-haired Soul Reaper protagonist of a very long-running Shonen Jump series."
    ],
    sketchHints: { headShape: "teen-male-spiky", accent: "orange-spiky-hair", extras: ["black-shihakusho","giant-cleaver-sword"], palette: ["#f07020","#0a0a0a","#ffffff"] },
    bodyPartHints: ["spiky bright orange hair", "black Soul Reaper robe", "oversized cleaver sword"],
    funFacts: ["His name roughly means 'strawberry' / 'one who protects'", "Zanpakuto: Zangetsu"],
    wikiUrl: "https://bleach.fandom.com/wiki/Ichigo_Kurosaki"
  },
  {
    slug: "eren-yeager",
    displayName: "Eren Yeager",
    series: "Attack on Titan",
    aliases: ["Eren", "Eren Jaeger", "Yeager"],
    tier: "easy",
    descriptions: [
      "A furious young soldier who swore to kill every giant after one ate his mother — then discovered he could become one.",
      "Wears a tan military jacket with twin-wing emblems, uses grappling hooks to fly between buildings.",
      "The protagonist whose hair grows long and whose views grow darker across the series; turns into a titan."
    ],
    sketchHints: { headShape: "teen-male", accent: "green-cloak", extras: ["wing-emblem","odm-gear-straps","long-hair-late"], palette: ["#2a5a3a","#a07050","#c0c0a0"] },
    bodyPartHints: ["wings of freedom emblem on cloak", "ODM gear harness straps", "green hooded cloak"],
    funFacts: ["Inherits the Attack, Founding, and War Hammer Titans", "Catchphrase: 'Tatakae!' (fight!)"],
    wikiUrl: "https://attackontitan.fandom.com/wiki/Eren_Yeager"
  },
  {
    slug: "saitama",
    displayName: "Saitama",
    series: "One Punch Man",
    aliases: ["Saitama", "Caped Baldy", "One Punch Man"],
    tier: "easy",
    descriptions: [
      "A bored hero who can end any fight in one hit and is depressed about it.",
      "Shiny bald head, yellow jumpsuit, red gloves and boots, white cape — dresses like a cheap superhero costume.",
      "The titular hero of a series whose entire joke is that he's too strong."
    ],
    sketchHints: { headShape: "adult-male-bald", accent: "bald-shiny", extras: ["yellow-jumpsuit","white-cape","red-belt"], palette: ["#f5d020","#ffffff","#c41e3a"] },
    bodyPartHints: ["completely shiny bald head", "yellow jumpsuit", "white cape"],
    funFacts: ["Training: 100 push-ups, 100 sit-ups, 100 squats, 10km run — every day", "Ranked C-class in the Hero Association (to his annoyance)"],
    wikiUrl: "https://onepunchman.fandom.com/wiki/Saitama"
  },
  {
    slug: "light-yagami",
    displayName: "Light Yagami",
    series: "Death Note",
    aliases: ["Light", "Kira", "Yagami Light", "Raito"],
    tier: "easy",
    descriptions: [
      "A top high-school student who finds a supernatural notebook and decides to become god of a new world.",
      "Handsome, brown-haired, always calculating — kills by writing names while eating a potato chip for dramatic effect.",
      "The antagonist-protagonist of a famous mind-games series; his alias is 'Kira'."
    ],
    sketchHints: { headShape: "teen-male-neat", accent: "neat-brown-hair", extras: ["school-uniform","black-notebook"], palette: ["#8a6030","#1a1a1a","#c41e3a"] },
    bodyPartHints: ["neat brown parted hair", "school blazer", "a black leather notebook"],
    funFacts: ["The notebook is called the Death Note", "Iconic potato chip scene"],
    wikiUrl: "https://deathnote.fandom.com/wiki/Light_Yagami"
  },
  {
    slug: "conan-edogawa",
    displayName: "Conan Edogawa",
    series: "Detective Conan",
    aliases: ["Conan", "Shinichi Kudo", "Jimmy Kudo", "Edogawa Conan"],
    tier: "easy",
    descriptions: [
      "A teenage detective trapped in a child's body after being poisoned with an experimental drug.",
      "Round glasses, red bowtie voice-changer, a tranquilizer wristwatch, solves cases pretending to be a 7-year-old.",
      "The shrunk-down sleuth whose name mashes up two legendary mystery writers."
    ],
    sketchHints: { headShape: "child-round", accent: "round-glasses", extras: ["red-bowtie","wristwatch"], palette: ["#1a3a8a","#c41e3a","#ffffff"] },
    bodyPartHints: ["round wire-frame glasses", "red bowtie", "wristwatch"],
    funFacts: ["Alias borrowed from Arthur Conan Doyle + Ranpo Edogawa", "Host theme of this game!"],
    wikiUrl: "https://detectiveconan.fandom.com/wiki/Conan_Edogawa"
  },

  // ========== MEDIUM TIER ==========
  {
    slug: "zoro",
    displayName: "Roronoa Zoro",
    series: "One Piece",
    aliases: ["Zoro", "Roronoa Zoro", "Pirate Hunter", "Zolo"],
    tier: "easy",
    descriptions: [
      "A three-sword-style swordsman with green hair and a chronic inability to read maps.",
      "Wears a green haramaki sash, has a vertical scar over his left eye in the later arcs.",
      "The first crewmate the rubber-pirate captain recruited; dreams of being the world's greatest swordsman."
    ],
    sketchHints: { headShape: "adult-male", accent: "green-short-hair", extras: ["three-katana","green-haramaki","eye-scar"], palette: ["#2a6a3a","#1a1a1a","#a07040"] },
    bodyPartHints: ["green cropped hair", "vertical scar over left eye", "three swords at the hip"],
    funFacts: ["Lost his left eye between time-skip arcs", "Holds a sword in his mouth (Santoryu)"],
    wikiUrl: "https://onepiece.fandom.com/wiki/Roronoa_Zoro"
  },
  {
    slug: "kakashi-hatake",
    displayName: "Kakashi Hatake",
    series: "Naruto",
    aliases: ["Kakashi", "Copy Ninja", "Hatake Kakashi", "Sixth Hokage"],
    tier: "easy",
    descriptions: [
      "A laid-back jonin mentor with a mask covering the lower half of his face and one red eye stolen from a dying friend.",
      "Silver spiky hair tilted sideways, reads adult novels in public without shame, always late.",
      "Team 7's teacher; inherits the Sharingan eye; later becomes Sixth Hokage."
    ],
    sketchHints: { headShape: "adult-male", accent: "silver-spiky-tilted", extras: ["face-mask","leaf-headband-over-eye"], palette: ["#c0c0c0","#2a2a2a","#a0372d"] },
    bodyPartHints: ["silver spiky hair slanted to one side", "cloth mask covering nose and mouth", "headband pulled over left eye"],
    funFacts: ["Alias: Copy Ninja Kakashi", "Has copied over a thousand jutsu"],
    wikiUrl: "https://naruto.fandom.com/wiki/Kakashi_Hatake"
  },
  {
    slug: "levi",
    displayName: "Levi Ackerman",
    series: "Attack on Titan",
    aliases: ["Levi", "Captain Levi", "Heichou"],
    tier: "easy",
    descriptions: [
      "Humanity's strongest soldier — short, stone-faced, obsessed with cleanliness, deadly with grappling gear.",
      "Black undercut hair, cravat, always sipping tea holding the cup from the rim.",
      "The Survey Corps captain whose squad fights titans; famously short, famously angry."
    ],
    sketchHints: { headShape: "adult-male-short", accent: "black-undercut", extras: ["cravat","green-cloak","odm-gear"], palette: ["#1a1a1a","#2a5a3a","#ffffff"] },
    bodyPartHints: ["black undercut with straight bangs", "white cravat at the throat", "green Survey Corps cloak"],
    funFacts: ["Surname chosen by Isayama for its sound", "Holds teacups by the rim, not the handle"],
    wikiUrl: "https://attackontitan.fandom.com/wiki/Levi_Ackerman"
  },
  {
    slug: "edward-elric",
    displayName: "Edward Elric",
    series: "Fullmetal Alchemist",
    aliases: ["Ed", "Edward Elric", "Fullmetal", "Fullmetal Alchemist"],
    tier: "easy",
    descriptions: [
      "A teenage alchemist with a metal right arm and left leg, paying for a forbidden ritual he attempted as a child.",
      "Blond hair in a long braid, red coat with a serpent-cross emblem on the back, extremely short and touchy about it.",
      "State Alchemist with his giant suit-of-armor brother, searching for the Philosopher's Stone."
    ],
    sketchHints: { headShape: "teen-male", accent: "long-blond-braid", extras: ["red-coat","flamel-cross","automail-arm"], palette: ["#c41e3a","#d0b020","#404040"] },
    bodyPartHints: ["long blond braid", "bright red coat with serpent-cross symbol", "metal automail right arm"],
    funFacts: ["State Alchemist codename: Fullmetal", "DO NOT call him short"],
    wikiUrl: "https://fma.fandom.com/wiki/Edward_Elric"
  },
  {
    slug: "vegeta",
    displayName: "Vegeta",
    series: "Dragon Ball",
    aliases: ["Vegeta", "Prince Vegeta", "Prince of Saiyans"],
    tier: "easy",
    descriptions: [
      "A proud warrior prince who started out genocidal and mellowed into a reluctant family man over decades.",
      "Flame-shaped upward hair, permanent scowl, blue jumpsuit and white gloves, shouts 'over 9000' in memes.",
      "Goku's eternal rival; Prince of his dead warrior race."
    ],
    sketchHints: { headShape: "adult-male-flame-hair", accent: "flame-upswept-black-hair", extras: ["blue-jumpsuit","white-gloves","widow-peak"], palette: ["#1a1a1a","#2a4a8a","#ffffff"] },
    bodyPartHints: ["flame-shaped upward black hair with widow's peak", "blue combat jumpsuit", "white boots"],
    funFacts: ["Prince of all (six) Saiyans", "Catchphrase: 'It's over nine thousand!'"],
    wikiUrl: "https://dragonball.fandom.com/wiki/Vegeta"
  },
  {
    slug: "sasuke-uchiha",
    displayName: "Sasuke Uchiha",
    series: "Naruto",
    aliases: ["Sasuke", "Uchiha Sasuke"],
    tier: "easy",
    descriptions: [
      "A brooding prodigy from a massacred clan; defects from his village to chase revenge, returns years later.",
      "Chicken-butt-shaped black hair, red-and-black eyes when activated, wields lightning attacks.",
      "The protagonist's rival; the last Uchiha."
    ],
    sketchHints: { headShape: "teen-male", accent: "duck-butt-hair", extras: ["sharingan-eye","uchiha-fan-symbol","high-collar"], palette: ["#1a1a2a","#c41e3a","#ffffff"] },
    bodyPartHints: ["black 'duck-butt' hairstyle at the back", "red Sharingan eyes with tomoe", "Uchiha clan fan symbol"],
    funFacts: ["Last surviving Uchiha of Konoha", "His older brother massacred the clan"],
    wikiUrl: "https://naruto.fandom.com/wiki/Sasuke_Uchiha"
  },
  {
    slug: "mikasa-ackerman",
    displayName: "Mikasa Ackerman",
    series: "Attack on Titan",
    aliases: ["Mikasa", "Ackerman"],
    tier: "medium",
    descriptions: [
      "A stoic soldier of near-superhuman ability; fiercely devoted to her adoptive brother.",
      "Short black hair (cut mid-series), a red scarf she never takes off, rarely smiles.",
      "The quiet-terrifying Survey Corps soldier with a red scarf; last of an Asian bloodline."
    ],
    sketchHints: { headShape: "teen-feminine", accent: "short-black-hair", extras: ["red-scarf","green-cloak","odm-gear"], palette: ["#c41e3a","#1a1a1a","#2a5a3a"] },
    bodyPartHints: ["red scarf wrapped high around the neck", "short straight black hair", "stoic expression"],
    funFacts: ["Scarf was a gift from her adoptive brother", "Ackerman bloodline grants combat instinct"],
    wikiUrl: "https://attackontitan.fandom.com/wiki/Mikasa_Ackerman"
  },
  {
    slug: "tanjiro-kamado",
    displayName: "Tanjiro Kamado",
    series: "Demon Slayer",
    aliases: ["Tanjiro", "Kamado Tanjiro"],
    tier: "easy",
    descriptions: [
      "A kind-hearted boy who becomes a demon hunter after his family is slaughtered and his little sister turned.",
      "Checkered black-and-green haori, a scar on his forehead, hanafuda earrings, extremely sensitive nose.",
      "The kind protagonist of a best-selling swords-and-demons anime with a box-carrying sister."
    ],
    sketchHints: { headShape: "teen-male", accent: "forehead-scar", extras: ["checkered-haori","hanafuda-earrings","katana"], palette: ["#0a4a2a","#1a1a1a","#c41e3a"] },
    bodyPartHints: ["checkered green-and-black haori pattern", "scar on the forehead", "hanafuda-card earrings"],
    funFacts: ["Carries his demon-turned sister in a wooden box", "Nose can smell emotions"],
    wikiUrl: "https://kimetsu-no-yaiba.fandom.com/wiki/Tanjiro_Kamado"
  },
  {
    slug: "gon-freecss",
    displayName: "Gon Freecss",
    series: "Hunter x Hunter",
    aliases: ["Gon", "Gon Freecss"],
    tier: "medium",
    descriptions: [
      "A 12-year-old who leaves his island to become a Hunter like the father he never met.",
      "Spiky green-black hair that sticks straight up, green outfit, fishing rod, insanely strong for his age.",
      "The wide-eyed protagonist of a series about elite license holders; best friends with an ex-assassin."
    ],
    sketchHints: { headShape: "child-male-spiky", accent: "upward-spiky-green-hair", extras: ["green-jacket","fishing-rod"], palette: ["#2a5a2a","#1a1a1a","#ffd040"] },
    bodyPartHints: ["spiky green-black hair pointing straight up", "green sleeveless jacket", "shorts with boots"],
    funFacts: ["Uses a fishing rod as a weapon", "His Nen type is Enhancement"],
    wikiUrl: "https://hunterxhunter.fandom.com/wiki/Gon_Freecss"
  },
  {
    slug: "deku",
    displayName: "Izuku Midoriya",
    series: "My Hero Academia",
    aliases: ["Deku", "Izuku", "Midoriya", "Izuku Midoriya"],
    tier: "easy",
    descriptions: [
      "Born powerless in a world where 80% of people have superpowers; inherits the #1 hero's power.",
      "Green curly hair, freckles, green-and-white hero costume, breaks his own bones when he goes all-out.",
      "Protagonist of a modern superhero-school anime; catchphrase: 'Plus Ultra!'"
    ],
    sketchHints: { headShape: "teen-male-curly", accent: "green-curly-hair", extras: ["freckles","hero-costume-mask"], palette: ["#2a6a3a","#ffffff","#c41e3a"] },
    bodyPartHints: ["curly dark-green hair", "freckles across the cheeks", "green hero costume with rabbit-ear hood"],
    funFacts: ["Quirk: One For All", "Nickname 'Deku' was originally an insult he reclaimed"],
    wikiUrl: "https://myheroacademia.fandom.com/wiki/Izuku_Midoriya"
  },
  {
    slug: "gojo-satoru",
    displayName: "Satoru Gojo",
    series: "Jujutsu Kaisen",
    aliases: ["Gojo", "Gojo Satoru", "Satoru Gojo"],
    tier: "easy",
    descriptions: [
      "The strongest sorcerer alive; teacher at a magic high school; vibes like he's already bored of being invincible.",
      "White messy hair, a black blindfold over bright blue eyes, tall and skinny in a dark uniform.",
      "The white-haired sensei of the main trio in a megahit 2020s anime; Six Eyes user."
    ],
    sketchHints: { headShape: "adult-male-tall", accent: "white-messy-hair", extras: ["blindfold","black-uniform","blue-eyes"], palette: ["#ffffff","#0a0a0a","#4090e0"] },
    bodyPartHints: ["white messy hair", "black blindfold across the eyes", "bright sky-blue eyes (when shown)"],
    funFacts: ["Technique: Infinity + Limitless", "Bloodline: Six Eyes"],
    wikiUrl: "https://jujutsu-kaisen.fandom.com/wiki/Satoru_Gojo"
  },
  {
    slug: "natsu-dragneel",
    displayName: "Natsu Dragneel",
    series: "Fairy Tail",
    aliases: ["Natsu", "Salamander", "Dragneel"],
    tier: "medium",
    descriptions: [
      "A fire-using mage raised by a dragon; motion sickness cripples him whenever he's on any vehicle.",
      "Spiky pink hair, white scaly scarf, guild mark on his right shoulder.",
      "The fire-fisted protagonist of a magic-guild shonen; team includes a celestial wizard and a flying blue cat."
    ],
    sketchHints: { headShape: "teen-male-spiky", accent: "pink-spiky-hair", extras: ["white-scaly-scarf","guild-mark","vest-open"], palette: ["#f080a0","#ffffff","#e06020"] },
    bodyPartHints: ["spiky pink hair", "white scaly dragon-scale scarf", "red guild mark on shoulder"],
    funFacts: ["Dragon Slayer magic: Fire", "Partner: Happy the blue talking cat"],
    wikiUrl: "https://fairytail.fandom.com/wiki/Natsu_Dragneel"
  },
  {
    slug: "asta",
    displayName: "Asta",
    series: "Black Clover",
    aliases: ["Asta"],
    tier: "medium",
    descriptions: [
      "Born without magic in a magic-based society; compensates with anti-magic swords and sheer lungpower.",
      "Ash-grey spiky hair, crossed bandage-like strap scars, screaming protagonist archetype turned up to 11.",
      "The shouting swordsman protagonist of a clover-themed magic-knight anime."
    ],
    sketchHints: { headShape: "teen-male-spiky", accent: "ash-grey-spiky", extras: ["grimoire-book","oversized-sword"], palette: ["#c0c0c0","#1a3a5a","#1a1a1a"] },
    bodyPartHints: ["ash-grey spiky hair", "five-leaf-clover black grimoire", "oversized anti-magic sword"],
    funFacts: ["Carries a five-leaf clover grimoire (rarity: 1-in-several-centuries)", "Dreams of becoming Wizard King"],
    wikiUrl: "https://blackclover.fandom.com/wiki/Asta"
  },

  // ========== HARD TIER ==========
  {
    slug: "guts",
    displayName: "Guts",
    series: "Berserk",
    aliases: ["Guts", "Black Swordsman", "Gatsu"],
    tier: "medium",
    descriptions: [
      "A scarred mercenary who drags a sword the size of a slab of iron and hunts demons after the worst night of his life.",
      "Missing left eye, prosthetic left arm that hides a cannon, black armor with a brand that attracts evil spirits.",
      "The protagonist of a seminal dark-fantasy manga whose weapon is called the Dragon Slayer."
    ],
    sketchHints: { headShape: "adult-male-scarred", accent: "black-hair-scar-over-eye", extras: ["huge-sword","mechanical-arm","brand-neck"], palette: ["#1a1a1a","#4a1a1a","#a0a0a0"] },
    bodyPartHints: ["vertical scar over the missing left eye", "massive slab-sword on the back", "mechanical left forearm"],
    funFacts: ["Wields the Dragon Slayer", "The brand on his neck bleeds near evil"],
    wikiUrl: "https://berserk.fandom.com/wiki/Guts"
  },
  {
    slug: "spike-spiegel",
    displayName: "Spike Spiegel",
    series: "Cowboy Bebop",
    aliases: ["Spike", "Spike Spiegel"],
    tier: "medium",
    descriptions: [
      "A lazy, jazz-loving bounty hunter with a dark past; one real eye, one artificial, neither looking at the same thing.",
      "Green-tinted messy hair, dark-blue suit with yellow shirt, martial-arts style called Jeet Kune Do.",
      "Protagonist of a 1998 space-western anime considered one of the greatest ever made."
    ],
    sketchHints: { headShape: "adult-male-tall-thin", accent: "green-messy-hair", extras: ["loose-suit","yellow-shirt"], palette: ["#1a3a4a","#d0c040","#406030"] },
    bodyPartHints: ["green-tinted messy hair", "loose-fitting dark blue suit", "mismatched eyes"],
    funFacts: ["Martial art: Jeet Kune Do", "Catchphrase: 'Whatever happens, happens.'"],
    wikiUrl: "https://cowboybebop.fandom.com/wiki/Spike_Spiegel"
  },
  {
    slug: "lelouch",
    displayName: "Lelouch vi Britannia",
    series: "Code Geass",
    aliases: ["Lelouch", "Zero", "Lelouch Lamperouge"],
    tier: "medium",
    descriptions: [
      "An exiled prince who gains the power to command absolute obedience with his eye; launches a revolution behind a mask.",
      "Black hair, purple eyes, wears a dramatic black-and-gold costume with a helmet when in his alter ego.",
      "Masked rebel leader 'Zero' in a mecha political drama; love him or hate him, the ending is iconic."
    ],
    sketchHints: { headShape: "teen-male", accent: "black-hair-swept", extras: ["purple-eye-with-sigil","mask-helmet","black-cape"], palette: ["#1a1a1a","#6a3a8a","#d0b020"] },
    bodyPartHints: ["red-and-black bird sigil in the eye", "dark-purple-and-black cape", "V-shaped helmet mask"],
    funFacts: ["Geass: Absolute Obedience (single use per person)", "Masquerades as 'Zero'"],
    wikiUrl: "https://codegeass.fandom.com/wiki/Lelouch_vi_Britannia"
  },
  {
    slug: "killua",
    displayName: "Killua Zoldyck",
    series: "Hunter x Hunter",
    aliases: ["Killua", "Zoldyck", "Killua Zoldyck"],
    tier: "medium",
    descriptions: [
      "A 12-year-old trained from birth as an assassin; best friend to the main protagonist; uses electricity.",
      "White spiky hair, blue eyes, lazy posture, carries a skateboard, extremely ticklish.",
      "The ex-assassin prodigy of the Zoldyck family in a long-running Hunter license series."
    ],
    sketchHints: { headShape: "child-male-spiky", accent: "white-spiky-hair", extras: ["blue-shirt","skateboard","lightning-sparks"], palette: ["#ffffff","#4080c0","#c0c0c0"] },
    bodyPartHints: ["white spiky hair", "large blue eyes", "pale skin"],
    funFacts: ["From the Zoldyck family of assassins", "Nen type: Transmutation (electricity)"],
    wikiUrl: "https://hunterxhunter.fandom.com/wiki/Killua_Zoldyck"
  },
  {
    slug: "makima",
    displayName: "Makima",
    series: "Chainsaw Man",
    aliases: ["Makima"],
    tier: "medium",
    descriptions: [
      "A soft-spoken Public Safety higher-up with yellow ring-patterned eyes and horrifying motives.",
      "Red-orange hair in low braids, formal white shirt and tie, walks a small dog named Pochita's replacement.",
      "The chilling antagonist/boss of the titular chainsaw-headed-devil protagonist's first arc."
    ],
    sketchHints: { headShape: "adult-feminine", accent: "red-orange-braided-low", extras: ["ring-pattern-eyes","white-shirt-tie"], palette: ["#c06030","#ffffff","#d0a040"] },
    bodyPartHints: ["ring-patterned yellow irises", "red-orange hair in low twin braids", "white dress shirt and dark tie"],
    funFacts: ["Devil contract holder with horrifying control powers", "Public Safety Devil Hunter"],
    wikiUrl: "https://chainsaw-man.fandom.com/wiki/Makima"
  },
  {
    slug: "frieren",
    displayName: "Frieren",
    series: "Frieren: Beyond Journey's End",
    aliases: ["Frieren"],
    tier: "hard",
    descriptions: [
      "An elf mage who outlived her entire adventuring party and is slowly learning what the humans in her life actually meant to her.",
      "White-silver twin braids, pointed ears, emerald-green eyes, a gold-and-white robe.",
      "Protagonist of a quiet, melancholy 2023-24 fantasy anime about what comes after the hero defeats the demon king."
    ],
    sketchHints: { headShape: "adult-feminine-elfin", accent: "white-twin-braids", extras: ["pointed-ears","green-eyes","gold-white-robe"], palette: ["#f0f0f0","#2a6a4a","#d0b020"] },
    bodyPartHints: ["long white-silver twin braids", "long pointed elf ears", "staff topped with a jewel"],
    funFacts: ["Over 1000 years old", "Studied under Flamme, the Great Mage"],
    wikiUrl: "https://frieren.fandom.com/wiki/Frieren"
  },
  {
    slug: "all-might",
    displayName: "All Might",
    series: "My Hero Academia",
    aliases: ["All Might", "Toshinori Yagami", "Symbol of Peace"],
    tier: "easy",
    descriptions: [
      "The world's #1 hero whose true form is a gaunt, sickly man; picks a powerless boy as his successor.",
      "Buff form: enormous muscles, blond V-shaped hair-horns, blue eyes, perpetually smiling. Gaunt form: skeletal, coughs blood.",
      "The muscle mountain of a hero-school anime; his catchphrase is 'I am here!'"
    ],
    sketchHints: { headShape: "adult-male-buff-huge", accent: "v-shaped-blond-horns", extras: ["hero-costume-red-blue","shadowed-eyes"], palette: ["#d0a020","#4060a0","#c41e3a"] },
    bodyPartHints: ["two V-shaped blond hair-horns", "huge muscled silhouette", "shadowed eye sockets"],
    funFacts: ["Real name: Toshinori Yagi", "Inherits and passes on 'One For All'"],
    wikiUrl: "https://myheroacademia.fandom.com/wiki/All_Might"
  },

  // ========== NEW: EASY TIER ==========
  {
    slug: "nezuko-kamado",
    displayName: "Nezuko Kamado",
    series: "Demon Slayer",
    aliases: ["Nezuko", "Kamado Nezuko"],
    tier: "easy",
    descriptions: [
      "A girl turned into a demon who retained her human heart; travels in a box on her brother's back.",
      "Pink kimono with a hemp pattern, a bamboo muzzle in her mouth, small demon horns when powered up.",
      "The box-carried demon sister of the main protagonist; she shrunks herself to fit in a wooden crate."
    ],
    sketchHints: { headShape: "teen-feminine", accent: "bamboo-muzzle", extras: ["pink-kimono","demon-horns","long-dark-hair"], palette: ["#e06080","#1a1a1a","#d0a060"] },
    bodyPartHints: ["bamboo muzzle across the mouth", "pink floral kimono with hemp pattern", "small demon horn on forehead"],
    funFacts: ["Can shrink herself to fit in a box", "Her flame powers are Blood Demon Art"],
    wikiUrl: "https://kimetsu-no-yaiba.fandom.com/wiki/Nezuko_Kamado"
  },
  {
    slug: "zenitsu-agatsuma",
    displayName: "Zenitsu Agatsuma",
    series: "Demon Slayer",
    aliases: ["Zenitsu", "Agatsuma Zenitsu"],
    tier: "medium",
    descriptions: [
      "A cowardly demon slayer who only shows his true power when unconscious or pushed to the absolute limit.",
      "Bleached yellow hair, yellow and orange gradient haori, constantly crying and begging not to fight.",
      "The scaredy-cat thunder-user from the popular swords-and-demons anime."
    ],
    sketchHints: { headShape: "teen-male", accent: "yellow-short-hair", extras: ["yellow-orange-haori","teary-eyes"], palette: ["#d0b020","#e06020","#1a1a1a"] },
    bodyPartHints: ["short bleached yellow hair", "yellow-to-orange gradient haori", "tearful wide eyes"],
    funFacts: ["Thunder Breathing: Thunderclap and Flash", "Asleep or unconscious = god-tier fighter"],
    wikiUrl: "https://kimetsu-no-yaiba.fandom.com/wiki/Zenitsu_Agatsuma"
  },
  {
    slug: "yuji-itadori",
    displayName: "Yuji Itadori",
    series: "Jujutsu Kaisen",
    aliases: ["Yuji", "Itadori", "Itadori Yuji"],
    tier: "easy",
    descriptions: [
      "A physically gifted high-schooler who swallows a cursed finger and becomes the vessel of a demon king.",
      "Pink spiky hair, athletic build, pink stripes on his cheeks when cursed energy activates.",
      "The enthusiastic fist-fighting protagonist of a megahit 2020s supernatural series."
    ],
    sketchHints: { headShape: "teen-male-spiky", accent: "pink-spiky-hair", extras: ["pink-cheek-marks","school-uniform","muscular"], palette: ["#e060a0","#1a1a2a","#ffffff"] },
    bodyPartHints: ["spiky pink hair", "pink markings on the cheeks", "athletic muscular build"],
    funFacts: ["Vessel of Ryomen Sukuna, the King of Curses", "Loves pink and his grandfather's dying wish"],
    wikiUrl: "https://jujutsu-kaisen.fandom.com/wiki/Yuji_Itadori"
  },
  {
    slug: "zero-two",
    displayName: "Zero Two",
    series: "Darling in the FranXX",
    aliases: ["Zero Two", "02", "The Partner Killer"],
    tier: "medium",
    descriptions: [
      "A mysterious half-human pilot with pink hair and small red horns who calls her partner 'darling'.",
      "Long pink hair, two small red oni horns, red officer uniform, signature lollipop.",
      "The iconic pink-haired horned girl from a mecha romance anime."
    ],
    sketchHints: { headShape: "adult-feminine", accent: "pink-long-hair", extras: ["red-horns","red-uniform","lollipop"], palette: ["#e080a0","#c41e3a","#ffffff"] },
    bodyPartHints: ["two small red horns on the forehead", "long flowing pink hair", "red military uniform"],
    funFacts: ["Codename 002", "Calls her co-pilot 'darling'"],
    wikiUrl: "https://darling-in-the-franxx.fandom.com/wiki/Zero_Two"
  },

  // ========== NEW: MEDIUM TIER ==========
  {
    slug: "hisoka",
    displayName: "Hisoka Morow",
    series: "Hunter x Hunter",
    aliases: ["Hisoka", "Hisoka Morow", "The Magician"],
    tier: "medium",
    descriptions: [
      "A sadistic magician-themed fighter who only wants to battle people with 'potential' — friend or foe.",
      "Clown face paint with a teardrop and star, playing-card motif, tall and unnervingly graceful.",
      "The wildcard antagonist-ally of the Hunter license series; uses stretchy gum-like Nen."
    ],
    sketchHints: { headShape: "adult-male-tall", accent: "clown-face-paint", extras: ["playing-card-motif","star-teardrop-face"], palette: ["#c41e3a","#d0b020","#c0c0c0"] },
    bodyPartHints: ["teardrop and star painted on the face", "tall slender silhouette", "playing-card suit symbols on outfit"],
    funFacts: ["Nen type: Transmutation — Bungee Gum", "Obsessed with fighting Gon when he's fully grown"],
    wikiUrl: "https://hunterxhunter.fandom.com/wiki/Hisoka_Morow"
  },
  {
    slug: "aizen-sosuke",
    displayName: "Sosuke Aizen",
    series: "Bleach",
    aliases: ["Aizen", "Sosuke Aizen", "Aizen Sosuke"],
    tier: "medium",
    descriptions: [
      "A soft-spoken captain who reveals himself as the mastermind behind decades of manipulation.",
      "Brown hair slicked back after his reveal, round glasses before it; butterfly-like transformation later.",
      "The unflappable main villain of Bleach; his ability makes him impossible to fight fairly."
    ],
    sketchHints: { headShape: "adult-male", accent: "slicked-back-brown-hair", extras: ["captain-haori","hogyoku-chest","glasses-pre-reveal"], palette: ["#8a6030","#ffffff","#1a1a1a"] },
    bodyPartHints: ["slicked-back brown hair", "white captain's haori", "calm half-lidded eyes"],
    funFacts: ["Zanpakuto: Kyoka Suigetsu — complete hypnosis", "Was never actually defeated in a fair fight"],
    wikiUrl: "https://bleach.fandom.com/wiki/S%C5%8Dsuke_Aizen"
  },
  {
    slug: "madara-uchiha",
    displayName: "Madara Uchiha",
    series: "Naruto",
    aliases: ["Madara", "Uchiha Madara"],
    tier: "medium",
    descriptions: [
      "The legendary co-founder of the Hidden Leaf Village who became its greatest threat after death.",
      "Long spiky black hair, Rinnegan eyes, black war armor with a gunbai war fan.",
      "The supreme Uchiha antagonist of Naruto; considers himself the only one worthy of ruling the world."
    ],
    sketchHints: { headShape: "adult-male-long-hair", accent: "long-wild-black-hair", extras: ["rinnegan-eyes","gunbai-fan","black-armor"], palette: ["#1a1a1a","#6020a0","#808080"] },
    bodyPartHints: ["long spiky black hair flowing past the shoulders", "purple ripple-pattern Rinnegan eyes", "large black war fan"],
    funFacts: ["Co-founded Konoha with Hashirama Senju", "Reanimated twice during the Fourth War"],
    wikiUrl: "https://naruto.fandom.com/wiki/Madara_Uchiha"
  },
  {
    slug: "shigaraki-tomura",
    displayName: "Tomura Shigaraki",
    series: "My Hero Academia",
    aliases: ["Shigaraki", "Tomura Shigaraki", "Tenko Shimura"],
    tier: "hard",
    descriptions: [
      "A villain who disintegrates anything he touches with all five fingers; obsessed with destruction.",
      "Cracked pale skin, dry scraggly blue-grey hair, severed hands attached all over his body as trophies.",
      "The main villain of a superhero-school anime; scratch scratch scratch."
    ],
    sketchHints: { headShape: "adult-male", accent: "pale-cracked-skin", extras: ["disembodied-hands","blue-grey-hair","red-eyes"], palette: ["#4a3a6a","#c0b0c0","#c41e3a"] },
    bodyPartHints: ["disembodied hand covering the face", "scraggly blue-grey hair", "cracked pale skin"],
    funFacts: ["Real name: Tenko Shimura", "Quirk: Decay — disintegrates on five-finger contact"],
    wikiUrl: "https://myheroacademia.fandom.com/wiki/Tomura_Shigaraki"
  },
  {
    slug: "power",
    displayName: "Power",
    series: "Chainsaw Man",
    aliases: ["Power", "Blood Devil"],
    tier: "medium",
    descriptions: [
      "A loud, self-centered Blood Fiend who lies constantly and considers herself superior to everyone.",
      "Long blonde hair with red tips, red horns, yellow slit-pupil eyes, always in a Public Safety uniform.",
      "The chaotic fiend partner of the chainsaw-boy protagonist; loves her cat Meowy more than any human."
    ],
    sketchHints: { headShape: "adult-feminine", accent: "blonde-red-tips", extras: ["red-horns","slit-pupils","public-safety-uniform"], palette: ["#d0b020","#c41e3a","#1a1a2a"] },
    bodyPartHints: ["long blonde hair with red-tipped ends", "two red devil horns", "yellow slit-pupil eyes"],
    funFacts: ["Blood Fiend — a devil inhabiting a human corpse", "Devoted to her cat Meowy"],
    wikiUrl: "https://chainsaw-man.fandom.com/wiki/Power"
  },
  {
    slug: "denji",
    displayName: "Denji",
    series: "Chainsaw Man",
    aliases: ["Denji", "Chainsaw Man"],
    tier: "easy",
    descriptions: [
      "A dirt-poor teen who merges with a chainsaw devil and becomes a public safety devil hunter.",
      "Scruffy blonde hair, simple clothes, chainsaws erupting from his head and arms when transformed.",
      "The chainsaw-wielding protagonist of a gory 2020s anime; dreams of eating toast and having a girlfriend."
    ],
    sketchHints: { headShape: "teen-male", accent: "scruffy-blonde", extras: ["chainsaw-head","devil-hybrid","blood-splatter"], palette: ["#d0a020","#c41e3a","#1a1a1a"] },
    bodyPartHints: ["scruffy uneven blonde hair", "chainsaws protruding from forehead and arms", "simple torn clothing"],
    funFacts: ["Merged with Pochita the Chainsaw Devil", "Simple dreams: eat bread, see boobs"],
    wikiUrl: "https://chainsaw-man.fandom.com/wiki/Denji"
  },
  {
    slug: "megumi-fushiguro",
    displayName: "Megumi Fushiguro",
    series: "Jujutsu Kaisen",
    aliases: ["Megumi", "Fushiguro", "Fushiguro Megumi"],
    tier: "medium",
    descriptions: [
      "A stoic sorcerer who summons shadow-beasts; values saving those worth saving over indiscriminate heroism.",
      "Dark messy hair, dark eyes, usually in a dark high-collar jacket, rarely smiles.",
      "The brooding shadow-user teammate of the pink-haired protagonist."
    ],
    sketchHints: { headShape: "teen-male", accent: "dark-messy-hair", extras: ["high-collar-jacket","shadow-tendrils","stoic-face"], palette: ["#1a1a2a","#4040a0","#ffffff"] },
    bodyPartHints: ["dark messy hair", "high-collar dark jacket", "Ten Shadows technique hand signs"],
    funFacts: ["Ten Shadows Technique — summons shikigami", "His vessel is coveted by Ryomen Sukuna"],
    wikiUrl: "https://jujutsu-kaisen.fandom.com/wiki/Megumi_Fushiguro"
  },
  {
    slug: "kirito",
    displayName: "Kirito",
    series: "Sword Art Online",
    aliases: ["Kirito", "Kazuto Kirigaya", "Black Swordsman", "Kirigaya Kazuto"],
    tier: "easy",
    descriptions: [
      "A gamer trapped in a VR death game who becomes its strongest solo player, the Black Swordsman.",
      "Black spiky hair, dual-wields black swords in his unique style, quiet but fiercely protective.",
      "The protagonist of the first major isekai-trapped-in-a-game anime."
    ],
    sketchHints: { headShape: "teen-male-spiky", accent: "black-spiky-hair", extras: ["dual-black-swords","black-coat","game-interface"], palette: ["#1a1a1a","#4060a0","#ffffff"] },
    bodyPartHints: ["spiky black hair", "long black trench coat", "dual swords crossed on the back"],
    funFacts: ["Only player to dual-wield in SAO", "Real name: Kazuto Kirigaya"],
    wikiUrl: "https://swordartonline.fandom.com/wiki/Kirito"
  },
  {
    slug: "vash-stampede",
    displayName: "Vash the Stampede",
    series: "Trigun",
    aliases: ["Vash", "Stampede", "The Humanoid Typhoon", "Errico"],
    tier: "hard",
    descriptions: [
      "A wanted outlaw with a $$60 billion bounty who is actually a pacifist that refuses to kill anyone.",
      "Spiky blond hair, long red trench coat, prosthetic arm, giant revolver, hidden mechanical arm.",
      "The gunslinger protagonist of a 1998 sci-fi western who leaves craters wherever he goes — accidentally."
    ],
    sketchHints: { headShape: "adult-male-spiky", accent: "spiky-blond-hair", extras: ["red-long-coat","revolver","prosthetic-arm"], palette: ["#c41e3a","#d0b020","#1a1a1a"] },
    bodyPartHints: ["wild spiky blond hair", "floor-length red trench coat", "large silver revolver"],
    funFacts: ["60 billion double-dollar bounty on his head", "Has never killed anyone intentionally"],
    wikiUrl: "https://trigun.fandom.com/wiki/Vash_the_Stampede"
  },
  {
    slug: "usagi-tsukino",
    displayName: "Usagi Tsukino",
    series: "Sailor Moon",
    aliases: ["Usagi", "Sailor Moon", "Serena", "Bunny", "Neo-Queen Serenity"],
    tier: "easy",
    descriptions: [
      "A clumsy crybaby middle-schooler who transforms into the champion of love and justice.",
      "Iconic twin buns with long blond pigtails, sailor-suit costume, magical tiara, crescent moon forehead mark.",
      "The original magical girl; her name in Japanese is a pun on 'rabbit on the moon'."
    ],
    sketchHints: { headShape: "teen-feminine", accent: "twin-buns-pigtails", extras: ["sailor-fuku","tiara","crescent-moon"], palette: ["#ffffff","#d0a020","#c41e3a"] },
    bodyPartHints: ["twin odango buns with extra-long pigtails", "white and blue sailor fuku", "crescent moon on the forehead"],
    funFacts: ["Transform call: 'Moon Prism Power, Make Up!'", "Her name means 'rabbit of the moon'"],
    wikiUrl: "https://sailormoon.fandom.com/wiki/Usagi_Tsukino"
  },
  {
    slug: "senku-ishigami",
    displayName: "Senku Ishigami",
    series: "Dr. Stone",
    aliases: ["Senku", "Ishigami Senku"],
    tier: "medium",
    descriptions: [
      "A genius scientist who wakes in a stone-age world and vows to rebuild civilization through science.",
      "Wild green-tipped white hair, two red marks under his eyes, always holding a flask or tool.",
      "The hyper-logical protagonist of a science-survival anime; '10 billion percent' is his catchphrase."
    ],
    sketchHints: { headShape: "teen-male-wild", accent: "white-green-tips-hair", extras: ["red-eye-marks","flask","animal-skin-clothing"], palette: ["#e0e0e0","#3a8a3a","#c41e3a"] },
    bodyPartHints: ["white hair with green tips spiking outward", "two red lines under each eye", "primitive animal-hide outfit"],
    funFacts: ["Catchphrase: '10 billion percent'", "Rebuilt Cola, ramen, and smartphones from stone age scratch"],
    wikiUrl: "https://dr-stone.fandom.com/wiki/Senku_Ishigami"
  },

  // ========== NEW: HARD TIER ==========
  {
    slug: "griffith",
    displayName: "Griffith",
    series: "Berserk",
    aliases: ["Griffith", "Femto", "The Falcon of Light"],
    tier: "medium",
    descriptions: [
      "A beautiful, charismatic mercenary captain who sacrifices his entire army to become a demon god.",
      "Long white flowing hair, angelic face, wearing white armor with a hawk motif; later a demon with black wings.",
      "The tragic villain of Berserk; his betrayal is considered one of the most infamous moments in manga."
    ],
    sketchHints: { headShape: "adult-male-androgynous", accent: "long-white-flowing-hair", extras: ["white-armor","hawk-helmet","behelit-pendant"], palette: ["#f0f0f0","#c0c0c0","#c41e3a"] },
    bodyPartHints: ["long flowing white hair", "white hawk-motif armor", "behelit egg-shaped pendant"],
    funFacts: ["Behelit user — sacrificed the Band of the Hawk", "Reborn as the God Hand member Femto"],
    wikiUrl: "https://berserk.fandom.com/wiki/Griffith"
  },
  {
    slug: "dio-brando",
    displayName: "Dio Brando",
    series: "JoJo's Bizarre Adventure",
    aliases: ["Dio", "DIO", "Dio Brando"],
    tier: "medium",
    descriptions: [
      "A scheming orphan who steals a nobleman's body, becomes a vampire, then a time-stopping undead overlord.",
      "Bleached blond hair in a distinctive swept style, ornate golden outfit, heart-shaped hair pin, the word 'MUDA' repeated while punching.",
      "The flamboyant centuries-spanning villain of JoJo's; his Stand 'The World' stops time."
    ],
    sketchHints: { headShape: "adult-male-tall-imposing", accent: "blonde-swept-back", extras: ["heart-hairpin","golden-outfit","vampire-fangs"], palette: ["#d0b020","#1a1a1a","#c41e3a"] },
    bodyPartHints: ["slicked-back blond hair with a heart-shaped pin", "ornate golden outfit", "piercing predatory eyes"],
    funFacts: ["Stand: The World — time stop", "Catchphrase: 'WRYYY!' and 'MUDA MUDA MUDA!'"],
    wikiUrl: "https://jojo.fandom.com/wiki/Dio_Brando"
  },
  {
    slug: "johan-liebert",
    displayName: "Johan Liebert",
    series: "Monster",
    aliases: ["Johan", "Johan Liebert", "The Monster"],
    tier: "hard",
    descriptions: [
      "A blond prodigy with no apparent motive who leaves a trail of suicides and murders wherever he goes.",
      "Tall, blond, perfectly calm blue eyes, always impeccably dressed — looks like an angel, acts like the devil.",
      "The titular monster of a 2004 psychological thriller; considered one of anime's greatest villains."
    ],
    sketchHints: { headShape: "adult-male-tall", accent: "neat-blond-hair", extras: ["cold-blue-eyes","formal-attire","serene-smile"], palette: ["#d0c080","#1a3a6a","#ffffff"] },
    bodyPartHints: ["neat blond hair parted cleanly", "cold pale blue eyes with no warmth", "formal shirt and jacket"],
    funFacts: ["Has no clear motive — that is the horror", "Naoki Urasawa's manga ran 1994–2001"],
    wikiUrl: "https://monster.fandom.com/wiki/Johan_Liebert"
  },
  {
    slug: "meruem",
    displayName: "Meruem",
    series: "Hunter x Hunter",
    aliases: ["Meruem", "The King", "Chimera Ant King"],
    tier: "hard",
    descriptions: [
      "The all-powerful Chimera Ant King born to rule humanity, who discovers a hint of humanity through a board game.",
      "Compact muscular build, pale skin, two small tail-like appendages on his head, always composed.",
      "The ultimate villain of HxH's Chimera Ant arc; frightening not for cruelty but for sheer perfection."
    ],
    sketchHints: { headShape: "adult-male-compact", accent: "pale-skin-tail-appendages", extras: ["tail-horns","royal-aura","compact-build"], palette: ["#d0d0c0","#4a4a6a","#c41e3a"] },
    bodyPartHints: ["two tail-like protrusions on the head", "pale grey compact build", "aura of absolute authority"],
    funFacts: ["Nen type: Specialist — can absorb others' Nen", "Played Gungi with Komugi to his dying breath"],
    wikiUrl: "https://hunterxhunter.fandom.com/wiki/Meruem"
  },
  {
    slug: "yusuke-urameshi",
    displayName: "Yusuke Urameshi",
    series: "Yu Yu Hakusho",
    aliases: ["Yusuke", "Urameshi", "The Underworld Detective"],
    tier: "hard",
    descriptions: [
      "A delinquent teen who dies saving a child and is brought back as a Spirit Detective to fight demons.",
      "Slicked-back black hair, green school uniform, his finger is literally a spirit-energy pistol.",
      "The pompadour-adjacent protagonist of a 1990s demon-fighting classic by the creator of HxH."
    ],
    sketchHints: { headShape: "teen-male-slicked", accent: "slicked-back-black-hair", extras: ["green-uniform","spirit-gun-finger"], palette: ["#1a1a1a","#2a5a2a","#4080c0"] },
    bodyPartHints: ["slicked-back black hair", "green middle-school uniform", "pointing index finger (Spirit Gun)"],
    funFacts: ["Technique: Spirit Gun fired from index finger", "Created by Yoshihiro Togashi, same creator as HxH"],
    wikiUrl: "https://yuyuhakusho.fandom.com/wiki/Yusuke_Urameshi"
  },
  {
    slug: "violet-evergarden",
    displayName: "Violet Evergarden",
    series: "Violet Evergarden",
    aliases: ["Violet", "Violet Evergarden", "Auto Memory Doll"],
    tier: "hard",
    descriptions: [
      "A former child soldier learning to write letters for others as she tries to understand the last words her major said to her.",
      "Long blonde hair, blue eyes, prosthetic metal arms with white gloves, wearing a formal white blouse.",
      "Protagonist of a 2018 KyoAni emotional masterpiece; the definition of 'I am not crying, you are.'"
    ],
    sketchHints: { headShape: "adult-feminine", accent: "long-blonde-hair", extras: ["metal-prosthetic-arms","white-gloves","blue-eyes"], palette: ["#d0c080","#4080c0","#ffffff"] },
    bodyPartHints: ["long straight blonde hair", "metal prosthetic arms with white gloves", "pale blue eyes"],
    funFacts: ["Works as an Auto Memory Doll — professional letter writer", "Lost both arms in battle"],
    wikiUrl: "https://violet-evergarden.fandom.com/wiki/Violet_Evergarden"
  },
  {
    slug: "motoko-kusanagi",
    displayName: "Motoko Kusanagi",
    series: "Ghost in the Shell",
    aliases: ["Major", "The Major", "Kusanagi", "Motoko Kusanagi"],
    tier: "hard",
    descriptions: [
      "A cyborg counter-terrorism operative who questions the nature of identity when most of her body is artificial.",
      "Short purple hair, athletic fully-cybernetic body, tactical gear, commands Section 9.",
      "Protagonist of a landmark 1995 cyberpunk anime; hugely influential on sci-fi worldwide."
    ],
    sketchHints: { headShape: "adult-feminine", accent: "short-purple-hair", extras: ["cybernetic-body","tactical-gear","red-eyes"], palette: ["#6040a0","#1a1a2a","#c0c0c0"] },
    bodyPartHints: ["short purple hair", "cybernetic body with visible seams", "tactical combat gear"],
    funFacts: ["Inspired The Matrix directors", "Debates whether a fully artificial brain still has a 'ghost'"],
    wikiUrl: "https://ghostintheshell.fandom.com/wiki/Motoko_Kusanagi"
  },
  {
    slug: "ryuk",
    displayName: "Ryuk",
    series: "Death Note",
    aliases: ["Ryuk", "Ryuuk"],
    tier: "easy",
    descriptions: [
      "A death god who dropped his notebook into the human world out of boredom; just here to watch the show.",
      "Huge black wings, grey-blue skin, enormous grin, wild black hair, loves apples obsessively.",
      "The shinigami sidekick of Death Note's protagonist — technically the one who started everything."
    ],
    sketchHints: { headShape: "monster-male-tall", accent: "wild-black-hair-shinigami", extras: ["black-wings","huge-grin","apple"], palette: ["#1a1a1a","#4a4a8a","#c0c0c0"] },
    bodyPartHints: ["enormous jagged grin", "large black feathered wings", "grey-blue skin with wild black hair"],
    funFacts: ["Dropped his Death Note out of boredom", "Addicted to apples — withdrawals make him contort"],
    wikiUrl: "https://deathnote.fandom.com/wiki/Ryuk"
  },
  {
    slug: "thorfinn",
    displayName: "Thorfinn",
    series: "Vinland Saga",
    aliases: ["Thorfinn", "Thorfinn Karlsefni"],
    tier: "hard",
    descriptions: [
      "A Norse boy who becomes a cold-blooded assassin after his father's murder, then finds a path to peace.",
      "Short blond hair, blue eyes, dual knives crossed on his back, a scar across his cheek.",
      "Protagonist of a historical Viking anime that evolves from revenge story to pacifist odyssey."
    ],
    sketchHints: { headShape: "teen-male", accent: "short-blond-hair", extras: ["dual-knives","cheek-scar","viking-clothing"], palette: ["#d0b060","#1a3a5a","#c0c0a0"] },
    bodyPartHints: ["short blond hair", "dual short knives crossed on the back", "scar on the cheek"],
    funFacts: ["Based on real Norse explorer Thorfinn Karlsefni", "Series created by Makoto Yukimura"],
    wikiUrl: "https://vinlandsaga.fandom.com/wiki/Thorfinn"
  },

  // ========== TOKYO GHOUL ==========
  {
    slug: "ken-kaneki",
    displayName: "Ken Kaneki",
    series: "Tokyo Ghoul",
    aliases: ["Kaneki", "Ken Kaneki", "Eyepatch", "The One-Eyed King", "Haise Sasaki"],
    tier: "easy",
    descriptions: [
      "A bookish college student transformed into a half-ghoul after a date goes catastrophically wrong; torturous events bleach his hair white.",
      "White hair, one black sclera with a red iris, centipede-like kagune tentacles erupting from his back.",
      "The protagonist of a dark urban fantasy set among flesh-eating beings who hide in plain sight."
    ],
    sketchHints: { headShape: "adult-male", accent: "white-hair", extras: ["black-red-eye","kagune-tentacles","finger-to-mouth"], palette: ["#f0f0f0","#1a1a1a","#c41e3a"] },
    bodyPartHints: ["white hair (bleached from trauma)", "one eye with black sclera and red iris", "centipede kagune sprouting from the back"],
    funFacts: ["His black fingernails are a ghoul trait", "Torture turned his hair white mid-series"],
    wikiUrl: "https://tokyoghoul.fandom.com/wiki/Ken_Kaneki"
  },
  {
    slug: "juuzou-suzuya",
    displayName: "Juuzou Suzuya",
    series: "Tokyo Ghoul",
    aliases: ["Juuzou", "Suzuya", "Rei Suzuya"],
    tier: "hard",
    descriptions: [
      "A childlike CCG investigator with an unnerving smile, no sense of pain, and stitches decorating his entire body.",
      "White hair, red stitches sewn across his face and skin, carries a giant scythe-like weapon.",
      "The unsettling white-haired ghoul investigator from the same dark urban fantasy series as the half-ghoul protagonist."
    ],
    sketchHints: { headShape: "adult-male-androgynous", accent: "white-hair-short", extras: ["red-stitches-face","scythe-weapon","childlike-face"], palette: ["#f0f0f0","#c41e3a","#1a1a1a"] },
    bodyPartHints: ["red stitching sewn across the face and neck", "white hair", "childlike grin with unsettling eyes"],
    funFacts: ["Feels no pain due to childhood surgery", "Weapon: Scorpion 1/56 quinques"],
    wikiUrl: "https://tokyoghoul.fandom.com/wiki/Juuzou_Suzuya"
  },
  {
    slug: "shuu-tsukiyama",
    displayName: "Shuu Tsukiyama",
    series: "Tokyo Ghoul",
    aliases: ["Tsukiyama", "The Gourmet", "Shuu Tsukiyama"],
    tier: "hard",
    descriptions: [
      "An impossibly elegant ghoul obsessed with fine cuisine who becomes fascinated — dangerously so — with the half-ghoul protagonist.",
      "Slicked purple hair with a swept-back fringe, a monocle, ornate clothing, and a flair for the dramatic.",
      "The flamboyant 'Gourmet' ghoul of the Tokyo Ghoul cast; switches between French, German, and Italian mid-sentence."
    ],
    sketchHints: { headShape: "adult-male", accent: "purple-slicked-hair", extras: ["monocle","ornate-suit","dramatic-pose"], palette: ["#6040a0","#1a1a1a","#d0c080"] },
    bodyPartHints: ["slicked purple-violet hair", "monocle over one eye", "ornate flamboyant clothing"],
    funFacts: ["Speaks in multiple languages to seem refined", "His Kagune resembles a thorned flower"],
    wikiUrl: "https://tokyoghoul.fandom.com/wiki/Shuu_Tsukiyama"
  },
  {
    slug: "touka-kirishima",
    displayName: "Touka Kirishima",
    series: "Tokyo Ghoul",
    aliases: ["Touka", "Kirishima Touka", "Rabbit"],
    tier: "hard",
    descriptions: [
      "A ghoul who works at a coffee shop as a waitress, concealing her nature while quietly fighting to survive.",
      "Dark purple-blue bob haircut, pale skin, her ghoul mask resembles a rabbit.",
      "The sharp-tongued female lead of the Tokyo Ghoul series; her kagune erupts as a wing from her back."
    ],
    sketchHints: { headShape: "teen-feminine", accent: "dark-blue-bob", extras: ["rabbit-mask","wing-kagune","barista-apron"], palette: ["#2a1a4a","#1a1a1a","#e0e0e0"] },
    bodyPartHints: ["dark purple-blue bob cut", "rabbit-shaped ghoul mask", "single wing kagune"],
    funFacts: ["Her alias is 'Rabbit'", "Works at Anteiku coffee shop"],
    wikiUrl: "https://tokyoghoul.fandom.com/wiki/Touka_Kirishima"
  },
  {
    slug: "rize-kamishiro",
    displayName: "Rize Kamishiro",
    series: "Tokyo Ghoul",
    aliases: ["Rize", "Kamishiro Rize", "Binge Eater"],
    tier: "hard",
    descriptions: [
      "A powerful and voracious ghoul whose organs are transplanted into an unsuspecting college student, changing his life forever.",
      "Long wavy dark hair, glasses, a gentle bookish appearance that hides a savage predator.",
      "The 'Binge Eater' ghoul who inadvertently creates the series' protagonist — her kagune has multiple tentacles."
    ],
    sketchHints: { headShape: "adult-feminine", accent: "long-wavy-dark-hair", extras: ["glasses","tentacle-kagune","rinkaku"], palette: ["#2a1a3a","#c41e3a","#d0c0e0"] },
    bodyPartHints: ["long wavy dark brown-purple hair", "glasses with a soft expression", "multiple rinkaku tentacle kagune"],
    funFacts: ["Her organs were transplanted into Kaneki", "Alias: Binge Eater for her excessive feeding"],
    wikiUrl: "https://tokyoghoul.fandom.com/wiki/Rize_Kamishiro"
  },

  // ========== GINTAMA ==========
  {
    slug: "gintoki-sakata",
    displayName: "Gintoki Sakata",
    series: "Gintama",
    aliases: ["Gintoki", "Gin-san", "White Demon", "Sakata Gintoki"],
    tier: "medium",
    descriptions: [
      "A former samurai reduced to running an odd-jobs business in an Edo-period Japan occupied by aliens; addicted to sweets.",
      "Wavy natural-perm silver hair, dead fish eyes, a red kimono with a Yorozuya crest, and a wooden sword.",
      "The shaggy-haired lazy protagonist of one of the longest-running comedy-action anime ever made."
    ],
    sketchHints: { headShape: "adult-male-wavy", accent: "silver-natural-perm", extras: ["wooden-sword","red-kimono","yorozuya-crest"], palette: ["#d0d0d0","#c41e3a","#1a1a1a"] },
    bodyPartHints: ["wavy silver natural-perm hair", "dead fish / unfocused eyes", "red kimono with Yorozuya symbol"],
    funFacts: ["Runs Yorozuya odd-jobs shop", "Addicted to Strawberry Milk and Jump magazine"],
    wikiUrl: "https://gintama.fandom.com/wiki/Gintoki_Sakata"
  },
  {
    slug: "kagura-gintama",
    displayName: "Kagura",
    series: "Gintama",
    aliases: ["Kagura", "China girl"],
    tier: "hard",
    descriptions: [
      "A girl of superhuman strength from an alien warrior race who eats ungodly amounts and wields an umbrella as a weapon.",
      "Red twin braids, a Chinese qipao outfit, and an umbrella that doubles as a sniper rifle and shield.",
      "The boisterous alien girl member of the Yorozuya trio in the Edo-era alien-occupied comedy series."
    ],
    sketchHints: { headShape: "child-feminine", accent: "red-twin-braids", extras: ["umbrella-weapon","chinese-qipao","gorilla-strength"], palette: ["#c41e3a","#ffffff","#1a1a1a"] },
    bodyPartHints: ["long red hair in twin braids", "white Chinese qipao dress with red trim", "large umbrella"],
    funFacts: ["Member of the Yato alien clan — superhuman strength", "Umbrella has a gun barrel built in"],
    wikiUrl: "https://gintama.fandom.com/wiki/Kagura"
  },
  {
    slug: "toshiro-hijikata",
    displayName: "Toshiro Hijikata",
    series: "Gintama",
    aliases: ["Hijikata", "Mayora", "Hijikata Toshiro", "Demonic Vice-Commander"],
    tier: "hard",
    descriptions: [
      "The Demonic Vice-Commander of the Shinsengumi police force — strict, feared, and obsessed with mayonnaise.",
      "Black spiky hair, piercing dark eyes, blue Shinsengumi haori, always with a cigarette and mayo bottle.",
      "The intimidating deputy of the alien-era Shinsengumi police in the Gintama comedy series."
    ],
    sketchHints: { headShape: "adult-male", accent: "black-spiky-hair", extras: ["blue-haori","mayo-bottle","cigarette"], palette: ["#1a1a2a","#2a4a8a","#e0e0e0"] },
    bodyPartHints: ["black spiky hair", "blue Shinsengumi haori coat", "cigarette in mouth"],
    funFacts: ["Nicknamed 'Mayora' for his mayo obsession", "His katana is named Kazanagi"],
    wikiUrl: "https://gintama.fandom.com/wiki/Toshiro_Hijikata"
  },
  {
    slug: "shinsuke-takasugi",
    displayName: "Shinsuke Takasugi",
    series: "Gintama",
    aliases: ["Takasugi", "Shinsuke Takasugi"],
    tier: "hard",
    descriptions: [
      "A former comrade of the Silver-Haired Samurai who turned to terrorism, seeking to destroy the corrupt world that took their teacher.",
      "Long straight dark hair, an eyepatch over his left eye, a green kimono, and a pipe he's rarely without.",
      "The brooding main antagonist of Gintama's serious arcs; wields a thin blade with terrifying precision."
    ],
    sketchHints: { headShape: "adult-male", accent: "long-dark-hair", extras: ["left-eyepatch","green-kimono","kiseru-pipe"], palette: ["#1a1a2a","#2a4a2a","#c41e3a"] },
    bodyPartHints: ["long straight dark hair", "eyepatch over the left eye", "green kimono with a pipe"],
    funFacts: ["Lost his left eye in the Joui War", "Leads the terrorist group Kiheitai"],
    wikiUrl: "https://gintama.fandom.com/wiki/Shinsuke_Takasugi"
  },
  {
    slug: "kotaro-katsura",
    displayName: "Kotaro Katsura",
    series: "Gintama",
    aliases: ["Katsura", "Zura", "Katsura Kotaro", "Space Madao"],
    tier: "hard",
    descriptions: [
      "A Joui rebel leader officially wanted by the authorities who constantly insists 'It's not Zura, it's Katsura!' despite everyone calling him Zura.",
      "Long straight dark hair past the shoulders, a pale complexion, a traditional haori, and his pet duck Elizabeth.",
      "The idealistic anti-government rebel from the alien-occupied Edo comedy series; travels with a giant white duck."
    ],
    sketchHints: { headShape: "adult-male", accent: "long-straight-dark-hair", extras: ["haori","duck-elizabeth","wanted-poster"], palette: ["#1a1a2a","#6a5a3a","#ffffff"] },
    bodyPartHints: ["long straight black hair flowing down", "traditional haori over a kimono", "accompanied by a giant white duck named Elizabeth"],
    funFacts: ["His pet is Elizabeth, a giant alien dressed as a duck", "Catchphrase: 'It's not Zura, it's Katsura!'"],
    wikiUrl: "https://gintama.fandom.com/wiki/Kotaro_Katsura"
  },

  // ========== BUNGO STRAY DOGS ==========
  {
    slug: "osamu-dazai",
    displayName: "Osamu Dazai",
    series: "Bungo Stray Dogs",
    aliases: ["Dazai", "Osamu Dazai"],
    tier: "medium",
    descriptions: [
      "A suicidal genius detective with the ability to nullify any supernatural power on touch; cheerfully plots his next double-suicide.",
      "Brown hair partially covering one eye, bandages wrapped around his head and arms, a brown belted coat.",
      "The eccentric bandage-wrapped member of the Armed Detective Agency; named after the real novelist Osamu Dazai."
    ],
    sketchHints: { headShape: "adult-male", accent: "brown-hair-over-eye", extras: ["head-bandages","arm-bandages","brown-coat"], palette: ["#8a6030","#d0c080","#1a1a1a"] },
    bodyPartHints: ["bandages wrapped around his head and one eye", "bandaged arms and hands", "brown trench coat with belt"],
    funFacts: ["Ability: No Longer Human — nullifies any ability on touch", "Named after Japanese novelist Osamu Dazai"],
    wikiUrl: "https://bungoustraydogs.fandom.com/wiki/Osamu_Dazai"
  },
  {
    slug: "chuuya-nakahara",
    displayName: "Chuuya Nakahara",
    series: "Bungo Stray Dogs",
    aliases: ["Chuuya", "Nakahara Chuuya", "Slug"],
    tier: "hard",
    descriptions: [
      "A hot-tempered Port Mafia executive who manipulates gravity; his corrupted form is near-invincible but costs him his mind.",
      "Short orange-red hair under a distinctive wide-brim black hat, compact build, black uniform with a red cravat.",
      "The gravity-controlling mafia executive from the same supernatural detective series as the bandaged genius."
    ],
    sketchHints: { headShape: "adult-male-short", accent: "orange-red-hair", extras: ["wide-brim-black-hat","red-cravat","black-uniform"], palette: ["#c06020","#1a1a1a","#c41e3a"] },
    bodyPartHints: ["short orange-red hair", "wide-brimmed black hat", "red cravat around the neck"],
    funFacts: ["Ability: For the Tainted Sorrow — gravity manipulation", "His Corruption form makes him an unstoppable berserker"],
    wikiUrl: "https://bungoustraydogs.fandom.com/wiki/Chuuya_Nakahara"
  },
  {
    slug: "atsushi-nakajima",
    displayName: "Atsushi Nakajima",
    series: "Bungo Stray Dogs",
    aliases: ["Atsushi", "Nakajima Atsushi"],
    tier: "hard",
    descriptions: [
      "An orphan who discovers he can transform into a white tiger; joins the Armed Detective Agency after being pulled from a river.",
      "Silver-white hair with grey streaks, timid eyes, a white shirt and striped vest, tiger stripes appearing during transformation.",
      "The naive but kind protagonist of the supernatural detective series; named after the real short-story writer Atsushi Nakajima."
    ],
    sketchHints: { headShape: "teen-male", accent: "silver-white-grey-hair", extras: ["striped-vest","tiger-arm","wide-scared-eyes"], palette: ["#d0d0d0","#d0b060","#1a1a1a"] },
    bodyPartHints: ["silver-white hair with grey streaks", "striped white and grey vest", "one arm can transform into a white tiger's"],
    funFacts: ["Ability: Beast Beneath the Moonlight — white tiger transformation", "Grew up in an abusive orphanage"],
    wikiUrl: "https://bungoustraydogs.fandom.com/wiki/Atsushi_Nakajima"
  },
  {
    slug: "ryunosuke-akutagawa",
    displayName: "Ryunosuke Akutagawa",
    series: "Bungo Stray Dogs",
    aliases: ["Akutagawa", "Ryunosuke Akutagawa"],
    tier: "hard",
    descriptions: [
      "A ruthless Port Mafia assassin who idolizes his former trainer and views weakness as unforgivable; perpetually coughing.",
      "Pale sickly skin, dark unkempt hair, a long black coat that merges with his ability — a shadowy beast.",
      "The brooding dark-coat assassin of the Bungo Stray Dogs cast; named after novelist Ryunosuke Akutagawa."
    ],
    sketchHints: { headShape: "adult-male", accent: "dark-unkempt-hair", extras: ["black-coat-rashoumon","pale-skin","coughing"], palette: ["#1a1a1a","#2a2a3a","#a0a0b0"] },
    bodyPartHints: ["dark unkempt hair", "long black coat that shifts into shadow tendrils", "pale sickly complexion"],
    funFacts: ["Ability: Rashoumon — a shadowy beast that can devour anything", "Chronic illness makes him cough frequently"],
    wikiUrl: "https://bungoustraydogs.fandom.com/wiki/Ryunosuke_Akutagawa"
  },

  // ========== MOB PSYCHO 100 ==========
  {
    slug: "shigeo-kageyama",
    displayName: "Shigeo Kageyama",
    series: "Mob Psycho 100",
    aliases: ["Mob", "Shigeo Kageyama", "???%"],
    tier: "medium",
    descriptions: [
      "A boy of immense psychic power who suppresses his emotions to keep himself under control — his power explodes when he hits 100%.",
      "Completely unremarkable appearance: black bowl cut, blank expression, simple school uniform.",
      "The deceptively ordinary-looking protagonist of an psychic comedy; his power meter ticks toward disaster."
    ],
    sketchHints: { headShape: "teen-male-bowl-cut", accent: "black-bowl-cut", extras: ["school-uniform","psychic-aura","blank-face"], palette: ["#1a1a1a","#2a4a8a","#c41e3a"] },
    bodyPartHints: ["plain black bowl-cut hair", "blank expressionless face", "plain school uniform"],
    funFacts: ["'Mob' means background character in Japanese slang", "His power gauge reaches ???% in extreme moments"],
    wikiUrl: "https://mobpsycho100.fandom.com/wiki/Shigeo_Kageyama"
  },
  {
    slug: "reigen-arataka",
    displayName: "Reigen Arataka",
    series: "Mob Psycho 100",
    aliases: ["Reigen", "Arataka Reigen", "The Greatest Psychic of the 21st Century"],
    tier: "medium",
    descriptions: [
      "A con artist who runs a spirit-consultation business with zero psychic ability — except for suspiciously good results thanks to his powerful employee.",
      "Slicked black hair, a trim suit, a confident salesman smile, and an inexhaustible supply of made-up psychic techniques.",
      "The charismatic fraud mentor from the psychic comedy series; his 'Salt Splash' attack somehow works on demons."
    ],
    sketchHints: { headShape: "adult-male", accent: "slicked-black-hair", extras: ["business-suit","salt-bottle","confident-grin"], palette: ["#1a1a1a","#2a3a6a","#c0c0c0"] },
    bodyPartHints: ["slicked neat black hair", "business suit with a tie", "signature confident salesman grin"],
    funFacts: ["Has zero psychic ability but convinced everyone otherwise", "Invented techniques: Salt Splash, Cologne Spray, Ordinary Punch"],
    wikiUrl: "https://mobpsycho100.fandom.com/wiki/Arataka_Reigen"
  },

  // ========== HAIKYUU!! ==========
  {
    slug: "shoyo-hinata",
    displayName: "Shoyo Hinata",
    series: "Haikyuu!!",
    aliases: ["Hinata", "Shoyo Hinata", "The Little Giant"],
    tier: "medium",
    descriptions: [
      "A short volleyball player with extraordinary jumping ability who dreams of becoming a great spiker despite his height.",
      "Spiky orange hair, a perpetual wide grin, Karasuno High black and orange volleyball uniform.",
      "The energetic tiny protagonist of a beloved volleyball sports anime; number 10 for the Karasuno crows."
    ],
    sketchHints: { headShape: "teen-male-spiky", accent: "orange-spiky-hair", extras: ["karasuno-uniform","wide-grin","short-stature"], palette: ["#e06020","#1a1a1a","#ffffff"] },
    bodyPartHints: ["spiky orange hair", "Karasuno black #10 volleyball jersey", "short stature with a huge grin"],
    funFacts: ["Jersey number: 10", "Nicknamed 'Chibi-chan' (shorty) by rivals"],
    wikiUrl: "https://haikyuu.fandom.com/wiki/Shoyo_Hinata"
  },
  {
    slug: "tobio-kageyama",
    displayName: "Tobio Kageyama",
    series: "Haikyuu!!",
    aliases: ["Kageyama", "King of the Court", "Tobio Kageyama"],
    tier: "medium",
    descriptions: [
      "A genius volleyball setter with an imperious attitude who must learn to work as a teammate rather than a dictator.",
      "Dark blue-black short hair, sharp cold eyes, Karasuno jersey number 9, permanent scowl.",
      "The prodigious setter partner of the orange-haired spiker in the volleyball anime; once called 'King of the Court'."
    ],
    sketchHints: { headShape: "teen-male", accent: "dark-blue-short-hair", extras: ["karasuno-uniform","setter-hand-position","cold-stare"], palette: ["#1a1a3a","#1a1a1a","#ffffff"] },
    bodyPartHints: ["dark navy-blue short hair", "Karasuno #9 volleyball jersey", "cold intense stare"],
    funFacts: ["Nicknamed 'King of the Court' — originally an insult", "Setter for Karasuno #9"],
    wikiUrl: "https://haikyuu.fandom.com/wiki/Tobio_Kageyama"
  },
  {
    slug: "kei-tsukishima",
    displayName: "Kei Tsukishima",
    series: "Haikyuu!!",
    aliases: ["Tsukishima", "Tsukki", "Kei Tsukishima"],
    tier: "hard",
    descriptions: [
      "A tall, sarcastic middle blocker who hides behind cynicism and refuses to care — until one match changes his mind.",
      "Blond short hair, rectangular glasses, a perpetual smug smirk, extremely tall, Karasuno jersey number 11.",
      "The glasses-wearing tall blond blocker from the Karasuno volleyball team; delivers cutting remarks effortlessly."
    ],
    sketchHints: { headShape: "teen-male-tall", accent: "blond-short-hair", extras: ["rectangular-glasses","smug-smirk","tall-blocker"], palette: ["#d0b040","#1a1a1a","#ffffff"] },
    bodyPartHints: ["blond short hair", "rectangular framed glasses", "tall lanky build with Karasuno #11 jersey"],
    funFacts: ["Tallest on the Karasuno team at 188 cm", "His signature is the 'guess block' read blocking technique"],
    wikiUrl: "https://haikyuu.fandom.com/wiki/Kei_Tsukishima"
  },

  // ========== SPY x FAMILY ==========
  {
    slug: "loid-forger",
    displayName: "Loid Forger",
    series: "Spy x Family",
    aliases: ["Loid", "Twilight", "Loid Forger"],
    tier: "medium",
    descriptions: [
      "A master spy who adopts a child and fake-marries an assassin to maintain his cover for a mission.",
      "Platinum blond hair, sharp green eyes, a well-pressed suit — the picture of a perfect psychiatrist father.",
      "The suave undercover agent protagonist of a comedy spy series who can't let his fake family know he's a spy."
    ],
    sketchHints: { headShape: "adult-male", accent: "platinum-blond-hair", extras: ["green-eyes","business-suit","spy-gadgets"], palette: ["#e0e0c0","#2a4a2a","#1a1a1a"] },
    bodyPartHints: ["platinum blond side-parted hair", "sharp green eyes", "neat professional suit"],
    funFacts: ["Codename: Twilight", "Works for WISE intelligence agency"],
    wikiUrl: "https://spy-x-family.fandom.com/wiki/Loid_Forger"
  },
  {
    slug: "yor-forger",
    displayName: "Yor Forger",
    series: "Spy x Family",
    aliases: ["Yor", "Thorn Princess", "Yor Briar", "Yor Forger"],
    tier: "medium",
    descriptions: [
      "A government clerk who moonlights as an elite assassin; fake-marries a spy without knowing he's a spy.",
      "Black bob haircut, vivid red eyes, pale skin, wears a striking red rose-shaped hair accessory, carries throwing needles.",
      "The deadly but socially awkward 'Thorn Princess' assassin from the spy-comedy family series."
    ],
    sketchHints: { headShape: "adult-feminine", accent: "black-bob-hair", extras: ["red-rose-hairpin","red-eyes","needles-weapon"], palette: ["#1a1a1a","#c41e3a","#e0e0e0"] },
    bodyPartHints: ["black bob hair", "vivid red eyes", "red rose hair accessory"],
    funFacts: ["Codename: Thorn Princess", "Can kick with enough force to launch a person into orbit (almost)"],
    wikiUrl: "https://spy-x-family.fandom.com/wiki/Yor_Forger"
  },
  {
    slug: "anya-forger",
    displayName: "Anya Forger",
    series: "Spy x Family",
    aliases: ["Anya", "Anya Forger"],
    tier: "easy",
    descriptions: [
      "A little girl secretly able to read minds, unaware that her new fake-family is a spy and an assassin.",
      "Short pink hair with two small side-bun-like sections, large green eyes, and the most expressive face in anime.",
      "The telepathic toddler of the spy-comedy family series; her reaction faces launched a thousand memes."
    ],
    sketchHints: { headShape: "child-feminine", accent: "pink-hair-side-buns", extras: ["green-eyes","expressive-faces","school-uniform"], palette: ["#e080a0","#2a6a2a","#ffffff"] },
    bodyPartHints: ["short pink hair with small side bunches", "big expressive green eyes", "Eden Academy school uniform"],
    funFacts: ["Can read minds — she knows her dad is a spy", "Her meme faces are widely popular on the internet"],
    wikiUrl: "https://spy-x-family.fandom.com/wiki/Anya_Forger"
  },

  // ========== JOJO'S BIZARRE ADVENTURE ==========
  {
    slug: "jotaro-kujo",
    displayName: "Jotaro Kujo",
    series: "JoJo's Bizarre Adventure",
    aliases: ["Jotaro", "JoJo", "Jotaro Kujo"],
    tier: "easy",
    descriptions: [
      "A delinquent with a Stand that stops time who travels to Egypt to defeat an immortal vampire threatening his family.",
      "Dark hair under a flat-brim black hat with an anchor emblem, a long dark school coat, Star Platinum stand.",
      "The iconic 'Yare yare daze' protagonist of JoJo's Part 3; his Stand is among the most powerful in the series."
    ],
    sketchHints: { headShape: "adult-male-tall", accent: "dark-hair-black-hat", extras: ["flat-brim-cap","anchor-emblem","long-school-coat"], palette: ["#1a1a1a","#2a2a4a","#d0d0d0"] },
    bodyPartHints: ["flat-brimmed black hat with anchor symbol", "long dark school uniform coat", "stern unimpressed expression"],
    funFacts: ["Stand: Star Platinum — 'ORA ORA ORA!'", "Catchphrase: 'Yare yare daze' (Good grief)"],
    wikiUrl: "https://jojo.fandom.com/wiki/Jotaro_Kujo"
  },
  {
    slug: "giorno-giovanna",
    displayName: "Giorno Giovanna",
    series: "JoJo's Bizarre Adventure",
    aliases: ["Giorno", "GioGio", "Haruno Shiobana", "Giorno Giovanna"],
    tier: "medium",
    descriptions: [
      "The son of an immortal vampire who joins the Italian mafia to become a Gang Star and reform it from within.",
      "Golden hair styled in three spherical buns at the front, a green suit covered in ladybug brooches.",
      "The gold-suit ladybug-covered protagonist of JoJo's Part 5; his Stand turns life into more life."
    ],
    sketchHints: { headShape: "teen-male", accent: "golden-hair-bun-rolls", extras: ["ladybug-brooches","green-gold-suit","Gold-Experience"], palette: ["#d0b020","#2a6a2a","#c41e3a"] },
    bodyPartHints: ["golden hair formed into three ball-shaped rolls at the front", "suit covered with ladybug motif brooches", "ladybug-shaped lapel pins"],
    funFacts: ["Stand: Gold Experience Requiem — negates cause and effect", "Son of DIO"],
    wikiUrl: "https://jojo.fandom.com/wiki/Giorno_Giovanna"
  },
  {
    slug: "joseph-joestar",
    displayName: "Joseph Joestar",
    series: "JoJo's Bizarre Adventure",
    aliases: ["Joseph", "JoJo", "Joseph Joestar"],
    tier: "medium",
    descriptions: [
      "A wisecracking American-British fighter who uses Hamon energy and always seems to know what his enemy is about to say — because he tells them.",
      "Brown wavy hair, a striped headband, suspenders over a muscle shirt, a prosthetic hand in older appearances.",
      "The loud comedic protagonist of JoJo's Part 2; hero in Part 3 — famous for 'Your next line is...' predictions."
    ],
    sketchHints: { headShape: "adult-male", accent: "brown-wavy-hair", extras: ["striped-headband","suspenders","clacker-weapon"], palette: ["#8a5020","#1a1a1a","#d0c080"] },
    bodyPartHints: ["wavy brown hair with a striped headband", "suspenders over a casual muscle shirt", "finger rings and clackers"],
    funFacts: ["Hamon user — Ripple Energy", "Catchphrase: 'Your next line is...' (and he's always right)"],
    wikiUrl: "https://jojo.fandom.com/wiki/Joseph_Joestar"
  },

  // ========== FATE SERIES ==========
  {
    slug: "saber",
    displayName: "Saber",
    series: "Fate/stay night",
    aliases: ["Saber", "Artoria", "Artoria Pendragon", "Arturia", "King Arthur", "Altria"],
    tier: "medium",
    descriptions: [
      "The legendary King of Britain summoned as a Servant; wields an invisible holy sword and fights with regal precision.",
      "Blond hair tied back in a braid, green eyes, armored blue dress with silver plate armor gauntlets.",
      "The iconic 'Saber' class Servant from the Fate franchise; the most recognizable face of the series."
    ],
    sketchHints: { headShape: "adult-feminine", accent: "blond-braid-updo", extras: ["blue-armor","excalibur-invisible","green-eyes"], palette: ["#d0b040","#2a4a8a","#e0e0e0"] },
    bodyPartHints: ["blonde hair tied in a neat braid bun", "blue armored battle dress", "invisible sword held in gauntleted hand"],
    funFacts: ["Her sword Excalibur is cloaked in wind", "Class: Saber — most renowned of all Servant classes"],
    wikiUrl: "https://typemoon.fandom.com/wiki/Saber"
  },
  {
    slug: "gilgamesh-fate",
    displayName: "Gilgamesh",
    series: "Fate/stay night",
    aliases: ["Gilgamesh", "Gil", "King of Heroes", "Archer (Fate/Zero)"],
    tier: "hard",
    descriptions: [
      "The arrogant king of ancient Mesopotamia who considers all treasures in existence his by right — because he created them all.",
      "Spiky golden hair, red-slitted eyes, gleaming golden armor, summoning portals that launch legendary weapons.",
      "The overbearing golden King of Heroes from the Fate series; his Noble Phantasm is every treasure ever made."
    ],
    sketchHints: { headShape: "adult-male", accent: "spiky-golden-hair", extras: ["golden-armor","gate-of-babylon-portals","red-slit-eyes"], palette: ["#d0b020","#c08020","#8a1a1a"] },
    bodyPartHints: ["spiky golden hair", "gleaming gold plate armor", "red slit-pupil eyes"],
    funFacts: ["Gate of Babylon fires every Noble Phantasm in history", "Based on the Epic of Gilgamesh — oldest known literature"],
    wikiUrl: "https://typemoon.fandom.com/wiki/Gilgamesh"
  },
  {
    slug: "rin-tohsaka",
    displayName: "Rin Tohsaka",
    series: "Fate/stay night",
    aliases: ["Rin", "Tohsaka Rin", "Rin Tohsaka"],
    tier: "hard",
    descriptions: [
      "A disciplined mage from one of the three founding families of the Holy Grail War; maintains a perfect reputation at school.",
      "Black twin-tails tied with red ribbons, blue-green eyes, a red turtleneck sweater, a jewel pendant she uses for magic.",
      "The dual-pigtailed tsundere mage of the Fate franchise; her elemental jewels are her main weapon."
    ],
    sketchHints: { headShape: "teen-feminine", accent: "black-twin-tails-red-ribbons", extras: ["red-turtleneck","jewel-pendant","mage-outfit"], palette: ["#1a1a1a","#c41e3a","#4a80c0"] },
    bodyPartHints: ["black twin-tails tied with red ribbons", "red turtleneck sweater", "glowing jewel pendant"],
    funFacts: ["Mage family with two magical crests", "Her Servant is Archer/EMIYA"],
    wikiUrl: "https://typemoon.fandom.com/wiki/Rin_Tohsaka"
  },
  {
    slug: "archer-emiya",
    displayName: "Archer",
    series: "Fate/stay night",
    aliases: ["Archer", "EMIYA", "Counter Guardian", "Heroic Spirit EMIYA"],
    tier: "hard",
    descriptions: [
      "A Counter Guardian Servant with silver-white hair who projects any weapon he has ever seen — and who shares an unsettling connection with the protagonist.",
      "Tan skin, white-silver hair swept back, red-black bodysuit, dual blades Kanshou and Bakuya.",
      "The sardonic red-coated Servant from Fate/stay night whose true identity is a major plot twist."
    ],
    sketchHints: { headShape: "adult-male", accent: "white-silver-swept-hair", extras: ["red-black-bodysuit","dual-blades","tan-skin"], palette: ["#d0c0c0","#c41e3a","#1a1a1a"] },
    bodyPartHints: ["white-silver hair swept back", "tan dark skin", "red coat over black bodysuit with twin curved blades"],
    funFacts: ["Projects weapons using Unlimited Blade Works", "His identity is the series' biggest spoiler"],
    wikiUrl: "https://typemoon.fandom.com/wiki/EMIYA"
  },

  // ========== RE:ZERO ==========
  {
    slug: "subaru-natsuki",
    displayName: "Subaru Natsuki",
    series: "Re:Zero",
    aliases: ["Subaru", "Natsuki Subaru", "Natsuki-kun"],
    tier: "medium",
    descriptions: [
      "A regular Japanese teenager isekai'd into a fantasy world with a hidden power — he returns to a checkpoint every time he dies.",
      "Black hair, dark eyes, a distinctive black-and-white tracksuit jacket with a red emblem.",
      "The suffering protagonist of a dark isekai series who dies repeatedly and resets; his power is called Return by Death."
    ],
    sketchHints: { headShape: "teen-male", accent: "black-hair", extras: ["track-jacket","red-emblem","bruised-face"], palette: ["#1a1a1a","#c41e3a","#ffffff"] },
    bodyPartHints: ["black hair", "black-and-white tracksuit jacket with a red crest", "frequently injured appearance"],
    funFacts: ["Ability: Return by Death — loops back after dying", "Cannot tell anyone about his power or he gets punished"],
    wikiUrl: "https://rezero.fandom.com/wiki/Natsuki_Subaru"
  },
  {
    slug: "rem-rezero",
    displayName: "Rem",
    series: "Re:Zero",
    aliases: ["Rem", "Oni Maid"],
    tier: "medium",
    descriptions: [
      "A devoted demon maid who falls deeply in love with the protagonist after he saves her from her own demons.",
      "Short blue bob haircut, a white maid uniform, one blue oni horn hidden under her bangs, a morningstar flail.",
      "The beloved blue-haired maid from the dark isekai series; often cited as the original 'best girl' of anime wars."
    ],
    sketchHints: { headShape: "adult-feminine", accent: "blue-bob-hair", extras: ["maid-uniform","oni-horn","morningstar-flail"], palette: ["#2a6a8a","#ffffff","#1a1a1a"] },
    bodyPartHints: ["short light-blue bob haircut", "white maid uniform with blue accents", "one oni horn under hair"],
    funFacts: ["One of two twin demon maids (sister Ram has pink hair)", "Sparked years of waifu debates — 'Rem vs Emilia'"],
    wikiUrl: "https://rezero.fandom.com/wiki/Rem"
  },
  {
    slug: "emilia-rezero",
    displayName: "Emilia",
    series: "Re:Zero",
    aliases: ["Emilia", "Emilia-tan"],
    tier: "hard",
    descriptions: [
      "A half-elf spirit mage and royal candidate who is feared by many due to her resemblance to a legendary witch.",
      "Long silver-white hair with a large purple flower ornament, amethyst eyes, a white-and-purple robe.",
      "The main heroine of the dark isekai loop series; her resemblance to the Witch of Envy makes her a target."
    ],
    sketchHints: { headShape: "adult-feminine-elfin", accent: "silver-white-long-hair", extras: ["purple-flower-ornament","purple-eyes","spirit-magic"], palette: ["#d0d0e8","#6040a0","#ffffff"] },
    bodyPartHints: ["long silver-white hair", "purple flower hair ornament", "violet-purple eyes with elf-like features"],
    funFacts: ["Half-elf — pointed ears", "Resemblance to Satella (Witch of Envy) causes widespread fear"],
    wikiUrl: "https://rezero.fandom.com/wiki/Emilia"
  },
];
