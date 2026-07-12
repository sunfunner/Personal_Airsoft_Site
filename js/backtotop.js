// เมื่อผู้ใช้เลื่อนหน้าจอลงมา 20px จากด้านบน ให้แสดงปุ่ม
// เมื่อผู้ใช้เลื่อนหน้าจอลงมามากกว่า 20px ให้แสดงปุ่มแบบค่อยๆ ขยายความเข้ม (Fade In)
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show"); // เมื่อถึงด้านบนสุด ปุ่มจะค่อยๆ จางหายไปเอง (Fade Out)
  }
}

// ฟังก์ชันเลื่อนขึ้นด้านบน (ใช้แบบสไตล์ดั้งเดิมคู่กับ CSS smooth scroll จะทำงานร่วมกับการจางหายได้ดีที่สุด)
function scrollToTop() {
  window.scrollTo(0, 0);
}

// เมื่อผู้ใช้คลิกที่ปุ่ม ให้เลื่อนหน้าจอขึ้นไปด้านบนสุดอย่างนุ่มนวล
function scrollToTop() {
  // ดึงค่าตำแหน่งการเลื่อนปัจจุบัน และปัดเศษทศนิยมลง
  const currentScroll = Math.floor(document.documentElement.scrollTop || document.body.scrollTop);
  
  // ถ้าระยะเหลือมากกว่า 0 ให้เลื่อนขึ้นต่อ
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ลบระยะออกทีละ 10% และลบเพิ่มอีก 1px เพื่อป้องกันการติดเศษทศนิยมใกล้เลข 0
    window.scrollTo(0, currentScroll - (currentScroll / 10) - 1);
  }
}
