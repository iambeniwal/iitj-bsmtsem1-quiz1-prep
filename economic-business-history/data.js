/* ===================================================================
   Economic & Business History — Quiz 1
   Built from 16 lecture AI-summaries, 16 full transcripts (785,000
   characters) and the 15 PDF decks on the IITJ LMS, 26 September 2026.
   =================================================================== */

const LECTURES=[
 [1,"Introduction — Economic and Business History","Course aims and scope","rec"],
 [2,"Week 1 — What is Economics?","Scarcity, macro vs micro, econ/business history","rec"],
 [3,"Week 1 — What is Business?","Profit = Revenue − Cost, goods vs services","rec"],
 [4,"Week 1 — Live Lecture 1","Five modules, what history actually is","live"],
 [5,"Week 2 — Influence of Economics on Business","License Raj, IPR 1956, Bajaj","rec"],
 [6,"Week 2 — Society and Business","McDonald's, Cadbury, localisation","rec"],
 [7,"Week 3 — Business, Society & Economy","The weekend, labour movement, 2008 crisis","rec"],
 [8,"Week 3 — Introduction: Agrarian Economies","GDP shares, Salem Oregon 1953","rec"],
 [9,"Week 3 — Live Lecture 2","Technology → business, PESTEL, Netflix","live"],
 [10,"Week 4 — Land Ownership, Production, Distribution","Feudalism vs Zamindari","rec"],
 [11,"Week 4 — Guild Systems & Early Trade Organizations","Charters, apprentice→journeyman→master","rec"],
 [12,"Week 5 — Life Before Machines","Agricultural Revolution, enclosure, putting-out","rec"],
 [13,"Week 5 — Beginning of Machines Usage","Flying shuttle, spinning jenny","rec"],
 [14,"Week 5 — Live Lecture 3","Revision + quiz announcement","live"],
 [15,"Week 6 — Beginning of Machines Usage 1 (Rise of Factories)","Water frame, Arkwright, Cromford","rec"],
 [16,"Week 6 — Beginning of Machines Usage 2 (Steam Engine)","Watt, Manchester, Cottonopolis","rec"]
];

const WEIGHTS=[
 ["Machines & factories",16],["Agrarian economies & land",15],["Guilds",14],
 ["Life before machines",14],["Foundations: economics & business",13],
 ["Economy → business",10],["Society & technology → business",10],["Business → society & economy",8]
];

const SECTION_META=[
 {id:"found",   navLabel:"Foundations", title:"Economics, business &amp; history",
  tag:"Lectures 1–4 · Module 1",
  lede:"Module 1's definitions. Dry, but they are the easiest marks on the paper because the wording is fixed and he repeated it in three separate sessions."},
 {id:"econbiz", navLabel:"Economy → business", title:"Economy → business: License Raj",
  tag:"Lecture 5 · Module 1",
  lede:"One long worked example of &ldquo;the economy sets the rules of the game&rdquo;. The Bajaj timeline is a gift to a date-based MCQ writer."},
 {id:"soctech", navLabel:"Society &amp; tech", title:"Society and technology → business",
  tag:"Lectures 6, 9 · Module 1",
  lede:"Why the same company sells different things in different countries, and why advertisements age. Plus the PESTEL frame and the Netflix timeline."},
 {id:"bizsoc",  navLabel:"Business → society", title:"Business → society &amp; economy",
  tag:"Lecture 7 · Module 1",
  lede:"The reverse arrow. The origin of the weekend is the set-piece here, and it comes with four dates that are near-certain exam material."},
 {id:"agrarian",navLabel:"Agrarian &amp; land", title:"Agrarian economies &amp; land ownership",
  tag:"Lectures 8, 10 · Module 2",
  lede:"Module 2 opens. Know the GDP shares, and know feudalism and the Zamindari system as a contrast pair — he taught them side by side deliberately."},
 {id:"guilds",  navLabel:"Guilds", title:"Guilds &amp; early trade organisations",
  tag:"Lecture 11 · Module 2",
  lede:"The densest factual lecture in the course: a three-rung hierarchy, five functions, and a charter with a date attached."},
 {id:"before",  navLabel:"Before machines", title:"Life before machines",
  tag:"Lecture 12 · Module 3",
  lede:"Module 3 opens. Two developments broke the old system open — the Agricultural Revolution and the putting-out system. Everything after this follows from them."},
 {id:"machines",navLabel:"Machines &amp; factories", title:"Machines, factories &amp; steam",
  tag:"Lectures 13, 15, 16 · Module 3",
  lede:"Four inventions, four inventors, four dates, and two riots. This is the most memorisable — and therefore most examinable — material in the syllabus."}
];

