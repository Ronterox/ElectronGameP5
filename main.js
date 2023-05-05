const { app, BrowserWindow } = require("electron");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		// transparent: true,
		webPreferences: {
			preload: `${__dirname}/preload.js`,
		},
		// frame: false,
	});

	win.loadFile("index.html");
	win.setMenuBarVisibility(false);

	win.webContents.openDevTools();
};

app.on("window-all-closed", () => {
	app.quit();
});

app.whenReady().then(createWindow);
