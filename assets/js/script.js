document.addEventListener("DOMContentLoaded", async () => {
  const basePath = window.location.pathname.split("/")[1] ? `/${window.location.pathname.split("/")[1]}` : "";

  async function loadComponent(file, tag) {
    try {
      const response = await fetch(`${basePath}/components/${file}.html`);
      if (!response.ok) throw new Error(`${file}.html not found`);

      const html = await response.text();
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      const element = tempDiv.querySelector(tag);
      if (!element) return console.warn(`No <${tag}> tag found in ${file}.html`);

      if (tag === "header") {
        document.body.prepend(element);
      } else if (tag === "footer") {
        document.body.appendChild(element);
      }
    } catch (err) {
      console.error(`Failed to load ${file}:`, err);
    }
  }

  await loadComponent("header", "header");
  await loadComponent("footer", "footer");
});
