/* ===================================================================
   Algorithmic Thinking in Business — Quiz 1
   Dr. Deepak Kumar Saxena. Built from the in-scope lecture summaries
   and full transcripts on the IITJ LMS, 26 September 2026.
   Scope: Modules 1 and 2 only — linear data structures.
   =================================================================== */

const LECTURES=[
 [1,"Week 1 — Introduction to Algorithms","Data, variables, functions, flowcharts","rec"],
 [2,"Week 1 — Pseudocode Representations","Pseudocode vs code, data types","rec"],
 [3,"Week 1 — Live Lecture 1","Course frame, algorithm vs code","live"],
 [4,"Week 2 — Properties of Algorithms Part A","The five core properties","rec"],
 [5,"Week 2 — Properties of Algorithms Part B","Four execution properties + 3 algorithm types","rec"],
 [6,"Week 2 — Arrays","Indexing, operations, limits","rec"],
 [7,"Week 3 — Linked Lists","Nodes, pointers, three variants","rec"],
 [8,"Week 3 — Live Lecture 2","Properties + arrays and linked lists revision","live"],
 [9,"Week 4 — Stacks","LIFO, push/pop/peek/size, overflow","rec"],
 [10,"Week 4 — Queue Fundamentals","FIFO, enqueue/dequeue, static vs dynamic","rec"],
 [11,"Week 5 — Queue Types and Applications","Linear, circular, priority, deque","rec"],
 [13,"Week 5 — Live Lecture 3","Stacks and queues revision + quiz brief","live"]
];

const WEIGHTS=[
 ["Queues",18],["Properties of algorithms",16],["Arrays",14],["Stacks",14],
 ["Linked lists",13],["Types of algorithms",9],["Pseudocode & data types",8],["Algorithm basics",8]
];

const SECTION_META=[
 {id:"basics", navLabel:"Basics", title:"What an algorithm is",
  tag:"Lectures 1, 3 · Module 1",
  lede:"Four terms he defines and then reuses all semester — data, variable, algorithm, function — plus the flowchart symbols."},
 {id:"pseudo", navLabel:"Pseudocode", title:"Pseudocode &amp; data types",
  tag:"Lectures 2, 3 · Module 1",
  lede:"The middle layer between plain English and real code, and the four data types you pick between."},
 {id:"props", navLabel:"Properties", title:"Properties of a good algorithm",
  tag:"Lectures 4, 5, 8 · heaviest topic",
  lede:"Nine properties in two groups. He drilled these across two recorded lectures and a live session, with a worked good/bad example for each."},
 {id:"types", navLabel:"Algorithm types", title:"Three types of algorithm",
  tag:"Lectures 5, 8",
  lede:"Divide and conquer, greedy, dynamic programming — each with a business scenario. Expect a match-the-scenario question."},
 {id:"arrays", navLabel:"Arrays", title:"Arrays",
  tag:"Lectures 6, 8 · Module 2",
  lede:"The first linear data structure. Know the five operations and, more importantly, which of them are instant and which are slow."},
 {id:"linked", navLabel:"Linked lists", title:"Linked lists",
  tag:"Lectures 7, 8 · Module 2",
  lede:"What arrays cannot do. Three variants, and a clean contrast table against arrays that is very likely to be tested."},
 {id:"stacks", navLabel:"Stacks", title:"Stacks",
  tag:"Lectures 9, 13 · Module 2",
  lede:"LIFO. Four operations, two errors, and the static/dynamic split — with the Photoshop and Excel numbers he quoted."},
 {id:"queues", navLabel:"Queues", title:"Queues",
  tag:"Lectures 10, 11, 13 · Module 2 · largest block",
  lede:"FIFO, then four types of queue. The most recent material in scope, and the richest in named applications."}
];

