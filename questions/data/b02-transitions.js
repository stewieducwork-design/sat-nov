/* Buổi 02: Transitions, 35 questions. */
QBank.register({
  id: "b02-transitions",
  title: "Transitions",
  description: "Buổi 02: Logical transitions",
  timeLimitMinutes: 41,
  sections: [
    {
      title: "Transitions",
      directions: "<p>Each text has a blank where a transition belongs. Read the sentences on both sides of the blank, decide how they relate (addition, contrast, cause and effect, example, sequence, clarification), then choose the transition that expresses that relationship.</p>",
      questions: [
        {
          id: "t01", skill: "Emphasis", answer: "D",
          passage: "John Quincy Adams employed the pseudonym “Marcellus”—a reference to a leader of an ancient Roman army—in political essays he wrote in 1793, a choice that accomplished far more than simply concealing his authorship. ______ it wasn't an arbitrary pen name but rather a complex rhetorical strategy through which Adams aligned his political views with the venerated republican ideals of the ancient world, thereby bolstering the authority of his writing.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Conversely,", "In addition,", "However,", "Indeed,"],
          explanation: "The second sentence confirms and expands the first sentence's claim that the pen name “accomplished far more than simply concealing his authorship.” “Indeed” reinforces a point already made. There is no contrast (A, C), and the sentence isn't a new, separate point (B)."
        },
        {
          id: "t02", skill: "General → specific", answer: "D",
          passage: "In a 2005 study by Mellado et al., the researchers' aim was to analyze the diet composition of cattle in Coahuila, Mexico. ______ they aimed to analyze the ratio of three different plant subtypes within these animals' diet: graminoids, forbs, and browse.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Instead,", "All the same,", "Therefore,", "Specifically,"],
          explanation: "The first sentence states the aim in general terms (diet composition); the second narrows it to the exact thing measured (the ratio of three plant subtypes). “Specifically” signals that move from general to precise."
        },
        {
          id: "t03", skill: "Method → result", answer: "A",
          passage: "At a time when many women writers used male pseudonyms to gain greater freedom of self-expression by evading gender conventions, Katherine Bradley and Edith Cooper adapted the practice by publishing poetry, prose, and drama for four decades under the shared name Michael Field. ______ the duo was able to express the joint creative vision that sustained their long personal and professional partnership.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["In this way,", "For instance,", "Later,", "On the other hand,"],
          explanation: "Publishing under one shared name is the method; expressing a joint creative vision is what that method achieved. “In this way” links a means to its result. It isn't an example (B), a later event (C), or a contrast (D)."
        },
        {
          id: "t04", skill: "Action → result", answer: "D",
          passage: "In February 1864, James Johnson joined the US Army. He went on to serve in the 18th New York Cavalry during the US Civil War and, ______ earned a place in US history as one of the war's few Chinese-born American soldiers.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["usually,", "for instance,", "in any case,", "in doing so,"],
          explanation: "Earning a place in history is the result of serving in the cavalry. “In doing so” connects a result to the action just described."
        },
        {
          id: "t05", skill: "Complicating a distinction", answer: "D",
          passage: "Srivijaya, a Buddhist sea power based in Sumatra in Indonesia that reached the height of its influence around 800 CE, is classified as a thalassocracy. Thalassocracies are generally considered distinct from tellurocracies, or land-based powers. ______ the British Empire (1600s–1900s CE) notably extended its hegemony across both land and sea.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Underscoring this difference,", "Exemplifying this distinction,", "Supporting this claim,", "Blurring this line,"],
          explanation: "An empire that ruled both land and sea doesn't fit neatly on either side of the sea-power/land-power distinction. “Blurring this line” captures that. A, B, and C all say the example supports the distinction, which it doesn't."
        },
        {
          id: "t06", skill: "Consequence", answer: "D",
          passage: "Voxel modeling and kitbashing approaches to three-dimensional digital modeling for video games yield graphics that accurately represent the relative sizes and proportions of real-world objects, but since these graphics are rendered from perfect geometric shapes, they tend to lack organic realism. ______ these 3D elements may display unnaturally precise angles and curves as compared to their real-world counterparts.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["However,", "In addition,", "In conclusion,", "As such,"],
          explanation: "Unnaturally precise angles are a consequence of building graphics from perfect geometric shapes. “As such” introduces that consequence. There's no contrast (A), it isn't an unrelated extra point (B), and it isn't a summary of the whole text (C)."
        },
        {
          id: "t07", skill: "Sequence", answer: "C",
          passage: "In contrast to first-past-the-post electoral processes, the proportional representation system by which Bolivia's Chamber of Senators is elected begins with citizens casting their votes not for specific candidates but for political parties. ______ once the votes have been tabulated, each party is awarded a number of seats proportional to the number of votes it received.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["In other words,", "Conversely,", "Then,", "However,"],
          explanation: "The text walks through a process in order: the system “begins with” voting for parties, and the next step is awarding seats. “Then” marks that next step. The second sentence isn't a restatement (A) or a contrast (B, D)."
        },
        {
          id: "t08", skill: "Addition", answer: "B",
          passage: "Portuguese researcher Isabel C.F.R. Ferreira reports that the cinnamic acid in termite mushrooms benefits the mushroom by combating harmful molecules called free radicals. ______ Ferreira suggests that the acid can promote cellular health in humans, who also experience free radical damage.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["For example,", "Moreover,", "Conversely,", "Rather,"],
          explanation: "The first sentence gives one benefit (to the mushroom); the second adds a further benefit (to humans). “Moreover” adds a related point. The human benefit isn't an example of the mushroom benefit (A), and nothing is contrasted or corrected (C, D)."
        },
        {
          id: "t09", skill: "Completing the logic", answer: "A",
          passage: "Decentralized space, in which no points in the performance space are privileged over others, was one of the central principles of Merce Cunningham's choreographic philosophy. The approach marked a radical departure from the dance philosophies of Cunningham's mid-twentieth-century contemporaries. ______ resulting in his dance pieces, like <i>Interscape Mirage</i>, being received not merely as experimental spectacles but as groundbreaking artworks.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: [
            "Moreover, Cunningham incorporated his principles with great skill and artistry,",
            "Specifically, Cunningham was an accomplished dancer as well as choreographer,",
            "Accordingly, Cunningham founded his namesake dance company in 1953,",
            "In contrast, Cunningham gained a reputation as an unpredictable iconoclast,"
          ],
          explanation: "The choice has to lead into “resulting in… groundbreaking artworks.” Only A gives a cause that produces that result: his pieces were radical <i>and</i> made with great skill, so they were seen as art, not mere experiments. Being a dancer (B), founding a company (C), or being unpredictable (D) doesn't explain why the pieces were received as groundbreaking art."
        },
        {
          id: "t10", skill: "Concession", answer: "B",
          passage: "Scientists studying asteroid deflection have focused on secondary objects such as S/2015 (190208), a moonlet orbiting the near-Earth asteroid 2006 AQ. In 2022 NASA intentionally crashed a probe into just such an object, successfully altering its orbit. Scientists have yet to demonstrate, ______ that 2006 AQ and other primary objects would be similarly affected.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["for example,", "admittedly,", "moreover,", "likewise,"],
          explanation: "The text reports a success (NASA altered a moonlet's orbit), then concedes a limit: the same result hasn't been shown for primary objects like 2006 AQ. “Admittedly” introduces that concession. The limit isn't an example (A), an added point in the same direction (C), or a parallel case (D)."
        },
        {
          id: "t11", skill: "Addition", answer: "A",
          passage: "Guard cells are specialized cells that are part of a plant’s pores. These cells help regulate the amount of carbon dioxide a plant takes in. ______ they help regulate a plant’s water loss.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Additionally,", "Previously,", "In conclusion,", "Instead,"],
          explanation: "Guard cells have two functions: regulating carbon dioxide intake and regulating water loss. “Additionally” adds the second function to the first. Nothing here is about time (B), a summary (C), or a replacement (D)."
        },
        {
          id: "t12", skill: "Cause → effect", answer: "B",
          passage: "Famous for its four-degree tilt, the leaning Garisenda Tower is a popular attraction in Bologna’s city center. However, measurements taken in 2023 showed that the tower was rotating in a concerning way. ______ city officials closed the area around the tower so experts could explore solutions to stabilize the historical twelfth-century structure.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Similarly,", "As a result,", "For example,", "In comparison,"],
          explanation: "The worrying measurements caused the officials' decision to close the area. “As a result” marks that cause and effect. Nothing is being compared (A, D), and the closure isn't an example of the rotation (C)."
        },
        {
          id: "t13", skill: "General → specific", answer: "D",
          passage: "In 2021, a model developed by astrophysicist Catherine Zucker and her research team revealed that the same supernovas responsible for the creation and ongoing expansion of the Local Bubble—a 14-million-year-old cavity in the Milky Way—are likely responsible for the formation of new stars. ______ this model detailed how the bubble’s expansion trapped interstellar clouds of gas and dust that became stars upon their eventual collapse.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Hence,", "However,", "Admittedly,", "Specifically,"],
          explanation: "The first sentence says the supernovas are likely responsible for new stars; the second explains exactly how (the expanding bubble trapped gas and dust that collapsed into stars). “Specifically” introduces that precise detail."
        },
        {
          id: "t14", skill: "Singling out", answer: "A",
          passage: "Following the American Revolutionary War, North American foodways underwent a radical transformation, fueled in large part by spiking consumer demand for certain grains. The cultivation, trade, and transportation of maize and wheat, ______ reconfigured the continent’s existing regional foodways into a globally oriented food system.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["in particular,", "alternatively,", "by comparison,", "second of all,"],
          explanation: "The first sentence mentions demand for “certain grains”; the second singles out which ones, maize and wheat. “In particular” narrows to those items. There is no alternative (B), comparison (C), or numbered list of points (D)."
        },
        {
          id: "t15", skill: "Goal → action", answer: "D",
          passage: "When, in 2017, Cambridge University students Lucy Moss and Toby Marlow decided they wanted to develop a musical together, one of their goals was for their female actor friends to have good parts to play. ______ they created the show <i>Six</i>, a retelling of the history of King Henry VIII’s wives in which each of the six queens has a starring role.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["In other words,", "In summary,", "For example,", "To that end,"],
          explanation: "Their goal was good parts for their female friends; creating a show where each of six queens has a starring role is how they reached it. “To that end” links a goal to the action taken to achieve it."
        },
        {
          id: "t16", skill: "Rare → usual", answer: "C",
          passage: "Mountain climbing routes that incorporate metal rungs and cables are known as via ferratas, from the Italian phrase for “iron path.” As climbing these routes has shifted from a mode of travel to a sporting activity, modern via ferratas are rarely designed to simply reach a summit. ______ new routes favor recreation over utility, aiming to provide a challenging climb or showcase dramatic scenery.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Additionally,", "On the other hand,", "More often,", "Nonetheless,"],
          explanation: "The previous sentence says modern routes are <i>rarely</i> built just to reach a summit; the next says what they <i>usually</i> do instead. “More often” sets up that contrast between the rare purpose and the common one."
        },
        {
          id: "t17", skill: "Concession / contrast", answer: "A",
          passage: "In November 1934, Amrita Sher-Gil was living in what must have seemed like the ideal city for a young artist: Paris. She was studying firsthand the color-saturated style of France’s modernist masters and beginning to make a name for herself as a painter. ______ Sher-Gil longed to return to her childhood home of India; only there, she believed, could her art truly flourish.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Still,", "Therefore,", "Indeed,", "Furthermore,"],
          explanation: "Paris seemed ideal and she was thriving there, yet she wanted to go back to India. “Still” introduces something that happens in spite of what came before. B, C, and D all signal agreement or addition."
        },
        {
          id: "t18", skill: "General → specific", answer: "B",
          passage: "In 1974, Mexican chemist Mario Molina and US chemist F. Sherwood Rowland discovered that chemicals called CFCs were harmful to the ozone layer. Their research was extremely influential in the fight against CFCs. ______ it laid the foundation for a 1987 treaty that phased out the use of CFCs across the globe.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Regardless,", "Specifically,", "However,", "Earlier,"],
          explanation: "The first sentence makes a broad claim (the research was very influential); the second gives the precise way it was influential (it laid the foundation for the 1987 treaty). “Specifically” introduces that detail."
        },
        {
          id: "t19", skill: "Emphasis", answer: "C",
          passage: "With his room-sized installation <i>Unicorn/My Private Sky</i>, Norwegian artist Børre Sæthre succeeds in creating a whimsical yet perplexing experience. ______ when visitors set foot inside the fantastically blue room and encounter the life-sized stuffed unicorn preening at the far end of it, they are both dazzled and confused—as if stepping into a strange and enchanting new world.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Second,", "Instead,", "Indeed,", "Nevertheless,"],
          explanation: "The second sentence confirms the first claim (whimsical yet perplexing) by showing visitors being dazzled and confused. “Indeed” reinforces a point just made. There is no list (A) and no contrast (B, D)."
        },
        {
          id: "t20", skill: "Evidence for a claim", answer: "A",
          passage: "The Alaska Native Language Archive (ANLA) is known for its impressive audio collection. ______ the ANLA has more than 5,000 audio recordings of Native Alaskan languages dating as far back as 1943.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["In fact,", "After,", "Regardless,", "Instead,"],
          explanation: "The second sentence backs up “impressive” with a striking fact: more than 5,000 recordings going back to 1943. “In fact” introduces evidence that strengthens a claim."
        },
        {
          id: "t21", skill: "Time: past → present", answer: "A",
          passage: "Etched into Peru’s Nazca Desert are line drawings so large that they can only be fully seen from high above. Archaeologists have known of the lines since the 1920s, when a researcher spotted some from a nearby foothill, and they have been studying the markings ever since. ______ archaeologists’ efforts are aided by drones that capture high-resolution aerial photographs of the lines.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Currently,", "In comparison,", "Still,", "However,"],
          explanation: "The text moves from the past (known since the 1920s, studied ever since) to today, when drones help. “Currently” marks that shift to the present. Nothing contrasts with the earlier work (B, C, D)."
        },
        {
          id: "t22", skill: "Contrast", answer: "C",
          passage: "At two weeks old, the time their critical socialization period begins, wolves can smell but cannot yet see or hear. Domesticated dogs, ______ can see, hear, and smell by the end of two weeks. This relative lack of sensory input may help explain why wolves behave so differently around humans than dogs do: from a very young age, wolves are more wary and less exploratory.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["in other words,", "for instance,", "by contrast,", "accordingly,"],
          explanation: "At two weeks, wolves can only smell, while dogs can see, hear, and smell. “By contrast” signals that difference."
        },
        {
          id: "t23", skill: "Consequence", answer: "D",
          passage: "Economist Elinor Ostrom’s studies of communities around the world have empirically demonstrated that common pool resources, such as grazing lands, can be sustainably managed by the people who use them (rather than through private entities or centralized governments). ______ Ostrom’s work is a repudiation of the “tragedy of the commons,” the view that individuals will inevitably overexploit a finite shared resource if given unfettered access to it.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["By contrast,", "For example,", "That said,", "As such,"],
          explanation: "The first sentence states what Ostrom showed: users themselves can manage shared resources sustainably. The second says what her work therefore amounts to: a rejection of the “tragedy of the commons.” “As such” draws that conclusion. Her work contrasts with the tragedy-of-the-commons view, but the two <i>sentences</i> don't contrast with each other, so “By contrast” (A) is a trap."
        },
        {
          id: "t24", skill: "Simultaneous events", answer: "A",
          passage: "Chimamanda Ngozi Adichie’s 2013 novel <i>Americanah</i> chronicles the divergent experiences of Ifemelu and Obinze, a young Nigerian couple, after high school. Ifemelu moves to the United States to attend a prestigious university. ______ Obinze travels to London, hoping to start a career there. However, frustrated with the lack of opportunities, he soon returns to Nigeria.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Meanwhile,", "Nevertheless,", "Secondly,", "In fact,"],
          explanation: "The novel follows two people at the same time: Ifemelu goes to the US while Obinze goes to London. “Meanwhile” connects events happening at the same time to different people."
        },
        {
          id: "t25", skill: "Addition", answer: "B",
          passage: "Some members of the US Supreme Court have resisted calls to televise the court’s oral arguments, concerned that the participants would be tempted to perform for the cameras (and thus lower the quality of the discourse). ______ the justices worry that most viewers would not even watch the full deliberations, only short clips that could be misinterpreted and mischaracterized.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["However,", "Additionally,", "In comparison,", "For example,"],
          explanation: "Both sentences give the justices' concerns: performers playing to the cameras, and viewers seeing only misleading clips. “Additionally” adds the second concern to the first."
        },
        {
          id: "t26", skill: "Logical conclusion", answer: "D",
          passage: "The more diverse and wide ranging an animal’s behaviors, the larger and more energy demanding the animal’s brain tends to be. ______ from an evolutionary perspective, animals that perform only basic actions should allocate fewer resources to growing and maintaining brain tissue. The specialized subtypes of ants within colonies provide an opportunity to explore this hypothesis.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Subsequently,", "Besides,", "Nevertheless,", "Thus,"],
          explanation: "If bigger brains go with more varied behavior, it follows that animals with only basic actions should invest less in brain tissue. “Thus” introduces that conclusion."
        },
        {
          id: "t27", skill: "Contrast", answer: "B",
          passage: "A firefly uses specialized muscles to draw oxygen into its lower abdomen through narrow tubes, triggering a chemical reaction whereby the oxygen combines with chemicals in the firefly’s abdomen to produce a glow. ______ when the firefly stops drawing in oxygen, the reaction—and the glow—cease.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["For instance,", "By contrast,", "Specifically,", "In conclusion,"],
          explanation: "The first sentence describes what happens when the firefly draws in oxygen (it glows); the second describes the opposite situation (it stops, and so does the glow). “By contrast” marks that opposite case."
        },
        {
          id: "t28", skill: "Similarity", answer: "C",
          passage: "Before California’s 1911 election to approve a proposition granting women the right to vote, activists across the state sold tea to promote the cause of suffrage. In San Francisco, the Woman’s Suffrage Party sold Equality Tea at local fairs. ______ in Los Angeles, activist Nancy Tuttle Craig, who ran one of California’s largest grocery store firms, distributed Votes for Women Tea.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["For example,", "To conclude,", "Similarly,", "In other words,"],
          explanation: "San Francisco and Los Angeles are two parallel examples of the same practice (selling tea for suffrage). “Similarly” links them. “For example” (A) doesn't fit because the Los Angeles case isn't an example of the San Francisco one; both are examples of the first sentence."
        },
        {
          id: "t29", skill: "General → specific", answer: "A",
          passage: "Earth’s auroras—colorful displays of light seen above the northern and southern poles—result, broadly speaking, from the Sun’s activity. ______ the Sun releases charged particles that are captured by Earth’s magnetic field and channeled toward the poles. These particles then collide with atoms in the atmosphere, causing the atoms to emit auroral light.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Specifically,", "Similarly,", "Nevertheless,", "Hence,"],
          explanation: "“Broadly speaking” is the clue: the first sentence gives the general cause, and the next explains exactly how it works. “Specifically” moves from the broad claim to the detailed mechanism."
        },
        {
          id: "t30", skill: "Time: earlier", answer: "B",
          passage: "When Chinese director Chloé Zhao accepted the Oscar in 2021 for her film <i>Nomadland</i>, she made Academy Award history. ______ only one other woman, Kathryn Bigelow of the United States, had been named best director at the Oscars, making Zhao the second woman and the first Asian woman to win the award.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["As a result,", "Previously,", "However,", "Likewise,"],
          explanation: "The second sentence describes the situation before Zhao's win (the past perfect “had been named” is a clue): only one woman had won. “Previously” places that information earlier in time."
        },
        {
          id: "t31", skill: "Logical conclusion", answer: "B",
          passage: "If the formation of Earth’s mantle had been purely a product of core differentiation—whereby heavier elements sink toward the core and lighter elements rise—the upper mantle would be depleted of heavy siderophile elements. Siderophiles are much more abundant in the mantle than predicted in that model, however. ______ extraterrestrial material containing siderophiles, likely from asteroid or comet impacts, almost certainly accreted to Earth following core differentiation.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["That said,", "Hence,", "For example,", "Likewise,"],
          explanation: "The mantle has more siderophiles than core differentiation alone can explain, so extra material must have arrived later. “Hence” introduces that conclusion."
        },
        {
          id: "t32", skill: "Example", answer: "A",
          passage: "Most conifers (trees belonging to the phylum Coniferophyta) are evergreen. That is, they keep their green leaves or needles year-round. However, not all conifer species are evergreen. Larch trees, ______ lose their needles every fall.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["for instance,", "nevertheless,", "meanwhile,", "in addition,"],
          explanation: "The previous sentence says not all conifers are evergreen; larches are an example of one that isn't. “For instance” introduces the example."
        },
        {
          id: "t33", skill: "Sequence", answer: "B",
          passage: "Neuroscientist Karen Konkoly wanted to determine whether individuals can understand and respond to questions during REM sleep. She first taught volunteers eye movements they would use to respond to basic math problems while asleep (a single left-right eye movement indicated the number one). ______ she attached electrodes to the volunteers’ faces to record their eye movements during sleep.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Specifically,", "Next,", "For instance,", "In sum,"],
          explanation: "“She first taught…” is the clue: the text describes the experiment step by step. Attaching electrodes is the following step, so “Next.”"
        },
        {
          id: "t34", skill: "General → specific", answer: "D",
          passage: "In his 1925 book <i>The Morphology of Landscape</i>, US geographer Carl Sauer challenged prevailing views about how natural landscapes influence human cultures. ______ Sauer argued that instead of being shaped entirely by their natural surroundings, cultures play an active role in their own development by virtue of their interactions with the environment.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Similarly,", "Finally,", "Therefore,", "Specifically,"],
          explanation: "The first sentence says Sauer challenged prevailing views; the second says exactly what he argued instead. “Specifically” introduces that detail."
        },
        {
          id: "t35", skill: "Appropriateness", answer: "A",
          passage: "In her 2012 analysis of tree rings from Japan’s Yaku Island, cosmic ray physicist Fusa Miyake noted an anomalous carbon-14 spike dating to 774–775 CE, indicating that a massive burst of radiation reached Earth during that time. ______ this unprecedented radiocarbon surge was dubbed a “Miyake event” in honor of its discoverer.",
          prompt: "Which choice completes the text with the most logical transition?",
          choices: ["Fittingly,", "Similarly,", "However,", "In other words,"],
          explanation: "The event was named after the person who discovered it, which is appropriate given the first sentence. “Fittingly” signals exactly that."
        }
      ]
    }
  ]
});