const SECTIONS={
"s-found":[
 {t:"Economics",src:"Lec 1–2 · L#2 · L#3",h:`
  <div class="def"><b>Economics</b> is the study of how people use <b>limited resources</b> and respond to <b>incentives</b> — fundamentally, the problem of <b>scarcity</b>.</div>
  <ul>
   <li>Three limited resources everyone has: <strong>time</strong> (24 hours), <strong>money</strong>, <strong>energy</strong>. Wants are <strong>unlimited</strong>. That gap is why economics exists.</li>
   <li>It is the study of <strong>decision-making</strong> at every level — individual, family, state government, central government.</li>
   <li>It organises the <strong>production, distribution and consumption</strong> of goods and services.</li>
  </ul>
  <h4>The two branches — know which is which</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Macroeconomics</th><th>Microeconomics</th></tr></thead><tbody>
   <tr><td><strong>Level</strong></td><td>Whole economy — national, state, global</td><td>Individual consumers, households, firms</td></tr>
   <tr><td><strong>Studies</strong></td><td>Budgets, employment and unemployment, inflation (<em>mehngai</em>), GDP growth, sectoral shifts</td><td>Consumer choice, behavioural economics, firm hiring, price formation, household budgets</td></tr>
   <tr><td><strong>Asks</strong></td><td>Why and how do whole economies grow?</td><td>Why did the price of tomatoes move?</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The pairing he wants:</b> <b>Economic history</b> is the macro side — how the rules and logic of economies changed. <b>Business history</b> is the micro side — how firms, entrepreneurs and business families changed.</div>
  <p style="font-size:14.5px">Example of allocation in practice: the <strong>PLI (Production Linked Incentive)</strong> scheme, directing resources at chosen industries such as pharmaceuticals. Priorities shift with circumstance — mask production during COVID-19.</p>`},
 {t:"Business",src:"Lec 2 · L#3",h:`
  <div class="def"><b>Business</b> is an <b>economic activity</b> involving the <b>production and sale of goods and services</b>, undertaken with the <b>motive of earning profit</b> while <b>satisfying human needs</b>.</div>
  <ul>
   <li><strong>Profit = Revenue − Cost.</strong> Memorise the formula as stated.</li>
   <li>The <strong>profit motive is essential</strong> to the definition — which is exactly why <strong>non-profits and NGOs fall outside it</strong>. They satisfy needs without the profit motive.</li>
   <li>It satisfies <strong>physiological</strong> needs (food, shelter, rest) <em>and</em> <strong>psychological</strong> needs (status, achievement, dignity).</li>
   <li><strong>Goods</strong> are tangible (phones, clothing, pens, FMCG). <strong>Services</strong> are intangible (education, healthcare, haircuts, consulting).</li>
  </ul>
  <h4>Five ways businesses are classified</h4>
  <p style="font-size:14.5px">Size (micro / small / medium / large) · revenue · number of employees · time of establishment (pre-independence, pre-1991 liberalisation, modern start-ups such as Zomato, Ola, Uber, Swiggy) · legal structure (limited liability company, partnership, LLP).</p>
  <h4>The four questions every business answers</h4>
  <p style="font-size:14.5px"><strong>What</strong> to produce · <strong>for whom</strong> · <strong>where</strong> · <strong>how much</strong>. Apple's answer to &ldquo;where&rdquo;: China, India, Vietnam, the Philippines, Japan, South Korea, with strategic components in the United States.</p>
  <h4>Why businesses exist at all</h4>
  <p style="font-size:14.5px">They satisfy needs <strong>more efficiently than individual self-sufficiency</strong>, because no individual can specialise in food, clothing, shelter and technology at once. Business is the <strong>mechanism through which society organises production, distribution and consumption</strong>.</p>`},
 {t:"History, and what this course means by it",src:"Live Lecture 1 · L#4",h:`
  <div class="def">History is <b>not dates and years</b>. It is the study of <b>change over time</b> — the <b>how</b> and <b>why</b> of events, supported by <b>evidence</b>.</div>
  <p style="font-size:15px">Three dimensions he named: <strong>context, time and change</strong>.</p>
  <h4>Sources a historian uses</h4>
  <p style="font-size:14.5px">Policy documents · parliamentary debates · company annual reports · court verdicts · historical advertisements · personal accounts and correspondence.</p>
  <div class="warnbox"><b>Change is slow.</b> His example: the <b>LPG policies</b> (Liberalisation, Privatisation, Globalisation) began in the mid-1980s but were only fully implemented from 1990–1995 onward. The Industrial Revolution took centuries to show its full social effects.</div>
  <h4>The five modules</h4>
  <div class="scroller"><table><thead><tr><th>Module</th><th>Period</th><th>Topics</th></tr></thead><tbody>
   <tr><td><strong>1. Intro to Economic &amp; Business History</strong></td><td>—</td><td>Economics, business and history</td></tr>
   <tr><td><strong>2. Early Economic Systems &amp; Pre-Industrial Economies</strong></td><td>Pre-15th century</td><td>Agrarian economies, guild systems, society</td></tr>
   <tr><td><strong>3. Industrial Revolution</strong></td><td>16th–18th century</td><td>Usage of machines, economic system, factory systems, society, labour movements, change in culture</td></tr>
   <tr><td>4. History of Business</td><td>1850–1950</td><td>Division of labour, scientific management, rise of large corporations</td></tr>
   <tr><td>5. Indian Business History</td><td>Pre-1947</td><td>Indian entrepreneurs under colonial rule, impact of the World Wars</td></tr>
  </tbody></table></div>
  <div class="def">Quiz 1 covers <b>Modules 1 and 2 in full, and Module 3 as far as it has been taught</b>. Modules 4 and 5 have not been lectured — do not revise them.</div>
  <p style="font-size:14.5px;color:var(--ink-2)">Books listed on the deck: Robert Allen, <em>Global Economic History: A Very Short Introduction</em> (2011) · Andrew Leigh, <em>The Shortest History of Economics</em> (2024) · Tirthankar Roy, <em>The Economic History of India 1857–2010</em> (2020).</p>`}
],

"s-econbiz":[
 {t:"License Raj",src:"Lec 3 · L#5",h:`
  <div class="def"><b>License Raj</b> — the system of extensive government control through licences, permits and regulations that governed most economic activity in independent India, <b>1948 to 1991</b>.</div>
  <ul>
   <li>Began with the <strong>Industrial Policy Resolution of 1948</strong>, strengthened by the <strong>1956</strong> Resolution.</li>
   <li>Ended with the <strong>1991 liberalisation</strong> reforms — <strong>LPG</strong>.</li>
   <li>The term was coined by <strong>C. Rajagopalachari</strong>.</li>
  </ul>
  <h4>Six things the government controlled</h4>
  <p style="font-size:14.5px"><strong>Manufacturing</strong> (licences to start, to make a new product, to expand capacity) · <strong>pricing</strong> (via the Bureau of Industrial Costs and Prices, BICP, late 1960s) · <strong>labour</strong> (approval needed to lay off workers or shut a factory) · <strong>imports</strong> (high tariffs, quotas, some outright bans) · <strong>capital and finance</strong> · <strong>marketing and distribution</strong>.</p>
  <h4>Objectives of the 1956 Resolution</h4>
  <p style="font-size:14.5px">A <strong>socialist pattern of society</strong> · state-led development · expansion of the public sector · equitable distribution of income and wealth · balanced regional growth · <strong>prevention of concentration</strong> of wealth and industrial control in private hands.</p>
  <h4>The three schedules — a standard MCQ</h4>
  <div class="scroller"><table><thead><tr><th>Schedule</th><th>Open to</th><th>Contents</th></tr></thead><tbody>
   <tr><td><strong>A</strong></td><td><strong>Government monopoly</strong></td><td>Defence and arms, atomic energy, railways, air transport, heavy industries, utilities. Produced PSUs such as <strong>SAIL</strong> and <strong>BHEL</strong></td></tr>
   <tr><td><strong>B</strong></td><td><strong>Mixed</strong> — public and private (12 industries)</td><td><strong>Automobiles</strong> and minerals. Private entry required a licence</td></tr>
   <tr><td><strong>C</strong></td><td><strong>Private sector</strong></td><td>Everything else — but the government reserved the right to reclassify into A or B</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Remember:</b> the automobile sector sat in <b>Schedule B</b>. That is why Bajaj needed a licence at all.</div>`},
 {t:"The Scooters Control Order and Bajaj Auto",src:"Lec 3 · L#5 · L#9",h:`
  <p style="font-size:15px">Two-wheelers were governed by the <strong>Scooters' Distribution and Sales Control Order, 1960</strong> (amended 1963 and in the 1970s). It reached manufacturers, dealers <em>and</em> consumers:</p>
  <ul>
   <li><strong>Manufacturers</strong> — production quotas, reserved allocations for government employees, mandatory distribution reporting.</li>
   <li><strong>Dealers</strong> — official registers of every sale, inspected by government inspectors.</li>
   <li><strong>Consumers</strong> — a formal application form, a written bank guarantee (a ₹250 deposit), and a set procedure before delivery.</li>
   <li><strong>Resale</strong> by private owners was also regulated.</li>
  </ul>
  <h4>The Bajaj timeline — learn it cold</h4>
  <div class="scroller"><table><thead><tr><th>Year</th><th>Event</th></tr></thead><tbody>
   <tr><td><strong>1945</strong></td><td>Bajaj Auto incorporated</td></tr>
   <tr><td><strong>1948</strong></td><td>Began selling <strong>imported</strong> two- and three-wheelers in India</td></tr>
   <tr><td><strong>1959/60</strong></td><td>Obtained a manufacturing licence from the Government — initial capacity <strong>6,000 units a year</strong></td></tr>
   <tr><td><strong>1960</strong></td><td>Technology licence from <strong>Piaggio</strong> (Italian); made and sold the <strong>Vespa 150</strong></td></tr>
   <tr><td><strong>1960–1969</strong></td><td>Government <strong>encouraged</strong> collaboration with foreign firms</td></tr>
   <tr><td><strong>1970s</strong></td><td>Policy reversed toward promoting domestic firms. <strong>FERA</strong> capped foreign shareholding at <strong>40%</strong></td></tr>
   <tr><td><strong>1971</strong></td><td>The Piaggio collaboration <strong>ended</strong></td></tr>
   <tr><td><strong>1971–73</strong></td><td>Bajaj 150 launched, then the <strong>Bajaj Chetak</strong> (1972–73) — in production until the mid-2000s</td></tr>
   <tr><td>Late 1980s</td><td>&ldquo;<strong>Hamara Bajaj</strong>&rdquo; campaign as liberalisation brought competition. Main rival: <strong>LML Vespa</strong></td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>A conflict to be aware of.</b> The Lecture 3 deck writes &ldquo;<b>1970 — FERA Act</b>&rdquo;, but the lecture narration dates FERA to <b>1973</b>, which is the historically correct year of enactment. If a question hangs on it, the slide says 1970. Know both, and note that the <b>40% shareholding cap</b> is the substance either way.</div>
  <p style="font-size:14.5px">Same period, same direction of travel: <strong>bank nationalisation</strong> (1968–69) and the <strong>abolition of privy purses</strong> (1969).</p>
  <div class="def">The lesson he draws: <b>the economy sets the rules of the game.</b> Capacity, price, distribution and partnership were all decided outside the firm.</div>`}
],

"s-soctech":[
 {t:"Society → business: localisation",src:"Lec 4 · L#6",h:`
  <p style="font-size:15px">Two questions frame the lecture: <strong>why don't businesses sell the same products in every country</strong>, and <strong>why do they change their advertising over time?</strong></p>
  <h4>McDonald's in India</h4>
  <ul>
   <li>Entered India in <strong>1996</strong>, after the <strong>1991</strong> LPG reforms.</li>
   <li>Entered <strong>without its beef-based menu</strong> — significant vegetarian consumption, and many avoid non-vegetarian food on particular days.</li>
   <li>Introduced the <strong>McAloo Tikki burger in 1998</strong>, two years after entry — Indian street food in a burger format. It became a <em>main</em> offering, not a side option.</li>
  </ul>
  <div class="def"><b>Localisation</b> — adapting products, production and services to local audiences, tastes and preferences.</div>
  <p style="font-size:14.5px">Netflix does the same thing with regional-language content and dubbing — Hindi, Tamil, Telugu, Malayalam, Gujarati, Marathi.</p>
  <h4>The Cadbury advertisements</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Mid-1990s ad</th><th>2021 ad</th></tr></thead><tbody>
   <tr><td>Plays the match</td><td>A man</td><td>A woman</td></tr>
   <tr><td>Watches from the side</td><td>A woman</td><td>A man</td></tr>
   <tr><td>Runs on at the six</td><td>The woman</td><td>The man</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">Same brand, same country, same language — an <strong>exact role reversal</strong>, because gender roles and women's participation changed in between. Advertising is usually the <strong>first</strong> part of a business to register a social change.</p>
  <h4>What in &ldquo;society&rdquo; actually affects business</h4>
  <p style="font-size:14.5px"><strong>Culture</strong> (food habits, language, clothing, gender roles) · <strong>family structure</strong> (joint vs nuclear; collectivist vs individualist) · social norms · demographics · education levels · values and traditions · religious practice · consumer preferences.</p>
  <p style="font-size:14.5px">It shows up in product development, advertising, <strong>supply chain</strong> (stocking up for Diwali, Rakhi, Holi) and employment practice.</p>
  <div class="def">The principle: <b>businesses are embedded in society.</b> They do not operate in a vacuum, and a one-size-fits-all global approach fails.</div>`},
 {t:"Technology → business, and PESTEL",src:"Live Lecture 2 · L#9",h:`
  <h4>The Netflix timeline</h4>
  <div class="scroller"><table><thead><tr><th>Year</th><th>Stage</th></tr></thead><tbody>
   <tr><td><strong>1997</strong></td><td>Founded — DVD <strong>sales</strong></td></tr>
   <tr><td>Late 1990s–early 2000s</td><td>DVD <strong>rental</strong></td></tr>
   <tr><td><strong>2007</strong> (mid-2000s)</td><td><strong>Streaming</strong> introduced as a new revenue stream</td></tr>
   <tr><td>2012–13</td><td>Streaming becomes the <strong>primary</strong> business model</td></tr>
   <tr><td>2020–23</td><td>DVD rental discontinued entirely</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>The enabling factor was high-speed internet</strong>, which arrived in the mid-2000s and made streaming commercially viable. Technology did not just improve the product — it replaced the business model.</p>
  <div class="warnbox"><b>The counter-example:</b> smartphone cameras made analogue cameras obsolete, and <b>Kodak's</b> failure to adapt to digital photography ended in bankruptcy. Not adopting is itself a decision.</div>
  <h4>Technology changes six things</h4>
  <p style="font-size:14.5px">Products · markets · production (automation) · distribution · advertising (targeted, not mass) · content delivery.</p>
  <h4>PESTEL</h4>
  <div class="def"><b>P</b>olitical · <b>E</b>conomic · <b>S</b>ocial/sociocultural · <b>T</b>echnological · <b>E</b>nvironmental · <b>L</b>egal — the frame for analysing a business environment.</div>`}
],

"s-bizsoc":[
 {t:"The origin of the weekend",src:"Lec 5 · L#7 · set-piece question",h:`
  <div class="def">Weekends emerged in <b>industrial society</b>. Agrarian, feudal and nomadic societies had occasional off-days, but those were <b>religious</b>, not work-related.</div>
  <h4>Why work needed organising in the first place</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Agrarian</th><th>Industrial</th></tr></thead><tbody>
   <tr><td>Work depended on</td><td><strong>Daylight</strong></td><td>Artificial light — electric bulbs made 24-hour work possible</td></tr>
   <tr><td>Hours</td><td>Seasonal: <strong>7–8 in winter, 10–12 in summer</strong></td><td><strong>Standardised</strong>, independent of season</td></tr>
   <tr><td>Place</td><td>Open fields</td><td>Factories</td></tr>
  </tbody></table></div>
  <h4>The four dates — near-certain exam material</h4>
  <div class="scroller"><table><thead><tr><th>Year</th><th>What happened</th></tr></thead><tbody>
   <tr><td><strong>1886</strong></td><td>Labour movement pushes for the <strong>eight-hour day</strong>. The day is split three ways: <strong>8 hours work, 8 rest, 8 personal</strong> — the origin of &ldquo;9 to 5&rdquo;. Before it: <strong>10–12 hour days, 6–7 day weeks, 72–84 hours</strong></td></tr>
   <tr><td><strong>1908</strong></td><td>A US cotton mill with <strong>Jewish workers</strong> introduces the first <strong>five-day week</strong>, to accommodate the Saturday <strong>Sabbath</strong> — so Saturday <em>and</em> Sunday off</td></tr>
   <tr><td><strong>1926</strong></td><td><strong>Ford</strong> shuts factories on Saturdays and Sundays. The reasoning was commercial: <strong>more leisure means more consumption</strong>, and therefore more sales</td></tr>
   <tr><td><strong>1938</strong></td><td><strong>Fair Labor Standards Act</strong>, part of the New Deal: the <strong>40-hour week</strong>, overtime pay, minimum wage, and a <strong>ban on child labour</strong></td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The trap:</b> Ford did not invent the weekend and did not do it out of kindness. 1908 came first, for religious reasons; Ford's 1926 move was to <em>boost demand</em>, during the run-up to the crash of 1929.</div>
  <div class="def"><b>Work–life balance</b> — managing time and energy between professional and personal life by setting boundaries between work time and leisure time. It is a concept <em>produced by</em> industrial change, not a timeless one.</div>`},
 {t:"How business reshapes society and the economy",src:"Lec 5 · L#7",h:`
  <p style="font-size:15px">The Industrial Revolution created the <strong>working class</strong> — a social class that had not previously existed — and with it the labour movement. The modern parallel he drew: <strong>gig-economy workers organising for rights</strong>.</p>
  <div class="grid2">
   <div class="card" style="border-left:3px solid var(--good)"><h4 style="font-family:var(--display);font-size:15px;margin-bottom:6px">Positive effects</h4>
    <p style="font-size:14px">Employment · innovation · economic growth · tax revenue · skills development</p></div>
   <div class="card" style="border-left:3px solid var(--bad)"><h4 style="font-family:var(--display);font-size:15px;margin-bottom:6px">Negative effects</h4>
    <p style="font-size:14px">Exploitation · inequality · pollution and resource depletion · consumerism · social disruption</p></div>
  </div>
  <h4>The 2007–2008 financial crisis</h4>
  <ul>
   <li>Banks abandoned credit verification and issued <strong>NINJA loans</strong> — <strong>No Income, No Job, No Assets</strong>.</li>
   <li>They prioritised market expansion over sound lending.</li>
   <li>Result: mass defaults, billions in losses, a global collapse spreading from developed to developing economies, and widespread unemployment.</li>
  </ul>
  <div class="warnbox"><b>Economic crises are social crises.</b> His example: the <b>Great Depression</b> of the 1930s cut birth rates because families could not afford children — and the rebound after the Second World War produced the <b>Boomer generation (1945–1960s)</b>.</div>`}
],

"s-agrarian":[
 {t:"What an agrarian economy is",src:"Lec 6 · L#8",h:`
  <div class="def">An <b>agrarian economy</b> is one where most people earn their living from farming, and where agriculture contributes <b>more than 50% of GDP</b> — the mainstay of both economy and population.</div>
  <h4>Agriculture's share of GDP — the table to memorise</h4>
  <div class="scroller"><table><thead><tr><th>Country</th><th>Around 1800</th><th>Today</th></tr></thead><tbody>
   <tr><td><strong>India</strong></td><td>70–80%</td><td>15–18%</td></tr>
   <tr><td><strong>UK</strong></td><td>35–40%</td><td>&lt; 1%</td></tr>
   <tr><td><strong>US</strong></td><td>40–50%</td><td>&lt; 1%</td></tr>
   <tr><td><strong>China</strong></td><td>Predominantly agrarian for centuries</td><td>7%</td></tr>
  </tbody></table></div>
  <h4>Three defining characteristics</h4>
  <ul>
   <li><strong>Seasons controlled everything</strong> — planting and harvest cycles set the rhythm of the whole society, including schools and labour supply.</li>
   <li><strong>Family-centred</strong> — farms owned and worked by families; family members were <strong>25–35% of the harvest labour force</strong>.</li>
   <li><strong>Land was the primary asset</strong> — it determined wealth, power and social hierarchy.</li>
  </ul>
  <h4>Case study: Salem, Oregon, 1953</h4>
  <ul>
   <li>A wet spring and cold nights delayed the bean harvest, which threatened to clash with the school calendar.</li>
   <li><strong>Schools were delayed by one week</strong> so young people could harvest — high-school students were <strong>25–35%</strong> of that labour force.</li>
   <li>The school board estimated a <strong>$1 million</strong> loss to growers against a <strong>$9,000</strong> cost to the district.</li>
   <li>The point: participation in the harvest was a <strong>cultural tradition</strong>, not only an economic necessity — and agriculture bent the education system to its calendar.</li>
  </ul>
  <p style="font-size:14.5px"><strong>Businesses that existed around agriculture:</strong> tool makers, seed suppliers, irrigation operators, animal breeders, money lenders, grain traders, textile manufacturers, export merchants, transporters.</p>`},
 {t:"Feudalism vs the Zamindari system",src:"Lec 7 · L#10 · taught as a contrast pair",h:`
  <div class="scroller"><table><thead><tr><th>Aspect</th><th>Feudal model (Western Europe)</th><th>Zamindari / colonial (India, 1700s–1947)</th></tr></thead><tbody>
   <tr><td><strong>Who owns the land</strong></td><td>The <strong>crown / king</strong>, who grants it to lords and nobles</td><td>The <strong>British government</strong>, which grants it to <strong>Zamindars</strong></td></tr>
   <tr><td><strong>Granted in exchange for</strong></td><td>Military protection and knights, produce and services</td><td>Revenue extraction</td></tr>
   <tr><td><strong>Chain</strong></td><td>King &rarr; lords/nobles &rarr; knights (vassals) &rarr; peasants and serfs</td><td>British government &rarr; Zamindars &rarr; cultivators and tenants</td></tr>
   <tr><td><strong>Who decides what to grow</strong></td><td><strong>Decentralised</strong> — local lords. Based on survival needs and tradition</td><td><strong>Centralised and external</strong> — decided by the British thousands of miles away, for the global market</td></tr>
   <tr><td><strong>Crops</strong></td><td>Food crops for subsistence</td><td>Cultivators <strong>forced away from food crops</strong> toward risky cash crops such as <strong>indigo</strong></td></tr>
   <tr><td><strong>Distribution</strong></td><td>Minimal and local — peasants &rarr; lords &rarr; kings, some to the church</td><td><strong>Extractive and global</strong> — raw materials to British manufacturers</td></tr>
   <tr><td><strong>Origin</strong></td><td>Internal, organic</td><td><strong>Externally imposed</strong></td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Serfs were not slaves.</b> They were <em>bound to the land</em>: they could not leave it, marry, or relocate without the lord's permission. He stressed the relationship was <b>socio-economic</b>, controlling social life as well as work.</div>
  <h4>Six consequences of limited distribution</h4>
  <ul>
   <li><strong>No incentive to innovate</strong> — no competition, no need for efficiency.</li>
   <li><strong>Life expectancy of 30–35 years</strong>, and high infant mortality.</li>
   <li><strong>Labour was immobile</strong> — which later made industrialisation impossible until it was freed.</li>
   <li><strong>No disposable income</strong> — all surplus went to elites.</li>
   <li><strong>Wealth was stored only in land</strong> — people bought more land rather than investing in banking or commerce.</li>
   <li><strong>Extreme inequality</strong> — a vast subsistence majority and a tiny luxury-consuming elite.</li>
  </ul>`}
],

"s-guilds":[
 {t:"What a guild was, and why they arose",src:"Lec 8 · L#11 · 11th–16th centuries",h:`
  <div class="def">A <b>guild</b> is an <b>association of craftsmen or merchants</b> formed for <b>mutual aid, protection and the maintenance of standards</b>.</div>
  <ul>
   <li><strong>Craft guilds</strong> regulated a specific trade — weavers, blacksmiths, carpenters. <strong>Merchant guilds</strong> controlled trade between cities.</li>
   <li><strong>Merchant guilds came first</strong>, to protect traders travelling between cities from feudal lords' taxes, robbers and bandits.</li>
   <li><strong>Guilds operated at the city level only.</strong> Authority stopped at the city boundary, and the same trade was regulated differently in different cities. This is the single most-tested fact about them.</li>
   <li>They regulated not just the craft but <strong>the market</strong> — prices, who could open a shop, who could practise the trade.</li>
  </ul>
  <h4>What made guilds possible: two agricultural innovations</h4>
  <ul>
   <li><strong>The heavy plough</strong> — larger fields ploughed faster, requiring villages to pool resources.</li>
   <li><strong>Three-field crop rotation</strong> — winter crops, summer crops, and one field left <strong>fallow</strong> to recover.</li>
  </ul>
  <p style="font-size:14.5px">These produced a <strong>food surplus</strong> &rarr; less agricultural labour needed &rarr; <strong>rural-to-urban migration</strong> &rarr; a workforce in the cities needing trades.</p>
  <h4>Charters</h4>
  <p style="font-size:14.5px">Guilds were formally created by <strong>charter</strong> from a city ruler, king or mayor. The example to know: the <strong>Weavers' Guild of London, chartered by King Henry II in 1155</strong>, granting a monopoly on weaving in London. It still exists as the <strong>Worshipful Company of Weavers</strong> — nearly 900 years.</p>
  <p style="font-size:14.5px">Typical charter wording: <em>&ldquo;no one shall intermeddle within the city concerning their craft unless he belongs to the guild.&rdquo;</em></p>`},
 {t:"The three-rung hierarchy",src:"Lec 8 · L#11",h:`
  <div class="scroller"><table><thead><tr><th>Rank</th><th>Who</th><th>Can</th><th>Cannot</th></tr></thead><tbody>
   <tr><td><strong>Apprentice</strong></td><td>Boys aged <strong>12–14</strong>, for a minimum of <strong>seven years</strong></td><td>Receive food, lodging and training</td><td>Be paid — the labour is unpaid</td></tr>
   <tr><td><strong>Journeyman</strong></td><td>Completed the apprenticeship</td><td><strong>Earn wages</strong>, work for any master in the city</td><td><strong>Open a workshop</strong> or employ anyone</td></tr>
   <tr><td><strong>Master</strong></td><td>Made a <strong>masterpiece</strong>, approved by existing masters</td><td>Open a workshop, employ apprentices and journeymen</td><td>Freely set prices, output or working hours</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">Senior masters served as <strong>wardens</strong>, inspecting goods and enforcing the rules.</p>
  <div class="warnbox"><b>The trap:</b> a journeyman is <em>not</em> a trainee. He is a fully skilled, waged worker who simply cannot own a workshop — a permanent skilled workforce rather than a step on the way to ownership.</div>
  <h4>The Hatters' Guild charter — a worked example</h4>
  <ul>
   <li>Only <strong>free men of London</strong> could make or sell hats in London.</li>
   <li>Apprenticeships were a minimum of <strong>seven years</strong>.</li>
   <li>Wardens could <strong>inspect all hats for sale and confiscate</strong> substandard goods.</li>
   <li>Penalties: fines and loss of guild membership — loss of &ldquo;the freedom&rdquo;.</li>
  </ul>`},
 {t:"The four functions of a guild",src:"Lec 8 · L#11 · L#14",h:`
  <div class="def">Guilds were never only economic. He grouped their work into <b>economic, social, religious and political</b> functions — expect a question that tests whether you know they did all four.</div>
  <div class="scroller"><table><thead><tr><th>Function</th><th>What it meant</th></tr></thead><tbody>
   <tr><td><strong>Economic</strong></td><td>Quality control by wardens · price setting · who may open a shop · apprenticeship standards · excluding non-members, creating a <strong>monopoly</strong> · some banned <strong>night work</strong></td></tr>
   <tr><td><strong>Social</strong></td><td>A <strong>&ldquo;common box&rdquo;</strong> paying daily stipends to members in poverty · care for the sick and elderly · <strong>funeral and burial</strong> costs · support for <strong>widows and orphans</strong>. Members were expected to attend funeral processions</td></tr>
   <tr><td><strong>Religious</strong></td><td>A <strong>patron saint</strong> per trade — <strong>St Joseph for carpenters</strong>, <strong>St Paul for shoemakers</strong> · funded church altars · organised religious processions and pageants</td></tr>
   <tr><td><strong>Political / legal</strong></td><td><strong>Their own courts</strong> for commercial disputes · some kept <strong>armed forces</strong> · members dominated <strong>city councils</strong> · craft guilds staged revolts against merchant guilds and feudal authorities</td></tr>
  </tbody></table></div>
  <h4>Why people wanted one: predictability</h4>
  <p style="font-size:14.5px">Against the uncertainty of agriculture, guilds offered a <strong>regulated market</strong>, a <strong>formal career path</strong>, <strong>collective security</strong>, and status based on <strong>acquired skill</strong> rather than inherited land.</p>
  <div class="warnbox"><b>The cost:</b> geographic fragmentation, entry barriers, banned technology, and practices modern economics would call straightforwardly <b>monopolistic and anti-competitive</b>. Membership was overwhelmingly male.</div>
  <h4>Guilds are not the WTO — he was asked this directly</h4>
  <p style="font-size:14.5px">The WTO is <strong>international and governmental</strong>, formed by states, regulating <strong>trade policy</strong> between countries. A guild was <strong>local and professional</strong>, formed by practitioners, regulating <strong>craft standards and market entry</strong> in one city. Modern industry associations are the closer parallel — but they cannot bar market entry, fix prices by law, or run their own courts.</p>`}
],

"s-before":[
 {t:"The Agricultural Revolution",src:"Lec 9 · L#12 · 1500s–1600s",h:`
  <p style="font-size:15px">Set the scene: <strong>England around 1700</strong>. No factories, no power looms, no steam. Agriculture is the mainstay, guilds run the crafts, and production is entirely manual. The Industrial Revolution begins around <strong>1760 in Great Britain</strong> — so this lecture is about the 50–100 years that made it possible.</p>
  <h4>Three causes of rising agricultural productivity</h4>
  <ul>
   <li><strong>Four-field crop rotation</strong> — an advance on the earlier three-field system.</li>
   <li><strong>Tool innovation</strong> — above all <strong>Jethro Tull's seed drill, 1701</strong>, which mechanised sowing.</li>
   <li><strong>The Enclosure Movement.</strong></li>
  </ul>
  <h4>The Enclosure Movement</h4>
  <div class="def">Enclosure <b>created legal property rights over land previously held in common</b>, through <b>Enclosure Acts of Parliament</b>.</div>
  <ul>
   <li>The <strong>open-field system</strong> before it kept part of the land as <strong>&ldquo;common&rdquo;</strong>, with <strong>grazing rights</strong>, and required co-operation among the villagers of a manor.</li>
   <li>Enclosure <strong>abolished communal rights</strong>, consolidated small strips into large private farms, and landowners built <strong>fences, hedges and stone walls</strong>.</li>
  </ul>
  <div class="warnbox"><b>The Midland Revolt, 1607.</b> In <b>Northamptonshire and Warwickshire</b>, thousands of peasants calling themselves the <b>&ldquo;Diggers&rdquo;</b> and <b>&ldquo;Levellers&rdquo;</b> organised to level enclosure fences. Name, year, counties and both nicknames are all examinable.</div>
  <h4>What enclosure produced</h4>
  <div class="grid2">
   <div class="card" style="border-left:3px solid var(--good)"><p style="font-size:14px">Land manageable as a <strong>single economic unit</strong> · greater incentive to improve it · higher productivity and more food · <strong>labour freed for non-agricultural work</strong></p></div>
   <div class="card" style="border-left:3px solid var(--bad)"><p style="font-size:14px">Small landowners lost common and grazing rights · displacement and unemployment · <strong>wealth concentrated</strong> in fewer hands · riots</p></div>
  </div>`},
 {t:"The putting-out system",src:"Lec 9 · L#12",h:`
  <div class="def">The <b>putting-out system</b> is a method of <b>subcontracting production</b>: merchants distributed <b>raw materials</b> to workers, who completed the work <b>in their own homes or small workshops</b> and were <b>paid wages</b>; the merchant collected the finished goods and kept the profit.</div>
  <h4>Why it appeared: the guild was the bottleneck</h4>
  <p style="font-size:14.5px">Guilds <strong>held a monopoly on manufacturing</strong>, <strong>strictly limited the number of workers</strong>, <strong>set prices</strong>, and <strong>banned new technology</strong>. Apprenticeships of 7–8 years throttled the supply of skilled labour. Merchants went around them by taking production to the countryside, outside guild jurisdiction.</p>
  <h4>What it changed</h4>
  <ul>
   <li><strong>Power shifted to merchants</strong> — away from landowners and guild masters. A wealthy <strong>merchant class</strong> emerged with political influence, and law began to favour commercial interests.</li>
   <li>It <strong>absorbed displaced agricultural labour</strong>, at least part-time.</li>
   <li>It <strong>broke the guild monopoly</strong> on production and prices.</li>
   <li>Unlike the guild system, it <strong>rewarded productivity improvement</strong> — both merchant and worker gained from producing more.</li>
  </ul>
  <div class="def">The two developments together are the answer to &ldquo;what caused the Industrial Revolution?&rdquo;: the <b>Agricultural Revolution</b> supplied <b>free labour and food</b>; the <b>putting-out system</b> supplied <b>profit incentives, merchant capital and freedom from guild rules</b>.</div>`}
],

"s-machines":[
 {t:"Why machines — the three drivers",src:"Lec 10 · L#13",h:`
  <h4>1 · Labour was available</h4>
  <p style="font-size:14.5px">The Agricultural Revolution and enclosure had displaced workers from the land.</p>
  <h4>2 · Demand was exploding — the figures</h4>
  <div class="scroller"><table><thead><tr><th></th><th>1700</th><th>1760</th><th>1800/1801</th></tr></thead><tbody>
   <tr><td><strong>UK population</strong></td><td>5–6.5 million</td><td>—</td><td><strong>9–11 million</strong> (roughly doubled)</td></tr>
   <tr><td><strong>Global trade</strong></td><td><strong>&pound;6.5 million</strong></td><td><strong>&pound;14.7 million</strong></td><td><strong>&pound;43.2 million</strong></td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">Trade roughly <strong>tripled between 1760 and 1800</strong>. <strong>Textiles were 70–90% of all UK manufactured exports.</strong></p>
  <h4>3 · The putting-out system had hit its limits</h4>
  <ul>
   <li><strong>Decentralised</strong> — merchants spent time and money moving materials to scattered rural households and collecting goods back, paying assorted local taxes and fees.</li>
   <li><strong>The limits of human muscle</strong> — a person can only produce so much.</li>
   <li>The bottleneck in numbers: <strong>it took four spinners to keep up with one weaver.</strong></li>
  </ul>
  <p style="font-size:14.5px">Machines answered all three: they ran <strong>18–24 hours a day</strong>, did the work of several people, and could be <strong>centralised in one place</strong>.</p>
  <div class="def">The production chain, worth memorising in order: <b>raw cotton/wool &rarr; spinning &rarr; yarn &rarr; weaving &rarr; cloth</b>.</div>`},
 {t:"The four inventions",src:"Lec 10 · L#13 · L#15 · L#16 · highest-yield table",h:`
  <div class="scroller"><table><thead><tr><th>Invention</th><th>Inventor</th><th>Date</th><th>Stage</th><th>Effect</th></tr></thead><tbody>
   <tr><td><strong>Flying shuttle</strong></td><td><strong>John Kay</strong></td><td><strong>1733</strong> (&ldquo;the 1730s&rdquo;)</td><td>Weaving</td><td><strong>Doubled</strong> a weaver's output; one weaver could make cloth of any width alone, where two or three were needed before</td></tr>
   <tr><td><strong>Spinning jenny</strong></td><td><strong>James Hargreaves</strong></td><td><strong>1764</strong></td><td>Spinning</td><td>Roughly <strong>eightfold</strong>; many spindles at once. Later water- and steam-powered versions reached <strong>80-fold</strong></td></tr>
   <tr><td><strong>Water frame</strong></td><td><strong>Richard Arkwright</strong></td><td><strong>1768</strong> (patented <strong>1769</strong>)</td><td>Spinning</td><td>Shifted power from <strong>human muscle to water</strong>; too heavy for a house, so it created the <strong>factory</strong></td></tr>
   <tr><td><strong>Steam engine</strong></td><td><strong>James Watt</strong></td><td><strong>1781</strong></td><td>Power</td><td>Freed the factory from rivers; converted heat from <strong>coal</strong> into mechanical work</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Water frame date — be ready for either.</b> The Lecture 10 deck writes <b>1768</b>; Lecture 15 dates the <b>patent</b> to <b>1769</b>. Both refer to the same machine. If forced to choose on a date-only question, the in-syllabus deck says 1768.</div>
  <h4>The sequence matters</h4>
  <p style="font-size:14.5px">The flying shuttle doubled <strong>weaving</strong> and thereby <strong>created a thread shortage</strong> — spinners could not keep up. The spinning jenny, thirty-one years later, answered that shortage. Each innovation created the imbalance that provoked the next.</p>
  <h4>Both inventors were attacked</h4>
  <ul>
   <li><strong>1753</strong> — a mob attacked <strong>John Kay's</strong> premises and destroyed his models. Factory owners pirated his design, formed a <strong>&ldquo;Shuttle Club&rdquo;</strong> to fight his patent suits collectively, and Kay <strong>fled to France around 1750</strong>, never profiting from his invention.</li>
   <li><strong>1768</strong> — a mob of spinners broke into <strong>James Hargreaves'</strong> house in <strong>Blackburn</strong>.</li>
  </ul>`},
 {t:"The water frame and the birth of the factory",src:"L#15 · beyond the stated cut-off",h:`
  <p style="font-size:15px"><strong>Richard Arkwright</strong> — originally a <strong>barber and wig maker</strong> — patented the water frame and built the mills that made it pay.</p>
  <ul>
   <li><strong>Cromford Mill, Derbyshire, 1771</strong> — the <strong>first water-powered cotton spinning mill in the world</strong>. Today a <strong>UNESCO World Heritage Site</strong>.</li>
   <li><strong>Birkacre Mill, Lancashire, 1777.</strong> Both in the Derwent Valley, sited for water.</li>
   <li>Mills had to sit on <strong>perennial</strong> streams that did not freeze, so they could run <strong>year-round, 24/7</strong>.</li>
  </ul>
  <h4>Why this created the factory</h4>
  <p style="font-size:14.5px">Earlier machines were light enough to work in a home. The water frame was not. Heavy machines needed dedicated buildings — so production left the cottage. A typical mill: <strong>300–400 workers</strong> and <strong>25–40+ machines</strong>.</p>
  <h4>Patents, and what happened when they broke</h4>
  <ul>
   <li>Water frame patent <strong>1769</strong>; the <strong>Grand Patent of 1775</strong> covered the preparatory <strong>carding</strong> process.</li>
   <li>Competitors copied the technology and challenged the patents in court.</li>
   <li><strong>1785 — the patents were invalidated</strong>, and expansion became explosive: <strong>143</strong> Arkwright-type water mills by <strong>1788</strong>, and <strong>300</strong> large centralised factories by <strong>1800</strong>.</li>
  </ul>
  <div class="warnbox"><b>1779 — machine-breaking riots in Lancashire</b>, including the burning of Arkwright's mill. Conditions: <b>10–14 hour days</b>, low wages despite soaring productivity, and widespread child labour. This is where the <b>working class</b> and the labour movement come from.</div>`},
 {t:"Steam, and Manchester as Cottonopolis",src:"L#16 · beyond the stated cut-off",h:`
  <h4>What steam changed</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Water frame</th><th>Steam engine</th></tr></thead><tbody>
   <tr><td><strong>Needs</strong></td><td><strong>Running water</strong> — a fast river</td><td><strong>Stored water</strong> plus <strong>coal</strong></td></tr>
   <tr><td><strong>Location</strong></td><td>Tied to river valleys, whatever the market</td><td><strong>Geographical liberation</strong> — near coalfields, transport and labour</td></tr>
   <tr><td><strong>New dependency</strong></td><td>—</td><td><strong>Coal</strong>, and the transport to move it</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">Mechanism: heat from coal drives a <strong>piston and cylinder</strong>, turning a shaft connected to machinery by <strong>flywheels and belts</strong>. A <strong>condenser</strong> cools steam back to water so it can be reused.</p>
  <div class="def"><b>Steam mill towns</b> — urban centres organised around <b>factory production</b> rather than around agriculture, ports or religion.</div>
  <h4>Manchester, in numbers</h4>
  <div class="scroller"><table><thead><tr><th>Year</th><th>Manchester</th></tr></thead><tbody>
   <tr><td><strong>1771</strong></td><td>Population <strong>20,000</strong> · <strong>zero</strong> cotton mills</td></tr>
   <tr><td><strong>1802</strong></td><td><strong>50</strong> textile mills</td></tr>
   <tr><td><strong>1816</strong></td><td><strong>43</strong> large working mills</td></tr>
   <tr><td><strong>1851</strong></td><td>Population <strong>~300,000</strong> — a <strong>15-fold</strong> increase</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">The McConnell and Kennedy mill alone employed over <strong>1,300</strong> workers on one site.</p>
  <h4>Why Manchester — three advantages</h4>
  <ul>
   <li><strong>Coal</strong> — the South Lancashire coalfields, <strong>16 km</strong> away, via the <strong>Bridgewater Canal (opened 1761)</strong>.</li>
   <li><strong>Cotton</strong> — the port of <strong>Liverpool</strong>, <strong>30–40 km</strong> away, importing from North America and India.</li>
   <li><strong>Labour</strong> — a fast-growing urban population.</li>
  </ul>
  <p style="font-size:14.5px">At its peak Manchester produced roughly <strong>70–80% of the world's cotton textiles</strong> — hence <strong>&ldquo;Cottonopolis&rdquo;</strong>. India's later parallels: Jamshedpur, Bokaro and Rourkela, organised around steel.</p>
  <div class="warnbox"><b>The two thinkers, and their order:</b> <b>Adam Smith</b> in the <b>1770s</b> on markets and individual enterprise, then <b>Marx and Engels</b> in the <b>1850s</b> on labour, capital and factory conditions — written as organised labour movements emerged.</div>
  <p style="font-size:14.5px;color:var(--ink-2)">He was explicit that industrialisation rested on a global system: colonial territories supplying raw cotton, slave labour in agricultural production, and the canals, railways and ports that tied it together.</p>`}
]
};

