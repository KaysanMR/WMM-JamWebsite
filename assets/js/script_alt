//add header
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/components/header.html");
    if (!response.ok) throw new Error("Header file not found");
    const headerHTML = await response.text();

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = headerHTML;
    const header = tempDiv.querySelector("header");

    if (header) {
      document.body.prepend(header);
    } else {
      console.warn("No <header> tag found in header.html");
    }
  } catch (err) {
    console.error("Failed to load header:", err);
  }
});
//add footer
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/components/footer.html");
    if (!response.ok) throw new Error("Footer file not found");
    const footerHTML = await response.text();

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = footerHTML;
    const footer = tempDiv.querySelector("footer");

    if (footer) {
      document.body.appendChild(footer);
    } else {
      console.warn("No <footer> tag found in footer.html");
    }
  } catch (err) {
    console.error("Failed to load footer:", err);
  }
});