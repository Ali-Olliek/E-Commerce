const { app, BrowserWindow } = require("electron");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("adminLogin.html");
};
app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// const addItem = document.getElementById("additem");
// const loading = document.getElementById("loading");
// const adminpage = document.getElementById("admin");
// const addcat = document.getElementById("addcat");
// const addCatPage = document.getElementById("category");
// const addItemPage = document.getElementById("createitem");