const TRAPS=[
 ["Quizzes here are 20%, not 15%","Economic & Business History: 3 quizzes at 20% each, best 2 of 3 = 40%, major exam 60%, no participation component. Foundations of Computing is the 15% one.","20% a quiz, 40% total"],
 ["Economics is scarcity, not money","The definition is the use of LIMITED resources against UNLIMITED wants, and the response to incentives.","limited resources, unlimited wants"],
 ["Macro vs micro maps onto economic vs business history","Economic history = macro = rules and logic of economies. Business history = micro = firms, entrepreneurs, families.","macro/econ, micro/business"],
 ["NGOs are not businesses","The profit motive is essential to the definition, which is exactly why non-profits fall outside it.","no profit motive, no business"],
 ["Weekends came from industrial society","Agrarian, feudal and nomadic societies had off-days, but religious ones. Standardised weekends are industrial.","industrial, not agrarian"],
 ["Ford did not invent the weekend","1908, a Jewish-staffed US cotton mill, came first, for the Sabbath. Ford's 1926 move was to raise consumption and demand.","1908 before 1926"],
 ["Serfs were not slaves","They were bound to the land: no leaving, marrying or relocating without the lord's permission.","bound, not owned"],
 ["Feudal is decentralised, colonial is centralised","Feudal lords decided locally for survival. The British decided from abroad, for the global market, pushing cash crops like indigo.","local/survival vs external/market"],
 ["Guilds were city-level only","Their authority stopped at the city boundary. The same trade had different rules in different cities. That fragmentation is the point.","city, never national"],
 ["A journeyman is not a trainee","He is fully skilled and waged. What he cannot do is open a workshop or employ anyone. The apprentice is the unpaid one.","skilled and paid, just not an owner"],
 ["Merchant guilds came before craft guilds","They formed first to protect traders travelling between cities from lords' taxes, robbers and bandits.","merchants first"],
 ["Guilds were social, religious and political too","Common boxes, burials, widows, patron saints, church altars, their own courts, sometimes armed forces, and seats on the city council.","four functions, not one"],
 ["Guilds are not the WTO","WTO: international, governmental, formed by states, regulating trade policy. Guild: local, professional, formed by practitioners, regulating craft and entry.","state vs practitioner"],
 ["Three-field vs four-field rotation","Three-field (winter, summer, fallow) enabled the medieval surplus behind guilds. Four-field came later, in the Agricultural Revolution.","three medieval, four later"],
 ["Enclosure created private rights, it did not just fence fields","Enclosure Acts of Parliament abolished communal grazing rights over land previously held in common.","legal rights, not just hedges"],
 ["The Midland Revolt was 1607","Northamptonshire and Warwickshire. The peasants called themselves the Diggers and the Levellers.","1607, Diggers and Levellers"],
 ["The putting-out system is subcontracting","Merchants supply raw materials, workers make goods at home for wages, merchants keep the profit. Its purpose was to bypass guild monopolies.","home work, merchant profit"],
 ["Four spinners fed one weaver","That ratio is why the flying shuttle caused a thread shortage, and why the spinning jenny followed thirty-one years later.","4 spinners : 1 weaver"],
 ["Kay 1733, Hargreaves 1764, Arkwright 1768/9, Watt 1781","Flying shuttle, spinning jenny, water frame, steam engine. Weaving, spinning, spinning, power.","the order is Kay-Hargreaves-Arkwright-Watt"],
 ["Water frame needs running water, steam needs coal","Steam's gain was geographical liberation from river valleys; its cost was a new dependence on coal and transport.","rivers out, coal in"],
 ["Arkwright was a barber","Not an engineer by trade. He patented the water frame and built Cromford Mill in 1771, the first water-powered cotton spinning mill in the world.","barber and wig maker"],
 ["Adam Smith came before Marx","Smith in the 1770s on markets; Marx and Engels in the 1850s on labour and capital, once factory conditions existed to write about.","1770s then 1850s"]
];