const SECTIONS={
"s-basics":[
 {t:"The four terms",src:"L#1 · L#3",h:`
  <div class="def">An <b>algorithm</b> is a series of organised, step-by-step instructions that converts <b>input data</b> into a <b>desired output</b>.</div>
  <div class="scroller"><table><thead><tr><th>Term</th><th>Definition</th><th>Tea-making analogy</th></tr></thead><tbody>
   <tr><td><strong>Data</strong></td><td>The actual values you work with. <strong>Changes with each run</strong> of the algorithm</td><td>How much water and milk, for this many people</td></tr>
   <tr><td><strong>Variable</strong></td><td>A construct that <strong>holds data</strong> during computation</td><td>The saucepan, the teacup — the vessels</td></tr>
   <tr><td><strong>Algorithm</strong></td><td>The organised steps that complete the task</td><td>The whole recipe</td></tr>
   <tr><td><strong>Function</strong></td><td>A <strong>reusable subgroup</strong> of steps, common across algorithms</td><td>&ldquo;Provide heat&rdquo; — the same wherever it appears</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Why variables and not hard-coded numbers?</b> Hard-coding makes the algorithm work once. Variables let the <em>same</em> algorithm run on different data — that is what makes it reusable.</div>
  <h4>Flowchart symbols — near-certain exam material</h4>
  <div class="scroller"><table><thead><tr><th>Shape</th><th>Means</th></tr></thead><tbody>
   <tr><td><strong>Rounded rectangle</strong></td><td>Start and end</td></tr>
   <tr><td><strong>Rectangle</strong></td><td>Processing step</td></tr>
   <tr><td><strong>Trapezoid</strong> (slanted rectangle)</td><td><strong>Input / output</strong></td></tr>
   <tr><td><strong>Diamond</strong></td><td><strong>Decision</strong> — branching, yes/no</td></tr>
   <tr><td><strong>Arrow</strong></td><td>Flow of logic</td></tr>
   <tr><td>Rectangle with <strong>double vertical lines</strong></td><td>A <strong>function</strong> call</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>One diamond gives you only yes/no.</strong> Multiple conditions need diamonds in sequence.</p>`},
 {t:"The ATM example, and why algorithms grow",src:"L#1 · L#3",h:`
  <h4>ATM cash dispensing — his worked business algorithm</h4>
  <p style="font-size:14.5px">Read card (input) → request PIN (input) → <strong>verify PIN (decision)</strong> → if wrong, end → request amount (input) → <strong>check balance (decision)</strong> → if insufficient, end → <strong>release cash (function)</strong> → end.</p>
  <div class="def">The observation he wanted: <b>not all paths run in a single execution.</b> Each run takes one route through the decisions; the others are skipped.</div>
  <ul>
   <li>All algorithms are <strong>simplifications</strong> of the real process. &ldquo;Add water&rdquo; silently includes finding the water, the container, and filling it.</li>
   <li>They start simple and <strong>grow</strong> as checks, conditions and details are added — which is why good software gets frequent updates.</li>
   <li><strong>Business systems are deterministic and calculation-based</strong>, so they are easier to algorithmise than physical systems like robotics or self-driving cars, which decide in real time.</li>
  </ul>
  <div class="warnbox"><b>Algorithm vs code.</b> The algorithm is the logic and is <b>language-independent</b>. Code is one language's implementation of it. The same algorithm can be written in C, Java or Python and remain the same algorithm.</div>`}
],

"s-pseudo":[
 {t:"Pseudocode",src:"L#2 · L#3",h:`
  <div class="def"><b>Pseudocode</b> is plain English written in a structured, code-like way. It is understandable to a programmer <b>without being tied to any language's syntax</b>.</div>
  <div class="scroller"><table><thead><tr><th></th><th>Pseudocode</th><th>Code</th></tr></thead><tbody>
   <tr><td><strong>Language</strong></td><td>None — universal</td><td>Specific, with its own syntax and keywords</td></tr>
   <tr><td><strong>Audience</strong></td><td>Programmers <em>and</em> non-programmers</td><td>The compiler or interpreter</td></tr>
   <tr><td><strong>Role</strong></td><td>The bridge from flowchart to code</td><td>The implementation</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">It is easier to convert to real code than a flowchart is, and flowcharts become unmanageable once you have several conditions and loops.</p>
  <h4>The worked example — average of five marks</h4>
  <pre>Define S1, S2, S3, S4, S5 as integer
Define sum as integer
Define AVG as float
Input S1 to S5
sum = S1 + S2 + S3 + S4 + S5      <span class="o">// 60+65+70+55+60 = 310</span>
AVG = sum / 5                      <span class="o">// 62.0</span>
If AVG &gt; 60, output "First Class"
End</pre>
  <p style="font-size:14.5px">With a function it collapses to one line: <code>AVG = average(S1, S2, S3, S4, S5)</code>. Format is <code>variable = function_name(parameters)</code>.</p>`},
 {t:"The four data types",src:"L#2 · L#3",h:`
  <div class="scroller"><table><thead><tr><th>Type</th><th>Holds</th><th>Example</th></tr></thead><tbody>
   <tr><td><strong>Integer</strong></td><td>Whole numbers only</td><td>Marks (60, 65), number of students</td></tr>
   <tr><td><strong>Float</strong></td><td>Decimal numbers</td><td>Temperature, interest rate, CGPA, 62.5</td></tr>
   <tr><td><strong>Boolean</strong></td><td><strong>Two values only</strong> — 0/1, yes/no, true/false</td><td>Eligible or not, pass or fail</td></tr>
   <tr><td><strong>Character</strong> / text</td><td>Text and letters</td><td>Names, addresses, subject names</td></tr>
  </tbody></table></div>
  <h4>Why declare a type at all</h4>
  <ul>
   <li><strong>Optimises memory</strong> — a smaller type for a smaller need.</li>
   <li><strong>Prevents errors</strong> by rejecting invalid input.</li>
   <li>Classical languages <strong>require</strong> it; modern ones such as Python can infer it.</li>
  </ul>
  <div class="warnbox"><b>Two he tested directly.</b> A customer ID containing letters and numbers must be stored as <b>text</b>, not a number. And a true/false value should be <b>Boolean, not integer</b> — it uses less memory and blocks invalid values.</div>
  <p style="font-size:14.5px">Choosing types is a business question as much as a technical one — it comes from talking to end-users and domain experts. That is the <strong>business analyst's</strong> job: gather requirements, write the <strong>Software Requirement Specification (SRS)</strong>, and bridge business and developers.</p>`}
],

"s-props":[
 {t:"The five core technical properties",src:"L#4 · L#8 · highest-yield",h:`
  <p style="font-size:15px">These describe the algorithm itself, whichever way you write it down.</p>
  <div class="scroller"><table><thead><tr><th>#</th><th>Property</th><th>Means</th><th>His failing example</th></tr></thead><tbody>
   <tr><td>1</td><td><strong>Finiteness</strong></td><td>Terminates after a <strong>countable, finite</strong> number of steps</td><td>A shop customer-counter that loops back to &ldquo;has anyone entered?&rdquo; forever. <strong>Fix:</strong> reset the counter at midnight</td></tr>
   <tr><td>2</td><td><strong>Definiteness</strong></td><td>Each step has <strong>exactly one</strong> interpretation</td><td>&ldquo;Take some tea leaves, add a little milk, boil for a while&rdquo;. Fix: <strong>250 ml of milk</strong></td></tr>
   <tr><td>3</td><td><strong>Well-defined inputs</strong></td><td>External data is <strong>explicitly</strong> specified</td><td>&ldquo;Input the required value&rdquo;. Good: <strong>length and width</strong> for a rectangle's area</td></tr>
   <tr><td>4</td><td><strong>Well-defined outputs</strong></td><td><strong>At least one</strong> clear result, whatever the path</td><td>Loan process that displays &ldquo;Processing complete&rdquo;. Good: <strong>&ldquo;Approved&rdquo; or &ldquo;Rejected&rdquo;</strong></td></tr>
   <tr><td>5</td><td><strong>Effectiveness</strong></td><td>Solves it <strong>practically</strong> — within useful time and resources</td><td>&ldquo;Order more items whenever stock looks low&rdquo;. Good: <strong>if stock &lt; 50, order 200</strong></td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Effectiveness is about practicality, not just correctness.</b> A loan algorithm that takes three hours is <em>correct</em> and still ineffective, because the business needs the answer now.</div>`},
 {t:"The four execution and design properties",src:"L#5 · L#8",h:`
  <div class="scroller"><table><thead><tr><th>Property</th><th>Means</th><th>Fails when</th></tr></thead><tbody>
   <tr><td><strong>Language independence</strong></td><td>Logic is generic, not tied to one language</td><td>The steps are written in Python-specific syntax</td></tr>
   <tr><td><strong>Determinism</strong></td><td><strong>Same input → same output</strong>, every time</td><td>A discount <strong>randomly</strong> chosen between 5% and 20%. Also: <strong>visa approval</strong>, which turns on an officer's judgement</td></tr>
   <tr><td><strong>Feasibility</strong></td><td>Implementable within real memory, processing power and time</td><td>&ldquo;Determine the customer's true intention&rdquo;. Also: loading <em>every</em> employee record into memory at once instead of one at a time</td></tr>
   <tr><td><strong>Generality</strong></td><td>Handles <strong>all valid instances</strong>, no special cases</td><td>&ldquo;Give the bonus to employees named Rahul&rdquo;</td></tr>
  </tbody></table></div>
  <h4>Feasibility changes over time — his two examples</h4>
  <ul>
   <li><strong>Cloud computing</strong> existed in the 1990s but was infeasible on slow, expensive internet. It became feasible when bandwidth got cheap.</li>
   <li><strong>Machine learning</strong> algorithms date from the 1970s and became feasible only with cheap compute, abundant data and bigger memory.</li>
  </ul>
  <div class="def">Nine properties total: <b>five core</b> (finiteness, definiteness, well-defined inputs, well-defined outputs, effectiveness) and <b>four execution</b> (language independence, determinism, feasibility, generality).</div>`}
],

"s-types":[
 {t:"Divide and conquer, greedy, dynamic programming",src:"L#5 · L#8",h:`
  <div class="scroller"><table><thead><tr><th>Type</th><th>Core idea</th><th>His business example</th></tr></thead><tbody>
   <tr><td><strong>Divide and conquer</strong></td><td>Split a big problem into sub-problems, solve each <strong>independently</strong>, combine the results</td><td>A company <strong>audit</strong> split across regional offices, then merged into one report. Also a national sales report built from regional ones</td></tr>
   <tr><td><strong>Greedy</strong></td><td>Take the <strong>best option available right now</strong> — locally optimal, not necessarily globally</td><td><strong>Making change:</strong> ₹350 as one 200 + one 100 + one 50, largest notes first, rather than 35 tens</td></tr>
   <tr><td><strong>Dynamic programming</strong></td><td>Decide for the future using <strong>analysis of past data</strong></td><td><strong>Inventory reordering</strong> from three years of demand history. Air coolers: stock up before March, cut back before the rains</td></tr>
  </tbody></table></div>
  <h4>The match-the-scenario exercise he ran</h4>
  <div class="scroller"><table><thead><tr><th>Scenario</th><th>Answer</th></tr></thead><tbody>
   <tr><td>Manufacturer sets monthly output from current inventory, past production and expected demand</td><td><strong>Dynamic programming</strong></td></tr>
   <tr><td>Retail chain has each region prepare a report; head office combines them</td><td><strong>Divide and conquer</strong></td></tr>
   <tr><td>Investor with a limited budget takes the highest immediate return first</td><td><strong>Greedy</strong></td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The discriminator:</b> past data → dynamic programming. Split and recombine → divide and conquer. Best-right-now → greedy.</div>`}
],

"s-arrays":[
 {t:"What an array is",src:"L#6 · L#8",h:`
  <div class="def">A <b>linear data structure</b> arranges elements <b>sequentially</b>, so that reaching one element lets you find its neighbours through a defined relationship.</div>
  <h4>Four defining properties of an array</h4>
  <ul>
   <li><strong>Homogeneous</strong> — every element is the <strong>same data type</strong>. You cannot mix.</li>
   <li><strong>Indexed</strong> — elements are reached by index number, without reading through the others.</li>
   <li><strong>Indexing starts at 0.</strong> The first element is <code>[0]</code>, and a size-<em>n</em> array runs to <code>[n−1]</code>.</li>
   <li><strong>Contiguous memory</strong> — stored in one continuous block.</li>
  </ul>
  <pre>C / C++:  int sub[5] = {60, 65, 70, 50, 60};   <span class="o">// type and size required</span>
Python:   sub = [60, 65, 70, 50, 60]          <span class="o">// type inferred</span></pre>
  <p style="font-size:14.5px"><strong>Two-dimensional arrays</strong> use <code>array[i][j]</code>, i the row and j the column — a 7&times;5 array holds marks for 7 students across 5 subjects. Arrays can have n dimensions, but beyond two it gets impractical.</p>`},
 {t:"The five operations, and their cost",src:"L#6 · L#8 · very likely tested",h:`
  <div class="scroller"><table><thead><tr><th>Operation</th><th>Index known</th><th>Index unknown</th></tr></thead><tbody>
   <tr><td><strong>Read / access</strong></td><td><strong>Instantaneous</strong></td><td>Read sequentially</td></tr>
   <tr><td><strong>Search</strong></td><td>Instantaneous</td><td><strong>Linear search</strong> from index 0 — cost depends on position</td></tr>
   <tr><td><strong>Insert</strong></td><td>Easy <strong>at the end</strong> if there is space</td><td><strong>Slow</strong> at the start or middle — every later element must shift</td></tr>
   <tr><td><strong>Update</strong></td><td>Instantaneous</td><td>Search first, then update</td></tr>
   <tr><td><strong>Delete</strong></td><td>Instantaneous — sets the slot to <strong>null</strong></td><td>Search first, then delete</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Deleting does not free the memory.</b> The slot is set to null — &ldquo;nothing stored&rdquo;, which is not the same as zero — and the space stays allocated.</div>
  <h4>Advantages and limitations</h4>
  <div class="grid2">
   <div class="card" style="border-left:3px solid var(--good)"><p style="font-size:14px">Simple · memory-efficient for a known fixed size · <strong>instant direct access</strong> by index · the foundation other structures are built on · ideal for predictable datasets</p></div>
   <div class="card" style="border-left:3px solid var(--bad)"><p style="font-size:14px"><strong>Fixed length</strong> · hard to size correctly · resizing means a new array and a full copy · needs <strong>contiguous</strong> memory · poor for frequent insert/delete · sequential search degrades as it grows</p></div>
  </div>`}
],

"s-linked":[
 {t:"Linked lists",src:"L#7 · L#8",h:`
  <div class="def">A <b>linked list</b> chains elements with <b>pointers</b>. Each <b>node</b> holds data plus the address of the next node. It begins at the <b>head</b>, and the last node points to <b>null</b>.</div>
  <ul>
   <li>Elements are <strong>not contiguous</strong> — they can sit anywhere in memory. The <em>links</em> create the order, not physical proximity.</li>
   <li><strong>Insert and delete only rearrange pointers.</strong> Nothing shifts, unlike an array.</li>
   <li><strong>Reshuffling</strong> (a playlist shuffle) moves no data at all — only the pointers change.</li>
   <li>A deleted node stays in memory; it is simply no longer linked.</li>
  </ul>
  <h4>Three variants</h4>
  <div class="scroller"><table><thead><tr><th>Type</th><th>Links</th><th>Used for</th></tr></thead><tbody>
   <tr><td><strong>Singly linked</strong></td><td>Forward only</td><td>Sequential playback — &ldquo;play next&rdquo;</td></tr>
   <tr><td><strong>Doubly linked</strong></td><td>Forward <strong>and backward</strong></td><td>&ldquo;Play previous&rdquo;; often implements a deque</td></tr>
   <tr><td><strong>Circular</strong></td><td>Last node points <strong>back to the head</strong> instead of null</td><td>Repeat and shuffle, menu systems</td></tr>
  </tbody></table></div>
  <h4>Array vs linked list — the contrast to memorise</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Array</th><th>Linked list</th></tr></thead><tbody>
   <tr><td><strong>Size</strong></td><td>Fixed at creation</td><td><strong>Dynamic</strong></td></tr>
   <tr><td><strong>Memory</strong></td><td><strong>Contiguous</strong> block</td><td>Scattered; extra memory for the pointers</td></tr>
   <tr><td><strong>Access</strong></td><td><strong>Direct</strong> by index — instant</td><td><strong>No random access</strong> — follow links from the head</td></tr>
   <tr><td><strong>Insert / delete</strong></td><td>Slow — requires shifting</td><td><strong>Fast</strong> — just repoint</td></tr>
   <tr><td><strong>Use when</strong></td><td>Size known, access frequent</td><td>Size unknown, changes frequent</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>Nested linked lists</strong> handle hierarchies of varying size. His worked contrast: 8 semesters &times; 6 fixed courses → <strong>2D array</strong>; varying semesters with varying courses, retakes and deferrals → <strong>linked list of linked lists</strong>.</p>`}
],

"s-stacks":[
 {t:"Stacks — LIFO",src:"L#9 · L#13",h:`
  <div class="def">A <b>stack</b> adds and removes elements <b>only at the top</b>. The last element in is the first out — <b>LIFO</b>.</div>
  <h4>The four operations</h4>
  <div class="scroller"><table><thead><tr><th>Operation</th><th>Does</th><th>Takes a value?</th></tr></thead><tbody>
   <tr><td><strong>push(x)</strong></td><td>Adds x to the top</td><td><strong>Yes</strong></td></tr>
   <tr><td><strong>pop()</strong></td><td><strong>Removes and returns</strong> the top element</td><td>No — it takes whatever is on top</td></tr>
   <tr><td><strong>peek()</strong></td><td>Reads the top <strong>without removing</strong> it</td><td>No</td></tr>
   <tr><td><strong>size()</strong></td><td>Number of elements</td><td>No</td></tr>
  </tbody></table></div>
  <h4>Static vs dynamic — with his numbers</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Static stack</th><th>Dynamic stack</th></tr></thead><tbody>
   <tr><td><strong>Size</strong></td><td>Fixed at creation</td><td>Grows as needed</td></tr>
   <tr><td><strong>Built on</strong></td><td><strong>Arrays</strong></td><td><strong>Linked lists</strong></td></tr>
   <tr><td><strong>Examples</strong></td><td><strong>Adobe Photoshop: 50</strong> undos · <strong>Microsoft Excel: 100</strong> undos</td><td><strong>Microsoft Word</strong> — limited only by RAM</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Overflow vs underflow.</b> <b>Overflow</b> = pushing onto a <em>full</em> stack (too many browser tabs). <b>Underflow</b> = popping from an <em>empty</em> stack (pressing Back with no history).</div>
  <p style="font-size:14.5px"><strong>Applications:</strong> undo/redo, function call management, expression evaluation, depth-first search, browser history. A <strong>stack of stacks</strong> models browser windows each holding tabs.</p>`}
],

"s-queues":[
 {t:"Queues — FIFO",src:"L#10 · L#13",h:`
  <div class="def">A <b>queue</b> adds at the <b>rear</b> and removes from the <b>front</b>. First in, first out — <b>FIFO</b>, or first come first served.</div>
  <div class="scroller"><table><thead><tr><th>Operation</th><th>Does</th></tr></thead><tbody>
   <tr><td><strong>enqueue(x)</strong> / NQ</td><td>Adds at the <strong>rear</strong>. The rear pointer advances; the front does not move</td></tr>
   <tr><td><strong>dequeue()</strong> / DQ</td><td>Removes and returns the <strong>front</strong>. The front pointer advances; the rear does not move. Takes no parameter</td></tr>
   <tr><td><strong>peek() / front()</strong></td><td>Reads the front without removing</td></tr>
   <tr><td><strong>rear() / back()</strong></td><td>Reads the most recently added element</td></tr>
   <tr><td><strong>size()</strong></td><td>Number of elements</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">On an empty queue, the first element inserted occupies <strong>both</strong> the front and rear positions.</p>
  <div class="warnbox"><b>Which pointer moves?</b> Enqueue moves the <b>rear</b>. Dequeue moves the <b>front</b>. He made a point of this, so expect it.</div>
  <h4>Stack vs queue</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Stack</th><th>Queue</th></tr></thead><tbody>
   <tr><td>Order</td><td><strong>LIFO</strong></td><td><strong>FIFO</strong></td></tr>
   <tr><td>Insert at</td><td>Top (push)</td><td>Rear (enqueue)</td></tr>
   <tr><td>Remove from</td><td>Top (pop)</td><td>Front (dequeue)</td></tr>
   <tr><td>Used for</td><td>Undo/redo, function calls</td><td>Scheduling, buffering</td></tr>
  </tbody></table></div>
  <h4>Static vs dynamic queues</h4>
  <p style="font-size:14.5px"><strong>Static</strong> (arrays, fixed): Wi-Fi router packet queues — congestion drops packets by <strong>tail drop</strong> · keyboard and mouse buffers, typically <strong>16–64 bytes</strong> · vending machines · network printer buffers.<br>
  <strong>Dynamic</strong> (linked lists, growing): WhatsApp holding typed messages offline and sending them in order · Netflix, Spotify and Prime buffering segments · food-delivery apps at peak demand.</p>
  <p style="font-size:14.5px"><strong>Overflow:</strong> enqueueing into a full static queue — IRCTC under load. <strong>Underflow:</strong> dequeueing from an empty queue — a stream freezing when the buffer empties.</p>`},
 {t:"The four types of queue",src:"L#11 · L#13 · most recent material",h:`
  <div class="scroller"><table><thead><tr><th>Type</th><th>Behaviour</th><th>Applications he named</th></tr></thead><tbody>
   <tr><td><strong>Linear</strong></td><td>Plain FIFO. <strong>Wastes memory</strong> — once the rear hits the end of the array, nothing more fits even though dequeues freed space at the front</td><td>A normal line</td></tr>
   <tr><td><strong>Circular</strong></td><td>The last position <strong>links back to the first</strong>, so freed space is reused. Can run indefinitely</td><td><strong>Traffic lights</strong> (red→green→yellow→red) · turn-based multiplayer (Ludo) · looping playlists · <strong>round-robin CPU scheduling</strong></td></tr>
   <tr><td><strong>Priority</strong></td><td>Served by <strong>priority, not arrival order</strong>. Equal priority falls back to FIFO</td><td><strong>Hospital triage</strong> · air traffic control (low-fuel long-haul first) · Rajdhani and Shatabdi getting green signals · system over application tasks · <strong>Tatkal</strong> · disaster rescue</td></tr>
   <tr><td><strong>Deque</strong> (double-ended)</td><td>Insert <strong>and</strong> delete at <strong>both ends</strong> — combines FIFO and LIFO. Four operations: insert front, insert rear, delete front, delete rear</td><td><strong>Browser back and forward</strong> · undo and redo · train coaches added at either end · usually built on a <strong>doubly linked list</strong></td></tr>
  </tbody></table></div>
  <div class="def">His one-line summary: <b>linear</b> = a regular line · <b>circular</b> = a ring that reuses space · <b>priority</b> = a VIP line · <b>deque</b> = open at both ends.</div>
  <h4>Queue of queues</h4>
  <p style="font-size:14.5px">A main queue whose elements are themselves queues. Netflix: the main queue holds upcoming <strong>scene segments</strong>, each sub-queue holds the <strong>frames</strong>. When the connection drops, progress in the main queue survives but the interrupted sub-queue restarts — which is why video resumes slightly <em>before</em> where it stopped.</p>`}
]
};

