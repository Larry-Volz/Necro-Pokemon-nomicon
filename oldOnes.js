/*

In the spirit of the 1980's anti Dungeons and Dragons sentiment I present to you
the true nature of these evil "Pokemon": they are the disguised forms of H. P.
Lovecraft's elder Gods.  The truth shall be known!  This app will expose their
true natures with quotes from Wikipedia drawn from Lovecraft's monsters and any
additional quotes that anyone would like to contribute as it's an open-source
silly project.  

If you'd like to assign a particular description to a specific pokemon just add 
an object to the object list _______.

Endpoints:
https://pokeapi.co/api/v2/  is the basic endpoint for hte poke API

https://pokeapi.co/api/v2/pokemon gives a list of pokemon names with a count and a 
URL for each

https://pokeapi.co/api/v2/pokemon/{thePokemonsNumber}/ (the URL returned from previous
call) brings you to that specific pokemon

res.sprites.other.official-artwork.front_default should give the image (?)

Resource Lists/Pagination (group)
Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API. By default, a list "page" will contain up to 20 resources. If you would like to change this just add a 'limit' query parameter to the GET request, e.g. ?=60. You can use 'offset' to move to the next page, e.g. ?limit=60&offset=60.

Named (endpoint)
GET https://pokeapi.co/api/v2/{endpoint}/


*/


let x = summonButton();



function summonButton(){
    //notice it's important of adding async in front
    //of the callback function since it CALLS an sync function
    document.querySelector("#summon").addEventListener("click", async () =>{
        const rnd = Math.floor(Math.random()*1118);
        let summoned = getRandomGod();
        let alter = document.getElementById("oldGods");
        // console.log(`summoned: ${summoned}`)
        // console.log(alter);
        alter.innerText = "";
        alter.innerText += `\n\n${summoned}`;
        let pokemon = await getPokemon(rnd);
        let pokeName = await getNames(rnd);
        //Notice the use of brackets and quotes because of the - in official-artwork
        let sprite = pokemon.data.sprites.other["official-artwork"].front_default;
        document.getElementById("picture").innerHTML = `<img src = "${sprite}">`;
        // console.log(sprite);
        console.log(pokeName)
    });
    }
function getRandomGod(){
    let rnd = Math.floor(Math.random()*oldOnes.length);
    return oldOnes[rnd];
}

async function getPokemon(rnd) {
    res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rnd}/`);
    return res;
    
}

async function getNames(rnd) {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1118`);
    const pokeName = res.results[rnd][name];
    // console.log(`pokemon names ${res}`);
    return pokeName;
    
}


// async function getPokemonName(rnd){
//     res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
//     return res;
// }

