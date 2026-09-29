/* Test 02: 10 Standard English Conventions + 10 Rhetorical Synthesis + 10 Transitions.
   Blanks: write 3+ underscores (______) anywhere in a passage or prompt. */
QBank.register({
  id: "test-02",
  title: "Test 02",
  description: "Standard English Conventions, Rhetorical Synthesis, and Transitions",
  timeLimitMinutes: 36,
  sections: [
    {
      title: "Standard English Conventions",
      directions: "<p>Each question gives a short text with a blank. Choose the option that completes the text so that it follows the conventions of Standard English: sentence boundaries, punctuation, and grammar.</p>",
      questions: [
        {
          id: "sec-01",
          skill: "Boundaries: colon before an explanation",
          passage: "After finding information about Harold Eugene Ford, who represented Tennessee in the United States House of Representatives, the student discovered biographical sketches of two other Black Americans who served in ______ Harold Washington of Illinois and Augustus (Gus) Freeman Hawkins of California.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["Congress.", "Congress;", "Congress:", "Congress,"],
          answer: "C",
          explanation: "The clause before the blank is complete and promises specifics (“two other Black Americans”); the names after the blank deliver them. A colon introduces that explanation. A period or semicolon would leave the names as a fragment, and a comma does not signal what follows."
        },
        {
          id: "sec-02",
          skill: "Boundaries: title + name, subject–verb",
          passage: "A 2004 study led by ______ studied the impact of fertilizers containing nitrogen on grassland arthropod populations. Another study, led by Tracy in 2002, looked at fertilizers containing nitrogen and two other macronutrients: phosphorus and potassium.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["researcher Peter Dennis", "researcher Peter Dennis,", "researcher, Peter Dennis,", "researcher, Peter Dennis"],
          answer: "A",
          explanation: "“Researcher Peter Dennis” works like a title plus a name (compare “Doctor Peter Dennis”), so no comma separates them. The whole phrase “A 2004 study led by researcher Peter Dennis” is the subject of “studied,” and a single comma can't come between a subject and its verb."
        },
        {
          id: "sec-03",
          skill: "Boundaries: no punctuation inside a phrase",
          passage: "In Puerto Rico, it's not unusual for a city or town to be known ______ a nickname that corresponds to one of its notable features, like landscape, climate, famous residents, or chief exports. For example, the Puerto Rican municipality of Hatillo has also been called “the land of Green Fields,” a nickname that alludes to what the area is well known for: the lush greenery that surrounds it.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["by", "by—", "by,", "by:"],
          answer: "A",
          explanation: "“Known by a nickname” is one phrase: the preposition “by” leads straight into its object, “a nickname.” A dash, comma, or colon would split the preposition from its object."
        },
        {
          id: "sec-04",
          skill: "Boundaries: items in a series",
          passage: "In the thought-provoking 2010 exhibition <i>Relative Pelican</i> at the Stux Gallery in New York, Sokari Douglas Camp presented sculptures that had been ______ welded from recycled metal materials, such as oil drums. In doing so, the London-based Nigerian sculptor challenged viewers to imagine new uses and futures for the material wastes of the past.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["cut, bent, and,", "cut, bent, and", "cut, bent; and", "cut bent, and"],
          answer: "B",
          explanation: "After “had been” comes a list of three verbs: cut, bent, and welded. Commas separate the items (“cut, bent, and welded”). No comma goes after “and,” a semicolon can't separate simple list items, and D drops the comma after “cut.”"
        },
        {
          id: "sec-05",
          skill: "Boundaries: nonessential clause",
          passage: "Many experts, like lawyer and cycling advocate Ernesto Hernandez-Lopez, have proposed bike travel as one possible way to alleviate congestion on the busy roadways of Los Angeles County, California. Indeed, local bicycle paths like the Harbor Park bicycle ______ have become an increasingly popular means of travel for commuter and recreational trips alike.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["path, which is about 0.38 miles long", "path which is about 0.38 miles long", "path: which is about 0.38 miles long,", "path, which is about 0.38 miles long,"],
          answer: "D",
          explanation: "“Which is about 0.38 miles long” is extra information about the Harbor Park path. A nonessential clause in the middle of a sentence needs a comma on both sides: one after “path” and one before the sentence continues with “have become.”"
        },
        {
          id: "sec-06",
          skill: "Boundaries: sentence break",
          passage: "Consider the mechanics of the pinhole camera: light passes through a small hole, resulting in a focused projected image. A ray diagram reveals how this ______ the hole's small size restricts light to a single ray, all light passing through the hole can only arrive at a single destination, eliminating diffraction and ensuring a clear image.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["works because", "works. Because", "works, it's because", "works: it's because"],
          answer: "B",
          explanation: "“A ray diagram reveals how this works” is a complete sentence. What follows is another complete sentence: a “Because…” clause plus the main clause “all light… can only arrive at a single destination.” So a period goes after “works.” A runs the two together, and C and D add “it's,” which leaves “all light…” stranded after a comma."
        },
        {
          id: "sec-07",
          skill: "Form: plurals vs. possessives",
          passage: "What makes the theremin a unique musical instrument? You play it without touching it. When you place your ______ the pitch will shift as your hands move through the air.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["hand's between the two antenna's,", "hands between the two antennas,", "hands' between the two antennas',", "hands' between the two antennas,"],
          answer: "B",
          explanation: "Nothing in this phrase owns anything, so no apostrophes are needed: “hands” and “antennas” are plain plurals. The comma after “antennas” ends the introductory “When…” clause before the main clause “the pitch will shift.”"
        },
        {
          id: "sec-08",
          skill: "Boundaries: colon before an independent clause",
          passage: "On March 23, 2021, a gust of wind wreaked havoc on global trade. <i>Ever Given</i>, an international shipping container vessel, became lodged in Egypt's Suez Canal, a major shipping route between Europe and Asia. The vessel took six days to ______ it's as heavy as two thousand blue whales when fully loaded.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["dislodge in part due to its sheer size,", "dislodge, in part due to its sheer size:", "dislodge, in part due to its sheer size,", "dislodge, in part, due to its sheer size"],
          answer: "B",
          explanation: "“It's as heavy as two thousand blue whales” is an independent clause that explains “its sheer size,” so a colon must come before it. A comma there (A, C) creates a comma splice, and D has no punctuation at all. The comma after “dislodge” sets off the added phrase “in part due to its sheer size.”"
        },
        {
          id: "sec-09",
          skill: "Boundaries: colon before a list",
          passage: "Included in <i>Every Day: Selections from the Collection</i>, a 2019 group exhibition at the Baltimore Museum of Art in Maryland, was the work of multimedia artist Lorna Simpson. The impact of Simpson's work is ______ the horizons of conceptual photographic art, challenging conventional notions of race, gender, history, and memory, and shedding light on the experience of African American women in contemporary society.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["threefold; expanding", "threefold expanding", "threefold. Expanding", "threefold: expanding"],
          answer: "D",
          explanation: "“The impact of Simpson's work is threefold” is complete, and the three -ing phrases (expanding, challenging, shedding) spell out the three impacts. A colon introduces that list. A semicolon or period would leave the list as a fragment, and no punctuation (B) runs it into the clause."
        },
        {
          id: "sec-10",
          skill: "Form: subject–verb agreement",
          passage: "One of the earliest known maps is a Babylonian clay tablet thought to be almost 4,500 years old. The map ______ the area of a plot of land, shows a river valley, and includes the cardinal directions.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["describes", "describe", "have described", "are describing"],
          answer: "A",
          explanation: "The subject “The map” is singular, and the other verbs in the list are singular present tense: “shows” and “includes.” Only “describes” matches both."
        }
      ]
    },
    {
      title: "Rhetorical Synthesis",
      directions: "<p>Each question gives a student's research notes and a goal. Choose the sentence that uses the notes to accomplish that goal. The best answer does exactly what the goal asks, not just something true.</p>",
      questions: [
        {
          id: "rs-01",
          skill: "Synthesis: define a term",
          notes: [
            "The El Pinito Mountains are a mountain range located in northwestern Mexico.",
            "The range is one of the dozens of “sky islands” in the southwestern US and northwestern Mexico.",
            "A sky island is an isolated mountain range whose environment differs drastically from that of the surrounding lowlands.",
            "The US Forest Service (USFS) said, “The mountains are ‘islands’ surrounded by deserts that are seas.”",
            "The USFS said, “Each Sky Island is a unique ecosystem.”"
          ],
          prompt: "The student wants to explain what a sky island is. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "The USFS considers the El Pinito Mountains to be a “unique ecosystem.”",
            "The El Pinito Mountains are an isolated mountain range located in northwestern Mexico whose environment differs drastically from that of the surrounding lowlands.",
            "A sky island is an isolated mountain range, such as the El Pinito Mountains in northwestern Mexico, whose environment differs drastically from that of the surrounding lowlands.",
            "The El Pinito Mountains, which are considered to be a sky island, are located in northwestern Mexico."
          ],
          answer: "C",
          explanation: "The goal is to explain the term, so the sentence must say what <i>a sky island</i> is. C gives the definition and uses El Pinito as an example. B describes El Pinito accurately but never uses the term, so a reader still doesn't learn what a sky island is."
        },
        {
          id: "rs-02",
          skill: "Synthesis: present a study and its findings",
          notes: [
            "In 1965, Yale University historians claimed that a world map called the Vinland Map was drawn in the fifteenth century.",
            "Since that time, the map’s age has been the subject of debate.",
            "In 2021, researchers conducted a study to analyze the elemental composition of the map’s ink.",
            "Their analysis revealed that the ink contains a titanium compound not used in inks until the 1920s.",
            "The researchers concluded that the map was drawn in the twentieth century."
          ],
          prompt: "The student wants to present the study and its findings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "Given the debate about the Vinland Map's age, researchers in 2021 conducted a study to analyze the elemental composition of the map's ink.",
            "A study of the Vinland Map's ink revealed that it contains a titanium compound not used in inks until the 1920s, indicating that the map was drawn in the twentieth century.",
            "The Vinland Map, believed by some to have been drawn in the fifteenth century, was the focus of a study.",
            "Aware that a certain titanium compound was not used in inks until the 1920s, researchers studied the elemental composition of the Vinland Map's ink."
          ],
          answer: "B",
          explanation: "Two parts are required: the study (an analysis of the ink) and its findings (a 1920s compound, so a twentieth-century map). Only B has both. A and D describe the study without its conclusion; C says almost nothing about either."
        },
        {
          id: "rs-03",
          skill: "Synthesis: emphasize a difference",
          notes: [
            "<i>Birds of Northern South America</i> is an identification guidebook by ornithologists Robin Restall, Clemencia Rodner, and Miguel Lentino.",
            "It lists the thirty-five hummingbird species found in Suriname.",
            "The sooty-capped hermit is a large hummingbird found in Suriname.",
            "It is identifiable by its distinctive facial markings and its long, black, curved bill.",
            "The fiery-tailed awlbill is a small hummingbird found in Suriname.",
            "It is identifiable by its mostly dark green color and its short, black, upturned bill."
          ],
          prompt: "The student wants to emphasize a difference between the two birds. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "The sooty-capped hermit and the fiery-tailed awlbill are two of the thirty-five hummingbird species found in Suriname.",
            "Identifiable by its long, black, curved bill and its distinctive facial markings, the sooty-capped hermit is a large hummingbird found in Suriname.",
            "Though they share several traits in common, the sooty-capped hermit is larger than the fiery-tailed awlbill.",
            "The fiery-tailed awlbill is a small hummingbird identifiable by its mostly dark green color and its short, black, upturned bill."
          ],
          answer: "C",
          explanation: "A difference needs both birds and a contrast between them. C names both and states how they differ (the hermit is larger). A only says what they have in common, and B and D each describe just one bird."
        },
        {
          id: "rs-04",
          skill: "Synthesis: give an example",
          notes: [
            "Metztitlán is a municipality in the state of Hidalgo, Mexico.",
            "Municipalities are governmental regions responsible for providing many public services to their residents.",
            "One service they provide is water treatment.",
            "Metztitlán’s population was 20,962 in 2020.",
            "Hidalgo is divided into 84 municipalities."
          ],
          prompt: "The student wants to provide an example of a public service that Metztitlán is responsible for. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "Metztitlán, a governmental region in the state of Hidalgo, Mexico, provides public services to its residents.",
            "Metztitlán is one of 84 municipalities in Hidalgo providing public services to their communities.",
            "In 2020, the municipality of Metztitlán had a population of 20,962.",
            "As a municipality, Metztitlán is responsible for providing water treatment to its residents."
          ],
          answer: "D",
          explanation: "The goal asks for an <i>example</i> of a service, so the sentence must name one: water treatment. Only D does. A and B mention “public services” in general, and C is about population."
        },
        {
          id: "rs-05",
          skill: "Synthesis: describe a format",
          notes: [
            "The poem “7 haiku (for St. Augustine)” is by African American writer Sonia Sanchez.",
            "It was published in her 2010 poetry book entitled <i>Morning Haiku</i>.",
            "The poem is written as a sequence of seven haiku.",
            "According to the book’s publisher, Penguin Random House (PRH), the book “celebrates the gifts of life and mourns the deaths of revered African American figures.”",
            "According to Sanchez, she chose to write in the form of haiku because it helps “maintain memory and dignity.”"
          ],
          prompt: "The student wants to describe the format of “7 haiku (for St. Augustine).” Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "Sanchez chose the form used in the poem “7 haiku (for St. Augustine)” because it helps “maintain memory and dignity.”",
            "The poem “7 haiku (for St. Augustine)” was published in the book <i>Morning Haiku</i>, which “celebrates the gifts of life and mourns the deaths of revered African American figures.”",
            "The poems in <i>Morning Haiku</i> (2010) are each written as a sequence of haiku.",
            "The poem “7 haiku (for St. Augustine)” is written as a sequence of seven haiku."
          ],
          answer: "D",
          explanation: "Format means how the poem is built: a sequence of seven haiku. D states exactly that. A explains <i>why</i> Sanchez chose the form, B describes the book, and C makes a claim about every poem in the book that the notes don't support."
        },
        {
          id: "rs-06",
          skill: "Synthesis: introduce to a new audience",
          notes: [
            "The international Slow Food movement was founded in 1989 with the signing of the “Slow Food Manifesto.”",
            "The movement promotes universal access to healthy, high-quality food.",
            "It calls for sustainable food production practices that protect local environments, ecosystems, and biodiversity.",
            "It advocates for fair treatment of and compensation for food production workers.",
            "The Slow Food USA organization was founded in 2000."
          ],
          prompt: "The student wants to introduce the Slow Food movement to a new audience. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "The international Slow Food movement, founded in 1989, promotes universal access to healthy, high-quality food that is produced sustainably by workers who are treated and compensated fairly.",
            "The Slow Food movement advocates for food production workers.",
            "The signing of the “Slow Food Manifesto” marked the founding of the international Slow Food movement, while the Slow Food USA organization was founded in 2000.",
            "Goals of the movement include universal access to healthy, high-quality food and sustainable food practices."
          ],
          answer: "A",
          explanation: "A reader who has never heard of the movement needs the basics: its full name, when it began, and what it stands for. A gives all three. B and D skip what the movement is (D even says “the movement” as if the reader already knew), and C gives only founding dates."
        },
        {
          id: "rs-07",
          skill: "Synthesis: emphasize a ranking",
          notes: [
            "Somalia is a country in East Africa.",
            "A high percentage of Somalia’s population (46.4 percent) is under fifteen years old.",
            "It has the sixth-largest under-fifteen population in the world.",
            "Roughly 40 percent of Africa’s population is under fifteen years old—the highest of any continent.",
            "According to the United Nations (UN), Africa’s “high number of young people is an opportunity for the continent’s growth—but only if these new generations are fully empowered to realise their best potential.”"
          ],
          prompt: "The student wants to emphasize the global rank of Somalia's youth population. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "Africa's high population of young people is due in part to the high percentage of young people in Somalia.",
            "With 46 percent of its population under fifteen years of age, Somalia has the sixth-largest population for that age range in the world.",
            "Making up roughly 40 percent of the continent's total population, Africa's under-fifteen population offers “an opportunity for the continent's growth,” according to the UN.",
            "“Only if these new generations are fully empowered to realise their best potential,” says the UN, will Africa's high percentage of young people lead to the continent's growth."
          ],
          answer: "B",
          explanation: "The goal is Somalia's <i>global rank</i>. Only B gives it: sixth-largest under-fifteen population in the world. A, C, and D shift the focus to Africa as a whole."
        },
        {
          id: "rs-08",
          skill: "Synthesis: audience already familiar",
          notes: [
            "Mary Kang is a Korean American portrait photographer.",
            "She is based in New York City and in Austin, Texas.",
            "One of Kang’s photographs features artist Dominique Fung.",
            "In the portrait, Fung is seated on the floor.",
            "Five of Fung’s paintings are resting against the wall behind her."
          ],
          prompt: "The student wants to describe where Fung is in the photograph to an audience already familiar with Kang and Fung. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "Dominique Fung is in a photograph by Mary Kang, a portrait photographer based in New York City and Austin, Texas.",
            "Mary Kang is a photographer based in both New York City and Austin, Texas.",
            "In Kang's portrait of her, Fung is seated on the floor, with five of her paintings resting against the wall behind her.",
            "Five paintings by artist Dominique Fung can be seen in the background of Mary Kang's photograph."
          ],
          answer: "C",
          explanation: "Because the audience already knows Kang and Fung, background about them is wasted words. The goal is Fung's position in the photo: on the floor, with her paintings behind her. Only C gives that. D describes the background but not where Fung is."
        },
        {
          id: "rs-09",
          skill: "Synthesis: generalization + support",
          notes: [
            "Vexillology is the study of flags.",
            "The flags of many countries include symbols like animals, plants, or landforms.",
            "These symbols often represent an aspect of the region’s history, culture, or landscape.",
            "The flag of Papua New Guinea includes a raggiana bird-of-paradise.",
            "The flag of El Salvador includes a palm branch."
          ],
          prompt: "The student wants to make and support a generalization about symbols on flags. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "Papua New Guinea's flag includes a raggiana bird-of-paradise, a symbol that is important to that country's national identity.",
            "The flags of some countries include symbols of animals; Papua New Guinea's, for example, includes a raggiana bird-of-paradise.",
            "Many countries feature symbols on their flags, and the study of these designs is known as vexillology.",
            "Vexillology is the study of flags; accordingly, vexillologists are interested in flags from around the world."
          ],
          answer: "B",
          explanation: "The goal has two parts: a general claim and support for it. B makes the claim (some countries' flags use animal symbols) and supports it with a specific example. A is only one example with no generalization; C and D shift to vexillology instead of supporting a claim about symbols."
        },
        {
          id: "rs-10",
          skill: "Synthesis: define + give an example",
          notes: [
            "The black-footed ferret is a mammal species.",
            "Up until 1981, it was believed to be extinct.",
            "That year, a live black-footed ferret was identified in the wild in the United States.",
            "The black-footed ferret is considered a Lazarus species.",
            "“Lazarus species” is a term for living species of organisms that were once believed to be extinct."
          ],
          prompt: "The student wants to define the term “Lazarus species” and provide an example of one. Which choice most effectively uses relevant information from the notes to accomplish these goals?",
          choices: [
            "The term “Lazarus species” describes a living species of organism, such as the black-footed ferret, that was once believed to be extinct.",
            "Sometimes, a species once believed to be extinct is later found living in the wild.",
            "The black-footed ferret, a species of mammal, was identified in the wild in 1981.",
            "One example of a Lazarus species is the black-footed ferret, a mammal species that was identified in the wild in the United States in 1981."
          ],
          answer: "A",
          explanation: "Both goals must be met in one sentence. A names the term, defines it, and gives the ferret as the example. D gives the example but never explains what a Lazarus species is; B explains the idea without the term."
        }
      ]
    },
    {
      title: "Transitions",
      directions: "<p>Each text has a blank where a transition belongs. Read the sentences on both sides of the blank, decide how they relate (addition, contrast, cause and effect, example, sequence, clarification), then choose the transition that expresses that relationship.</p>",
      questions: [
        {
          id: "tr-01",
          skill: "Transitions: emphasis",
          passage: "John Quincy Adams employed the pseudonym “Marcellus”—a reference to a leader of an ancient Roman army—in political essays he wrote in 1793, a choice that accomplished far more than simply concealing his authorship. ______ it wasn't an arbitrary pen name but rather a complex rhetorical strategy through which Adams aligned his political views with the venerated republican ideals of the ancient world, thereby bolstering the authority of his writing.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Conversely,", "In addition,", "However,", "Indeed,"],
          answer: "D",
          explanation: "The second sentence confirms and expands the first sentence's claim that the pen name “accomplished far more than simply concealing his authorship.” “Indeed” reinforces a point already made. There is no contrast (A, C), and the sentence isn't a new, separate point (B)."
        },
        {
          id: "tr-02",
          skill: "Transitions: general → specific",
          passage: "In a 2005 study by Mellado et al., the researchers' aim was to analyze the diet composition of cattle in Coahuila, Mexico. ______ they aimed to analyze the ratio of three different plant subtypes within these animals' diet: graminoids, forbs, and browse.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Instead,", "All the same,", "Therefore,", "Specifically,"],
          answer: "D",
          explanation: "The first sentence states the aim in general terms (diet composition); the second narrows it to the exact thing measured (the ratio of three plant subtypes). “Specifically” signals that move from general to precise."
        },
        {
          id: "tr-03",
          skill: "Transitions: method → result",
          passage: "At a time when many women writers used male pseudonyms to gain greater freedom of self-expression by evading gender conventions, Katherine Bradley and Edith Cooper adapted the practice by publishing poetry, prose, and drama for four decades under the shared name Michael Field. ______ the duo was able to express the joint creative vision that sustained their long personal and professional partnership.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["In this way,", "For instance,", "Later,", "On the other hand,"],
          answer: "A",
          explanation: "Publishing under one shared name is the method; expressing a joint creative vision is what that method achieved. “In this way” links a means to its result. It isn't an example (B), a later event (C), or a contrast (D)."
        },
        {
          id: "tr-04",
          skill: "Transitions: action → result",
          passage: "In February 1864, James Johnson joined the US Army. He went on to serve in the 18th New York Cavalry during the US Civil War and, ______ earned a place in US history as one of the war's few Chinese-born American soldiers.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["usually,", "for instance,", "in any case,", "in doing so,"],
          answer: "D",
          explanation: "Earning a place in history is the result of serving in the cavalry. “In doing so” connects a result to the action just described."
        },
        {
          id: "tr-05",
          skill: "Transitions: complicating a distinction",
          passage: "Srivijaya, a Buddhist sea power based in Sumatra in Indonesia that reached the height of its influence around 800 CE, is classified as a thalassocracy. Thalassocracies are generally considered distinct from tellurocracies, or land-based powers. ______ the British Empire (1600s–1900s CE) notably extended its hegemony across both land and sea.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Underscoring this difference,", "Exemplifying this distinction,", "Supporting this claim,", "Blurring this line,"],
          answer: "D",
          explanation: "An empire that ruled both land and sea doesn't fit neatly on either side of the sea-power/land-power distinction. “Blurring this line” captures that. A, B, and C all say the example supports the distinction, which it doesn't."
        },
        {
          id: "tr-06",
          skill: "Transitions: consequence",
          passage: "Voxel modeling and kitbashing approaches to three-dimensional digital modeling for video games yield graphics that accurately represent the relative sizes and proportions of real-world objects, but since these graphics are rendered from perfect geometric shapes, they tend to lack organic realism. ______ these 3D elements may display unnaturally precise angles and curves as compared to their real-world counterparts.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["However,", "In addition,", "In conclusion,", "As such,"],
          answer: "D",
          explanation: "Unnaturally precise angles are a consequence of building graphics from perfect geometric shapes. “As such” introduces that consequence. There's no contrast (A), the sentence isn't an unrelated extra point (B), and it isn't a summary of the whole text (C)."
        },
        {
          id: "tr-07",
          skill: "Transitions: sequence",
          passage: "In contrast to first-past-the-post electoral processes, the proportional representation system by which Bolivia's Chamber of Senators is elected begins with citizens casting their votes not for specific candidates but for political parties. ______ once the votes have been tabulated, each party is awarded a number of seats proportional to the number of votes it received.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["In other words,", "Conversely,", "Then,", "However,"],
          answer: "C",
          explanation: "The text walks through a process in order: the system “begins with” voting for parties, and the next step is awarding seats. “Then” marks that next step. The second sentence isn't a restatement (A) or a contrast (B, D)."
        },
        {
          id: "tr-08",
          skill: "Transitions: addition",
          passage: "Portuguese researcher Isabel C.F.R. Ferreira reports that the cinnamic acid in termite mushrooms benefits the mushroom by combating harmful molecules called free radicals. ______ Ferreira suggests that the acid can promote cellular health in humans, who also experience free radical damage.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["For example,", "Moreover,", "Conversely,", "Rather,"],
          answer: "B",
          explanation: "The first sentence gives one benefit (to the mushroom); the second adds a further benefit (to humans). “Moreover” adds a related point. The human benefit isn't an example of the mushroom benefit (A), and nothing is contrasted or corrected (C, D)."
        },
        {
          id: "tr-09",
          skill: "Transitions: completing the logic",
          passage: "Decentralized space, in which no points in the performance space are privileged over others, was one of the central principles of Merce Cunningham's choreographic philosophy. The approach marked a radical departure from the dance philosophies of Cunningham's mid-twentieth-century contemporaries. ______ resulting in his dance pieces, like <i>Interscape Mirage</i>, being received not merely as experimental spectacles but as groundbreaking artworks.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: [
            "Moreover, Cunningham incorporated his principles with great skill and artistry,",
            "Specifically, Cunningham was an accomplished dancer as well as choreographer,",
            "Accordingly, Cunningham founded his namesake dance company in 1953,",
            "In contrast, Cunningham gained a reputation as an unpredictable iconoclast,"
          ],
          answer: "A",
          explanation: "The choice has to lead into “resulting in… groundbreaking artworks.” Only A gives a cause that produces that result: his pieces were radical <i>and</i> made with great skill, so they were seen as art, not mere experiments. Being a dancer (B), founding a company (C), or being unpredictable (D) doesn't explain why the pieces were received as groundbreaking art."
        },
        {
          id: "tr-10",
          skill: "Transitions: addition",
          passage: "Guard cells are specialized cells that are part of a plant’s pores. These cells help regulate the amount of carbon dioxide a plant takes in. ______ they help regulate a plant’s water loss.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Additionally,", "Previously,", "In conclusion,", "Instead,"],
          answer: "A",
          explanation: "Guard cells have two functions: regulating carbon dioxide intake and regulating water loss. “Additionally” adds the second function to the first. Nothing here is about time (B), a summary (C), or a replacement (D)."
        }
      ]
    }
  ]
});