const TRAPS=[
 ["Scope is linear data structures only","Modules 1 and 2. Trees and graphs are NOT examinable — the official syllabus stops at Queue Types and Live Lecture 3.","no trees, no graphs"],
 ["Trapezoid is input/output, diamond is decision","Rounded rectangle = start/end, plain rectangle = process, trapezoid = input/output, diamond = decision.","trapezoid = I/O"],
 ["Five core properties, four execution properties","Core: finiteness, definiteness, well-defined inputs, well-defined outputs, effectiveness. Execution: language independence, determinism, feasibility, generality.","5 + 4 = 9"],
 ["Determinism is about randomness, feasibility is about resources","A random discount fails determinism. Reading a customer's true intention fails feasibility.","random = determinism"],
 ["Effectiveness means practical, not just correct","A correct algorithm that takes three hours to approve a loan is ineffective.","correct but useless = ineffective"],
 ["Generality fails on hard-coded special cases","Giving the bonus only to employees named Rahul is the example he used.","no special cases"],
 ["Greedy is now, dynamic programming is the past","Greedy takes the best option available at this moment. Dynamic programming decides from historical data.","now vs history"],
 ["Array indexing starts at 0","A five-element array runs from index 0 to index 4.","0 to n-1"],
 ["Arrays are homogeneous and contiguous","One data type throughout, stored in a single continuous memory block.","same type, one block"],
 ["Deleting from an array does not free memory","It sets the slot to null — which is not zero — and the space stays allocated.","null, not freed, not zero"],
 ["Array insert at the end is easy, in the middle is slow","Inserting anywhere but the end shifts every later element.","the shift is the cost"],
 ["Linked lists have no random access","You cannot jump to the fifth node. You follow links from the head. That is the price of the flexibility.","follow the chain"],
 ["Circular linked list points to the head, not null","In a singly linked list the last node points to null. In a circular one it points back to the head.","null vs head"],
 ["Shuffling a linked list moves no data","Only the pointers are rearranged; the elements stay where they are in memory.","repoint, don't move"],
 ["push takes a value, pop does not","push(x) needs the value. pop() just takes whatever is on top. Same for enqueue versus dequeue.","add needs a value, remove doesn't"],
 ["Overflow is pushing to full, underflow is popping from empty","True for both stacks and queues. Too many tabs = overflow; Back with no history = underflow.","full/push, empty/pop"],
 ["Static uses arrays, dynamic uses linked lists","True for both stacks and queues. Photoshop 50 undos and Excel 100 undos are static; Word is dynamic.","array = fixed, list = growing"],
 ["Enqueue moves rear, dequeue moves front","Each operation moves only its own pointer. The other one stays put.","one pointer each"],
 ["A linear queue wastes memory; a circular one fixes it","Once the rear reaches the end of the array, a linear queue is full even if dequeues freed space at the front.","circular reuses the gap"],
 ["Priority queue falls back to FIFO on a tie","Priority decides the order; equal priorities are served in arrival order.","tie = FIFO"],
 ["A deque is both a stack and a queue","Insert and delete at both ends. Browser back/forward is the example.","both ends"],
 ["Algorithm is language-independent; code is not","The same algorithm can be written in C, Java or Python and remain the same algorithm.","logic vs implementation"]
];