/* ===================== QUESTION BANK ===================== */
const Q=[
// ---------- foundations ----------
{t:"Foundations",q:"Economics is best defined as the study of:",c:["How governments raise and spend money","How people use limited resources and respond to incentives","How businesses maximise profit","The history of trade and commerce"],a:[1],w:"Scarcity is the core: limited resources against unlimited wants, plus the response to incentives."},
{t:"Foundations",q:"Which three resources did he name as limited for every individual?",c:["Land, labour, capital","Time, money, energy","Food, shelter, clothing","Income, savings, credit"],a:[1],w:"Time (24 hours), money and energy — set against unlimited wants."},
{t:"Foundations",q:"Inflation, national budgets, unemployment rates and GDP growth are the subject matter of:",c:["Microeconomics","Macroeconomics","Business history","Behavioural economics"],a:[1],w:"Macro looks at the whole economy. Micro looks at individual consumers, households and firms."},
{t:"Foundations",q:"Why the price of tomatoes moved last month is a question for:",c:["Macroeconomics","Microeconomics","Economic history","Fiscal policy"],a:[1],w:"Price formation for a particular good is micro."},
{t:"Foundations",q:"Economic history and business history map onto the two branches of economics how?",c:["Economic history is micro; business history is macro","Economic history is macro; business history is micro","Both are macro","Both are micro"],a:[1],w:"Economic history studies the rules and logic of whole economies (macro). Business history studies firms, entrepreneurs and business families (micro)."},
{t:"Foundations",q:"Business is defined as an economic activity involving the production and sale of goods and services with the motive of:",c:["Serving society","Earning profit while satisfying human needs","Maximising employment","Creating goods more cheaply than rivals"],a:[1],w:"Profit motive plus satisfaction of human needs. Both halves are in the definition."},
{t:"Foundations",q:"Which formula was given for profit?",c:["Profit = Revenue + Cost","Profit = Revenue − Cost","Profit = Cost − Revenue","Profit = Revenue ÷ Cost"],a:[1],w:"Profit = Revenue − Cost."},
{t:"Foundations",q:"Why do NGOs and non-profits fall outside the definition of business used in this course?",c:["They are too small","They lack the profit motive","They do not sell services","They are government-funded"],a:[1],w:"The profit motive is essential to the definition; NGOs satisfy needs without it."},
{t:"Foundations",q:"Which of these are services rather than goods? (Select all)",multi:true,c:["Education","Healthcare","A mobile phone","A haircut"],a:[0,1,3],w:"Services are intangible. A mobile phone is a tangible good."},
{t:"Foundations",q:"Business satisfies which kinds of need?",c:["Only physiological","Only psychological","Both physiological and psychological","Neither — only economic"],a:[2],w:"Physiological (food, shelter, rest) and psychological (status, achievement, dignity)."},
{t:"Foundations",q:"According to the lecture, history is fundamentally about:",c:["Dates and years","Change over time, and the how and why, supported by evidence","Great individuals","Wars and treaties"],a:[1],w:"He was emphatic that it is not about memorising dates. The three dimensions are context, time and change."},
{t:"Foundations",q:"Which modules does Quiz 1 cover?",c:["Modules 1 and 2 only","Modules 1 and 2 in full, and Module 3 as far as taught","All five modules","Module 3 only"],a:[1],w:"Modules 4 (History of Business, 1850–1950) and 5 (Indian Business History) have not been lectured."},
{t:"Foundations",q:"Module 2 covers which period and topics?",c:["Pre-15th century — agrarian economies, guild systems and society","16th–18th century — the Industrial Revolution","1850–1950 — the rise of large corporations","Pre-1947 — Indian business history"],a:[0],w:"Module 2 is Early Economic Systems and Pre-Industrial Economies."},
{t:"Foundations",q:"Why do businesses exist at all, on the lecture's account?",c:["Because governments require them","Because they satisfy needs more efficiently than individual self-sufficiency","Because profit is a natural human motive","Because trade requires intermediaries"],a:[1],w:"No individual can specialise in food, clothing, shelter and technology at once. Business is the mechanism society uses to organise production, distribution and consumption."},

// ---------- economy -> business ----------
{t:"Economy → business",q:"License Raj in India ran from:",c:["1947 to 1991","1948 to 1991","1956 to 1991","1948 to 1985"],a:[1],w:"It began with the Industrial Policy Resolution of 1948 and ended with the 1991 liberalisation."},
{t:"Economy → business",q:"The term 'License Raj' was coined by:",c:["Jawaharlal Nehru","C. Rajagopalachari","Manmohan Singh","P. C. Mahalanobis"],a:[1],w:"C. Rajagopalachari."},
{t:"Economy → business",q:"What does LPG stand for in the 1991 reforms?",c:["Liberalisation, Privatisation, Globalisation","Licensing, Production, Growth","Labour, Privatisation, Governance","Liberalisation, Production, Globalisation"],a:[0],w:"Liberalisation, Privatisation, Globalisation."},
{t:"Economy → business",q:"Under the Industrial Policy Resolution of 1956, Schedule A industries were:",c:["Open to the private sector only","Reserved exclusively for government","Open to both public and private sectors","Reserved for small-scale industry"],a:[1],w:"Schedule A was government monopoly — defence, atomic energy, railways, air transport, heavy industry, utilities. It produced PSUs like SAIL and BHEL."},
{t:"Economy → business",q:"The automobile sector was placed in which schedule?",c:["Schedule A","Schedule B","Schedule C","It was unscheduled"],a:[1],w:"Schedule B — the mixed sector, open to both public and private, with private entry requiring a licence. That is why Bajaj needed one."},
{t:"Economy → business",q:"Which body regulated prices under License Raj?",c:["RBI","The Bureau of Industrial Costs and Prices (BICP)","SEBI","The Planning Commission"],a:[1],w:"The BICP, established in the late 1960s."},
{t:"Economy → business",q:"Which were objectives of the 1956 Industrial Policy Resolution? (Select all)",multi:true,c:["A socialist pattern of society","Expansion of the public sector","Balanced regional growth","Maximising foreign direct investment"],a:[0,1,2],w:"Also equitable distribution of income and wealth, and preventing concentration of wealth in private hands. Attracting FDI was not an objective — the direction of travel was the opposite."},
{t:"Economy → business",q:"Bajaj Auto's initial licensed manufacturing capacity was:",c:["600 units a year","6,000 units a year","60,000 units a year","Unlimited once licensed"],a:[1],w:"6,000 two- and three-wheelers a year, under the licence obtained in 1959/60."},
{t:"Economy → business",q:"Bajaj's technology licence for the Vespa 150 came from:",c:["Piaggio, an Italian firm","Vespa GmbH, a German firm","Honda, a Japanese firm","LML, an Indian firm"],a:[0],w:"Piaggio, in 1960. The collaboration ended in 1971."},
{t:"Economy → business",q:"FERA limited foreign shareholding in Indian subsidiaries to a maximum of:",c:["26%","40%","51%","74%"],a:[1],w:"40%. Note the date conflict: the deck says 1970, the lecture narration says 1973 — which is the historically correct year of enactment."},
{t:"Economy → business",q:"Which scooter did Bajaj launch in 1972–73 that stayed in production until the mid-2000s?",c:["Bajaj 150","Bajaj Chetak","Bajaj Priya","LML Vespa"],a:[1],w:"The Bajaj Chetak."},
{t:"Economy → business",q:"Under the Scooters' Distribution and Sales Control Order, 1960, which parties were regulated? (Select all)",multi:true,c:["Manufacturers","Dealers","Consumers","Exporters only"],a:[0,1,2],w:"All three — production quotas for manufacturers, sales registers for dealers, and application forms plus a bank guarantee for consumers. Even resale was regulated."},

// ---------- society & technology ----------
{t:"Society & tech",q:"McDonald's entered India in which year?",c:["1991","1994","1996","1998"],a:[2],w:"1996, five years after the LPG reforms."},
{t:"Society & tech",q:"The McAloo Tikki burger was introduced in:",c:["1996","1998","2001","2005"],a:[1],w:"1998, two years after entry — and it became a main offering, not a side option."},
{t:"Society & tech",q:"Adapting products, production and services to local audiences and tastes is called:",c:["Globalisation","Localisation","Diversification","Segmentation"],a:[1],w:"Localisation."},
{t:"Society & tech",q:"What changed between the mid-1990s and 2021 Cadbury advertisements?",c:["The product was reformulated","The roles of the man and the woman were reversed","The language changed from English to Hindi","The setting moved from a stadium to a home"],a:[1],w:"An exact role reversal — in the 1990s the man played and the woman watched; in 2021 the woman played and the man ran on. Same brand, same country, same language."},
{t:"Society & tech",q:"Which part of a business usually registers a social change first?",c:["Product design","Advertising","Supply chain","Hiring policy"],a:[1],w:"Advertisement campaigns are often the first business element to reflect cultural change."},
{t:"Society & tech",q:"Netflix was founded in 1997 as a:",c:["Streaming service","DVD sales company","DVD rental company","Cinema chain"],a:[1],w:"DVD sales first, then rental, then streaming from around 2007, which became primary in 2012–13. DVD rental ended in 2020–23."},
{t:"Society & tech",q:"What technological development made Netflix's streaming model commercially viable?",c:["Smartphones","High-speed internet in the mid-2000s","Cloud storage","Digital rights management"],a:[1],w:"High-speed internet. Technology did not just improve the product — it replaced the business model."},
{t:"Society & tech",q:"Kodak is cited as an example of:",c:["Successful localisation","A firm that failed to adapt to a new technology and went bankrupt","A firm broken up by regulation","Early adoption of digital photography"],a:[1],w:"Smartphone cameras made analogue obsolete; Kodak did not adapt to digital and went bankrupt."},
{t:"Society & tech",q:"What does the E in PESTEL that follows Technological stand for?",c:["Ethical","Environmental","Economic","External"],a:[1],w:"Political, Economic, Social, Technological, Environmental, Legal. The first E is Economic; the second is Environmental."},
{t:"Society & tech",q:"Which are components of 'society' that the lecture says affect business? (Select all)",multi:true,c:["Culture — food habits, language, clothing, gender roles","Family structure — joint versus nuclear","Religious practice and festivals","Central bank interest rates"],a:[0,1,2],w:"Interest rates are an economic factor, not a societal one. Demographics, education levels, values and social norms also count."},

// ---------- business -> society ----------
{t:"Business → society",q:"In which type of society did the weekend emerge?",c:["Agrarian","Feudal","Industrial","Nomadic"],a:[2],w:"Earlier societies had off-days, but religious ones. The standardised weekend is industrial."},
{t:"Business → society",q:"In agrarian society, working hours were:",c:["Fixed at eight hours year-round","Seasonal — roughly 7–8 hours in winter and 10–12 in summer","Set by guild regulation","Determined by the church calendar"],a:[1],w:"Work depended on daylight, so hours varied by season. Artificial light is what made standardised hours possible."},
{t:"Business → society",q:"The labour movement's division of the 24-hour day was:",c:["10 work, 8 rest, 6 personal","8 work, 8 rest, 8 personal","12 work, 8 rest, 4 personal","9 work, 8 rest, 7 personal"],a:[1],w:"Three equal eight-hour blocks — the origin of '9 to 5'. Before it: 10–12 hour days and 6–7 day weeks, i.e. 72–84 hours."},
{t:"Business → society",q:"The first five-day working week (1908) was introduced at a US cotton mill because:",c:["Ford demanded it","Its Jewish workers observed the Saturday Sabbath","A strike forced it","Legislation required it"],a:[1],w:"To accommodate the Sabbath, workers were given Saturday and Sunday off."},
{t:"Business → society",q:"Why did Ford shut its factories at weekends from 1926?",c:["To comply with the Fair Labor Standards Act","To increase leisure time and thereby boost consumer demand","Because of a workers' strike","To reduce energy costs"],a:[1],w:"Commercial reasoning: more free time means more consumption, and therefore more sales. It happened in the run-up to the 1929 crash."},
{t:"Business → society",q:"The Fair Labor Standards Act of 1938 introduced which of the following? (Select all)",multi:true,c:["A 40-hour working week","Overtime pay","A minimum wage","A ban on child labour"],a:[0,1,2,3],w:"All four. It was part of the New Deal and was the first legislative protection of workers' rights."},
{t:"Business → society",q:"NINJA loans, central to the 2007–08 crisis, stands for:",c:["No Interest, No Job or Assets","No Income, No Job, No Assets","New Investment, No Joint Assets","Negative Income, No Justified Assets"],a:[1],w:"Banks abandoned credit verification and lent to unqualified borrowers to expand market share."},
{t:"Business → society",q:"What social consequence of the Great Depression did he use to show economic and social crises are linked?",c:["Mass migration to cities","A fall in birth rates, followed by the post-war Boomer generation","A rise in literacy","The collapse of trade unions"],a:[1],w:"Families could not afford children; birth rates recovered after the Second World War, producing the Boomer generation of 1945–1960s."},
{t:"Business → society",q:"The Industrial Revolution created which entirely new social class?",c:["The merchant class","The working class","The landed gentry","The professional class"],a:[1],w:"The working class, and with it the labour movement. His modern parallel was gig-economy workers organising."},

// ---------- agrarian & land ----------
{t:"Agrarian & land",q:"An agrarian economy is one where agriculture contributes what share of GDP?",c:["More than 25%","More than 50%","More than 75%","Exactly 100%"],a:[1],w:"More than 50%, with most people earning their living from farming."},
{t:"Agrarian & land",q:"Around 1800, agriculture's share of India's GDP was roughly:",c:["35–40%","40–50%","70–80%","15–18%"],a:[2],w:"70–80% around 1800, against 15–18% today. The UK was 35–40% and the US 40–50%."},
{t:"Agrarian & land",q:"Today, agriculture contributes less than 1% of GDP in which countries?",multi:true,c:["The UK","The US","India","China"],a:[0,1],w:"UK and US are both under 1%. India is 15–18% and China is 7%."},
{t:"Agrarian & land",q:"In the Salem, Oregon case of 1953, what happened?",c:["Farms mechanised and laid off students","Schools were delayed by a week so students could harvest beans","A strike stopped the harvest","The harvest failed entirely"],a:[1],w:"High-school students were 25–35% of the harvest labour force. The board weighed a $1 million loss to growers against a $9,000 cost to the district."},
{t:"Agrarian & land",q:"The Salem case is used to show that:",c:["Agriculture was becoming less important","Agriculture bent other institutions, including education, to its calendar","Child labour was illegal","Mechanisation had replaced manual harvesting"],a:[1],w:"And that harvest participation was a cultural tradition, not purely an economic necessity."},
{t:"Agrarian & land",q:"Under the feudal model, who ultimately owned the land?",c:["The lords","The crown or king","The church","The peasants collectively"],a:[1],w:"The crown granted it to lords and nobles in exchange for military protection and produce."},
{t:"Agrarian & land",q:"Under the Zamindari system, who owned the land?",c:["The Zamindars","The British government","The cultivators","Village councils"],a:[1],w:"The British government owned it and granted it to Zamindars, who controlled cultivators and tenants."},
{t:"Agrarian & land",q:"Which statement about serfs is correct?",c:["They were slaves owned by the lord","They were bound to the land and could not leave, marry or relocate without permission","They were free tenants paying rent","They owned their plots outright"],a:[1],w:"Not slaves, but bound. He stressed the relationship was socio-economic, controlling social life as well as work."},
{t:"Agrarian & land",q:"Who decided what would be produced under the colonial/Zamindari system?",c:["Local Zamindars, based on soil quality","The British government, thousands of miles away, for the global market","The cultivators themselves","Village guilds"],a:[1],w:"Centralised and externally imposed — and it pushed cultivators away from food crops toward risky cash crops such as indigo."},
{t:"Agrarian & land",q:"Life expectancy in the agrarian societies described was approximately:",c:["20–25 years","30–35 years","45–50 years","55–60 years"],a:[1],w:"30–35 years, with high infant mortality."},
{t:"Agrarian & land",q:"Why was there no incentive to innovate in agrarian economies? (Select all)",multi:true,c:["No competition","No disposable income to invest","Wealth could only be stored in land","Innovation was banned by the crown"],a:[0,1,2],w:"Not a legal ban — a structural absence of incentive. Labour immobility compounded it."},

// ---------- guilds ----------
{t:"Guilds",q:"A guild is best defined as:",c:["A government department regulating trade","An association of craftsmen or merchants for mutual aid, protection and maintenance of standards","A company owned by several merchants","A religious brotherhood"],a:[1],w:"Mutual aid, protection and standards — the three purposes in the definition."},
{t:"Guilds",q:"At what level did guilds operate?",c:["City","Regional","National","International"],a:[0],w:"City level only. The same trade was regulated differently in different cities — that fragmentation is the point."},
{t:"Guilds",q:"Which type of guild emerged first, and why?",c:["Craft guilds, to control quality","Merchant guilds, to protect traders travelling between cities","Craft guilds, to train apprentices","Merchant guilds, to fix prices"],a:[1],w:"Merchant guilds first — protection from feudal lords' taxes, robbers and bandits on the roads between cities."},
{t:"Guilds",q:"Which two agricultural innovations enabled the urbanisation behind guilds?",c:["The seed drill and four-field rotation","The heavy plough and three-field crop rotation","Enclosure and the water frame","Irrigation and animal breeding"],a:[1],w:"Heavy plough plus three-field rotation (winter, summer, fallow) produced a surplus, freeing labour to move to cities. The seed drill and four-field rotation come much later."},
{t:"Guilds",q:"In three-field crop rotation, what happens to the third field?",c:["It grows a cash crop","It is left fallow to recover","It is used for grazing only","It is sold"],a:[1],w:"Winter crops, summer crops, and one field fallow to rejuvenate the soil."},
{t:"Guilds",q:"The Weavers' Guild of London was chartered by which monarch, and in which year?",c:["Henry II, 1155","Henry VIII, 1515","Edward III, 1355","Richard I, 1189"],a:[0],w:"King Henry II in 1155. It survives as the Worshipful Company of Weavers — nearly 900 years."},
{t:"Guilds",q:"Put the guild hierarchy in order, lowest to highest:",c:["Journeyman → apprentice → master","Apprentice → journeyman → master","Apprentice → master → journeyman","Master → journeyman → apprentice"],a:[1],w:"Apprentice (unpaid trainee), journeyman (skilled and waged), master (workshop owner)."},
{t:"Guilds",q:"Apprentices typically began at what age, for what minimum term?",c:["10–12 years old, for five years","12–14 years old, for seven years","14–16 years old, for three years","16–18 years old, for ten years"],a:[1],w:"Boys of 12–14, minimum seven years, unpaid but given food, lodging and training."},
{t:"Guilds",q:"What could a journeyman NOT do?",c:["Earn wages","Work for any master in the city","Open his own workshop or employ others","Move between trades"],a:[2],w:"He was fully skilled and paid — he simply could not own a workshop. That is the distinction most often tested."},
{t:"Guilds",q:"What was required to become a master?",c:["Paying a fee to the city","Creating a masterpiece approved by existing masters","Ten years as a journeyman","A royal charter"],a:[1],w:"A masterpiece, judged by the existing masters."},
{t:"Guilds",q:"A guild's 'common box' was used for:",c:["Collecting taxes for the city","Paying daily stipends to members in poverty, and funeral costs","Storing the guild charter","Holding apprenticeship fees"],a:[1],w:"A welfare fund — stipends, care for the sick and elderly, burials, and support for widows and orphans."},
{t:"Guilds",q:"Which were genuine guild functions? (Select all)",multi:true,c:["Running their own courts for commercial disputes","Maintaining patron saints and church altars","Dominating city councils","Setting national tariffs on imports"],a:[0,1,2],w:"Tariffs were never theirs — guilds were city-level. Some also maintained armed forces."},
{t:"Guilds",q:"Which patron saint was associated with carpenters?",c:["St Paul","St Joseph","St Peter","St Crispin"],a:[1],w:"St Joseph for carpenters; St Paul for shoemakers."},
{t:"Guilds",q:"How does a guild differ from the WTO?",c:["The WTO is international and governmental, formed by states, regulating trade policy; a guild was local and professional, formed by practitioners, regulating craft and market entry","They are essentially the same at different scales","The WTO regulates craft standards; guilds regulated tariffs","Guilds were governmental; the WTO is private"],a:[0],w:"He was asked this directly. Modern industry associations are the closer parallel, but they cannot bar entry, fix prices by law, or run courts."},

// ---------- life before machines ----------
{t:"Before machines",q:"The Industrial Revolution is conventionally dated to which decade and country?",c:["1730s, France","1760s, Great Britain","1780s, Germany","1800s, United States"],a:[1],w:"Around the 1760s in Great Britain — though the textile innovations began in the 1730s."},
{t:"Before machines",q:"Jethro Tull's seed drill dates from:",c:["1607","1701","1733","1764"],a:[1],w:"1701. It mechanised sowing and is one of the three causes of rising agricultural productivity."},
{t:"Before machines",q:"Which crop rotation system belongs to the Agricultural Revolution?",c:["Two-field","Three-field","Four-field","Six-field"],a:[2],w:"Four-field. Three-field is the earlier medieval system behind the guild-era surplus."},
{t:"Before machines",q:"The Enclosure Movement did what, fundamentally?",c:["Fenced fields to keep livestock in","Created legal property rights over land previously held in common","Redistributed land to peasants","Nationalised farmland"],a:[1],w:"Enclosure Acts of Parliament abolished communal rights and consolidated strips into large private farms. The fences followed from the legal change."},
{t:"Before machines",q:"Before enclosure, the open-field system included land categorised as:",c:["Crown land","Common, carrying grazing rights","Glebe land","Waste"],a:[1],w:"Common land with grazing rights, which required co-operation among the residents of a manor or village."},
{t:"Before machines",q:"The Midland Revolt took place in which year?",c:["1549","1607","1649","1701"],a:[1],w:"1607, in Northamptonshire and Warwickshire."},
{t:"Before machines",q:"What did the Midland Revolt peasants call themselves?",c:["Luddites and Chartists","Diggers and Levellers","Roundheads and Cavaliers","Ranters and Seekers"],a:[1],w:"The Diggers and the Levellers. They organised to level enclosure fences."},
{t:"Before machines",q:"Which were consequences of the Enclosure Movement? (Select all)",multi:true,c:["Higher agricultural productivity","Labour freed for non-agricultural work","Loss of common grazing rights for small landowners","Reduced concentration of land ownership"],a:[0,1,2],w:"The opposite of the last — enclosure concentrated land ownership in fewer hands."},
{t:"Before machines",q:"In the putting-out system, where did the work happen?",c:["In a central factory","In workers' own homes or small workshops","In guild halls","On the merchant's premises"],a:[1],w:"Merchants distributed raw materials to rural households, paid wages for the finished work, and kept the profit."},
{t:"Before machines",q:"What was the main purpose of the putting-out system?",c:["To reduce transport costs","To bypass guild monopolies and restrictions","To employ children","To standardise quality"],a:[1],w:"Guilds held a monopoly on manufacturing, limited worker numbers, set prices and banned new technology. Rural production sat outside their jurisdiction."},
{t:"Before machines",q:"Which of these did guilds do that made them a bottleneck on production? (Select all)",multi:true,c:["Strictly limited the number of workers","Set prices","Banned new technology","Refused to train apprentices"],a:[0,1,2],w:"They did train apprentices — over seven or eight years, which itself throttled the supply of skilled labour."},
{t:"Before machines",q:"The putting-out system shifted economic power toward:",c:["Guild masters","Merchants","Landowners","The crown"],a:[1],w:"A wealthy merchant class emerged with political influence, and law began to favour commercial over guild interests."},
{t:"Before machines",q:"Which two developments together made the Industrial Revolution possible?",c:["The steam engine and the railway","The Agricultural Revolution and the putting-out system","Enclosure and the guild charter","Colonialism and the slave trade"],a:[1],w:"The Agricultural Revolution supplied free labour and food; the putting-out system supplied profit incentives, merchant capital and freedom from guild rules."},

// ---------- machines ----------
{t:"Machines",q:"Who invented the flying shuttle, and in what year?",c:["James Hargreaves, 1764","John Kay, 1733","Richard Arkwright, 1768","James Watt, 1781"],a:[1],w:"John Kay, 1733 — often given as 'the 1730s'. It was a weaving innovation."},
{t:"Machines",q:"The flying shuttle affected which stage of textile production?",c:["Spinning","Weaving","Carding","Dyeing"],a:[1],w:"Weaving. It doubled a weaver's output and let one weaver make cloth of any width alone."},
{t:"Machines",q:"Who invented the spinning jenny, and when?",c:["John Kay, 1733","James Hargreaves, 1764","Richard Arkwright, 1769","Samuel Crompton, 1779"],a:[1],w:"James Hargreaves, 1764 — roughly an eightfold productivity gain, and up to 80-fold in later powered versions."},
{t:"Machines",q:"What is the correct production chain for textiles?",c:["Raw cotton → weaving → yarn → spinning → cloth","Raw cotton → spinning → yarn → weaving → cloth","Raw cotton → carding → weaving → spinning → cloth","Yarn → raw cotton → spinning → weaving → cloth"],a:[1],w:"Raw cotton or wool → spinning → yarn → weaving → cloth."},
{t:"Machines",q:"Under the old system, how many spinners were needed to keep one weaver supplied?",c:["Two","Three","Four","Six"],a:[2],w:"Four. That ratio is why the flying shuttle caused a thread shortage, and why the spinning jenny followed."},
{t:"Machines",q:"UK global trade grew from £6.5 million in 1700 to what figure by 1800?",c:["£14.7 million","£23.5 million","£43.2 million","£65 million"],a:[2],w:"£43.2 million — via £14.7 million in 1760. It roughly tripled between 1760 and 1800."},
{t:"Machines",q:"Textiles accounted for what share of UK manufactured exports?",c:["30–50%","50–70%","70–90%","Over 95%"],a:[2],w:"70–90%."},
{t:"Machines",q:"UK population grew from 5–6.5 million in 1700 to roughly what by 1801?",c:["7–8 million","9–11 million","13–15 million","18–20 million"],a:[1],w:"9–11 million — roughly double."},
{t:"Machines",q:"Who developed the water frame, and what was its key innovation?",c:["James Watt — it used coal","Richard Arkwright — it shifted power from human muscle to water","John Kay — it doubled weaving speed","James Hargreaves — it spun many spindles at once"],a:[1],w:"Arkwright. The deck dates it 1768; the patent was 1769."},
{t:"Machines",q:"What was Richard Arkwright's original trade?",c:["Weaver","Barber and wig maker","Blacksmith","Merchant"],a:[1],w:"A barber and wig maker who recognised the commercial potential of the technology."},
{t:"Machines",q:"Why did the water frame create the factory system?",c:["It required skilled operators who had to be trained together","It was too heavy to run in a home, so it needed dedicated buildings","Guilds required centralised production","It needed coal delivered in bulk"],a:[1],w:"Earlier machines were light enough for cottage work. The water frame was not — and mills had to sit on perennial streams, so production concentrated there."},
{t:"Machines",q:"Cromford Mill (Derbyshire, 1771) is significant as:",c:["The first steam-powered mill","The first water-powered cotton spinning mill in the world","The largest mill in Lancashire","The first mill to employ children"],a:[1],w:"The first water-powered cotton spinning mill in the world, and now a UNESCO World Heritage Site."},
{t:"Machines",q:"A typical Arkwright-type mill employed how many workers?",c:["30–40","100–150","300–400","1,000–1,200"],a:[2],w:"300–400 workers and 25–40+ machines."},
{t:"Machines",q:"What happened in 1785 that transformed the scale of the industry?",c:["The steam engine was patented","Arkwright's patents were invalidated by the courts","The Factory Act was passed","The Bridgewater Canal opened"],a:[1],w:"Patent invalidation opened the field: 143 Arkwright-type water mills by 1788, and 300 large centralised factories by 1800."},
{t:"Machines",q:"Who patented the steam engine, and in what year?",c:["Richard Arkwright, 1769","James Watt, 1781","Thomas Newcomen, 1712","George Stephenson, 1814"],a:[1],w:"James Watt, 1781, as taught in this course."},
{t:"Machines",q:"The decisive advantage of steam over water power was:",c:["It was cheaper to run","It freed factories from having to sit on fast-flowing rivers","It required no fuel","It produced less pollution"],a:[1],w:"Geographical liberation. Steam needs only stored water, plus coal — so factories could move to coalfields, transport routes and labour."},
{t:"Machines",q:"What new dependency did the steam engine create?",c:["Water storage","Coal","Iron","Skilled engineers"],a:[1],w:"Coal, and the canals, railways and ports needed to move it."},
{t:"Machines",q:"In a steam engine, what does the condenser do?",c:["Heats the coal more efficiently","Cools steam back into water so it can be reused","Regulates the piston speed","Converts rotation into linear motion"],a:[1],w:"It recycles the steam, allowing continuous reuse of the water."},
{t:"Machines",q:"Manchester's population grew from 20,000 in 1771 to roughly what by 1851?",c:["60,000","150,000","300,000","500,000"],a:[2],w:"About 300,000 — a fifteen-fold increase. It had zero cotton mills in 1771 and 50 by 1802."},
{t:"Machines",q:"Manchester was nicknamed:",c:["The Workshop of the World","Cottonopolis","Steam City","The Mill Town"],a:[1],w:"Cottonopolis. At its peak it produced roughly 70–80% of the world's cotton textiles."},
{t:"Machines",q:"Which advantages made Manchester the centre of cotton production? (Select all)",multi:true,c:["South Lancashire coalfields 16 km away via the Bridgewater Canal","Liverpool port 30–40 km away importing raw cotton","A growing urban labour supply","Local cotton cultivation"],a:[0,1,2],w:"Cotton was not grown locally — it was imported from North America and India through Liverpool."},
{t:"Machines",q:"The Bridgewater Canal opened in:",c:["1751","1761","1771","1781"],a:[1],w:"1761, carrying coal from the South Lancashire coalfields."},
{t:"Machines",q:"What happened in Lancashire in 1779?",c:["The first steam mill opened","Machine-breaking riots, including the burning of Arkwright's mill","Parliament banned child labour","The spinning jenny was patented"],a:[1],w:"Workers saw machines as the symbol of their exploitation. Conditions were 10–14 hour days, low wages and widespread child labour."},
{t:"Machines",q:"Both John Kay and James Hargreaves faced what?",c:["Bankruptcy from patent fees","Mob attacks on their property by workers fearing job loss","Imprisonment for debt","Guild expulsion"],a:[1],w:"A mob attacked Kay's premises in 1753 and he fled to France; spinners broke into Hargreaves' house in Blackburn in 1768."},
{t:"Machines",q:"Put these thinkers in the order the lecture gave:",c:["Marx and Engels in the 1770s, Adam Smith in the 1850s","Adam Smith in the 1770s, Marx and Engels in the 1850s","Both in the 1770s","Both in the 1850s"],a:[1],w:"Smith on markets and individual enterprise first; Marx and Engels on labour, capital and factory conditions eighty years later, once there were factory conditions to write about."},
{t:"Machines",q:"Steam mill towns were organised around:",c:["Ports","Religious centres","Factory production","Agricultural markets"],a:[2],w:"That is what made them new. India's later parallels are Jamshedpur, Bokaro and Rourkela, organised around steel."}
];

