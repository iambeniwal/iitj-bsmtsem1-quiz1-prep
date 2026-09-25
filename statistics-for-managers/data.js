/* ===================================================================
   Statistics for Managers — Quiz 1
   Dr. Deepak Srivastav. Built from the lecture summaries and full
   transcripts on the IITJ LMS, 26 September 2026.
   Scope: official syllabus lists Topics 1–7; the lecturer said
   "till chapter 6". Both are covered and clearly marked.
   =================================================================== */

const LECTURES=[
 [1,"Week 1 — Data and Statistics 1","Definition, scales of measurement","rec"],
 [2,"Week 1 — Data and Statistics 2","Sources, population vs sample, analytics","rec"],
 [3,"Week 1 — Live Lecture 1","Course frame, Excel and R, variable types","live"],
 [4,"Week 2 — Descriptive Statistics 1","Frequency, bar/pie, histograms, cross-tabulation","rec"],
 [5,"Week 2 — Descriptive Statistics 2","Scatter, trend lines, measures of location","rec"],
 [6,"Week 3 — Descriptive Statistics 3","Spread, shape, z-scores, box plots","rec"],
 [7,"Week 3 — Introduction to Probability 1","Covariance, correlation, experiments, counting","rec"],
 [8,"Week 3 — Live Lecture 2","Pelican Stores case, Excel practice","live"],
 [9,"Week 4 — Introduction to Probability 2","Laws, conditional probability, Bayes","rec"],
 [10,"Week 4 — Discrete Probability Distributions 1","Random variables, expected value","rec"],
 [11,"Week 5 — Discrete Probability Distributions 2","Binomial, Poisson","rec"],
 [12,"Week 5 — Continuous Probability Distributions 1","Uniform, normal, standard normal","rec"],
 [13,"Week 5 — Live Lecture 3","Distributions revision + quiz brief","live"]
];

const WEIGHTS=[
 ["Spread & shape",16],["Probability laws & Bayes",15],["Measures of location",14],
 ["Scales of measurement",12],["Summarising data",12],["Probability foundations",11],
 ["Statistics & data basics",8],["Covariance & correlation",7],["Distributions (flagged)",5]
];

const SECTION_META=[
 {id:"basics", navLabel:"Data basics", title:"Statistics &amp; the vocabulary of data",
  tag:"Topic 1 · Lectures 1, 3",
  lede:"Four words he defines precisely and then uses constantly — element, variable, observation, dataset. Easy marks if you have them exactly right."},
 {id:"scales", navLabel:"Scales", title:"The four scales of measurement",
  tag:"Topic 1 · Lectures 1, 3",
  lede:"Nominal, ordinal, interval, ratio — each one inherits everything below it. The hierarchy is the whole question."},
 {id:"sources", navLabel:"Sources &amp; samples", title:"Sources, samples &amp; analytics",
  tag:"Topic 2 · Lecture 2",
  lede:"Where data comes from, the population/sample distinction, and the three kinds of analytics."},
 {id:"summarise", navLabel:"Summarising", title:"Summarising data",
  tag:"Topics 3–4 · Lectures 4, 5, 8",
  lede:"Which table and which chart for which data type. Plus Simpson's paradox, which is the memorable one."},
 {id:"location", navLabel:"Location", title:"Measures of location",
  tag:"Topic 4 · Lecture 5",
  lede:"Five averages and two position measures. Knowing <em>when</em> to use each is what gets tested."},
 {id:"spread", navLabel:"Spread &amp; shape", title:"Measures of spread &amp; distribution shape",
  tag:"Topic 5 · Lecture 6 · heaviest topic",
  lede:"Formula-dense and therefore very examinable: variance, CV, z-scores, Chebyshev, the empirical rule, outliers and box plots."},
 {id:"assoc", navLabel:"Association", title:"Covariance &amp; correlation",
  tag:"Topic 6 · Lecture 7",
  lede:"Two measures of linear association, and the one warning he repeated — correlation is not causation."},
 {id:"prob1", navLabel:"Probability I", title:"Probability foundations",
  tag:"Topic 6 · Lecture 7",
  lede:"Experiments, sample spaces, counting rules, and the three ways to assign a probability."},
 {id:"prob2", navLabel:"Probability II", title:"Probability laws &amp; Bayes",
  tag:"Topic 7 · Lecture 9 · end of the official list",
  lede:"The formulas. Addition law, conditional probability, multiplication law, independence and Bayes — the last topic on the official syllabus."},
 {id:"dists", navLabel:"Distributions", title:"Probability distributions",
  tag:"Lectures 10–12 · NOT on the official list",
  lede:"The lecturer said the quiz runs &ldquo;till chapter 6&rdquo;, but the official syllabus document stops at Introduction to Probability 2. Covered here in case he is right."}
];