/* ===================== QUESTION BANK ===================== */
const Q=[
// basics
{t:"Basics",q:"An algorithm is best defined as:",c:["A program written in a specific language","A series of organised steps converting input data into a desired output","A flowchart of a business process","A reusable block of code"],a:[1],w:"The definition is deliberately language-free — the logic, not the implementation."},
{t:"Basics",q:"In algorithm terminology, what changes with each run?",c:["The variables","The data","The functions","The algorithm"],a:[1],w:"Data is the actual values, which differ each execution. Variables are the containers that hold them."},
{t:"Basics",q:"A reusable subgroup of organised steps within a larger algorithm is a:",c:["Variable","Function","Module","Loop"],a:[1],w:"A function — 'provide heat' in the tea analogy, the same wherever it appears."},
{t:"Basics",q:"In a flowchart, which shape represents input or output?",c:["Rectangle","Diamond","Trapezoid","Rounded rectangle"],a:[2],w:"Trapezoid (slanted rectangle) = input/output. Rectangle = process, diamond = decision, rounded rectangle = start/end."},
{t:"Basics",q:"Which flowchart shape represents a decision?",c:["Diamond","Trapezoid","Rectangle with double vertical lines","Arrow"],a:[0],w:"Diamond. The rectangle with double vertical lines is a function call."},
{t:"Basics",q:"In a single execution of an algorithm with decision points:",c:["Every path is executed","Only one path is taken, determined by the decision outcomes","All paths run in parallel","Paths execute in the order they were written"],a:[1],w:"His key observation from the ATM example — each run takes one route and skips the others."},
{t:"Basics",q:"Why use variables instead of hard-coding values?",c:["Variables run faster","Variables make the same algorithm reusable with different data","Variables use less memory","Variables are required by all programming languages"],a:[1],w:"Hard-coded values make the algorithm work once. Variables let it run on any dataset."},
{t:"Basics",q:"Why are business systems easier to algorithmise than robotics?",c:["They process less data","They are deterministic and calculation-based, with less real-time physical decision-making","They use simpler programming languages","They have fewer users"],a:[1],w:"Physical systems must make real-time decisions about movement; business systems are largely calculation."},

// pseudocode
{t:"Pseudocode",q:"Pseudocode is:",c:["A simplified programming language with its own compiler","Plain English written in a structured, code-like way, not tied to any language","A type of flowchart","Machine code"],a:[1],w:"It is the bridge between flowchart and real code, readable by programmers and non-programmers alike."},
{t:"Pseudocode",q:"Which data type stores only two possible values?",c:["Integer","Float","Boolean","Character"],a:[2],w:"Boolean — 0/1, yes/no, true/false."},
{t:"Pseudocode",q:"A student's CGPA of 8.75 should be stored as:",c:["Integer","Float","Boolean","Character"],a:[1],w:"Float, because it has a decimal component."},
{t:"Pseudocode",q:"A customer ID containing both letters and numbers must be stored as:",c:["Integer","Float","Character/text","Boolean"],a:[2],w:"Text. He flagged this specifically — it looks like a number but isn't one."},
{t:"Pseudocode",q:"Why is Boolean preferred over integer for a pass/fail value?",c:["It is faster to type","It uses less memory and prevents invalid values","Integers cannot store 0 and 1","It is required by Python"],a:[1],w:"Memory efficiency plus error prevention — an integer would allow 7, which is meaningless here."},
{t:"Pseudocode",q:"What is the correct notation for calling a function in pseudocode?",c:["function_name = variable(parameters)","variable = function_name(parameters)","call function_name with variable","function_name -> variable"],a:[1],w:"variable = function_name(parameters), e.g. AVG = average(S1, S2, S3, S4, S5)."},
{t:"Pseudocode",q:"Which are benefits of using functions? (Select all)",multi:true,c:["Reduces the number of lines","Enables reuse across programs","Makes algorithms easier to maintain","Removes the need for variables"],a:[0,1,2],w:"Functions do not replace variables — they still take parameters and return values into variables."},
{t:"Pseudocode",q:"Who writes the Software Requirement Specification, bridging business and developers?",c:["The developer","The business analyst","The end user","The project sponsor"],a:[1],w:"The business analyst gathers requirements from domain experts and converts them into technical requirements."},

// properties
{t:"Properties",q:"How many core technical properties of an algorithm did he list?",c:["Three","Four","Five","Nine"],a:[2],w:"Five core: finiteness, definiteness, well-defined inputs, well-defined outputs, effectiveness. Plus four execution properties, making nine in total."},
{t:"Properties",q:"A retail counter algorithm that loops back to 'has a customer entered?' forever violates:",c:["Definiteness","Finiteness","Generality","Feasibility"],a:[1],w:"Finiteness. His fix was to add a reset condition — reset the counter at midnight."},
{t:"Properties",q:"'Take some tea leaves, add a little milk, boil for a while' violates:",c:["Finiteness","Definiteness","Effectiveness","Determinism"],a:[1],w:"Definiteness — 'some', 'a little' and 'a while' each have multiple interpretations."},
{t:"Properties",q:"A loan algorithm that outputs only 'Processing complete' violates:",c:["Well-defined inputs","Well-defined outputs","Finiteness","Feasibility"],a:[1],w:"The user cannot tell whether they were approved or rejected. Good output is 'Approved' or 'Rejected'."},
{t:"Properties",q:"'Order more items whenever stock looks low' violates effectiveness because:",c:["It never terminates","'Low' and 'more' are undefined, so different managers act differently and costs become inconsistent","It requires too much memory","It only works for one product"],a:[1],w:"His effective version: if stock < 50 units, raise a purchase order for 200 units."},
{t:"Properties",q:"An algorithm that randomly chooses a discount between 5% and 20% violates:",c:["Finiteness","Determinism","Generality","Definiteness"],a:[1],w:"Determinism requires the same input to produce the same output every time."},
{t:"Properties",q:"'Determine the customer's true intention' as an algorithm step violates:",c:["Determinism","Feasibility","Finiteness","Generality"],a:[1],w:"It is not strictly executable by a standard computing system without disproportionately complex AI."},
{t:"Properties",q:"Giving a bonus only to employees named 'Rahul' violates:",c:["Generality","Determinism","Finiteness","Effectiveness"],a:[0],w:"Generality requires the algorithm to handle all valid instances, not one special case."},
{t:"Properties",q:"Visa approval is a classic example of a process that is NOT:",c:["Finite","Deterministic","General","Feasible"],a:[1],w:"It depends on an officer's subjective judgement, so the same application can produce different outcomes."},
{t:"Properties",q:"Why was cloud computing infeasible in the 1990s despite the technology existing?",c:["The algorithms had not been invented","Internet speeds were slow and infrastructure expensive","There was no business demand","Security standards did not exist"],a:[1],w:"Feasibility is relative to available resources, and it changes over time. Machine learning is his other example — 1970s algorithms, recent feasibility."},
{t:"Properties",q:"Which are execution and design properties rather than core technical ones? (Select all)",multi:true,c:["Language independence","Determinism","Feasibility","Finiteness"],a:[0,1,2],w:"Finiteness is a core technical property. The fourth execution property is generality."},
{t:"Properties",q:"Loading every employee's record into memory at once rather than one at a time fails:",c:["Generality","Feasibility","Definiteness","Finiteness"],a:[1],w:"It is costly and impractical for a normal computing system — a resource constraint, so feasibility."},

// types
{t:"Algorithm types",q:"Splitting a company audit across regional offices and combining the reports is:",c:["Greedy","Divide and conquer","Dynamic programming","Linear search"],a:[1],w:"Divide into sub-problems, solve independently, recombine."},
{t:"Algorithm types",q:"A cashier giving ₹350 change as one ₹200, one ₹100 and one ₹50 note is using:",c:["Divide and conquer","A greedy algorithm","Dynamic programming","A priority queue"],a:[1],w:"Largest denomination first — the locally optimal choice at each step."},
{t:"Algorithm types",q:"Planning inventory from three years of demand history is:",c:["Greedy","Divide and conquer","Dynamic programming","Deterministic search"],a:[2],w:"Dynamic programming decides for the future from analysis of past data."},
{t:"Algorithm types",q:"A manufacturer setting monthly output from current inventory, past production and expected demand uses:",c:["Divide and conquer","Greedy","Dynamic programming","Generality"],a:[2],w:"Past data driving a future decision."},
{t:"Algorithm types",q:"An investor with a limited budget taking the highest immediate return first is using:",c:["Greedy","Dynamic programming","Divide and conquer","Priority scheduling"],a:[0],w:"Best available now, not necessarily globally optimal."},

// arrays
{t:"Arrays",q:"A linear data structure is one where:",c:["Elements are sorted","Elements are arranged sequentially, so reaching one lets you find its neighbours","All elements are the same type","Access is always instant"],a:[1],w:"Sequential arrangement with a defined relationship between positions."},
{t:"Arrays",q:"Which is NOT a property of an array?",c:["All elements share one data type","Elements are stored in contiguous memory","Elements are accessed by index","Size can grow freely as elements are added"],a:[3],w:"Fixed length is an array's defining limitation. Growing means creating a new array and copying."},
{t:"Arrays",q:"In an array of five elements, the valid index range is:",c:["1 to 5","0 to 5","0 to 4","1 to 4"],a:[2],w:"Indexing starts at 0, so a size-n array runs 0 to n−1."},
{t:"Arrays",q:"In a 2D array written array[i][j], what do i and j represent?",c:["i = column, j = row","i = row, j = column","i = size, j = type","i = start, j = end"],a:[1],w:"Row first, then column. A 7×5 array holds 7 students × 5 subjects."},
{t:"Arrays",q:"Inserting an element at index 0 of a full-ish array requires:",c:["Nothing special — it is instant","Shifting every subsequent element forward by one position","Creating a new array","Converting to a linked list"],a:[1],w:"Element 4 moves to 5, 3 to 4, and so on. This is why middle and front insertion is slow."},
{t:"Arrays",q:"When you delete an element from an array at a known index:",c:["The memory is freed and returned to the system","The slot is set to null and the space remains allocated","All later elements shift back automatically","The array shrinks by one"],a:[1],w:"Null means 'nothing stored' — which is not the same as zero — and the allocation stays."},
{t:"Arrays",q:"Searching an array when you do not know the index uses:",c:["Binary search","Linear search from index 0","Hash lookup","Direct access"],a:[1],w:"Start at 0 and compare each element in turn, so cost depends on where the element sits."},
{t:"Arrays",q:"Which are genuine limitations of arrays? (Select all)",multi:true,c:["Fixed length set at creation","Requires contiguous memory","Insertion in the middle requires shifting","Cannot store numbers"],a:[0,1,2],w:"Arrays store numbers perfectly well — they just have to all be the same type."},
{t:"Arrays",q:"Arrays are the better choice when:",c:["The number of elements changes constantly","The size is known in advance and fast direct access matters","Elements must be reordered frequently","Memory is heavily fragmented"],a:[1],w:"Predictable, fixed-size datasets with frequent indexed access."},

// linked lists
{t:"Linked lists",q:"In a singly linked list, the last node points to:",c:["The head","Null","Itself","The second-last node"],a:[1],w:"Null marks the end. A circular linked list is the one that points back to the head."},
{t:"Linked lists",q:"The entry point of a linked list is called the:",c:["Root","Head","Front","Index"],a:[1],w:"The head. Front and rear belong to queues; root belongs to trees."},
{t:"Linked lists",q:"Which linked list allows movement both forward and backward?",c:["Singly linked","Doubly linked","Circular","Nested"],a:[1],w:"Doubly linked — it implements 'play previous', and often underlies a deque."},
{t:"Linked lists",q:"Shuffling a music playlist implemented as a linked list works by:",c:["Copying the songs into a new order","Rearranging only the pointer connections","Sorting the array of songs","Rebuilding the list from scratch"],a:[1],w:"The data stays where it is in memory; only the links change."},
{t:"Linked lists",q:"Compared with an array, a linked list:",c:["Uses less memory per element","Allows direct access by index","Requires contiguous memory","Does not require contiguous memory"],a:[3],w:"Nodes can sit anywhere. The trade-offs are extra memory for pointers and no random access."},
{t:"Linked lists",q:"What is the main disadvantage of a linked list?",c:["It cannot grow","No random access — you must follow links from the head","It can only store one data type","It cannot be reordered"],a:[1],w:"You cannot jump to the fifth element; you walk the chain."},
{t:"Linked lists",q:"A programme with a varying number of semesters, each with a varying number of courses, is best modelled as:",c:["A 2D array","A linked list of linked lists","A circular queue","A stack of arrays"],a:[1],w:"Fixed 8 semesters × 6 courses would suit a 2D array; variability at both levels calls for nested linked lists."},
{t:"Linked lists",q:"Deleting a node from a linked list:",c:["Frees its memory immediately","Only adjusts pointers; the node remains in memory but is unlinked","Shifts all subsequent nodes","Requires rebuilding the list"],a:[1],w:"The previous node is redirected past it. Efficient compared with array deletion."},

// stacks
{t:"Stacks",q:"A stack follows which principle?",c:["FIFO","LIFO","FCFS","Priority"],a:[1],w:"Last In, First Out. Elements enter and leave only at the top."},
{t:"Stacks",q:"Which stack operation removes and returns the top element?",c:["push()","pop()","peek()","size()"],a:[1],w:"pop() takes no argument — it removes whatever is on top."},
{t:"Stacks",q:"Which operation reads the top element without removing it?",c:["pop()","peek()","size()","push()"],a:[1],w:"peek() — useful for checking before deciding whether to pop."},
{t:"Stacks",q:"Stack overflow occurs when you:",c:["Pop from an empty stack","Push onto a full stack","Peek at an empty stack","Call size() on a full stack"],a:[1],w:"Overflow is pushing to full. Popping from empty is underflow."},
{t:"Stacks",q:"Clicking the browser Back button with no history left is an example of:",c:["Stack overflow","Stack underflow","Queue underflow","A deque operation"],a:[1],w:"Underflow — attempting to pop from an empty stack."},
{t:"Stacks",q:"Static stacks are typically implemented using ___, and dynamic stacks using ___.",c:["linked lists; arrays","arrays; linked lists","arrays; arrays","linked lists; linked lists"],a:[1],w:"Arrays give a fixed size; linked lists grow."},
{t:"Stacks",q:"Which application did he cite as having a default limit of 100 undo operations?",c:["Adobe Photoshop","Microsoft Excel","Microsoft Word","Google Docs"],a:[1],w:"Excel 100, Photoshop 50. Word is dynamic and limited only by RAM."},
{t:"Stacks",q:"Which are standard applications of stacks? (Select all)",multi:true,c:["Undo/redo functionality","Function call management","Browser navigation history","CPU round-robin scheduling"],a:[0,1,2],w:"Round-robin scheduling is a circular queue application, not a stack one."},

// queues
{t:"Queues",q:"A queue follows which principle?",c:["LIFO","FIFO","Priority always","Random access"],a:[1],w:"First In, First Out — also described as first come, first served."},
{t:"Queues",q:"In a queue, elements are added at the ___ and removed from the ___.",c:["front; rear","rear; front","top; top","front; front"],a:[1],w:"Enqueue at the rear, dequeue from the front."},
{t:"Queues",q:"Which pointer moves during an enqueue operation?",c:["The front pointer","The rear pointer","Both","Neither"],a:[1],w:"Enqueue moves the rear. Dequeue moves the front. Each operation moves only its own pointer."},
{t:"Queues",q:"When the first element is added to an empty queue, it occupies:",c:["The front position only","The rear position only","Both the front and rear positions","Neither until a second element arrives"],a:[2],w:"With one element, front and rear are the same position."},
{t:"Queues",q:"What is the main limitation of a linear queue?",c:["It cannot be searched","Once the rear reaches the end of the array, no more can be added even if dequeues freed space at the front","It cannot store duplicates","It requires a linked list"],a:[1],w:"Memory wastage — exactly the problem the circular queue solves."},
{t:"Queues",q:"A circular queue solves the linear queue's problem by:",c:["Sorting the elements","Connecting the last position back to the first so freed space is reused","Doubling the array size","Using two front pointers"],a:[1],w:"It can theoretically be used indefinitely for insertion and deletion."},
{t:"Queues",q:"Traffic lights cycling red → green → yellow → red are an example of:",c:["A priority queue","A circular queue","A deque","A stack"],a:[1],w:"The cycle returns to the start — circular. Round-robin CPU scheduling and turn-based multiplayer games are the same pattern."},
{t:"Queues",q:"In a priority queue, what happens when two elements have the same priority?",c:["The later one is served first","Standard FIFO order applies","One is discarded","They are merged"],a:[1],w:"Priority decides the order; ties fall back to arrival order."},
{t:"Queues",q:"Hospital emergency triage is an example of:",c:["A linear queue","A circular queue","A priority queue","A deque"],a:[2],w:"Served by urgency, not arrival time. Tatkal bookings and air traffic control were his other examples."},
{t:"Queues",q:"A double-ended queue (deque) allows:",c:["Insertion at both ends but deletion only at the front","Insertion and deletion at both the front and the rear","Insertion only at the rear but deletion at both ends","Priority-based service"],a:[1],w:"Four operations: insert front, insert rear, delete front, delete rear. It combines FIFO and LIFO."},
{t:"Queues",q:"Browser back and forward buttons are best modelled by a:",c:["Circular queue","Priority queue","Deque","Linear queue"],a:[2],w:"Movement through history in both directions. Undo/redo is the same shape, and a deque is usually built on a doubly linked list."},
{t:"Queues",q:"Which are dynamic queue applications? (Select all)",multi:true,c:["WhatsApp holding messages while offline","Netflix buffering video segments","Food delivery apps at peak demand","Keyboard input buffers"],a:[0,1,2],w:"Keyboard buffers are static — typically 16–64 bytes, which is why fast typing can drop keystrokes."},
{t:"Queues",q:"A Wi-Fi router dropping packets when its queue is full uses which mechanism?",c:["Round robin","Tail drop","Priority pre-emption","Circular overwrite"],a:[1],w:"Tail drop — the static packet queue overflows and new arrivals are discarded."},
{t:"Queues",q:"Why does a video restart slightly before the interruption point after a connection drop?",c:["The player rewinds deliberately","Progress in the main queue survives but the interrupted sub-queue restarts from its beginning","The buffer is cleared entirely","Frames are re-downloaded in reverse"],a:[1],w:"Queue of queues: the main queue holds scene segments, each sub-queue holds frames."},
{t:"Queues",q:"Queue underflow occurs when:",c:["A static queue is full","You dequeue from an empty queue","The rear pointer reaches the array end","Two elements share a priority"],a:[1],w:"Nothing to remove. A stream freezing when the buffer empties is his example."},
{t:"Queues",q:"CPU round-robin scheduling, where each task gets a time slice in turn, is an application of:",c:["A stack","A circular queue","A priority queue","A deque"],a:[1],w:"Tasks cycle round and return to the first — circular. Note that priority queues also appear in CPU scheduling, for system versus application tasks."}
];