/* ===================================================================
   Assemble the course object the shared renderer consumes.
   =================================================================== */
window.COURSE = {
  slug: "economic-business-history",
  eyebrow: "IIT Jodhpur · B.S. Management & Technology · Semester 1",
  heading: "Economic &amp; Business History<br>Quiz 1 Revision",
  sub: "Modules 1 to 3, from all 16 lectures — compressed for a 15-minute MCQ paper. Built from the lecture summaries, full transcripts and the fifteen PDF decks.",

  briefTag: "quoted from Live Lecture 3",
  briefLede: "Dr. Manu Kanchan set out the format in the live session of 20 September. He was unusually specific about some things and deliberately vague about others — both are worth knowing.",
  briefHtml: `
    <div class="grid2">
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">What he actually said</h4>
        <ul style="margin:0;padding-left:19px;font-size:14.5px;line-height:1.7">
          <li><strong>27 September</strong>, in the usual doubt-clearing slot. The official schedule fixes it at <strong>12:15–12:30 PM</strong> — join from 12:00.</li>
          <li><strong>15 minutes</strong> (he said &ldquo;15 to 20&rdquo; at one point; the schedule says 15).</li>
          <li><strong>&ldquo;40 to 50 questions. It can reach to 60 as well. There's no fixed number in the MCQ.&rdquo;</strong> Treat the count as genuinely open.</li>
          <li><strong>MCQ only</strong> — &ldquo;it will not be any descriptive questions&rdquo;. But: <strong>&ldquo;it may have more than one answer for a single question&rdquo;</strong>.</li>
          <li>The paper may be marked out of <strong>30 or 40</strong> and scaled to 20 afterwards.</li>
        </ul>
      </div>
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">Marking — not the same as your other courses</h4>
        <div class="scroller"><table><thead><tr><th>Component</th><th>Weight</th></tr></thead><tbody>
          <tr><td>Quizzes — 3 held, <strong>best 2 of 3</strong> counted</td><td><strong>40%</strong> (2 &times; 20%)</td></tr>
          <tr><td>Major examination (December)</td><td><strong>60%</strong></td></tr>
        </tbody></table></div>
        <div class="warnbox" style="margin-top:12px">
          <b>Each quiz here is worth 20%</b>, not the 15% you get in Foundations of Computing — and this course has <b>no class-participation component</b>. Confirmed on the &ldquo;Course Outline and Evaluation&rdquo; deck, so this is the authoritative version.
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:14px;border-left:3px solid var(--clay)">
      <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">The syllabus, and its one ambiguity</h4>
      <p style="font-size:14.5px;color:var(--ink-2)">He gave the scope twice, in two ways that do not quite line up:</p>
      <ul style="margin:10px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7">
        <li><strong>The narrow reading:</strong> &ldquo;the syllabus which is there is <strong>till lecture 10</strong>&hellip; including today's lecture.&rdquo; He said this several times. His numbered decks stop at <em>Lec 10</em>, which is <em>Beginning of Machines Usage</em> — and lectures #15 and #16 have <strong>no deck at all</strong>, which supports this reading.</li>
        <li><strong>The broad reading:</strong> &ldquo;whatever videos have been released till today, that is <strong>till 20th of September</strong>, all those things will be part of the quiz&rdquo;, and separately &ldquo;the syllabus covered in <strong>15 to 16 sessions</strong> will come under this particular quiz.&rdquo;</li>
      </ul>
      <p style="font-size:14.5px;margin-top:11px"><strong>This sheet covers everything</strong>, with the two sections beyond the stated cut-off — the water frame and factories, and steam and Manchester — marked as such. They are also the most memorable material in the course, so they are cheap to learn either way.</p>
    </div>

    <div class="card" style="margin-top:14px">
      <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">Sitting a paper with no fixed question count</h4>
      <p style="font-size:14.5px;color:var(--ink-2)">15 minutes for somewhere between 40 and 60 questions is <strong>15 to 22 seconds each</strong>. Three consequences:</p>
      <ul style="margin:10px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7">
        <li><strong>Scroll to the end first</strong> and see how many there actually are, then set your pace. He warned the count could be at the top of the range.</li>
        <li><strong>Dates and names are the whole game.</strong> At this speed you cannot reason — Kay 1733, Hargreaves 1764, Arkwright 1768/9, Watt 1781, Midland Revolt 1607, Henry II 1155.</li>
        <li><strong>Multi-answer questions exist.</strong> He confirmed it. Read the stem, commit, move on.</li>
      </ul>
    </div>`,

  mapLede: "All 16 lectures, taught by Dr. Manu Kanchan. The three live sessions revise the recorded ones, so anything repeated in both is worth twice the attention.",
  syllabusNote: "Modules 1–3",

  drillLede: "Questions written from the lectures, the transcripts and the decks. There is no official practice set for this course — unlike Foundations of Computing, the decks carry no &ldquo;test your knowledge&rdquo; slides. Turn the pacer on to rehearse the real tempo.",

  footer: "Compiled 26 September 2026 from the IITJ LMS: 16 lecture AI-summaries, 16 full transcripts (785,000 characters) and 15 PDF decks. Quiz format and syllabus quoted from the Live Lecture 3 recording of 20 September; weighting from the &ldquo;Course Outline and Evaluation&rdquo; deck; timings from the official exam schedule. Topic weightings are an estimate, not an official mark scheme. <strong>This is a student-made study aid, not official IIT Jodhpur or Masai School course material</strong> — always check the LMS for the authoritative syllabus and quiz details.",

  lectures: LECTURES,
  weights:  WEIGHTS,
  traps:    TRAPS,
  questions: Q,
  sections: SECTION_META.map(m => Object.assign({}, m, {topics: SECTIONS["s-" + m.id]}))
};
