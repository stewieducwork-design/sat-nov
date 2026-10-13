/* SAT Reading R02: Details, 62 questions. */
QBank.register({
  id: "r02-details",
  title: "Details",
  description: "Information and Ideas: Details",
  timeLimitMinutes: 65,
  sections: [
    {
      title: "Details",
      directions: "<p>Each question gives a short text. Choose the option that is directly stated in, or best supported by, the details of the text.</p>",
      questions: [
        {
          id: "dt001", skill: "Details", answer: "D",
          passage: "In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Panama City, Panama, and Fortaleza, Brazil, were surveyed about parks in their cities. Of the 318 respondents from Panama City, 53.5% indicated that they use the city’s parks, and of 938 respondents from Fortaleza, 35.7% indicated using city parks. Given that the percentage of Panama City respondents who reported living within a 10-minute walk of a park was much lower than that reported by Fortaleza respondents, greater proximity alone can’t explain the difference in park use.",
          prompt: "The text makes which point about the difference between the proportions of Panama City residents and Fortaleza residents using parks?",
          choices: [
            "It was much larger than the researchers conducting the study expected.",
            "It could be due to inaccuracies in the survey results.",
            "It was calculated using sources that predate the survey.",
            "It is caused by something other than the parks’ proximity to the residents."
          ],
          explanation: "Panama City residents used parks more, even though fewer of them lived within a 10-minute walk of one. So “greater proximity alone can't explain the difference”: something other than proximity must be causing it (D). The text never mentions researchers' expectations (A), survey errors (B), or older sources (C)."
        },
        {
          id: "dt002", skill: "Details", answer: "C",
          passage: "Like all species of baleen whales, the common minkle whale feeds on tiny creatures known as Krill by filtering water through bristlelike keratin structures called baleen plates. In this way, baleen whales can eat up to 30% of their total mass per day. And while no one would call the common minkle whale small-it can have a mass as high as 4000 kg-it is one of the smaller baleen whales and it is much smaller than the fin whale, which can weigh a whopping 80000 kg and consume as much as 24000 kg of krill per day.",
          prompt: "Based on the text, what can most reasonably be concluded about krill consumption among common minkle and fin whales?",
          choices: [
            "Both of them can eat as much as 24000 kg of krill per day.",
            "The quantities of krill consumed by fin whales has made it difficult for minkle whales to find sufficient food.",
            "The fin whale is able to eat more krill per day than the minkle whale.",
            "Most baleen whales include krill in their diets, but the minkle whale is less likely than the fin whale to do so."
          ],
          explanation: "The minke whale reaches about 4,000 kg, while the fin whale weighs up to 80,000 kg and eats as much as 24,000 kg of krill a day. Since whales eat up to 30% of their mass, the much larger fin whale can eat more krill per day (C). A ignores the size difference, and B and D are never discussed."
        },
        {
          id: "dt003", skill: "Details", answer: "B",
          passage: "The following text is adapted from Armando’s short story “The Love of Clotide,” originally published in Spanish in 1884.<br><br>It was said that in Don’s youth he once wrote a play which won him nothing but hisses and free entry for life behind the scenes of theaters. Whether resigned or not to the verdict of the public, he ceased to write plays and assumed instead the nobler role of a patron to unrecognized authors and artist and to ruined managers. Any youth from the province who arrived in Madrid with a drama in his pocket could take no surer road to seeing it produced than that which led to the home of Don. One and all, he received them with open arms, the good and the bad alike.",
          prompt: "According to the text, what change coincided with Don becoming a patron of the theater?",
          choices: [
            "He achieved public recognition for an essay he had written earlier.",
            "He stopped writing plays.",
            "He accepted a new job as a critic.",
            "He moved to a town outside Madrid."
          ],
          explanation: "The text says that after his play failed, “he ceased to write plays and assumed instead the nobler role of a patron.” Becoming a patron coincided with his stopping playwriting (B). The text mentions no essay (A), no job as a critic (C), and no move away from Madrid (D)."
        },
        {
          id: "dt004", skill: "Details", answer: "D",
          passage: "Researchers Ceasr, Elisa, and Andres created a computer model to predict the mix of movie theaters, gyms, and other businesses found in a given neighborhood. How we define a neighborhood and its boundaries is subjective, so the team used a clustering algorithm to locate dense groupings of amenities that represent human-identified neighborhoods like Boston’s Harvard square. The predictive model, which incorporates this algorithm, is sure to be invaluable in determining the optimal mix of a city’s amenities.",
          prompt: "According to the text, why did the team employ a clustering algorithm?",
          choices: [
            "It could be used to evaluate the reasons for a business closing.",
            "It provided insights into how consumers are made aware of new movie theaters and gyms.",
            "It could predict which types of businesses would be successful in a given neighborhood.",
            "It gave them an objective way to identify neighborhood."
          ],
          explanation: "“How we define a neighborhood and its boundaries is subjective, so the team used a clustering algorithm.” The algorithm gave an objective way to identify neighborhoods (D). The other choices describe purposes the text never mentions."
        },
        {
          id: "dt005", skill: "Details", answer: "A",
          passage: "In O’odham, an Indigenous language from the Southwest region of what is now the United States, gogs means \"a dog\" whereas gogogs is used to refer to several dogs. This phenomenon, in which an element of a root word is repeated, sometimes with modification, within another word that is related to the root word is called reduplication. In this case, the element “go” in gogs gets repeated in gogogs. There are many examples of this type of reduplication in O’odham.",
          prompt: "The text makes which point about the O’odham word gogogs?",
          choices: [
            "It contains a repetition of the element \"go” in gogs.",
            "It doesn’t have a clear equivalent in English.",
            "It is the only word in O’odham that uses reduplication.",
            "It is identical in meaning to several other words in O’odham."
          ],
          explanation: "The text says “the element ‘go’ in gogs gets repeated in gogogs.” A restates this directly. English equivalents (B), being the only example (C, which contradicts “many examples”), and identical meanings (D) are not in the text."
        },
        {
          id: "dt006", skill: "Details", answer: "D",
          passage: "The following text is adapted from Adib Khorrams 2018 novel <i>Darius the Great Is Not Okay.</i> Darius, a teenager from the United States, is visiting his family members in Iran.<br><br>I dozed and floated on the clouds of Farsi that blew my way from the front seat of Day (Uncle) Jamsheed’s SUV. It reminded me of when I was little, and Mom chanted to me in Farsi every night before bedtime. It’s hard to describe Farsi chanting the way Mom drew her voice out like the notes of a cello as she recited poems by Rumi or Hafez. I didn’t know what they meant, but that didn’t matter. It was quiet and soothing.",
          prompt: "Based on the text, what does the narrator mainly remember about the times when his mother chanted to him?",
          choices: [
            "That he liked the characters in the stories his mother made up while chanting.",
            "That his mother had music playing in the background while she chanted.",
            "That his mother didn’t usually chant at night.",
            "That he found the sound of his mother’s chanting to be calming."
          ],
          explanation: "Darius remembers that he didn't know what the poems meant, “but that didn't matter. It was quiet and soothing.” He mainly remembers the chanting as calming (D). There were no made-up characters (A) or background music (B), and she chanted “every night before bedtime,” which contradicts C."
        },
        {
          id: "dt007", skill: "Details", answer: "D",
          passage: "Researcher César A. Hidalgo, Elisa Castañer, and Andres Sevtsuk created a computer model to predict the mix of businesses and places of interest found in a given neighborhood. The team used data from the Google Places, API service to help identify furniture stores, florists, and other businesses and map their locations. This approach has some limits-data from Places API tend to be restricted to places that the customer facing-but the data set nonetheless provides an extremely reliable source to study colocation patterns of neighborhood amenities.",
          prompt: "According to the text, what is one potential drawback of Hidalgo and colleagues’ method?",
          choices: [
            "It depends upon data that are likely to be outdated.",
            "It is based on recent advancements from other fields that have yet to be applied outside of those contexts.",
            "It is likely to contribute to inaccurate identifications of the boundaries of specific neighborhoods.",
            "It may lead to conclusions that are not reflective of all the amenities in a given neighborhood."
          ],
          explanation: "The limit is that Places API data “tend to be restricted to places that are customer facing.” So amenities that aren't customer facing might be missed, and conclusions may not reflect all of a neighborhood's amenities (D). Nothing in the text concerns outdated data (A), other fields (B), or boundaries (C)."
        },
        {
          id: "dt008", skill: "Details", answer: "D",
          passage: "The groundbreaking Negro Ensemble Company (NEC), founded in 1967, produced Paul Carter Harrison’s award-winning play The Great MacDaddy in 1974. The company was cofounded by Robert Hooks, an actor, producer, and activist, and actor and playwright Douglas Turner Ward, who had met while performing in a 1960 touring production of Lorraine Hansberry’s play A Raisin in the Sun. They shared a vision of a theater company that would nurture and showcase the work of Black theater professionals. Since its beginning, NEC has provided a forum for the voices of Harrison and other Black playwrights through workshops and performances.",
          prompt: "According to the text, how did Hooks and Ward initially meet?",
          choices: [
            "Hooks and Ward participated in the same workshop at NEC.",
            "Harrison introduced Hooks to Ward at a performance of The Great MacDaddy.",
            "Hooks and Ward attended the same performance of The Great MacDaddy.",
            "Hooks and Ward were both actors in a production of A Raisin in the Sun."
          ],
          explanation: "Hooks and Ward “had met while performing in a 1960 touring production of Lorraine Hansberry's play A Raisin in the Sun” (D). The Great MacDaddy and the NEC workshops came later, after the company was founded."
        },
        {
          id: "dt009", skill: "Details", answer: "A",
          passage: "Like all species of baleen whales, the Antarctic minke whale feeds on tiny creatures known as krill by filtering water through bristlelike keratin structures called baleen plates. In this way, baleen whales can eat up to 30 percent of their total mass per day. And while no one would call the Antarctic minke whale small-it can have a mass as high as 10,000 kg-it is one of the smaller whales and is much smaller than the bowhead whale, which can weigh a whopping 66,000 kg and consume as much as 19,800 kg of krill per day.",
          prompt: "Based on the text, what can most reasonably be concluded about krill consumption among Antarctic minke and bowhead whale?",
          choices: [
            "The bowhead whale is able to eat more krill per day than the Antarctic minke whale is.",
            "Both the Antarctic minke whale and the bowhead whale can eat as much as 19,800 kg of krill per day.",
            "The quantities of krill consumed by bowhead whale has made it difficult for Antarctic minke whales to find sufficient food.",
            "Most baleen whales included krill in their diary, but the Antarctic minke whale is less likely than the bowhead whale to do so."
          ],
          explanation: "The Antarctic minke whale reaches about 10,000 kg, while the bowhead weighs up to 66,000 kg and can eat up to 19,800 kg of krill a day. The much larger bowhead can eat more krill per day (A). B ignores the size difference, and C and D are never discussed."
        },
        {
          id: "dt010", skill: "Details", answer: "B",
          passage: "Researchers César A. Hidalgo, Elisa Castañer, and Andres Sevtsuk created a computer model to predict the mix of gyms, beauty salons, and other businesses found in a given neighborhood. How we define a neighborhood and its boundaries is subjective, so the team used a clustering algorithm to locate dense groupings of amenities that represent human-identified neighborhoods like Boston’s Central Square. The predictive model, which incorporates this algorithm, is sure to be invaluable in determining the optimal mix of a city’s amenities.",
          prompt: "According to the text, why did the team employ a clustering algorithm?",
          choices: [
            "The algorithm provided insight into how customers are made aware of new gyms and beauty salons.",
            "The algorithm gave them an objective way to identify neighborhoods.",
            "The algorithm could be used to evaluate the reasons for a business’s closing.",
            "The algorithm could predict which types of businesses would be successful in a given neighborhood."
          ],
          explanation: "Because defining a neighborhood “is subjective,” the team used a clustering algorithm to locate neighborhoods. It gave them an objective method (B). The other choices list uses the text never mentions."
        },
        {
          id: "dt011", skill: "Details", answer: "A",
          passage: "Known for the albums Quiet Nights and Milestones, jazz trumpeter Miles Davis collaborated several times with pianist Gil Evans. Their 1958 adaptation of George Gershwin’s opera Porgy and Bess bears little resemblance to the 1935 original. Davis and Evans felt no desire to please listeners expecting an exact duplication of the opera. They omitted parts, such as the aria \"I Got Plenty of Nuthin’,\" and sometimes made only brief gestures toward Gershwin’s melodies. But Davis and Evans’s willingness to recompose Gershwin’s work led to one of the most enduring albums in Davis’s catalog.",
          prompt: "According to the text, what is true about the aria \"I Got Plenty of Nuthin’\"?",
          choices: [
            "It appears in the Gershwin opera Porgy and Bess but not in the adaptation by Davis and Evans.",
            "A brief quotation from it appears in Davis and Evans’s adaptation of Porgy and Bess.",
            "Listeners familiar with Gershwin’s body of work generally disliked it.",
            "It was adapted by Davis in a recording that appears on his album Milestones."
          ],
          explanation: "Davis and Evans “omitted parts, such as the aria ‘I Got Plenty of Nuthin'.’” So the aria is in Gershwin's opera but not in their adaptation (A). B contradicts “omitted,” and C and D are unsupported."
        },
        {
          id: "dt012", skill: "Details", answer: "C",
          passage: "Baleen whales eat up to 30 percent of their total body mass in krill (tiny shrimplike creatures) per day. So, in one day, an Antarctic minke whale weighing 10,000 kg could eat 3,000 kg, while a southern right whale weighing 80,000 kg could ingest a whopping 24,000 kg. Over the last century, baleen whale populations have declined, and contrary to some scientists’ expectations, so have krill populations. Matthew S. Savoca and colleagues resolve this apparent discrepancy by pointing out that baleen whales cycle iron in the ocean, helping support phytoplankton populations, which, in turn, sustain krill populations.",
          prompt: "Based on the text, what can most reasonably be concluded about Antarctic minke and southern right whales?",
          choices: [
            "Populations of both Antarctic minke and southern right whales have declined significantly over the last century due to decreasing levels of iron in the ocean.",
            "As krill consumption by Antarctic minke whales has decreased, the krill consumption of southern right whales has increased.",
            "The southern right whale is able to eat more krill per day than the Antarctic minke whale is.",
            "Both Antarctic minke and southern right whales can eat krill, but of the two only the Antarctic minke whale can also subsist on phytoplankton."
          ],
          explanation: "Whales eat up to 30% of their body mass per day: the 10,000 kg minke can eat 3,000 kg, while the 80,000 kg southern right whale can eat 24,000 kg. So the southern right whale can eat more krill per day (C). The text attributes no population decline to iron levels (A), describes no shift in consumption (B), and never says minke whales eat phytoplankton (D)."
        },
        {
          id: "dt013", skill: "Details", answer: "A",
          passage: "Cocoa is an example of a loanword-that is, a word that originated in one language and was later adopted by another. The word came to English indirectly from cacao, the Spanish word for the plant that chocolate is made from. Spanish had borrowed it from Nahuatl, an Indigenous language of Central Mexico, in which the word’s original form is cacahuatl. \"Puma\" is also Indigenous in origin and entered English through Spanish. But in this case, the original source was Quechua, a language of South America, in which the word for the mountain lion is also puma.",
          prompt: "The author makes which point about the Spanish language?",
          choices: [
            "It has served as a medium through which Indigenous languages have influenced English.",
            "Its contribution to English vocabulary roughly equals the collective contribution by Indigenous languages.",
            "It adopted Nahuatl and Quechua words in approximately equal numbers.",
            "It has borrowed words from Indigenous languages and contributed words to them."
          ],
          explanation: "Both examples (cacao from Nahuatl, puma from Quechua) entered English through Spanish. Spanish served as the medium through which Indigenous words reached English (A). The text never compares quantities (B, C) or says Spanish gave words back to Indigenous languages (D)."
        },
        {
          id: "dt014", skill: "Details", answer: "A",
          passage: "In Bolivia, use of solid fuel (e.g., coal, wood) as a share of total household fuel use fell by more than half between 2000 and 2015; such shifts are typically explained by appeal to the energy ladder, a model holding that fuel choice is mediated mainly by household income (specifically, high-technology fuels displace solid fuels as incomes rise). Richard Hosier and Jeffrey Dowd’s study of fuel use in Zimbabwe shows how reductive this model is, however: although income of course constrained fuel choice, several factors, including the difficulty of acquiring fuel sources, influenced decisions.",
          prompt: "Based on the text, the author would most likely agree with which statement about household income?",
          choices: [
            "It can explain some but not all of the differences in fuel choice across households.",
            "It is often said to influence household fuel choice but actually does not.",
            "It affects household fuel choice but not for the reasons assumed by the energy ladder model.",
            "It constrains the amount of fuel households use but not the type of fuel they use."
          ],
          explanation: "The author says income “of course constrained fuel choice,” but “several factors” also influenced decisions. Income explains some of the differences, not all (A). B denies that income matters at all, C says it works for different reasons, and D draws a distinction between amount and type that the text never makes."
        },
        {
          id: "dt015", skill: "Details", answer: "C",
          passage: "To understand how temperature change affects microorganism-mediated cycling of soil nutrients in alpine ecosystems, Eva Kaštovská et al. collected plant-soil cores in the Tatra Mountains at elevations around 2,100 meters and transplanted them to elevations of 1,700-1,800 meters, where the mean air temperature was warmer by 2°C. Microorganism-mediated nutrient cycling was accelerated in the transplanted cores; crucially, microorganism community composition was unchanged, allowing Kaštovská et al. to attribute the acceleration to temperature-induced increases in microorganism activity.",
          prompt: "It can most reasonably be inferred from the text that the finding about the microorganism community composition was important for which reason?",
          choices: [
            "It provided preliminary evidence that microorganism-mediated nutrient cycling was accelerated in the transplanted cores.",
            "It suggested that temperature-induced changes in microorganism activity may be occurring at increasingly high elevations.",
            "It ruled out a potential alternative explanation for the acceleration in microorganism-mediated nutrient cycling.",
            "It clarified that microorganism activity levels in the plant-soil cores varied depending on which microorganisms comprised the community."
          ],
          explanation: "Nutrient cycling sped up in the warmer cores. Because the microorganism community composition stayed the same, a change in which microbes were present can't explain the speed-up, so the researchers could attribute it to temperature. The finding ruled out an alternative explanation (C)."
        },
        {
          id: "dt016", skill: "Details", answer: "A",
          passage: "Michael G. Campana and colleagues relied on historical DNA (hDNA)—genomic data incidentally preserved in specimens housed in natural history collections—to investigate the evolutionary origins of a fungal pathogen affecting bats. Although this approach offers unique benefits, such as access to genomic data from extirpated populations, it remains a relatively underutilized resource because hDNA is often to some extent degraded, a situation not easily remediable under current methodological paradigms and with extant DNA extraction and analysis technologies.",
          prompt: "Information in the text best supports which statement about hDNA?",
          choices: [
            "It may yield insights that other types of genomic data cannot.",
            "It has thus far proved valuable mainly to researchers studying pathogens.",
            "It may be underused because of its controversial status among scientists.",
            "It tends to be much more degraded than other types of DNA of comparable age."
          ],
          explanation: "hDNA offers “unique benefits, such as access to genomic data from extirpated populations,” which are populations that no longer exist. It can provide insights other data cannot (A). The text doesn't say it is used mainly for pathogens (B) or is controversial (C), and it never compares degradation with other DNA of the same age (D)."
        },
        {
          id: "dt017", skill: "Details", answer: "A",
          passage: "The ancient writing system used in the Maya kingdoms of southern Mexico and Central America had a symbol for the number zero. The earliest known example of the symbol dates to more than 2,000 years ago. At that time, almost none of the writing systems elsewhere in the world possessed a zero symbol. And the use of zero in Mexico and Central America may be even more ancient. Some historians suggest that Maya mathematicians inherited it from the Olmec civilization, which flourished in the region 2,400-3,600 years ago.",
          prompt: "According to the text, what do some historians suggest about Maya civilization?",
          choices: [
            "Maya civilization acquired the use of zero from the Olmec civilization.",
            "Maya civilization respected its historians more than it respected its mathematicians.",
            "Maya civilization was highly secretive about its intellectual achievements.",
            "Maya civilization tried to introduce its writing system to other civilizations."
          ],
          explanation: "“Some historians suggest that Maya mathematicians inherited [zero] from the Olmec civilization” (A). Nothing in the text supports B, C, or D."
        },
        {
          id: "dt018", skill: "Details", answer: "D",
          passage: "In Costa Rica, use of solid fuel (e.g., coal, wood) as a share of total household fuel use fell by approximately 60 percent between 2000 and 2019; such shifts are typically explained by appeal to the energy ladder, a model holding that fuel choice is mediated mainly by household income (specifically, high-technology fuels displace solid fuels as incomes rise). Rasmus Heltberg’s study of fuel use in Guatemala shows how reductive this model is, however: household fuel use was heterogeneous, flexible, and influenced by several factors, including local price of different sources.",
          prompt: "Based on the text, which choice best explains why the author characterizes the energy ladder as “reductive”?",
          choices: [
            "The energy ladder asserts that households only consider one aspect of fuel when making fuel choices, but Heltberg’s study showed that households ignore that characteristic of fuel and evaluate several other factors instead.",
            "The energy ladder holds that the adoption of one type of fuel means that another type of fuel must be displaced, but Heltberg’s study showed that several different fuel types are typically used in equal proportion.",
            "The energy ladder assumes that the same factor influences household fuel choice in all locations, but Heltberg’s study showed that fuel choice in Guatemala is influenced by different factors than is fuel choice in Costa Rica.",
            "The energy ladder attributes household fuel choice primarily to a single characteristic of households, but Heltberg’s study showed that multiple circumstances can affect household fuel choice."
          ],
          explanation: "The energy ladder says fuel choice is “mediated mainly by household income,” a single characteristic. Heltberg found fuel use was “influenced by several factors.” That is why the model is reductive (D). A says households ignore income, which goes too far. B and C misstate the model and the study."
        },
        {
          id: "dt019", skill: "Details", answer: "D",
          passage: "The groundbreaking Negro Ensemble Company (NEC), founded in 1967, produced Paul Cater Harrison’s award-winning play The Great MacDaddy in 1974. The company was cofounded by Robert Hooks, an actor, producer, and activist, and actor and playwright Douglas Turner Ward, who had met while performing in a 1960 touring production of Lorraine Hansberry’s play A Raisin in the Sun. They shared a vision of a theater company that would nurture and showcase the work of Black theater professionals. Since its beginning, NEC has provided a forum for the voices of Harrison and other Black playwrights through workshops and performances.",
          prompt: "According to the text, how did Hooks and Ward initially meet?",
          choices: [
            "Harrison introduced Hooks to Ward at a performance of The Great MacDaddy.",
            "Hooks and Ward attended the same performance of The Great MacDaddy.",
            "Hooks and Ward participated in the same workshop at NEC.",
            "Hooks and Ward were both actors in a production of A Raisin in the Sun."
          ],
          explanation: "Hooks and Ward met “while performing in a 1960 touring production of… A Raisin in the Sun” (D). The Great MacDaddy and the NEC workshops came later."
        },
        {
          id: "dt020", skill: "Details", answer: "B",
          passage: "Marrakech has high pedestrian traffic, but simply replicating a feature of Marrakech associated with walkability - e.g., its highly varied streetscape - may be insufficient to induce increased walking in other cities. As urbanist Mariela Alfonzo argues, our understanding of individuals’ decision - making about whether to walk is insufficiently robust: some studies emphasize the role of demographic characteristics, others the role of public transit availability, and so on, but walking decisions are made in complex contexts in which multiple conditions and needs inform individuals’ choices.",
          prompt: "Based on the text, Alfonzo would most likely agree with which statement about studies of decision-making about walking?",
          choices: [
            "They would be improved by efforts to identify the features that cities with high pedestrian traffic have in common.",
            "They are unlikely to find convincing evidence that any single factor consistently predicts walking decisions.",
            "They have overstated the extent to which people differ in their decision-making processes regarding walking.",
            "They tend to be misleading because they ignore the most important factor influencing walking decisions."
          ],
          explanation: "Alfonzo says walking decisions are made “in complex contexts in which multiple conditions and needs inform individuals' choices,” so studies that each stress one factor fall short. She would agree that no single factor consistently predicts walking (B). A contradicts the warning about copying features, C is unsupported, and D assumes one most important factor."
        },
        {
          id: "dt021", skill: "Details", answer: "A",
          passage: "Researchers César A. Hidalgo, Elisa Castañer, and Andres Sevtsuk created a computer model to predict the mix of businesses and places of interest found in a given neighborhood. The team used data from the Google Places API service to help identify movie theaters, gyms, and other businesses and map their locations. This approach has some limits—data from Places API tend to be restricted to places that are customer facing—but the data set nonetheless provides an extremely reliable source to study colocation patterns of neighborhood amenities.",
          prompt: "According to the text, what is one potential drawback of Hidalgo and colleagues’ method?",
          choices: [
            "It may lead to conclusions that are not reflective of all the amenities in a given neighborhood.",
            "It is likely to contribute to inaccurate identifications of the boundaries of specific neighborhoods.",
            "It is based on recent advancements from other fields that have yet to be applied outside of those contexts.",
            "It depends upon data that are likely to be outdated."
          ],
          explanation: "Places API data “tend to be restricted to places that are customer facing.” Amenities that aren't customer facing could be missed, so conclusions may not reflect all amenities (A)."
        },
        {
          id: "dt022", skill: "Details", answer: "B",
          passage: "Vadamalai Elangovan and Ganapathi Marimuthu showed that high moonlight intensity inhibits the activity of the greater short-nosed fruit bat (Cynopterus sphinx), a finding explicable in terms of benefits and costs: greater lunar intensity may not enable the bats to increase foraging success enough to offset the higher chance of detection by predatory owls or hawks. Though many other nocturnal mammals respond to lunar intensity variations similarly to greater short-nosed fruit bats, mongoose lemurs (Eulemur mongoz) display the opposite pattern, as their heavy reliance on visual foraging results in a different balance of reward and risk.",
          prompt: "According to the text, what did Elangovan and Marimuthu find and why does that occur?",
          choices: [
            "Greater short-nosed fruit bats tend to be more active during periods of high lunar intensity than at other times because such conditions allow them to increase their foraging success without making them easier to detect.",
            "Greater short-nosed fruit bats reduce their activity during periods of high lunar intensity because predators can more easily spot the bats in brighter conditions, and such conditions do not benefit the bats enough to justify that risk.",
            "During periods of high lunar intensity, greater short-nosed fruit bats reduce their activity because it is easier for predators to detect the bats in relatively bright conditions than it is for predators to detect mongoose lemurs in such conditions.",
            "During periods of high lunar intensity, mongoose lemurs show a different behavioral response than greater short-nosed fruit bats and many other nocturnal mammals do because the risks to mongoose lemurs under such conditions are greater."
          ],
          explanation: "High moonlight “inhibits the activity” of the bats because brighter conditions don't boost foraging enough “to offset the higher chance of detection by predatory owls or hawks.” B states both the finding and the reason. A reverses the finding, C invents a comparison with lemurs, and D gives the lemurs' pattern the wrong reason (they benefit more, not face greater risk)."
        },
        {
          id: "dt023", skill: "Details", answer: "A",
          passage: "A number of artists associated with hyperpop, a movement in electronic music that emerged in the 2010s, aggressively manipulate their recorded voice. The duo 100 gecs, for example, shifts the pitch of lead singer Laura Les’s vocals to be much higher than that of her natural range. And even the hyperpop artists who don’t rely on pitch-shifting, such as Shygirl, often distort their vocals using digital tools. Rather than being an arbitrary stylistic choice, hyperpop’s persistent modification of the voice functions as a commentary on how digital technology mediates human experience today.",
          prompt: "Based on the text, the author would be most likely to disagree with which statement about vocal manipulation in hyperpop?",
          choices: [
            "It is an aesthetic feature that has little or no social import.",
            "It confirms hyperpop’s ability to offset certain negative effects of digital technology.",
            "It is a symbol of the influence that hyperpop exerts on listeners’ sense of self.",
            "It represents changes to human experience brought about by technology."
          ],
          explanation: "The author says vocal manipulation is “rather than… an arbitrary stylistic choice” a commentary on how technology shapes human experience. So the author would disagree that it has “little or no social import” (A). D matches the author's view, and B and C are not discussed."
        },
        {
          id: "dt024", skill: "Details", answer: "D",
          passage: "In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Mexico City, Mexico, and La Paz, Bolivia, were surveyed about parks in their cities. Of the 562 respondents from Mexico City, 77.6% indicated that they use the city’s parks, and of the 528 respondents from La Paz, 67.5% indicated using city parks. Given that the percentage of Mexico City respondents who reported living within a 10-minute walk of a park was much lower than that reported by La Paz respondents, greater proximity alone can’t explain the difference in park use.",
          prompt: "The text makes which point about the difference between the proportions of Mexico City residents and La Paz residents using parks?",
          choices: [
            "It could be due to inaccuracies in the survey results.",
            "It was calculated using sources that predate the survey.",
            "It was much larger than the researchers conducting the study expected.",
            "It is caused by something other than the parks’ proximity to city residents."
          ],
          explanation: "Mexico City residents used parks more, even though fewer of them lived within a 10-minute walk of a park. So proximity “alone can't explain the difference,” and something else must be causing it (D)."
        },
        {
          id: "dt025", skill: "Details", answer: "A",
          passage: "External shopping cues are a type of marketing that uses obvious messaging—a display featuring a new product, for example, or a \"buy one, get one free\" offer to entice consumers to make spontaneous purchases. In a study, data scientist Sam K. Hui and colleagues found that this effect can also be achieved with a less obvious cue: rearranging a store’s layout. The researchers explain that trying to find items in new locations causes shoppers to move through more of the store, exposing them to more products and increasing the likelihood that they’ll buy an item they hadn’t planned on purchasing.",
          prompt: "Which response from a survey given to shoppers who made a purchase at a retail store best supports the researchers’ explanation?",
          choices: [
            "\"I needed to buy some cleaning supplies, but they weren’t in their regular place. While I was looking for them, I saw this interesting notebook and decided to buy it, too.\"",
            "\"I didn’t buy everything on my shopping list today. I couldn’t find a couple of the items in the store, even though I looked all over for them.\"",
            "\"The store sent me a coupon for a new brand of soup, so I came here to find out what kinds of soup that brand offers. I decided to buy a few cans because I had the coupon.\"",
            "\"This store is larger than one that’s closer to where I live, and it carries more products. I came here to buy some things that the other store doesn’t always have.\""
          ],
          explanation: "The explanation is that searching for moved items exposes shoppers to more products and leads to unplanned purchases. A matches exactly: the cleaning supplies weren't in their usual place, and while searching the shopper bought a notebook. B, C, and D involve no unplanned purchase caused by a layout change."
        },
        {
          id: "dt026", skill: "Details", answer: "D",
          passage: "Like all species of baleen whales, the sei whale feeds on tiny creatures known as krill by filtering water through bristlelike keratin structures called baleen plates. In this way, baleen whales can eat up to 30 percent of their total mass per day. And while no one would call the sei whale small—it can have a mass as high as 25,000 kg—it is one of the smaller baleen whales and is much smaller than the bowhead whale, which can weigh a whopping 66,000 kg and consume as much as 19,800 kg of krill per day.",
          prompt: "Based on the text, what can most reasonably be concluded about krill consumption among sei and bowhead whales?",
          choices: [
            "The quantities of krill consumed by bowhead whales has made it difficult for sei whales to find sufficient food.",
            "Both the sei whale and the bowhead whale can eat as much as 19,800 kg of krill per day.",
            "Most baleen whales include krill in their diets, but the sei whale is less likely than the bowhead whale to do so.",
            "The bowhead whale is able to eat more krill per day than the sei whale is."
          ],
          explanation: "The sei whale reaches about 25,000 kg, while the bowhead weighs up to 66,000 kg and can eat up to 19,800 kg of krill a day. The larger bowhead can eat more krill per day (D)."
        },
        {
          id: "dt027", skill: "Details", answer: "C",
          passage: "The food industry has long used thermal technologies to preserve food in large batches. Recent advancements in infrared heating were made through research in Mexico on the preservation of bean flour. Infrared heating is generally considered to be an improvement over more conventional thermal preservation methods: whereas conventional methods transfer energy from the surface of a food to its interior, infrared heating uses high-intensity infrared light to generate heat within the food itself, thus reducing industrial cooking times.",
          prompt: "Based on the text, what is one disadvantage of some conventional thermal methods?",
          choices: [
            "They are especially vulnerable to technological breakdowns.",
            "They are only effective in heating foods that are lightweight and small in size.",
            "Their cooking times are longer than those of other methods.",
            "They require more energy than other methods do."
          ],
          explanation: "Conventional methods transfer heat from the surface to the interior, while infrared heats the food from within, “thus reducing industrial cooking times.” So conventional methods take longer (C). Breakdowns (A), food size (B), and energy use (D) are never discussed."
        },
        {
          id: "dt028", skill: "Details", answer: "A",
          passage: "Cocoa is an example of a loanword—that is, a word that originated in one language and was later adopted by another. The word came to English indirectly from cacao, the Spanish word for the plant that chocolate is made from. Spanish had borrowed it from Nahuatl, an Indigenous language of Central Mexico, in which the word’s original form is cacahuatl. \"Iguana\" is also Indigenous in origin and entered English through Spanish. But in this case, the original source was Taino, a language of the Caribbean islands, in which the word for the group of related lizard species is iwana.",
          prompt: "The author makes which point about the Spanish language?",
          choices: [
            "It has served as a medium through which Indigenous languages have influenced English.",
            "Its contribution to English vocabulary roughly equals the collective contribution by Indigenous languages.",
            "It has borrowed words from Indigenous languages and contributed words to them.",
            "It adopted Nahuatl and Taino words in approximately equal numbers."
          ],
          explanation: "Cacao (from Nahuatl) and iguana (from Taíno) both reached English through Spanish. Spanish served as a medium for Indigenous influence on English (A). The text never compares quantities (B, D) or says Spanish contributed words to Indigenous languages (C)."
        },
        {
          id: "dt029", skill: "Details", answer: "A",
          passage: "Reyjane P. Oliveira and colleagues relied on historical DNA (hDNA)—genomic data incidentally preserved in specimens housed in natural history collections to investigate the evolutionary trajectory of the Malagasy grass genus Chasechloa. Although this approach offers unique benefits, such as the ability to ascertain the biogeographical origins of organisms, it remains a relatively underutilized resource because hDNA is often to some extent degraded, a situation not easily remediable under current methodological paradigms and with extant DNA extraction and analysis technologies.",
          prompt: "Information in the text best supports which statement about hDNA?",
          choices: [
            "It may yield insights that other types of genomic data cannot.",
            "It may be underused because of its controversial status among scientists.",
            "It has thus far proved valuable mainly to researchers studying flora.",
            "It tends to be much more degraded than other types of DNA of comparable age."
          ],
          explanation: "hDNA offers “unique benefits, such as the ability to ascertain the biogeographical origins of organisms.” It may provide insights other data cannot (A). The text doesn't say it is controversial (B) or used mainly for plants (C), and it makes no comparison of degradation (D)."
        },
        {
          id: "dt030", skill: "Details", answer: "C",
          passage: "In Armenia, use of solid fuel (e.g., coal, wood) as a share of total household fuel use fell by approximately 90 percent between 2000 and 2018; such shifts are typically explained by appeal to the energy ladder, a model holding that fuel choice is mediated mainly by household income (specifically, high-technology fuels displace solid fuels as incomes rise). Boukary Ouedraogo’s study of fuel use in Burkina Faso shows how reductive this model is, however: although income of course constrained fuel choice, several factors, including the frequency with which certain dishes are cooked, influenced decisions.",
          prompt: "Based on the text, the author would most likely agree with which statement about household income?",
          choices: [
            "It constrains the amount of fuel households use but not the type of fuel they use.",
            "It affects household fuel choice but not for the reasons assumed by the energy ladder model.",
            "It can explain some but not all of the differences in fuel choice across households.",
            "It is often said to influence household fuel choice but actually does not."
          ],
          explanation: "Income “of course constrained fuel choice,” but “several factors” also influenced decisions. Income explains some but not all differences in fuel choice (C). D denies that income matters, B says it works for different reasons, and A invents an amount-versus-type distinction."
        },
        {
          id: "dt031", skill: "Details", answer: "A",
          passage: "The following text is from Yung Wing’s 1909 memoir <i>My Life in China and America.</i><br><br>We landed in New York on the 12th of April, 1847, after a passage of ninety-eight days of unprecedented fair weather. The New York of 1847 was altogether a different city from the New York of 1909. It was a city of only 250,000 or 300,000 inhabitants; now it is a metropolis rivaling London in population, wealth and commerce. The whole of Manhattan Island is turned into a city of skyscrapers, churches and palatial residences.",
          prompt: "Based on the passage, how does Yung perceive New York to have changed between 1847 and 1909?",
          choices: [
            "The city has become more developed and populated.",
            "The architecture of the city has become more practical and less appealing.",
            "The city’s residents have become more politically active.",
            "The city’s population has become much more diverse than London’s."
          ],
          explanation: "Yung contrasts a city of “only 250,000 or 300,000 inhabitants” with a metropolis “rivaling London” and full of skyscrapers. New York became more developed and more populated (A). Nothing in the text concerns appeal (B), politics (C), or diversity (D)."
        },
        {
          id: "dt032", skill: "Details", answer: "B",
          passage: "The following text is from Julia Alvarez’s 2000 novel In the Name of Salomé. Salomé, a poet, is hosting guests in the front parlor of her family home, and Ramona is her sister.<br><br>A salon is a social gathering for the exploration of intellectual ideas. It was evening when the two men got up to leave. Tia Ana had already come into the room several times to see if these guests had departed yet. The front parlor had always been her special province, as she used it for her little school. Now, every evening, it turned into Salomé’s salon, as Ramona called it, and it was never in order for its transformation back to a classroom the following morning.",
          prompt: "Based on the text, what most likely motivates Tia Ana’s behavior during Salome’s salon?",
          choices: [
            "She considers the guests to be uninteresting and is trying to convince them to leave.",
            "She is anxious for the gathering to disperse so that she can ready the space for her own needs.",
            "She is impatient to share her plans to start a new school with the guests and hopes they will support her.",
            "She is frustrated because she needs assistance elsewhere in the house, but Salomé is unavailable while entertaining the guests."
          ],
          explanation: "The parlor is Tia Ana's “special province” for her school, and every evening it is “never in order for its transformation back to a classroom.” She keeps checking because she needs the room ready for her own use (B). A, C, and D give motives the text doesn't support."
        },
        {
          id: "dt033", skill: "Details", answer: "D",
          passage: "In her 1998 book Blues Legacies and Black Feminism, Angela Y. Davis bases her analysis in part on recordings of songs sung in the 1920s by Gertrude \"Ma\" Rainey and Bessie Smith. Davis focuses on how Rainey and Smith improvised the lyrics—replacing the original lines with mischievous jokes and wordplay. Davis’s work was particularly labor intensive because in order to transcribe, or write down, the lyrics as Rainey and Smith sang them, Davis had to listen repeatedly to the vinyl recordings, which weren’t very clear.",
          prompt: "What does the text most strongly suggest about the songs sung by Rainey and Smith?",
          choices: [
            "The songs have grown in popularity since Rainey and Smith first sang them.",
            "According to Davis, the songs sung by Rainey were more musically innovative than those sung by Smith typically were.",
            "There were more recordings made of Rainey’s songs than there were of Smith’s.",
            "There were few, if any, reliable transcriptions of Smith’s and Rainey’s improvised lyrics when Davis began her research."
          ],
          explanation: "Davis had to transcribe the lyrics herself by listening repeatedly to unclear recordings. That suggests reliable transcriptions of the improvised lyrics didn't already exist (D). Popularity (A), innovation (B), and the number of recordings (C) are never discussed."
        },
        {
          id: "dt034", skill: "Details", answer: "B",
          passage: "Historians point to the rule of the Piast dynasty as crucial to the formation of the Polish state. However, some differentiate between members of the dynasty like Władysław I Herman, who ruled as duke from 1079 to 1102 CE, and less well-documented figures like Lestek, who is said to have ruled in the 9th and 10th centuries but whose historical actuality is disputed. Lestek appears in the Gesta principum Polonorum, a chronicle of medieval Polish history written between 1112 and 1118. However, the chronicle’s documentation of Lestek relies on oral tradition, unlike its records of later rulers.",
          prompt: "According to the text, what is a difference between how historians view Lestek and how they view Władysław I Herman?",
          choices: [
            "Historians believe that the Gesta principum Polonorum provides more evidence for Lestek’s existence than it does for Władysław I Herman’s existence.",
            "Historians agree that Władysław I Herman existed, but disagree about whether Lestek existed.",
            "Historians agree that Lestek ruled Poland much later than Władysław I Herman.",
            "Historians find the orally transmitted stories affirming the existence of Władysław I Herman to be more convincing than similar stories about Lestek."
          ],
          explanation: "Władysław I Herman is a well-documented ruler, while Lestek's “historical actuality is disputed.” Historians accept that Władysław existed but disagree about Lestek (B). A and C reverse the facts, and D is wrong because only Lestek's record relies on oral tradition."
        },
        {
          id: "dt035", skill: "Details", answer: "D",
          passage: "The following text is adapted from Lady Gregory’s 1904 play Spreading the News. Jack Smith and Bartley Fallon have encountered each other at the local fair.<br><br>JACK: It isn’t to the fair I came myself, but up to the Five Acre Meadow I’m going where I have a contract for the hay. We’ll get a share of it into tramps [drying stacks] today.<br><br>BARTLEY: You will not get it into tramps today. The rain will be down on it by evening, and on myself too. It’s seldom I ever started on a journey but the rain would come down on me before I’d find any place of shelter.<br><br>JACK: If it didn’t itself, Bartley, it is my belief you would carry a leaky pail on your head in place of a hat, that way you’d not be without some cause of complaining.",
          prompt: "Based on the text, what does Jack most likely believe about Bartley?",
          choices: [
            "Bartley will be able to help Jack with cutting the hay.",
            "Bartley is concerned that Jack hasn’t prepared for the weather.",
            "Bartley is a poor judge of the weather.",
            "Bartley will find fault with any situation."
          ],
          explanation: "Bartley predicts rain and says it always rains on him. Jack jokes that even if it didn't rain, Bartley would wear “a leaky pail on your head” so he'd never be “without some cause of complaining.” Jack thinks Bartley will find fault with anything (D)."
        },
        {
          id: "dt036", skill: "Details", answer: "A",
          passage: "Fernand Braudel and other historians of capitalism rarely discuss domestic capitalism in Africa before the period of European colonization, implicitly presenting capitalism as external to and imposed on Africa. John Iliffe and other Africanist scholars have shown, however, that in parts of Africa, institutionally protected private land ownership, the existence of salaried labor, and other features of capitalism predated colonization. One reason for this discrepancy is that historians of capitalism tend to focus on longitudinal economic data drawn from archival records, which do not exist for much of precolonial Africa.",
          prompt: "Which statement about Iliffe and other Africanist scholars is best supported by information in the text?",
          choices: [
            "They likely make use of different types of evidence than historians of capitalism typically rely on.",
            "They likely have a different view about which activities should be considered capitalist in nature than historians of capitalism do.",
            "They likely differ from historians of capitalism in the methods they use to derive longitudinal economic data from archival records.",
            "They likely view capitalism as having been more beneficial for Africa than historians of capitalism do."
          ],
          explanation: "Historians of capitalism rely on “longitudinal economic data drawn from archival records,” which don't exist for much of precolonial Africa. Yet Africanist scholars documented capitalism there, so they must have used other kinds of evidence (A). B, C, and D aren't supported."
        },
        {
          id: "dt037", skill: "Details", answer: "C",
          passage: "In 2016 Marta S. Pimentel and colleagues published a study concluding that ocean acidification has a strong effect on the behavior of Sparus aurata, a species of fish. However, Pimentel and colleagues’ study relied on a mean sample size of only 12 fish. In a 2022 review of various scientists’ conclusions about the impacts of ocean acidification on fish behavior, Timothy D. Clark and colleagues caution that relying on such a relatively small sample size can increase the potential for biased analysis. Such analysis, in turn, can contribute to reports of exaggerated effects.",
          prompt: "What does the text most directly suggest about Pimentel and colleagues’ conclusion?",
          choices: [
            "It was based on the same mean sample size used in many earlier studies of fish species.",
            "It likely has broad implications for other species of fish besides Sparus aurata.",
            "It may overstate the effect of ocean acidification on the behavior of <i>Sparus aurata</i>.",
            "It has been largely invalidated by results obtained from similar studies."
          ],
          explanation: "Pimentel's study used only 12 fish, and Clark warns that small samples can lead to biased analysis and “exaggerated effects.” This suggests the conclusion may overstate acidification's effect on the fish (C). A and B are unsupported, and D is too strong: the text raises a caution, not a refutation."
        },
        {
          id: "dt038", skill: "Details", answer: "D",
          passage: "Goujun He and colleagues studied a food-delivery phone app that is popular in China. The researchers found that having “no cutlery” automatically selected influences whether customers request disposable plastic utensils with their food orders. Based on their results, the researchers concluded that this and other small changes to the app could reduce plastic waste in China by as much as 3.26 million metric tons per year.",
          prompt: "According to the text, which choice best describes a conclusion He and colleagues drew from their study?",
          choices: [
            "Production of plastic waste in China is likely to increase in the near future.",
            "Food-delivery apps that prevent customers from requesting cutlery are becoming more popular.",
            "Customers who understand how food-delivery apps work make more environmentally friendly choices.",
            "Small changes to how a food-delivery app works can greatly lower plastic waste."
          ],
          explanation: "The researchers “concluded that this and other small changes to the app could reduce plastic waste in China by as much as 3.26 million metric tons per year” (D). A contradicts the text, and B and C are never mentioned."
        },
        {
          id: "dt039", skill: "Details", answer: "B",
          passage: "Can field mustard plants grow on Mars? Can pea plants? You might think the answer to these questions is obviously no, but researchers in the Netherlands recently showed that the seeds of many common plant species can germinate in soil designed to simulate Martian conditions, as long as water is supplied. In fact, some species actually did better in Martian soil than in Earth soil: 30 percent of field mustard seeds sprouted when planted in simulated Martian soil, compared with 4 percent that did when planted in soil from their home planet.",
          prompt: "According to the text, what percentage of field mustard seeds planted in Martian soil sprouted?",
          choices: [
            "18 percent",
            "30 percent",
            "100 percent",
            "5 percent"
          ],
          explanation: "“30 percent of field mustard seeds sprouted when planted in simulated Martian soil” (B). The 4 percent figure applies to Earth soil."
        },
        {
          id: "dt040", skill: "Details", answer: "B",
          passage: "Superlubricity, the state of virtually no friction between materials, has desirable applications in many industries. For example, it can make aircraft engines more efficient. To produce a coating that achieves superlubricity, Chanaka Kumar and colleagues broke down carbon nanotubes into fragments of graphene to fully cover two surfaces that would rub together. Friction between pieces of graphene is generally extremely low, and when the researchers added a drop of oil as lubrication, that friction nearly vanished. This new coating may drastically lower friction-related energy costs.",
          prompt: "According to the text, what happened when the researchers added oil to the surfaces covered in graphene fragments?",
          choices: [
            "All the pieces of graphene collected on just one of the two surfaces.",
            "The low amount of friction between the surfaces became even lower.",
            "Carbon nanotubes on the surfaces fractured into smaller pieces.",
            "Friction between the surfaces did not noticeably change right away."
          ],
          explanation: "Friction between graphene pieces was “generally extremely low,” and when oil was added “that friction nearly vanished.” The already low friction became even lower (B)."
        },
        {
          id: "dt041", skill: "Details", answer: "B",
          passage: "Companies involved in petroleum extraction include drilling equipment among their assets. But petroleum extraction is a very carbon-intensive industry, so as social attitudes increasingly favor using less carbon intensive sources of energy, demand for petroleum falls and the drilling equipment will eventually, or even suddenly, become a liability as reduced petroleum prices make it more difficult to recover the expense of maintaining such equipment.",
          prompt: "What claim does the text make about the demand for petroleum?",
          choices: [
            "Companies involved in petroleum extraction are not affected by the demand for petroleum.",
            "The societal preference for low-carbon energy sources is a factor in the demand for petroleum.",
            "The demand for petroleum follows a predictable annual cycle.",
            "Companies involved in petroleum extraction can benefit from a decline in the demand for petroleum."
          ],
          explanation: "“As social attitudes increasingly favor using less carbon intensive sources of energy, demand for petroleum falls.” Social preference affects demand (B). A and D contradict the text, and C is never mentioned."
        },
        {
          id: "dt042", skill: "Details", answer: "C",
          passage: "Why do flat-headed cats purr but jaguars roar? Researchers hypothesize that this difference between the two feline species may be partly due to a U-shaped bone in their throats called the hyoid. Flat-headed cats, which are much smaller than jaguars, have a rigid hyoid that rumbles when the cat’s larynx vibrates, resulting in a purr. By contrast, jaguars have a somewhat flexible hyoid, and the bone is attached to the skull with a stretchy ligament that flat-headed cats lack. These traits allow jaguars and most other species of big cats to produce powerful roars. The same traits may also prevent most big cats from purring.",
          prompt: "According to the text, which trait do researchers think may contribute to a flat-headed cat’s ability to purr?",
          choices: [
            "The shape of the flat-headed cat’s larynx",
            "The ligament attaching the hyoid bone to the flat-headed cat’s skull",
            "The flat-headed cat’s rigid hyoid bone",
            "The relative size of the flat-headed cat’s body and throat"
          ],
          explanation: "Flat-headed cats “have a rigid hyoid that rumbles when the cat's larynx vibrates, resulting in a purr” (C). The stretchy ligament (B) is something they lack, and the larynx shape (A) and body size (D) aren't named as the cause."
        },
        {
          id: "dt043", skill: "Details", answer: "D",
          passage: "Biologist Grace Herzel and colleagues conducted a study of how butterfly color and weather conditions relate to butterfly behavior, which wouldn’t have been possible without data gathered by students and other amateur science enthusiasts in the community. Considering over three years worth of data, the researchers found that white butterflies were observed on green flowers more often than any other butterflies were, and that butterflies were observed to feed more often on cloudy days than on other days.",
          prompt: "According to the text, which factors seemed to be linked to the behavior of butterflies in Grace Herzel and colleagues’ study?",
          choices: [
            "Weather conditions but not butterfly color",
            "Butterfly color but not weather conditions",
            "Neither butterfly color nor weather conditions",
            "Both butterfly color and weather conditions"
          ],
          explanation: "White butterflies were seen on green flowers more often than others (linking color to behavior), and butterflies fed more on cloudy days (linking weather to behavior). Both factors were linked (D)."
        },
        {
          id: "dt044", skill: "Details", answer: "A",
          passage: "“Coyote” is an example of a loanword—that is, a word that originated in one language and was later adopted by another. The word came to English indirectly from coyote, the Spanish word for the wild canine species. Spanish had borrowed it from Nahuatl, an Indigenous language of Central Mexico, in which the word’s original form is coyotl. “Condor” is also Indigenous in origin and entered English through Spanish. But in this case, the original source was Quechua, a language of South America, in which the word for the large vulture species is kuntur.",
          prompt: "The author makes which point about the Spanish language?",
          choices: [
            "It has served as a medium through which Indigenous languages have influenced English.",
            "Its contribution to English vocabulary roughly equals the collective contribution by Indigenous languages.",
            "It has borrowed words from Indigenous languages and contributed words to them.",
            "It adopted Nahuatl and Quechua words in approximately equal numbers."
          ],
          explanation: "Coyote (from Nahuatl) and condor (from Quechua) both entered English through Spanish. Spanish served as a medium for Indigenous influence on English (A)."
        },
        {
          id: "dt045", skill: "Details", answer: "A",
          passage: "Ke Bi and colleagues relied on historical DNA (hDNA)—genomic data incidentally preserved in specimens housed in natural history collections—to investigate the evolutionary trajectory of the alpine chipmunk (Tamias alpinus). Although this approach offers unique benefits, such as the ability to contrast historical genomic data with present-day data, it remains relatively underutilized because archival specimens are sometimes stored in ways that compromise DNA quality, a situation not easily remediable under current methodological paradigms and with extant DNA extraction and analysis technologies.",
          prompt: "What does the text most strongly suggest about specimens from natural history collections?",
          choices: [
            "While they may contain valuable genomic data, not all of them can yield usable hDNA.",
            "They are primarily used as sources of genomic data by scientists studying organisms that have undergone major evolutionary change.",
            "Because of their often deteriorated condition, they tend to yield genomic data that are time-consuming to extract and interpret.",
            "While they were used in a study that made an important scientific discovery, they are generally of marginal value as sources of genomic data."
          ],
          explanation: "hDNA has unique benefits, but archival specimens “are sometimes stored in ways that compromise DNA quality.” Specimens can contain valuable data, but not all of them yield usable hDNA (A). B and D aren't supported, and C overstates the problem with “often deteriorated” and time-consuming extraction."
        },
        {
          id: "dt046", skill: "Details", answer: "B",
          passage: "In the 1960s, Gloria Richardson led a movement to promote racial equality. Her involvement in this effort was inspired by her daughter, Donna Richardson. In 1961, Donna joined protests organized by the Student Nonviolent Coordinating Committee in Cambridge, Maryland. Following her daughter, Gloria joined these protests too. Gloria soon became the cochair of the Cambridge Nonviolent Action Committee. She was also the leader of what became known as the Cambridge movement.",
          prompt: "According to the text, what did Gloria Richardson lead?",
          choices: [
            "A new business in Cambridge, Maryland",
            "The Cambridge movement",
            "Protests to support environmental protections",
            "Her daughter Donna’s high school"
          ],
          explanation: "“She was also the leader of what became known as the Cambridge movement” (B)."
        },
        {
          id: "dt047", skill: "Details", answer: "D",
          passage: "Mexican textile artist Victoria Villasana weaves stories triumph, using her unique method of applying colorful yarn to photographs of people. In some works, Villasana focuses on celebrating cultural icons who are people of color, as she does in her depiction of artist Yayoi Kusama. However, in other works, Villasana honors ordinary people, as she does in her captivating portrayal of a woman making tortillas. Villasana sees both of these approaches as ways of depicting the power and interconnectedness of all people.",
          prompt: "According to the text, what kind of material does Villasana use in her artworks?",
          choices: [
            "Stone",
            "Chalk",
            "Paint",
            "Yarn"
          ],
          explanation: "Villasana's method is “applying colorful yarn to photographs of people” (D)."
        },
        {
          id: "dt048", skill: "Details", answer: "A",
          passage: "Mauricio Drelichman and Hans-Joachim Voth’s research on the fiscal vulnerability of Philip II (who ruled not only Spain but other regions including Milan from 1556 to 1598) builds on other studies of European early modern state finance, including Hoffman and Norberg’s work on the relationship between state finance and political development. But Drelichman and Voth’s unique contribution is their reconstruction of the earliest extant set of annual fiscal records for any sovereign state, which demonstrate that Philip’s defaults were caused by short-term liquidity crises, not long-term unsustainable debts.",
          prompt: "What does the text most strongly suggest about the value of Drelichman and Voth’s research to their discipline?",
          choices: [
            "Drelichman and Voth’s research uses newly compiled evidence to eliminate one possible reason Philip II defaulted on his debts and to affirm another.",
            "Drelichman and Voth’s research revealed the role of Philip II’s debt defaults in exacerbating short-term liquidity crises.",
            "Drelichman and Voth’s research builds on earlier work about a particular aspect of European early modern state finance By Hoffman and Norberg and corrects errors in that earlier work.",
            "Drelichman and Voth’s research presented a novel body of evidence supporting Hoffman and Norberg’s hypothesis regarding why Philip II default on several loans."
          ],
          explanation: "Their new fiscal records showed that Philip's defaults “were caused by short-term liquidity crises, not long-term unsustainable debts.” The new evidence rules out one explanation and supports another (A). B reverses cause and effect, C invents corrections, and D credits the hypothesis to Hoffman and Norberg."
        },
        {
          id: "dt049", skill: "Details", answer: "A",
          passage: "Google’s introduction of the Chrome web browser in 2008 is a quintessential instance of brand extension the company leveraged its brand recognition as an internet search provider to enter a product category where it had not previously competed. An outstanding question is whether perceived category similarity predicts consumers likelihood of purchasing brand extensions. To answer this question, Alicia Grasby et al. identified 30 extended-brand pairs (e.g., the same brand of shoes and gloves) in 52 weeks of purchases by approximately 60,000 households and, for each pair, calculated the change in probability of a brand in one category being purchased if the same brand was purchased in the other category.",
          prompt: "Based on the text, which potential study design would most likely to produce evidence that would enable Grasby et al. to answer their research question?",
          choices: [
            "Have a representative sample of the households rate the similarity of the product categories in each extended-brand pair, then determine how, if at all, those ratings correlate with the change in probability that the team calculated for each pair.",
            "Poll a representative sample of the households to determine the degree of brand recognition of each brand in the extended-brand pairs, then determine how, if at all, the degree of brand recognition correlates with the average cost of each product in the pairs.",
            "Have a representative sample of the households rate the similarity of one product in each extended-brand pair to other products in the same category, then determine how, if at all, those ratings correlate with the change in probability that the team calculated for each pair.",
            "Poll a representative sample of the households to determine the degree of brand recognition for each brand in the extended-brand pairs, then determine how, if at all, the degree of brand recognition correlates with the frequency with which a different group of households purchased at least once product of that brand."
          ],
          explanation: "The question is whether perceived category similarity predicts purchases of brand extensions. A measures perceived similarity of each pair's categories and correlates it with the team's change-in-probability figure, so it tests the question directly. B and D measure brand recognition, and C rates the wrong kind of similarity."
        },
        {
          id: "dt050", skill: "Details", answer: "D",
          passage: "In Costa Rica, use of solid fuel (e.g, coal, wood) as a share of total household fuel use fell by approximately 60 percent between 2000 and 2019; such shifts are typically explained by appeal to the energy ladder, a model holding that fuel choice is mediated mainly by household income (specifically, high-technology fuels displace solid fuels as incomes rise). Rasmus Heltberg’s study of fuel use in Guatemala shows how reductive this model is, however: household fuel use was heterogeneous, flexible, and influenced by several factors, including local price of different sources.",
          prompt: "Based on the text, which choice best explains why the author characterizes the energy ladder as “reductive”?",
          choices: [
            "The energy ladder asserts that households only consider one aspect of fuel when making fuel choices, but Heltberg’s study showed that households ignore that characteristic of fuel and evaluate several other factors instead.",
            "The energy ladder holds that the adoption of one type of fuel means that another type of fuel must be displaced, but Heltberg’s study showed that several different fuel types are typically used in equal proportion.",
            "The energy ladder assumes that the same factor influences household fuel choice in all locations, but Heltberg’s study showed that fuel choice in Guatemala is influenced by different factors than is fuel choice in Costa Rica.",
            "The energy ladder attributes household fuel choice primarily to a single characteristic of households, but Heltberg’s study showed that multiple circumstances can affect household fuel choice."
          ],
          explanation: "The energy ladder attributes fuel choice “mainly” to household income, a single factor. Heltberg found that several factors, such as local prices, influenced it. That is why the model is reductive (D)."
        },
        {
          id: "dt051", skill: "Details", answer: "D",
          passage: "The groundbreaking Negro Ensemble Company (NEC), founded in 1967, produced Paul Cater Harrison’s award-winning play The Great MacDaddy in 1974. The company was cofounded by Robert Hooks, an actor, producer, and activist, and actor and playwright Douglas Turner Ward, who had met while performing in a 1960 touring production of Lorraine Hansberry’s play A Raisin in the Sun. They shared a vision of a theater company that would nurture and showcase the work of Black theater professionals. Since its beginning, NEC has provided a forum for the voices of Harrison and other Black playwrights through workshops and performances.",
          prompt: "According to the text, how did Hooks and Ward initially meet?",
          choices: [
            "Harrison introduced Hooks to Ward at a performance of The Great MacDaddy.",
            "Hooks and Ward attended the same performance of The Great MacDaddy.",
            "Hooks and Ward participated in the same workshop at NEC.",
            "Hooks and Ward were both actors in a production of A Raisin in the Sun."
          ],
          explanation: "Hooks and Ward met “while performing in a 1960 touring production of… A Raisin in the Sun” (D)."
        },
        {
          id: "dt052", skill: "Details", answer: "D",
          passage: "The following text is from Julia Alvarez’s 2000 novel In the Name of Salome. The narrator and her sister, daughters of a famous poet, are being tutored by Alejandro Román.<br><br>Our tutor, Alejandro Román, brought his younger brother, Miguel, to class one day. By now I was eighteen and had learned everything Alejandro had to teach me, so I was glad for a new face. Miguel was an aspiring poet, and he had heard from his brother that the Ureña girls were none other than the daughters of Nicolás Ureña, and they were smart as clockwork. Miguel was hoping not only to meet us but to make the acquaintance of the poet himself at Mama’s house.",
          prompt: "Based on the text, why does Miguel accompany his brother to the sisters’ house one day?",
          choices: [
            "Miguel has learned all his brother can teach him and now desires to be tutored by the sisters.",
            "Miguel has not received formal instruction in poetry and wants to ask the sisters’ famous father to be his mentor.",
            "Miguel wants to recite his poems to the sisters and inquire about their perspectives on his work.",
            "Miguel anticipates having the opportunity to be introduced to both the sisters and their father."
          ],
          explanation: "“Miguel was hoping not only to meet us but to make the acquaintance of the poet himself.” He expected to meet both the sisters and their father (D). The text doesn't say he wants tutoring (A), a mentor (B), or feedback on his poems (C)."
        },
        {
          id: "dt053", skill: "Details", answer: "A",
          passage: "In 2004, Andrew Rogers created Ancient Language. In this work, Rogers created an 80-meter-long geoglyph out of rocks in the Atacama Desert. Rogers’s work is part of the land art movement, in which artists reject the confinement and commercialization of art galleries. These artists usually install large-scale pieces outdoors, often in surprising locations.",
          prompt: "Based on the text, what can be inferred about Ancient Language?",
          choices: [
            "Its location may be considered surprising.",
            "It marked a shift in the popularity of the land art movement.",
            "It may have had more commercial success in a different outdoor location.",
            "It was created early in Rogers’s career."
          ],
          explanation: "Land artists install pieces “often in surprising locations,” and Ancient Language is a land art geoglyph in the Atacama Desert. Its location may be considered surprising (A). Popularity (B), commercial success (C), and career timing (D) are unsupported."
        },
        {
          id: "dt054", skill: "Details", answer: "B",
          passage: "Optimal foraging theory (OFT) holds that animals’ foraging behaviors reflect cost-benefit trade-offs that vary by species and with dynamic ecological circumstances. One such circumstance is lunar intensity, which Joel Brown and colleagues found to be negatively associated with foraging by Arizona pocket mice but Deborah J. Curtis and colleagues found to be positively associated with foraging by mongoose lemurs. This discrepancy is explicable in terms of OFT: the lemurs’ greater reliance on vision means that higher lunar intensity benefits them more than it benefits the mice.",
          prompt: "Which choice best describes the finding made by Curtis and colleagues, as presented in the text?",
          choices: [
            "Increased lunar intensity is more beneficial for mongoose lemurs than it is for Arizona pocket mice.",
            "As lunar intensity increases, mongoose lemurs increase their foraging activity.",
            "During periods of high lunar intensity, mongoose lemurs increase their reliance on vision.",
            "As lunar intensity increases, Arizona pocket mice reduce their foraging activity."
          ],
          explanation: "Curtis and colleagues found that lunar intensity was “positively associated with foraging by mongoose lemurs.” As moonlight increases, lemurs forage more (B). A is the author's explanation, not their finding, and D is Brown's finding."
        },
        {
          id: "dt055", skill: "Details", answer: "C",
          passage: "The following text is from Thomas Mann’s 1924 novel The Magic Mountain, translated by John E. Woods in 1995.<br><br>The story of Hans Castorp that we intend to tell here—not for his sake (for the reader will come to know him as a perfectly ordinary, if engaging young man), but for the sake of the story itself, which seems to us to be very much worth telling (although in Hans Castorp’s favor it should be noted that it is his story, and that not every story happens to everybody)—is a story that took place long ago, and is, so to speak, covered with the patina of history and must necessarily be told with verbs whose tense is that of the deepest past.",
          prompt: "What does the text most strongly suggest about the story of Hans Catrop?",
          choices: [
            "Though it is true that stories of even the most uninteresting people are themselves interesting because all people are unique, the reason this story is interesting is nonetheless difficult to understand because of the passage of time.",
            "Even though it is a story of a person of no particular importance, its age and the manner in which it therefore must be told are both indicators that the story itself is important.",
            "It is a remarkable story that happened to an unremarkable person, though one could plausibly argue that because the story is valuable, some of its value accrues to the person at its center.",
            "Like all stories about the lives of inconsequential people, this story must necessarily be related in a particular way if the reason the story is consequential is to be made evident to the audience."
          ],
          explanation: "The narrator tells the story “for the sake of the story itself,” calls Hans “perfectly ordinary,” but adds that “in Hans Castorp's favor… it is his story.” A remarkable story happens to an unremarkable person, and some credit goes to him (C). A, B, and D misread the reasons the story is worth telling."
        },
        {
          id: "dt056", skill: "Details", answer: "A",
          passage: "The Lego Group’s introduction of the Legoland theme park in 1968 is a quintessential instance of brand extension—the company leveraged its brand recognition as a toy manufacturer to enter a product category where it had not previously competed. An outstanding question is whether perceived category similarity predicts consumers’ likelihood of purchasing brand extensions. To answer this question, Alicia Grasby et al. identified 30 extended-brand pairs (e.g., the same brand of wristwatch and necktie) in 52 weeks of purchases by approximately 60,000 households and, for each pair, calculated the change in probability of a brand in one category being purchased if the same brand was purchased in the other category.",
          prompt: "Based on the text, which potential study design would be most likely to produce evidence that would enable Grasby et al. to answer their research question?",
          choices: [
            "Have a representative sample of the households rate the similarity of the product categories in each extended-brand pair, then determine how, if at all, those ratings correlate with the change in probability that the team calculated for each pair.",
            "Poll a representative sample of the households to determine the degree of brand recognition for each brand in the extended-brand pairs, then determine how, if at all, the degree of brand recognition correlates with the frequency with which a different group of households purchased at least one product of that brand.",
            "Poll a representative sample of the households to determine the degree of brand recognition of each brand in the pairs, then determine how, if at all, the degree of brand recognition correlates with the average cost of each product in the pairs.",
            "Have a representative sample of the households rate the similarity of one product in each extended-brand pair to other products in the same category, then determine how, if at all, those ratings correlate with the change in probability that the team calculated for each pair."
          ],
          explanation: "The research question concerns perceived category similarity. A has households rate the similarity of each pair's categories and correlates that with the team's calculated change in purchase probability, which answers the question directly. B and C measure brand recognition, and D rates the wrong kind of similarity."
        },
        {
          id: "dt057", skill: "Details", answer: "B",
          passage: "Tracks is a 1988 novel by Ojibwe writer Louise Erdrich. It explores how historical events affect families on a reservation in rural North Dakota. Tracks is typical of Erdrich’s work. Her writing usually focuses on portrayals of everyday life in Ojibwe communities. Yet some of her novels have fantastical plots and take place outside Ojibwe communities. For example, her 1991 novel The Crown of Columbus is essentially adventure fiction, and the thrilling events in its plot are set largely on a Caribbean island.",
          prompt: "According to the text, what is one way that The Crown of Columbus differs from most of Erdrich’s work?",
          choices: [
            "It has been adapted into a movie.",
            "It isn’t set in a rural Ojibwe community.",
            "It contains very little dialogue.",
            "Its main characters are Ojibwe."
          ],
          explanation: "Most of Erdrich's work portrays everyday life in Ojibwe communities, but The Crown of Columbus is set largely on a Caribbean island. It isn't set in a rural Ojibwe community (B)."
        },
        {
          id: "dt058", skill: "Details", answer: "A",
          passage: "The following text is adapted from Rupa Bajwa’s 2004 novel The Sari Shop. Ramchand works as an assistant in a shop in Amritsar, India.<br><br>Even at ten in the morning, the bazaar was throbbing with activity. The halwai [baker] was already installed in front of the Mishthaan Sweet Shop, pressing jalebi batter into squiggly shapes that floated and simmered in the oil in a big iron cauldron. All the shops had opened for the day and, Ramchand noted guiltily, all the shop assistants were already in place, trying to sell things with fixed, attentive smiles on their shiny, bathed faces.",
          prompt: "Based on the text, what can most reasonably be inferred about Ramchand?",
          choices: [
            "Ramchand is remorseful about arriving to work later than other shop assistants he sees.",
            "Ramchand is mesmerized by frying jalebi batter while walking to work as a shop assistant.",
            "Ramchand is overwhelmed by a bazaar after seeing the chaos of other shop assistants selling goods.",
            "Ramchand is happy about being at work after seeing shop assistants who are satisfied with their jobs."
          ],
          explanation: "Ramchand notes “guiltily” that all the other shop assistants “were already in place.” He feels remorse about being later than they were (A)."
        },
        {
          id: "dt059", skill: "Details", answer: "B",
          passage: "Economist Gabriel Zucman finds that 8% of worldwide household wealth is held in tax havens (territories such as Singapore with low tax rates for investors who reside outside those territories). Zucman also finds that use of tax havens differs between countries—they are rarely used by investors living in Japan, while many investors who utilize tax havens reside in Saudi Arabia or Greece. Philosopher Ingrid Robeyns disapproves of the use of tax havens as a method of tax avoidance that, though legally permissible, nonetheless helps investors to sidestep payment toward government upkeep.",
          prompt: "Based on the text, what does Zucman’s research suggest about investors residing in Japan?",
          choices: [
            "They are engaging in investment practices that Robeyns would acknowledge as beneficial because they are legally permissible.",
            "They are less likely than investors residing in Saudi Arabia to store wealth in Singapore.",
            "They are more likely than residents of Singapore to utilize investment strategies that might yield greater returns but that might also result in greater losses.",
            "They are more likely than residents of Greece to engage in tax avoidance."
          ],
          explanation: "Tax havens “are rarely used by investors living in Japan,” while many users live in Saudi Arabia. Japanese investors are less likely to store wealth in a haven such as Singapore (B). D reverses the comparison with Greece, A contradicts Robeyns's disapproval, and C is not discussed."
        },
        {
          id: "dt060", skill: "Details", answer: "A",
          passage: "Radamés Cordero et al. have confirmed that twenty mushroom species (including Coprinellus micaceus and species from the genus Russula) maintain subambient temperatures in both their fruited bodies and their mycelium (the root-like hyphae from which the fruited bodies grow), though the benefits of this hypothermic behavior are unclear. Noting that relative coldness was more pronounced in fruiting than in nonfruiting sites of the mycelium—a difference that persisted even after fruited bodies were detached—the researchers speculate that thermoregulation in the mycelium may influence reproductive success.",
          prompt: "Which statement about the mycelium of the twenty mushroom species is best supported by the text?",
          choices: [
            "Variation in thermoregulation across the mycelium may occur independent of the presence or absence of fruited bodies.",
            "The correlation between higher mycelium temperature and greater fruit productivity indicates that successful reproduction may be dependent on thermoregulation in the mycelium.",
            "Temperatures in the fruiting areas of the mycelium are lower than in the nonfruiting areas due to differences in the depth and spread of the mycelium within soil or other organic matter.",
            "The mycelium generally maintains temperatures lower than those of the fruited bodies even when considering temperature variations between fruiting and nonfruiting sites."
          ],
          explanation: "Relative coldness was greater at fruiting sites, and this difference “persisted even after fruited bodies were detached.” So the variation can occur independently of whether fruited bodies are present (A). B reverses the temperature relationship, C invents a cause, and D isn't stated."
        },
        {
          id: "dt061", skill: "Details", answer: "B",
          passage: "High-reward flowers that produce nectar with relatively high sugar concentrations are thought to be especially attractive to stripe-throated hermits and other hummingbird species. But when María A. Maglianesi and team monitored hummingbird visits to flowering plants, including Palicourea tomentosa, at Los Cusingos Bird Sanctuary and other sites in Costa Rica, they found that visit frequencies weren’t influenced by nectar traits. Rather, physical compatibility of flower corollas (collections of petals) and hummingbird bills more strongly predicted hummingbird-plant interaction patterns.",
          prompt: "Which statement about hummingbird preferences is most strongly supported by the text?",
          choices: [
            "Hummingbirds consistently prefer plant species whose flowers have physical traits that are compatible with their bills but offer relatively low nectar rewards.",
            "The floral traits that most strongly influence which plant species hummingbirds prefer may result in certain hummingbird species visiting flowers with relatively low nectar rewards over those with higher nectar rewards.",
            "Hummingbirds’ preferences are primarily driven by trait-matching between their bills and flower corollas, though nectar qualities are a secondary factor driving their preferences.",
            "Physical compatibility between flower corollas and hummingbird bills becomes an important factor that influences hummingbird preferences when hummingbirds are uncertain about which plants produce highreward nectar."
          ],
          explanation: "Visit frequency wasn't influenced by nectar traits; physical fit between bill and corolla mattered more. So hummingbirds may visit a well-fitting flower with low nectar over a poorly fitting one with high nectar (B). A says “consistently,” which is too strong, and C and D give nectar a role the text denies."
        },
        {
          id: "dt062", skill: "Details", answer: "C",
          passage: "Researchers who examined data from radio-tagged southern sea otters <i>(Enhydra lutris nereis)</i> identified fitness benefits gained by otters that used tools. By using fixed stones as anvils, tool-using otters gained access to high-quality, hard-shelled prey (e.g., mussels and clams) that they could usually not access through biting alone. Non-tool-using otters foraged abundant, energy-poor, easily extractable prey instead (e.g., snails). Even when easily processed prey were depleted, tool-using otters that processed mussels and clams were thus able to obtain their needed energy resources and to do so without incurring tooth damage.",
          prompt: "What does the text most strongly suggest about southern sea otters in environments where snails, mussels, and clams are present?",
          choices: [
            "Those otters whose diet consists mainly of snails will likely exhibit less tooth damage than will those otters that use tools to consume mussels and clams.",
            "Those otters that do not use tools will likely have more robust health than those otters that do use tools.",
            "Those otters that do not use tools will likely need to process larger amounts of prey to meet their energy requirements than will those otters that use tools.",
            "Those otters that consume mussels and clams without the use of tools will likely spend less time foraging than will those otters that use tools to access the same prey resources."
          ],
          explanation: "Non-tool users eat “energy-poor” snails, while tool users get high-quality, hard-shelled prey. To meet their energy needs, non-tool users would have to process more prey (C). The text says tool users avoid tooth damage, so A has no support, and B and D are also unsupported."
        }
      ]
    }
  ]
});
