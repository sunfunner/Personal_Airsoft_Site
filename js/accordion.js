function openAccordion(content, header) 
			{
				content.classList.add("open");
				header.classList.add("active");
				
				content.style.height = "0px";
				
				requestAnimationFrame(() => 
				{
					content.style.height = content.scrollHeight + "px";
				
					content.addEventListener("transitionend", function handler() {
					content.style.height = "auto"; // 🔥 สำคัญ
					content.removeEventListener("transitionend", handler);
					});
				});
			}
			
			function closeAccordion(content, header) 
			{
				content.style.height = content.scrollHeight + "px";
				
				requestAnimationFrame(() => {
					content.style.height = "0px";
				});
				
				content.classList.remove("open");
				header.classList.remove("active");
			}
			
			function closeAll(container) 
			{
				container.querySelectorAll(".accordion-content.open").forEach(el => {
					closeAccordion(el, el.previousElementSibling);
				});
			}
			
			document.querySelectorAll(".accordion-header").forEach(header => {
			header.addEventListener("click", () => {
				const content = header.nextElementSibling;
				if (!content) return;
			
				const container = header.closest(".accordion");
				const isOpen = content.classList.contains("open");
			
				closeAll(container);
			
				if (!isOpen) {
				openAccordion(content, header);
				}
			});
			});