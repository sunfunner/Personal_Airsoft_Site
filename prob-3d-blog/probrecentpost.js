// navbar.js
document.addEventListener("DOMContentLoaded", function() {
  const recentHTML = `
    <div class="mb-5">
		<h5 class="font-secondary mb-4"><i class="ti-minus mr-2 text-color"></i>Recent posts</h5>
		
		<div class="media mb-4">
			<img src="../images/prob3d/m203-1.jpg" alt="" class="img-fluid pr-4 w-50 align-self-center prop-recent">
			<div class="media-body">
				<a href="m203rail.html" class="text-black d-block lh-25">M203 Underbarrel Rail</a>
			</div>
		</div>
		
		<div class="media mb-4">
			<img src="../images/prob3d/mp9sup-1.jpg" alt="" class="img-fluid pr-4 w-50 align-self-center prop-recent">
			<div class="media-body">
				<a href="mp9sup.html" class="text-black d-block lh-25">MP9 Suppressor</a>
			</div>
		</div>
		<div class="media mb-4">
			<img src="../images/prob3d/earcover-1.jpg" alt="" class="img-fluid pr-4 w-50 align-self-center prop-recent">
			<div class="media-body">
				<a href="earcover.html" class="text-black d-block lh-25">Helmet Ear Cover</a>
			</div>
		</div>
		
	</div>
  `;

  document.getElementById("recent").innerHTML = recentHTML;
});
