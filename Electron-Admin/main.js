const { app, BrowserWindow } = require("electron");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("admin.html");
};
app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

const addItem = document.getElementById("additem");
const addcat = document.getElementById("addcat");
const addCatPage = document.getElementById("category");
const addItemPage = document.getElementById("createitem");


window.onload = function () {
  addItemPage.style.display = "block";
  addCatPage.style.display = "none";
};
addcat.addEventListener("click", function () {
  addItemPage.style.display = "none";
  addCatPage.style.display = "block";
});