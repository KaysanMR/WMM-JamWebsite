document.addEventListener("DOMContentLoaded", async () => {
  const getBasePath = () => {
    const pathParts = window.location.pathname.split("/");
    return pathParts.length > 1 ? `/${pathParts[1]}` : "";
  };

  const basePath = getBasePath(); // Adjust for GitHub Pages if needed

  async function loadComponent(fileName, tagName, insertPosition) {
    try {
      const response = await fetch(`${basePath}/components/${fileName}.html`);
      if (!response.ok) throw new Error(`${fileName}.html not found`);

      const html = await response.text();
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      const element = tempDiv.querySelector(tagName);
      if (!element) {
        console.warn(`No <${tagName}> tag found in ${fileName}.html`);
        return;
      }

      if (insertPosition === "start") {
        document.body.prepend(element);
      } else {
        document.body.appendChild(element);
      }
    } catch (err) {
      console.error(`Failed to load ${fileName}:`, err);
    }
  }

  await loadComponent("header", "header", "start");
  await loadComponent("footer", "footer", "end");
});