/* ===================================================================
   Assemble the course object.
   =================================================================== */
window.COURSE = {
  slug: "algorithmic-thinking-in-business",
  scopeShort: "Modules 1–2",
  eyebrow: "IIT Jodhpur · B.S. Management & Technology · Semester 1",
  heading: "Algorithmic Thinking in Business<br>Quiz 1 Revision",
  sub: "Modules 1 and 2 — algorithms and linear data structures. The examinable twelve lectures, compressed for a 40-question paper with negative marking.",

  briefTag: "from the official LMS announcement",
  briefLede: "Figures below are from the official Quiz 1 announcement and its attached syllabus document. Dr. Saxena also gave the scope directly in Live Lecture 3, and the two agree.",
  briefHtml: `
    <div class="grid2">
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">Confirmed on the official announcement</h4>
        <div class="scroller"><table><tbody>
          <tr><td><strong>Date</strong></td><td>Saturday 3 October</td></tr>
          <tr><td><strong>Window</strong></td><td>4:45–5:05 PM IST · join from <strong>4:30 PM</strong></td></tr>
          <tr><td><strong>Questions</strong></td><td><strong>40</strong>, for <strong>40 marks</strong></td></tr>
          <tr><td><strong>Type</strong></td><td>MCQ</td></tr>
          <tr><td><strong>Weight</strong></td><td>20% · best 2 of 3 · 40% of the course total</td></tr>
        </tbody></table></div>
        <div class="warnbox" style="margin-top:12px;border-left-color:var(--bad);background:var(--bad-soft)">
          <b>Negative marking.</b> +1 correct, <strong>−0.25 for a wrong answer</strong>, 0 if left blank.
        </div>
        <p style="font-size:13.5px;color:var(--ink-3);margin-top:11px">In Live Lecture 3 he described the format more loosely as &ldquo;MCQ, short answer, true/false or matching&rdquo;. The announcement says MCQ.</p>
      </div>
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">Scope — narrower than you might assume</h4>
        <p style="font-size:14.5px">He said it plainly: <em>&ldquo;the quiz will only be on the fundamentals, so module one and module two, which is linear data structures&hellip; whatever videos are released next, for example tree, that will not be part of the quiz.&rdquo;</em> The official syllabus document agrees — it lists <strong>#1 to #11 plus Live Lecture 3</strong>, and stops.</p>
        <div class="warnbox" style="margin-top:12px;border-left-color:var(--good);background:var(--good-soft)">
          <b>Trees and graphs are OUT.</b> Lectures #12 (Trees — Fundamentals), #14 (Tree Types) and #15 (Graphs) are <strong>not examinable</strong>, even though #12 was released before the cut-off date. Trees and graphs are non-linear structures, and the paper is linear structures only.
        </div>
        <p style="font-size:14.5px;margin-top:11px">So: algorithm basics, pseudocode, the nine properties, three algorithm types, and then <strong>arrays, linked lists, stacks and queues</strong>.</p>
      </div>
    </div>

    <div class="card" style="margin-top:14px;border-left:3px solid var(--clay)">
      <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">The two constraints: 30 seconds, and −0.25</h4>
      <p style="font-size:14.5px;color:var(--ink-2)">40 questions in 20 minutes is <strong>30 seconds each</strong> — more breathing room than most of your other papers, but still recall-paced.</p>
      <div class="scroller" style="margin-top:11px"><table><thead><tr><th>Situation</th><th>Expected value</th><th>Do</th></tr></thead><tbody>
        <tr><td>You know it</td><td><strong>+1.00</strong></td><td>Answer</td></tr>
        <tr><td>Rule out two of four</td><td><strong>+0.38</strong></td><td>Answer — clearly worth it</td></tr>
        <tr><td>Rule out one of four</td><td><strong>+0.17</strong></td><td>Answer</td></tr>
        <tr><td>Blind guess</td><td><strong>+0.06</strong></td><td>Answer, but it gains you next to nothing</td></tr>
        <tr><td>Leave blank</td><td><strong>0.00</strong></td><td>Only if genuinely lost</td></tr>
      </tbody></table></div>
      <ul style="margin:11px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7">
        <li><strong>Most of this paper is contrast pairs.</strong> LIFO vs FIFO, array vs linked list, static vs dynamic, overflow vs underflow, greedy vs dynamic programming. Learn them as pairs and the distractors give themselves away.</li>
        <li><strong>The properties are the other half.</strong> Nine of them, each with a memorable failing example. If you can name the failure, you can name the property.</li>
      </ul>
    </div>`,

  mapLede: "Twelve examinable lectures from Dr. Deepak Kumar Saxena, taught no-code — the logic, not the syntax. Lectures #12, #14 and #15 are shown on the LMS but are outside this quiz.",

  drillLede: "Questions written from the lectures and transcripts. There is no official practice set for this course. Turn the pacer on to rehearse the real 30-second tempo.",

  footer: "Compiled 26 September 2026 from the IITJ LMS: the in-scope lecture AI-summaries and full transcripts for Algorithmic Thinking in Business. Timings, question count, marking scheme and syllabus scope from the official LMS quiz announcement and its attached syllabus document. Topic weightings are an estimate, not an official mark scheme. <strong>This is a student-made study aid, not official IIT Jodhpur or Masai School course material</strong> — always check the LMS for the authoritative syllabus and quiz details.",

  lectures: LECTURES,
  weights:  WEIGHTS,
  traps:    TRAPS,
  questions: Q,
  sections: SECTION_META.map(m => Object.assign({}, m, {topics: SECTIONS["s-" + m.id]}))
};
