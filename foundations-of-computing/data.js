/* ========================= DATA ========================= */
const LECTURES=[
 [1,"Introduction — Foundations of Computing","Course aims, why Python","rec"],
 [2,"Introduction to Computing: IPO model and Data","Computing vs computer, 4 pillars, DIKW","rec"],
 [3,"Introduction to Computing: Classifications of Data","Structured/time/quant/qual","rec"],
 [4,"Live Lecture 1","Why program in the LLM era, enterprise IPO","live"],
 [5,"Introduction to Computing: Basics of Algorithm","Primary/secondary/metadata, 5 properties","rec"],
 [6,"Introduction to Computing: Hardware & Software","CPU, GPU, memory, OS, utilities","rec"],
 [7,"Transition from computing to Programming","Application software, interpreter vs compiler","rec"],
 [8,"Introduction to Python & Google Colab","Variables, naming rules, strings","rec"],
 [9,"Live Lecture 2","Knight Capital, Netflix & bank DIKW cases","live"],
 [10,"Python: Numbers & Comments","Arithmetic, floats, str(), comments","rec"],
 [11,"Python: Intro to Lists Part 1","Indexing, append, insert, del, pop, remove","rec"],
 [12,"Python: Intro to Lists Part 2","sort, sorted, reverse, len, IndexError","rec"],
 [13,"Python: Working with Lists Part 1","for loops, indentation errors","rec"],
 [14,"Live Lecture 3","Revision + quiz announcement","live"],
 [15,"Python: Working with Lists Part 2","range, list comprehensions, slicing","rec"],
 [16,"Python: Working with Lists Part 3","Copying lists, tuples","rec"]
];

const WEIGHTS=[
 ["Data classification",22],["Lists, slicing & tuples",18],["Software, OS & utilities",13],
 ["Hardware",12],["Algorithms",11],["Computing & IPO",10],["Python basics",9],["Data & DIKW",5]
];

