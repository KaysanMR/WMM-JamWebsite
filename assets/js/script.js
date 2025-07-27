document.addEventListener("DOMContentLoaded", async () => {
  if (location.protocol === "file:") {
    console.warn("Components may not load properly using file:// URLs. Use a local server for best results.");
    return;
  }

  async function loadComponent(file, tag) {
    try {
      const response = await fetch(`./components/${file}.html`);
      if (!response.ok) throw new Error(`${file}.html not found`);

      const html = await response.text();
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      const element = tempDiv.querySelector(tag);
      if (!element) {
        console.warn(`No <${tag}> tag found in ${file}.html`);
        return;
      }

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
