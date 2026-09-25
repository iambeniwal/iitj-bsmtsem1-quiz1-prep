/* ===================================================================
   Principles of Marketing — Quiz 1
   Dr. Anuj Pal Kapoor. Built from the lecture summaries and full
   transcripts on the IITJ LMS, 26 September 2026.
   Scope per the announcement: all topics covered to 27 September.
   =================================================================== */

const LECTURES=[
 [1,"Introduction — Principles of Marketing","Course aims","rec"],
 [2,"Week 1 — Introduction to Marketing","Anticipation, marketing vs selling, top and bottom line","rec"],
 [3,"Week 1 — Fundamentals and Core Marketing Concepts","AMA definition, need/want/demand, demand states","rec"],
 [4,"Week 1 — Live Lecture 1","Course frame, evaluation","live"],
 [5,"Week 2 — Customer Perceived Value","Benefits minus costs","rec"],
 [6,"Week 2 — Marketing as an Exchange System","Micro and macro environment, exchange/transaction/relationship","rec"],
 [7,"Week 2 — Live Lecture 2","Perceived value discussion","live"],
 [8,"Week 3 — Value Purchase Chain","Existing vs desired state, the chain","rec"],
 [9,"Week 3 — Customer Satisfaction and Loyalty","Context, the loyalty economics","rec"],
 [10,"Week 3 — Live Lecture 3","Revision","live"],
 [11,"Week 4 — Understanding and Segmenting Markets 1","Geographic, demographic, psychographic","rec"],
 [12,"Week 4 — Understanding and Segmenting Markets 2","Behavioural and benefit-based","rec"],
 [13,"Week 4 — Live Lecture 4","Segmentation discussion","live"],
 [14,"Week 5 — Choosing the Right Market","Targeting, SAFE, positioning","rec"],
 [15,"Week 5 — Why Should Customers Choose Us?","Frame of reference, POPs and PODs","rec"],
 [16,"Week 5 — Live Lecture 5","Positioning discussion","live"],
 [17,"Week 6 — Creating Competitive Meaning","POD/POP in depth, three circles","rec"],
 [18,"Week 6 — Recorded Lecture","Consumer behaviour, heuristics, nudges","rec"]
];

const WEIGHTS=[
 ["Segmentation",14],["Positioning: POP &amp; POD",14],["Core concepts",13],
 ["Satisfaction &amp; loyalty",12],["Customer perceived value",11],["Targeting",10],
 ["Consumer behaviour",10],["What marketing is",8],["Exchange system",8]
];

const SECTION_META=[
 {id:"what", navLabel:"What marketing is", title:"What marketing is",
  tag:"Lectures 2, 3",
  lede:"The definition, the marketing-versus-selling distinction, and three companies that died because they could not anticipate."},
 {id:"core", navLabel:"Core concepts", title:"Need, want, demand &amp; what can be marketed",
  tag:"Lecture 3",
  lede:"The triad, five kinds of need, eight demand states, and the ten things that can be marketed. Dense and highly listable — ideal MCQ territory."},
 {id:"value", navLabel:"Perceived value", title:"Customer perceived value",
  tag:"Lecture 5",
  lede:"Benefits minus costs — where both halves are broader than they first appear."},
 {id:"exchange", navLabel:"Exchange", title:"The marketing environment &amp; exchange system",
  tag:"Lecture 6",
  lede:"Micro versus macro environment, and the three-way distinction between exchange, transaction and relationship."},
 {id:"chain", navLabel:"Value chain", title:"The value purchase chain, satisfaction &amp; loyalty",
  tag:"Lectures 8, 9",
  lede:"Existing versus desired state, then the chain from value to loyalty. The loyalty statistics are exactly the kind of thing a quiz asks for."},
 {id:"seg", navLabel:"Segmentation", title:"Segmentation",
  tag:"Lectures 11, 12 · the S in STP",
  lede:"Five bases of segmentation, each with a brand example he worked through in detail."},
 {id:"target", navLabel:"Targeting", title:"Targeting",
  tag:"Lecture 14 · the T in STP",
  lede:"The SAFE framework and the two assumptions that trap organisations."},
 {id:"pos", navLabel:"Positioning", title:"Positioning: frame of reference, POPs &amp; PODs",
  tag:"Lectures 14, 15, 17 · the P in STP",
  lede:"The most recent material, and the richest in case studies. Dettol versus Savlon is the one to know cold."},
 {id:"cb", navLabel:"Consumer behaviour", title:"Consumer behaviour",
  tag:"Lecture 18 · newest",
  lede:"Three eras of thinking about the consumer, and the difference between a heuristic and a nudge."}
];

