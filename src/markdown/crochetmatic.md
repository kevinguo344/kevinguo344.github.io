### CrochetMatic: Volumetric 3D Knitting
###### May 2017 - May 2018
##### People: **Kevin Guo**, Olav Imsdahl, François Guimbretière, Scott Hudson

I worked on CrochetMatic during my time at [Prof. François Guimbretière\'s Design Lab](https://www.cs.cornell.edu/~francois/). CrochetMatic was easily one of the most time-consuming and difficult projects. While I didn\'t reach the ultimate goal, I believe that I learned an immense amount from my struggles with this project.

### In the Beginning...

The initial idea was to build a machine that could build knitted objects the same way 3D printers build their prints: additive and layer-by-layer. But while plastic has relatively predictable properties and can be put through an extruder, a length of yarn\'s properties can change from bundle to bundle. Also, it can get caught on small mechanisms which makes it hard to build around.

At the suggestion of [Prof. Steve Marschner](http://www.cs.cornell.edu/~srm/), the preeminent computer graphics professor at Cornell (and probably the world, he won an Oscar for his CG research), the individual knits were throught of as a series of voxels, or volumes in a 3D grid. This was coming off of his previous work simulating knit clothes [(more details here.)](http://www.cs.cornell.edu/projects/YarnCloth/)

### Simulations

After spending the first two weeks of summer learning how to knit, I learned that the knits followed a regular pattern and that the best way to make a "layer" of knits was to spiral outwards in with a series of concentric layers. Each individual layer would be independent of the ones inside and outside of it except for "linking" knits that connected that layer to the one outside of it. I ended up building computer models in Fusion360 of each type of knit that would conform to the voxels.

<div class="row">
	<div class="six columns" style="display:block;text-align:center">
		<span style="display:block;text-align:center">
		<img src="./images/basic.png" alt="Basic" width="75%" style="margin: 0 auto"/>
		*A basic knit voxel*
		</span>
	</div>
	<div class="six columns" style="display:block;text-align:center">
		<span style="display:block;text-align:center">
		<img src="./images/junction.png" alt="Junction" width="100%" style="margin: 0 auto"/>
		*Junction knit voxels*
		</span>
	</div>
</div>

Each knit followed a path of points, which I was able to export and joint together to form a single "strand" of points. This strand was inputted into a modified version of a [C++ rod simulator](https://www.cs.cornell.edu/projects/rodsound/) developed by one of Prof. Marschner\'s PhDs [Eston](https://www.cs.cornell.edu/~ers/). Each simulation, even though only one second long, required hours of computation, a couple took over 24 hours. But in the end, we got the results: 

<div class="row">
	<div class="six columns" style="display:block;text-align:center">
		<span style="display:block;text-align:center">
		<img src="./images/single_layer.gif" alt="single" width="100%" style="margin: 0 auto"/>
		*Simulating a single layer*
		</span>
	</div>
	<div class="six columns" style="display:block;text-align:center">
		<span style="display:block;text-align:center">
		<img src="./images/multiple_layers.gif" alt="multiple" width="100%" style="margin: 0 auto"/>
		*Simulating  multiple layers*
		</span>
	</div>
</div>

Which were promising and seemed to match the real life knits I made.

<span style="display:block;text-align:center">
<img src="./images/real_prism.jpg" alt="Label" width="35%" style="margin: 0 auto"/>
*Knitted "Cube" I made*
</span>

### Building the Needles

With an idea of what the final knits would look like, it was onto building the machine

### So Much Testing

### The End