const SECTIONS={
"s-basics":[
 {t:"What statistics is",src:"L#1 · L#3",h:`
  <div class="def"><b>Statistics</b> is the <b>art and science</b> of <b>collecting, analysing, presenting and interpreting</b> data.</div>
  <ul>
   <li>It is a <strong>science</strong> because collection is objective and reproducible — a height in inches is the same whoever measures it.</li>
   <li>It is an <strong>art</strong> because deciding <em>what</em> to collect requires judgement and expertise.</li>
   <li>Calculations are objective and fixed; <strong>interpretation varies with context</strong> — 75 kg is lean, normal or heavy depending on the standard you apply.</li>
  </ul>
  <h4>Where it is used in business</h4>
  <div class="scroller"><table><thead><tr><th>Function</th><th>Use</th></tr></thead><tbody>
   <tr><td><strong>Accounting</strong></td><td><strong>Sampling procedures</strong> for audits</td></tr>
   <tr><td><strong>Economics</strong></td><td>Forecasting, and analysing the impact of events</td></tr>
   <tr><td><strong>Finance</strong></td><td>Price-to-earnings, dividend yield, price-to-book, interest rates</td></tr>
   <tr><td><strong>Marketing</strong></td><td><strong>POS scanner</strong> data on purchase patterns and discount effects</td></tr>
   <tr><td><strong>Production</strong></td><td><strong>Statistical quality control charts</strong></td></tr>
   <tr><td><strong>Information systems</strong></td><td>Speed tests, RAM and memory utilisation</td></tr>
  </tbody></table></div>`},
 {t:"Element, variable, observation, dataset",src:"L#1 · L#3 · definitions matter",h:`
  <div class="scroller"><table><thead><tr><th>Term</th><th>Definition</th><th>In a student marks table</th></tr></thead><tbody>
   <tr><td><strong>Data</strong></td><td>Facts and figures collected, analysed and summarised</td><td>All the numbers</td></tr>
   <tr><td><strong>Element</strong></td><td>Each <strong>person or item</strong> data is collected for</td><td>One student</td></tr>
   <tr><td><strong>Variable</strong></td><td>A <strong>characteristic of interest</strong> that changes from element to element</td><td>Physics marks; Class 12 percentage</td></tr>
   <tr><td><strong>Observation</strong></td><td>The <strong>complete set of measurements for a single element</strong> — one row</td><td>Everything recorded for Student A</td></tr>
   <tr><td><strong>Dataset</strong></td><td>All the data collected in the study</td><td>The whole table</td></tr>
  </tbody></table></div>
  <div class="def"><b>Total data values = number of elements × number of variables.</b> 100 students × 10 variables = <b>1,000</b> data points. His other worked case: a Wall Street Journal survey with <b>46 questions × 50 respondents = 2,300</b> entries.</div>
  <p style="font-size:14.5px"><strong>Descriptive statistics</strong> summarises data in <strong>tabular, graphical or numerical</strong> form. <strong>Inferential statistics</strong> uses a sample to draw conclusions about a population.</p>`}
],

"s-scales":[
 {t:"The four scales",src:"L#1 · L#3 · near-certain exam material",h:`
  <div class="scroller"><table><thead><tr><th>Scale</th><th>Adds</th><th>True zero?</th><th>Examples</th></tr></thead><tbody>
   <tr><td><strong>Nominal</strong></td><td>Names or labels only. <strong>No order</strong></td><td>—</td><td>Gender · student names · <strong>roll numbers</strong> · school of the university</td></tr>
   <tr><td><strong>Ordinal</strong></td><td>Everything nominal has, <strong>plus rank or order</strong></td><td>—</td><td>Class rank · first/second/third year · railway class 1, 2, 3</td></tr>
   <tr><td><strong>Interval</strong></td><td>Everything ordinal has, <strong>plus fixed, meaningful units of difference</strong></td><td><strong>No</strong></td><td><strong>SAT scores</strong> · temperature in °C or °F</td></tr>
   <tr><td><strong>Ratio</strong></td><td>Everything interval has, <strong>plus a true zero</strong>, so ratios are meaningful</td><td><strong>Yes</strong></td><td>Price · height · weight · distance · age · sales revenue</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>The trap:</b> <b>roll numbers are nominal</b>, not ordinal — they are numeric labels with no ranking. And <b>temperature in Celsius is interval, not ratio</b>, because 0°C does not mean the absence of temperature.</div>
  <h4>The conversion hierarchy</h4>
  <p style="font-size:15px"><strong>You can always go down, never up.</strong> Ratio → interval → ordinal → nominal. Nominal cannot be converted to anything else. Ratio is the <strong>richest</strong> scale.</p>
  <h4>Categorical vs quantitative</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Categorical (qualitative)</th><th>Quantitative</th></tr></thead><tbody>
   <tr><td><strong>Scales</strong></td><td><strong>Nominal or ordinal</strong></td><td><strong>Interval or ratio</strong></td></tr>
   <tr><td><strong>Numeric?</strong></td><td>May be numeric <em>or</em> not — the numbers are labels</td><td><strong>Always numeric</strong></td></tr>
   <tr><td><strong>Arithmetic</strong></td><td>Not meaningful</td><td>Meaningful</td></tr>
   <tr><td><strong>Answers</strong></td><td>Which category</td><td>How many, how much</td></tr>
  </tbody></table></div>`},
 {t:"Cross-sectional and time series",src:"L#1",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Cross-sectional</th><th>Time series</th></tr></thead><tbody>
   <tr><td><strong>Collected</strong></td><td>At the <strong>same, or approximately the same, point in time</strong></td><td>Over <strong>multiple time periods</strong></td></tr>
   <tr><td><strong>Shows</strong></td><td>Comparison across elements at one moment</td><td>How something changes, so trends can be projected</td></tr>
   <tr><td><strong>Examples</strong></td><td>Ages of all students in a class this month · building permits issued in one month</td><td>One student's performance over 10 years · petrol price Jan 2009 to Apr 2014</td></tr>
  </tbody></table></div>`}
],

"s-sources":[
 {t:"Sources and types of collection",src:"L#2",h:`
  <p style="font-size:14.5px"><strong>Sources:</strong> internal company records (employee, production, inventory, sales, credit) · business database services · <strong>government agencies</strong> (Ministry of Statistics, US Department of Labor) · industry associations · special interest organisations · the internet and AI.</p>
  <div class="scroller"><table><thead><tr><th></th><th>Observational</th><th>Experimental</th></tr></thead><tbody>
   <tr><td><strong>Intervention</strong></td><td><strong>None</strong> — no attempt to control or influence variables</td><td>A <strong>treatment is administered</strong> and its effect measured</td></tr>
   <tr><td><strong>Method</strong></td><td>Observe as it naturally occurs</td><td>Compare pre-treatment and post-treatment</td></tr>
   <tr><td><strong>Example</strong></td><td>A survey of smokers and non-smokers</td><td>The <strong>1954 polio vaccine trial</strong>, involving <strong>2 million</strong> US children</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">Three considerations before acquiring data: <strong>time</strong> (will it still be useful when it arrives), <strong>cost</strong> (Meta and Facebook are essentially data companies), and <strong>data errors</strong>.</p>`},
 {t:"Population, sample and analytics",src:"L#2 · L#5",h:`
  <div class="scroller"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
   <tr><td><strong>Population</strong></td><td>The <strong>complete set</strong> of all elements of interest</td></tr>
   <tr><td><strong>Sample</strong></td><td>A <strong>subset</strong> of the population</td></tr>
   <tr><td><strong>Census</strong></td><td>Collection from the <strong>entire population</strong></td></tr>
   <tr><td><strong>Sample survey</strong></td><td>Collection from a subset</td></tr>
   <tr><td><strong>Statistical inference</strong></td><td>Using sample data to estimate population characteristics and test hypotheses</td></tr>
   <tr><td><strong>Sample statistic</strong></td><td>A measure computed from a <strong>sample</strong> — like tasting a few grains to see if the rice is cooked</td></tr>
   <tr><td><strong>Population parameter</strong></td><td>A measure computed from <strong>every</strong> element</td></tr>
   <tr><td><strong>Point estimator</strong></td><td>A sample statistic used to infer the corresponding population parameter</td></tr>
  </tbody></table></div>
  <h4>The three analytics</h4>
  <div class="scroller"><table><thead><tr><th>Type</th><th>Answers</th></tr></thead><tbody>
   <tr><td><strong>Descriptive</strong></td><td>What happened — describes and summarises the past</td></tr>
   <tr><td><strong>Predictive</strong></td><td>What will happen — models built on past data</td></tr>
   <tr><td><strong>Prescriptive</strong></td><td>What we should do — the optimal course of action</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>Big data</strong> is characterised by <strong>volume, velocity and variety</strong>. <strong>Data mining</strong> extracts patterns from large datasets; <strong>data warehousing</strong> captures and organises them — Walmart processes <strong>20–30 million transactions a day</strong>. Models should be <strong>reliable</strong>, and data split into <strong>training and testing</strong> sets.</p>`}
],

"s-summarise":[
 {t:"Tables and charts, by data type",src:"L#4 · L#5 · L#8",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Categorical data</th><th>Quantitative data</th></tr></thead><tbody>
   <tr><td><strong>Tables</strong></td><td>Frequency, relative frequency, percentage frequency, <strong>cross-tabulation</strong></td><td>Frequency, relative, percentage, <strong>cumulative</strong> frequency</td></tr>
   <tr><td><strong>Charts</strong></td><td><strong>Bar chart</strong>, <strong>pie chart</strong>, side-by-side bar, stacked bar</td><td><strong>Histogram</strong>, <strong>scatter plot</strong></td></tr>
  </tbody></table></div>
  <ul>
   <li><strong>Frequency distribution:</strong> categories must be <strong>mutually exclusive and non-overlapping</strong>.</li>
   <li><strong>Relative frequency</strong> = frequency ÷ total. All relative frequencies sum to <strong>1.0</strong>; percentage frequencies to <strong>100%</strong>.</li>
   <li><strong>Pie chart sector angle</strong> = relative frequency × <strong>360°</strong>. Best kept under <strong>5–6 categories</strong>.</li>
   <li><strong>Histogram vs bar chart:</strong> a histogram is for continuous quantitative data, so <strong>adjacent classes have no gap between them</strong>.</li>
   <li><strong>Cumulative frequency</strong> adds up preceding classes; the last class always equals the total, and cumulative percentage always reaches <strong>100%</strong>.</li>
  </ul>
  <h4>Distribution shapes</h4>
  <div class="scroller"><table><thead><tr><th>Shape</th><th>Tail</th><th>His example</th></tr></thead><tbody>
   <tr><td><strong>Symmetric</strong></td><td>Both sides mirror</td><td>Human heights</td></tr>
   <tr><td><strong>Left-skewed</strong> (negative)</td><td>Longer tail on the <strong>left</strong></td><td>Exam scores — most cluster high, a few very low</td></tr>
   <tr><td><strong>Right-skewed</strong> (positive)</td><td>Longer tail on the <strong>right</strong></td><td>Housing prices</td></tr>
  </tbody></table></div>`},
 {t:"Cross-tabulation and Simpson's paradox",src:"L#4",h:`
  <p style="font-size:15px"><strong>Cross-tabulation</strong> summarises two variables at once, in rows and columns. It works for any combination — categorical with categorical, categorical with quantitative, or quantitative with quantitative.</p>
  <div class="warnbox"><b>Row vs column percentages.</b> If you sum <em>across</em> rows, you must interpret row-wise. If you sum <em>down</em> columns, interpret column-wise. Mismatching the direction of calculation and interpretation produces wrong conclusions.</div>
  <div class="def"><b>Simpson's paradox:</b> a conclusion drawn from <b>aggregate</b> data can <b>completely reverse</b> when the data is broken into subgroups.</div>
  <h4>Scatter diagrams and trend lines</h4>
  <p style="font-size:14.5px">Two quantitative variables plotted against each other; the <strong>trend line</strong> shows the general direction.</p>
  <p style="font-size:14.5px"><strong>Positive:</strong> both rise together, slope positive — interceptions vs points scored. <strong>Negative:</strong> y falls as x rises, slope negative — price vs quantity demanded. <strong>None:</strong> slope zero.</p>
  <p style="font-size:14.5px">A <strong>side-by-side bar chart</strong> compares categories in clusters. A <strong>stacked bar chart</strong> shows proportions inside a total — and with percentage frequencies every bar is the same height, which makes proportions easy to compare.</p>`}
],

"s-location":[
 {t:"The five averages",src:"L#5",h:`
  <div class="scroller"><table><thead><tr><th>Measure</th><th>Formula</th><th>Use when</th></tr></thead><tbody>
   <tr><td><strong>Mean</strong></td><td>x&#772; = &Sigma;x<sub>i</sub> / n</td><td>Data is reasonably symmetric. <strong>Affected by extreme values</strong></td></tr>
   <tr><td><strong>Median</strong></td><td>Middle value when ordered. Even n → average the two middle values</td><td><strong>Outliers present</strong> or the distribution is skewed — placements, property, income</td></tr>
   <tr><td><strong>Mode</strong></td><td>The most frequent value</td><td><strong>Categorical data</strong> — often the only measure available. Can be uni-, bi- or multimodal</td></tr>
   <tr><td><strong>Weighted mean</strong></td><td>x&#772;<sub>w</sub> = &Sigma;(w<sub>i</sub>x<sub>i</sub>) / &Sigma;w<sub>i</sub></td><td>Observations have <strong>different importance</strong> — GPA with credit hours, wages with hours worked</td></tr>
   <tr><td><strong>Geometric mean</strong></td><td>(x<sub>1</sub> × x<sub>2</sub> × … × x<sub>n</sub>)<sup>1/n</sup></td><td><strong>Rates of change over successive periods</strong> — multiplicative, not additive. Returns, growth rates, bacteria</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Geometric mean is the one people miss.</b> Use it when each observation <em>depends on the previous one</em> — compounding. Using the arithmetic mean on returns gives a misleading answer.</div>
  <p style="font-size:14.5px">His worked contrast: apartment rents with a <strong>median of 575 against a mean of 590.8</strong> — the median is the stabler figure because extreme rents drag the mean.</p>`},
 {t:"Percentiles and quartiles",src:"L#5",h:`
  <div class="def">The <b>p-th percentile</b> is a value such that at least <b>p percent</b> of items are at or below it.</div>
  <p style="font-size:15px"><strong>Location = (p / 100) × (n + 1)</strong></p>
  <p style="font-size:14.5px">Worked: for 70 apartment rents, the 80th percentile sits at <strong>(80/100) × 71 = 56.8</strong> — between the 56th and 57th values once sorted.</p>
  <div class="scroller"><table><thead><tr><th>Quartile</th><th>Equals</th></tr></thead><tbody>
   <tr><td><strong>Q1</strong></td><td>25th percentile</td></tr>
   <tr><td><strong>Q2</strong></td><td><strong>50th percentile = the median</strong></td></tr>
   <tr><td><strong>Q3</strong></td><td>75th percentile</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">At the 99th percentile, only <strong>1%</strong> of values are above you.</p>`}
],

"s-spread":[
 {t:"Measures of spread",src:"L#6 · formula-dense",h:`
  <p style="font-size:15px">Location tells you the centre but nothing about consistency — and in business, <strong>variability is usually the thing you care about</strong>. Delivery in 10 minutes here and an hour there is a problem even if the average looks fine.</p>
  <div class="scroller"><table><thead><tr><th>Measure</th><th>Formula</th><th>Note</th></tr></thead><tbody>
   <tr><td><strong>Range</strong></td><td>Maximum − minimum</td><td>Simple, but <strong>highly sensitive to extremes</strong> and uses only two values</td></tr>
   <tr><td><strong>Interquartile range</strong></td><td><strong>IQR = Q3 − Q1</strong></td><td>The <strong>middle 50%</strong>. Ignores the bottom and top quarters, so outliers do not distort it</td></tr>
   <tr><td><strong>Variance</strong> (sample)</td><td>&Sigma;(x<sub>i</sub> − x&#772;)&sup2; / <strong>(n − 1)</strong></td><td>Uses <strong>every</strong> data point</td></tr>
   <tr><td><strong>Variance</strong> (population)</td><td>&Sigma;(x<sub>i</sub> − μ)&sup2; / <strong>n</strong></td><td>Note the denominator difference</td></tr>
   <tr><td><strong>Standard deviation</strong></td><td>&radic;variance</td><td>In the <strong>same units as the data</strong>, so more interpretable</td></tr>
   <tr><td><strong>Coefficient of variation</strong></td><td><strong>CV = s / x&#772;</strong></td><td>Compares variability across datasets with <strong>different means or units</strong>. Lower = more consistent</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Why square the deviations?</b> Otherwise positive and negative deviations cancel and the variance would be zero even when the data varies. And <b>sample variance divides by n − 1</b>, not n.</div>
  <p style="font-size:14.5px"><strong>His CV example:</strong> two suppliers both average 5 days. Supplier A has σ = 5, Supplier B has σ = 1. CV of A = <strong>1.0</strong>; CV of B = <strong>0.2</strong>. <strong>B is more reliable</strong>, even though the means are identical.</p>`},
 {t:"Shape, z-scores and the two rules",src:"L#6",h:`
  <h4>Skewness</h4>
  <div class="scroller"><table><thead><tr><th>Skew</th><th>Tail</th><th>Relationship</th></tr></thead><tbody>
   <tr><td><strong>Negative (left)</strong></td><td>Extends left</td><td><strong>Median &gt; mean</strong></td></tr>
   <tr><td><strong>Zero</strong></td><td>Symmetric</td><td><strong>Mean = median</strong></td></tr>
   <tr><td><strong>Positive (right)</strong></td><td>Extends right</td><td><strong>Mean &gt; median</strong></td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">Formula: <strong>&Sigma;[(x<sub>i</sub> − x&#772;)/s]&sup3; / n</strong>. In placement data most students cluster lower with a few very high packages — which is why the <strong>median</strong> is the more representative figure.</p>
  <h4>Z-score</h4>
  <div class="def"><b>z = (x<sub>i</sub> − x&#772;) / s</b> — how many standard deviations a value sits from the mean. Also called the <b>standardised value</b>.</div>
  <p style="font-size:14.5px">z &lt; 0 below the mean, z = 0 at it, z &gt; 0 above. It creates a <strong>common metric</strong>: a rent of 500 where mean = 600 and SD = 100, and a rent of 70 where mean = 50 and SD = 50, both give z = −1 — identically positioned within their own distributions.</p>
  <h4>Chebyshev's theorem vs the empirical rule</h4>
  <div class="scroller"><table><thead><tr><th></th><th>Chebyshev</th><th>Empirical rule</th></tr></thead><tbody>
   <tr><td><strong>Applies to</strong></td><td><strong>Any distribution shape</strong></td><td><strong>Bell-shaped (normal) data only</strong></td></tr>
   <tr><td><strong>Statement</strong></td><td><strong>At least 1 − 1/z&sup2;</strong> of values lie within z standard deviations, for z &gt; 1</td><td>Fixed percentages</td></tr>
   <tr><td><strong>±2σ</strong></td><td>At least <strong>75%</strong></td><td>About <strong>95%</strong></td></tr>
   <tr><td><strong>±3σ</strong></td><td>At least <strong>89%</strong></td><td>About <strong>99.7%</strong></td></tr>
   <tr><td><strong>±1σ</strong></td><td>— (needs z &gt; 1)</td><td>About <strong>68%</strong></td></tr>
   <tr><td><strong>±4σ</strong></td><td>At least <strong>94%</strong></td><td>—</td></tr>
  </tbody></table></div>
  <div class="warnbox"><b>Chebyshev says &ldquo;at least&rdquo;</b>, so the real figure can be much higher. It is weaker but universal; the empirical rule is sharper but needs normality. <b>Six Sigma</b> quality management works to ±3σ.</div>`},
 {t:"Outliers, five-number summary and box plots",src:"L#6 · L#7",h:`
  <div class="def">An <b>outlier</b> is an unusually small or large value. The z-score test: <b>|z| &gt; 3</b> flags one — more than three standard deviations from the mean.</div>
  <p style="font-size:14.5px"><strong>Three causes:</strong> incorrectly <em>recorded</em> data · incorrectly <em>included</em> data · correctly recorded, genuinely exceptional values.</p>
  <h4>The five-number summary</h4>
  <p style="font-size:15px"><strong>Minimum · Q1 · Median (Q2) · Q3 · Maximum</strong></p>
  <h4>Box plot construction, and the other outlier rule</h4>
  <ul>
   <li>The <strong>box</strong> runs from <strong>Q1 to Q3</strong> — the middle 50%.</li>
   <li>A line inside marks the <strong>median</strong>.</li>
   <li><strong>Lower limit = Q1 − 1.5 × IQR</strong>. <strong>Upper limit = Q3 + 1.5 × IQR</strong>. Anything beyond is an outlier.</li>
   <li><strong>Whiskers</strong> extend to the most extreme values <em>inside</em> those limits — not to the outliers.</li>
  </ul>
  <p style="font-size:14.5px"><strong>His worked example:</strong> Q1 = 545, Q3 = 625, so <strong>IQR = 80</strong>. Lower limit = 545 − 120 = <strong>425</strong>; upper limit = 625 + 120 = <strong>745</strong>.</p>
  <div class="warnbox"><b>Two different outlier rules, both examinable:</b> the <b>z-score</b> rule (|z| &gt; 3) and the <b>box plot</b> rule (beyond Q1 − 1.5 IQR or Q3 + 1.5 IQR). Do not mix up the multipliers — 3 for z, 1.5 for IQR.</div>`}
],

"s-assoc":[
 {t:"Covariance and correlation",src:"L#7",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Covariance</th><th>Correlation coefficient</th></tr></thead><tbody>
   <tr><td><strong>Measures</strong></td><td>Linear association between two variables</td><td>Linear association, <strong>standardised</strong></td></tr>
   <tr><td><strong>Formula</strong></td><td>&Sigma;[(x − x&#772;)(y − y&#772;)] / (n − 1) for a sample</td><td><strong>r = covariance / (s<sub>x</sub> × s<sub>y</sub>)</strong></td></tr>
   <tr><td><strong>Range</strong></td><td>Unbounded — <strong>scale-dependent</strong>, so hard to interpret</td><td><strong>Always between −1 and +1</strong></td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>r = +1</strong> strong positive linear relationship · <strong>r = −1</strong> strong negative · <strong>r = 0</strong> weak or none.</p>
  <div class="warnbox"><b>Correlation is association, not causation.</b> He said it explicitly. Two highly correlated variables need not have any causal link.</div>
  <p style="font-size:14.5px"><strong>His golf example:</strong> driving distance against score gave covariance <strong>−7.09</strong> and <strong>r = −0.96</strong> — strongly negative, meaning longer drives go with lower (better) scores.</p>`}
],

"s-prob1":[
 {t:"Experiments, sample spaces and counting",src:"L#7",h:`
  <div class="def"><b>Probability</b> is a numerical measure of the likelihood that an event occurs, ranging from <b>0 (impossible) to 1 (certain)</b>.</div>
  <p style="font-size:14.5px">A <strong>random experiment</strong> is a process whose outcome cannot be predicted with certainty, may differ on repetition, and whose results fall within a defined set.</p>
  <div class="scroller"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
   <tr><td><strong>Sample space</strong></td><td>The set of <strong>all</strong> possible outcomes</td></tr>
   <tr><td><strong>Sample point</strong></td><td>An <strong>individual</strong> outcome within it</td></tr>
   <tr><td><strong>Event</strong></td><td>A <strong>collection</strong> of one or more sample points</td></tr>
  </tbody></table></div>
  <h4>Counting rules</h4>
  <ul>
   <li><strong>Fundamental counting rule:</strong> k sequential steps with N₁, N₂ … Nₖ outcomes give <strong>N₁ × N₂ × … × Nₖ</strong> total outcomes. His investment case: 4 × 2 = <strong>8</strong>.</li>
   <li><strong>Combinations — order does NOT matter:</strong> <sup>N</sup>C<sub>n</sub> = N! / [n!(N − n)!]</li>
   <li><strong>Permutations — order DOES matter:</strong> <sup>N</sup>P<sub>n</sub> = N! / (N − n)!</li>
  </ul>
  <div class="warnbox"><b>Combination or permutation?</b> If rearranging the same items counts as a different result, it is a <b>permutation</b>. Permutations always give the larger number.</div>`},
 {t:"The three ways to assign a probability",src:"L#7",h:`
  <div class="scroller"><table><thead><tr><th>Method</th><th>Basis</th><th>Example</th></tr></thead><tbody>
   <tr><td><strong>Classical</strong></td><td>All outcomes <strong>equally likely</strong>. P = 1 / number of outcomes</td><td>An unbiased die — <strong>1/6</strong> each</td></tr>
   <tr><td><strong>Relative frequency</strong></td><td><strong>Historical data.</strong> P = frequency ÷ total observations</td><td>2 scooters rented on 18 of 40 days → <strong>18/40 = 0.45</strong></td></tr>
   <tr><td><strong>Subjective</strong></td><td><strong>Judgement, experience, intuition</strong> — when no data exists and experiment is impractical</td><td>A new product's chance of success</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>Two rules:</strong> all outcome probabilities in an experiment must <strong>sum to 1</strong>, and the probability of an event is the <strong>sum of the probabilities of its sample points</strong>.</p>`}
],

"s-prob2":[
 {t:"The laws",src:"L#9 · last topic on the official list",h:`
  <div class="scroller"><table><thead><tr><th>Concept</th><th>Meaning</th><th>Formula</th></tr></thead><tbody>
   <tr><td><strong>Complement</strong> A&prime;</td><td>All sample points <strong>not</strong> in A — and never outside the sample space</td><td>Die {1…6}, A = divisible by 3 = {3,6}, so A&prime; = {1,2,4,5}</td></tr>
   <tr><td><strong>Union</strong> A ∪ B</td><td>In A, <strong>or</strong> B, <strong>or both</strong></td><td>—</td></tr>
   <tr><td><strong>Intersection</strong> A ∩ B</td><td>In <strong>both</strong> A and B</td><td>—</td></tr>
   <tr><td><strong>Addition law</strong></td><td>A or B or both</td><td><strong>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</strong></td></tr>
   <tr><td><strong>Mutually exclusive</strong></td><td><strong>No sample points in common</strong>; if one happens the other cannot</td><td><strong>P(A ∩ B) = 0</strong>, so P(A ∪ B) = P(A) + P(B)</td></tr>
   <tr><td><strong>Conditional probability</strong></td><td>A given that B has already happened</td><td><strong>P(A|B) = P(A ∩ B) / P(B)</strong></td></tr>
   <tr><td><strong>Multiplication law</strong></td><td>Joint probability</td><td><strong>P(A ∩ B) = P(A) × P(B|A) = P(B) × P(A|B)</strong></td></tr>
   <tr><td><strong>Independence</strong></td><td>One event does not affect the other</td><td><strong>P(A ∩ B) = P(A) × P(B)</strong>, and P(A|B) = P(A)</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">Why subtract the intersection in the addition law? Because it is <strong>counted twice</strong>, once in P(A) and once in P(B).</p>
  <div class="warnbox"><b>Independence and mutual exclusivity are not the same — they are almost opposites.</b> Mutually exclusive events with non-zero probabilities are <b>dependent</b>: if one occurs, the other definitely does not. Independence means one tells you nothing about the other.</div>
  <p style="font-size:14.5px"><strong>His independence test:</strong> P(M ∩ C) = 0.36, but P(M) × P(C) = 0.7 × 0.48 = <strong>0.336</strong>. They differ, so the two events are <strong>not independent</strong>.</p>`},
 {t:"Bayes' theorem",src:"L#9",h:`
  <div class="def"><b>Prior</b> probabilities come from history or initial knowledge. New information arrives. <b>Posterior</b> probabilities are the revised estimates that combine the two.</div>
  <p style="font-size:15px"><strong>P(A<sub>i</sub>|B) = [P(A<sub>i</sub>) × P(B|A<sub>i</sub>)] / Σ[P(A<sub>j</sub>) × P(B|A<sub>j</sub>)]</strong></p>
  <p style="font-size:14.5px">It applies when the events A<sub>i</sub> are <strong>mutually exclusive</strong> and together make up the <strong>whole sample space</strong>.</p>
  <h4>The shopping centre zoning case — worth knowing the numbers</h4>
  <div class="scroller"><table><thead><tr><th>Step</th><th>Value</th></tr></thead><tbody>
   <tr><td>Prior: approval</td><td><strong>0.70</strong></td></tr>
   <tr><td>Prior: rejection</td><td><strong>0.30</strong></td></tr>
   <tr><td>P(negative recommendation | approval)</td><td>0.20</td></tr>
   <tr><td>P(negative recommendation | rejection)</td><td>0.90</td></tr>
   <tr><td>Joint: approval &amp; negative</td><td>0.70 × 0.20 = <strong>0.14</strong></td></tr>
   <tr><td>Joint: rejection &amp; negative</td><td>0.30 × 0.90 = <strong>0.27</strong></td></tr>
   <tr><td><strong>Posterior P(approval | negative)</strong></td><td>0.14 / (0.14 + 0.27) = <strong>0.34</strong></td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px">The owner revises the chance of approval from <strong>70% down to 34%</strong> — which changes the decision entirely.</p>
  <h4>The tabular method</h4>
  <p style="font-size:14.5px">List the mutually exclusive events → priors → conditionals → <strong>multiply</strong> for joints → <strong>sum</strong> the joints → <strong>divide</strong> each joint by that sum.</p>`}
],

"s-dists":[
 {t:"Random variables and expected value",src:"L#10 · L#13 · NOT on the official list",h:`
  <div class="warnbox" style="border-left-color:var(--clay)"><b>Read the scope note in the exam brief first.</b> The official syllabus document stops at Introduction to Probability 2. In Live Lecture 3 the lecturer said the quiz runs &ldquo;till chapter 6, continuous probability distribution&rdquo;. This section exists in case he is right.</div>
  <div class="def">A <b>random variable</b> is a numerical description of the outcome of a statistical experiment.</div>
  <p style="font-size:14.5px"><strong>Discrete</strong> — finite, or an infinite sequence with nothing in between. TVs sold: 0, 1, 2, 3, 4. You cannot sell 1.5. <strong>Continuous</strong> — any value in an interval: distance, temperature, height.</p>
  <p style="font-size:14.5px">A probability distribution needs <strong>P(x) ≥ 0</strong> for every value and <strong>Σf(x) = 1</strong>.</p>
  <h4>Expected value and variance</h4>
  <p style="font-size:15px"><strong>E(X) = μ = Σ[x · f(x)]</strong> — a weighted average, with probabilities as weights.<br>
  <strong>Var(X) = σ&sup2; = Σ[(x − μ)&sup2; · f(x)]</strong></p>
  <p style="font-size:14.5px"><strong>His TV example:</strong> over 200 days — 0 sold on 80 days (0.40), 1 on 50 (0.25), 2 on 40 (0.20), 3 on 10 (0.05), 4 on 20 (0.10). E(X) = <strong>1.2</strong> TVs a day. Note the expected value need not be a value the variable can actually take.</p>
  <p style="font-size:14.5px">A <strong>uniform discrete</strong> distribution has all values equally likely: <strong>f(x) = 1/n</strong>.</p>`},
 {t:"Binomial, Poisson and the normal",src:"L#11 · L#12 · NOT on the official list",h:`
  <div class="scroller"><table><thead><tr><th></th><th>Binomial</th><th>Poisson</th></tr></thead><tbody>
   <tr><td><strong>Conditions</strong></td><td><strong>Four</strong>: n identical trials · two outcomes only · constant p (the <strong>stationarity assumption</strong>) · independent trials</td><td><strong>Two</strong>: equal probability over equal intervals · independent occurrences</td></tr>
   <tr><td><strong>Parameters</strong></td><td><strong>n and p</strong></td><td><strong>μ only</strong></td></tr>
   <tr><td><strong>Mean</strong></td><td><strong>np</strong></td><td><strong>μ</strong></td></tr>
   <tr><td><strong>Variance</strong></td><td><strong>np(1 − p)</strong></td><td><strong>μ</strong> — mean equals variance, unique to Poisson</td></tr>
   <tr><td><strong>Used for</strong></td><td>A fixed number of trials</td><td><strong>Occurrences in an interval</strong> of time or space</td></tr>
  </tbody></table></div>
  <p style="font-size:14.5px"><strong>Binomial:</strong> P(X=x) = [n!/(x!(n−x)!)] · p<sup>x</sup> · (1−p)<sup>n−x</sup>. His case: 10% turnover, 3 employees, exactly 1 leaving → <strong>0.2430</strong>.</p>
  <p style="font-size:14.5px"><strong>Poisson:</strong> P(X=x) = (μ<sup>x</sup> e<sup>−μ</sup>) / x!. His case: 6 patients an hour, so μ = 3 for half an hour; exactly 4 arrivals → <strong>0.168</strong>.</p>
  <h4>Continuous: uniform and normal</h4>
  <p style="font-size:14.5px">For a continuous variable, <strong>probability is the area under the density function</strong> over an interval — you cannot get a probability at a single point.</p>
  <p style="font-size:14.5px"><strong>Uniform:</strong> f(x) = 1/(B−A) · E(X) = (A+B)/2 · Var(X) = (B−A)&sup2;/12.</p>
  <p style="font-size:14.5px"><strong>Normal:</strong> mean, median and mode <strong>coincide</strong> at the centre; perfectly symmetric; total area = 1; a larger σ flattens the curve. The <strong>standard normal</strong> has μ = 0 and σ = 1, reached by <strong>z = (x − μ)/σ</strong>. Empirical rule in detail: <strong>68.26% · 95.44% · 99.72%</strong>.</p>
  <p style="font-size:14.5px"><strong>His PepZone case:</strong> μ = 15, σ = 6, reorder at 20. z = (20−15)/6 = <strong>0.83</strong>; P(Z ≤ 0.83) = 0.7967; so the stockout risk is <strong>1 − 0.7967 = 20.33%</strong>. Tables give P(Z ≤ z), so the upper tail is always 1 minus the table value.</p>`}
]
};

const TRAPS=[
 ["Roll numbers are nominal, not ordinal","They are numeric labels with no ranking. Numeric does not mean quantitative.","numbers can be labels"],
 ["Celsius is interval, not ratio","There is no true zero — 0°C is not the absence of temperature — so ratios are meaningless.","no true zero, no ratio"],
 ["You can convert down the hierarchy, never up","Ratio → interval → ordinal → nominal. Nominal converts to nothing.","downhill only"],
 ["Sample variance divides by n − 1","Population variance divides by n. Getting this backwards is the classic slip.","n−1 for samples"],
 ["Standard deviation is in original units, variance is not","That is the whole reason SD is preferred for interpretation.","SD is interpretable"],
 ["Lower coefficient of variation means more consistent","CV = s / x̄. His suppliers: CV 1.0 versus 0.2 with identical means — the 0.2 supplier is better.","lower CV wins"],
 ["Left-skew means median > mean","Right-skew means mean > median. The mean chases the tail.","the mean follows the tail"],
 ["Chebyshev applies to any shape; the empirical rule needs normality","Chebyshev at ±2σ gives at least 75%; the empirical rule gives about 95%.","any shape vs bell shape"],
 ["Chebyshev says 'at least'","The true proportion can be much higher. It is a lower bound, not an estimate.","a floor, not a figure"],
 ["Two different outlier rules","z-score: |z| > 3. Box plot: beyond Q1 − 1.5·IQR or Q3 + 1.5·IQR. Don't swap the 3 and the 1.5.","3 for z, 1.5 for IQR"],
 ["Whiskers stop at the limits, not at the outliers","They extend to the most extreme values inside Q1 − 1.5 IQR and Q3 + 1.5 IQR.","outliers sit outside the whiskers"],
 ["Q2 is the median","Quartiles are just the 25th, 50th and 75th percentiles.","Q2 = 50th = median"],
 ["Geometric mean is for rates of change","Use it when each period compounds on the last. The arithmetic mean misleads on returns.","compounding needs geometric"],
 ["Correlation is bounded, covariance is not","r always sits between −1 and +1. Covariance is scale-dependent, which is why it is hard to read.","r is standardised"],
 ["Correlation is not causation","He said it explicitly. Highly correlated variables need not be causally linked.","association only"],
 ["Permutations care about order, combinations do not","If rearranging counts as different, it is a permutation — and permutations always give the bigger number.","order = permutation"],
 ["Subtract the intersection in the addition law","P(A∪B) = P(A) + P(B) − P(A∩B), because the overlap is otherwise counted twice.","don't double-count"],
 ["Mutually exclusive events are DEPENDENT","If one occurring means the other cannot, they are maximally informative about each other. Independence is the opposite.","exclusive ≠ independent"],
 ["Test independence with P(A∩B) = P(A)·P(B)","If the two sides differ, the events are dependent. His case: 0.36 versus 0.336.","multiply and compare"],
 ["Histograms have no gaps between bars","Because the data is continuous. Bar charts, for categories, do have gaps.","continuous = no gap"],
 ["Simpson's paradox reverses on disaggregation","An aggregate conclusion can flip entirely once you split the data into subgroups.","aggregate can lie"],
 ["Poisson is the one where mean equals variance","Binomial: mean np, variance np(1−p). Poisson: both equal μ.","Poisson: μ = μ"],
 ["A calculator is allowed","He confirmed this in Live Lecture 3 — unusual among your six papers, so bring one.","bring a calculator"]
];

/* ===================== QUESTION BANK ===================== */
const Q=[
// basics
{t:"Data basics",q:"Statistics is defined as the art and science of:",c:["Calculating averages and percentages","Collecting, analysing, presenting and interpreting data","Testing hypotheses about populations","Building predictive models"],a:[1],w:"All four verbs. It is a science because collection is objective, and an art because deciding what to collect takes judgement."},
{t:"Data basics",q:"In a dataset, each person or item for whom data is collected is called a(n):",c:["Variable","Element","Observation","Parameter"],a:[1],w:"Element. A variable is a characteristic; an observation is all the measurements for one element."},
{t:"Data basics",q:"The complete set of measurements obtained for a single element is a(n):",c:["Dataset","Variable","Observation","Sample"],a:[2],w:"One observation — one row of the table."},
{t:"Data basics",q:"Data is collected on 100 students across 10 variables. How many total data values?",c:["110","100","1,000","10"],a:[2],w:"Elements × variables = 100 × 10 = 1,000."},
{t:"Data basics",q:"A survey asks 46 questions of 50 respondents. Total data entries:",c:["96","2,300","460","500"],a:[1],w:"46 × 50 = 2,300. This was his Wall Street Journal example."},
{t:"Data basics",q:"Summaries of data in tabular, graphical or numerical form are:",c:["Inferential statistics","Descriptive statistics","Predictive analytics","Statistical inference"],a:[1],w:"Descriptive statistics presents data as it is, without inferring about a population."},

// scales
{t:"Scales",q:"Gender recorded as Male/Female is measured on which scale?",c:["Nominal","Ordinal","Interval","Ratio"],a:[0],w:"Labels with no hierarchy or ranking."},
{t:"Scales",q:"Student roll numbers are measured on which scale?",c:["Ratio, because they are numbers","Interval","Ordinal","Nominal"],a:[3],w:"Numeric, but purely identifiers with no ranking. Numeric does not mean quantitative."},
{t:"Scales",q:"Which scale has meaningful differences between values but no true zero?",c:["Nominal","Ordinal","Interval","Ratio"],a:[2],w:"Interval — SAT scores, temperature in Celsius or Fahrenheit."},
{t:"Scales",q:"Which is the richest scale of measurement?",c:["Nominal","Ordinal","Interval","Ratio"],a:[3],w:"Ratio has all the properties of the others plus a true zero, so all arithmetic operations are meaningful."},
{t:"Scales",q:"Temperature measured in Celsius is on which scale?",c:["Ratio","Interval","Ordinal","Nominal"],a:[1],w:"0°C is not the absence of temperature, so ratios such as '20°C is twice 10°C' are meaningless."},
{t:"Scales",q:"Which conversion of measurement scales is possible?",c:["Nominal to ratio","Ordinal to interval","Ratio to ordinal","Nominal to ordinal"],a:[2],w:"You can always move down the hierarchy — ratio to interval to ordinal to nominal — but never up."},
{t:"Scales",q:"Categorical data uses which scales?",c:["Interval and ratio","Nominal and ordinal","Ordinal and interval","Nominal only"],a:[1],w:"Categorical uses nominal or ordinal; quantitative uses interval or ratio."},
{t:"Scales",q:"Ages of all students in a class collected during one month are:",c:["Time series data","Cross-sectional data","Panel data","Experimental data"],a:[1],w:"Collected at approximately the same point in time."},
{t:"Scales",q:"Which are examples of ratio scale data? (Select all)",multi:true,c:["Height","Sales revenue","Age","Class rank"],a:[0,1,2],w:"Class rank is ordinal — the gaps between ranks are not equal and there is no true zero."},

// sources
{t:"Sources & samples",q:"A study observing smokers and non-smokers without intervening collects:",c:["Experimental data","Observational data","Time series data","Census data"],a:[1],w:"No attempt to control or influence variables — it is observed as it naturally occurs."},
{t:"Sources & samples",q:"The 1954 polio vaccine trial involving 2 million US children is an example of:",c:["Observational data","Experimental data","A census","Subjective probability"],a:[1],w:"A treatment was administered and its effect measured."},
{t:"Sources & samples",q:"A subset of a population used to make inferences about it is called a:",c:["Census","Sample","Parameter","Statistic"],a:[1],w:"A census collects from the entire population; a sample is a subset."},
{t:"Sources & samples",q:"A numerical measure computed from a sample is a:",c:["Population parameter","Sample statistic","Census value","Point estimate of the sample"],a:[1],w:"His analogy: tasting a few grains to judge whether the whole pot of rice is cooked."},
{t:"Sources & samples",q:"Which analytics determines the optimal course of action?",c:["Descriptive","Predictive","Prescriptive","Diagnostic"],a:[2],w:"Descriptive describes the past, predictive forecasts, prescriptive recommends."},
{t:"Sources & samples",q:"Big data is characterised by which three properties?",c:["Volume, value, veracity","Volume, velocity, variety","Variety, veracity, validity","Volume, validity, velocity"],a:[1],w:"Volume, velocity and variety, as taught."},

// summarising
{t:"Summarising",q:"In a frequency distribution, categories must be:",c:["Equal in size","Mutually exclusive and non-overlapping","Sorted alphabetically","At least five in number"],a:[1],w:"A single observation cannot belong to two categories at once."},
{t:"Summarising",q:"All relative frequencies in a distribution sum to:",c:["100","1.0","The sample size","The number of categories"],a:[1],w:"Relative frequencies sum to 1.0; percentage frequencies sum to 100%."},
{t:"Summarising",q:"The angle of a pie chart sector is calculated as:",c:["Relative frequency × 180","Relative frequency × 360","Frequency × 360","Percentage frequency × 360"],a:[1],w:"Relative frequency × 360 degrees. Pie charts work best with fewer than 5–6 categories."},
{t:"Summarising",q:"How does a histogram differ from a bar chart?",c:["Histograms are for categorical data","Histograms have no gaps between adjacent classes, because the data is continuous","Histograms cannot show frequency","Bar charts cannot be used for comparison"],a:[1],w:"Continuous data means there is no natural separation between adjacent classes."},
{t:"Summarising",q:"In a cumulative frequency distribution, the last class always has a cumulative frequency equal to:",c:["The largest single frequency","The total number of observations","100","The number of classes"],a:[1],w:"And the cumulative percentage frequency always reaches 100%."},
{t:"Summarising",q:"Exam scores where most students cluster high with a few very low scores produce a distribution that is:",c:["Symmetric","Left-skewed","Right-skewed","Uniform"],a:[1],w:"The longer tail is on the left. Housing prices are his right-skewed example."},
{t:"Summarising",q:"A conclusion from aggregate data that reverses when the data is split into subgroups illustrates:",c:["Sampling error","Simpson's paradox","Skewness","Chebyshev's theorem"],a:[1],w:"Which is why cross-tabulations must be read carefully at the right level of aggregation."},
{t:"Summarising",q:"In a scatter diagram showing a negative relationship, the trend line slope is:",c:["Positive","Negative","Zero","Undefined"],a:[1],w:"As x rises, y falls — the demand curve is his example."},
{t:"Summarising",q:"Which displays are appropriate for CATEGORICAL data? (Select all)",multi:true,c:["Bar chart","Pie chart","Cross-tabulation","Histogram"],a:[0,1,2],w:"Histograms are for quantitative data."},

// location
{t:"Location",q:"Which measure of location is most affected by extreme values?",c:["Median","Mode","Mean","Q1"],a:[2],w:"Which is exactly why the median is preferred for skewed data such as incomes and placements."},
{t:"Location",q:"For an even number of observations, the median is:",c:["The lower of the two middle values","The average of the two middle values","The most frequent value","Undefined"],a:[1],w:"For an odd count it is simply the middle value."},
{t:"Location",q:"Which measure is often the only one available for categorical data?",c:["Mean","Median","Mode","Geometric mean"],a:[2],w:"You cannot average a category, but you can count which occurs most often."},
{t:"Location",q:"Which measure should be used for the average rate of return over several years?",c:["Arithmetic mean","Weighted mean","Geometric mean","Median"],a:[2],w:"Returns compound, so each period depends on the last. The arithmetic mean misleads."},
{t:"Location",q:"The weighted mean formula is:",c:["Σx / n","Σ(w·x) / Σw","(x₁ × x₂ × … × xₙ)^(1/n)","Σ(x − x̄)² / n"],a:[1],w:"Used for GPA with credit hours, or wages with different hours worked."},
{t:"Location",q:"The location of the p-th percentile is found using:",c:["(p/100) × n","(p/100) × (n + 1)","p × n / 2","(n + 1) / p"],a:[1],w:"For 70 rents, the 80th percentile sits at (80/100) × 71 = 56.8."},
{t:"Location",q:"The second quartile (Q2) is the same as:",c:["The mean","The median","The mode","The IQR"],a:[1],w:"Q2 is the 50th percentile — half the data below, half above."},
{t:"Location",q:"A dataset has a mean of 590.8 and a median of 575. This suggests:",c:["The data is symmetric","Extreme high values are pulling the mean up","The mode equals the median","There are no outliers"],a:[1],w:"The mean chases the tail, which is why the median is the stabler figure here."},

// spread
{t:"Spread & shape",q:"The interquartile range is calculated as:",c:["Maximum − minimum","Q3 − Q1","Q3 + Q1","Q2 − Q1"],a:[1],w:"The middle 50%, which is why extreme values do not distort it."},
{t:"Spread & shape",q:"Sample variance is calculated by dividing the sum of squared deviations by:",c:["n","n − 1","n + 1","n²"],a:[1],w:"Population variance divides by n. This is the classic slip."},
{t:"Spread & shape",q:"Why are deviations squared when computing variance?",c:["To make the number larger","To stop positive and negative deviations cancelling each other out","To convert to the original units","To remove outliers"],a:[1],w:"Without squaring, the deviations sum to zero however variable the data is."},
{t:"Spread & shape",q:"Standard deviation is preferred over variance for interpretation because:",c:["It is always smaller","It is expressed in the same units as the original data","It ignores outliers","It is easier to compute"],a:[1],w:"Variance is in squared units, which have no intuitive meaning."},
{t:"Spread & shape",q:"Two suppliers both average 5 days. Supplier A has σ = 5, Supplier B has σ = 1. Which is more reliable, and what are the CVs?",c:["A; CV 0.2 and 1.0","B; CV 1.0 for A and 0.2 for B","A; both CVs are equal","B; CV 5.0 for A and 1.0 for B"],a:[1],w:"CV = s/x̄. Lower CV means more consistency, so B."},
{t:"Spread & shape",q:"In a negatively (left) skewed distribution:",c:["Mean > median","Median > mean","Mean = median","Mode > mean > median"],a:[1],w:"The tail extends left and drags the mean below the median."},
{t:"Spread & shape",q:"The z-score formula is:",c:["(x − x̄) / s","(x̄ − x) / n","x / s","(x − s) / x̄"],a:[0],w:"It measures how many standard deviations a value sits from the mean."},
{t:"Spread & shape",q:"A rent of 500 where mean = 600 and SD = 100, and a rent of 70 where mean = 50 and SD = 50, both give z = −1. This shows that z-scores:",c:["Are always negative below the mean","Provide a common metric for comparing values from different distributions","Eliminate outliers","Convert data to a ratio scale"],a:[1],w:"Standardisation is what makes different distributions comparable."},
{t:"Spread & shape",q:"Chebyshev's theorem states that at least what proportion of values lie within 2 standard deviations?",c:["68%","75%","89%","95%"],a:[1],w:"1 − 1/z² = 1 − 1/4 = 75%. At z = 3 it gives at least 89%, at z = 4 at least 94%."},
{t:"Spread & shape",q:"The key difference between Chebyshev's theorem and the empirical rule is that:",c:["Chebyshev is more precise","Chebyshev applies to any distribution; the empirical rule requires approximately bell-shaped data","The empirical rule works only for small samples","They give identical percentages"],a:[1],w:"Chebyshev is weaker but universal; the empirical rule is sharper but needs normality."},
{t:"Spread & shape",q:"Under the empirical rule, approximately what percentage lies within ±1σ?",c:["50%","68%","95%","99.7%"],a:[1],w:"68% at ±1σ, 95% at ±2σ, 99.7% at ±3σ."},
{t:"Spread & shape",q:"Using the z-score method, a value is flagged as an outlier when:",c:["|z| > 1","|z| > 2","|z| > 3","|z| > 1.5"],a:[2],w:"More than three standard deviations from the mean. Don't confuse this with the 1.5 × IQR box plot rule."},
{t:"Spread & shape",q:"In a box plot, the outlier limits are:",c:["Q1 − 3·IQR and Q3 + 3·IQR","Q1 − 1.5·IQR and Q3 + 1.5·IQR","mean ± 3σ","Q1 − IQR and Q3 + IQR"],a:[1],w:"1.5 for the box plot rule, 3 for the z-score rule."},
{t:"Spread & shape",q:"With Q1 = 545 and Q3 = 625, what are the box plot outlier limits?",c:["465 and 705","425 and 745","505 and 665","385 and 785"],a:[1],w:"IQR = 80. Lower = 545 − 120 = 425; upper = 625 + 120 = 745."},
{t:"Spread & shape",q:"Which five values make up the five-number summary?",c:["Mean, median, mode, min, max","Minimum, Q1, median, Q3, maximum","Mean, SD, variance, min, max","Q1, Q2, Q3, IQR, range"],a:[1],w:"And the box plot is drawn from exactly these five."},
{t:"Spread & shape",q:"Which are recognised causes of outliers? (Select all)",multi:true,c:["Incorrectly recorded data","Data incorrectly included in the set","Genuinely exceptional but correct values","Using the wrong measure of central tendency"],a:[0,1,2],w:"An outlier is a property of the data, not of the statistic you choose."},

// association
{t:"Association",q:"The correlation coefficient always lies between:",c:["0 and 1","−1 and +1","−∞ and +∞","0 and 100"],a:[1],w:"Covariance, by contrast, is unbounded and scale-dependent."},
{t:"Association",q:"The correlation coefficient is calculated as:",c:["Covariance × sx × sy","Covariance / (sx × sy)","(sx × sy) / covariance","Covariance / n"],a:[1],w:"Standardising covariance by the two standard deviations is what bounds it to −1 to +1."},
{t:"Association",q:"A correlation of −0.96 between driving distance and golf score means:",c:["Driving distance causes lower scores","There is a strong negative linear association: longer drives go with lower scores","There is no relationship","The variables are independent"],a:[1],w:"Correlation is association, not causation — he stressed this."},
{t:"Association",q:"Why is covariance harder to interpret than correlation?",c:["It can be negative","It is scale-dependent and unbounded","It requires a larger sample","It only works for categorical data"],a:[1],w:"Its magnitude depends on the units of the variables, so there is no benchmark."},

// probability foundations
{t:"Probability I",q:"Probability is a numerical measure ranging from:",c:["−1 to +1","0 to 1","0 to 100","1 to 10"],a:[1],w:"0 means impossible, 1 means certain."},
{t:"Probability I",q:"The set of all possible experimental outcomes is the:",c:["Event","Sample point","Sample space","Population"],a:[2],w:"A sample point is one outcome; an event is a collection of sample points."},
{t:"Probability I",q:"An experiment has 4 outcomes at stage one and 2 at stage two. Total outcomes:",c:["6","8","4","2"],a:[1],w:"The fundamental counting rule multiplies: 4 × 2 = 8."},
{t:"Probability I",q:"When the ORDER of selection matters, you use:",c:["Combinations","Permutations","The classical method","Bayes' theorem"],a:[1],w:"Permutations: N!/(N−n)!. Combinations, where order is irrelevant, use N!/[n!(N−n)!]."},
{t:"Probability I",q:"Rental records show 2 scooters were rented on 18 of 40 days. Assigning P = 0.45 uses which method?",c:["Classical","Relative frequency","Subjective","Bayesian"],a:[1],w:"Based on historical data: frequency ÷ total observations."},
{t:"Probability I",q:"Assigning probability 1/6 to each face of an unbiased die uses:",c:["The classical method","The relative frequency method","The subjective method","Bayes' theorem"],a:[0],w:"It assumes all outcomes are equally likely."},
{t:"Probability I",q:"When no historical data exists and experimentation is impractical, you use:",c:["The classical method","The relative frequency method","The subjective method","Chebyshev's theorem"],a:[2],w:"Judgement, experience and expert knowledge — common for novel situations like a new product launch."},

// probability laws
{t:"Probability II",q:"The addition law is:",c:["P(A∪B) = P(A) + P(B)","P(A∪B) = P(A) + P(B) − P(A∩B)","P(A∪B) = P(A) × P(B)","P(A∪B) = P(A) − P(B)"],a:[1],w:"The intersection is subtracted because it is counted in both P(A) and P(B)."},
{t:"Probability II",q:"For mutually exclusive events:",c:["P(A∩B) = 0","P(A∩B) = P(A)·P(B)","P(A|B) = P(A)","P(A∪B) = 0"],a:[0],w:"No sample points in common, so the addition law simplifies to P(A) + P(B)."},
{t:"Probability II",q:"The conditional probability formula is:",c:["P(A|B) = P(A) × P(B)","P(A|B) = P(A∩B) / P(B)","P(A|B) = P(A∪B) / P(B)","P(A|B) = P(B) / P(A∩B)"],a:[1],w:"Once B has occurred the sample space reduces to B, and you ask how much of that is also A."},
{t:"Probability II",q:"The multiplication law states:",c:["P(A∩B) = P(A) + P(B|A)","P(A∩B) = P(A) × P(B|A)","P(A∩B) = P(A) / P(B)","P(A∩B) = P(A|B) × P(B|A)"],a:[1],w:"It follows from rearranging the conditional probability formula."},
{t:"Probability II",q:"The test for independence is:",c:["P(A∩B) = 0","P(A∩B) = P(A) × P(B)","P(A∪B) = P(A) + P(B)","P(A|B) = 0"],a:[1],w:"If the equation holds the events are independent. His case failed it: 0.36 versus 0.336."},
{t:"Probability II",q:"Two mutually exclusive events with non-zero probabilities are:",c:["Always independent","Always dependent","Sometimes independent","Impossible"],a:[1],w:"If one occurring guarantees the other did not, they are maximally informative about each other — the opposite of independence."},
{t:"Probability II",q:"Rolling a die, if event A is 'divisible by 3', the complement A′ is:",c:["{3, 6}","{1, 2, 4, 5}","{1, 2, 3, 4, 5, 6}","{2, 4, 6}"],a:[1],w:"Everything in the sample space that is not in A. The complement never extends beyond the sample space."},
{t:"Probability II",q:"Probabilities revised after new information arrives are called:",c:["Prior probabilities","Posterior probabilities","Joint probabilities","Marginal probabilities"],a:[1],w:"Bayes' theorem combines priors with new evidence to produce posteriors."},
{t:"Probability II",q:"In the zoning case, priors are 0.70 approval and 0.30 rejection; a negative recommendation has P = 0.20 given approval and 0.90 given rejection. The posterior probability of approval is:",c:["0.14","0.27","0.34","0.70"],a:[2],w:"0.14 / (0.14 + 0.27) = 0.34. The owner revises 70% down to 34%."},
{t:"Probability II",q:"Bayes' theorem requires the events Aᵢ to be:",c:["Independent","Mutually exclusive, and together the whole sample space","Equally likely","Continuous"],a:[1],w:"Mutually exclusive and collectively exhaustive."},

// distributions (flagged)
{t:"Distributions",q:"Which is a discrete random variable?",c:["The distance from home to the store","The number of TVs sold in a day","The temperature at noon","A person's height"],a:[1],w:"You cannot sell 1.5 TVs. The others can take any value in an interval."},
{t:"Distributions",q:"For any discrete probability distribution:",c:["Σf(x) = 0","Σf(x) = 1","Σf(x) = n","f(x) can be negative"],a:[1],w:"Every probability is at least 0 and they sum to 1."},
{t:"Distributions",q:"Expected value is calculated as:",c:["Σx / n","Σ[x · f(x)]","Σ[(x − μ)² · f(x)]","√variance"],a:[1],w:"A weighted average with probabilities as the weights. Note it need not be a value the variable can actually take."},
{t:"Distributions",q:"Which condition is NOT required for a binomial distribution?",c:["A sequence of n identical trials","Two possible outcomes per trial","Constant probability of success","The mean must equal the variance"],a:[3],w:"Mean equals variance is the defining property of the Poisson, not the binomial. The fourth binomial condition is independent trials."},
{t:"Distributions",q:"For a binomial distribution, the mean and variance are:",c:["μ and μ","np and np(1−p)","np(1−p) and np","n and p"],a:[1],w:"Poisson is the one where both equal μ."},
{t:"Distributions",q:"The assumption that the probability of success stays constant across trials is called:",c:["The independence assumption","The stationarity assumption","The uniformity assumption","The normality assumption"],a:[1],w:"It only holds when the underlying system is stable."},
{t:"Distributions",q:"A Poisson distribution requires how many conditions, and how many parameters?",c:["Four conditions, two parameters","Two conditions, one parameter","Three conditions, two parameters","Two conditions, two parameters"],a:[1],w:"Two conditions (equal probability over equal intervals, independent occurrences) and one parameter, μ."},
{t:"Distributions",q:"In a normal distribution:",c:["The mean is greater than the median","The mean, median and mode all coincide","The mode is undefined","The curve is right-skewed"],a:[1],w:"Perfectly symmetric about the centre, with total area under the curve equal to 1."},
{t:"Distributions",q:"The standard normal distribution has:",c:["μ = 1 and σ = 0","μ = 0 and σ = 1","μ = 0 and σ = 0","μ and σ equal to the data's"],a:[1],w:"Reached by standardising with z = (x − μ)/σ, so pre-computed tables can be used."},
{t:"Distributions",q:"For a continuous uniform distribution on [A, B], the expected value is:",c:["(B − A)/2","(A + B)/2","1/(B − A)","(B − A)²/12"],a:[1],w:"The midpoint. The variance is (B − A)²/12 and the density is 1/(B − A)."},
{t:"Distributions",q:"Demand is normal with μ = 15 and σ = 6, and the reorder point is 20. The z-value is:",c:["0.83","1.20","5.00","0.30"],a:[0],w:"(20 − 15)/6 = 0.83. P(Z ≤ 0.83) = 0.7967, so the stockout risk is 20.33%."},
{t:"Distributions",q:"For a continuous random variable, probability is found by:",c:["Reading the value of f(x) at a point","Calculating the area under f(x) over an interval","Dividing favourable by total outcomes","Multiplying f(x) by n"],a:[1],w:"The probability at any single point is zero — you need an interval."}
];

/* ===================================================================
   Assemble the course object.
   =================================================================== */
window.COURSE = {
  slug: "statistics-for-managers",
  scopeShort: "Topics 1–7",
  eyebrow: "IIT Jodhpur · B.S. Management & Technology · Semester 1",
  heading: "Statistics for Managers<br>Quiz 1 Revision",
  sub: "Data and descriptive statistics through to Bayes — compressed for a 40-question paper with negative marking. Probability distributions are included but clearly marked as disputed scope.",

  briefTag: "from the official LMS announcement",
  briefLede: "Figures below are from the official Quiz 1 announcement. The scope, however, is the one genuine disagreement across your six courses — read the syllabus box carefully.",
  briefHtml: `
    <div class="grid2">
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">Confirmed on the official announcement</h4>
        <div class="scroller"><table><tbody>
          <tr><td><strong>Date</strong></td><td>Sunday 4 October</td></tr>
          <tr><td><strong>Window</strong></td><td>12:15–12:35 PM IST · join from <strong>12:00 PM</strong></td></tr>
          <tr><td><strong>Questions</strong></td><td><strong>40</strong>, for <strong>40 marks</strong></td></tr>
          <tr><td><strong>Type</strong></td><td>MCQ — he said &ldquo;objective only, no subjective questions&rdquo;</td></tr>
          <tr><td><strong>Weight</strong></td><td>20% · best 2 of 3 · 40% of the course total</td></tr>
        </tbody></table></div>
        <div class="warnbox" style="margin-top:12px;border-left-color:var(--bad);background:var(--bad-soft)">
          <b>Negative marking.</b> +1 correct, <strong>−0.25 for a wrong answer</strong>, 0 if left blank.
        </div>
        <div class="warnbox" style="margin-top:10px;border-left-color:var(--good);background:var(--good-soft)">
          <b>A calculator is allowed.</b> He confirmed this in Live Lecture 3. It is the only one of your six papers where he said so — bring one.
        </div>
      </div>
      <div class="card">
        <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">Scope — the two sources disagree</h4>
        <p style="font-size:14.5px">This is the one course where the official document and the lecturer do not line up, and the gap is large.</p>
        <div class="scroller" style="margin-top:9px"><table><thead><tr><th>Source</th><th>Says the scope is</th></tr></thead><tbody>
          <tr><td><strong>Official syllabus document</strong><br><span style="color:var(--ink-3);font-size:13px">attached to the announcement</span></td><td><strong>Topics 1–7 only:</strong> Data and Statistics 1–2, Descriptive Statistics 1–3, Introduction to Probability 1–2. It stops there.</td></tr>
          <tr><td><strong>Dr. Srivastav, Live Lecture 3</strong></td><td>&ldquo;<strong>till chapter 6</strong> or continuous probability distribution&rdquo; — which would add discrete and continuous distributions.</td></tr>
        </tbody></table></div>
        <div class="warnbox" style="margin-top:12px">
          <b>How this sheet handles it.</b> Topics 1–7 are covered in full — treat them as certain. The distributions section is included and <strong>labelled &ldquo;NOT on the official list&rdquo;</strong>. If you are short of time, do topics 1–7 properly first, then skim distributions for the headline formulas.
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:14px;border-left:3px solid var(--clay)">
      <h4 style="font-family:var(--display);font-size:16px;margin-bottom:9px">30 seconds a question, with formulas to recall</h4>
      <p style="font-size:14.5px;color:var(--ink-2)">40 questions in 20 minutes. This is the most formula-dense of your six papers, so recall speed matters more than calculation speed — even with a calculator.</p>
      <div class="scroller" style="margin-top:11px"><table><thead><tr><th>Situation</th><th>Expected value</th><th>Do</th></tr></thead><tbody>
        <tr><td>You know it</td><td><strong>+1.00</strong></td><td>Answer</td></tr>
        <tr><td>Rule out two of four</td><td><strong>+0.38</strong></td><td>Answer</td></tr>
        <tr><td>Rule out one of four</td><td><strong>+0.17</strong></td><td>Answer</td></tr>
        <tr><td>Blind guess</td><td><strong>+0.06</strong></td><td>Answer, but it gains almost nothing</td></tr>
      </tbody></table></div>
      <ul style="margin:11px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7">
        <li><strong>The formulas are the paper.</strong> IQR, sample variance with n−1, CV, z, Chebyshev's 1−1/z&sup2;, the addition law, conditional probability, Bayes. Know them cold.</li>
        <li><strong>Watch the two outlier rules.</strong> |z| &gt; 3 and Q1 − 1.5·IQR. Swapping the 3 and the 1.5 is the single easiest mark to drop.</li>
        <li><strong>Scales of measurement come up constantly.</strong> Roll numbers are nominal; Celsius is interval.</li>
      </ul>
    </div>`,

  mapLede: "Thirteen lectures from Dr. Deepak Srivastav. Topics 1–7 are the official scope; lectures #10–#12 are the disputed tail.",

  drillLede: "Questions written from the lectures and transcripts. There is no official practice set. Questions tagged <em>Distributions</em> cover the disputed material — filter them out if you want to drill only the certain scope.",

  footer: "Compiled 26 September 2026 from the IITJ LMS: lecture AI-summaries and full transcripts for Statistics for Managers. Timings, question count, marking scheme and the official topic list from the LMS quiz announcement and its attached syllabus document; the wider scope claim is quoted from the Live Lecture 3 recording of 19 September. Topic weightings are an estimate, not an official mark scheme. <strong>This is a student-made study aid, not official IIT Jodhpur or Masai School course material</strong> — always check the LMS for the authoritative syllabus and quiz details.",

  lectures: LECTURES,
  weights:  WEIGHTS,
  traps:    TRAPS,
  questions: Q,
  sections: SECTION_META.map(m => Object.assign({}, m, {topics: SECTIONS["s-" + m.id]}))
};
