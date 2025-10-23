// navbar.js
document.addEventListener("DOMContentLoaded", function() {
  const recentHTML = `
    <div class="mb-5">
		<h5 class="font-secondary mb-4"><i class="ti-minus mr-2 text-color"></i>Recent posts</h5>
		
		<div class="media mb-4">
			<img src="images/blog/blog-post-5.jpg" alt="" class="img-fluid pr-4 w-50 align-self-center">
			<div class="media-body">
				<a href="#" class="text-black d-block lh-25"> Track your daily body fitness</a>
			</div>
		</div>
		
		<div class="media mb-4">
			<img src="images/blog/blog-post-6.jpg" alt="" class="img-fluid pr-4 w-50 align-self-center">
			<div class="media-body">
				<a href="#" class="text-black d-block lh-25">Keep your body fitness track</a>
			</div>
		</div>
		
		<div class="media mb-4">
			<img src="images/blog/post1.jpg" alt="" class="img-fluid pr-4 w-50 align-self-center">
			<div class="media-body">
				<a href="#" class="text-black d-block lh-25">Keep your body fitness track</a>
			</div>
		</div>
	</div>
  `;

  document.getElementById("recent").innerHTML = recentHTML;
});
