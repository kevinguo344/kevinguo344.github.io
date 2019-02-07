(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){e.exports=n(71)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,,function(e,t,n){e.exports='<h3 id="roma-interactive-fabrication-with-a-robotic-3d-printer">RoMA: Interactive Fabrication with a Robotic 3D Printer</h3>\n<h6 id="january-2017-september-2017">January 2017 - September 2017</h6>\n<span style="display:block;text-align:center">\n<img src="'+n(34)+'" alt="That\'s me in that pic" width="75%" style="margin: 0 auto"/>\n*That\'s me in the pic!*\n</span>\n\n<h5 id="authors-huaishu-peng-jimmy-briggs-cheng-yao-wang-kevin-guo-joseph-kider-stefanie-mueller-patrick-baudisch-fran-ois-guimbreti-re">Authors: Huaishu Peng, Jimmy Briggs, Cheng-Yao Wang, <strong>Kevin Guo</strong>, Joseph Kider, Stefanie Mueller, Patrick Baudisch, Fran\xe7ois Guimbreti\xe8re</h5>\n<h5 id="2018-conference-on-human-factors-in-computing-systems-chi-2018-">2018 Conference on Human Factors in Computing Systems <strong>(CHI 2018)</strong></h5>\n<p><a href="http://www.huaishu.me/projects/roma.pdf">Read the Paper here</a></p>\n<span style="display:block;text-align:center">\n<iframe width="720" height="405" src="https://www.youtube.com/embed/K_wWuYD1Fkg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</span>\n\n<h3 id="abstract">Abstract</h3>\n<p>We present the Robotic Modeling Assistant (RoMA), an interactive fabrication system providing a fast, precise, hands-on and in-situ modeling experience. As a designer creates a new model using RoMA AR CAD editor, features are constructed concurrently by a 3D printing robotic arm sharing the same design volume. The partially printed physical model then serves as a tangible reference for the designer as she adds new elements to her design. RoMA\'s proxemics-inspired handshake mechanism between the designer and the 3D printing robotic arm allows the designer to quickly interrupt printing to access a printed area or to indicate that the robot can take full control of the model to finish printing. RoMA lets users integrate real-world constraints into a design rapidly, allowing them to create well-proportioned tangible artifacts or to extend existing objects. We conclude by presenting the strengths and limitations of our current design.</p>\n<h3 id="ui-ux">UI/UX</h3>\n<p>My main role within the project was designing and implementing the interface for the augmented reality CAD editor. The main UI element in the program was the marking menu, which allowed users to select a drawing operation from the controller. Clicking the joystick would open the menu and the user would be able to select a menu item simply by moving the joystick to the sector of the menu and clicking or holding the joystick in that position.</p>\n<p>The process of making an object in almost every CAD program starts off very similar to the screenshot below...</p>\n<span style="display:block;text-align:center">\n<img src="'+n(35)+'" alt="Solidworks" width="75%" style="margin: 0 auto"/>\n*What a 2D sketch looks like on Solidworks, an existing CAD application*\n</span>\n\n<p>...as a flat 2D drawing. While this is great for precise shapes on blank backgrounds with experienced users on a flat screen, it wouldn\'t make much sense in an AR environment with users who weren\'t entirely familiar with modeling software. </p>\n<p>I proposed a hybrid system, in which the user would point and &quot;project&quot; a 2D element such as a curve or a line or a point onto a selected plane. Below is the 4 page storyboard I made of a user creating an airplane using the hybrid system in RoMA.</p>\n<span style="display:block;text-align:center">\n<img src="'+n(36)+'" alt="workflow" width="85%" style="margin: 0 auto"/>\n*My initial idea for a workflow, which borrowed heavily from the 2D sketching framework I knew from being a Solidworks user*\n</span>\n\n<p>While it could work, after some discussion with the rest of the team, I realized that such a system wouldn\'t take full advantage of working in AR. We came to a compromise, drawing elements free floating in 3D space with the exception of certain actions that required elements to be defined by a plane or a surface (such as rotation or lofting).</p>\n<p>I proposed 3 menu interaction schemes and made interactive Javascript prototypes to demonstrate them in Framer (all three prototypes are below).</p>\n<div class="row">\n    <div class="four columns" style="display:block;text-align:center">\n        <h4>Stack Menu</h4>\n        <img src="'+n(37)+'" alt="AR Interactions" width="50%" style="margin: 0 auto"><img/>\n    </div>\n    <div class="four columns" style="display:block;text-align:center">\n        <h4>Tree Menu</h4>\n        <img src="'+n(38)+'" alt="AR Interactions" width="50%" style="margin: 0 auto"><img/>\n    </div>\n    <div class="four columns" style="display:block;text-align:center">\n        <h4>Ring Menu</h4>\n        <img src="'+n(39)+'" alt="AR Interactions" width="50%" style="margin: 0 auto"><img/>\n    </div>\n</div>\n<div class="row">\n    <div class="four columns" style="display:block;text-align:center; height:350px; overflow:hidden; margin-bottom: 2em">\n        <iframe class="framer" src="https://framer.cloud/ilfyY/" width="600" height="900" style="display:block;transform:scale(0.5);transform-origin: top left; border:none"></iframe>\n    </div>\n    <div class="four columns" style="display:block;text-align:center; height:350px; overflow:hidden; margin-bottom: 2em">\n        <iframe class="framer" src="https://framer.cloud/agbTc/" width="600" height="900" style="display:block;transform:scale(0.5);transform-origin: top left; border:none;"></iframe>\n    </div>\n    <div class="four columns" style="display:block;text-align:center; height:350px; overflow:hidden; margin-bottom: 2em">\n        <iframe class="framer" src="https://framer.cloud/HcxQi/" width="600" height="900" style="display:block;transform:scale(0.5);transform-origin: top left;border:none"></iframe>\n    </div>\n</div>\n\n<p>The stack menu was chosen as the menu because it was the easiest to implement, didn\'t clutter up too much of the user\'s field of view, and conformed more directly to the user\'s actions. However, I realized pretty early on that the stack menu\'s design made it hard to remember what action was chosen and what you had to do to complete the task. To aid with that, I used the blank space in the middle of the menu as a reminder of why an item or action needed to be selected (shown below).</p>\n<span style="display:block;text-align:center">\n<img src="'+n(40)+'" alt="Label" width="50%" style="margin: 0 auto"/>\n*The Logical Structure of the Marking Menu*\n</span>\n\n<p>I had to make one for every action and as you can see below...</p>\n<span style="display:block;text-align:center">\n<img src="'+n(41)+'" alt="Label" width="50%" style="margin: 0 auto"/>\n*These were about as annoying to make as it seems it would*\n</span>\n\n<p>...there were a lot of them. Along with the menus, I created a whole new set of icons for RoMA.</p>\n<span style="display:block;text-align:center">\n<img src="'+n(42)+'" alt="Label" width="75%" style="margin: 0 auto"/>\n*An entirely new set of icons for RoMA*\n</span>\n\n<p>After wrangling with a custom C# engine specifically for RoMA <a href="http://jimmybriggs.net/">(courtesy from the talented Jimmy Briggs)</a>, my marking menu eventually was integrated with the system and was demoed for interested researchers and designers alike.</p>\n<span style="display:block;text-align:center">\n<img src="'+n(43)+'" alt="AR Interactions" width="85%" style="margin: 0 auto"/>\n*Marking menu in action in the AR CAD editor*\n</span>\n\n<span style="display:block;text-align:center">\n<img src="'+n(44)+'" alt="The Team" width="85%" style="margin: 0 auto"/>\n*(From left to right) Huaishu Peng, Eric (Cheng-Yao) Wang, Me (Kevin Guo), & Jimmy Briggs. The best team I could ask for.*\n</span>\n'},function(e,t,n){e.exports=n.p+"static/media/designscene.d735447f.JPG"},function(e,t,n){e.exports=n.p+"static/media/screenshot.7b0274c2.png"},function(e,t,n){e.exports=n.p+"static/media/workflow.92ac1883.png"},function(e,t,n){e.exports=n.p+"static/media/stack.0c7c5e76.svg"},function(e,t,n){e.exports=n.p+"static/media/tree.1b3953e1.svg"},function(e,t,n){e.exports=n.p+"static/media/ring.23743f56.svg"},function(e,t,n){e.exports=n.p+"static/media/roma_labels.258a638c.png"},function(e,t,n){e.exports=n.p+"static/media/entire_set.207bfff3.png"},function(e,t,n){e.exports=n.p+"static/media/icons.3993ecea.svg"},function(e,t,n){e.exports=n.p+"static/media/ar_interaction.9b8cb16c.jpg"},function(e,t,n){e.exports=n.p+"static/media/team.034a7500.jpg"},function(e,t,n){e.exports='<h3 id="crochetmatic-volumetric-3d-knitting">CrochetMatic: Volumetric 3D Knitting</h3>\n<h6 id="may-2017-may-2018">May 2017 - May 2018</h6>\n<h5 id="people-kevin-guo-olav-imsdahl-fran-ois-guimbreti-re-scott-hudson">People: <strong>Kevin Guo</strong>, Olav Imsdahl, Fran\xe7ois Guimbreti\xe8re, Scott Hudson</h5>\n<div class="row">\n    <div class="six columns" style="display:block;text-align:center">\n        <img src="'+n(46)+'" alt="Crochetmatic" width="100%" style="margin: 0 auto"/>\n    </div>\n    <div class="six columns" style="display:block;text-align:center">\n        <img src="'+n(47)+'" alt="That\'s me in that pic" width="100%" style="margin: 0 auto"/>\n    </div>\n</div>\n\n<p>I worked on CrochetMatic during my time at <a href="https://www.cs.cornell.edu/~francois/">Prof. Fran\xe7ois Guimbreti\xe8re</a>\'s Design Lab. CrochetMatic was easily one of the most time-consuming and difficult projects. While I didn\'t reach the ultimate goal, I believe that I learned an immense amount from my struggles with this project.</p>\n<h3 id="the-start">The Start</h3>\n<p>The initial idea was to build a machine that could build knitted objects the same way 3D printers build their prints: additive and layer-by-layer. But while plastic has relatively predictable properties and can be put through an extruder, a length of yarn\'s properties can change from bundle to bundle. Also, it can get caught on small mechanisms which makes it hard to build around. Furthermore, the idea of knitting entire 3D volumes (both the exterior and interior), whether by hand or machine had never really been tried before. The closest antecedent to the project was <a href="https://www.disneyresearch.com/publication/machine-knitting-compiler/">a 3D knitting compiler</a> from Carnegie Mellon University but even that knitting compiler only created knitted tubes that had to be filled afterwards.</p>\n<p>At the suggestion of <a href="http://www.cs.cornell.edu/~srm/">Prof. Steve Marschner</a>, the preeminent computer graphics professor at Cornell (he won an Oscar for his CG research), the individual knits were throught of as a series of voxels, or volumes in a 3D grid. This was coming off of his previous work simulating knit clothes <a href="http://www.cs.cornell.edu/projects/YarnCloth/">(more details here.)</a></p>\n<h3 id="simulations">Simulations</h3>\n<p>After spending the first two weeks of summer learning how to knit, I learned that the knits followed a regular pattern and that the best way to make a &quot;layer&quot; of knits was to spiral outwards in with a series of concentric layers. Each individual layer would be independent of the ones inside and outside of it except for &quot;linking&quot; knits that connected that layer to the one outside of it. I ended up building computer models in Fusion360 of each type of knit that would conform to the voxels.</p>\n<div class="row">\n    <div class="six columns" style="display:block;text-align:center">\n        <span style="display:block;text-align:center">\n        <img src="'+n(48)+'" alt="Basic" width="75%" style="margin: 0 auto"/>\n        *Initial observation sketch of a unit voxel*\n        </span>\n        <span style="display:block;text-align:center">\n        <img src="'+n(49)+'" alt="Basic" width="75%" style="margin: 0 auto"/>\n        *Final modeled basic knit voxel*\n        </span>\n    </div>\n    <div class="six columns" style="display:block;text-align:center">\n        <span style="display:block;text-align:center">\n        <img src="'+n(50)+'" alt="Basic" width="75%" style="margin: 0 auto"/>\n        *Initial observation sketch of a junction voxel*\n        </span>\n        <span style="display:block;text-align:center">\n        <img src="'+n(51)+'" alt="Junction" width="75%" style="margin: 0 auto"/>\n        *Final modeled junction knit voxels*\n        </span>\n    </div>\n</div>\n\n<p>Each knit followed a path of points, which I was able to export and joint together to form a single &quot;strand&quot; of points. This strand was inputted into a modified version of a <a href="https://www.cs.cornell.edu/projects/rodsound/">C++ rod simulator</a> developed by one of Prof. Marschner\'s PhDs <a href="https://www.cs.cornell.edu/~ers/">Eston</a>. Each simulation, even though only one second long, required hours of computation, a couple took over 24 hours. But in the end, we got the results, which seemed to match the real life knits I made.</p>\n<div class="row">\n    <div class="four columns" style="display:block;text-align:center">\n        <span style="display:block;text-align:center">\n        <img src="'+n(52)+'" alt="single" width="100%" style="margin: 0 auto"/>\n        *Simulating a single layer*\n        </span>\n    </div>\n    <div class="four columns" style="display:block;text-align:center">\n        <span style="display:block;text-align:center">\n        <img src="'+n(53)+'" alt="multiple" width="100%" style="margin: 0 auto"/>\n        *Simulating  multiple layers*\n        </span>\n    </div>\n    <div class="four columns" style="display:block;text-align:center">\n        <span style="display:block;text-align:center">\n        <img src="'+n(54)+'" alt="Label" width="100%" style="margin: 0 auto"/>\n        *Knitted "Cube" I made*\n        </span>\n    </div>\n</div>\n\n<h3 id="building-the-machine">Building the Machine</h3>\n<p>With an idea of what the final knits would look like, it was onto building the machine itself, which was made up of two separate parts:</p>\n<ol>\n<li>An XY Bed powered by an Arduino Mega and RAMPS board</li>\n<li>An array of needles powered by a Teensy 3.5 board</li>\n</ol>\n<span style="display:block;text-align:center">\n<img src="'+n(55)+'" alt="Label" width="75%" style="margin: 0 auto"/>\n</span>\n\n<h3 id="xy-bed">XY Bed</h3>\n<p>The XY bed was built and assembled by <a href="https://hcii.cmu.edu/people/scott-hudson">Prof. Scott Hudson</a> from Carnegie Mellon University. Based off a regular 3D printer bed, it\'s made up of a 80-20 frame driven by an Arduino Mega with a RAMPS board mounted on it. The Arduino Mega controlled most of the movements on the machine with a RAMPS 1.4 board. The RAMPS board was typically meant for building DIY 3D printers, but because of CrochetMatic didn\'t have a heating element, I had to put two resistors and a potentiometer (a dial) attached to where the heat sensors were supposed to be. This was to trick the board into thinking that there is a heating element on the machine (there isn\u2019t) so that it will use the extruder properly (how the latch servos and the yarn extruder are operated).</p>\n<h3 id="needle-array">Needle Array</h3>\n<p>3D knitting (or Volumetric knitting) was untried while I was working on the project, and the most daunting part was figuring out how to build the needles. The idea was to build an entire &quot;bed&quot; of needles, but what they would look like and how they would work was completely unknown. We couldn\'t copy them from existing knitting machine needles, which are meant solely for flat 2D planes, but we could use some of the basics of the designs to base how the needles would work. The most helpful was <a href="https://www.disneyresearch.com/publication/machine-knitting-compiler/">A Compiler for 3D Machine Knitting</a> made in Carnegie Mellon University, which described a way to make knitted 2D shells of 3D forms. The computer simulations provided created a starting point of understanding how the knits would interact with each other.</p>\n<span style="display:block;text-align:center">\n<img src="'+n(56)+'" alt="single" width="70%" style="margin: 0 auto"/>\n*Simulation of a single knit on an industry knitting machine from [A Compiler for 3D Machine Knitting](https://www.disneyresearch.com/publication/machine-knitting-compiler/)*\n</span>\n\n<p>The needles for our machine went through multiple iterations, with each version drastically different from the previous versions.</p>\n<div class="row">\n    <div class="four columns" style="display:block;text-align:center">\n        <span style="display:block;text-align:center">\n        <img src="'+n(57)+'" alt="Junction" width="50%" style="margin: 0 auto"/>\n        *Initial Needle Design*\n        </span>\n    </div>\n    <div class="four columns" style="display:block;text-align:center">\n        <span style="display:block;text-align:center">\n        <img src="'+n(58)+'" alt="Basic" width="40%" style="margin: 0 auto"/>\n        *Needle Design 7.0*\n        </span>\n    </div>\n    <div class="four columns" style="display:block;text-align:center">\n        <span style="display:block;text-align:center">\n        <img src="'+n(59)+'" alt="Basic" width="70%" style="margin: 0 auto"/>\n        *Final Version*\n        </span>\n    </div>\n</div>\n\n<p>The final needle version required minimal custom parts and instead relied upon off-the-shelf 0.125" and 0.25" diameter aluminum rods nested in one another. The hooks and pushers were 3D printed and manually fitted onto the pipes using force, glue, and rolled-up masking tape. The outer and inner components were each driven by rack-and-pinion mechanism with a motor module. Each module had an SG90 servo motor, which were not only small but also cheap, meaning that each needle could be driven by two motors.</p>\n<p>Each row would have in total 5 different needles, meaning that there would have to be a total of 10 servo motors driven. The end goal was to eventually have an entire series of these 5 needle rows to built.</p>\n<span style="display:block;text-align:center">\n<img src="'+n(60)+'" alt="Label" width="75%" style="margin: 0 auto"/>\n</span>\n\n<h3 id="making-the-knits">Making the Knits</h3>\n<p>With all these pieces, perhaps the most difficult part of the project was programming the movement of the machine. In most other knitting machines which make knits in two dimensions, this is simpler as the yarn is relatively restricted in where it can go and any knot is pulled either on the left or the right. However, in three dimensions where a single knot can have tension coming from six different sides, it\'s incredibly difficult to accurately predict how the yarn will behave when something is done to it. </p>\n<p>After building a unit version of the needle, I made a sequence of motions to create knits by hand and the actuated needle, which you can see below:</p>\n<span style="display:block;text-align:center">\n<img src="'+n(61)+'" alt="Label" width="75%" style="margin: 0 auto"/>\n*Looping by hand*\n</span>\n\n<p>These motions were turned into the 4 separate steps you see below, which formed the basis of the ultimate sequence for creating knits.</p>\n<span style="display:block;text-align:center">\n<img src="'+n(62)+'" alt="Label" width="100%" style="margin: 0 auto"/>\n*Steps to create a knit*\n</span>\n\n<p>However, translating the steps to machine movement was incredibly challenging. Because the XY bed was built using off-the-shelf components meant for 3D printers, the code driving the machine was built off of <a href="https://www.repetier.com/">Repetier</a>, an existing Arduino-based firmware. That meant that the machine could be moved through gcode, the language used for most existing 3D printers and CNC machines. However, there needed to be a couple modifications to make the firmware work with the motion.</p>\n<table>\n<thead>\n<tr>\n<th>Command</th>\n<th>Original Definition</th>\n<th>Modified Definition</th>\n<th>Usage</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>L</code></td>\n<td>No <code>L</code> defined in Repetier</td>\n<td>Selects a needle to be actuated</td>\n<td><code>L&lt;index of desired needle&gt;</code></td>\n</tr>\n<tr>\n<td><code>E</code></td>\n<td>Length of material to be extruded</td>\n<td>Distance that the pusher moves (in mm)</td>\n<td><code>E&lt;desired distance&gt;</code></td>\n</tr>\n<tr>\n<td><code>Z</code></td>\n<td>Distance a 3D printer bed goes in Z-direction</td>\n<td>Distance the hook moves (in mm)</td>\n<td><code>Z&lt;desired distance&gt;</code></td>\n</tr>\n<tr>\n<td><code>F</code></td>\n<td>Feed rate for extruder</td>\n<td>Speed at which the machine moved</td>\n<td><code>F&lt;desired speed&gt;</code></td>\n</tr>\n</tbody></table>\n<p>Each new command was added or edited in the Commands.cpp file of the Repetier firmware. A Github repo with the modified firmware along with all sorts of other related code can be found <a href="https://github.com/kevinguo344/CrochetMatic">here</a>.</p>\n<p>There were also problems ensuring that the servos, which were chosen for their inexpensive price rather than precision, could perform the repicate the exact motion from needle to needle reliably. The solution was to exaggerate the movements of the needle to ensure that each motion would complete its requisite task.</p>\n<span style="display:block;text-align:center">\n<img src="'+n(63)+'" alt="Label" width="75%" style="margin: 0 auto"/>\n*An early version of the five needle row. Even though the needles are programmed to move identically, the actual movements are far from identical.*\n</span>\n\n<p>In order to plan for how the needle would move, I used the CAM function built into Fusion360 with the simulated CAM tool as a stand-in for the needle, a fixed tube as analog for where the yarn was extruded from, and 2 tilted boxes representing the pushing brushes. </p>\n<span style="display:block;text-align:center">\n<img src="'+n(64)+'" alt="Label" width="75%" style="margin: 0 auto"/>\n*Simulating needle movement in Fusion360*\n</span>\n\n<p>With the toolpaths set, I could output a G-code file from Fusion360, which after further editing and modification, worked with the machine. And all the changes paid off when at the end of May 2018, I was able to make the machine knit a 5-needle wide scarf (almost) entirely without human intervention.</p>\n<div class="row">\n    <div class="seven columns" style="position:relative;overflow:hidden;padding-top: 56.25%;display:block;text-align:center">\n        <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border: 0;" src="https://drive.google.com/file/d/1NX24JxTp0RCihOpacNhDnv6LlEIOh0n9/preview"></iframe>\n    </div>\n    <div class="five columns" style="display:block;text-align:center">\n    <img src="'+n(65)+'" alt="Label" width="100%" style="margin: 0 auto"/>\n*The result of a year of work: a scarf*\n    </div>\n</div>\n\n<p>To get to this point required months of work, experimentation and false starts and for CrochetMatic to fully achieve the initial vision of fully volumetric 3D-knitting will require more work. Fortunately, it\'s currently in the competent hands of <a href="http://www.xiaoxiangma.ml/">Xiaoxiang Ma</a>, <a href="https://github.com/aliciaxw">Alicia Wang</a>, and <a href="http://amritkwatra.com/">Amrit Kwatra</a>.</p>\n<h3 id="the-end">The End</h3>\n'},function(e,t,n){e.exports=n.p+"static/media/crochetmatic.e3c7114f.png"},function(e,t,n){e.exports=n.p+"static/media/full-view.76784da0.svg"},function(e,t,n){e.exports=n.p+"static/media/voxel-single.6c3dfa0d.jpg"},function(e,t,n){e.exports=n.p+"static/media/basic.83933b43.png"},function(e,t,n){e.exports=n.p+"static/media/voxel-double.4f8888e8.jpg"},function(e,t,n){e.exports=n.p+"static/media/junction.1229a3d1.png"},function(e,t,n){e.exports=n.p+"static/media/single_layer.edb51949.gif"},function(e,t,n){e.exports=n.p+"static/media/multiple_layers.bdf4c92f.gif"},function(e,t,n){e.exports=n.p+"static/media/real_prism.4c16cf18.jpg"},function(e,t,n){e.exports=n.p+"static/media/part-overview.bc6eefb7.svg"},function(e,t,n){e.exports=n.p+"static/media/computer_sim.2cf7d002.gif"},function(e,t,n){e.exports=n.p+"static/media/first_version.964d0958.svg"},function(e,t,n){e.exports=n.p+"static/media/next_version.11019e1b.svg"},function(e,t,n){e.exports=n.p+"static/media/final_version.5c8de141.svg"},function(e,t,n){e.exports=n.p+"static/media/needle-parts.bbc1f3b6.svg"},function(e,t,n){e.exports=n.p+"static/media/loop-by-hand.c2db0d23.gif"},function(e,t,n){e.exports=n.p+"static/media/steps.10dad601.svg"},function(e,t,n){e.exports=n.p+"static/media/row.b33190b9.gif"},function(e,t,n){e.exports=n.p+"static/media/CAM-trace.cfbadaf6.gif"},function(e,t,n){e.exports=n.p+"static/media/scarf.12096cd6.png"},function(e,t){e.exports='<h3 id="distopia">Distopia</h3>\n<h6 id="august-2018-december-2018">August 2018 - December 2018</h6>\n<h5 id="people-matt-law-kevin-guo-">People: Matt Law, <strong>Kevin Guo</strong>,</h5>\n<p>Distopia is an offshoot of the <a href="http://hrc2.io/projects/Collaborative-Design">Design Assistant project</a> at Prof. Guy Hoffman\'s <a href="http://hrc2.io/">Human-Robot Collaboration &amp; Companionship Lab</a>. The goal of Distopia is to build a robotic design assistant that would facilitate the creation of better, fairer voting districts.</p>\n<h3 id="why-we-did-it">Why We Did It</h3>\n<p>In America, Congressional voting districts are determined every 10 years after the US Census. However, drawing the boundaries for these districts are incredibly hard and can be subject to all sorts of manipulation, like gerrymandering. But while an unfair district can be easy to spot, it\'s hard to say what a fair district is.</p>\n<p>The law dictates that each district in a state must have roughly the same population and must be continuous (they can&#39;t be made up of separate pieces), but beyond that doesn\'t provide any other guidelines. There are also other</p>\n'},function(e,t,n){e.exports='<h3 id="transform">transFORM</h3>\n<h6 id="january-2019-onwards">January 2019 - Onwards</h6>\n<span style="display:block;text-align:center">\n<img src="'+n(68)+'" alt="That\'s me in that pic" width="75%" style="margin: 0 auto"/>\n*A rendering of transFORM*\n</span>\n\n<p>As part of my Master of Engineering (MEng) in Mechanical Engineering, I will be working on transFORM, a project of Prof. Keith Green\'s <a href="https://arl.human.cornell.edu/">Architectural Robotics Lab (ARL)</a>. transFORM is a room-scaled, kirigami-inspired robotic environment for public spaces. For more information, go to the <a href="https://arl.human.cornell.edu/research-transFORM.html">ARL page on transFORM</a>.</p>\n<h3 id="background">Background</h3>\n<p>I\'ve always been interested in architecture and for my <a href="https://www.engineering.cornell.edu/students/undergraduate-students/entrepreneurial-options-undergrad-students/kessler-fellows-program">Kessler Fellowship</a> the summer of my junior year, I interned at <a href="https://oriliving.com/">Ori Inc</a>, an MIT Media Lab spinoff building robotic furniture for urban apartments. During my time at Ori, I became increasingly interested in applying architectural robotics to the public realm. After all, if we could make apartments responsive, couldn\'t we do the same for a public plaza that was used by all walks of life? That\'s why I wanted to work on transFORM when I returned to Cornell.</p>\n<p>This page will get updated as work on transFORM progresses throughout the semester.</p>\n<h3 id="come-back-later-for-updates-">Come Back Later for Updates!</h3>\n'},function(e,t,n){e.exports=n.p+"static/media/transFORM.4b2b2d68.jpg"},function(e,t){e.exports='<h3 id="polybrick">Polybrick</h3>\n<h6 id="february-2019-onwards">February 2019 - Onwards</h6>\n<p>For Spring 2019, I am taking <a href="http://www.jennysabin.com/">Prof. Jenny Sabin\'s</a> research seminar in Matter Design Computation. As part of the seminar, I will be working on the next version of Polybrick, a project in Prof. Sabin\'s lab. </p>\n<h3 id="background">Background</h3>\n<p><a href="http://www.jennysabin.com/polybrick/">Polybrick</a> has already gone through one version previously. This new version of Polybrick is inspired by the microstructures that exists inside bone, with the goal of creating a material that is strong, materially efficient, and has properties not found in regular brick or other existing material. My role will focus on the robotic fabrication aspect of the project, using the Sulla robotic arm and other technologies to explore how to build Polybrick structures.</p>\n<p>This page will get updated as work on Polybrick progresses throughout the semester.</p>\n<h3 id="come-back-later-for-updates-">Come Back Later for Updates!</h3>\n'},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(16),o=n.n(r),s=(n(24),n(3)),l=n(4),c=n(6),d=n(5),h=n(7),m=(n(26),n(28),{marginTop:"25%"}),p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).width=n.stringToNum(n.props.width),null!=n.width?n.width+=" columns":n.width="column",n.offset=n.stringToNum(n.props.offset),null!=n.offset?n.offset=" offset-by-"+n.offset:n.offset="","true"===n.props.title&&(n.style=m),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"stringToNum",value:function(e){var t;switch(e){case"":t=null;break;case"1/2":t="half";break;case"1/3":t="one-third";break;case"2/3":t="two-thirds";break;case"1":t="one";break;case"2":t="two";break;case"3":t="three";break;case"4":t="four";break;case"5":t="five";break;case"6":t="six";break;case"7":t="seven";break;case"8":t="eight";break;case"9":t="nine";break;case"10":t="ten";break;case"11":t="eleven";break;case"12":t="twelve";break;default:t=null}return t}},{key:"render",value:function(){return i.a.createElement("div",{className:this.width+this.offset,style:this.style},this.props.children)}}]),t}(i.a.Component),u=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},this.props.children)}}]),t}(i.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"row"},this.props.children)}}]),t}(i.a.Component),f=(n(13),n(72)),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).project=w[n.props.project],n.side=n.props.side,n.style={background:"linear-gradient(to bottom,"+n.project.color+","+n.project.color+"), linear-gradient(to bottom, rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("+n.project.img+")",backgroundSize:"cover"},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{to:"/"+this.project.link},i.a.createElement(p,{width:"6"},i.a.createElement("div",{className:"titleCard "+this.side},i.a.createElement("div",{className:"titleContainer"},i.a.createElement("h2",null,this.project.title),i.a.createElement("h5",null,this.project.sub)),i.a.createElement("div",{className:"background",style:this.style}))))}}]),t}(i.a.Component),w={roma:{title:"RoMA",sub:"Interactive Fabrication in AR",link:"research/roma",img:"./assets/icons/roma.svg",color:"rgba(58,153,215,0.5)"},crochetmatic:{title:"CrochetMatic",sub:"Knitting in 3D",link:"research/crochetmatic",img:"./assets/icons/crochetmatic.svg",color:"rgba(219,80,74,0.5)"},distopia:{title:"Distopia",sub:"Build a Better Voting District",link:"research/distopia",img:"./assets/icons/distopia.svg",color:"rgba(138,201,38,0.5)"},transform:{title:"transFORM",sub:"Responsive Public Environment",link:"research/transform",img:"./assets/icons/transform.svg",color:"rgba(227,181,5,0.5)"},polybrick:{title:"Polybrick",sub:"Building blocks inspired by Nature",link:"research/polybrick",img:"./assets/icons/polybrick.svg",color:"rgba(138,201,38,0.5)"},cuberpillar:{title:"Cuberpillar",sub:"Combining the geometric and organic",link:"designs/cuberpillar",img:"./assets/icons/roma.png"},ocularmd:{title:"OcularMD",sub:"Letting the world see again",link:"designs/ocularmd",img:"./assets/icons/roma.png"},ciac:{title:"CIAC VII",sub:"Bringing order to a messy brand",link:"designs/ciac",img:"./assets/icons/roma.png"},lcl:{title:"Life Changing Labs",sub:"Giving startups a new beginning",link:"designs/lcl",img:"./assets/icons/roma.png"},cornellems:{title:"Cornell EMS",sub:"Redefining an old stalwart",link:"designs/cornellems",img:"./assets/icons/roma.png"}},y=b,k=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"pageView"},i.a.createElement("div",{className:"pageContainer"},this.props.children))}}]),t}(i.a.Component),v=n(14),x=n.n(v),E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(u,null,i.a.createElement(k,null,i.a.createElement(g,null,i.a.createElement(p,{width:"6"},i.a.createElement("h1",null,i.a.createElement("strong",null,"Hi, I'm Kevin")),i.a.createElement("p",null,"I'm currently a student Cornell University studying Information Science, Systems, & Technology. I'm also pursuing a Masters of Engineering in Mechanical Engineering focusing on Architectural Robotics. My advisor is ",i.a.createElement("a",{href:"https://arl.human.cornell.edu/people_keith.htm"},"Prof. Keith Green")," of the Design + Environmental Analysis (DEA) department."),i.a.createElement("p",null,"I'm interested in learning how technology can make design more accessible, useful, and exciting, especially interested in its applications to architecture and the built environment.")))),i.a.createElement(k,null,i.a.createElement(x.a,{minWidth:550},i.a.createElement(g,null,i.a.createElement("h2",null,i.a.createElement("strong",null,"Research")),i.a.createElement("p",null,"My research focuses on the applications of robotics in design, especially in architecture. Of special interest are the design and construction of interactive robotic environments and novel forms of robotic fabrication.")),i.a.createElement(g,null,i.a.createElement(y,{project:"crochetmatic",side:"left"}),i.a.createElement(y,{project:"roma",side:"left"})),i.a.createElement(g,null,i.a.createElement(y,{project:"transform",side:"right"}),i.a.createElement(y,{project:"polybrick",side:"right"}))),i.a.createElement(x.a,{maxWidth:550},i.a.createElement(g,null,i.a.createElement("h1",null,"Research"),i.a.createElement("p",null,"My research focuses on the applications of robotics in design, especially in architecture. Of special interest are the design and construction of interactive robotic environments and novel forms of robotic fabrication.")),i.a.createElement(g,null,i.a.createElement(y,{project:"crochetmatic",side:"right"}),i.a.createElement(y,{project:"roma",side:"left"})),i.a.createElement(g,null,i.a.createElement(y,{project:"transform",side:"right"}),i.a.createElement(y,{project:"polybrick",side:"left"})))))}}]),t}(a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(g,null,i.a.createElement(p,{width:"1"},i.a.createElement(f.a,{to:"/"},i.a.createElement("h2",null,i.a.createElement("i",{class:"fas fa-angle-double-left"})))),i.a.createElement(p,{width:"11"},i.a.createElement("h2",null,"Kevin Guo")))}}]),t}(i.a.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(u,null,i.a.createElement(j,null),i.a.createElement(g,null,i.a.createElement(p,{className:"projects",width:"12"},this.props.children)))}}]),t}(a.Component),A=n(10),O=n(33),C=n(45),I=n(66),D=n(67),T=n(69),R=function(){return i.a.createElement(M,null,i.a.createElement(A.a,null,O))},F=function(){return i.a.createElement(M,null,i.a.createElement(A.a,null,C))},S=function(){return i.a.createElement(M,null,i.a.createElement(A.a,null,I))},L=function(){return i.a.createElement(M,null,i.a.createElement(A.a,null,D))},P=function(){return i.a.createElement(M,null,i.a.createElement(A.a,null,T))},B=function(){return i.a.createElement(M,{mdFile:"roma.md"})},W=function(){return i.a.createElement(M,{mdFile:"roma.md"})},N=function(){return i.a.createElement(M,{mdFile:"roma.md"})},q=function(){return i.a.createElement(M,{mdFile:"roma.md"})},K=function(){return i.a.createElement(M,{mdFile:"roma.md"})},G=n(74),H=n(73),J=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(G.a,null,i.a.createElement("div",null,i.a.createElement(H.a,{exact:!0,path:"/",component:E}),i.a.createElement(H.a,{exact:!0,path:"/research/roma",render:R}),i.a.createElement(H.a,{exact:!0,path:"/research/crochetmatic",component:F}),i.a.createElement(H.a,{exact:!0,path:"/research/distopia",component:S}),i.a.createElement(H.a,{exact:!0,path:"/research/transform",component:L}),i.a.createElement(H.a,{exact:!0,path:"/research/polybrick",component:P}),i.a.createElement(H.a,{exact:!0,path:"/designs/cuberpillar",render:B}),i.a.createElement(H.a,{exact:!0,path:"/designs/ocularmd",component:W}),i.a.createElement(H.a,{exact:!0,path:"/designs/ciac",component:N}),i.a.createElement(H.a,{exact:!0,path:"/designs/lcl",component:q}),i.a.createElement(H.a,{exact:!0,path:"/designs/cuems",component:K})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(G.a,{basename:""},i.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[19,2,1]]]);
//# sourceMappingURL=main.381a777a.chunk.js.map