const oldOnes = ["A grey festering blob of infinite malevolence, described as the lesser brother of Tsathoggua or spawn of Cthulhu, born from his bile and tears.[5]",
"An entity of living sound native to the Gulf of S'glhuo, and manifesting as a huge monstrous being. He is served by the Denizens of S'glhuo, which are made of his same substance.",
"A dark cloudy mass, with tentacles, absorbing falling stars.",
"A gigantic mysterious entity whose cult is perhaps coincident with that of Egyptian God Amun. Once dwelling in a gigantic palace known as Gz-eh near the Valley of the Kings, his dreaming force was able to shape reality. Causing life to eventually flourish within the Nile Valley, over 3,000 years ago, before the stars ceased to be right, and the advancing desert entombed his titanic body beneath the sands. Priests of his cult have built up secret subterranean mausoleums to access the Great Old One's body, and please the slumbering god by giving cattle as sacrificial victims.",
"Appears much like Cthugha, but grey and cold.",
"A Lunar entity that dwells in the Dimension of Enno-Lunn.",
"A humanoid-torso with tentacles instead of limbs, and a short neck ending in a toothless, featureless mouth.",
"A giant spider with a human-like face.",
"Daughter of both Yig and the Outer Goddess Yidhra, appearing as a gigantic octopus-like horror with serpentine eyes, and detachable tentacles, which may move independently. She dwells within the cavern of a deep canyon somewhere in Texas.",
"A tall, shadowy humanoid figure with yellow glowing eyes, and strange protrusions like the branches of dead trees. She is a servant of Shub-Niggurath.",
"A huge, flying scorpion with an ant-like head.[9]",
"Not described, possibly a humanoid crustacean or a gigantic crab.[10]",
"Appears as a cyanotic humanoid, followed by an eerie blizzard.",
"Appears as a gigantic water lizard.",
"Appears as a black slimy mass covered in eyes and mouths, much like a Shoggoth.",
"Revered as a god of the dead and reanimated the deceased to sustain itself on their life force. Theorized to be an avatar of Nyarlathotep, though this is not confirmed.",
"Appears as a gigantic multicolored toad with one eye, a proboscis, crab-like claws, and tentacles below the mouth.",
"A vampiric elephant-like humanoid, with a mouth on the end of its trunk.",
"Appears as a gigantic reptilian humanoid with two facing snakes in place of an actual head, as depicted in the Coatlicue statue. She was the former mate of Yig, revered in K'n-yan along with her consort.",
"Appears as a mutagenic, glowing, foul-smelling mist or fluid that mutates all organisms around it while slowly consuming their life-force.",
"A marine tentacled horror made of fish, whale, and octopus-like features.[14]",
"Not described, but likely something gigantic and serpent or worm-like.",
"A formless mass of shape-shifting water.",
"(Half-)sister of Cthulhu, which spawned the Star-Spawn of Cthulhu.",
"Appears as a living conflagration.",
"A massive hybrid of human, octopus, and dragon. He is usually depicted as being hundreds of meters tall, with webbed arms, tentacles, and a pair of rudimentary wings on his back.",
"Appears as a huge winged octopus-like creature with six eyes. Youngest of Cthulhu and Idh-yaa's progeny.",
"Appears as a gigantic black mass of tentacles, with a single green eye at the center.",
"Appears as a formless mound, with one arm-like appendage.",
"A serpentine (likely Tremors-like) earth-shaking horror dwelling in the subsoil of Memphis, US.",
"A jewel-facetted, semi-crystalline geode with mineral tentacles.",
"A gigantic saurian creature similar to Bokrug, but terrestrial, and endowed with a mane of tentacles.[17]",
"A ravenous plant-god who arrived from Xiclotl to Earth, awed by the Insects from Shaggai. He appears as a white orb hiding an enormous magenta excrescence, like an orchid or a lamprey-like mouth, with emerald tentacles, tipped with hands emerging from within the hideous mass.",
"Appears as a huge, pallid, gelatinous oval with a myriad of legs and multiple eyes.",
"A plant-like parasitic horror native to the jungle planet Kr llyand, which orbits a dead, green star.",
"A formless monstrosity with a huge, arm-like appendage.",
"A bluish-brown, slimy monstrosity riddled with holes, and an occasional malformed head.",
"Appears as a colossal horror with multifarious appendages, and Gorgon-like powers.",
"A titanic mass of jelly-like material.",
"A cosmic-entity manifesting as a gigantic, spongy, and fleshy mass covered in a myriad of both eyes and spines. He is said to be the nemesis of the Outer God Uvhash, usually summoned to contrast this deity.",
"Appears as a giant three-eyed slug with metallic spines, and tiny pyramid-like feet underneath.",
"An eyeless and deaf Lunar deity worshiped in the ancient continent of Theem'dra, as well as in the Dreamlands, often mentioned as similar to Mnomquah, though apparently not related to each other.[21]",
"Usually manifests through a Dionysian sculpture, but its true form is that of a gigantic wattled slug-thing.",
"Appears as a colossal pillar of amorphous alien flesh, with a cyclopean head. It drags up the continent it is summoned in, and causes the entire world to suddenly cave-in on itself.[24]",
"A vaporous red entity haunting the rainforest of Central Africa. It has the power to turn humans into zombie-like servants, the Tree-Men of M'bwa.",
"A gigantic entity dwelling in some reverse dimension, resembling a huge bullet with a long proboscis.",
"Appears as a gigantic, black, toad-like creature with an impossibly malevolent glare, or a tentacled, scaled, bat-winged entity.",
"An entity cut in ten pieces by Yig during a time of great battle (one of these pieces is an alabaster dish found in Egypt, dated back 1,300 BC). It resembles and has a similar domain as the Greek god Dionysus.",
"A sentient plant-like entity dwelling within a series of caverns, where it is always served by mutant rabbit-like worshipers.",
"A monstrous bird-like fiend with sharp teeth, dwelling beneath Antarctica, vaguely resembling an extinct pterosaur.",
"A destructive entity manifesting as a ravenous metallic vortex. He seems to be another half-brother of Cthulhu, like Hastur, and related to the slug-like Glaaki as well. He has also been called a 'son of Yog-Sothoth'. Whether these titles are literal or conceal some dark truth about the Destroyer, none can ascertain. He dwells somewhere in the Pleiades stellar region, and when summoned, he brings devastation.",
"A shadowy incorporeal entity dwelling in the Dreamlands.",
"A great shadow thing, with two glaring red eyes, able to transform the skull of its victims into green glowing stones carved with strange symbols.",
"A tentacled amoebic horror with multiple eyes, orifices, and a dangling gland forming a hideous face.",
"The consort of Othuyeg, likely similar to her bridegroom.",
"A being made of cold, howling mist bound to Yig's worship.",
"A microbial entity, responsible for plagues.",
"His true form is unknown, but usually manifests either as a polypous, ravenous floating mass endowed with tentacles, drills, and suckers, or more frequently, as the King in Yellow, a humanoid being wearing tattered, yellow clothes and a mask hiding the face. He is said to be Cthulhu's (half-)brother. He is said to be of the air element opposed to Cthulhu's water element.",
"A towering greenish trunk with a 'crown' of tentacles, a row of multiple eyes, and a series of additional lateral grasping appendages.",
"a monstrous, amorphous, whirling entity living within a wandering black hole called Vix ni-Aldru, which also hosts a city made of titanic blocks, inhabited by mysterious creatures resembling either worms or lizards.",
"Lesser brother of Cthulhu, manifesting as a gigantic mouth surrounded by countless tentacles, similar to a titanic sea anemone.",
"Has a spheroid body, elongated arms, short legs, and a pendulum-like head dangling underneath. He is the brother of Ghisguth, and uncle of Tsathoggua.",
"A gigantic, pale, worm-like horror dwelling beneath the crust of the star Xoth. She has been Cthulhu's first bride, and with him spawned three sons Ghatanothoa, Ythogtha, and Zoth-Ommog and a younger daughter, Cthylla.",
"A formless expansive bluish-black mass, haunting both the Ecuadorian and Peruvian coasts, mentioned in Cth at Aquadingen as inimical to the Deep Ones.",
"A levitating, sinuous glowing creature.",
"A cat-like deity, similar to Bastet, but vicious and malignant. Her sister is the sylvan Lythalia.",
"A gigantic, corpse-like human, with webbed feet and glowing red eyes.",
"A crustacean-like, tentacled, half-amorphous marine horror which serves Cthulhu, dwelling in the depths of the Bay of Rhiiklu, somewhere within the eastern coast of the United States.",
"Appears as a great shining ball of energy.",
"Likely a gigantic larva-like horror, dwelling in the nebulous realm of K'gil'mnon, along with the Gharoides, its parasitic insectoid servants.",
"Mentioned in the American comic book Challengers of the Unknown #81-87 (1977) as the sister of M'Nagalah.",
"A huge mass of coiled, writhing tentacles. She is Cthulhu's sister and mate, who bore him the twin daughters Nctosa and Nctolhu.",
"A squat, sea cucumber-like monstrosity with five eyes, three-toed, taloned appendages, and a large mouth. He is described as one of Glaaki s brethren, and dwells within the Moore Reservoir of Vermont, in the United States.",
"A dark octopoid horror, similar to the Norse Kraken, but dwelling inside a temple somewhere within a hidden warm valley in Alaska.",
"Sister of Zstylzhemghi.",
"An amphibious humanoid with four, seven-clawed arms, and tentacles in place of legs. The head is lion-like, but bony and his mouth encases three long tongues. He lies trapped beneath the seafloor, inside a mysterious seamount called Nayghof.",
"A monstrous, brown, leathery, alien entity native to a mysterious planet, currently slumbering within a gigantic mausoleum lost in the desert-wastes, set to guard a priceless treasure made up of the oldest decayed planets.",
"A six-eyed, crocodile-snouted monstrosity covered with both tentacles and tripod-like limbs. Revered by the ancient Egyptians as the deification of both darkness and chaos.",
"A giant hairless dingo-like fiend living in the Dreamlands (or the Dreamtime of Aboriginal myths).",
"An alien entity, similar to Grey aliens, dwelling in the dark side of the planet Mars.[30]",
"A photophobic bat-winged monstrosity, with both a thousand-eyed misshapen head and huge maws.",
"A female seductive humanoid-entity, covered in both vines and vegetal parts. Somehow, she has been the mate of the Elder God Nodens, bearing him the twin gods Vorvadoss and Yaggdytha.[31] The feline Istasha is the sister of Lythalia.",
"A dragon-like entity, covered in pseudopods, regarded as the mother of the Snake-God Yig and said to be imprisoned beneath the sunken continent of Mu.",
"A spider-eyed bat-winged horror lurking within the Congo River.",
"A mass of both entrails and eyes, or a massive blob-thing.[34]",
"A very large and eyeless lizard-like creature with a 'crown' of feelers.",
"A shape-shifting cloud of darkness.",
"Mormo appears in many forms, but three are most common: as a mocking vampiric maiden, as a tentacle-haired gorgon, or as a hunched toad-like albino with a mass of feelers instead of a face. This last form is the appearance of her servitors, the Moon-beasts.",
"A lustrous orb floating at the center of a whirling vortex of razor-sharp, metallic-looking blades.",
"A succubus-like fiend with alien traits, and tentacles in place of hair. She is mentioned as a cousin of Nyarlathotep in the O  Khymer Revelations, and worshiped by witch cults in Salem, Oregon.",
"Twin daughters of Cthulhu, imprisoned in the Great Red Spot of the planet Jupiter. They both appear as huge shell-endowed beings, with eight segmented limbs, and six long arms ending with claws, vaguely resembling their 'half-sister' Cthylla.",
"A ferocious and towering wolf-like humanoid with bat wings. He is served by werewolf servants known as the Lupine Ones.",
"A mysterious entity related to Yog-Sothoth, Shub-Niggurath, and possibly Azathoth as well which manifests either as a faun-like humanoid with color-changing hair, or as a glowing halo of unknown color.",
"A sort of gigantic pulsating heart secluded in a parallel dimensions. It is responsible for spawning all of the various monsters which exist within the known Universe.",
"Two horrid nebulous masses of shape-changing vapor from which eyes, tentacles, maws, and hooves emerge; somewhat like Shub-Niggurath. They have been spawned by Yog-Sothoth, and both (or either) are regarded as the blasphemous parents of Cthulhu.",
"A blurry, dark, kraken-like entity mentioned in the Song of Yste, and said to dwell in Outer Space.",
"A tall larva-like monstrosity, with hundreds of segmented taloned tendrils, exiled by the Elder Gods into a parallel dimension, with close connections to the rainforests of South America, where he lures human victims to enslave from other dimensions. Formerly, he was too an Elder God.",
"Appears as an inky cloud of shadows.",
"A giraffe-like reptilian monster.",
"Appears as a huge, tentacled mollusk.",
"A twisting tentacled mass, with a single alien face somewhere in the center of the slimy squirming mass.",
"Appears as a great tentacled eye similar to Cy egha, but much more similar to the monster featured in the horror movie The Crawling Eye.[42] He currently dwells within the subsoil of Kansas, in the fabled Seven Cities of Gold.",
"A maddening, twisted-minded, alien entity appearing as a feminine figure in a red cloak, with three eyes, and an utterly alien face. Likely coincident with Classical Underworld goddess Persephone, she manifest aboard a ghost ship and contact traumatized humans, with hidden artistic talent, to spread both chaos and despair across the world.",
"A black, fanged, cycloptic demon with arms like swaying serpents.[44] The entity normally dwells in another dimension a 'seething and sub-dimensional chaos' beyond the mundane universe.[45] The wizard Eibon of Hyperborea sometimes summoned Pharol to query him for arcane information.[46]",
"A powerful extragalactic entity, awed by  Ymnar. It battled against the Elder God Paighon.",
"A tall humanoid with an eyeless sea anemone-like face, and a beaked grinning mouth, who can be summoned like a jinn.",
"A mysterious entity related to zoomorphic shapeshifters, especially were-cats.",
"Appears as a miniature, wrinkled mummy with stiff, outstretched claws.",
"Worshiped as a deity in a lost continent located in the southern Atlantic Ocean. He appears related to Nyarlathotep, and his form is likely octopoid, with myriads of horns along a maddening body.",
"A towering mass of crystals, residing on the lightless planet Mthura.",
"A shark-like humanoid native to the Bermuda Triangle, possibly similar to Cthulhu's avatar the Father of All Sharks.",
"A titanic raptorial fiend with a huge, single eye and a crown of tentacles.",
"A gigantic and likely multi-armed fiend.",
"A fiery entity similar to Cthugha, able to absorb nuclear radiation, and imprisoned somewhere within the subsoil of New Mexico.",
"A three-eyed, gilled, proboscidian monster with a globular torso, six, long sinuous limbs ending in black paws, with crab-like claws, and covered in what appears to be hair, but is actually tiny tentacles.",
"A black leafless oak tree, hot to the touch and with a single red eye at the center.",
"Mentioned in the American comic book Challengers of the Unknown #81-87 (1977) as the brother of M'Nagalah.",
"A gigantic, whitish worm with a huge maw and hollow eyes made of dripping globules of blood.",
"A mysterious extra-dimensional entity, regarded as the brother of Yig, ruling over a dimension called Zandanua.",
"A gigantic, ghostly hog.",
"One of Hziulquoigmnzhah's children, supposedly female.[49]",
"A crocodile-headed reptilian humanoid, equal to the Ancient Egyptian god Sobek.",
"A colossal glowing worm, with a starfish-shaped head, dwelling in Antarctica and served by the Mi-go.",
"The granddaughter of Tsathoggua, an amorphous mass which mated with a Hyperborean Voormi and spawned the legendary thief Knygathin Zhaum. In Chaosium's Dead Leaves Fall RPG supplement, she appears as a fiend with oily snakes skin, and prehensile dreadlocks like a Gorgon.",
"A dark-skinned humanoid horror with tentacles sprouting from his head, and glowing red eyes, worshiped by the earliest African civilizations as the god Amun. He is said to be rival of Cthulhu.",
"Not described, likely an amorphous mass.",
"Mysterious entity mentioned in Howard Phillips Lovecraft's letter to James F. Morton[51] as a descendant of Cthulhu which spawned other two horrid descendants (K'baa the Serpent and Ghoth the Burrower). The latter would have sired with a Roman noblewoman Viburnia the legendary ancestor of Lovecraft himself in a fictional family tree. The appearance of Shaurash-Ho has never been described.",
"An eyeless alien humanoid entity, massively overgrown with both strange flesh and machinery.",
"A shape-shifting entity, often manifesting as a spiny five-legged crab, with a spider-like head and metallic bracelets on each limb.",
"A gigantic slimy worm, with a mass of black tentacles surrounding its maw.",
"A dark smoky column, with red malevolent eyes and a grotesque face, imprisoned inside a vintage box.",
"A starfish-like horror spawned by the Outer God C'thalpa. It has been cut into pieces, but individual fragments live independently.",
"Appears as a colossal worm with tentacles for a head.",
"A dark blob of darkness endowed with tentacles.",
"A gigantic marine horror with twelve snaky-limbs, endowed with suckers, and a beard of tentacles, both served and revered by vicious merfolk, known as the 'Children of Sthanee'.[57]",
"An invisible entity made of both snow and chill, servitor of Ithaqua.",
"A mouthless, grotesque humanoid with pale tentacles protruding from underneath a dark robe.",
"A hideous being appearing as a dark, gigantic, legless bird-like horror swathed in dark flames, with its long neck topped by a black lump, half of which endowed with a big glowing eye and the other being covered in innumerable tentacles. It was revered by Slavic and Viking folks as the Solar god Svarog, though sharing almost nothing with the traditional deity.",
"A mysterious evil entity, manifesting as a pillar of dazzling light, dwelling in the ruins of Nan Madol, near Ponape. Its name recalls that of Polynesian creator god Tangaroa.",
"Slavic and Ugric God-like creature, photophobic and burrowing fiend awed in the Middle Ages. It cannot endure sunlight, and eludes it by tunneling deep underneath the roots of oak trees.",
"A malignant entity manifesting as a mace-wielding armored warrior. He is revered as the Principle of Evil in Zothique, but his cult dates back to the time of Mu.",
"The offspring of Cthulhu and the Elder God Sk'tai.",
"An octopoid monster of Hyborian Age, which haunts the underground city of Xuthal.",
"A colossal, burrowing arthropod-like horror.",
"A monstrous entity manifesting as a horrible patchwork of flesh, soil, and alien matter.",
"Appears as a huge, furry, almost humanoid toad, or a bat-like sloth.",
"A mysterious subterranean horror, dwelling deep within the flooded caves of Florida, served by the eel-like horrors known as the Tulush.",
"A fungine entity with both tentacles and tendrils, which haunts the swamplands of Florida, somehow similar to The Green God.",
"A sadistic entity trapped by the Elder Gods in a remote dimension of the Space-Time continuum, and appearing as a 4-m tall lizard-like horror with six legs, and a mouth filled with vicious fangs.",
"A huge faceless creature with various appendages sprouting from its head, a beard of oozing horns, many reddish teats, and fish-like fins sprouting from an egg-shaped body.",
"An amorphous monster of prodigious size, covered in a multitude of eyes, mouths, projections, and both male and female genitalia.",
"A huge, furry, and rapidly shifting entity casting radioactive stones.",
"A dragon-like or reptilian entity said to be familiar of Yig.",
"A slimy shape-shifting mass, which can be summoned with mud and the blood of the invoker.",
"Spawn of the Snake-God Yig, appearing as a winged and feathered serpent with flaming nostrils, somehow similar to the Aztec God Quetzalcoatl, trapped inside a dark tower topped with a giant five-pointed star.",
"A tentacled horror similar to a Sun Star, but endowed with branching tentacles, spines, myriads of blue glaring eyes, and gaping-maws.",
"May appear as a huge, unearthly plant.",
"A massive worm-like fiend similar to a Graboid from Tremors.",
"A titanic, globular mass of various dark colors, endowed with a huge single-eye in the middle of the alien bulk.",
"A sadistic, mind-controlling, faun-like humanoid, likely related to Shub-Niggurath.",
"A bristly-mass with large gaping maws, made up with tentacles and spider-like limbs.",
"An illusion-making entity with no true form.",
"A tentacled, multi-eyed, soul-devouring abomination which dwells between dimensions.[66]",
"A rolling cloud of ebony darkness or a vortex of boreal cold, revered by Atlanteans priests of the Hyborian Age.",
"A three-eyed, octopoid, and parasitic horror trapped inside a Central American mountain range.",
"Worshiped in ancient Lemuria. Aspect of the Triple God of Chaos. Known as Yama, king of demons, in Tibet.",
"A 10-foot tall winged being which rules over the Nightgaunts, before being defeated in ancient Britain by a centuria of Roman soldiers.",
"Appears as a naked, obese, headless humanoid with a mouth in the palm of each hand; other features are nebulous.",
"A hideous female or hermaphroditic entity of tremendous power, cousin of Cthulhu and Hastur, imprisoned by the Great Old Ones being themselves aware of her powers. She dwells within the 'Temple of Pillars,' in the depths of Kyartholm located somewhere in the Northern Hemisphere. Her appearance is never described, but likely formless, larva-like, and tentacled as depicted in the minion-spawn which serve her parasitizing human victims.",
"A worm-like monster dwelling at Northern Polar latitudes, said to be the rival or inimical to Nyarlathotep.",
"A giant snake with human-like arms covered in scales. Son of the Mappo's Dragon, children of his are Ayi'ig and Voltiyig, whereas Rokon is regarded as the brother of Yig.",
"A monstrous, barrel-shaped sea worm with tentacles and a lamprey-like mouth.",
"A shape-shifting entity spawned by the Outer God Ngyr-Korath to serve him only. It may grant great powers to whoever chooses to serve him and his master, but his final aim is the destruction of all sentient and intelligent life in the Cosmos.",
"A gigantic, amoebic, glowing, and multihued gelatinous mass living within the dark depths of Earth.",
"A huge crystalline-being residing in the seas of the ocean planet Yilla. Its hypnotic abilities force those spacefarers, who stray too closely, to suddenly plunge into the depths of its lethal sea.",
"One of Hziulquoigmnzhah's children, supposedly male and gigantic.[71]",
"Appears as a colossal Deep One, with tentacles surrounding its one eye.",
"A vampiric vaporous entity which adsorbs vital forces.",
"A festering, bubbling mass that constantly churns and whirls, putting forth vestigial appendages and reabsorbing them. Bubbles burst on the surface to reveal hate-filled eyes, and slobbering mouths form or close randomly about his horrible body. He dwells in the Xentilx galaxy, served by the Zarrian aliens.",
"Both appear as a colossal mass of tentacles, trapped inside the 'Plateau of Sung,' somewhere in Myanmar.",
"A mysterious fiery entity, that shall release Cthulhu from his prison once the stars are right.",
"A gigantic entity with a cone-shaped body, a reptilian head, a beard of tentacles, and starfish-like arms.",
"Spawn of the Outer God Ycn gnnisssz, described as a living alien swarm. She also has a sister named Klosmiebhyx.",
"Appears as a swirling, black vortex, revered by the Mutsune Native Americans as a dire death god. He is a,lso worshiped by mysterious servitors known as the Hidden Ones.[72]",
"An obese bat-winged humanoid with a long polypous snout and a wide mouth, opening in the belly, served by the Deep Ones.",
"A bat-winged, armless toad with tentacles instead of a face."];


