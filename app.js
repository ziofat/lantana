const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');
const url = require('url');

let win;
let tray;

function createWindow() {
	win = new BrowserWindow({
		width: 280,
		height: 592,
		frame: false,
		show: false,
		fullscreenable: false,
		resizable: false,
		transparent: true,
		webPreferences: {
			// Prevents renderer process code from not running when window is
			// hidden
			backgroundThrottling: false,
		},
	});
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true,
	}));

	win.on('blur', () => {
		if (!win.webContents.isDevToolsOpened()) {
			win.hide();
		}
	});
}

function getWindowPosition() {
	const windowBounds = win.getBounds();
	const trayBounds = tray.getBounds();

	// Center window horizontally above the tray icon
	const x = Math.round((trayBounds.x + (trayBounds.width / 2)) - (windowBounds.width / 2));

	// Position window 4 pixels vertically above the tray icon
	const y = Math.round(trayBounds.y - windowBounds.height - 4);

	return { x, y };
}

const showWindow = () => {
	const { x, y } = getWindowPosition();
	win.setPosition(x, y, false);
	win.show();
	win.focus();
};

function toggleWindow() {
	if (win.isVisible()) {
		win.hide();
	} else {
		showWindow();
	}
}


function createTray() {
	tray = new Tray(path.join(__dirname, 'icon.png'));
	const contextMenu = Menu.buildFromTemplate([
		{
			label: 'Show Lantana',
			click: () => {
				toggleWindow();
			},
		},
		{
			label: 'Toggle Develop Tool',
			click: () => {
				const opened = win.isDevToolsOpened();
				return opened ? win.closeDevTools() : win.openDevTools({ mode: 'detach' });
			},
		},
		{ label: 'Quit', role: 'quit' },
	]);
	tray.setToolTip('This is my application.');
	tray.setContextMenu(contextMenu);
	tray.on('right-click', (event) => {
		tray.popUpContextMenu();
	});
	tray.on('double-click', toggleWindow);
	tray.on('click', toggleWindow);
}


app.on('ready', () => {
	createTray();
	createWindow();
});

app.on('window-all-closed', () => {
	app.quit();
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});
