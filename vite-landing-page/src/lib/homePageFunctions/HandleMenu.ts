export function handleMenu() {
    const menu = document.getElementById("mobile-menu");

    if (menu) {
        menu?.classList.toggle("hidden");
        console.log("clicked");
    }
}
