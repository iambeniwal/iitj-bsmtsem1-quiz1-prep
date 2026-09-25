/* ===================================================================
   Financial Accounting — Quiz 1
   Dr. Manisha Yadav. Built from the in-scope lecture summaries and
   full transcripts on the IITJ LMS, 26 September 2026.
   Scope: lectures #1–#15, to Trial Balance Part 2.
   =================================================================== */

const LECTURES=[
 [1,"Introduction — Financial Accounting","Course aims, the accounting cycle","rec"],
 [2,"Week 1 — Introduction to Accounting","Definition, three branches, the equation","rec"],
 [3,"Week 1 — Objectives, Users and Regulatory Environment","ICAI, MCA, SEBI, IFRS, Ind AS","rec"],
 [4,"Week 1 — Live Lecture 1","Profit ≠ cash, Satyam, five modules","live"],
 [5,"Week 2 — Accounting Concepts and Conventions I","Entity, going concern, money measurement, cost, dual aspect","rec"],
 [6,"Week 2 — Accounting Concepts and Conventions II","Period, matching, realisation + two exceptions","rec"],
 [7,"Week 3 — Accounting Concepts and Conventions III","The four conventions","rec"],
 [8,"Week 3 — The Double-Entry System I","Source documents, five account types, the equation","rec"],
 [9,"Week 3 — Live Lecture 2","Concepts revision, assets/liabilities/equity defined","live"],
 [10,"Week 4 — The Double-Entry System II","Personal/real/nominal, the three golden rules","rec"],
 [11,"Week 4 — Journal Entries Part 1","Journalising, drawings, ledger introduced","rec"],
 [12,"Week 5 — Journal Entries Part 2","Opening entries, balancing, BD and CD","rec"],
 [13,"Week 5 — Trial Balance Part 1","Objectives, total vs balance method","rec"],
 [14,"Week 5 — Live Lecture 3","Journal and ledger practice, Vogue case","live"],
 [15,"Week 6 — Trial Balance Part 2","Suspense account, the four error types","rec"]
];

const WEIGHTS=[
 ["Concepts & conventions",20],["Debit/credit & account types",16],["Journal & ledger",15],
 ["Trial balance & errors",15],["The accounting equation",12],["Objectives, users, regulators",12],
 ["What accounting is",10]
];

const SECTION_META=[
 {id:"what", navLabel:"What accounting is", title:"What accounting is",
  tag:"Lectures 2, 4 · Module 1",
  lede:"The textbook definition, the four verbs inside it, and the three branches. Short, fixed wording, easy marks."},
 {id:"users", navLabel:"Users &amp; regulators", title:"Objectives, users &amp; the regulatory environment",
  tag:"Lecture 3 · Module 1",
  lede:"Five objectives, two classes of user, and the three Indian regulators. The ICAI/MCA/SEBI split is a near-certain question."},
 {id:"concepts", navLabel:"Concepts", title:"The eight accounting concepts",
  tag:"Lectures 5, 6, 9 · heaviest topic",
  lede:"Concepts are the assumptions accounting rests on. Each comes with one giveaway example — learn the example and the name follows."},
 {id:"conventions", navLabel:"Conventions", title:"The four accounting conventions",
  tag:"Lecture 7",
  lede:"Conventions are customs, not formal rules. Conservatism is the one with the most testable detail."},
 {id:"equation", navLabel:"The equation", title:"The accounting equation",
  tag:"Lectures 2, 8, 9, 14",
  lede:"She called it the one thing you must be completely comfortable with before anything else works."},
 {id:"accounts", navLabel:"Accounts &amp; rules", title:"Account types &amp; the debit/credit rules",
  tag:"Lectures 8, 9, 10",
  lede:"Two rule systems taught side by side — the modern equation approach and the traditional three golden rules. Know both."},
 {id:"journal", navLabel:"Journal &amp; ledger", title:"Journal &amp; ledger",
  tag:"Lectures 10, 11, 12, 14",
  lede:"The mechanics: journalising, posting, To and By, opening entries, and balancing with BD and CD."},
 {id:"trial", navLabel:"Trial balance", title:"Trial balance &amp; errors",
  tag:"Lectures 13, 15 · most recent",
  lede:"Step three of the cycle. The important insight is what a balanced trial balance still fails to catch."}
];

