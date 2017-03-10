declare namespace mdui {
	class Collapse {
		constructor(selector: string, opts?: any);
		open(item: any): void; 
		close(item: any): void; 
		toggle(item: any): void;
		openAll(): void;
		closeAll(): void;
	}

	class Dialog {
		constructor(selector: string, opts?: any);
		open(): void; 
		close(): void; 
		toggle(): void;
		getState(): string;
		destroy(): void;
		handleUpdate(): void;
	}

	class Drawer {
		constructor(selector: string, opts?: any);
		open(): void; 
		close(): void; 
		toggle(): void;
		getState(): string;
	}

	class Fab {
		constructor(selector: string, opts?: any);
		open(): void;
		close(): void; 
		toggle(): void;
		getState(): string;
		show(): void;
		hide(): void;
	}

	class Headroom {
		constructor(selector: string, opts?: any);
		pin(): void;
		unpin(): void;
		enable(): void;
		disable(): void;
		getState(): string;
	}

	class Menu {
		constructor(anchorSelector: string, menuSelector: string, opts?: any);
		toggle(): void;
		open(): void;
		close(): void;
	}

	class Panel {
		constructor(selector: string, opts?: any);
	}

	class Snackbar {
		constructor(opts?: any);
		open(): void;
		close(): void;
	}

	class Tab {
		constructor(selector: string, opts?: any);
		next(): void;
		prev(): void;
		show(index: number|string): boolean|void;
		handleUpdate(): void;
	}

	class Table {
		constructor(slector: string);
		init(): void;
		updateTdCheckbox(): void;
		updateThCheckbox(): void;
	}

	class Tooltip {
		constructor(selector: string, opts?: any);
		open(): void;
		close(): void;
		toggle(): void;
		getState(): string;
		// destroy(): void;
	}

	function updateSpinners(): void;
	function updateSliders(): void;
	function updateTables(): void;
	function updateTextFields(): void;

	function snackbar(opts:any): Snackbar;

	let device: any;
}