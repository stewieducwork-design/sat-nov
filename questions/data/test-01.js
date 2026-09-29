/* Test 01: 10 Standard English Conventions + 10 Rhetorical Synthesis questions.
   Blanks: write 3+ underscores (______) anywhere in a passage or prompt. */
QBank.register({
  id: "test-01",
  title: "Test 01",
  description: "Standard English Conventions and Rhetorical Synthesis",
  timeLimitMinutes: 24,
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
          skill: "Boundaries: nonessential clause",
          passage: "Many experts, like lawyer and cycling advocate Ernesto Hernandez-Lopez, have proposed bike travel as one possible way to alleviate congestion on the busy roadways of Los Angeles County, California. Indeed, local bicycle paths like the Harbor Park bicycle ______ have become an increasingly popular means of travel for commuter and recreational trips alike.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["path, which is about 0.38 miles long", "path which is about 0.38 miles long", "path: which is about 0.38 miles long,", "path, which is about 0.38 miles long,"],
          answer: "D",
          explanation: "“Which is about 0.38 miles long” is extra information about the Harbor Park path. A nonessential clause in the middle of a sentence needs a comma on both sides: one after “path” and one before the sentence continues with “have become.”"
        },
        {
          id: "sec-04",
          skill: "Form: plurals vs. possessives",
          passage: "What makes the theremin a unique musical instrument? You play it without touching it. When you place your ______ the pitch will shift as your hands move through the air.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["hand's between the two antenna's,", "hands between the two antennas,", "hands' between the two antennas',", "hands' between the two antennas,"],
          answer: "B",
          explanation: "Nothing in this phrase owns anything, so no apostrophes are needed: “hands” and “antennas” are plain plurals. The comma after “antennas” ends the introductory “When…” clause before the main clause “the pitch will shift.”"
        },
        {
          id: "sec-05",
          skill: "Form: finite vs. nonfinite verbs",
          passage: "Featuring jagged peaks of black ink surrounded by hazy swirls of blue and green paint, Zhang Daqian’s 1983 painting <i>Panorama of Mount Lu</i> is inspired by the tradition of <i>qinglü shanshui</i>, a type of Chinese landscape painting ______ by the use of blue and green hues to depict ethereal, otherworldly landscapes.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["has been characterized", "will be characterized", "characterized", "is characterized"],
          answer: "C",
          explanation: "The sentence already has its main verb (“is inspired”). The blank starts a phrase that describes “painting”: a painting <i>characterized by</i> blue and green hues. A finite verb such as “is characterized” would add a second main verb with no subject of its own."
        },
        {
          id: "sec-06",
          skill: "Form: dangling modifier",
          passage: "Wanting to celebrate the 100th anniversary of the Alaska Purchase, ______ up with a motto that best captured the state’s unique character. The commission selected “North to the Future,” submitted by Juneau journalist Richard Peter, as its winning entry.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: [
            "a contest sponsored by the Alaska Centennial Commission would award $300 to an individual who came",
            "an award of $300 would go to an individual in a contest sponsored by the Alaska Centennial Commission for coming",
            "$300 would be awarded to an individual by the Alaska Centennial Commission in a contest for coming",
            "the Alaska Centennial Commission sponsored a contest that would award $300 to an individual who came"
          ],
          answer: "D",
          explanation: "The opening phrase “Wanting to celebrate…” describes whoever comes right after the comma. Only the commission can <i>want</i> to celebrate, so it must be the subject. A contest, an award, or $300 can't want anything."
        },
        {
          id: "sec-07",
          skill: "Boundaries: semicolons in a complex list",
          passage: "As the fourteenth US librarian of Congress, Carla Hayden has many responsibilities. These include overseeing the Library of Congress’s collections, which boast more than 162 million ______ the US Copyright Office, which registers copyright claims and advises Congress on copyright law; and appointing the US poet laureate.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["items managing", "items, managing", "items; managing", "items. Managing"],
          answer: "C",
          explanation: "The sentence lists three responsibilities, and the items contain commas of their own, so the items are separated by semicolons. The text already uses a semicolon before “and appointing,” so a semicolon must also separate the first item from the second."
        },
        {
          id: "sec-08",
          skill: "Boundaries: transition + semicolon",
          passage: "Chondrites are stony meteorites that are undifferentiated—that is, their contents have not melted and separated into distinct layers. They are hardly ______ many chondrites experience aqueous alteration as a result of exposure to fluids, as well as fracturing, veining, and localized melting due to collisions with other objects.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["pristine, though", "pristine, though;", "pristine; though", "pristine, though,"],
          answer: "B",
          explanation: "“They are hardly pristine, though” is a complete sentence, and “many chondrites experience…” is another. “Though” belongs to the first clause (it contrasts with the idea that chondrites are unchanged), and a semicolon joins the two independent clauses."
        },
        {
          id: "sec-09",
          skill: "Form: subject–verb agreement",
          passage: "Increased gender diversity is revitalizing the field of economics, according to Harvard’s Claudia Goldin. The trailblazing accomplishments of Goldin, winner of the 2023 Nobel Prize in Economics for her work on women in the labor force, ______ to the value of scholars of diverse backgrounds in spurring research into previously unexplored, but vitally important, topics.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["attests", "has attested", "is attesting", "attest"],
          answer: "D",
          explanation: "The subject is “accomplishments,” which is plural. Everything from “of Goldin” to “labor force” just describes it. A plural subject takes the plural verb “attest.”"
        },
        {
          id: "sec-10",
          skill: "Boundaries: paired dashes",
          passage: "The forty-seven geothermal springs of Arkansas’ Hot Springs National Park are sourced via a process known as natural groundwater recharge, in which rainwater percolates downward through the earth—in this case, the porous rocks of the hills around Hot ______ collect in a subterranean basin.",
          prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
          choices: ["Springs to", "Springs: to", "Springs—to", "Springs, to"],
          answer: "C",
          explanation: "The dash after “earth” opens an interruption (“in this case, the porous rocks of the hills around Hot Springs”). An interruption opened with a dash must be closed with a dash before the sentence resumes with “to collect.”"
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
            "The US Forest Service (USFS) said, “The mountains are ’islands’ surrounded by deserts that are seas.”",
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
          id: "rs-04",
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
          id: "rs-05",
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
        },
        {
          id: "rs-06",
          skill: "Synthesis: similarity",
          notes: [
            "Elizabeth Catlett’s sculpture <i>Recognition</i> (1970) shows two African American figures with rounded, indistinct features.",
            "The figures reach out to each other in a pose that symbolizes a close, supportive relationship.",
            "Her sculpture <i>Students Aspire</i> (1978) shows two African American figures with sharply defined features.",
            "The figures hold an equal sign above their heads with one hand and embrace each other with the other hand.",
            "This pose symbolizes their support for each other in the pursuit of equality."
          ],
          prompt: "The student wants to emphasize a similarity between the two sculptures. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "Catlett’s <i>Students Aspire</i> depicts two figures supporting each other in the pursuit of equality.",
            "<i>Recognition</i> and <i>Students Aspire</i> both show African American figures in poses that symbolize supportive relationships.",
            "Catlett completed <i>Recognition</i> in 1970 and <i>Students Aspire</i> in 1978.",
            "The figures in <i>Recognition</i> have features that are rounded and indistinct, while the figures in <i>Students Aspire</i> have sharply defined features."
          ],
          answer: "B",
          explanation: "A similarity needs both works and something they share. B names both sculptures and what they have in common: supportive poses. A mentions only one sculpture, C just gives dates, and D is a difference."
        },
        {
          id: "rs-07",
          skill: "Synthesis: contrast quantities",
          notes: [
            "Meteorites found on Earth are divided into two categories.",
            "A meteorite that was observed falling to Earth before being recovered is known as a meteorite fall.",
            "All other meteorites found on Earth are known as meteorite finds.",
            "There have been about 1,200 recorded meteorite falls.",
            "There have been over 60,000 recorded meteorite finds."
          ],
          prompt: "The student wants to contrast the number of meteorite falls with the number of meteorite finds. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "A meteorite that was observed falling to Earth before being recovered is known as a meteorite fall; all others are known as meteorite finds.",
            "Meteorites found on Earth are divided into two categories: meteorite falls and meteorite finds.",
            "There have been about 1,200 recorded meteorite falls, or meteorites observed falling to Earth.",
            "While there have been only about 1,200 recorded meteorite falls, there have been over 60,000 meteorite finds."
          ],
          answer: "D",
          explanation: "The goal is about <i>numbers</i>, so both counts must appear side by side with a contrast word. D does exactly that (“While… only about 1,200… over 60,000”). A and B contrast definitions, not numbers; C gives only one number."
        },
        {
          id: "rs-08",
          skill: "Synthesis: use a quotation to challenge a claim",
          notes: [
            "Political scientist Graham Allison is known for his Thucydides trap theory.",
            "Allison’s theory states that whenever “a rising power is threatening to displace a ruling power,” conflict is likely.",
            "The theory is based on Thucydides’s explanation of the conflict between Athens and Sparta.",
            "Thucydides wrote that “the rise of Athens and the fear this instilled in Sparta” made conflict “inevitable.”",
            "History professor Edmund Stewart recently challenged the historical basis of the theory.",
            "Stewart claimed that Athens was not a rising power and that the rivals experienced a “clash of cultures” instead."
          ],
          prompt: "The student wants to use a quotation to challenge Thucydides’s explanation of the conflict between Athens and Sparta. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "According to Allison’s Thucydides trap theory, whenever “a rising power is threatening to displace a ruling power,” conflict is likely.",
            "Thucydides wrote that conflict between the two powers was “inevitable,” although Stewart later challenged the historical basis of this claim.",
            "According to Stewart, a “clash of cultures” between Athens and Sparta caused the conflict, not Athens’s rise.",
            "Thucydides explained that conflict was caused by “the rise of Athens and the fear this instilled in Sparta,” but Allison disagreed, seeing the conflict as an example of the Thucydides trap."
          ],
          answer: "C",
          explanation: "Two conditions: the sentence must <i>challenge</i> Thucydides, and the challenge must use a quotation. C quotes Stewart's “clash of cultures” and rejects Athens's rise as the cause. In B the only quotation is Thucydides's own word, so the quoted material supports him rather than challenging him. D is wrong about Allison, who builds on Thucydides."
        },
        {
          id: "rs-09",
          skill: "Synthesis: aim of a study",
          notes: [
            "The factors that affect clutch size (the number of eggs laid at one time) have been well studied in birds but not in lizards.",
            "A team led by Shai Meiri of Tel Aviv University investigated which factors influence lizard clutch size.",
            "Meiri’s team obtained clutch-size and habitat data for over 3,900 lizard species and analyzed the data with statistical models.",
            "Larger clutch size was associated with environments in higher latitudes that have more seasonal change.",
            "Lizards in higher-latitude environments may lay larger clutches to take advantage of shorter windows of favorable conditions."
          ],
          prompt: "The student wants to emphasize the aim of the research study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "Researchers wanted to know which factors influence lizard egg clutch size because such factors have been well studied in birds but not in lizards.",
            "After they obtained data for over 3,900 lizard species, researchers determined that larger clutch size was associated with environments in higher latitudes that have more seasonal change.",
            "We now know that lizards in higher-latitude environments may lay larger clutches to take advantage of shorter windows of favorable conditions.",
            "Researchers obtained clutch-size and habitat data for over 3,900 lizard species and analyzed the data with statistical models."
          ],
          answer: "A",
          explanation: "The aim is what the researchers set out to learn: which factors influence lizard clutch size. A states that question and why it was worth asking. B and C report results, and D describes methods. None of those is the aim."
        },
        {
          id: "rs-10",
          skill: "Synthesis: significance of a discovery",
          notes: [
            "Severo Ochoa discovered the enzyme PNPase in 1955.",
            "PNPase is involved in both the creation and degradation of mRNA.",
            "Ochoa incorrectly hypothesized that PNPase provides the genetic blueprints for mRNA.",
            "The discovery of PNPase proved critical to deciphering the human genetic code.",
            "Deciphering the genetic code has led to a better understanding of how genetic variations affect human health."
          ],
          prompt: "The student wants to emphasize the significance of Ochoa’s discovery. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          choices: [
            "Ochoa’s 1955 discovery of PNPase proved critical to deciphering the human genetic code, leading to a better understanding of how genetic variations affect human health.",
            "Ochoa first discovered PNPase, an enzyme that he hypothesized contained the genetic blueprints for mRNA, in 1955.",
            "In 1955, Ochoa discovered the PNPase enzyme, which is involved in both the creation and degradation of mRNA.",
            "Though his discovery of PNPase was critical to deciphering the human genetic code, Ochoa incorrectly hypothesized that the enzyme was the source of mRNA’s genetic blueprints."
          ],
          answer: "A",
          explanation: "Significance means why the discovery matters. A says it was critical to deciphering the genetic code and led to a better understanding of genetics and health. D mentions the importance but puts the emphasis on Ochoa's mistake; B and C only describe the enzyme."
        }
      ]
    }
  ]
});
