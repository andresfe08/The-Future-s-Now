const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.cssText = `
    top: ${e.y - 30}px;
    left: ${e.x - 30}px;
    `;
});