const SECTIONS={
"s-what":[
 {t:"Marketing, and why anticipation is the core",src:"L#2 · L#3",h:`
  <div class="def"><b>AMA definition:</b> marketing is the <b>activity, set of institutions and processes for creating, communicating, delivering and exchanging offerings</b> that have value for <b>customers, clients, partners and society at large</b>.</div>
  <p style="font-size:15px">Its four-step form: <strong>understand → create → communicate → deliver</strong> value.</p>
  <div class="def">The function marketing performs for an organisation is <b>anticipation</b> — seeing where consumer needs are going before competitors do.</div>
  <h4>Three firms that failed to anticipate</h4>
  <div class="scroller"><table><thead><tr><th>Firm</th><th>Disrupted by</th><th>What happened</th></tr></thead><tbody>
   <tr><td><strong>BlackBerry</strong></td><td>iPhone (<strong>2007</strong>), then Android (2008)</td><td>Stock slid, bottomed around 2010, eventual bankruptcy</td></tr>
   <tr><td><strong>Hertz</strong></td><td><strong>Uber</strong></td><td>Owning a fleet meant high capital and maintenance cost; Uber's <strong>asset-light</strong> model won</td></tr>
   <tr><td><strong>Blockbuster</strong></td><td><strong>Netflix</strong></td><td>Its CEO dismissed Netflix as no threat. Netflix added personalised recommendations and then streaming</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">The pattern he drew: a <strong>gradual decline followed by a sudden collapse</strong>. Firms that anticipate pivot before the cliff.</p>`},
 {t:"Marketing vs selling",src:"L#2 · L#3",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Marketing</th><th>Selling</th></tr></thead><tbody>
   <tr><td><strong>Direction</strong></td><td><strong>Outside-in</strong> — bring market knowledge into the organisation</td><td><strong>Inside-out</strong> — push a finished product out</td></tr>
   <tr><td><strong>Starts</strong></td><td><strong>Before</strong> the product exists</td><td><strong>After</strong> it is made</td></tr>
   <tr><td><strong>Focus</strong></td><td>Consumer needs</td><td>Product attributes and features</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>The pen example.</strong> Selling: &ldquo;it writes flawlessly, good grip, black.&rdquo; Marketing: &ldquo;ballpoint or ink? what's your budget? fine or broad nib?&rdquo;</p>
  <div class="warnbox"><b>They are not rivals.</b> Marketing creates awareness and communicates value; <b>sales completes the transaction</b>. Marketing precedes and enables selling — neither works alone.</div>
  <h4>Top line and bottom line</h4>
  <p style="font-size:14.5px"><strong>Top line = revenue.</strong> <strong>Bottom line = profit = sales − cost.</strong> There must be a top line for there to be a bottom line.</p>
  <p style="font-size:14.5px"><strong>His cold coffee sum:</strong> ₹120 a glass × 80 glasses = <strong>₹9,600</strong> revenue; ₹70 cost × 80 = <strong>₹5,600</strong>; profit <strong>₹4,000</strong>.</p>
  <p style="font-size:14.5px;color:var(--ink-2)">Quotes he used: Steve Jobs — &ldquo;marketing is about <strong>meeting needs profitably</strong>&rdquo;. Seth Godin — marketing is not about selling more, but <strong>making better things</strong>.</p>`}
],

"s-core":[
 {t:"Need, want, demand",src:"L#3 · core definition",h:`
  <div class="scroller"><table><thead><tr><th>Term</th><th>Definition</th><th>Example</th></tr></thead><tbody>
   <tr><td><strong>Need</strong></td><td>A <strong>basic human requirement</strong>. Biological or fundamental. <strong>Pre-exists</strong></td><td>Hunger</td></tr>
   <tr><td><strong>Want</strong></td><td>A need <strong>directed at a specific object</strong>. Shaped by marketing, culture, preference</td><td>Pizza, tandoori chicken, vada pav</td></tr>
   <tr><td><strong>Demand</strong></td><td>A want <strong>backed by ability to pay</strong></td><td>With ₹20 in your pocket, only the vada pav is demand</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The principle he repeated:</b> <b>marketers do not create needs</b> — needs pre-exist. Marketers <b>shape wants</b> and <b>influence demand</b> through pricing, availability and promotion.</div>
  <p style="font-size:14.5px"><strong>Starbucks:</strong> consumers in tier-3 cities may <em>want</em> it, but only in tier-1 cities is there the ability to pay ₹300 for a coffee — so only there is it <strong>demand</strong>.</p>
  <h4>The five types of need</h4>
  <div class="scroller"><table><thead><tr><th>Type</th><th>Means</th><th>Car example</th></tr></thead><tbody>
   <tr><td><strong>Stated</strong></td><td>What the customer literally asks for</td><td>&ldquo;I want a car&rdquo;</td></tr>
   <tr><td><strong>Real</strong></td><td>The meaning <strong>behind</strong> the stated need</td><td>A car with <strong>low running costs</strong>, not just a low price</td></tr>
   <tr><td><strong>Unstated</strong></td><td>Expected but never said aloud</td><td>Good service and a warranty</td></tr>
   <tr><td><strong>Delight</strong></td><td>Non-essential extras that please</td><td>A built-in GPS they never asked for</td></tr>
   <tr><td><strong>Secret</strong></td><td>Intangible, usually unspoken</td><td>Buying for <strong>status</strong>, not transport</td></tr>
  </tbody></table></div>`},
 {t:"The eight demand states",src:"L#3 · highly listable",h:`
  <div class="scroller"><table><thead><tr><th>State</th><th>Meaning</th><th>His example</th></tr></thead><tbody>
   <tr><td><strong>Negative</strong></td><td>Consumers <strong>actively avoid</strong> it and may pay to avoid it</td><td>Dentist appointments · paying for ad-free music</td></tr>
   <tr><td><strong>Non-existent</strong></td><td>Unaware of or uninterested in the product</td><td>BlackBerry Key2</td></tr>
   <tr><td><strong>Latent</strong></td><td>A <strong>strong need no current product satisfies</strong></td><td>Wanting a better phone camera than anything on sale</td></tr>
   <tr><td><strong>Declining</strong></td><td>Bought less and less over time</td><td>Floppy disks, CDs, LCDs</td></tr>
   <tr><td><strong>Irregular</strong></td><td><strong>Seasonal</strong> or fluctuating</td><td>Air conditioners and coolers · seasonal fruit</td></tr>
   <tr><td><strong>Full</strong></td><td>Consistently bought at adequate levels</td><td>Over-the-counter medicines</td></tr>
   <tr><td><strong>Overfull</strong></td><td><strong>Demand exceeds supply</strong></td><td>Bread and milk selling out</td></tr>
   <tr><td><strong>Unwholesome</strong></td><td>Real demand, but <strong>socially undesirable</strong></td><td>Cigarettes, tobacco, alcohol</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The two most confused:</b> <b>negative</b> demand means people will pay to <em>avoid</em> it; <b>non-existent</b> means they simply don't know or care. And <b>latent</b> demand is unmet need, not weak need.</div>`},
 {t:"The ten things that can be marketed",src:"L#3",h:`
  <div class="scroller"><table><thead><tr><th>Entity</th><th>His example</th></tr></thead><tbody>
   <tr><td><strong>Goods</strong></td><td>Apple Watch</td></tr>
   <tr><td><strong>Services</strong></td><td>Salons — BBlunt, Toni &amp; Guy, local; each a different value proposition</td></tr>
   <tr><td><strong>Experiences</strong></td><td><strong>Imagica</strong> sells happiness and memories, not rides · Sunburn · Coca-Cola's <strong>&ldquo;Make a Friend&rdquo;</strong> vending machines across the India–Pakistan border</td></tr>
   <tr><td><strong>Financial services</strong></td><td><strong>American Express</strong> — markets the experience, &ldquo;the gateway to great experiences&rdquo;, not the card</td></tr>
   <tr><td><strong>Persons</strong></td><td>Dwayne Johnson (Papatui) · Oprah · Hrithik Roshan (<strong>HRX</strong>) · Virat Kohli · Kriti Sanon (Hyphen)</td></tr>
   <tr><td><strong>Places</strong></td><td><strong>Rajasthan Tourism</strong> — &ldquo;Agar Neha ne Rajasthan dekha…&rdquo;</td></tr>
   <tr><td><strong>Properties</strong></td><td>World Towers Mumbai · Trump Towers Delhi · <strong>The Camellias</strong>, Gurgaon at ₹85–100 crore</td></tr>
   <tr><td><strong>Organizations</strong></td><td>Harvard Business School — faculty, students, legacy</td></tr>
   <tr><td><strong>Information</strong></td><td><strong>NIRF rankings</strong> · AACSB accreditation</td></tr>
   <tr><td><strong>Ideas</strong></td><td>Zomato's &ldquo;Hungry&rdquo; New Year campaign · Blinkit's two-minute promise</td></tr>
  </tbody></table></div>
  <div class="def">The marketing system has two halves — <b>industry (the sellers)</b> and <b>market (the buyers)</b> — joined by <b>four flows</b>: communication and goods/services going out, <b>money and information</b> coming back.</div>`}
],

"s-value":[
 {t:"Customer perceived value",src:"L#5",h:`
  <div class="def"><b>Customer perceived value = benefits − costs.</b> It is a calculation in the consumer's mind, and it is <b>subjective and contextual</b> — not the printed price.</div>
  <h4>The chai illustration</h4>
  <p style="font-size:14.5px"><strong>₹20</strong> roadside — casual. <strong>₹250</strong> café — a business meeting, where ambience manages impressions. <strong>₹500</strong> airport — when there is no alternative. <strong>Same product, three different values.</strong></p>
  <h4>The four benefits</h4>
  <div class="scroller"><table><thead><tr><th>Benefit</th><th>Means</th><th>Its limit</th></tr></thead><tbody>
   <tr><td><strong>Psychological</strong></td><td>The core functional advantage — a jacket keeping you warm</td><td>Capped by how warm a jacket can be</td></tr>
   <tr><td><strong>Functional</strong></td><td>Practical features — pockets, hood, wind resistance</td><td>Design limits, and <strong>cognitive overload</strong> from too many features</td></tr>
   <tr><td><strong>Economic</strong></td><td>Monetary value and savings</td><td>Cannot be cut indefinitely without losses</td></tr>
   <tr><td><strong>Extended psychological</strong></td><td>How <strong>others perceive you</strong> for owning it — status and image</td><td><strong>No inherent limit</strong> — which is why brands invest here</td></tr>
  </tbody></table></div>
  <h4>The costs — wider than price</h4>
  <p style="font-size:14.5px"><strong>Direct:</strong> the price paid. <strong>Abstract:</strong> time, effort and energy, psychological stress (worrying about parking and traffic), and disposal or after-sales considerations.</p>
  <p style="font-size:14.5px">Ordering ice cream on an app may cost <em>more money</em> but <strong>less abstract cost</strong> — no travel, no parking — and so deliver more perceived value.</p>
  <div class="warnbox"><b>Two levers, and one trap.</b> Organisations raise value by <b>increasing benefits</b> or <b>reducing costs</b>. The trap: <b>more features does not mean more value</b> — past a point it is cognitive overload.</div>
  <p style="font-size:14.5px"><strong>Denim ladder:</strong> generic ₹1,000–1,500 · Levi's ₹3,900–5,900 · Armani ₹25,000–50,000. Physically similar; the gap is <strong>extended psychological benefit</strong>.</p>
  <div class="def"><b>Features vs benefits.</b> A feature is what the product <em>has</em> — memory foam. A benefit is <b>why you should care</b> — better sleep. Effective marketing communicates <b>benefits</b>.</div>`}
],

"s-exchange":[
 {t:"The marketing environment",src:"L#6",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Task (micro) environment</th><th>Broad (macro) environment</th></tr></thead><tbody>
   <tr><td><strong>Contains</strong></td><td><strong>Suppliers · customers · competitors</strong></td><td><strong>Demographic · political-legal · economic · socio-cultural · physical · technological</strong></td></tr>
   <tr><td><strong>Nature</strong></td><td>Immediate, directly interacted with</td><td>Indirect factors that must be accounted for</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>Macro examples he gave:</strong> demographic (age, income) · political-legal (minimum wage, food safety) · economic (<strong>GST reform</strong>, recession, inflation) · socio-cultural (dietary preference) · physical (climate) · technological (floppy disk → cloud, <strong>UPI</strong>).</p>`},
 {t:"Exchange, transaction, relationship",src:"L#6 · a clean three-way distinction",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Exchange</th><th>Transaction</th><th>Relationship</th></tr></thead><tbody>
   <tr><td><strong>What</strong></td><td>Offering and receiving <strong>something of value</strong></td><td>An <strong>agreed</strong> exchange, terms defined</td><td>An <strong>ongoing series</strong> of exchanges and transactions</td></tr>
   <tr><td><strong>Money?</strong></td><td><strong>Not necessarily</strong> — can be information, time, effort, trust</td><td><strong>Always</strong> involves money or monetary value</td><td>Built across many</td></tr>
   <tr><td><strong>Timeframe</strong></td><td>Broad</td><td>A <strong>specific moment</strong></td><td>Extended, many touchpoints</td></tr>
   <tr><td><strong>Outcome</strong></td><td>The foundation of marketing</td><td>A completed sale</td><td><strong>Loyalty and advocacy</strong></td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The examinable line:</b> exchange is the broad category; a <b>transaction is the specific moment money changes hands</b>; a relationship is many of them over time. In the Zomato journey, most steps are exchanges — only <b>payment confirmation</b> is the transaction.</div>
  <h4>What is actually exchanged, on a food delivery order</h4>
  <p style="font-size:14.5px"><strong>You give:</strong> money, <strong>personal data</strong> (address, preferences), time spent browsing, attention, trust, ratings and reviews.<br>
  <strong>You receive:</strong> the meal, <strong>convenience</strong>, information (ratings, reviews), choice, and <strong>transparency</strong> through live tracking.</p>
  <p style="font-size:14.5px">The wider exchange economy: <strong>resource → manufacturing → intermediary → consumer markets</strong>, with the <strong>government market sitting centrally</strong>, exchanging taxes and services with all of them.</p>`}
],

"s-chain":[
 {t:"Existing state, desired state and the gap",src:"L#8",h:`
  <div class="def"><b>Existing state (ES)</b> is where the consumer is now. <b>Desired state (DS)</b> is where they want to be. The <b>gap between them</b> is what motivates a purchase.</div>
  <p style="font-size:15px">If ES and DS are aligned, the consumer sees no reason to buy. Marketers therefore work to <strong>break that inertia</strong> in three ways:</p>
  <div class="scroller"><table><thead><tr><th>Move</th><th>Means</th><th>His example</th></tr></thead><tbody>
   <tr><td><strong>Reduce the existing state</strong></td><td>Highlight what is wrong now</td><td><strong>Itch Guard</strong> — the embarrassment of scratching in public</td></tr>
   <tr><td><strong>Elevate the desired state</strong></td><td>Show a more aspirational life</td><td><strong>Kohler</strong> — premium quality and status</td></tr>
   <tr><td><strong>Both at once</strong></td><td>Reduce ES and raise DS together</td><td><strong>Clean &amp; Clear</strong> — oily skin, and the confidence you could have</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>The larger the gap, the stronger the motivation</strong> to close it by buying.</p>
  <h4>The value purchase chain</h4>
  <p style="font-size:15px"><strong>Value creation → purchase intention → actual purchase → experience → satisfaction → loyalty</strong></p>
  <p style="font-size:14.5px;color:var(--ink-2)">Impulse purchases can skip the intention step. Run in reverse, a negative gap means value is not recognised, so intention, purchase, satisfaction and loyalty all stay low.</p>`},
 {t:"Satisfaction and loyalty",src:"L#8 · L#9",h:`
  <div class="def"><b>Satisfaction is transaction-based</b> — it compares <b>expectation</b> against <b>perceived performance</b> on a single occasion. <b>Loyalty is repeated satisfaction over time</b>, sustained when better alternatives exist.</div>
  <h4>The two students — identical service, opposite ratings</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Student 1</th><th>Student 2</th></tr></thead><tbody>
   <tr><td><strong>Expected</strong></td><td>25 minutes, from past fast orders</td><td>45–50 minutes, because of heavy rain</td></tr>
   <tr><td><strong>Received</strong></td><td colspan="2"><strong>34 minutes, warm food, intact packaging, no cutlery — for both</strong></td></tr>
   <tr><td><strong>Rated</strong></td><td><strong>2 stars</strong>, likely to switch app</td><td><strong>5 stars</strong>, likely to become loyal</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The point:</b> satisfaction is not objective performance. It is performance <em>relative to the expectation the consumer already held</em> — and context sets that expectation.</div>
  <ul>
   <li><strong>Asymmetric impact:</strong> failing to meet expectations hurts <strong>more</strong> than exceeding them helps.</li>
   <li>There is an <strong>upper limit</strong> too — pizza delivered in 10 minutes can make people doubt it is genuine.</li>
   <li><strong>A satisfied customer is not automatically loyal.</strong> Someone very happy with Zomato may still switch to Swiggy for a 50% discount. Loyalty is choosing you <em>despite</em> alternatives.</li>
   <li>Loyalty cannot be bought with rewards alone — without consistent satisfaction, no reward scheme creates it.</li>
  </ul>
  <h4>The loyalty economics — memorise these numbers</h4>
  <div class="scroller"><table><thead><tr><th>Metric</th><th>Figure</th></tr></thead><tbody>
   <tr><td>Conversion rate, <strong>loyal</strong> customers</td><td><strong>60–70%</strong></td></tr>
   <tr><td>Conversion rate, <strong>new</strong> customers</td><td><strong>5–8%</strong></td></tr>
   <tr><td>A <strong>5%</strong> rise in retention raises profit by</td><td><strong>20–90%</strong></td></tr>
   <tr><td>Cost of acquiring a new customer vs retaining one</td><td><strong>5× more</strong> — $100 against roughly $20</td></tr>
   <tr><td>Repeat customers within two years spend</td><td>More than <strong>twice</strong> their original outlay</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>AirPods vs Bose:</strong> Bose had better audio, but Apple won on <strong>ecosystem integration</strong>, design, and the flexibility of a single earbud. Satisfaction depends on expectation versus perceived performance, <strong>not on technical quality alone</strong>.</p>`}
],

"s-seg":[
 {t:"Why segment at all",src:"L#11 · L#12",h:`
  <div class="def"><b>Segmentation</b> is finding <b>meaningful groups</b> within a market whose members are similar enough to be marketed to differently.</div>
  <div class="def">The market reality that makes it necessary is <b>market heterogeneity</b> — consumers genuinely differ in who they are, what they want, why they buy and how they buy.</div>
  <p style="font-size:14.5px">A market looks homogeneous from a distance. Zoom in on 100 Netflix viewers and you find K-drama, true crime, anime, sitcom, documentary and scroller segments — each needing different messaging.</p>
  <div class="warnbox"><b>Segmentation is not just dividing people up.</b> The divisions must be <b>meaningful, usable and actionable</b>. Without it a product is <em>acceptable to many but relevant to few</em> — his face-serum example.</div>
  <p style="font-size:14.5px"><strong>Within a segment consumers are similar; between segments they are different.</strong> That is the test.</p>
  <p style="font-size:14.5px">Two firms <strong>can</strong> segment the same market differently — it depends on their objectives, resources and positioning goals. And <strong>age alone is not a useful segment</strong>: 18–25-year-olds want wildly different things. It becomes useful only combined with benefits sought or psychographics.</p>`},
 {t:"The five bases of segmentation",src:"L#11 · L#12 · know one example each",h:`
  <div class="scroller"><table><thead><tr><th>Basis</th><th>Divides by</th><th>His worked example</th></tr></thead><tbody>
   <tr><td><strong>Geographic</strong></td><td>Location and climate</td><td><strong>Zudio/Zodio (Tata)</strong> — winter layers in Delhi, monsoon-friendly in Mumbai, casual streetwear in Bangalore</td></tr>
   <tr><td><strong>Demographic</strong></td><td>Measurable traits — age, gender, income, education</td><td><strong>Bajaj Pulsar</strong> — males 17–24, &ldquo;Definitely Male&rdquo; · <strong>L'Oréal</strong> face cream at 20+, 30+, 40+</td></tr>
   <tr><td><strong>Psychographic</strong></td><td><strong>How people think</strong> — lifestyle, values, attitudes</td><td><strong>Nike</strong> — fitness-focused, sport aspirers, style and status (Air Jordan), sustainability conscious (Move to Zero)</td></tr>
   <tr><td><strong>Behavioural</strong></td><td><strong>How people act</strong> — usage rate, mode of usage, purchase frequency, pack size, promotional sensitivity</td><td><strong>Surf Excel</strong> — heavy users, machine-wash users, occasional users, value seekers</td></tr>
   <tr><td><strong>Benefit-based</strong></td><td><strong>What people want from it</strong></td><td><strong>Colgate</strong> — Strong Teeth, Max Fresh, Visible White, Sensitive, Total</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>L'Oréal's trick:</strong> the three age variants are <strong>70–80% identical in ingredients</strong>. What differs is the <em>benefit communicated</em> — and the brand ambassador changes over time to stay relatable.</p>
  <p style="font-size:14.5px"><strong>Surf Excel's payoff:</strong> without segmentation roughly <strong>25%</strong> of potential consumers would buy; with behavioural segmentation the company can reach up to <strong>75%</strong>.</p>
  <div class="warnbox"><b>Psychographic vs behavioural is the pair most often confused.</b> Psychographic is how someone <em>thinks</em> — values, lifestyle, attitude. Behavioural is what they <em>do</em> — how often they buy, what pack size, whether discounts move them.</div>
  <p style="font-size:14.5px;color:var(--ink-2)">Among the 15 psychographic segments he listed: fitness oriented, sustainability conscious, tech enthusiasts, minimalists, status conscious, experience seekers, food explorers, convenience seekers, value-conscious, socially connected, adventure oriented, productivity focused.</p>`}
],

"s-target":[
 {t:"Targeting and the SAFE framework",src:"L#14",h:`
  <div class="def"><b>Targeting</b> is evaluating segments and deciding which one or ones to focus on. It exists because budgets are finite — <b>&ldquo;if everyone is your priority, nobody is your priority.&rdquo;</b></div>
  <div class="scroller"><table><thead><tr><th>SAFE</th><th>Ask</th></tr></thead><tbody>
   <tr><td><strong>S — Size</strong></td><td>Is the segment big enough to justify the investment?</td></tr>
   <tr><td><strong>A — Accessibility</strong></td><td>Can we actually <strong>reach and serve</strong> it? A big market with no distribution is not viable</td></tr>
   <tr><td><strong>F — Fitment</strong></td><td>Does our brand and product <strong>align</strong> with what this segment values?</td></tr>
   <tr><td><strong>E — Economics</strong></td><td>Does serving it <strong>make financial sense</strong>?</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The two dangerous assumptions.</b> The <b>largest</b> segment is not automatically the best — volume is not the same as margin. And the <b>fastest-growing</b> segment is not automatically the best — growth means nothing without product fit and brand capability.</div>
  <h4>Three examples</h4>
  <ul>
   <li><strong>Netflix</strong> with a ₹10 crore budget for a crime thriller concentrates on the <strong>true crime</strong> segment rather than spreading across all six.</li>
   <li><strong>Spotify</strong> targeted <strong>students</strong> — not the largest segment — with subsidised Premium, and earned more overall through volume and price elasticity.</li>
   <li><strong>Running shoes:</strong> across sneakerheads, first-time runners, marathon runners and comfort walkers, <strong>first-time runners</strong> wins — high size, medium competition, high brand capability, medium willingness to pay.</li>
  </ul>`}
],

"s-pos":[
 {t:"Positioning and the frame of reference",src:"L#14 · L#15",h:`
  <div class="def"><b>Positioning</b> is designing an offering and its image so it occupies a <b>distinctive and valued place in the target consumer's mind, relative to competitors</b>.</div>
  <p style="font-size:14.5px">It is about <strong>what you do to the mind of the consumer</strong>, not only what you do to the product. Dettol means safety; Bisleri is the first name in mineral water; Coca-Cola owns the cola category. None of that is accidental.</p>
  <p style="font-size:14.5px">Good positioning keeps <strong>one foot in the present and one in the future</strong>.</p>
  <h4>The three questions</h4>
  <div class="scroller"><table><thead><tr><th>Question</th><th>Sensodyne's answer</th></tr></thead><tbody>
   <tr><td><strong>Who</strong> is the target?</td><td>People with <strong>tooth sensitivity</strong> — not those wanting whiteness or freshness</td></tr>
   <tr><td><strong>What</strong> category are we in?</td><td>Toothpaste</td></tr>
   <tr><td><strong>Why</strong> should they choose us?</td><td>Specialised <strong>sensitivity relief</strong>, unlike general-purpose Colgate or Close-Up</td></tr>
  </tbody></table></div>
  <h4>Step 1 of positioning: frame of reference</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Natural frame</th><th>Extended frame</th></tr></thead><tbody>
   <tr><td><strong>Who</strong></td><td><strong>Direct</strong> competitors — similar products</td><td><strong>Indirect</strong> competitors and substitutes</td></tr>
   <tr><td><strong>Cooking oil</strong></td><td>Saffola, Dhara, Fortune</td><td><strong>Olive oil, ghee, mustard oil</strong> — as health consciousness rises</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The Maruti Gypsy lesson.</b> Launched <b>1985</b> as India's first SUV with no direct competitor, it defined only its <b>natural</b> frame and ignored the <b>extended</b> one. Tata Sumo and Mahindra Scorpio arrived with AC, power steering, power windows, better mileage and better seating — and the Gypsy's share collapsed despite the affection for it.</div>
  <h4>Multi-segment positioning without dilution</h4>
  <p style="font-size:14.5px"><strong>Accor:</strong> <strong>Ibis</strong> economy (₹3,000–4,000) · <strong>Novotel and Mercure</strong> mid-range (₹5,000–7,000) · <strong>Pullman and Sofitel</strong> premium (₹9,000–15,000+). One parent, distinct positions, no brand dilution. <strong>ITC</strong> does the same with five-star properties alongside boutique chains.</p>`},
 {t:"POPs and PODs",src:"L#15 · L#17 · the most recent material",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Points of Parity (POP)</th><th>Points of Differentiation (POD)</th></tr></thead><tbody>
   <tr><td><strong>What</strong></td><td>Attributes <strong>shared with competitors</strong> — the bare minimum to compete</td><td><strong>Unique</strong> attributes competitors do not offer</td></tr>
   <tr><td><strong>Role</strong></td><td>Make you a <strong>credible</strong> option in the category</td><td>Make you the <strong>preferred</strong> option</td></tr>
   <tr><td><strong>Cabs</strong></td><td>Uber, Ola and Meru all provide cab service</td><td>Uber and Ola <strong>outsource</strong> drivers and cars; Meru <strong>owns its fleet</strong></td></tr>
   <tr><td><strong>Lysol</strong></td><td>Kills germs, cleans</td><td>Fragrance, shine, freshness</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Drop a POP and you lose.</b> If Lysol stopped killing germs, consumers would go straight back to ordinary phenyl however good the fragrance. <b>POPs must be maintained while PODs are built.</b></div>
  <div class="def">A <b>POD has a finite lifespan.</b> Once competitors copy it, it <b>becomes a POP</b>.</div>
  <h4>The three case studies</h4>
  <div class="scroller"><table><thead><tr><th>Brand</th><th>POP</th><th>POD</th><th>What happened</th></tr></thead><tbody>
   <tr><td><strong>Oral-B</strong></td><td>Maintains oral hygiene</td><td><strong>Colour-changing bristles</strong> — blue dye fades to white when it is time to replace</td><td>Differentiated overnight with no change in underlying technology. Once copied, it <strong>became a POP</strong></td></tr>
   <tr><td><strong>House of Quirk</strong></td><td>Furnishing a home</td><td><strong>Affordable covers and cushioning</strong> — a whole new look every ten days</td><td>Found a niche between buying furniture and buying cushion covers</td></tr>
   <tr><td><strong>Savlon</strong></td><td>Antiseptic</td><td><strong>&ldquo;No sting&rdquo;</strong>, advertised emotionally through a child feeling no pain</td><td>Took real share from Dettol</td></tr>
   <tr><td><strong>Dettol's reply</strong></td><td>Antiseptic</td><td>Reframed the sting as <strong>proof that it is working</strong></td><td>Turned its own weakness into a POD and <strong>regained leadership</strong></td></tr>
  </tbody></table></div>
  <h4>The three circles</h4>
  <p style="font-size:14.5px">Circle 1 <strong>consumer desires</strong> · Circle 2 <strong>competitor features</strong> · Circle 3 <strong>your features</strong>.</p>
  <ul>
   <li><strong>POP</strong> sits where <strong>all three</strong> overlap.</li>
   <li><strong>POD</strong> sits where <strong>consumer desire meets your features but excludes competitors</strong>.</li>
   <li>Features you and competitors both have that <strong>nobody wants</strong> are invalid positioning.</li>
  </ul>
  <p style="font-size:14.5px">A good POD must be <strong>valued by consumers, defensible, addressing a real gap, hard to replicate, and clearly communicated</strong>.</p>`}
],

"s-cb":[
 {t:"Why people buy, and the three eras",src:"L#18 · newest material",h:`
  <div class="def">People buy to <b>reach, restore, maintain or protect a desired state</b>. Marketing never operates on an empty mind — it meets existing memories, experiences, expectations, identities, biases and goals.</div>
  <div class="scroller"><table><thead><tr><th>Era</th><th>Period</th><th>View of the consumer</th></tr></thead><tbody>
   <tr><td><strong>Classical</strong></td><td><strong>1950s–60s</strong></td><td><strong>Rational.</strong> People buy only what they need; behaviour is predictable; supply and demand balance</td></tr>
   <tr><td><strong>Cognitive revolution</strong></td><td><strong>1970s–90s</strong></td><td><strong>Irrational.</strong> <strong>Kahneman and Tversky</strong> on judgement under uncertainty — decisions often have no logical basis</td></tr>
   <tr><td><strong>Contemporary</strong></td><td>Present</td><td><strong>Influenced</strong> — via heuristics and nudges</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Heuristic or nudge?</b> A <b>heuristic</b> is a <em>mental shortcut the consumer uses</em> to compare options — 800 ratings, 4.5 stars, a ₹311 discount, free delivery. A <b>nudge</b> is <em>choice architecture the marketer designs</em> that guides behaviour without restricting freedom.</div>
  <p style="font-size:14.5px"><strong>Nudge theory</strong> comes from <strong>Professor Richard Thaler</strong>. His examples: an interactive ramp by a bin that makes disposal fun · stairs placed before the lift · <strong>&ldquo;bestseller&rdquo; labels</strong> · recommendations based on past consumption.</p>`},
 {t:"Story over product",src:"L#18",h:`
  <p style="font-size:15px">Consumers respond to <strong>imagined consumption</strong> almost as strongly as to actual product information. Marketing sells the narrative, not the feature list.</p>
  <div class="scroller"><table><thead><tr><th>Case</th><th>Mechanism</th></tr></thead><tbody>
   <tr><td><strong>Swiggy mangoes</strong></td><td>Water droplets and freshness create <strong>imagined consumption</strong> — it feels like looking at real mangoes</td></tr>
   <tr><td><strong>TRIA hair treatment</strong></td><td><strong>Reduces the distance between actual self and desired self</strong>, through before-and-after narratives</td></tr>
   <tr><td><strong>Forest Essentials serum</strong></td><td>₹5,500–7,000 for 30 ml. Uses the <strong>appearance of evidence as a substitute for evaluating quality</strong> — 100%, 97%, 94% claims on a <strong>sample of just 36</strong>, which consumers overlook while assuming they are in the positive group</td></tr>
  </tbody></table></div>
  <div class="def">His summary line: consumers frequently rely on the <b>appearance of evidence</b> — how data is presented — rather than the <b>quality of evidence</b>.</div>`}
]
};

const TRAPS=[
 ["Marketers do not create needs","Needs pre-exist. Marketers shape wants and influence demand. This is his single most repeated principle.","needs exist, wants are shaped"],
 ["Demand = want + ability to pay","A want without purchasing power is not demand. The Starbucks tier-1 versus tier-3 example.","ability to pay is the test"],
 ["Marketing is outside-in, selling is inside-out","Marketing brings market knowledge in before the product exists. Selling pushes a finished product out.","in vs out"],
 ["Negative vs non-existent demand","Negative: people will pay to avoid it (the dentist). Non-existent: they simply don't know or care.","avoid vs unaware"],
 ["Latent demand is unmet, not weak","A strong need that no current product satisfies.","strong but unserved"],
 ["Perceived value is benefits minus costs, and both are wide","Costs include time, effort, stress and disposal — not just price. That is why delivery can cost more money and still deliver more value.","abstract costs count"],
 ["Extended psychological benefit has no ceiling","The other three benefits have natural limits. This one is why brands invest in image.","status scales infinitely"],
 ["More features does not mean more value","Past a point it is cognitive overload. Communicate benefits, not features.","memory foam vs better sleep"],
 ["A transaction always involves money; an exchange need not","Exchange is the broad category — time, data, trust. The transaction is the moment payment is confirmed.","money makes it a transaction"],
 ["Satisfaction is transaction-based; loyalty is repeated","And a satisfied customer is not automatically loyal — they can still switch for a 50% discount.","one purchase vs many"],
 ["Satisfaction is relative to expectation","Two students, identical 34-minute delivery, 2 stars and 5 stars. Context sets the anchor.","the anchor is in their head"],
 ["Failing to meet expectations hurts more than exceeding helps","Asymmetric impact. And exceeding too far — pizza in 10 minutes — creates suspicion.","downside is bigger"],
 ["Psychographic is how they think; behavioural is what they do","Values and lifestyle versus usage rate, pack size and promotional sensitivity. The most confused pair.","think vs do"],
 ["Age alone is not a useful segment","18–25 year olds want completely different things. Age works only combined with benefits or psychographics.","demographics need a partner"],
 ["Within segments similar, between segments different","That is the test of whether a segmentation is meaningful.","similar in, different out"],
 ["SAFE: Size, Accessibility, Fitment, Economics","The four criteria for choosing which segment to target.","S-A-F-E"],
 ["The largest segment is not automatically the best","Nor is the fastest growing. Volume is not margin, and growth is worthless without product fit.","big ≠ best"],
 ["Natural frame is direct competitors; extended is substitutes","The Maruti Gypsy defined only its natural frame and was killed by the extended one.","don't ignore substitutes"],
 ["A POD becomes a POP once copied","Oral-B's colour-changing bristles are the example. PODs have a finite lifespan.","copied = commoditised"],
 ["Dropping a POP destroys you","Lysol without germ-killing loses to ordinary phenyl however nice it smells. Maintain POPs while building PODs.","the minimum is not optional"],
 ["Dettol turned its weakness into a POD","Savlon attacked with 'no sting'; Dettol reframed the sting as proof it works, and regained leadership.","reframe, don't retreat"],
 ["Heuristic is the consumer's shortcut; nudge is the marketer's design","Ratings and discounts are heuristics. Bestseller labels and stair placement are nudges. Thaler coined nudge theory.","theirs vs yours"],
 ["Three eras: rational, irrational, influenced","Classical 1950s–60s, cognitive revolution 1970s–90s (Kahneman and Tversky), contemporary nudging.","rational → irrational → influenced"]
];

/* ===================== QUESTION BANK ===================== */
const Q=[
// what marketing is
{t:"What marketing is",q:"According to the AMA definition, marketing creates value for:",c:["Customers only","Customers and shareholders","Customers, clients, partners and society at large","Consumers and competitors"],a:[2],w:"All four groups appear in the definition, including society at large."},
{t:"What marketing is",q:"The core function marketing performs for an organisation is:",c:["Selling more units","Anticipating consumer needs and market evolution","Reducing production costs","Managing distribution"],a:[1],w:"Anticipation is what lets a firm pivot before the sudden collapse."},
{t:"What marketing is",q:"Which firm declined because it dismissed Netflix as no competitive threat?",c:["BlackBerry","Hertz","Blockbuster","Kodak"],a:[2],w:"Its CEO dismissed Netflix, which then added personalised recommendations and streaming."},
{t:"What marketing is",q:"Hertz was disrupted by Uber primarily because:",c:["Uber had better marketing","Hertz owned its fleet, incurring high capital and maintenance costs, while Uber was asset-light","Hertz was too expensive","Uber entered first"],a:[1],w:"The asset-light model outsourced both drivers and vehicles."},
{t:"What marketing is",q:"Marketing is described as an 'outside-in' approach because:",c:["It sells outside the organisation","It brings knowledge of consumer needs from the market into the organisation","It uses outdoor advertising","It outsources production"],a:[1],w:"Selling is the reverse — inside-out, pushing a finished product outward."},
{t:"What marketing is",q:"Bottom line refers to:",c:["Revenue","Profit, calculated as sales minus cost","Total units sold","Market share"],a:[1],w:"Top line is revenue. There must be a top line for there to be a bottom line."},
{t:"What marketing is",q:"A café sells 80 glasses at ₹120 each, costing ₹70 each. The profit is:",c:["₹9,600","₹5,600","₹4,000","₹50"],a:[2],w:"9,600 − 5,600 = 4,000."},
{t:"What marketing is",q:"Which is an example of SELLING rather than marketing?",c:["Designing one-rupee shampoo sachets","Researching student preferences for iced coffee","A salesperson persuading a customer to buy a laptop","Placing chocolates near the billing counter"],a:[2],w:"Direct persuasion of a finished product. The others all start from consumer understanding."},

// core concepts
{t:"Core concepts",q:"A need directed towards a specific object is a:",c:["Demand","Want","Desire","Preference"],a:[1],w:"Need → want → demand. Hunger is the need; pizza is the want."},
{t:"Core concepts",q:"Demand is best defined as:",c:["A strongly felt want","A want backed by ability to pay","A need that marketers have created","Total market size"],a:[1],w:"Purchasing power is what converts a want into demand."},
{t:"Core concepts",q:"Which statement reflects his repeated principle?",c:["Marketers create needs","Marketers cannot create needs; they shape wants and influence demand","Marketers create demand but not wants","Needs, wants and demands are all created by advertising"],a:[1],w:"Needs pre-exist as basic human requirements."},
{t:"Core concepts",q:"A customer says 'I want a car' but actually means one with low running costs. The second is a:",c:["Stated need","Real need","Unstated need","Secret need"],a:[1],w:"The real need is the meaning behind the stated one."},
{t:"Core concepts",q:"Buying a luxury car mainly as a status symbol is which type of need?",c:["Delight need","Unstated need","Secret need","Real need"],a:[2],w:"Intangible and usually unspoken. A delight need would be an unrequested GPS."},
{t:"Core concepts",q:"Consumers paying for an ad-free music subscription illustrates which demand state?",c:["Latent demand","Negative demand","Declining demand","Unwholesome demand"],a:[1],w:"They pay to avoid something. Dentist appointments are his other example."},
{t:"Core concepts",q:"Consumers wanting a better smartphone camera than anything currently available is:",c:["Non-existent demand","Latent demand","Overfull demand","Irregular demand"],a:[1],w:"A strong underlying need that no current product satisfies."},
{t:"Core concepts",q:"Air conditioners and seasonal fruit illustrate:",c:["Full demand","Irregular demand","Declining demand","Overfull demand"],a:[1],w:"Seasonal or fluctuating patterns."},
{t:"Core concepts",q:"Cigarettes and alcohol are examples of:",c:["Negative demand","Unwholesome demand","Overfull demand","Latent demand"],a:[1],w:"Real demand, but socially undesirable consequences."},
{t:"Core concepts",q:"Which demand state describes bread and milk regularly selling out?",c:["Full demand","Overfull demand","Irregular demand","Latent demand"],a:[1],w:"Demand exceeds available supply. Full demand means consistently adequate levels."},
{t:"Core concepts",q:"Imagica markets itself through happiness and memories rather than its rides. This is marketing a(n):",c:["Good","Service","Experience","Idea"],a:[2],w:"Experiences are one of the ten marketable entities. Sunburn and Coca-Cola's 'Make a Friend' are the others he cited."},
{t:"Core concepts",q:"NIRF rankings used by institutes for promotion is an example of marketing:",c:["Organizations","Information","Ideas","Places"],a:[1],w:"Information is a marketable entity, alongside AACSB accreditation."},
{t:"Core concepts",q:"In the simple marketing system, which flows travel FROM the market back TO the industry? (Select all)",multi:true,c:["Money","Information","Goods and services","Communication"],a:[0,1],w:"Goods, services and communication flow out from industry; money and information flow back."},

// perceived value
{t:"Perceived value",q:"Customer perceived value is:",c:["The printed price","Benefits minus costs, as calculated in the consumer's mind","The cost of production plus margin","Brand value divided by price"],a:[1],w:"It is subjective and contextual, not a property of the product."},
{t:"Perceived value",q:"The same tea costs ₹20 roadside, ₹250 in a café and ₹500 at an airport. This shows that value is:",c:["Determined by production cost","Subjective and contextual","Always proportional to price","Fixed by the brand"],a:[1],w:"Same product, three different perceived values depending on the situation."},
{t:"Perceived value",q:"Which benefit has NO inherent upper limit?",c:["Psychological benefit","Functional benefit","Economic benefit","Extended psychological benefit"],a:[3],w:"A jacket can only be so warm and a price can only be cut so far, but perception can always be built further."},
{t:"Perceived value",q:"Worrying about parking and traffic when going to a store is an example of:",c:["A direct cost","An abstract cost","A functional benefit","An economic benefit"],a:[1],w:"Abstract costs include time, effort, stress and disposal — which is why delivery can cost more money and still deliver more value."},
{t:"Perceived value",q:"The difference between generic jeans at ₹1,000 and Armani at ₹25,000 is mainly:",c:["Functional benefit","Economic benefit","Extended psychological benefit created by brand equity","Direct cost"],a:[2],w:"The products are physically similar; the brand creates the perception."},
{t:"Perceived value",q:"'Memory foam' is a feature. What is the corresponding benefit?",c:["It is made of foam","Better sleep and reduced discomfort","It costs more","It is imported"],a:[1],w:"Features describe what a product has; benefits explain why the consumer should care."},
{t:"Perceived value",q:"An app with better playlists but ads and a six-step login loses to a simpler app because:",c:["Its content is worse","Reducing friction raises perceived value even when the price is higher","It is more expensive","It has fewer features"],a:[1],w:"Friction is an abstract cost, and cutting it is one of the two levers for raising value."},

// exchange
{t:"Exchange",q:"Suppliers, customers and competitors make up the:",c:["Macro environment","Task (micro) environment","Exchange system","Marketing mix"],a:[1],w:"The immediate entities marketing directly interacts with."},
{t:"Exchange",q:"GST reform and inflation belong to which part of the marketing environment?",c:["Task environment","Economic element of the macro environment","Socio-cultural element","Physical element"],a:[1],w:"The six macro elements are demographic, political-legal, economic, socio-cultural, physical and technological."},
{t:"Exchange",q:"Which always involves money or monetary value?",c:["An exchange","A transaction","A relationship","All three"],a:[1],w:"An exchange can be of time, data or trust. A transaction is the specific agreed moment involving money."},
{t:"Exchange",q:"An ongoing series of exchanges and transactions that builds value over time is a:",c:["Transaction","Exchange","Relationship","Marketing system"],a:[2],w:"It produces loyalty and advocacy."},
{t:"Exchange",q:"In a food delivery order, which single step is the TRANSACTION?",c:["Browsing the menu","Sharing your address","The moment payment is processed and confirmed","Rating the order afterwards"],a:[2],w:"Everything else is an exchange of value — time, data, attention, trust."},
{t:"Exchange",q:"Which sits centrally in the modern exchange economy, exchanging taxes and services with all other markets?",c:["The resource market","The intermediary market","The government market","The consumer market"],a:[2],w:"Resource → manufacturing → intermediary → consumer, with government in the centre."},

// value chain
{t:"Value chain",q:"The gap that motivates a purchase is between the:",c:["Price and the value","Existing state and the desired state","Expectation and the performance","POP and the POD"],a:[1],w:"If ES and DS are aligned, the consumer sees no need to buy."},
{t:"Value chain",q:"Itch Guard showing the embarrassment of scratching in public is an example of:",c:["Elevating the desired state","Reducing the existing state","Doing both at once","Benefit segmentation"],a:[1],w:"Kohler elevates the desired state; Clean & Clear does both."},
{t:"Value chain",q:"What is the correct order of the value purchase chain?",c:["Purchase → value → intention → satisfaction → loyalty","Value creation → purchase intention → actual purchase → experience → satisfaction → loyalty","Intention → value → loyalty → satisfaction → purchase","Satisfaction → value → purchase → loyalty"],a:[1],w:"Impulse purchases can skip the intention step."},
{t:"Value chain",q:"Two students receive identical 34-minute deliveries but rate 2 and 5 stars. This shows satisfaction depends on:",c:["Objective delivery performance","Performance relative to the expectation the customer already held","The price paid","The delivery partner"],a:[1],w:"Context — past experience versus heavy rain — set two different anchors."},
{t:"Value chain",q:"Which statement about satisfaction and loyalty is correct?",c:["A satisfied customer is always loyal","A satisfied customer may still switch for a better offer; loyalty means choosing you despite alternatives","Loyalty precedes satisfaction","Loyalty can be created by rewards alone"],a:[1],w:"His example: someone happy with Zomato switching to Swiggy for a 50% discount."},
{t:"Value chain",q:"The conversion rate for loyal customers versus new customers is roughly:",c:["20–30% versus 5–8%","60–70% versus 5–8%","60–70% versus 30–40%","90% versus 50%"],a:[1],w:"Loyal 60–70%, new only 5–8%."},
{t:"Value chain",q:"Increasing the retention rate by 5% can increase business profit by:",c:["5–10%","10–15%","20–90%","Over 100%"],a:[2],w:"And acquiring a new customer costs about five times as much as retaining one."},
{t:"Value chain",q:"Apple AirPods outsold Bose despite Bose's better audio because of:",c:["Lower price","Ecosystem integration, design, and single-earbud flexibility","Wider distribution","Longer battery life"],a:[1],w:"Satisfaction is expectation versus perceived performance, not technical quality alone."},
{t:"Value chain",q:"Pizza delivered in 10 minutes can reduce satisfaction because:",c:["It costs more","Vastly exceeding expectations can create doubt about authenticity","The pizza is cold","Delivery staff are rushed"],a:[1],w:"There is an upper as well as a lower limit to expectations."},

// segmentation
{t:"Segmentation",q:"Which market reality creates the need for segmentation?",c:["Price competition","Market heterogeneity","Regulatory pressure","Technological change"],a:[1],w:"Consumers genuinely differ in who they are, what they want, why and how they buy."},
{t:"Segmentation",q:"Segmentation divisions must above all be:",c:["Equal in size","Meaningful, usable and actionable","Based on demographics","Limited to three segments"],a:[1],w:"Dividing people up is not segmentation unless the divisions support differentiated strategies."},
{t:"Segmentation",q:"Zudio stocking winter layers in Delhi and monsoon-friendly clothing in Mumbai is:",c:["Demographic segmentation","Geographic segmentation","Psychographic segmentation","Behavioural segmentation"],a:[1],w:"Driven by location and climate."},
{t:"Segmentation",q:"Bajaj Pulsar targeting males aged 17–24 with 'Definitely Male' is:",c:["Geographic","Demographic","Psychographic","Benefit-based"],a:[1],w:"Measurable characteristics — age and gender."},
{t:"Segmentation",q:"Nike distinguishing fitness-focused, sport aspirers, style seekers and the sustainability conscious is:",c:["Demographic","Behavioural","Psychographic","Geographic"],a:[2],w:"Based on how consumers think — lifestyle, values and attitudes."},
{t:"Segmentation",q:"Surf Excel dividing consumers by usage rate, pack size and promotional sensitivity is:",c:["Psychographic","Behavioural","Benefit-based","Demographic"],a:[1],w:"Behavioural is about what consumers do, not how they think."},
{t:"Segmentation",q:"Colgate's Strong Teeth, Max Fresh, Visible White, Sensitive and Total variants illustrate:",c:["Geographic segmentation","Behavioural segmentation","Benefit-based segmentation","Demographic segmentation"],a:[2],w:"Each variant communicates a distinct benefit sought."},
{t:"Segmentation",q:"L'Oréal's three age variants share 70–80% of their ingredients. What actually differs?",c:["The formulation","The benefit communicated to each age segment","The price only","The distribution channel"],a:[1],w:"And the brand ambassador changes over time to stay relatable."},
{t:"Segmentation",q:"Why is segmenting simply by 'age 18–25' not automatically useful?",c:["The group is too small","Within that age group, consumers have vastly different needs and preferences","Age data is unreliable","It is prohibited by regulation"],a:[1],w:"It becomes useful only combined with benefits sought or psychographic profiles."},
{t:"Segmentation",q:"Behavioural segmentation raised Surf Excel's potential reach from about 25% to:",c:["40%","50%","75%","95%"],a:[2],w:"By serving heavy users, machine-wash users, occasional users and value seekers separately."},
{t:"Segmentation",q:"Which are behavioural segmentation parameters? (Select all)",multi:true,c:["Usage rate","Pack size","Promotional sensitivity","Values and lifestyle"],a:[0,1,2],w:"Values and lifestyle are psychographic. Mode of usage and purchase frequency are the other behavioural ones."},

// targeting
{t:"Targeting",q:"What does SAFE stand for in the targeting framework?",c:["Size, Accessibility, Fitment, Economics","Scale, Awareness, Fit, Efficiency","Segment, Audience, Focus, Execution","Size, Attractiveness, Feasibility, Expansion"],a:[0],w:"The four criteria for deciding which segment to pursue."},
{t:"Targeting",q:"'If everyone is your priority, then nobody is your priority' explains why:",c:["Segmentation is necessary","Targeting is necessary, because budgets are finite","Positioning must be distinctive","POPs must be maintained"],a:[1],w:"Targeting exists because you cannot serve every segment equally well."},
{t:"Targeting",q:"Which is a dangerous targeting assumption?",c:["That the largest segment is automatically the best target","That segments must be measurable","That positioning follows targeting","That budgets are limited"],a:[0],w:"Volume is not the same as margin. The fastest-growing segment is the other trap."},
{t:"Targeting",q:"Spotify targeted students in Europe and India because:",c:["It was the largest segment","Despite not being the largest, volume and price elasticity produced higher overall revenue","Students pay the most per user","Regulation required it"],a:[1],w:"Subsidised Premium for Students — a smaller segment that earned more overall."},
{t:"Targeting",q:"A large segment the organisation has no distribution reach into fails which SAFE criterion?",c:["Size","Accessibility","Fitment","Economics"],a:[1],w:"You must be able to actually reach and serve the segment."},

// positioning
{t:"Positioning",q:"Positioning is best defined as:",c:["Choosing where to sell a product","Designing an offering and its image to occupy a distinctive, valued place in the target consumer's mind relative to competitors","Setting the price relative to competitors","Deciding which segment to pursue"],a:[1],w:"It is about what you do to the mind, not only to the product."},
{t:"Positioning",q:"The three positioning questions are:",c:["What, where and when","Who, what and why","Why, how and when","Who, how and how much"],a:[1],w:"Who is the target, what category are we competing in, and why should they choose us."},
{t:"Positioning",q:"For cooking oil, olive oil and ghee represent the:",c:["Natural frame of reference","Extended frame of reference","Points of parity","Points of differentiation"],a:[1],w:"Indirect competitors and substitutes. Saffola, Dhara and Fortune are the natural frame."},
{t:"Positioning",q:"The Maruti Gypsy lost its market because it:",c:["Was priced too high","Considered only its natural frame of reference and ignored the extended one","Had poor distribution","Was launched too late"],a:[1],w:"Tata Sumo and Mahindra Scorpio arrived with AC, power steering and better ride quality."},
{t:"Positioning",q:"Points of Parity are:",c:["Unique attributes that differentiate a brand","Attributes shared with competitors that are the minimum needed to compete","Attributes consumers do not value","Price-matching guarantees"],a:[1],w:"Without them a brand loses credibility in the category."},
{t:"Positioning",q:"What happens to a Point of Differentiation once competitors copy it?",c:["It becomes more valuable","It becomes a Point of Parity","It disappears entirely","It becomes a frame of reference"],a:[1],w:"PODs have a finite lifespan. Oral-B's colour-changing bristles are his example."},
{t:"Positioning",q:"Oral-B's colour-changing bristles were a POD because they:",c:["Used new cleaning technology","Signalled when to replace the brush — a consumer benefit, without changing the underlying technology","Were cheaper to manufacture","Lasted longer"],a:[1],w:"Blue dye fading to white. Differentiation through benefit, not engineering."},
{t:"Positioning",q:"How did Dettol respond to Savlon's 'no sting' POD?",c:["It removed the sting from its formula","It cut prices","It reframed the sting as proof that the product is working","It exited the category"],a:[2],w:"Turning the weakness into a POD, and it regained leadership."},
{t:"Positioning",q:"In the three circles model, a POD sits where:",c:["All three circles overlap","Consumer desire meets your features but excludes competitor features","Your features meet competitor features","Competitor features meet consumer desire"],a:[1],w:"POP is where all three overlap. Features you and competitors share that nobody wants are invalid positioning."},
{t:"Positioning",q:"If Lysol removed its germ-killing capability, consumers would return to ordinary phenyl. This shows that:",c:["PODs matter more than POPs","Dropping a POP destroys competitive credibility however strong the PODs","Fragrance is a POP","Positioning is irrelevant"],a:[1],w:"POPs must be maintained while PODs are built."},
{t:"Positioning",q:"Accor running Ibis, Novotel and Sofitel at different price points demonstrates:",c:["Brand dilution","Multi-segment positioning without dilution","Behavioural segmentation","Extended frame of reference"],a:[1],w:"One parent, distinct positions per segment. ITC does the same with boutique chains alongside five-star properties."},
{t:"Positioning",q:"A good Point of Differentiation must be: (Select all)",multi:true,c:["Valued by consumers","Defensible and hard to replicate","Clearly communicated","Cheaper than competitors' features"],a:[0,1,2],w:"Cost is not one of his criteria. It must also address a genuine gap between what competitors offer and what consumers want."},

// consumer behaviour
{t:"Consumer behaviour",q:"According to the consumer behaviour lecture, people buy in order to:",c:["Maximise utility per rupee","Reach, restore, maintain or protect a desired state","Copy their peer group","Respond to advertising"],a:[1],w:"And marketing never operates on an empty mind — it meets existing memories, biases and goals."},
{t:"Consumer behaviour",q:"In the classical era of the 1950s–60s, consumers were viewed as:",c:["Irrational","Rational and predictable","Socially influenced","Nudged"],a:[1],w:"People buy only what they need, and behaviour was thought forecastable."},
{t:"Consumer behaviour",q:"Which pair introduced 'judgment under uncertainty' during the cognitive revolution?",c:["Kotler and Keller","Kahneman and Tversky","Thaler and Sunstein","Porter and Prahalad"],a:[1],w:"The 1970s–90s shift to seeing consumers as irrational."},
{t:"Consumer behaviour",q:"Nudge theory was introduced by:",c:["Daniel Kahneman","Richard Thaler","Philip Kotler","Seth Godin"],a:[1],w:"Creating a choice environment that guides better decisions without restricting freedom of choice."},
{t:"Consumer behaviour",q:"Star ratings, review counts and discount amounts on a product listing are:",c:["Nudges","Heuristics","PODs","Demand states"],a:[1],w:"Mental shortcuts the consumer uses to compare options. A nudge is choice architecture the marketer designs."},
{t:"Consumer behaviour",q:"Placing a staircase before the lift to encourage physical activity is:",c:["A heuristic","A nudge","Behavioural segmentation","A point of differentiation"],a:[1],w:"Environmental design guiding behaviour without direct persuasion. 'Bestseller' labels are another."},
{t:"Consumer behaviour",q:"The Forest Essentials serum, citing 100%, 97% and 94% results from a sample of 36, illustrates:",c:["Benefit-based segmentation","Consumers relying on the appearance of evidence rather than its quality","Latent demand","Extended frame of reference"],a:[1],w:"Consumers overlook the sample size and assume they fall in the positive group."},
{t:"Consumer behaviour",q:"The Swiggy mangoes advertisement works primarily by creating:",c:["A point of parity","Imagined consumption through sensory appeal","A nudge","Negative demand"],a:[1],w:"Consumers respond to imagined consumption almost as strongly as to actual product information."}
];

/* ===================================================================
   Assemble the course object.
   =================================================================== */
window.COURSE = {
  slug: "principles-of-marketing",
  scopeShort: "All to 27 Sep",
  eyebrow: "IIT Jodhpur · B.S. Management & Technology · Semester 1",
  heading: "Principles of Marketing<br>Quiz 1 Revision",
  sub: "Everything from the AMA definition to POPs and PODs — compressed for a 20-question paper. The shortest paper of your six, and the most generous on time.",

  briefTag: "from the official LMS announcement",
  briefLede: "Dr. Kapoor never announced this quiz in any lecture — no date, format or scope. Everything below comes from the official LMS announcement, which is the only source for it.",
  briefHtml: `
    <div class="grid2">
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">Confirmed on the official announcement</h4>
        <div class="scroller"><table><tbody>
          <tr><td><strong>Date</strong></td><td>Sunday 4 October</td></tr>
          <tr><td><strong>Window</strong></td><td>1:00–1:30 PM IST · join from <strong>12:45 PM</strong></td></tr>
          <tr><td><strong>Questions</strong></td><td><strong>20</strong>, for <strong>20 marks</strong> — the shortest of your six papers</td></tr>
          <tr><td><strong>Type</strong></td><td>MCQ</td></tr>
          <tr><td><strong>Weight</strong></td><td>20% · best 2 of 3 · 40% of the course total</td></tr>
        </tbody></table></div>
        <div class="warnbox" style="margin-top:12px;border-left-color:var(--bad);background:var(--bad-soft)">
          <b>Negative marking.</b> +1 correct, <strong>−0.25 for a wrong answer</strong>, 0 if left blank.
        </div>
      </div>
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">Scope</h4>
        <p style="font-size:14.5px">The announcement states it plainly: <strong>&ldquo;All the topics covered till 27 September 2026.&rdquo;</strong></p>
        <div class="warnbox" style="margin-top:12px;border-left-color:var(--good);background:var(--good-soft)">
          <b>No syllabus document, and no exclusions.</b> Unlike your other five courses, this announcement attaches no lecture list — so assume <strong>everything released</strong>, including the Week 6 consumer behaviour lecture of 22 September, is fair game.
        </div>
        <p style="font-size:14.5px;margin-top:11px">The arc: what marketing is → need/want/demand → perceived value → exchange → satisfaction and loyalty → <strong>STP</strong> → POPs and PODs → consumer behaviour.</p>
        <p style="font-size:13.5px;color:var(--ink-3);margin-top:11px">He also mentioned a group marketing plan (20 marks) and optional B-school competitions (20 marks) as separate components, and a 60-mark final exam.</p>
      </div>
    </div>

    <div class="card" style="margin-top:14px;border-left:3px solid var(--clay)">
      <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">90 seconds a question — by far your most generous paper</h4>
      <p style="font-size:14.5px;color:var(--ink-2)">20 questions in 30 minutes. Compare that with 20 seconds a question in Foundations of Computing. You have time to read every stem properly and think — use it.</p>
      <div class="scroller" style="margin-top:11px"><table><thead><tr><th>Situation</th><th>Expected value</th><th>Do</th></tr></thead><tbody>
        <tr><td>You know it</td><td><strong>+1.00</strong></td><td>Answer</td></tr>
        <tr><td>Rule out two of four</td><td><strong>+0.38</strong></td><td>Answer</td></tr>
        <tr><td>Rule out one of four</td><td><strong>+0.17</strong></td><td>Answer</td></tr>
        <tr><td>Blind guess</td><td><strong>+0.06</strong></td><td>Answer, but it gains almost nothing</td></tr>
      </tbody></table></div>
      <ul style="margin:11px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7">
        <li><strong>Only 20 questions means each is worth 5% of the paper.</strong> One careless error costs more here than anywhere else — and with negative marking, a wrong answer swings you 1.25 marks against a blank.</li>
        <li><strong>This course is lists and examples.</strong> Eight demand states, five need types, ten marketable entities, five segmentation bases, SAFE. Learn the brand example and the term comes with it.</li>
        <li><strong>The confusable pairs are where the marks go:</strong> psychographic versus behavioural, exchange versus transaction, satisfaction versus loyalty, POP versus POD, heuristic versus nudge.</li>
      </ul>
    </div>`,

  mapLede: "Eighteen lectures from Dr. Anuj Pal Kapoor. With no exclusions stated, treat all of them as in scope.",

  drillLede: "Questions written from the lectures and transcripts. There is no official practice set for this course. With 90 seconds a question in the real paper, the pacer here is gentler than your other sheets.",

  footer: "Compiled 26 September 2026 from the IITJ LMS: lecture AI-summaries and full transcripts for Principles of Marketing. Timings, question count, marking scheme and scope from the official LMS quiz announcement — the only source, since this quiz was never announced in a lecture. Topic weightings are an estimate, not an official mark scheme. <strong>This is a student-made study aid, not official IIT Jodhpur or Masai School course material</strong> — always check the LMS for the authoritative syllabus and quiz details.",

  lectures: LECTURES,
  weights:  WEIGHTS,
  traps:    TRAPS,
  questions: Q,
  sections: SECTION_META.map(m => Object.assign({}, m, {topics: SECTIONS["s-" + m.id]}))
};