const SECTIONS={
"s-what":[
 {t:"The definition and the four steps",src:"L#2",h:`
  <div class="def"><b>Accounting</b> is the process of <b>identifying, recording, measuring and communicating</b> financial information about an economic entity, to permit judgements and decisions by its users.</div>
  <div class="scroller"><table><thead><tr><th>Step</th><th>What it means</th></tr></thead><tbody>
   <tr><td><strong>Identifying</strong></td><td>Recognising which events have a <strong>financial impact</strong> — and filtering out those that do not</td></tr>
   <tr><td><strong>Recording</strong></td><td>Documenting them systematically, in writing</td></tr>
   <tr><td><strong>Measuring</strong></td><td>Expressing everything in <strong>monetary terms</strong></td></tr>
   <tr><td><strong>Communicating</strong></td><td>Reporting to the stakeholders who must decide</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">Accounting is called <strong>the language of business</strong> because every organisation depends on it to record, communicate and decide.</p>`},
 {t:"The three branches",src:"L#2",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Financial accounting</th><th>Management accounting</th><th>Cost accounting</th></tr></thead><tbody>
   <tr><td><strong>For whom</strong></td><td><strong>External</strong> — investors, creditors, lenders, regulators</td><td><strong>Internal</strong> — managers and decision-makers</td><td>Internal — a narrower branch of management accounting</td></tr>
   <tr><td><strong>Format</strong></td><td><strong>Standardised</strong>, follows Ind AS / IFRS</td><td><strong>No standard format</strong> — it stays inside the firm</td><td>No standard format</td></tr>
   <tr><td><strong>Focus</strong></td><td>Overall performance and financial position</td><td>Detailed, <strong>forward-looking</strong> — planning and budgeting</td><td>The <strong>cost of producing</strong> goods or services</td></tr>
   <tr><td><strong>Published?</strong></td><td><strong>Yes</strong>, publicly</td><td>No</td><td>No</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Cost accounting is a specialised branch of management accounting</b>, not a third independent equal. It supports pricing, cost control and operational efficiency.</div>`},
 {t:"Profit is not cash — and why that matters",src:"L#4",h:`
  <div class="def">A company reporting a <b>profit</b> does not automatically have <b>cash</b> in the bank. Profit measures value earned; cash is money actually received. A profitable company can still go under.</div>
  <ul>
   <li>The <strong>cash flow statement</strong> is the most honest of the statements, because it shows actual inflows and outflows rather than accrual-based judgements.</li>
   <li><strong>Where the number came from matters.</strong> A firm with higher profit from a <strong>one-off asset sale</strong> is weaker than one with lower profit from sustainable operations.</li>
   <li><strong>Satyam Computers, 2009:</strong> a fabricated cash balance of <strong>₹5,300 crore</strong> (about ₹5,000 crore of it non-existent), false interest income, understated liabilities, overstated receivables. Auditors signed it off. The stock fell <strong>80% in a day</strong>.</li>
  </ul>
  <p style="font-size:14.5px">She also assigned <strong>Enron</strong> as a parallel US case, and cited <strong>Kingfisher Airlines</strong> as a going-concern failure that collapsed in 2012.</p>`}
],

"s-users":[
 {t:"The five objectives of accounting",src:"L#3",h:`
  <ol style="padding-left:20px;font-size:15px;line-height:1.8">
   <li><strong>Systematic recording</strong> of transactions — this is <strong>bookkeeping</strong>, and it underpins everything else.</li>
   <li><strong>Classification and summarisation</strong> into financial statements.</li>
   <li><strong>Ascertainment of results</strong> — profit or loss, via the profit and loss account.</li>
   <li><strong>Financial position</strong> — the balance sheet, at a specific date.</li>
   <li><strong>Decision-making and solvency analysis</strong> — revealing <strong>liquidity</strong> (short-term) and <strong>solvency</strong> (long-term).</li>
  </ol>
  <div class="warnbox"><b>Liquidity vs solvency.</b> Liquidity is the ability to meet <em>short-term</em> liabilities. Solvency is the ability to meet <em>long-term</em> obligations. They are not synonyms.</div>`},
 {t:"Internal and external users",src:"L#3 · L#4",h:`
  <div class="grid2">
   <div class="card"><h4 style="font-family:var(--display);font-size:15px;margin-bottom:7px">Internal</h4>
    <ul style="font-size:14px;margin:0;padding-left:18px">
     <li><strong>Managers and directors</strong> — budgeting, targets, resource allocation, open or close a factory</li>
     <li><strong>Employees</strong> — job security, prospects for a rise</li>
     <li><strong>Internal auditors</strong> — the financial watchdogs; verify recording and internal controls</li>
    </ul></div>
   <div class="card"><h4 style="font-family:var(--display);font-size:15px;margin-bottom:7px">External</h4>
    <ul style="font-size:14px;margin:0;padding-left:18px">
     <li><strong>Investors and shareholders</strong> — profitability and growth</li>
     <li><strong>Banks and lenders</strong> — solvency and repayment</li>
     <li><strong>Government and tax authorities</strong> — correct tax, possible avoidance</li>
     <li><strong>Suppliers and creditors</strong> — will invoices be paid on time</li>
     <li><strong>Customers</strong> — will warranties and contracts be honoured</li>
     <li><strong>General public</strong></li>
    </ul></div>
  </div>
  <p style="font-size:14.5px">The same statement serves different purposes: a <strong>lender</strong> reads it for solvency, an <strong>equity investor</strong> for growth, an <strong>employee</strong> for stability, a <strong>supplier</strong> for creditworthiness.</p>`},
 {t:"The regulators — India and global",src:"L#3 · very likely tested",h:`
  <div class="scroller"><table><thead><tr><th>Body</th><th>Role</th><th>Her shorthand</th></tr></thead><tbody>
   <tr><td><strong>ICAI</strong><br>Institute of Chartered Accountants of India</td><td>Apex professional body. <strong>Drafts</strong> accounting standards through its Accounting Standards Board; issues guidance notes; certifies CAs</td><td>The <strong>author</strong> — writes the rules</td></tr>
   <tr><td><strong>MCA</strong><br>Ministry of Corporate Affairs</td><td><strong>Prescribes and notifies</strong> standards under the <strong>Companies Act 2013</strong>; enforces through registrars of companies</td><td>The <strong>legislator</strong> — gives them force of law</td></tr>
   <tr><td><strong>SEBI</strong></td><td>Regulates <strong>listed</strong> companies; mandates disclosure norms and <strong>quarterly reporting</strong>; protects investors</td><td>The enforcer for listed firms</td></tr>
  </tbody></table></div>
  <h4>Global</h4>
  <ul>
   <li><strong>IFRS</strong> — issued by the <strong>International Accounting Standards Board</strong>, headquartered in <strong>London</strong>. Adopted by <strong>more than 140 countries</strong>.</li>
   <li><strong>Ind AS</strong> — India's converged version of IFRS, notified by the <strong>MCA</strong> under the Companies Act 2013. Mandatory for all <strong>listed</strong> companies and large unlisted companies with <strong>net worth above ₹250 crore</strong>.</li>
  </ul>
  <div class="def">Why standards at all? Without them, two firms with identical revenues could report wildly different profits, and <b>no comparison would be possible</b>.</div>`}
],

"s-concepts":[
 {t:"Concepts 1–5",src:"L#5 · L#9",h:`
  <div class="def"><b>Accounting concepts</b> (also called <b>postulates</b>) are the basic <b>assumptions</b> accounting is founded on. <b>Conventions</b> are customs and traditions. Do not confuse the two words.</div>
  <div class="scroller"><table><thead><tr><th>#</th><th>Concept</th><th>Says</th><th>The giveaway example</th></tr></thead><tbody>
   <tr><td>1</td><td><strong>Separate entity</strong></td><td>The business is <strong>distinct from its owner</strong>. Owner's capital is recorded as a <strong>liability of the business to the owner</strong></td><td>The owner's personal electricity bill must <strong>not</strong> appear in business books</td></tr>
   <tr><td>2</td><td><strong>Going concern</strong></td><td>The business will <strong>continue for the foreseeable future</strong>, with no plan to liquidate</td><td>This is <em>why</em> assets sit at cost rather than forced-sale value, and why depreciation spreads over useful life. Kingfisher Airlines, 2012</td></tr>
   <tr><td>3</td><td><strong>Money measurement</strong></td><td>Only what can be expressed <strong>in money</strong> is recorded</td><td><strong>Employee dedication, brand loyalty and reputation are excluded</strong> — however valuable. A real limitation of accounting</td></tr>
   <tr><td>4</td><td><strong>Cost</strong></td><td>Assets are recorded at <strong>acquisition price</strong>, regardless of later market value</td><td>Land bought for ₹50,000 stays at ₹50,000 whether the market moves to 60,000 or 40,000</td></tr>
   <tr><td>5</td><td><strong>Dual aspect</strong></td><td>Every transaction has <strong>two equal and simultaneous effects</strong></td><td>The foundation of double-entry and of <strong>Assets = Liabilities + Equity</strong></td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Cost concept — the trade-off she drew.</b> Its <b>advantage</b> is objectivity: no subjective revaluation. Its <b>limitation</b> is that it <b>cannot account for inflation</b>, so in high-inflation periods historical cost misstates the true position.</div>`},
 {t:"Concepts 6–8, and the two realisation exceptions",src:"L#6 · L#9",h:`
  <div class="scroller"><table><thead><tr><th>#</th><th>Concept</th><th>Says</th></tr></thead><tbody>
   <tr><td>6</td><td><strong>Accounting period</strong></td><td>Business life is divided into segments, <strong>usually one year</strong>, so results can be assessed regularly rather than only at closure. Also called <strong>periodicity</strong>. It is what introduces <strong>estimation and judgement</strong> — such as an asset's useful life</td></tr>
   <tr><td>7</td><td><strong>Periodic matching</strong></td><td>Revenues of a period are matched with the <strong>costs incurred to earn them</strong> in that same period. <strong>Payment timing is irrelevant</strong></td></tr>
   <tr><td>8</td><td><strong>Realisation</strong></td><td>Revenue is recognised when the <strong>property in goods passes to the buyer</strong> and the buyer becomes <strong>legally liable to pay</strong> — at delivery, not at order and not at payment</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>Matching, worked:</strong> commission paid in <strong>January</strong> for sales made in <strong>December</strong> is a <strong>December</strong> expense. The concept is what forces year-end adjustments for outstanding expenses, accrued income, prepaid expenses and unearned income.</p>
  <p style="font-size:14.5px"><strong>Realisation, worked:</strong> order placed in March, goods delivered in April → revenue in <strong>April</strong>.</p>
  <h4>The two exceptions to realisation</h4>
  <div class="scroller"><table><thead><tr><th>Exception</th><th>Treatment</th><th>Why</th></tr></thead><tbody>
   <tr><td><strong>Hire purchase</strong> — paid in instalments, legal ownership passes only on the final payment</td><td>Seller records revenue <strong>progressively</strong>, as instalments fall due</td><td>Waiting for the last payment would misstate every interim period</td></tr>
   <tr><td><strong>Long-term construction contracts</strong> — spanning years, paid at completion</td><td>Profit recorded <strong>yearly on work certified</strong> as complete</td><td>Same reason — otherwise the years in between look empty</td></tr>
  </tbody></table></div>`},
 {t:"Assets, liabilities and equity — the definitions",src:"L#9",h:`
  <div class="def">An <b>asset</b> is a resource the business <b>controls</b> that will provide <b>future economic benefit</b>. Both conditions must hold.</div>
  <p style="font-size:14.5px">Her two tests: a <strong>public park is not your asset</strong> (no control); a <strong>broken laptop is not an asset</strong> (no future benefit).</p>
  <ul>
   <li><strong>Tangible</strong> — cash, machinery, buildings, inventory.</li>
   <li><strong>Intangible</strong> — patents, copyrights, trademarks, brand value.</li>
   <li><strong>Financial</strong> — receivables, investments, cash equivalents.</li>
  </ul>
  <div class="def">A <b>liability</b> is a <b>present obligation arising from a past event</b> whose settlement will cause an outflow of resources. Plainly: what the company owes.</div>
  <div class="def"><b>Equity</b> is the <b>residual</b> left to owners after liabilities are settled: <b>Equity = Assets − Liabilities</b>. Its parts are <b>share capital</b> and <b>retained earnings</b>.</div>
  <p style="font-size:14.5px"><strong>Retained earnings = net profit − dividends (or drawings).</strong> <strong>Net profit = revenue − expenses.</strong></p>`}
],

"s-conventions":[
 {t:"The four conventions",src:"L#7",h:`
  <div class="def"><b>Conventions</b> are customs and traditions that guide accountants when preparing statements — evolved practice, not formal rules.</div>
  <h4>1 · Conservatism</h4>
  <p style="font-size:15px"><strong>&ldquo;Do not anticipate any profit, but provide for all possible losses.&rdquo;</strong> Play safe under uncertainty.</p>
  <ul>
   <li><strong>Inventory at cost or market price, whichever is LOWER.</strong> Cost ₹1,00,000 and market ₹1,40,000 → carry at <strong>1,00,000</strong> (no unrealised gain). Market falls to ₹80,000 → carry at <strong>80,000</strong> (loss recognised immediately).</li>
   <li><strong>Provision for doubtful debts</strong> made out of current profits, without waiting for an actual default.</li>
   <li><strong>Criticism:</strong> it can create <strong>secret reserves</strong>, understate assets, overstate liabilities and depress reported income — so it can conflict with full disclosure and with a true and fair view.</li>
  </ul>
  <h4>2 · Full disclosure</h4>
  <p style="font-size:14.5px">Reports must <strong>fully and fairly disclose</strong> all material information of interest to proprietors, creditors and investors. It arose because <strong>ownership is separated from management</strong> in joint stock companies, and the <strong>Companies Act</strong> requires a <strong>true and fair view</strong>. <strong>Notes to accounts</strong> — contingent liabilities, investment values — exist because of this convention.</p>
  <h4>3 · Consistency</h4>
  <p style="font-size:14.5px">Practices must stay the same period to period, so performance can be compared over time. It does <strong>not</strong> mean rigidity — better techniques may be adopted, but any change that affects profit must be <strong>explicitly disclosed with an explanatory note</strong>.</p>
  <h4>4 · Materiality</h4>
  <p style="font-size:14.5px">Attach importance to <strong>significant</strong> details and ignore insignificant ones. It is <strong>context-dependent and subjective</strong>: an individual debtor's balance needs every rupee, while a top-management report may round to the nearest hundred. Permitted under the Companies Act.</p>
  <div class="warnbox"><b>The four scenarios she matched.</b> Pending lawsuits in the notes → <b>full disclosure</b>. Rounding for management but exact for debtors → <b>materiality</b>. Switching inventory method to inflate profit → violates <b>consistency</b>. Excess bad-debt provisions as secret reserves → violates <b>full disclosure</b>.</div>`}
],

"s-equation":[
 {t:"The accounting equation",src:"L#2 · L#8 · L#9 · L#14",h:`
  <div class="def"><b>Assets = Liabilities + Capital (Equity)</b> — and it must balance after <b>every single transaction</b>.</div>
  <div class="scroller"><table><thead><tr><th>Form</th><th>Equation</th></tr></thead><tbody>
   <tr><td>Basic</td><td><strong>Assets = Liabilities + Capital</strong></td></tr>
   <tr><td>Rearranged</td><td><strong>Capital (Equity) = Assets − Liabilities</strong></td></tr>
   <tr><td>Expanded</td><td>Assets = Liabilities + Capital + Revenue − Expenses − Drawings</td></tr>
   <tr><td>All-positive form</td><td><strong>Assets + Expenses + Drawings = Liabilities + Capital + Revenue</strong></td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>She flagged one wrong version in class:</b> &ldquo;Liabilities = Assets − Capital&rdquo; was marked <b>incorrect</b> in her exercise. The rearrangement she wants is <b>Capital = Assets − Liabilities</b>.</div>
  <h4>Four transactions and their effect</h4>
  <div class="scroller"><table><thead><tr><th>Transaction</th><th>Effect</th><th>Balances because</th></tr></thead><tbody>
   <tr><td>Owner invests ₹1,00,000</td><td>Cash +1,00,000 · Capital +1,00,000</td><td>Both sides rise</td></tr>
   <tr><td>Buy furniture ₹5,000 cash</td><td>Furniture +5,000 · Cash −5,000</td><td><strong>Same side</strong> — asset composition changes, total unchanged</td></tr>
   <tr><td>Bank loan ₹30,000</td><td>Cash +30,000 · Loan liability +30,000</td><td>Both sides rise</td></tr>
   <tr><td>Pay creditors ₹10,000</td><td>Cash −10,000 · Liabilities −10,000</td><td>Both sides fall</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">Her worked multi-step example: start with ₹80,000 cash; buy goods on credit from Ramesh ₹10,000; buy furniture for cash ₹6,000; pay the creditor ₹8,000. End: <strong>Cash 66,000 + Stock 10,000 + Furniture 6,000 = Capital 80,000 + Creditors 2,000</strong>, i.e. <strong>82,000 each side</strong>.</p>`}
],

"s-accounts":[
 {t:"The two rule systems",src:"L#9 · L#10 · L#14",h:`
  <h4>Modern — the equation approach (she recommends this one)</h4>
  <div class="scroller"><table><thead><tr><th>Side of the equation</th><th>Accounts</th><th>Increase</th><th>Decrease</th></tr></thead><tbody>
   <tr><td><strong>Left</strong></td><td>Assets, <strong>Expenses</strong>, <strong>Drawings</strong></td><td><strong>Debit</strong></td><td>Credit</td></tr>
   <tr><td><strong>Right</strong></td><td>Liabilities, Capital, <strong>Revenue</strong></td><td><strong>Credit</strong></td><td>Debit</td></tr>
  </tbody></table></div>
  <h4>Traditional — the three golden rules</h4>
  <div class="scroller"><table><thead><tr><th>Account type</th><th>Covers</th><th>Rule</th></tr></thead><tbody>
   <tr><td><strong>Personal</strong></td><td><strong>Natural</strong> persons (Ravi) · <strong>artificial</strong> persons (Tata, Reliance, a bank) · <strong>representative</strong> persons (outstanding wages account)</td><td><strong>Debit the receiver, credit the giver</strong></td></tr>
   <tr><td><strong>Real</strong></td><td>Assets — tangible (cash, machinery, buildings) and intangible (goodwill, trademarks, patents)</td><td><strong>Debit what comes in, credit what goes out</strong></td></tr>
   <tr><td><strong>Nominal</strong></td><td>Expenses and losses · incomes and gains. Also called <strong>fictitious</strong> accounts</td><td><strong>Debit all expenses and losses, credit all incomes and gains</strong></td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Nominal accounts are closed at year end</b> and their balances transferred to the profit and loss account. Real and personal accounts carry forward. That is exactly why an opening entry contains no nominal accounts.</div>
  <p style="font-size:14.5px">The <strong>five account types</strong> in the equation framing: <strong>assets, liabilities, capital, revenue, expenses</strong>.</p>`},
 {t:"Source documents and transaction types",src:"L#8",h:`
  <div class="def"><b>Source documents</b> are the authentic evidence of a transaction — the date, amount, parties and nature. Relying on them is what stops accounting depending on memory or verbal claims.</div>
  <p style="font-size:14.5px">Examples: cash receipts, invoices, <strong>debit notes</strong>, <strong>credit notes</strong>, pay-in slips, salary bills, wage bills, cheque record slips.</p>
  <div class="def">A <b>transaction</b> is the transfer of money or money's worth — goods, services or ideas — from one person to another.</div>
  <h4>Three transaction types</h4>
  <p style="font-size:14.5px"><strong>Cash</strong> — settled immediately in cash · <strong>Bank</strong> — any transaction through a bank, including charges · <strong>Credit</strong> — settlement deferred, creating a liability or a receivable.</p>
  <h4>Four advantages of double entry</h4>
  <p style="font-size:14.5px"><strong>Accuracy</strong> (the dual record is a self-check) · <strong>ascertainment of results</strong> (net profit or loss readily available) · <strong>comparative study</strong> across periods and firms · <strong>common acceptance</strong> by banks, government and stakeholders.</p>`}
],

"s-journal":[
 {t:"The journal",src:"L#10 · L#11",h:`
  <div class="def">The <b>journal</b> is the <b>book of original entry</b> — also called prime, primary or preliminary entry — recording transactions in <b>chronological order</b> from source documents. The process is <b>journalising</b>.</div>
  <h4>The five columns, plus narration</h4>
  <p style="font-size:14.5px"><strong>Date</strong> · <strong>Particulars</strong> (debited account first with &ldquo;Dr&rdquo;, credited account on the next line, indented, preceded by <strong>&ldquo;To&rdquo;</strong>) · <strong>Ledger Folio (LF)</strong> · <strong>Debit</strong> · <strong>Credit</strong> · then a <strong>narration</strong>, a brief explanation at the end.</p>
  <h4>Worked entries — know which rule applies</h4>
  <div class="scroller"><table><thead><tr><th>Transaction</th><th>Entry</th><th>Rule used</th></tr></thead><tbody>
   <tr><td>Paid Anbu ₹10,000 by cheque</td><td>Anbu Dr. → To Bank</td><td>Personal: debit the receiver</td></tr>
   <tr><td>Bought furniture ₹5,000 cash</td><td>Furniture Dr. → To Cash</td><td>Real: debit what comes in</td></tr>
   <tr><td>Paid rent ₹5,000 cash</td><td>Rent Dr. → To Cash</td><td>Nominal: debit the expense</td></tr>
   <tr><td>Somu started business with ₹50,000</td><td>Cash Dr. → To Somu's Capital</td><td>Real + personal</td></tr>
   <tr><td>Bought goods for cash ₹4,000</td><td><strong>Purchase</strong> Dr. → To Cash</td><td>Nominal + real</td></tr>
  </tbody></table></div>
  <h4>Two compound entries worth memorising</h4>
  <ul>
   <li><strong>Discount received:</strong> paid ₹4,800 in full settlement of ₹5,000 → <strong>Kyrthana Dr. 5,000</strong>; To Cash 4,800; To <strong>Discount Received 200</strong>.</li>
   <li><strong>Insolvency:</strong> Dinesh owes ₹10,000, estate pays <strong>40 paise in the rupee</strong> → <strong>Cash Dr. 4,000</strong>, <strong>Bad Debts Dr. 6,000</strong>; To Dinesh 10,000.</li>
  </ul>
  <div class="warnbox"><b>Drawings vs expense.</b> Goods or cash taken by the owner for <b>personal</b> use → <b>Drawings</b>. Goods used for <b>office</b> purposes → an <b>expense</b> account. Goods given as charity → <b>Charity</b>; as free samples → <b>Sales Promotion</b>. In each case the credit is to <b>Purchases</b>.</div>`},
 {t:"The ledger, opening entries and balancing",src:"L#11 · L#12 · L#14",h:`
  <div class="def">The <b>ledger</b> collects every transaction <b>account by account</b> and shows each account's net effect. Moving entries from journal to ledger is <b>posting</b>.</div>
  <div class="scroller"><table><thead><tr><th></th><th>Journal</th><th>Ledger</th></tr></thead><tbody>
   <tr><td><strong>Stage</strong></td><td><strong>First</strong></td><td><strong>Second</strong></td></tr>
   <tr><td><strong>Order</strong></td><td><strong>Chronological</strong></td><td><strong>Account-wise</strong></td></tr>
   <tr><td><strong>Process</strong></td><td>Journalising</td><td>Posting</td></tr>
   <tr><td><strong>Based on</strong></td><td>Source documents</td><td>Journal entries</td></tr>
   <tr><td><strong>Net position</strong></td><td>Cannot be determined</td><td><strong>Shows the balance</strong></td></tr>
   <tr><td><strong>Trial balance</strong></td><td>Not the basis</td><td><strong>Is the basis</strong></td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">The <strong>T-account</strong> has eight columns — four each side: Date, Particulars, Journal Folio, Amount. On the <strong>debit side</strong> particulars are preceded by <strong>&ldquo;To&rdquo;</strong>; on the <strong>credit side</strong>, by <strong>&ldquo;By&rdquo;</strong>.</p>
  <h4>Opening entry</h4>
  <p style="font-size:14.5px">Recorded at the start of a period to bring forward balances not closed last period. <strong>Assets are debited; liabilities and capital are credited.</strong> <strong>Nominal accounts never appear</strong> — they were closed to profit and loss. Narration: &ldquo;Balances of assets and liabilities brought forward&rdquo;.</p>
  <h4>Balancing — BD and CD</h4>
  <ol style="padding-left:20px;font-size:14.5px;line-height:1.8">
   <li>Total the debit side and the credit side.</li>
   <li>Find the difference.</li>
   <li>Put it on the <strong>lower</strong> side as <strong>Balance c/d</strong> (carried down).</li>
   <li>Next period it reappears on the opposite side as <strong>Balance b/d</strong> (brought down).</li>
  </ol>
  <p style="font-size:14.5px"><strong>Worked:</strong> Cash debit side 3,05,000 (Capital 3,00,000 + Sales 5,000), credit side 2,10,000 (Bank 2,00,000 + Purchase 10,000). Difference <strong>95,000</strong> goes on the <strong>credit</strong> side as Balance c/d — so the account has a <strong>debit balance of 95,000</strong>.</p>
  <div class="warnbox"><b>The side with the higher total names the balance.</b> The figure is <em>written</em> on the lower side to make them equal, but the account is described by the larger side — here, a debit balance.</div>`}
],

"s-trial":[
 {t:"Trial balance — purpose and the two methods",src:"L#13",h:`
  <div class="def">The <b>trial balance</b> is the <b>third step</b> of the accounting cycle — <b>journal → ledger → trial balance</b> — a statement listing the debit and credit balances of all ledger accounts at a point in time.</div>
  <h4>Three objectives</h4>
  <ol style="padding-left:20px;font-size:14.5px;line-height:1.8">
   <li><strong>Arithmetic accuracy</strong> — if the totals agree, there is reasonable confidence of no clerical error.</li>
   <li><strong>Basis for the financial statements</strong> — the balance sheet, P&amp;L and trading account are built from an agreed trial balance.</li>
   <li><strong>Summary of the ledger</strong> — one consolidated view instead of many accounts.</li>
  </ol>
  <h4>The two methods</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Total method</th><th>Balance method</th></tr></thead><tbody>
   <tr><td><strong>Transfers</strong></td><td>The <strong>totals</strong> of each side of every account</td><td>The <strong>net balance</strong> of each account</td></tr>
   <tr><td><strong>Timing</strong></td><td>Can be done immediately after totalling, without balancing</td><td>Requires accounts to be balanced first</td></tr>
   <tr><td><strong>For financial statements</strong></td><td><strong>Cannot be used directly</strong> — statements need net balances</td><td><strong>The standard method</strong></td></tr>
  </tbody></table></div>
  <h4>Which balance does an account carry?</h4>
  <div class="grid2">
   <div class="card" style="border-left:3px solid var(--blue)"><h4 style="font-family:var(--display);font-size:15px;margin-bottom:6px">Debit balances</h4>
    <p style="font-size:14px">Assets · <strong>Drawings</strong> · expenses · losses · <strong>purchases</strong> · <strong>sales returns</strong> · opening stock</p></div>
   <div class="card" style="border-left:3px solid var(--clay)"><h4 style="font-family:var(--display);font-size:15px;margin-bottom:6px">Credit balances</h4>
    <p style="font-size:14px">Liabilities · capital · income and gains · sales · <strong>bank overdraft</strong> · provisions and reserves · <strong>purchase returns</strong></p></div>
  </div>
  <div class="warnbox"><b>Two that catch people out.</b> <b>Purchases</b> is a debit balance but <b>purchase returns</b> is a credit. <b>Sales</b> is a credit but <b>sales returns</b> is a debit. Returns always sit opposite their parent.</div>`},
 {t:"The suspense account and the four errors",src:"L#15 · most recent material",h:`
  <div class="def">A <b>suspense account</b> is a <b>temporary</b> account opened when the trial balance does not agree, so the cycle can continue while the error is hunted down. It is closed once the errors are found.</div>
  <p style="font-size:15px"><strong>If the debit total is lower, debit the suspense account. If the credit total is lower, credit it.</strong> The suspense account takes the difference on whichever side is short.</p>
  <h4>The four error types — and whether the trial balance catches them</h4>
  <div class="scroller"><table><thead><tr><th>Error</th><th>What it is</th><th>Does the trial balance still agree?</th></tr></thead><tbody>
   <tr><td><strong>Error of principle</strong></td><td>Recording that <strong>violates an accounting principle</strong> — e.g. treating capital expenditure as a revenue expense, or debiting a desk to <em>office repairs</em> instead of <em>furniture</em></td><td><strong>Yes, it still agrees.</strong> Both sides are equally affected</td></tr>
   <tr><td><strong>Error of omission</strong></td><td>A transaction <strong>completely left out</strong> of the books</td><td><strong>Yes.</strong> Debit and credit are both missing</td></tr>
   <tr><td><strong>Error of commission</strong></td><td>Posting to the <strong>wrong account or wrong side</strong>, or a wrong amount on one side</td><td><strong>Only if one side is affected.</strong> If both sides carry the same wrong amount, it still agrees</td></tr>
   <tr><td><strong>Compensating error</strong></td><td>Two errors that <strong>cancel each other out</strong></td><td><strong>Yes.</strong> They offset</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The headline point.</b> An agreed trial balance proves <b>arithmetic</b> accuracy only. It cannot detect errors of principle, complete omissions or compensating errors. She said this in both lectures.</div>
  <h4>The ABC Startup case</h4>
  <p style="font-size:14.5px">A ₹50,000 difference parked in suspense. Three errors were found:</p>
  <ul>
   <li>₹25,000 cloud-server invoice paid but never journalised — <strong>error of omission</strong>, <strong>no</strong> effect on the trial balance.</li>
   <li>₹40,000 executive desk debited to <em>office repairs</em> instead of <em>furniture and fixtures</em> — <strong>error of principle</strong>, <strong>no</strong> effect.</li>
   <li>An ₹85,000 cash sale credited correctly to sales but debited to bank as only ₹35,000 — <strong>error of commission</strong>, and <strong>this</strong> is the one that created the ₹50,000 gap.</li>
  </ul>`}
]
};

const TRAPS=[
 ["Concepts are assumptions; conventions are customs","Eight concepts (entity, going concern, money measurement, cost, dual aspect, period, matching, realisation). Four conventions (conservatism, full disclosure, consistency, materiality).","8 concepts, 4 conventions"],
 ["Going concern is why cost is used","Because the business is assumed to continue, assets sit at cost rather than forced-sale value and depreciation spreads over useful life.","continuity justifies cost"],
 ["Money measurement excludes your best assets","Employee dedication, brand loyalty and reputation cannot be recorded. He called it a genuine limitation of accounting.","no money, no entry"],
 ["Cost concept cannot handle inflation","Its advantage is objectivity; its limitation is that historical cost misstates the position when prices move.","objective but stale"],
 ["Realisation is at delivery, not order or payment","Property in the goods must pass and the buyer become legally liable. Ordered March, delivered April = April revenue.","delivery, not cash"],
 ["Matching ignores when you paid","Commission paid in January for December sales is a December expense. Timing of payment is irrelevant.","the period, not the payment"],
 ["The two realisation exceptions","Hire purchase (revenue as instalments fall due) and long-term construction contracts (profit yearly on work certified).","instalments and certified work"],
 ["Conservatism: cost or market, whichever is LOWER","Never the higher. Unrealised gains are not recognised; unrealised losses are.","lower of the two"],
 ["Conservatism can violate full disclosure","Excessive provisioning creates secret reserves, understates assets and overstates liabilities.","too safe is also wrong"],
 ["Consistency does not forbid change","You may adopt a better method — you must disclose the change and its profit impact in a note.","change, but disclose"],
 ["ICAI writes, MCA notifies, SEBI polices the listed","ICAI drafts standards, MCA gives them force of law under the Companies Act 2013, SEBI mandates disclosure for listed companies.","author, legislator, enforcer"],
 ["Ind AS threshold is ₹250 crore net worth","Mandatory for listed companies and large unlisted ones above that. IFRS is issued by the IASB in London, adopted by 140+ countries.","250 crore"],
 ["Capital is a liability of the business to the owner","That follows from the separate entity concept, and it is why capital is credited.","the firm owes the owner"],
 ["Debit the receiver is for personal accounts only","Real accounts: debit what comes in. Nominal: debit expenses and losses. Three account types, three different rules.","match the rule to the type"],
 ["Nominal accounts close at year end","Their balances go to profit and loss. Real and personal accounts carry forward — which is why an opening entry has no nominal accounts.","nominal doesn't carry forward"],
 ["Drawings is not an expense","Owner takes goods for personal use = Drawings. Goods used for the office = an expense account. Free samples = Sales Promotion.","personal vs office"],
 ["Journal is chronological, ledger is account-wise","Journal first, from source documents. Ledger second, by posting. Only the ledger shows a net balance.","when vs what"],
 ["To on the debit side, By on the credit side","A ledger convention that is easy marks if you remember which way round it goes.","To debit, By credit"],
 ["Balance c/d goes on the lower side","But the account is described by the higher side. A cash account short 95,000 on the credit side has a debit balance of 95,000.","written low, named high"],
 ["Purchase returns is a credit, sales returns a debit","Returns always sit opposite their parent account.","returns flip"],
 ["A balanced trial balance is not proof of accuracy","It cannot catch errors of principle, complete omissions or compensating errors — only arithmetic.","arithmetic only"],
 ["Suspense takes the difference on the SHORT side","Debit total lower, debit suspense. Credit total lower, credit suspense.","fill the gap"],
 ["Trial balance is step three","Journal → Ledger → Trial Balance. Then the financial statements.","third, not second"]
];

/* ===================== QUESTION BANK ===================== */
const Q=[
// what accounting is
{t:"What accounting is",q:"Which four steps appear in the textbook definition of accounting?",c:["Planning, recording, auditing, reporting","Identifying, recording, measuring, communicating","Recording, classifying, summarising, auditing","Budgeting, recording, measuring, analysing"],a:[1],w:"Identifying (filtering for financial impact), recording, measuring in money, and communicating to users."},
{t:"What accounting is",q:"Which branch of accounting serves external users and follows a standardised format?",c:["Management accounting","Financial accounting","Cost accounting","Internal audit"],a:[1],w:"Financial accounting reports to investors, creditors and regulators, following Ind AS or IFRS, and is published."},
{t:"What accounting is",q:"Cost accounting is best described as:",c:["An independent branch equal to financial and management accounting","A specialised branch of management accounting with a narrower focus","A part of financial accounting","A statutory requirement under SEBI"],a:[1],w:"It is a narrower part of management accounting, tracking the cost of producing goods or services."},
{t:"What accounting is",q:"Which type of accounting has no standardised format?",c:["Financial accounting","Management accounting","Both financial and management","Neither"],a:[1],w:"Management accounting stays internal, so no standard format is imposed on it."},
{t:"What accounting is",q:"Which financial statement did she describe as the most honest?",c:["The balance sheet","The income statement","The cash flow statement","The trial balance"],a:[2],w:"It shows actual cash movements rather than accrual-based judgements."},
{t:"What accounting is",q:"A company reports a healthy profit but cannot pay its suppliers. This shows that:",c:["The accounts must be fraudulent","Profit is not the same as cash","The company has too many assets","The matching concept was violated"],a:[1],w:"Profit measures value earned; cash is money actually received. A profitable firm can still fail."},
{t:"What accounting is",q:"In the Satyam case of 2009, roughly how much of the reported ₹5,300 crore cash balance was non-existent?",c:["₹500 crore","₹1,500 crore","₹5,000 crore","The whole amount was genuine"],a:[2],w:"About ₹5,000 crore was fabricated. The stock fell 80% within a day of exposure."},

// users and regulators
{t:"Users & regulators",q:"The systematic recording of financial transactions is called:",c:["Auditing","Bookkeeping","Journalising only","Reporting"],a:[1],w:"Bookkeeping is the first objective and the foundation for all the others."},
{t:"Users & regulators",q:"Liquidity refers to the ability to meet ___ obligations, and solvency ___ obligations.",c:["long-term; short-term","short-term; long-term","tax; trade","internal; external"],a:[1],w:"Liquidity is short-term, solvency is long-term."},
{t:"Users & regulators",q:"Which of these is an INTERNAL user of accounting information?",c:["A bank considering a loan","An internal auditor","A supplier","A tax authority"],a:[1],w:"Internal users are managers and directors, employees, and internal auditors."},
{t:"Users & regulators",q:"Which body DRAFTS accounting standards in India?",c:["MCA","SEBI","ICAI","RBI"],a:[2],w:"ICAI is the author, through its Accounting Standards Board. MCA notifies them; SEBI regulates listed companies."},
{t:"Users & regulators",q:"Which body gives accounting standards the force of law, under the Companies Act 2013?",c:["ICAI","MCA","SEBI","The Supreme Court"],a:[1],w:"The Ministry of Corporate Affairs prescribes and enforces them — the legislator in her framing."},
{t:"Users & regulators",q:"SEBI's specific role in accounting regulation is to:",c:["Draft the standards","Regulate listed companies and mandate disclosure and quarterly reporting","Certify chartered accountants","Set international standards"],a:[1],w:"It protects investors through disclosure requirements for listed companies."},
{t:"Users & regulators",q:"IFRS is issued by the International Accounting Standards Board, headquartered in:",c:["New York","London","Geneva","Brussels"],a:[1],w:"London. IFRS has been adopted by more than 140 countries."},
{t:"Users & regulators",q:"Ind AS is mandatory for listed companies and unlisted companies with net worth exceeding:",c:["₹100 crore","₹250 crore","₹500 crore","₹1,000 crore"],a:[1],w:"₹250 crore. Ind AS is India's converged version of IFRS, notified by the MCA."},
{t:"Users & regulators",q:"Why are uniform accounting standards necessary?",c:["To reduce the cost of audits","So that financial performance can be compared meaningfully between companies","To satisfy international investors only","To simplify tax collection"],a:[1],w:"Without them, identical revenues could produce wildly different reported profits, making comparison impossible."},

// concepts
{t:"Concepts",q:"Accounting concepts are also known as:",c:["Conventions","Postulates","Standards","Principles of disclosure"],a:[1],w:"Postulates — the basic assumptions accounting is founded on. Conventions are the customs and traditions."},
{t:"Concepts",q:"Recording the owner's personal electricity bill as a business expense violates:",c:["Going concern","Separate entity","Money measurement","Materiality"],a:[1],w:"The business is a distinct entity from its owner; personal affairs stay out."},
{t:"Concepts",q:"Under the separate entity concept, capital invested by the owner is recorded as:",c:["An asset of the business","A liability of the business to the owner","Revenue","A contra account"],a:[1],w:"The business owes the owner, which is why capital is credited."},
{t:"Concepts",q:"Charging depreciation over an asset's expected useful life rather than revaluing it each year reflects:",c:["The cost concept alone","The going concern concept","Conservatism","Materiality"],a:[1],w:"Because the business is assumed to continue, assets are valued on a cost basis and consumed over their life."},
{t:"Concepts",q:"Which concept explains why employee skill and brand loyalty do not appear on a balance sheet?",c:["Materiality","Money measurement","Conservatism","Realisation"],a:[1],w:"Only what can be expressed in monetary terms is recorded. She called this a genuine limitation of accounting."},
{t:"Concepts",q:"Land bought for ₹50,000 is now worth ₹60,000. Under the cost concept it is carried at:",c:["₹60,000","₹50,000","₹55,000","Whichever the auditor prefers"],a:[1],w:"Acquisition price, regardless of market movement in either direction."},
{t:"Concepts",q:"The main LIMITATION of the cost concept is that it:",c:["Is too subjective","Cannot account for inflation","Requires frequent revaluation","Is not permitted under Ind AS"],a:[1],w:"Its advantage is objectivity; its weakness is that historical cost misstates the position when prices move."},
{t:"Concepts",q:"The dual aspect concept is the foundation of:",c:["The accounting period","Double-entry bookkeeping and the accounting equation","Conservatism","The realisation concept"],a:[1],w:"Every transaction has two equal and simultaneous effects, so Assets = Liabilities + Equity always holds."},
{t:"Concepts",q:"Commission is paid in January for sales made in December. Under the matching concept it is an expense of:",c:["January","December","Split across both","Whichever period has higher revenue"],a:[1],w:"Payment timing is irrelevant; the expense belongs to the period whose revenue it helped earn."},
{t:"Concepts",q:"Goods are ordered in March and delivered in April. Revenue is recognised in:",c:["March","April","When payment is received","Split equally"],a:[1],w:"Realisation happens when property in the goods passes and the buyer becomes legally liable — at delivery."},
{t:"Concepts",q:"Which are recognised exceptions to the realisation concept? (Select all)",multi:true,c:["Hire purchase agreements","Long-term construction contracts","Cash sales","Credit sales"],a:[0,1],w:"Both exist because waiting for full legal completion would misrepresent the interim periods."},
{t:"Concepts",q:"In a long-term construction contract, profit is recognised:",c:["Only on completion","Yearly, based on work certified as completed","When the first payment arrives","Equally across the contract years regardless of progress"],a:[1],w:"Work certified is the measure — otherwise the intervening years look empty."},
{t:"Concepts",q:"For something to qualify as an asset, which two conditions must hold?",c:["It must be tangible and owned outright","The entity must control it, and it must provide future economic benefit","It must be insured and depreciable","It must be purchased with cash"],a:[1],w:"Her tests: a public park fails control; a broken laptop fails future benefit."},
{t:"Concepts",q:"Which are intangible assets? (Select all)",multi:true,c:["Patents","Trademarks","Copyrights","Accounts receivable"],a:[0,1,2],w:"Receivables are financial assets — claims on others — not intangibles."},
{t:"Concepts",q:"Equity is calculated as:",c:["Assets + Liabilities","Assets − Liabilities","Liabilities − Assets","Revenue − Expenses"],a:[1],w:"The residual left to owners after liabilities are settled."},
{t:"Concepts",q:"Retained earnings equals:",c:["Revenue − Expenses","Net profit − dividends or drawings","Assets − Capital","Capital + Revenue"],a:[1],w:"Net profit is revenue minus expenses; retained earnings is what remains after distributions."},

// conventions
{t:"Conventions",q:"'Do not anticipate any profit, but provide for all possible losses' is the convention of:",c:["Consistency","Conservatism","Full disclosure","Materiality"],a:[1],w:"The 'play safe' convention."},
{t:"Conventions",q:"Inventory costing ₹1,00,000 now has a market price of ₹1,40,000. Under conservatism it is valued at:",c:["₹1,40,000","₹1,00,000","₹1,20,000","Either, at the accountant's discretion"],a:[1],w:"Cost or market, whichever is LOWER. Unrealised gains are not recognised."},
{t:"Conventions",q:"The same inventory's market price falls to ₹80,000. It is now valued at:",c:["₹1,00,000","₹80,000","₹90,000","It is written off entirely"],a:[1],w:"The lower figure again — losses are recognised immediately, gains are not."},
{t:"Conventions",q:"Creating excessive provisions for doubtful debts to build secret reserves violates:",c:["Consistency","Full disclosure","Materiality","The cost concept"],a:[1],w:"It understates assets and overstates liabilities, so the statements no longer give a true and fair view."},
{t:"Conventions",q:"Disclosing a pending lawsuit in the notes to accounts is an application of:",c:["Conservatism","Full disclosure","Materiality","Consistency"],a:[1],w:"Contingent liabilities belong in the notes, which exist because of this convention."},
{t:"Conventions",q:"The convention of consistency means:",c:["Methods can never be changed","Methods should stay the same over time, but a change may be adopted if disclosed with its profit impact","All companies must use identical methods","Figures must be rounded the same way each year"],a:[1],w:"It is not rigidity. Improved techniques are allowed — the change and its effect must be disclosed."},
{t:"Conventions",q:"Giving exact rupee figures to individual debtors but rounding to the nearest hundred for management reports is:",c:["Inconsistent and improper","An application of materiality","A violation of full disclosure","Required by SEBI"],a:[1],w:"What is material depends on context. It is permitted under the Companies Act."},
{t:"Conventions",q:"Which of these is a CONVENTION rather than a concept?",c:["Going concern","Dual aspect","Materiality","Realisation"],a:[2],w:"The four conventions are conservatism, full disclosure, consistency and materiality."},

// equation
{t:"The equation",q:"The basic accounting equation is:",c:["Assets = Liabilities − Capital","Assets = Liabilities + Capital","Capital = Assets + Liabilities","Liabilities = Assets + Capital"],a:[1],w:"Assets = Liabilities + Capital (Equity), and it must balance after every transaction."},
{t:"The equation",q:"Which rearrangement did she mark as INCORRECT in her exercise?",c:["Capital = Assets − Liabilities","Assets = Capital + Liabilities","Liabilities = Assets − Capital","Assets = Liabilities + Capital"],a:[2],w:"She flagged 'Liabilities = Assets − Capital' as the wrong option in class, wanting Capital = Assets − Liabilities."},
{t:"The equation",q:"The all-positive expanded form of the equation is:",c:["Assets + Expenses + Drawings = Liabilities + Capital + Revenue","Assets + Revenue = Liabilities + Capital + Expenses","Assets = Liabilities + Capital − Revenue","Assets + Liabilities = Capital + Revenue"],a:[0],w:"Left side collects assets, expenses and drawings; right side collects liabilities, capital and revenue."},
{t:"The equation",q:"Buying furniture for ₹5,000 in cash affects the equation how?",c:["Assets rise, liabilities rise","Assets fall, capital falls","Asset composition changes; the total is unchanged","Capital rises, assets rise"],a:[2],w:"Furniture up 5,000, cash down 5,000 — both on the same side, so the total stays put."},
{t:"The equation",q:"A business starts with ₹80,000 cash, buys goods on credit for ₹10,000, buys furniture for ₹6,000 cash and pays the creditor ₹8,000. What is the closing cash balance?",c:["₹80,000","₹74,000","₹66,000","₹62,000"],a:[2],w:"80,000 − 6,000 − 8,000 = 66,000. Total each side is 82,000."},
{t:"The equation",q:"Taking a ₹30,000 bank loan:",c:["Increases assets and decreases capital","Increases assets and increases liabilities","Decreases assets and increases liabilities","Has no effect on the equation"],a:[1],w:"Cash up 30,000, loan liability up 30,000 — both sides rise together."},

// accounts and rules
{t:"Accounts & rules",q:"Under the modern equation approach, an increase in an expense is recorded as a:",c:["Credit","Debit","Either","Neither — expenses are not recorded"],a:[1],w:"Expenses sit on the left with assets and drawings, so an increase is a debit."},
{t:"Accounts & rules",q:"An increase in revenue is recorded as a:",c:["Debit","Credit","Contra entry","Suspense entry"],a:[1],w:"Revenue sits on the right with liabilities and capital, so an increase is a credit."},
{t:"Accounts & rules",q:"'Debit the receiver, credit the giver' applies to which account type?",c:["Real","Nominal","Personal","All three"],a:[2],w:"Real: debit what comes in. Nominal: debit expenses and losses. Personal: debit the receiver."},
{t:"Accounts & rules",q:"'Debit what comes in, credit what goes out' applies to:",c:["Personal accounts","Real accounts","Nominal accounts","Suspense accounts"],a:[1],w:"Real accounts cover assets, tangible and intangible."},
{t:"Accounts & rules",q:"An 'outstanding wages' account is which type of personal account?",c:["Natural person","Artificial person","Representative person","It is a nominal account"],a:[2],w:"It represents a group of people — the workers owed money."},
{t:"Accounts & rules",q:"A bank account, in the traditional classification, is a:",c:["Real account","Personal account (artificial person)","Nominal account","Capital account"],a:[1],w:"Firms, companies and banks are artificial persons and therefore personal accounts."},
{t:"Accounts & rules",q:"Goodwill is classified as which type of account?",c:["Nominal","Personal","Real (intangible asset)","Capital"],a:[2],w:"Real accounts cover assets both tangible and intangible — goodwill, trademarks, copyrights, patents."},
{t:"Accounts & rules",q:"Which accounts are closed at year end, with their balance transferred to profit and loss?",c:["Real accounts","Personal accounts","Nominal accounts","Capital accounts"],a:[2],w:"Nominal accounts — expenses, losses, incomes and gains. Real and personal accounts carry forward."},
{t:"Accounts & rules",q:"Which are valid source documents? (Select all)",multi:true,c:["Invoices","Debit notes","Credit notes","Trial balances"],a:[0,1,2],w:"A trial balance is prepared from the ledger — it is an output, not source evidence. Pay-in slips and wage bills also count."},
{t:"Accounts & rules",q:"Which are advantages of the double-entry system that she listed? (Select all)",multi:true,c:["Accuracy through dual recording","Ascertainment of business results","Comparative study across periods","Elimination of all fraud"],a:[0,1,2],w:"It does not eliminate fraud — Satyam is the counter-example. The fourth advantage is common acceptance by banks and government."},

// journal and ledger
{t:"Journal & ledger",q:"The journal is known as the book of:",c:["Final entry","Original entry","Secondary entry","Balances"],a:[1],w:"Also called prime, primary or preliminary entry. The process is journalising."},
{t:"Journal & ledger",q:"In the particulars column of a journal, the credited account is:",c:["Written first, followed by 'Dr'","Written on the next line, indented, preceded by 'To'","Written in the narration","Omitted"],a:[1],w:"Debited account first with 'Dr', then the credited account indented with 'To'."},
{t:"Journal & ledger",q:"What does the LF column in a journal stand for?",c:["Ledger Folio — the ledger page number","Last Figure","Ledger Format","Liability Factor"],a:[0],w:"It cross-references the entry to its ledger page."},
{t:"Journal & ledger",q:"Paying rent of ₹5,000 in cash is journalised as:",c:["Cash Dr. → To Rent","Rent Dr. → To Cash","Rent Dr. → To Capital","Cash Dr. → To Capital"],a:[1],w:"Rent is a nominal account — debit all expenses. Cash is real and goes out, so it is credited."},
{t:"Journal & ledger",q:"Goods taken by the owner for personal use are debited to:",c:["Purchases","Drawings","Office expenses","Sales promotion"],a:[1],w:"Personal use is Drawings. Office use is an expense account; free samples go to Sales Promotion. In each case Purchases is credited."},
{t:"Journal & ledger",q:"Goods distributed as free samples are debited to:",c:["Charity","Drawings","Sales promotion","Purchases"],a:[2],w:"A business expense, so Sales Promotion. Goods given as charity go to a Charity account."},
{t:"Journal & ledger",q:"A debtor owing ₹10,000 is declared insolvent and the estate pays 40 paise in the rupee. The entry includes:",c:["Cash Dr. 4,000 and Bad Debts Dr. 6,000, To Debtor 10,000","Cash Dr. 6,000 and Bad Debts Dr. 4,000, To Debtor 10,000","Bad Debts Dr. 10,000, To Cash 10,000","Debtor Dr. 10,000, To Cash 4,000"],a:[0],w:"40% of 10,000 is 4,000 received; the remaining 6,000 is written off as bad debts."},
{t:"Journal & ledger",q:"In a ledger account, the debit side particulars are preceded by ___ and the credit side by ___.",c:["'By'; 'To'","'To'; 'By'","'Dr'; 'Cr'","'In'; 'Out'"],a:[1],w:"To on the debit side, By on the credit side."},
{t:"Journal & ledger",q:"Which statement about the journal and ledger is correct?",c:["The ledger is chronological and the journal is account-wise","The journal is chronological and the ledger is account-wise","Both are chronological","Both are account-wise"],a:[1],w:"Journal by date from source documents, ledger by account through posting. Only the ledger shows net balances."},
{t:"Journal & ledger",q:"An opening entry contains:",c:["All account types including nominal","Assets debited, liabilities and capital credited","Only nominal accounts","Only the capital account"],a:[1],w:"Nominal accounts were closed to profit and loss, so they never appear in an opening entry."},
{t:"Journal & ledger",q:"A cash account has debit totals of ₹3,05,000 and credit totals of ₹2,10,000. The Balance c/d is:",c:["₹95,000 on the debit side","₹95,000 on the credit side","₹5,15,000 on the credit side","₹2,10,000 on the debit side"],a:[1],w:"The difference is written on the lower side to make them equal — so on the credit side. The account itself has a debit balance of 95,000."},
{t:"Journal & ledger",q:"Balance c/d in one period becomes ___ in the next.",c:["Balance c/d again","Balance b/d","A suspense entry","A nominal balance"],a:[1],w:"Carried down becomes brought down — the opening balance of the new period."},

// trial balance
{t:"Trial balance",q:"The trial balance is which step of the accounting cycle?",c:["First","Second","Third","Fourth"],a:[2],w:"Journal → Ledger → Trial Balance, then the financial statements."},
{t:"Trial balance",q:"Which method of preparing a trial balance CANNOT be used directly for financial statements?",c:["The balance method","The total method","Both","Neither"],a:[1],w:"Statements need net balances, and the total method transfers the totals of each side instead."},
{t:"Trial balance",q:"Which of these normally carries a DEBIT balance?",c:["Sales","Bank overdraft","Purchases","Capital"],a:[2],w:"Purchases, along with assets, drawings, expenses, losses, sales returns and opening stock."},
{t:"Trial balance",q:"Which of these normally carries a CREDIT balance?",c:["Drawings","Purchase returns","Opening stock","Sales returns"],a:[1],w:"Purchase returns sits opposite purchases. Drawings, opening stock and sales returns are all debits."},
{t:"Trial balance",q:"Which normally carry credit balances? (Select all)",multi:true,c:["Bank overdraft","Provisions and reserves","Sales","Customs duty"],a:[0,1,2],w:"Customs duty is an expense, so it carries a debit balance."},
{t:"Trial balance",q:"If the debit total of a trial balance is lower than the credit total, the suspense account is:",c:["Credited with the difference","Debited with the difference","Left at zero","Split across both sides"],a:[1],w:"The suspense account takes the difference on whichever side is short."},
{t:"Trial balance",q:"A suspense account is:",c:["A permanent account for unexplained items","A temporary account allowing the cycle to continue while errors are located","A type of nominal account closed to P&L","Required by the Companies Act"],a:[1],w:"It is closed and removed once the errors are found and rectified."},
{t:"Trial balance",q:"Debiting the purchase of an executive desk to 'office repairs' instead of 'furniture and fixtures' is an:",c:["Error of omission","Error of principle","Error of commission","Compensating error"],a:[1],w:"It violates an accounting principle — capital expenditure treated as revenue expense. The trial balance still agrees."},
{t:"Trial balance",q:"An invoice is paid but never recorded in the journal at all. This is an:",c:["Error of principle","Error of omission","Error of commission","Compensating error"],a:[1],w:"Both debit and credit are missing, so the trial balance is unaffected."},
{t:"Trial balance",q:"A cash sale of ₹85,000 is credited correctly to sales but debited to bank as only ₹35,000. This is an:",c:["Error of principle","Error of omission","Error of commission","Compensating error"],a:[2],w:"A wrong amount on one side only — which is exactly why it creates a ₹50,000 gap in the trial balance."},
{t:"Trial balance",q:"Which errors leave the trial balance still in agreement? (Select all)",multi:true,c:["Error of principle","Complete omission of a transaction","Compensating errors","A wrong amount posted to one side only"],a:[0,1,2],w:"Only the last one unbalances it, because only one side is affected."},
{t:"Trial balance",q:"An agreed trial balance proves:",c:["That the accounts are completely accurate","Arithmetic accuracy only","That no fraud has occurred","That the financial statements are final"],a:[1],w:"She stressed this in both trial balance lectures — it cannot detect errors of principle, omissions or compensating errors."},
{t:"Trial balance",q:"Two errors that cancel each other out are called:",c:["Errors of principle","Compensating errors","Errors of commission","Suspense errors"],a:[1],w:"An understatement in one account offset by an overstatement in another."}
];

/* ===================================================================
   Assemble the course object.
   =================================================================== */
window.COURSE = {
  slug: "financial-accounting",
  scopeShort: "Lectures 1–15",
  eyebrow: "IIT Jodhpur · B.S. Management & Technology · Semester 1",
  heading: "Financial Accounting<br>Quiz 1 Revision",
  sub: "Concepts and conventions through to the trial balance — the examinable fifteen lectures, compressed for a 40-question paper with negative marking.",

  briefTag: "from the official LMS announcement",
  briefLede: "Figures below are from the official Quiz 1 announcement and its attached syllabus document. Dr. Yadav gave the date in Live Lecture 3 but said she had not yet decided the marks — the announcement has since settled them.",
  briefHtml: `
    <div class="grid2">
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">Confirmed on the official announcement</h4>
        <div class="scroller"><table><tbody>
          <tr><td><strong>Date</strong></td><td>Saturday 3 October</td></tr>
          <tr><td><strong>Window</strong></td><td>5:30–6:00 PM IST · join from <strong>5:15 PM</strong></td></tr>
          <tr><td><strong>Questions</strong></td><td><strong>40</strong>, for <strong>40 marks</strong></td></tr>
          <tr><td><strong>Type</strong></td><td><strong>MCQ and True/False</strong> — the only paper of the six with True/False</td></tr>
          <tr><td><strong>Weight</strong></td><td>20% · best 2 of 3 · 40% of the course total</td></tr>
        </tbody></table></div>
        <div class="warnbox" style="margin-top:12px;border-left-color:var(--bad);background:var(--bad-soft)">
          <b>Negative marking.</b> +1 correct, <strong>−0.25 for a wrong answer</strong>, 0 if left blank. This matters more here than elsewhere, because a True/False guess is a coin flip — see below.
        </div>
      </div>
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">Syllabus</h4>
        <p style="font-size:14.5px">The official syllabus document lists lectures <strong>#1 to #15</strong>, ending at <strong>Week 6 — Trial Balance Part 2</strong>. That matches what she said in Live Lecture 3: <em>&ldquo;whatever has been covered in the week previous to that&hellip; except what you cover in that particular week.&rdquo;</em></p>
        <div class="warnbox" style="margin-top:12px;border-left-color:var(--good);background:var(--good-soft)">
          <b>#16 Matching Concept is OUT</b>, and so is <b>#19 Live Lecture 4</b> (26 September). The list stops at Trial Balance Part 2.
        </div>
        <p style="font-size:14.5px;margin-top:11px">So the arc is: what accounting is → users and regulators → the eight concepts and four conventions → the accounting equation → journal → ledger → <strong>trial balance</strong>. Financial statements themselves are not yet in scope.</p>
        <p style="font-size:13.5px;color:var(--ink-3);margin-top:11px">She also warned there is <strong>no retake</strong> if you miss it — though best-2-of-3 still applies across the semester.</p>
      </div>
    </div>

    <div class="card" style="margin-top:14px;border-left:3px solid var(--clay)">
      <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">45 seconds a question — and be careful with True/False</h4>
      <p style="font-size:14.5px;color:var(--ink-2)">40 questions in 30 minutes is the most generous pace of your six papers. Use it: this is the one where reading the stem properly pays.</p>
      <div class="scroller" style="margin-top:11px"><table><thead><tr><th>Situation</th><th>Expected value</th><th>Do</th></tr></thead><tbody>
        <tr><td>You know it</td><td><strong>+1.00</strong></td><td>Answer</td></tr>
        <tr><td>Four-option MCQ, rule out two</td><td><strong>+0.38</strong></td><td>Answer</td></tr>
        <tr><td>Four-option MCQ, rule out one</td><td><strong>+0.17</strong></td><td>Answer</td></tr>
        <tr><td><strong>True/False coin flip</strong></td><td><strong>+0.38</strong></td><td>Answer — a 50/50 is worth far more than a 4-way guess</td></tr>
        <tr><td>Blind four-option guess</td><td><strong>+0.06</strong></td><td>Answer, but it gains almost nothing</td></tr>
      </tbody></table></div>
      <ul style="margin:11px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7">
        <li><strong>Never leave a True/False blank.</strong> Even a pure guess is worth +0.38 — the best odds on the paper.</li>
        <li><strong>Concepts and conventions are the biggest block.</strong> Twelve named principles, each with one giveaway example. Learn the example and the name comes with it.</li>
        <li><strong>Know which side each account sits on.</strong> A large share of accounting MCQs reduce to debit-or-credit.</li>
      </ul>
    </div>`,

  mapLede: "Fifteen examinable lectures from Dr. Manisha Yadav. Lectures #16 and #19 appear on the LMS but fall outside this quiz.",

  drillLede: "Questions written from the lectures and transcripts. There is no official practice set for this course. Turn the pacer on to rehearse the 45-second tempo.",

  footer: "Compiled 26 September 2026 from the IITJ LMS: the in-scope lecture AI-summaries and full transcripts for Financial Accounting. Timings, question count, question types, marking scheme and syllabus scope from the official LMS quiz announcement and its attached syllabus document. Topic weightings are an estimate, not an official mark scheme. <strong>This is a student-made study aid, not official IIT Jodhpur or Masai School course material</strong> — always check the LMS for the authoritative syllabus and quiz details.",

  lectures: LECTURES,
  weights:  WEIGHTS,
  traps:    TRAPS,
  questions: Q,
  sections: SECTION_META.map(m => Object.assign({}, m, {topics: SECTIONS["s-" + m.id]}))
};
