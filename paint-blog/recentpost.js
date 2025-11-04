// navbar.js
document.addEventListener("DOMContentLoaded", function() {
  const recentHTML = `
    <div class="mb-5">
		<h5 class="font-secondary mb-4"><i class="ti-minus mr-2 text-color"></i>Recent posts</h5>
		
		<div class="media mb-4">
			<img src="../images/paint/bullet-paint-1.png" alt="" class="img-fluid pr-4 w-50 align-self-center">
			<div class="media-body">
				<a href="#" class="text-black d-block lh-25">5.56mm and 9mm Bullet Paint</a>
			</div>
		</div>
		
		<div class="media mb-4">
			<img src="../images/paint/bullet-clean-1.png" alt="" class="img-fluid pr-4 w-50 align-self-center">
			<div class="media-body">
				<a href="#" class="text-black d-block lh-25">Bullet Clean-up</a>
			</div>
		</div>
		
		<div class="media mb-4">
			<img src="../images/paint/pyton-modyfy-1.png" alt="" class="img-fluid pr-4 w-50 align-self-center">
			<div class="media-body">
				<a href="#" class="text-black d-block lh-25">Pyton Cylinder & Bullet Fix</a>
			</div>
		</div>
	</div>
  `;

  document.getElementById("recent").innerHTML = recentHTML;
});