const SECTIONS={
"s-computing":[
 {t:"What computing actually is",src:"L2 · L4 · slides 21–24",h:`
  <div class="def"><b>Computing</b> is the process of using <b>well-defined steps</b> to solve problems by collecting information, processing it, and producing a useful result.</div>
  <p style="font-size:14.5px;color:var(--ink-2)">ACM's definition, also on the slide: “any goal-oriented activity requiring, benefiting from, or creating computers.”</p>
  <h4>Computing vs computer</h4>
  <ul>
   <li><strong>Computing</strong> = the abstract method. Thousands of years old. Doable with pen, paper, or an abacus.</li>
   <li><strong>Computer</strong> = the physical tool that executes it fast. The intelligence lives in the human-designed algorithm.</li>
  </ul>
  <div class="warnbox"><b>His explicit instruction:</b> if asked to define computing, don't mention computers. Definitions that lead with “a machine that…” are the wrong answer.</div>
  <h4>The three historical proofs</h4>
  <ul>
   <li><strong>Abacus, ~3000 BC</strong> — merchants adding and subtracting.</li>
   <li><strong>Navigation tables, 1600s–1800s</strong> — sailors fixing position at sea.</li>
   <li><strong>WWII “computers”</strong> — teams of women calculating artillery trajectories. <em>The job title came before the machine.</em></li>
  </ul>`},
 {t:"The IPO model",src:"L2 · L4 · slides 25–34",h:`
  <div class="def"><b>Input → Process → Output.</b> Universal: it describes a calculator and an AI system equally well.</div>
  <h4>Traditional vs enterprise view</h4>
  <div class="scroller"><table><thead><tr><th>Stage</th><th>Traditional (30 yrs ago)</th><th>Enterprise (now)</th></tr></thead><tbody>
   <tr><td><strong>Input</strong></td><td>Keyboard</td><td>High-volume, high-velocity, high-variety real-time data streams (zettabytes, 10<sup>21</sup> bytes)</td></tr>
   <tr><td><strong>Process</strong></td><td>CPU calculation</td><td>Automated algorithms on cloud infrastructure, billions of steps/sec, cost near zero</td></tr>
   <tr><td><strong>Output</strong></td><td>Screen</td><td>Actionable business decisions → revenue growth or cost reduction</td></tr>
  </tbody></table></div>
  <h4>The worked examples — know the process step for each</h4>
  <div class="scroller"><table><thead><tr><th>System</th><th>Process step</th></tr></thead><tbody>
   <tr><td>Google Search</td><td>Ranks billions of pages on keyword relevance, page speed, mobile friendliness, domain trust</td></tr>
   <tr><td>UPI</td><td>Verify identity → check balance → debit → credit → confirm. Payer bank → NPCI → payee bank, in 3–4 s</td></tr>
   <tr><td>Google Maps</td><td>Shortest-path algorithm over hundreds of routes, weighing live traffic and roadblocks</td></tr>
   <tr><td>YouTube</td><td>Compares your watch/skip behaviour against millions of users — a machine-learning process</td></tr>
   <tr><td>Autocorrect</td><td>Predicts the next word from your letters plus prior words</td></tr>
   <tr><td>Weather</td><td>Billions of hourly points from satellites + ground stations through physics and AI models</td></tr>
   <tr><td><strong>Uber</strong></td><td>Dynamic pricing + route optimisation + matching engine. Balances supply and demand in <strong>under 500 ms</strong></td></tr>
  </tbody></table></div>`},
 {t:"Knight Capital — the cost of bad computing",src:"L9 · slides 35–37",h:`
  <ul>
   <li>American trading firm, <strong>2012</strong>. Deployed a new autonomous trading algorithm with a bug.</li>
   <li><strong>45 minutes. 4 million trades. $440 million lost.</strong> The firm went bankrupt.</li>
   <li>Cause: incorrectly coded, with no adequate guardrails or human oversight.</li>
   <li><strong>Lesson:</strong> correctness beats speed. Speed of execution <em>amplifies</em> errors.</li>
  </ul>
  <div class="warnbox"><b>Likely MCQ:</b> the numbers 2012 / 45 minutes / $440 million / 4 million trades are exactly the sort of detail a recall quiz uses. Memorise all four.</div>`},
 {t:"Computing in non-tech industries",src:"L9 · slides 38–41",h:`
  <ul>
   <li><strong>Agriculture (AgroStar):</strong> soil sensors + satellite imagery + weather history → what to plant, when, how much water.</li>
   <li><strong>Healthcare (ECG):</strong> electrical heart activity measured ~100 times per second → classification algorithm → detects atrial fibrillation, heart block.</li>
   <li><strong>Fashion (Zara):</strong> global sales data every 24 hours → detects fast and slow sellers → plans production <strong>6 months ahead</strong>.</li>
  </ul>
  <div class="def">Zara is a set-piece question, asked on slide 41. <b>Most critical IPO step: Process</b> (the algorithmic analysis). <b>Data type: time series.</b></div>`},
 {t:"Why learn to program in the LLM era",src:"L4 · slides 10–17",h:`
  <ul>
   <li>Vibe coding fails on: <strong>debugging</strong> (easy to generate, hard to fix), <strong>token cost</strong>, <strong>spaghetti code</strong>, security holes, hallucinated library imports, production failures.</li>
   <li><strong>“The LLM is the junior builder; you are the architect.”</strong> LLMs handle simple code and ~80% of prototype work; they struggle with architecture and legacy integration.</li>
   <li><strong>Accountability stops with you.</strong> RBI, SEBI and IRDAI penalise code failures regardless of who — or what — wrote the code. Paytm was cited for data-security mismanagement.</li>
   <li>Google, Meta and OpenAI have been <strong>rehiring engineers</strong> after AI-driven layoffs.</li>
  </ul>`}
],

"s-data":[
 {t:"Data — the definition",src:"L2 · slides 43–46",h:`
  <div class="def"><b>Data</b> is any <b>raw, unprocessed fact or observation</b> that can be recorded and stored. By itself it has no meaning.</div>
  <ul>
   <li><code>42</code> is just a number. <code>Age = 42</code> is information.</li>
   <li><code>Mumbai</code> is just a word. <code>Place of birth = Mumbai</code> is information.</li>
   <li><code>38.5</code> is data. <em>“Patient's temperature is 38.5 °C”</em> is information.</li>
  </ul>
  <p style="font-size:14.5px"><strong>Context is what converts data into information.</strong> Data is the raw material of computing — without it there is nothing to process, store or output.</p>
  <h4>The four pillars</h4>
  <p style="font-size:14.5px">1 Data · 2 Algorithm · 3 Hardware · 4 Software. <strong>Remove any one and computing fails.</strong> They are equally essential — a favourite MCQ framing.</p>`},
 {t:"DIKW — Data → Information → Knowledge → Wisdom",src:"L2 · L9 · slides 47–58",h:`
  <div class="scroller"><table><thead><tr><th>Layer</th><th>What it adds</th><th>Question it answers</th></tr></thead><tbody>
   <tr><td><strong>Data</strong></td><td>Raw facts, no context</td><td>—</td></tr>
   <tr><td><strong>Information</strong></td><td>Context + structure</td><td>Who, what, where, when</td></tr>
   <tr><td><strong>Knowledge</strong></td><td>Synthesis, pattern recognition</td><td>Why</td></tr>
   <tr><td><strong>Wisdom</strong></td><td>Strategic action under risk</td><td>What should we do, at what cost</td></tr>
  </tbody></table></div>
  <h4>Clinical example</h4>
  <p style="font-size:14.5px"><strong>Data</strong> 38.5 → <strong>Information</strong> temperature 38.5 °C rising over four days, peaking on day four → <strong>Knowledge</strong> this pattern fits a viral infection, likely to resolve in 3–5 days → <strong>Wisdom</strong> doctor prescribes treatment based on thousands of similar cases.</p>
  <h4>Netflix case — memorise the numbers</h4>
  <ul>
   <li><strong>Data:</strong> raw log — user ID, event PAUSE, content ID, timestamp, timecode 00:42:15.</li>
   <li><strong>Information:</strong> <strong>3.2 million viewers</strong> paused at exactly 00:42:15.</li>
   <li><strong>Knowledge:</strong> cross-referencing the script shows the scene introduces a complex subplot without context, causing drop-off.</li>
   <li><strong>Wisdom:</strong> re-edit pacing for future releases; show contextual recaps to returning viewers.</li>
  </ul>
  <h4>Bank loan case — the ethics question</h4>
  <ul>
   <li><strong>Information:</strong> applicants from postal codes X, Y, Z default at <strong>3.4×</strong> the rate of others. Confirmed in the data.</li>
   <li><strong>Knowledge:</strong> those areas have lower income, poorer infrastructure, less formal employment — the default rate is a consequence of structural disadvantage.</li>
   <li><strong>Wisdom:</strong> do <em>not</em> use the variable. Denying a whole geography credit is <strong>redlining</strong> — illegal in many countries and unethical.</li>
  </ul>
  <div class="def">Slide 58 asks this directly: the bank goes wrong by <b>acting at the Information level</b> without climbing to Knowledge and Wisdom.</div>`}
],

"s-classify":[
 {t:"1 · By structure: structured / unstructured / semi-structured",src:"L3 · L9 · slides 59–77",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Structured</th><th>Semi-structured</th><th>Unstructured</th></tr></thead><tbody>
   <tr><td><strong>Form</strong></td><td>Rows (records) × columns (fields), each field a defined type</td><td>Organisational markers, key–value pairs, but not tabular</td><td>No predefined format</td></tr>
   <tr><td><strong>Stored in</strong></td><td>Relational DBs — MySQL, PostgreSQL, Oracle</td><td>NoSQL databases</td><td>Specialised stores</td></tr>
   <tr><td><strong>Examples</strong></td><td>Bank transactions, student mark sheets, hospital registers, e-commerce order tables, CSV, Excel</td><td>JSON (web APIs), XML, HTML, email (.eml — fixed headers, free-form body)</td><td>Text, images, audio, video, raw IoT sensor streams</td></tr>
   <tr><td><strong>Share of global data</strong></td><td colspan="2">the minority</td><td><strong>~80%</strong></td></tr>
  </tbody></table></div>
  <h4>The business consequence — he drew this twice</h4>
  <p style="font-size:15px"><strong>Analysis cost:</strong> structured &lt; unstructured. &nbsp;<strong>Capability required:</strong> structured &lt; unstructured.</p>
  <p style="font-size:14.5px;color:var(--ink-2)">Unstructured data needs specialised tooling — transformers for NLP, computer vision for images.</p>
  <div class="warnbox"><b>Unstructured sub-types to recognise:</b> Text (emails, WhatsApp chats, news, reviews, social posts) · Images (photos, X-rays, satellite, ID scans) · Audio (calls, podcasts, music, voice notes) · Video (CCTV, YouTube, recorded lectures) · Raw sensor streams.</div>`},
 {t:"2 · Across time: cross-sectional / panel / time series",src:"L3 · L9 · slides 78–87",h:`
  <div class="scroller"><table><thead><tr><th>Type</th><th>Subjects</th><th>Time points</th><th>Canonical example</th></tr></thead><tbody>
   <tr><td><strong>Cross-sectional</strong></td><td>Many</td><td><strong>One</strong></td><td>500 students in Delhi surveyed on 1 June 2025</td></tr>
   <tr><td><strong>Panel</strong> (longitudinal)</td><td><strong>Many</strong></td><td><strong>Many</strong></td><td>Monthly marks of 5 students over 6 months</td></tr>
   <tr><td><strong>Time series</strong></td><td><strong>One</strong></td><td>Many</td><td>Daily closing price of Reliance stock, Jan–Dec 2024</td></tr>
  </tbody></table></div>
  <div class="def">The whole distinction is a 2×2: <b>how many subjects × how many time points.</b> Panel is the rich one — it does both, so you can ask “who improved most?”</div>
  <h4>Other uses he listed</h4>
  <ul>
   <li><strong>Cross-sectional:</strong> election polls, consumer surveys, Amazon product feedback, census, medical studies comparing patient groups.</li>
   <li><strong>Panel:</strong> NREGA employment records, IMF macroeconomic data across countries, clinical drug trials, school performance tracking.</li>
   <li><strong>Time series:</strong> weather forecasting, ECG readings, website traffic, epidemic case counts, step counter, electricity meter readings.</li>
  </ul>
  <p style="font-size:14.5px"><strong>Time series notes:</strong> sequence matters; it reveals trends, cycles and sudden changes; recent data carries more predictive value than old data.</p>`},
 {t:"3 · By nature: quantitative / qualitative",src:"L3 · L14 · slides 91–100",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Quantitative</th><th>Qualitative</th></tr></thead><tbody>
   <tr><td><strong>Nature</strong></td><td>Numerical, measurable on a scale</td><td>Categorical, descriptive, from perception and opinion</td></tr>
   <tr><td><strong>Sub-types</strong></td><td><strong>Discrete</strong> — countable whole numbers (30 students, 3 goals, 47 apps)<br><strong>Continuous</strong> — any value in a range (172.4 cm, 36.8 °C, 9.58 s)</td><td><strong>Nominal</strong> — no natural order (blood group, city of birth, phone brand, colour)<br><strong>Ordinal</strong> — meaningful order, unequal gaps (1★–5★, Class 10 &lt; 12 &lt; Graduate, Poor/Fair/Good/Excellent)</td></tr>
   <tr><td><strong>Operations</strong></td><td>Addition, subtraction, mean, median, standard deviation, correlation</td><td><strong>Mode, frequency count, chi-square</strong> — no mean or median</td></tr>
   <tr><td><strong>Collected by</strong></td><td>Surveys</td><td>Interviews</td></tr>
   <tr><td><strong>Answers</strong></td><td>What, how often, how many, how much</td><td>How, why</td></tr>
   <tr><td><strong>Trade-off</strong></td><td>Fast to analyse, less bias, generalisable with good sampling</td><td>Deep and contextual, but subjective and prone to researcher bias</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The point of the whole classification:</b> the data type determines which operations are <em>valid</em>. Averaging “city of birth” produces nothing meaningful. You cannot take a mean or median of nominal or ordinal data.</div>
  <p style="font-size:14.5px;color:var(--ink-2)">Context matters: house area in square feet and house price are <strong>continuous</strong>, because they fall in a range rather than being countable units.</p>`},
 {t:"4 · By origin: primary / secondary / metadata",src:"L5 · L14 · slides 101–108",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Primary</th><th>Secondary</th></tr></thead><tbody>
   <tr><td><strong>Definition</strong></td><td>Collected first-hand by you, for a specific purpose. Original, not previously published.</td><td>Collected by someone else for a different purpose, reused for your analysis.</td></tr>
   <tr><td><strong>Sources</strong></td><td>Surveys (Google Forms), experiments, IoT sensor readings, Arduino/MKR boards, weather stations, interviews</td><td>NSSO, SEBI, IRDAI, WHO, World Bank, IMF, Bloomberg, census, Wikidata</td></tr>
   <tr><td><strong>Advantages</strong></td><td>Tailored to the exact question; you know how it was collected; reliable</td><td>Large scale, already available, often free and authoritative</td></tr>
   <tr><td><strong>Disadvantages</strong></td><td>Time-consuming, expensive, small sample size</td><td>May not match your question; quality depends on the original collector</td></tr>
  </tbody></table></div>
  <div class="def"><b>Metadata</b> = data about data. It describes data without being the data itself.</div>
  <ul>
   <li><strong>Photo:</strong> the pixels are the data; filename, size, date taken, GPS location, camera model and resolution are the metadata.</li>
   <li><strong>Database:</strong> column names, data types, primary keys, foreign keys, row and column counts.</li>
   <li><strong>A library catalogue</strong> is metadata about books.</li>
   <li><strong>WhatsApp:</strong> sender ID, recipient ID, timestamp, read receipt, device type — revealing a great deal even without the message content.</li>
  </ul>`}
],

"s-algo":[
 {t:"Definition and origin",src:"L5 · L14 · slides 112–116",h:`
  <div class="def">An <b>algorithm</b> is a <b>finite, unambiguous, step-by-step procedure</b> for solving a well-defined problem. It takes input, processes it through defined steps, and produces a correct output every time.</div>
  <ul>
   <li>The <strong>intellectual core</strong> of computing — Pillar 2.</li>
   <li>From <strong>Muhammad ibn Musa al-Khwarizmi</strong>, a <strong>9th-century Persian mathematician</strong>. The word <em>algebra</em> comes from his book title too.</li>
   <li>Algorithms exist <strong>independently of computers</strong>. A computer just executes them fast.</li>
   <li><strong>Quality of computing depends on quality of the algorithm</strong> — a bad algorithm gives a wrong or slow result no matter how powerful the hardware. 1990s AI research ran on weak machines by optimising algorithms.</li>
  </ul>
  <h4>Everyday algorithm: making tea</h4>
  <p style="font-size:14.5px">Boil water → add tea leaves → wait 3 minutes → add milk and sugar → pour and serve.</p>
  <h4>Odd-or-even algorithm</h4>
  <pre>1. Start
2. Read number n
3. Divide n by 2, check the remainder
4. If remainder = 0 → print "even"
5. If remainder ≠ 0 → print "odd"
6. End</pre>
  <p style="font-size:14.5px;color:var(--ink-2)">Flowcharts represent algorithms visually, with start, stop, decision and process shapes.</p>`},
 {t:"The five essential properties",src:"L5 · L14 · slides 118–124 · near-certain exam material",h:`
  <div class="scroller"><table><thead><tr><th>#</th><th>Property</th><th>Rule</th><th>Violation he gave</th></tr></thead><tbody>
   <tr><td>1</td><td><strong>Finiteness</strong></td><td>Must terminate after a finite number of steps</td><td>“Keep dividing N by 2 until you reach exactly 0” — gets smaller forever, never reaches 0</td></tr>
   <tr><td>2</td><td><strong>Definiteness</strong><br>(unambiguity)</td><td>Every step precisely defined; same step, same result, every time</td><td>“Add a little bit of salt” ✗ &nbsp;→&nbsp; “Add exactly 5 grams of salt” ✓</td></tr>
   <tr><td>3</td><td><strong>Input</strong></td><td><strong>Zero or more</strong> inputs</td><td>“Hello World” has <strong>zero</strong> inputs — and is still a valid algorithm</td></tr>
   <tr><td>4</td><td><strong>Output</strong></td><td><strong>At least one</strong> output</td><td>An algorithm with no output is pointless</td></tr>
   <tr><td>5</td><td><strong>Effectiveness</strong></td><td>Every step basic enough to be done, in principle, with pen and paper. No infinite resources.</td><td>“Find the largest prime number” ✗ · “Ask 1 billion users simultaneously” ✗ · “Compare A with B, output the larger” ✓</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The classic trap:</b> input is <em>zero or more</em>, output is <em>at least one</em>. They are not symmetric. An MCQ offering “an algorithm must have at least one input” is testing exactly this.</div>
  <h4>A finite algorithm, for contrast</h4>
  <pre>Step 1: Start with N = 100
Step 2: Divide N by 2
Step 3: If N &lt; 1, stop. Else go to Step 2.
<span class="c">→ 100, 50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78… stop.</span></pre>
  <p style="font-size:14.5px">Common structures named in the lecture: <strong>if-else</strong>, <strong>while loop</strong> (checks condition, then executes), <strong>do-while loop</strong> (executes, then checks).</p>`}
],

"s-hardware":[
 {t:"Why hardware matters, and the GPU story",src:"L6 · slides 126–127",h:`
  <p style="font-size:15px">Understanding hardware answers three questions: why memory management matters, why loops that run a billion times are slow, and why files persist after power-off.</p>
  <ul>
   <li>AI research began in the <strong>1990s</strong> but stalled on insufficient computing power.</li>
   <li>The AI explosion was a <strong>hardware</strong> triumph, not only a software one — the <strong>GPU</strong> is at its centre.</li>
   <li><strong>2012:</strong> <strong>AlexNet</strong> for computer vision, trained on GPUs, proved it to the world.</li>
   <li><strong>NVIDIA</strong> leads via <strong>CUDA</strong> (Compute Unified Device Architecture). <strong>PyTorch</strong> (Meta) and <strong>TensorFlow</strong> (Google) let you write GPU-accelerated Python.</li>
  </ul>`},
 {t:"CPU vs GPU",src:"L6 · L14 · slides 130–131",h:`
  <div class="scroller"><table><thead><tr><th></th><th>CPU</th><th>GPU</th></tr></thead><tbody>
   <tr><td><strong>Cores</strong></td><td><strong>Few but powerful</strong> — 4, 8, 16, up to 24</td><td><strong>Thousands of small, simple</strong> cores</td></tr>
   <tr><td><strong>Optimised for</strong></td><td>Complex <strong>sequential</strong> tasks, one instruction at a time, very fast</td><td>The <strong>same operation on many data points simultaneously</strong> — mass parallelism</td></tr>
   <tr><td><strong>Original purpose</strong></td><td>General-purpose brain of the computer</td><td>Rendering graphics — colour and position of millions of pixels at once</td></tr>
   <tr><td><strong>Modern AI use</strong></td><td>Runs the Python interpreter</td><td>Training neural networks, LLMs, image and video generators</td></tr>
  </tbody></table></div>
  <h4>Inside the CPU</h4>
  <ul>
   <li><strong>ALU</strong> — Arithmetic Logic Unit. Arithmetic (+ − × ÷) <em>and</em> logic (AND, OR, NOT, comparisons).</li>
   <li><strong>CU</strong> — Control Unit. Fetches instructions from memory, decodes them, directs the ALU, decides which instruction runs next.</li>
   <li>Also: data movement — load from memory, store to memory.</li>
   <li><strong>Speed: 3–5 billion instructions per second (3–5 GHz).</strong></li>
  </ul>
  <div class="warnbox"><b>Trap:</b> the ALU does <em>both</em> arithmetic and logic. The Control Unit does neither — it schedules.</div>`},
 {t:"Memory: RAM, ROM, secondary storage",src:"L6 · L14 · slides 132–134",h:`
  <div class="scroller"><table><thead><tr><th></th><th>RAM</th><th>ROM</th><th>Secondary storage</th></tr></thead><tbody>
   <tr><td><strong>Volatility</strong></td><td><strong>Volatile</strong> — lost when power is cut</td><td><strong>Non-volatile</strong></td><td><strong>Non-volatile</strong></td></tr>
   <tr><td><strong>Speed</strong></td><td>Fast — nanoseconds</td><td>Fast</td><td>Slower</td></tr>
   <tr><td><strong>Size</strong></td><td>Phones 6–12 GB · laptops 8–32 GB</td><td>Small</td><td>Large</td></tr>
   <tr><td><strong>Holds</strong></td><td>Running apps; your Python variables, lists and objects</td><td>Firmware and the <strong>bootloader</strong> — burned in at the factory, unmodifiable</td><td>Files, photos, music, databases, your .py files</td></tr>
   <tr><td><strong>Type</strong></td><td colspan="2"><strong>Primary memory</strong></td><td>SSD, HDD, cloud, USB, SD card, optical disc</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">RAM is “the desk you study at”. Opening an app loads it from slow storage into fast RAM so the CPU can reach it.</p>
  <h4>Memory hierarchy — speed vs permanence</h4>
  <p style="font-size:14.5px">CPU registers (fastest, most temporary) → RAM (very fast, temporary) → ROM (fast, permanent) → secondary storage (slower, permanent).</p>`},
 {t:"Input and output devices",src:"L6 · slides 128–135",h:`
  <p style="font-size:15px"><strong>Input devices</strong> translate the real world into digital signals. <strong>Output devices</strong> translate results back into a form humans can use.</p>
  <h4>Sensors — know what each one does</h4>
  <div class="scroller"><table><thead><tr><th>Sensor</th><th>Detects</th><th>Used for</th></tr></thead><tbody>
   <tr><td><strong>Accelerometer</strong></td><td>Movement and orientation</td><td>Screen rotation, step counting (Google Fit, Strava)</td></tr>
   <tr><td><strong>GPS</strong></td><td>Satellite signals → precise location</td><td>Maps, Uber, Ola, Swiggy, Zomato</td></tr>
   <tr><td><strong>Gyroscope</strong></td><td><strong>Rotational</strong> movement</td><td>Racing games, navigation, camera stabilisation</td></tr>
   <tr><td><strong>Fingerprint</strong></td><td>Biometric data</td><td>Authentication, device locking</td></tr>
   <tr><td><strong>Barometer</strong></td><td>Air pressure</td><td>Altitude, weather apps</td></tr>
   <tr><td><strong>Temperature</strong></td><td>Device heat</td><td>Overheating warnings</td></tr>
   <tr><td><strong>Light sensor</strong></td><td>Ambient light</td><td>Automatic screen brightness</td></tr>
   <tr><td><strong>Proximity</strong></td><td>Phone near your ear</td><td>Turns the touchscreen off during calls</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Trap:</b> accelerometer = linear movement and orientation. Gyroscope = <em>rotation</em>. Both show up as distractors for each other.</div>
  <p style="font-size:14.5px"><strong>Output devices:</strong> monitor, printer, speakers, <strong>haptic feedback</strong> (keyboard vibration), actuators and motors.</p>`}
],

"s-software":[
 {t:"The three layers of software",src:"L6 · L7 · slides 137–151",h:`
  <div class="def"><b>Software</b> is the set of instructions that tells hardware what to do. Without it, a computer is an inert collection of components.</div>
  <ol style="padding-left:20px;font-size:15px">
   <li><strong>System software</strong> — manages hardware, provides the platform. The OS.</li>
   <li><strong>Utility software</strong> — maintains, optimises and protects the system.</li>
   <li><strong>Application software</strong> — helps the user do a specific task.</li>
  </ol>`},
 {t:"Operating systems",src:"L6 · slides 138–141",h:`
  <p style="font-size:15px">The OS is <strong>the master program: it starts first, runs always, and never stops until shutdown.</strong></p>
  <div class="scroller"><table><thead><tr><th>OS</th><th>Use</th><th>Kernel</th><th>Key fact</th></tr></thead><tbody>
   <tr><td>Windows 11</td><td>PCs</td><td>NT</td><td>Most widely used desktop OS; dominates enterprise</td></tr>
   <tr><td>macOS Sequoia</td><td>Apple computers</td><td>XNU (Unix)</td><td>Tight hardware–software integration</td></tr>
   <tr><td><strong>Linux</strong></td><td>Servers, IoT</td><td>Linux</td><td>Open source; runs <strong>~96% of the world's web servers</strong></td></tr>
   <tr><td><strong>Android</strong></td><td>Smartphones</td><td>Linux</td><td><strong>~72% global smartphone market share</strong></td></tr>
   <tr><td>iOS</td><td>Apple phones/tablets</td><td>XNU (Unix)</td><td>Closed ecosystem; security and performance</td></tr>
   <tr><td>Chrome OS</td><td>Chromebooks</td><td>Linux</td><td>Cloud-first; runs Android apps</td></tr>
  </tbody></table></div>
  <h4>The six responsibilities of an OS</h4>
  <ul>
   <li><strong>Process management</strong> — which program runs on the CPU and for how long; schedules dozens of processes in milliseconds.</li>
   <li><strong>Memory management</strong> — allocates RAM, stops programs interfering, reclaims memory on close.</li>
   <li><strong>File system</strong> — organises storage into files and folders, independent of the underlying hardware.</li>
   <li><strong>Device drivers</strong> — translate generic OS instructions into specific hardware commands. Why your phone works with thousands of peripherals.</li>
   <li><strong>Security</strong> — controls who accesses what; stops one app reading another's private data.</li>
   <li><strong>User interface</strong> — GUI (icons, windows, touch) or CLI (terminal).</li>
  </ul>
  <div class="def">When your Python program reads a file or prints to screen, <b>it asks the OS to do it.</b> The OS is the intermediary between your code and the hardware.</div>`},
 {t:"Utility software",src:"L6 · slides 142–146",h:`
  <ul>
   <li><strong>File management</strong> — Windows Explorer, macOS Finder. CLI equivalents: <code>ls cp mv rm</code> (Linux/macOS), <code>dir copy move</code> (Windows).</li>
   <li><strong>Disk management</strong> — Disk Cleanup (temp files, caches, old installers) · <strong>Defragmentation</strong> (reorganises fragmented files on an HDD — <strong>not needed for SSDs</strong>) · partitioning · disk checking for bad sectors.</li>
   <li><strong>Security</strong> — Antivirus (signature databases + heuristics) · Firewall (monitors incoming and outgoing traffic) · Encryption: <strong>BitLocker</strong> (Windows), <strong>FileVault</strong> (macOS) · VPN clients (encrypt traffic, mask IP).</li>
  </ul>
  <h4>Compression — the exam's favourite pairing</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Lossless</th><th>Lossy</th></tr></thead><tbody>
   <tr><td><strong>Formats</strong></td><td>ZIP, 7-Zip, WinRAR, TAR</td><td><strong>JPEG</strong> (images), <strong>MP3</strong> (audio)</td></tr>
   <tr><td><strong>Data</strong></td><td>Identical data can be restored</td><td>Permanently discarded — inaudible frequencies, invisible pixel variations</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Trap:</b> the slide says defragmentation is for HDDs and <em>not</em> needed on SSDs. One lecture summary garbled this as “on SSDs” — trust the slide.</div>`},
 {t:"Application software",src:"L6 · L7 · slides 147–151",h:`
  <ul>
   <li><strong>Productivity</strong> — Word/Docs · Excel/Sheets (<em>every formula is an algorithm</em>) · PowerPoint/Slides · MySQL Workbench.</li>
   <li><strong>Communication</strong> — Email over <strong>SMTP/IMAP</strong> · WhatsApp, Telegram, Slack with end-to-end encryption · Zoom, Google Meet.</li>
   <li><strong>Browsers</strong> — parse <strong>HTML</strong> (structure), <strong>CSS</strong> (styling), <strong>JavaScript</strong> (behaviour); manage many simultaneous connections.</li>
   <li><strong>Entertainment</strong> — VLC, Spotify (decode MP3, AAC, H.264, H.265) · games (among the most computationally intensive: physics, 3D rendering, NPC AI, network sync) · Netflix, YouTube.</li>
  </ul>
  <h4>Specialised software by domain</h4>
  <div class="scroller"><table><thead><tr><th>Domain</th><th>Software</th><th>Python libraries</th></tr></thead><tbody>
   <tr><td>Data science</td><td>Jupyter Notebook, Tableau</td><td>pandas, numpy, matplotlib</td></tr>
   <tr><td>Design / CAD</td><td>AutoCAD, Figma, Photoshop</td><td>PIL/Pillow, cairo</td></tr>
   <tr><td>Healthcare</td><td>Hospital info systems, PACS imaging</td><td>scikit-learn, OpenCV</td></tr>
   <tr><td>Finance</td><td>Bloomberg Terminal, trading platforms</td><td>pandas, statsmodels</td></tr>
   <tr><td>Engineering</td><td>MATLAB, SolidWorks</td><td>NumPy, SciPy</td></tr>
  </tbody></table></div>`},
 {t:"Interpreter vs compiler",src:"L7 · L14 · slide 153 · high-probability MCQ",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Interpreter</th><th>Compiler</th></tr></thead><tbody>
   <tr><td><strong>Languages</strong></td><td><strong>Python</strong>, JavaScript</td><td>C, C++, Java</td></tr>
   <tr><td><strong>Translation</strong></td><td><strong>Line by line, at runtime</strong></td><td><strong>Entire source to machine code, before running</strong></td></tr>
   <tr><td><strong>Errors found</strong></td><td>As the program runs — partial output still appears</td><td>At compile time, before running — no output at all if errors exist</td></tr>
   <tr><td><strong>Speed</strong></td><td>Slower — each line re-translated every time it runs</td><td>Faster — machine code runs directly on the CPU</td></tr>
   <tr><td><strong>Debugging</strong></td><td>Easier, interactive, immediate feedback</td><td>Harder — all-or-nothing</td></tr>
  </tbody></table></div>
  <h4>Editor vs IDE</h4>
  <ul>
   <li><strong>Source code editor</strong> — writing and editing only. Notepad++, Sublime Text, VS Code.</li>
   <li><strong>IDE</strong> — all-in-one: editor + runner + <strong>debugger</strong> + often version control. PyCharm, VS Code with extensions, <strong>Google Colab</strong>.</li>
  </ul>`}
],

"s-python":[
 {t:"Python and Google Colab",src:"L7 · L8 · L14 · slides 157–161",h:`
  <div class="def"><b>Python</b> — high-level, general-purpose, designed by <b>Guido van Rossum</b>, first released in <b>1991</b>.</div>
  <p style="font-size:14.5px"><strong>Five advantages:</strong> readable (reads like English) · fast to start (no setup) · universal (web, AI, data science, automation, research) · cross-platform (Windows, macOS, Linux) · huge community.</p>
  <h4>Why Colab — the five reasons on the slide</h4>
  <ol style="padding-left:20px;font-size:14.5px">
   <li><strong>Zero setup</strong> — runs in the browser; needs only a Google account and internet.</li>
   <li><strong>Cell-by-cell execution</strong> — run one cell, see output underneath; a break is isolated to that cell.</li>
   <li><strong>Integrated Gemini AI</strong> assistant.</li>
   <li><strong>Pre-installed libraries</strong> — Pandas, NumPy, Matplotlib ready to import.</li>
   <li><strong>Sharing</strong> — saves to Google Drive, shareable link, real-time collaborative editing.</li>
  </ol>
  <p style="font-size:14.5px">Also: free access to <strong>CPUs, GPUs and TPUs</strong>. Notebook file extension is <strong>.ipynb</strong> (IPython Notebook); can also download as <code>.py</code>.</p>
  <h4>Computing → programming</h4>
  <p style="font-size:14.5px">Problem → Algorithm → Python code → Execution → Solution. <em>Computing gives the concepts; programming gives the tool.</em></p>`},
 {t:"Variables and naming rules",src:"L8 · L14 · slides 162–164",h:`
  <h4>Rules — breaking these is an error</h4>
  <ul>
   <li>Only <strong>letters, numbers and underscores</strong>.</li>
   <li>Must <strong>start with a letter or underscore, never a number</strong>. <code>message_1</code> ✓ &nbsp; <code>1_message</code> ✗</li>
   <li><strong>No spaces.</strong> <code>greeting_message</code> ✓ &nbsp; <code>greeting message</code> ✗</li>
   <li>Avoid Python <strong>keywords and built-in function names</strong> — <code>print</code>, <code>if</code>, <code>else</code>, <code>while</code>, <code>return</code>, <code>try</code>.</li>
  </ul>
  <h4>Guidelines — these are style, not errors</h4>
  <ul>
   <li>Short but descriptive: <code>student_name</code> beats <code>s_n</code>.</li>
   <li>Careful with lowercase <code>l</code> and uppercase <code>O</code> — they look like <code>1</code> and <code>0</code>.</li>
   <li>Use lowercase. Uppercase won't error, but avoid it.</li>
  </ul>
  <div class="warnbox"><b>NameError</b> is raised when a variable is misspelled or used before it is defined. Python prints a <b>traceback</b> showing where. Variable names are case-sensitive.</div>`},
 {t:"Strings",src:"L8 · L10 · slides 167–169",h:`
  <div class="def">A <b>string</b> is a series of characters. Anything inside quotes is a string — single or double.</div>
  <p style="font-size:14.5px">Mixing quote types lets you include quotes inside: <code>'He said "Hello"'</code> or <code>"Python's strength"</code>.</p>
  <div class="scroller"><table><thead><tr><th>Method</th><th>Does</th><th>Example</th></tr></thead><tbody>
   <tr><td><code>.title()</code></td><td>Title Case</td><td><code>"ada lovelace".title()</code> → <code>Ada Lovelace</code></td></tr>
   <tr><td><code>.upper()</code></td><td>UPPERCASE</td><td><code>→ ADA LOVELACE</code></td></tr>
   <tr><td><code>.lower()</code></td><td>lowercase</td><td><code>→ ada lovelace</code></td></tr>
   <tr><td><code>.lstrip()</code></td><td>Strips whitespace from the <strong>left</strong></td><td></td></tr>
   <tr><td><code>.rstrip()</code></td><td>Strips whitespace from the <strong>right</strong></td><td></td></tr>
   <tr><td><code>.strip()</code></td><td>Strips <strong>both</strong> sides</td><td></td></tr>
  </tbody></table></div>
  <ul>
   <li><strong>Concatenation</strong> with <code>+</code>. Spaces must be quoted: <code>first_name + " " + last_name</code>.</li>
   <li><strong>Whitespace characters:</strong> <code>\\t</code> tab, <code>\\n</code> newline.</li>
   <li><strong>Method</strong> = an action Python performs on data, via dot notation. Always followed by parentheses, which may hold <strong>arguments</strong>.</li>
  </ul>`},
 {t:"Numbers, type conversion, comments",src:"L10 · slides 170–173",h:`
  <div class="scroller"><table><thead><tr><th>Operator</th><th>Operation</th><th>Example</th></tr></thead><tbody>
   <tr><td><code>+ - *</code></td><td>Add, subtract, multiply</td><td><code>2 * 3</code> → <code>6</code></td></tr>
   <tr><td><code>/</code></td><td>Division — <strong>always gives a float</strong></td><td><code>3 / 2</code> → <code>1.5</code></td></tr>
   <tr><td><code>**</code></td><td><strong>Exponentiation</strong></td><td><code>3 ** 2</code> → <code>9</code> · cube of 2 is <code>2 ** 3</code></td></tr>
  </tbody></table></div>
  <ul>
   <li><strong>Order of operations</strong> follows PEMDAS/BODMAS. Parentheses override: <code>(2 + 3) * 4</code> → <code>20</code>.</li>
   <li><strong>Float</strong> = any number with a decimal point.</li>
   <li><strong>Float precision:</strong> <code>0.2 + 0.1</code> can display as <code>0.30000000000000004</code>. This happens in <em>all</em> programming languages, from how computers represent numbers internally.</li>
  </ul>
  <div class="warnbox"><b>TypeError.</b> <code>"happy" + 23 + "rd birthday"</code> fails — Python won't concatenate a string with an integer. Fix with <code>str()</code>: <code>"happy" + str(23) + "rd birthday"</code>. Using <code>"23"</code> also works but loses the number for arithmetic elsewhere.</div>
  <h4>Comments</h4>
  <p style="font-size:14.5px">The <strong><code>#</code></strong> symbol. Everything after it on that line is ignored by the interpreter. Used to write notes in plain English — essential for collaborative work.</p>`}
],

"s-lists":[
 {t:"Creating and accessing lists",src:"L11 · slides 174–175",h:`
  <div class="def">A <b>list</b> is a collection of items in a particular order. Items need not be related or of the same type. Convention: name it in the plural.</div>
  <pre>bicycles = ['Trek', 'Cannondale', 'Red Line', 'Specialized']
print(bicycles)      <span class="c"># ['Trek', 'Cannondale', 'Red Line', 'Specialized']</span>
print(bicycles[0])   <span class="o"># Trek</span>
print(bicycles[-1])  <span class="o"># Specialized  ← always the last item</span>
print(bicycles[0].title())</pre>
  <ul>
   <li><strong>Index positions start at 0, not 1.</strong> Second item is <code>[1]</code>.</li>
   <li><strong>Negative indexing:</strong> <code>[-1]</code> last, <code>[-2]</code> second-to-last. Useful when you don't know the length.</li>
   <li>String methods apply to accessed elements: <code>bicycles[0].title()</code>.</li>
   <li>Modify in place: <code>motorcycles[0] = 'Ducati'</code>.</li>
  </ul>`},
 {t:"Adding and removing — the five methods",src:"L11 · high-probability MCQ",h:`
  <div class="scroller"><table><thead><tr><th>Operation</th><th>Syntax</th><th>Behaviour</th></tr></thead><tbody>
   <tr><td><strong>append</strong></td><td><code>lst.append(x)</code></td><td>Adds to the <strong>end</strong></td></tr>
   <tr><td><strong>insert</strong></td><td><code>lst.insert(i, x)</code></td><td>Adds at index <code>i</code>; everything at and after <code>i</code> shifts right</td></tr>
   <tr><td><strong>del</strong></td><td><code>del lst[i]</code></td><td><strong>Statement, not a method.</strong> Deletes by position. Value is gone for good</td></tr>
   <tr><td><strong>pop</strong></td><td><code>lst.pop()</code> / <code>lst.pop(i)</code></td><td>Removes <strong>and returns</strong> the item. No argument → removes the <strong>last</strong> one</td></tr>
   <tr><td><strong>remove</strong></td><td><code>lst.remove(value)</code></td><td>Removes <strong>by value</strong>, not position. Only the <strong>first occurrence</strong></td></tr>
  </tbody></table></div>
  <div class="def">Choosing between them: <b>del</b> when you're finished with the value · <b>pop</b> when you still need it · <b>remove</b> when you know the value but not the position.</div>
  <p style="font-size:14.5px">Think of <code>pop()</code> as taking the top plate off a stack. To remove every occurrence of a repeated value, loop.</p>`},
 {t:"Organising: sort, sorted, reverse, len",src:"L12 · exam-critical distinction",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Permanent?</th><th>Syntax</th><th>Returns</th></tr></thead><tbody>
   <tr><td><code>sort()</code></td><td><strong>Yes — permanent</strong></td><td><code>cars.sort()</code> · <code>cars.sort(reverse=True)</code></td><td>Nothing; changes the list</td></tr>
   <tr><td><code>sorted()</code></td><td><strong>No — temporary</strong></td><td><code>sorted(cars)</code> · <code>sorted(cars, reverse=True)</code></td><td>A new sorted list; original untouched</td></tr>
   <tr><td><code>reverse()</code></td><td><strong>Yes — permanent</strong></td><td><code>cars.reverse()</code></td><td>Nothing; inverts order</td></tr>
   <tr><td><code>len()</code></td><td>—</td><td><code>len(cars)</code></td><td>Number of items</td></tr>
  </tbody></table></div>
  <pre>cars = ['BMW', 'Audi', 'Toyota', 'Subaru']
cars.sort()                  <span class="o"># ['Audi', 'BMW', 'Subaru', 'Toyota']  permanent</span>
cars.sort(reverse=True)      <span class="o"># ['Toyota', 'Subaru', 'BMW', 'Audi']</span>
print(sorted(cars))          <span class="o"># sorted copy — cars itself is unchanged</span>
cars.reverse()               <span class="o"># just flips the order, no alphabetising</span>
len(cars)                    <span class="o"># 4</span></pre>
  <ul>
   <li><code>sort</code> and <code>reverse</code> are <strong>methods</strong> (dot notation). <code>sorted</code> and <code>len</code> are <strong>functions</strong> (the list goes in parentheses).</li>
   <li><code>reverse()</code> does <strong>not</strong> alphabetise — it only inverts. Apply it twice to restore.</li>
  </ul>
  <div class="warnbox"><b>IndexError: list index out of range.</b> A list of length 4 has indices <b>0, 1, 2, 3</b> — <code>lst[4]</code> fails. Classic off-by-one. Any index on an empty list errors.</div>`},
 {t:"Looping and indentation errors",src:"L13",h:`
  <pre>for magician in magicians:
    print(magician.title())
    print("That was a great trick!")
print("Thank you, everyone.")   <span class="c"># runs once, after the loop</span></pre>
  <p style="font-size:14.5px">Python takes each value in turn, stores it in the loop variable, runs every <strong>indented</strong> line, then moves on. The loop ends automatically.</p>
  <div class="scroller"><table><thead><tr><th>Mistake</th><th>Result</th></tr></thead><tbody>
   <tr><td>No indentation after <code>for</code></td><td><strong>Syntax error:</strong> “expected an indented block” — won't run</td></tr>
   <tr><td>Forgetting to indent an <em>additional</em> line</td><td><strong>Logical error — no error message.</strong> Runs once after the loop, using only the <strong>last</strong> value. Wrong output, silently</td></tr>
   <tr><td>Unnecessary indentation</td><td><strong>Syntax error:</strong> “unexpected indent”</td></tr>
   <tr><td>Missing colon after <code>for</code></td><td><strong>Syntax error:</strong> expected colon</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The one that's tested:</b> of these four, only “forgot to indent an extra line” produces no error. It's a <em>logical</em> error — the program runs and gives the wrong answer.</div>`},
 {t:"range(), numerical lists and comprehensions",src:"L15",h:`
  <pre>for value in range(1, 5):   <span class="o"># 1, 2, 3, 4 — the end value is EXCLUDED</span>
numbers = list(range(1, 6))        <span class="o"># [1, 2, 3, 4, 5]</span>
even = list(range(2, 11, 2))       <span class="o"># [2, 4, 6, 8, 10]  third arg = step</span></pre>
  <ul>
   <li><strong><code>range()</code> excludes its end value.</strong> To include 5, write <code>range(1, 6)</code>.</li>
   <li>Third argument is the <strong>step</strong> — used for odd numbers, multiples of 3, and so on.</li>
   <li><code>list()</code> converts a range into an actual list.</li>
  </ul>
  <h4>Statistics on numerical lists</h4>
  <pre>digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
min(digits)   <span class="o"># 0</span>
max(digits)   <span class="o"># 9</span>
sum(digits)   <span class="o"># 45</span></pre>
  <h4>List comprehension</h4>
  <pre><span class="c"># the long way — three lines</span>
squares = []
for value in range(1, 11):
    squares.append(value ** 2)

<span class="c"># the comprehension — one line</span>
squares = [value ** 2 for value in range(1, 11)]</pre>
  <p style="font-size:14.5px">Structure: <code>[expression for variable in range()]</code>. The <strong>expression comes first</strong>.</p>
  <div class="warnbox"><b>No colon</b> at the end of the <code>for</code> in a comprehension — unlike a normal <code>for</code> loop, which requires one. This is the detail most likely to be tested.</div>`},
 {t:"Slicing",src:"L15",h:`
  <pre>players[0:3]   <span class="o"># indices 0, 1, 2 — end is EXCLUDED</span>
players[:3]    <span class="o"># omit start → begins at 0</span>
players[2:]    <span class="o"># omit end → runs to the end</span>
players[:]     <span class="o"># omit both → the whole list</span>
players[-3:]   <span class="o"># the last three</span>

for player in players[:3]:
    print(player.title())</pre>
  <p style="font-size:14.5px"><strong>Start is inclusive, end is exclusive</strong> — the same rule as <code>range()</code>. Slicing doesn't modify the original list.</p>`},
 {t:"Copying lists, and tuples",src:"L16",h:`
  <h4>Copy vs reference — the single best MCQ in this chapter</h4>
  <pre><span class="c"># ✓ a real, independent copy</span>
friend_foods = my_foods[:]

<span class="c"># ✗ NOT a copy — a second name for the SAME list</span>
friend_foods = my_foods</pre>
  <p style="font-size:14.5px">With plain assignment, appending to either name changes both, because both variables point at one list. With <code>[:]</code> they are genuinely separate.</p>
  <div class="def"><b>Tuple</b> = an immutable list. Values cannot be changed, added or removed after creation. Use <b>parentheses</b> <code>()</code> instead of square brackets.</div>
  <pre>dimensions = (200, 50)
dimensions[0]          <span class="o"># 200 — reading works exactly like a list</span>
for d in dimensions:   <span class="o"># looping works exactly like a list</span>

dimensions[0] = 250    <span class="o"># TypeError: 'tuple' object does not support item assignment</span>
dimensions = (400, 100) <span class="o"># ✓ allowed — reassigning the whole variable</span></pre>
  <div class="warnbox"><b>The nuance:</b> you cannot change an <em>element</em> of a tuple, but you <em>can</em> rebind the whole variable to a new tuple. Both halves get tested.</div>
  <p style="font-size:14.5px">Choose lists for data that changes; tuples for data that must not.</p>`}
]
};

const TRAPS=[
 ["Computing ≠ computer","Computing is the abstract method of solving problems in defined steps. He said outright: don't mention computers when defining it.","Computing is older than the machine"],
 ["Input: zero or more. Output: at least one.","The two algorithm properties are not symmetric. “Hello World” has zero inputs and is still valid.","0+ in, 1+ out"],
 ["Index starts at 0","A list of length 4 has indices 0–3. lst[4] raises IndexError: list index out of range.","len 4 → max index 3"],
 ["range() and slices exclude the end","range(1,5) gives 1,2,3,4. players[0:3] gives indices 0,1,2.","start inclusive, end exclusive"],
 ["sort() vs sorted()","sort() is a method and changes the list permanently. sorted() is a function and returns a new list, leaving the original alone.","method = permanent, function = copy"],
 ["reverse() doesn't alphabetise","It only inverts the current order. Reverse-alphabetical needs sort(reverse=True).","reverse ≠ sort"],
 ["del vs pop vs remove","del = by position, value lost. pop = by position, value returned. remove = by value, first occurrence only.","position / position+keep / value"],
 ["Copying: [:] not =","friend = my_list makes a second name for the same list. friend = my_list[:] makes a real copy.","brackets or it's not a copy"],
 ["Tuple: element no, whole tuple yes","dimensions[0] = 250 raises TypeError. dimensions = (400,100) is fine — that rebinds the variable.","immutable elements, mutable name"],
 ["No colon in a comprehension","[value**2 for value in range(1,11)] has no trailing colon, unlike a real for loop.","comprehension = no colon"],
 ["The silent indentation error","Forgetting to indent an extra line inside a loop gives NO error. It runs once after the loop with the last value. The other three indentation mistakes are syntax errors.","logical error, not syntax"],
 ["Defragmentation is for HDDs","The slide says defrag reorganises fragmented files on an HDD and is not needed for SSDs.","HDD only"],
 ["ALU does arithmetic AND logic","The Control Unit fetches, decodes and schedules — it doesn't calculate.","ALU computes, CU directs"],
 ["Accelerometer vs gyroscope","Accelerometer: movement and orientation (screen rotation, step count). Gyroscope: rotational movement (gaming, stabilisation).","gyro = rotation"],
 ["Panel vs time series","Time series = ONE subject, many time points. Panel = MANY subjects, many time points.","count the subjects"],
 ["Nominal vs ordinal","Nominal has no natural order (blood group, city). Ordinal has order with unequal gaps (1★–5★, Poor/Fair/Good).","order? then ordinal"],
 ["Division always returns a float","3 / 2 gives 1.5, not 1. And ** is exponentiation, not *.","/ → float, ** → power"],
 ["str() for concatenation","Writing ‘happy’ + 23 raises TypeError. Wrap the number: ‘happy’ + str(23).","TypeError, fix with str()"]
];

/* ========================= QUESTION BANK ========================= */
/* a = index/indices of correct answer(s); multi:true for select-all */
const Q=[
// ---- official deck questions ----
{t:"Data classification",o:true,q:"Which of the following is an example of structured data?",c:["A WhatsApp voice note","A student mark sheet stored in a database table","A collection of customer complaint emails","A CCTV surveillance video"],a:[1],w:"Structured data lives in rows and columns with defined field types — a database table is the textbook case. Voice notes, emails and video are all unstructured."},
{t:"Data classification",o:true,q:"Approximately what percentage of all data generated globally is unstructured?",c:["20%","40%","60%","80%"],a:[3],w:"~80%. Structured data is the minority of global data."},
{t:"Data classification",o:true,q:"A JSON file with fixed fields like 'order_id' but a variable-length 'items' list is classified as:",c:["Structured data","Unstructured data","Semi-structured data","Primary data"],a:[2],w:"Semi-structured: it has organisational markers and key–value pairs, but not rigid rows and columns. JSON, XML, HTML and email are the examples he listed."},
{t:"Data classification",o:true,q:"A survey of 500 students conducted on a single day recording phone usage, age and brand — with no follow-up across time — is an example of:",c:["Time series data","Panel data","Cross-sectional data","Longitudinal data"],a:[2],w:"Many subjects, one point in time = cross-sectional. Note that 'longitudinal' is just another name for panel data, so it's a distractor here."},
{t:"Data classification",o:true,q:"Daily closing prices of a stock recorded from January to December of a single year represent:",c:["Time series data","Panel data","Cross-sectional data","Longitudinal data"],a:[0],w:"One subject (the stock), many time points = time series."},
{t:"Data classification",o:true,q:"Monthly marks of 30 students tracked over 6 months, allowing analysis of which student improved most over time, is an example of:",c:["Time series data","Structured qualitative data","Cross-sectional data","Panel (longitudinal) data"],a:[3],w:"Many subjects × many time points = panel. The giveaway phrase is 'which student improved most' — that needs both dimensions."},
{t:"Data classification",o:true,q:"Which of the following is an example of continuous quantitative data?",c:["Number of students in a class","Blood group of a patient","A patient's body temperature (36.8 °C)","Customer satisfaction rating (1 to 5 stars)"],a:[2],w:"Temperature takes any value in a range → continuous. Student count is discrete, blood group is nominal, star rating is ordinal."},
{t:"Data classification",o:true,q:"Which data type has a natural order between categories, but the gaps between them are not necessarily equal?",c:["Nominal","Continuous","Discrete","Ordinal"],a:[3],w:"Ordinal — star ratings, education level, Poor/Fair/Good/Excellent."},
{t:"Data classification",o:true,q:"City of birth (Delhi, Mumbai, Chennai) is an example of which type of data?",c:["Time series data","Structured qualitative data","Cross-sectional data","Panel (longitudinal) data"],a:[1],w:"Qualitative, specifically nominal — categories with no natural order. (The deck's option set here is a little loose; 'structured qualitative' is the intended answer.)"},

// ---- computing & IPO ----
{t:"Computing & IPO",q:"Which best defines computing?",c:["A machine that processes data electronically","The process of using well-defined steps to solve problems by collecting, processing and producing results","The study of computer hardware architecture","Any activity performed using a computer"],a:[1],w:"He was explicit: define computing without mentioning computers. It's the method, not the machine."},
{t:"Computing & IPO",q:"During World War II, the word 'computer' referred to:",c:["Early vacuum-tube machines","People, mostly women, who performed arithmetic calculations by hand","Artillery targeting devices","Punch-card tabulators"],a:[1],w:"Teams of women calculating artillery trajectories. The job title came before the machine."},
{t:"Computing & IPO",q:"Which is the correct order of the IPO model?",c:["Input → Output → Process","Process → Input → Output","Input → Process → Output","Output → Process → Input"],a:[2],w:"Input → Process → Output. Universal across every computing system."},
{t:"Computing & IPO",q:"In the Uber case study, the matching engine balances supply and demand in under:",c:["50 ms","500 ms","5 seconds","30 seconds"],a:[1],w:"Under 500 milliseconds, per the slide."},
{t:"Computing & IPO",q:"The Knight Capital algorithm failure of 2012 resulted in a loss of:",c:["$44 million in 45 minutes","$440 million in 45 minutes","$440 million in 45 seconds","$4.4 billion in 45 minutes"],a:[1],w:"$440 million in 45 minutes, across 4 million automated trades. The firm went bankrupt."},
{t:"Computing & IPO",q:"What is the key lesson from Knight Capital?",c:["Faster algorithms produce better returns","Correctness of transactions matters more than speed","Trading should never be automated","Hardware failures cause most losses"],a:[1],w:"Speed amplifies errors. Without guardrails and human oversight, automation creates exponential risk."},
{t:"Computing & IPO",q:"In Zara's use of computing, which IPO step gives them competitive advantage, and what data type do they use?",c:["Input; cross-sectional data","Process; time series data","Output; panel data","Input; unstructured data"],a:[1],w:"The Process step — the algorithmic analysis of which designs sell — using time series sales data. This is a set-piece question from slide 41."},
{t:"Computing & IPO",q:"A UPI transaction typically completes in:",c:["Under 1 second","3–4 seconds","10–15 seconds","1 minute"],a:[1],w:"3–4 seconds, routed payer bank → NPCI → payee bank."},
{t:"Computing & IPO",q:"Which of these are listed as reasons that relying solely on 'vibe coding' is risky? (Select all)",multi:true,c:["Debugging becomes very difficult without programming knowledge","LLM tokens are expensive","LLMs may import non-existent libraries","LLMs cannot generate any working code"],a:[0,1,2],w:"All except the last — LLMs are good at simple code and around 80% of prototype work. The problems are debugging, cost, spaghetti code, security holes and hallucinated imports."},
{t:"Computing & IPO",q:"Which regulators were named as imposing penalties for code failures in Indian finance?",c:["SEBI, RBI and IRDAI","NPCI and UIDAI","TRAI and MeitY","CCI and NCLT"],a:[0],w:"RBI for banking, SEBI for markets, IRDAI for insurance. Accountability stops with the developer, not the LLM."},

// ---- data & DIKW ----
{t:"Data & DIKW",q:"Which correctly orders the DIKW chain?",c:["Data → Knowledge → Information → Wisdom","Data → Information → Knowledge → Wisdom","Information → Data → Wisdom → Knowledge","Knowledge → Data → Information → Wisdom"],a:[1],w:"Data → Information → Knowledge → Wisdom."},
{t:"Data & DIKW",q:"Which DIKW level answers the question 'why'?",c:["Data","Information","Knowledge","Wisdom"],a:[2],w:"Information answers who/what/where/when. Knowledge answers why. Wisdom answers what should we do."},
{t:"Data & DIKW",q:"In the Netflix case, how many viewers paused at timecode 00:42:15?",c:["320,000","3.2 million","32 million","1.2 million"],a:[1],w:"3.2 million — that aggregation is the Information layer."},
{t:"Data & DIKW",q:"In the bank case, applicants from certain postal codes defaulted at what rate relative to others?",c:["1.4 times","2.4 times","3.4 times","4.3 times"],a:[2],w:"3.4 times. Acting on that Information alone, without climbing to Knowledge and Wisdom, produces redlining."},
{t:"Data & DIKW",q:"Denying loans to everyone in a geographic area based on default statistics is called:",c:["Profiling","Redlining","Segmentation","Underwriting"],a:[1],w:"Redlining — illegal in many countries and deeply unethical. The wise decision is not to use the variable."},
{t:"Data & DIKW",q:"Which are the four pillars of computing? (Select all)",multi:true,c:["Data","Algorithm","Hardware","Software"],a:[0,1,2,3],w:"All four, and they are equally essential — remove any one and computing fails."},
{t:"Data & DIKW",q:"'38.5' on its own is:",c:["Information","Data","Knowledge","Metadata"],a:[1],w:"Raw data. 'The patient's temperature is 38.5 °C' adds context and becomes information."},

// ---- data classification extra ----
{t:"Data classification",q:"Which is an example of semi-structured data?",c:["An Excel spreadsheet","A JSON file from a web API","A podcast recording","A relational database table"],a:[1],w:"JSON, XML, HTML and email (.eml) are semi-structured."},
{t:"Data classification",q:"Compared with structured data, unstructured data has:",c:["Lower analysis cost and lower capability requirement","Higher analysis cost and higher capability requirement","Higher analysis cost but lower capability requirement","The same cost and capability requirement"],a:[1],w:"Both are higher. It needs specialised tooling — NLP transformers, computer vision."},
{t:"Data classification",q:"Which operations are valid on nominal data? (Select all)",multi:true,c:["Mode","Frequency count","Chi-square test","Mean"],a:[0,1,2],w:"Mode, frequency count and chi-square. You cannot take a mean or median of nominal data — averaging 'city of birth' is meaningless."},
{t:"Data classification",q:"The number of apps on a phone (47) is:",c:["Continuous quantitative","Discrete quantitative","Ordinal qualitative","Nominal qualitative"],a:[1],w:"Countable whole numbers → discrete."},
{t:"Data classification",q:"Qualitative data is typically collected through ___ and answers ___.",c:["Surveys; how many","Interviews; how and why","Sensors; how much","Experiments; what"],a:[1],w:"Qualitative: interviews, answering how and why. Quantitative: surveys, answering what/how often/how many/how much."},
{t:"Data classification",q:"Sensor readings you collect from an IoT device you deployed yourself are:",c:["Secondary data","Primary data","Metadata","Semi-structured data only"],a:[1],w:"Primary — collected first-hand for your specific purpose."},
{t:"Data classification",q:"Which are disadvantages of primary data? (Select all)",multi:true,c:["Time-consuming","Expensive","Often a small sample size","Quality depends on someone else's collection method"],a:[0,1,2],w:"The last one is a disadvantage of SECONDARY data — you don't control how it was collected."},
{t:"Data classification",q:"NSSO household income data used in your own research project is:",c:["Primary data","Secondary data","Metadata","Panel data by definition"],a:[1],w:"Secondary — collected by someone else, for a different purpose, and reused."},
{t:"Data classification",q:"Which of these is metadata for a photograph?",c:["The image pixels","The GPS location and camera model","The subject of the photo","The visual resolution as perceived by a viewer"],a:[1],w:"Metadata describes data without being it: filename, size, date taken, GPS, camera model, resolution. The pixels are the data."},
{t:"Data classification",q:"ECG heartbeat readings over time for one patient are:",c:["Cross-sectional data","Panel data","Time series data","Nominal data"],a:[2],w:"One subject, many time points."},

// ---- algorithms ----
{t:"Algorithms",q:"The word 'algorithm' derives from the name of:",c:["Al-Kindi, a 9th-century philosopher","Muhammad ibn Musa al-Khwarizmi, a 9th-century Persian mathematician","Euclid of Alexandria","Charles Babbage"],a:[1],w:"Al-Khwarizmi. The word 'algebra' comes from his book title too."},
{t:"Algorithms",q:"How many inputs may a valid algorithm have?",c:["Exactly one","At least one","Zero or more","At least two"],a:[2],w:"Zero or more. 'Hello World' takes zero inputs and is perfectly valid."},
{t:"Algorithms",q:"How many outputs must a valid algorithm produce?",c:["Zero or more","At least one","Exactly one","Exactly as many as its inputs"],a:[1],w:"At least one. An algorithm with no output is pointless. Note the asymmetry with input."},
{t:"Algorithms",q:"'Keep dividing N by 2 until you reach exactly 0' violates which property?",c:["Definiteness","Finiteness","Effectiveness","Output"],a:[1],w:"Finiteness — the number shrinks forever but never reaches zero, so it never terminates."},
{t:"Algorithms",q:"'Add a little bit of salt' violates which property?",c:["Finiteness","Definiteness","Input","Output"],a:[1],w:"Definiteness — every step must be precise and unambiguous. 'Add exactly 5 grams of salt' is definite."},
{t:"Algorithms",q:"'Find the largest prime number' violates which property?",c:["Definiteness","Input","Effectiveness","Output"],a:[2],w:"Effectiveness — no step may require infinite resources or be impossible. There is no largest prime."},
{t:"Algorithms",q:"Which are the five essential properties of an algorithm? (Select all)",multi:true,c:["Finiteness","Definiteness","Input and Output","Effectiveness"],a:[0,1,2,3],w:"Finiteness, Definiteness, Input, Output, Effectiveness."},
{t:"Algorithms",q:"If hardware is very powerful but the algorithm is poorly designed, the result will be:",c:["Fast and correct anyway","Wrong or slow regardless of the hardware","Correct but expensive","Identical to a good algorithm"],a:[1],w:"The quality of computing depends on the quality of the algorithm. 1990s AI ran on weak machines by optimising algorithms."},
{t:"Algorithms",q:"Which loop structure checks its condition BEFORE executing the code?",c:["do-while loop","while loop","for-each loop","repeat loop"],a:[1],w:"A while loop checks first, then executes. A do-while executes first, then checks."},

// ---- hardware ----
{t:"Hardware",q:"Which component performs both arithmetic and logical operations?",c:["Control Unit","ALU","GPU","RAM"],a:[1],w:"The Arithmetic Logic Unit does arithmetic (+ − × ÷) and logic (AND, OR, NOT, comparisons). The Control Unit schedules."},
{t:"Hardware",q:"A modern CPU executes roughly how many instructions per second?",c:["3–5 million","3–5 billion","3–5 trillion","300–500 million"],a:[1],w:"3–5 billion instructions per second, i.e. 3–5 GHz."},
{t:"Hardware",q:"Which correctly contrasts CPU and GPU?",c:["CPU: thousands of simple cores. GPU: a few powerful cores","CPU: a few powerful cores for sequential tasks. GPU: thousands of simple cores for parallel tasks","Both have identical architectures","GPU handles only display output and cannot compute"],a:[1],w:"CPU 4–24 powerful cores for complex sequential work; GPU thousands of small cores doing the same operation on many data points at once."},
{t:"Hardware",q:"Which memory is volatile?",c:["ROM","RAM","SSD","HDD"],a:[1],w:"RAM loses its contents when power is cut. ROM and secondary storage are non-volatile."},
{t:"Hardware",q:"Where does a phone's bootloader live?",c:["RAM","ROM","SSD","Cloud storage"],a:[1],w:"ROM — firmware burned in at the factory, non-volatile, unmodifiable in normal operation."},
{t:"Hardware",q:"When you run a Python script, your variables and lists live in:",c:["ROM","RAM","The hard disk","The CPU cache only"],a:[1],w:"RAM, for the duration of the program. They are cleared when it closes."},
{t:"Hardware",q:"Which sensor detects rotational movement?",c:["Accelerometer","Gyroscope","Barometer","Proximity sensor"],a:[1],w:"Gyroscope — used in racing games, navigation and camera stabilisation. The accelerometer handles movement and orientation."},
{t:"Hardware",q:"Which sensor turns the touchscreen off during a phone call?",c:["Light sensor","Proximity sensor","Accelerometer","Temperature sensor"],a:[1],w:"The proximity sensor detects the phone near your ear."},
{t:"Hardware",q:"The 2012 breakthrough that demonstrated GPU power for computer vision was:",c:["AlphaGo","AlexNet","ImageNet's founding","ResNet"],a:[1],w:"AlexNet, trained on GPUs."},
{t:"Hardware",q:"NVIDIA's platform for GPU-accelerated computing is called:",c:["CUDA","TensorFlow","PyTorch","OpenCL"],a:[0],w:"CUDA — Compute Unified Device Architecture. PyTorch (Meta) and TensorFlow (Google) are the Python libraries that use it."},
{t:"Hardware",q:"Which is an output device?",c:["Microphone","Haptic feedback motor","Barometer","Touchscreen input layer"],a:[1],w:"Haptic feedback — the vibration you feel when tapping a keyboard — is output. Monitor, printer, speakers and actuators are the others."},

// ---- software ----
{t:"Software & OS",q:"Which statement about the operating system is correct?",c:["It starts last and stops first","It starts first, runs always, and never stops until shutdown","It only runs when an application requests it","It is a type of utility software"],a:[1],w:"The OS is the master program — system software, not utility software."},
{t:"Software & OS",q:"Linux runs approximately what share of the world's web servers?",c:["46%","66%","86%","96%"],a:[3],w:"~96%, per the slide. Android holds ~72% of the global smartphone market."},
{t:"Software & OS",q:"Which OS responsibility stops one app from reading another app's private data?",c:["Process management","Memory management","Security","File system"],a:[2],w:"Security — controlling which programs and users access which resources."},
{t:"Software & OS",q:"What translates generic OS instructions into commands for specific hardware?",c:["The kernel","Device drivers","The file system","The shell"],a:[1],w:"Device drivers — why your phone works with thousands of different peripherals."},
{t:"Software & OS",q:"Which are lossless compression formats? (Select all)",multi:true,c:["ZIP","7-Zip","JPEG","MP3"],a:[0,1],w:"ZIP and 7-Zip restore identical data. JPEG and MP3 are lossy — they permanently discard invisible pixel variations and inaudible frequencies."},
{t:"Software & OS",q:"Defragmentation is:",c:["Required regularly on SSDs","Used to reorganise fragmented files on an HDD, and not needed for SSDs","A form of lossy compression","A security utility"],a:[1],w:"HDD only, per the slide."},
{t:"Software & OS",q:"BitLocker and FileVault are examples of:",c:["Antivirus software","Encryption tools","Firewalls","Compression utilities"],a:[1],w:"Full-drive encryption — BitLocker on Windows, FileVault on macOS."},
{t:"Software & OS",q:"Which protocols do email clients use?",c:["HTTP and HTTPS","SMTP and IMAP","FTP and SSH","TCP and UDP only"],a:[1],w:"SMTP and IMAP."},
{t:"Software & OS",q:"A web browser parses which three things?",c:["HTML, CSS and JavaScript","HTML, SQL and Python","XML, JSON and CSS","HTTP, HTML and TCP"],a:[0],w:"HTML for structure, CSS for styling, JavaScript for behaviour."},
{t:"Software & OS",q:"Which best distinguishes an IDE from a source code editor?",c:["An IDE can only run code, not edit it","An IDE combines an editor, a runner, a debugger and often version control","A source code editor includes a debugger","They are the same thing"],a:[1],w:"IDE = all-in-one. PyCharm, VS Code with extensions, Google Colab. Notepad++ and Sublime Text are plain editors."},

// ---- interpreter/compiler & python ----
{t:"Python basics",q:"Which is true of an interpreter?",c:["It translates the entire source code before running","It translates line by line at runtime and shows errors as the program runs","It always produces faster execution than a compiler","It produces no output if any error exists"],a:[1],w:"Line by line, at runtime, with partial output even when errors exist. That last option describes a compiler."},
{t:"Python basics",q:"Which languages were given as compiled?",c:["Python and JavaScript","C, C++ and Java","Python and C","JavaScript and Java only"],a:[1],w:"C, C++ and Java compile. Python and JavaScript are interpreted."},
{t:"Python basics",q:"Python was designed by ___ and first released in ___.",c:["Guido van Rossum; 1991","Guido van Rossum; 2001","Dennis Ritchie; 1991","James Gosling; 1995"],a:[0],w:"Guido van Rossum, 1991."},
{t:"Python basics",q:"What is the file extension for a Google Colab notebook?",c:[".py",".ipynb",".colab",".pynb"],a:[1],w:".ipynb — IPython Notebook. You can also download as .py."},
{t:"Python basics",q:"Which variable names are valid? (Select all)",multi:true,c:["message_1","_total","1_message","greeting message"],a:[0,1],w:"Names may contain only letters, numbers and underscores, and must start with a letter or underscore. No spaces, no leading digit."},
{t:"Python basics",q:"Using a variable before defining it, or misspelling it, raises:",c:["TypeError","NameError","IndexError","SyntaxError"],a:[1],w:"NameError, with a traceback showing where it happened."},
{t:"Python basics",q:"What does print(3 / 2) output?",c:["1","1.5","2","TypeError"],a:[1],w:"1.5 — division always returns a float."},
{t:"Python basics",q:"What does 3 ** 2 evaluate to?",c:["6","9","32","1.5"],a:[1],w:"9 — ** is exponentiation. The cube of 2 is written 2 ** 3."},
{t:"Python basics",q:'What is the result of "happy" + 23 + "rd birthday"?',c:["happy23rd birthday","A TypeError","happy 23 rd birthday","happyrd birthday"],a:[1],w:"TypeError — Python won't concatenate a string with an integer. Fix with str(23)."},
{t:"Python basics",q:"Why might 0.2 + 0.1 display as 0.30000000000000004?",c:["A bug unique to Python","How computers internally represent floating-point numbers — it happens in all languages","Because Colab rounds incorrectly","Because 0.2 is stored as a string"],a:[1],w:"A universal floating-point representation issue, and generally of little concern."},
{t:"Python basics",q:"Which symbol starts a comment in Python?",c:["//","#","/*","--"],a:[1],w:"The hash. Everything after it on that line is ignored by the interpreter."},
{t:"Python basics",q:'What does "ada lovelace".title() return?',c:["ADA LOVELACE","ada lovelace","Ada Lovelace","Ada lovelace"],a:[2],w:"Title case capitalises the first letter of each word."},
{t:"Python basics",q:"Which method removes whitespace from only the right-hand side of a string?",c:[".lstrip()",".rstrip()",".strip()",".trim()"],a:[1],w:"rstrip() right, lstrip() left, strip() both. There is no .trim() in Python."},
{t:"Python basics",q:"What does \\n produce?",c:["A tab","A newline","A backslash","A null character"],a:[1],w:"\\n is newline, \\t is tab."},
{t:"Python basics",q:"Which are reasons Colab was chosen for this course? (Select all)",multi:true,c:["Zero setup — runs in the browser","Cell-by-cell execution makes debugging easier","Free access to GPUs and TPUs","It compiles Python to machine code for speed"],a:[0,1,2],w:"The last is false — Python is interpreted. The five stated reasons are zero setup, cell-by-cell execution, Gemini AI assistance, pre-installed libraries, and easy sharing."},

// ---- lists ----
{t:"Lists & tuples",q:"In Python, the first element of a list is at index:",c:["1","0","-1","Depends on the list"],a:[1],w:"0. A list of length 4 has indices 0, 1, 2, 3."},
{t:"Lists & tuples",q:"What does bicycles[-1] return?",c:["An error","The first element","The last element","The second-to-last element"],a:[2],w:"Negative indexing counts from the end. [-1] is always the last item."},
{t:"Lists & tuples",q:"Which method adds an element at the END of a list?",c:["insert()","append()","add()","extend() only"],a:[1],w:"append(). insert(i, x) places at a specific index."},
{t:"Lists & tuples",q:"Which removes an element AND lets you keep using its value?",c:["del","pop()","remove()","clear()"],a:[1],w:"pop() removes and returns. del discards. remove() deletes by value."},
{t:"Lists & tuples",q:"motorcycles.remove('Ducati') when 'Ducati' appears three times will:",c:["Remove all three","Remove only the first occurrence","Raise an error","Remove the last occurrence"],a:[1],w:"Only the first. Use a loop to remove every occurrence."},
{t:"Lists & tuples",q:"Which permanently sorts a list?",c:["sorted(cars)","cars.sort()","cars.sorted()","sort(cars)"],a:[1],w:"sort() is a method and changes the list permanently. sorted() is a function returning a new list."},
{t:"Lists & tuples",q:"After print(sorted(cars)), what happens to the original list?",c:["It is permanently sorted","It is unchanged","It is reversed","It is emptied"],a:[1],w:"sorted() is temporary — it returns a sorted copy and leaves the original alone."},
{t:"Lists & tuples",q:"cars.reverse() does what?",c:["Sorts in reverse alphabetical order","Inverts the current order of the list, permanently","Returns a reversed copy","Sorts alphabetically then reverses"],a:[1],w:"It only inverts the order — no alphabetising. For reverse-alphabetical use sort(reverse=True)."},
{t:"Lists & tuples",q:"A list has four items. What does lst[4] do?",c:["Returns the last item","Returns None","Raises IndexError: list index out of range","Adds a new empty item"],a:[2],w:"Valid indices are 0–3. Classic off-by-one."},
{t:"Lists & tuples",q:"What does list(range(2, 11, 2)) produce?",c:["[2, 4, 6, 8, 10]","[2, 4, 6, 8, 10, 12]","[2, 3, 4, 5, 6, 7, 8, 9, 10]","[1, 3, 5, 7, 9]"],a:[0],w:"Start 2, step 2, stop before 11 → [2,4,6,8,10]."},
{t:"Lists & tuples",q:"range(1, 5) generates:",c:["1, 2, 3, 4, 5","1, 2, 3, 4","0, 1, 2, 3, 4","2, 3, 4, 5"],a:[1],w:"The end value is excluded. For 1–5 you'd write range(1, 6)."},
{t:"Lists & tuples",q:"For digits = [1,2,3,4,5,6,7,8,9,0], what does sum(digits) return?",c:["44","45","50","0"],a:[1],w:"45. min() gives 0 and max() gives 9."},
{t:"Lists & tuples",q:"Which is the correct list comprehension for the first ten squares?",c:["[for value in range(1,11): value ** 2]","[value ** 2 for value in range(1, 11)]","[value ** 2 for value in range(1, 11):]","squares.append(value ** 2 for value in range(1,11))"],a:[1],w:"Expression first, then the for clause, and NO colon at the end."},
{t:"Lists & tuples",q:"What does players[0:3] return?",c:["Items at indices 0, 1, 2, 3","Items at indices 0, 1, 2","Items at indices 1, 2, 3","The first and third items"],a:[1],w:"Start inclusive, end exclusive — the same rule as range()."},
{t:"Lists & tuples",q:"What does players[-3:] return?",c:["The first three items","The last three items","Everything except the last three","An error"],a:[1],w:"Negative start, omitted end → the last three."},
{t:"Lists & tuples",q:"Which correctly makes an INDEPENDENT copy of a list?",c:["friend_foods = my_foods","friend_foods = my_foods[:]","friend_foods == my_foods","friend_foods = my_foods[0]"],a:[1],w:"The [:] slice. Plain assignment creates a second name for the same list, so changes through either name affect both."},
{t:"Lists & tuples",q:"friend_foods = my_foods, then my_foods.append('cannoli'). What is in friend_foods?",c:["The original items only","The original items plus 'cannoli'","An empty list","An error is raised"],a:[1],w:"Both variables point at the same list object, so 'cannoli' appears in both."},
{t:"Lists & tuples",q:"A tuple is defined with:",c:["Square brackets []","Parentheses ()","Curly braces {}","Angle brackets <>"],a:[1],w:"Parentheses. A tuple is an immutable list."},
{t:"Lists & tuples",q:"dimensions = (200, 50). What does dimensions[0] = 250 do?",c:["Changes the first value to 250","Raises a TypeError","Creates a new tuple","Appends 250"],a:[1],w:"TypeError: 'tuple' object does not support item assignment."},
{t:"Lists & tuples",q:"Which operations on a tuple are allowed? (Select all)",multi:true,c:["Reading an element by index","Looping through it with a for loop","Reassigning the whole variable to a new tuple","Changing one element in place"],a:[0,1,2],w:"Everything but changing an element. You can rebind the variable — dimensions = (400, 100) is fine."},
{t:"Lists & tuples",q:"Which statement about for loops and indentation is TRUE?",c:["Forgetting the colon after 'for' produces a logical error with no message","Forgetting to indent an additional line produces no error message but wrong output","Unnecessary indentation runs fine","Missing indentation after 'for' produces correct output"],a:[1],w:"That's the silent one — the unindented line runs once after the loop, using the last value. The other three are syntax errors that stop the program."},
{t:"Lists & tuples",q:"In a for loop, non-indented lines that follow the loop body execute:",c:["Once per iteration","Once, after the loop completes","Never","Before the loop starts"],a:[1],w:"Indentation alone determines what's inside the loop."},
{t:"Lists & tuples",q:"Which are FUNCTIONS rather than list methods? (Select all)",multi:true,c:["len()","sorted()","sort()","reverse()"],a:[0,1],w:"len() and sorted() are functions — the list goes in the parentheses. sort() and reverse() are methods, called with dot notation."}
];

/* ===================================================================
   Assemble the course object the shared renderer consumes.
   =================================================================== */
const SECTION_META = [
 {
  "id": "computing",
  "title": "Computing &amp; the IPO model",
  "tag": "Lectures 1, 2, 4, 9",
  "lede": "The single most repeated idea in the course. He said explicitly: when asked to define computing, <em>do not mention computers</em>.",
  "navLabel": "Computing & IPO"
 },
 {
  "id": "data",
  "title": "Data &amp; the DIKW chain",
  "tag": "Lectures 2, 9",
  "lede": "Pillar 1 of computing, plus the four-layer ladder he taught twice with two full case studies.",
  "navLabel": "Data & DIKW"
 },
 {
  "id": "classify",
  "title": "Data classification",
  "tag": "Lectures 3, 5, 9, 14 · heaviest topic",
  "lede": "Four independent classification schemes. Every one of the nine official practice MCQs in the deck comes from this section — treat that as a strong hint.",
  "navLabel": "Data classification"
 },
 {
  "id": "algo",
  "title": "Algorithms",
  "tag": "Lectures 5, 14",
  "lede": "Pillar 2. The five properties are near-certain exam material — he listed them in both the recorded lecture and the live revision.",
  "navLabel": "Algorithms"
 },
 {
  "id": "hardware",
  "title": "Hardware",
  "tag": "Lectures 6, 14",
  "lede": "Pillar 3. Know the CPU/GPU contrast and the volatile/non-volatile memory split — those are the two comparisons he kept returning to.",
  "navLabel": "Hardware"
 },
 {
  "id": "software",
  "title": "Software, OS &amp; utilities",
  "tag": "Lectures 6, 7, 14",
  "lede": "Pillar 4, in three layers: system → utility → application. Plus the interpreter/compiler split that leads into Python.",
  "navLabel": "Software & OS"
 },
 {
  "id": "python",
  "title": "Python basics",
  "tag": "Lectures 7, 8, 10, 14",
  "lede": "Variables, strings, numbers, comments and Colab. Syntax questions here are the easiest marks on the paper.",
  "navLabel": "Python"
 },
 {
  "id": "lists",
  "title": "Lists, slicing &amp; tuples",
  "tag": "Lectures 11–13, 15, 16",
  "lede": "Five lectures — the largest Python block, and the most recent, so it is fresh in the question-setter's mind too.",
  "navLabel": "Lists & tuples"
 }
];

window.COURSE = {
  slug: "foundations-of-computing",
  eyebrow: "IIT Jodhpur \u00b7 B.S. Management & Technology \u00b7 Semester 1",
  heading: "Foundations of Computing<br>Quiz 1 Revision",
  sub: "Everything examinable from all 16 lectures \u2014 compressed for a 20-minute, 60-question sprint. Built from the lecture summaries, full transcripts and the 267-slide course deck.",

  briefTag:  "verified from Live Lecture 3",
  briefLede: "Dr. Aman Pathak announced the quiz format live on 19 September, and the official schedule sets the timing. These details come from those two sources, not from guesswork.",
  briefHtml: "<div class=\"grid2\">\n      <div class=\"card\">\n        <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">What was announced</h4>\n        <ul style=\"margin:0;padding-left:19px;font-size:14.5px;line-height:1.7\">\n          <li><strong>Saturday, 26 September, 5:00–5:20 PM IST.</strong> Join from <strong>4:45 PM</strong> — there is a 15-minute buffer for proctoring setup. Delivered on the LMS with dual-device proctoring.</li>\n          <li><strong>20 minutes, 60 questions.</strong> His stated rule of thumb: “three questions per minute.”</li>\n          <li><strong>MCQ only</strong> — “single correct or multiple correct.” Expect some multi-select.</li>\n          <li>Likely delivered as an <strong>online form</strong>; the exam page lists LMS delivery with dual-device proctoring.</li>\n          <li><strong>Best 2 of 3 quizzes count.</strong> A missed attempt scores zero, so this one is effectively free insurance for the other two.</li>\n        </ul>\n      </div>\n      <div class=\"card\">\n        <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">Syllabus, in his words</h4>\n        <p style=\"font-size:14.5px\">“Whatever lectures you have till tomorrow, that is on <strong>20th of September</strong> — all the lectures that are either in the form of recorded lectures or in the form of live sessions — are the syllabus for the quiz.”</p>\n        <div class=\"warnbox\" style=\"margin-top:12px;border-left-color:var(--bad);background:var(--bad-soft)\"><b>Time correction.</b> In the Live Lecture 3 recording Dr. Pathak said “8am”. The official exam schedule says <strong>5:00–5:20 PM IST</strong>. Go by the schedule — join the LMS from 4:45 PM.</div>\n        <div class=\"warnbox\" style=\"margin-top:12px\">\n          <b>One ambiguity.</b> He named <em>Working with Lists Part&nbsp;2</em> as the last topic, but <em>Part&nbsp;3</em> (copying lists, tuples) also dropped on 20 September. By his own date rule it is in scope. It is only ~10 minutes of material — learn it.\n        </div>\n        <div class=\"warnbox\" style=\"margin-top:10px;border-left-color:var(--good);background:var(--good-soft)\">\n          <b>Out of scope.</b> The course deck runs on to <code>if</code> statements, dictionaries, <code>while</code> loops and functions. None of that has been lectured yet. Don't revise it.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\" style=\"margin-top:14px;border-left:3px solid var(--clay)\">\n      <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">The real constraint: 20 seconds per question</h4>\n      <p style=\"font-size:14.5px;color:var(--ink-2)\">This is a recall test, not a reasoning test. You cannot derive anything — you either know it cold or you lose the question. Three consequences for how you revise and sit it:</p>\n      <ul style=\"margin:10px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7\">\n        <li><strong>Drill recognition, not understanding.</strong> Definitions, the classification trees, and which Python method does what are the whole game.</li>\n        <li><strong>Never re-read a question.</strong> If the answer isn't there in ~15 seconds, mark a guess and move. 60 attempted beats 45 perfected.</li>\n        <li><strong>Watch for multi-correct.</strong> Read the stem for “select all”, then commit. Don't audit your single-select answers for hidden second options.</li>\n      </ul>\n    </div>",

  mapLede: "All 16 lectures in scope. The three live sessions largely re-teach the recorded ones, which is a useful signal: material repeated across both is what he thinks matters.",
  syllabusNote: "everything to 20 Sep",

  drillLede: "Nine of these are the actual \u201cTest your knowledge\u201d questions from the course deck \u2014 marked <span style=\"font-family:var(--mono);font-size:11px;background:var(--clay-soft);color:var(--clay);padding:1px 7px;border-radius:99px\">FROM DECK</span>. The rest are written from the lectures. Turn the pacer on to rehearse the real 20-second clock.",

  footer: "Compiled 22 September 2026 from the IITJ LMS: 16 lecture AI-summaries, 16 full transcripts (512,000 characters) and the shared 267-slide deck. Quiz logistics from the official exam schedule (timings) and the Live Lecture 3 recording of 19 September (format and syllabus); schedule corrected 26 September. Topic weightings are an estimate, not an official mark scheme. <strong>This is a student-made study aid, not official IIT Jodhpur or Masai School course material</strong> \u2014 always check the LMS for the authoritative syllabus and quiz details.",

  lectures: LECTURES,
  weights:  WEIGHTS,
  traps:    TRAPS,
  questions: Q,
  sections: SECTION_META.map(m => Object.assign({}, m, {topics: SECTIONS["s-" + m.id]}))
};
