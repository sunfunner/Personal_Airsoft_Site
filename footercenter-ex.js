// navbar.js
document.addEventListener("DOMContentLoaded", function() {
  const footerHTML = `
    <footer class="footer bg-black-50">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
							<h2 class="text-white mb-4">Rollipop</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus illo ad quo sunt maiores, sint nostrum omnis eaque cumque dolorum.</p>
			
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</div>
						
			
						<div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
							<div class="footer-widget recent-blog">
								<h4 class="mb-4 text-white letter-spacing text-uppercase">Recents Work</h4>
								<div>
									<a href="blog-single.html"class="text-white">Claritas est etiam processus dynamicus</a>
									<p class="text-sm mt-2 text-white-50">30 february 2019</p>
								</div>
								<div class="mt-4">
									<a href="blog-single.html"class="text-white">Claritas est etiam processus dynamicus</a>
									<p class="text-sm mt-2 text-white-50">30 february 2019</p>
								</div>
			
							</div>
						</div>
						<div class="col-lg-2 col-md-5 mb-5 mb-lg-0">
							<div class="footer-widget">
								<h4 class="mb-4 text-white letter-spacing text-uppercase">Quick Links</h4>
								<ul class="list-unstyled footer-menu lh-40 mb-0">
									<li><a href="../weapon.html"><i class="ti-angle-double-right mr-2"></i>Weapon</a></li>
									<li><a href="../gear.html"><i class="ti-angle-double-right mr-2"></i>Gear</a></li>
									<li><a href="../gallery.html"><i class="ti-angle-double-right mr-2"></i>Gallery</a></li>
									<li><a href="paintjob-1.html"><i class="ti-angle-double-right mr-2"></i>Paint & Modify</a></li>
									<li><a href="3d-model-1.html"><i class="ti-angle-double-right mr-2"></i>Prob & 3D</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-5">
							<div class="footer-widget">
								<h4 class="mb-4 text-white letter-spacing text-uppercase">location</h4>
								<p>Around Klong 4, Pratumthani 12150 </p>
								<span class="text-white">089-477-XXXX</span>
								<span class="text-white">aonfunner@hotmail.com</span>
							</div>
						</div>
					</div>
			
					<div class="row align-items-center mt-5 px-3 bg-black mx-1">
						<div class="col-lg-4">
							<p class="text-white mt-3">Theme By Gymfit © 2019 <a href="https://themefisher.com/" class="text-color">Themefisher.com</a></p>
						</div>
						<div class="col-lg-6 ml-auto text-right">
							<ul class="list-inline mb-0 footer-socials">
								<li class="list-inline-item"><a href="https://www.facebook.com/themefisher"><i class="ti-facebook"></i></a></li>
								<li class="list-inline-item"><a href="https://twitter.com/themefisher"><i class="ti-twitter"></i></a></li>
								<li class="list-inline-item"><a href="https://github.com/themefisher/"><i class="ti-github"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
  `;

  document.getElementById("footer").innerHTML = footerHTML;
});
