// navbar.js
document.addEventListener("DOMContentLoaded", function() {
  const navbarHTML = `
    <nav class="navbar navbar-expand-lg navigation fixed-top" id="navbar">
	<div class="container-fluid">
		<a class="navbar-brand" href="index.html">
			<h2 class="text-white text-capitalize"></i>Rollipop<span class="text-color"> 	</span></h2>
		</a>

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid" aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation">
			<span class="ti-view-list"></span>
		</button>
  
		<div class="collapse text-center navbar-collapse" id="navbarsid">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item active">
					<a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages ▼</a>
					<ul class="dropdown-menu  text-center" aria-labelledby="dropdown03">
						<li><a class="dropdown-item" href="weapon.html">Weapon</a></li>
						<li><a class="dropdown-item" href="gear.html">Gear</a></li>
						<li><a class="dropdown-item" href="team.html">Team</a></li>
					</ul>
				</li>
				<li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog ▼</a>
					<ul class="dropdown-menu  text-center text-lg-left" aria-labelledby="dropdown05">
						<li><a class="dropdown-item" href="paint-blog/paintjob-1.html">Paint & Modify</a></li>
						<li><a class="dropdown-item" href="prob-3d-blog/3d-model-1.html">Prop & Build</a></li>
						<li><a class="dropdown-item" href="field.html">Field</a></li>
					</ul>
				</li>
				<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
			</ul>
			
			<!--<div class="my-md-0 ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0">
				<a href="tel:+23-345-67890"><h3 class="text-color mb-0"><i class="ti-mobile mr-2"></i>089-477-9922</h3></a>
			</div>--> 
		</div>
	</div>
	</nav>
  `;

  document.getElementById("navbar").innerHTML = navbarHTML;
});
