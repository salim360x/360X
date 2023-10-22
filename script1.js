const icon = document.getElementById("icon");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".sidebar a");

icon.addEventListener("click", () => {
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        sidebar.style.width = "250px";
    } else {
        sidebar.style.width = "0px";
    }
});

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        // تمنع التصرف الافتراضي للروابط (منع التحميل)
        event.preventDefault();

        // استخدام window.location.href للانتقال إلى الصفحة المستهدفة
        window.location.href = link.getAttribute("href");
    });
});
