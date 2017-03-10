import { Injectable, EventEmitter } from '@angular/core';
import { Theme } from '../types/theme';
import { Hue } from '../types/hue';
import { Shade } from '../types/shade';
import { THEMES } from '../data/themes';

@Injectable()
export class ThemeService {
	private chosenTheme: Theme;
	private chosenHue: Hue;

	themeChange: EventEmitter<Theme>;
	hueChange: EventEmitter<Hue>;

	constructor() {
		this.themeChange = new EventEmitter();
		this.hueChange = new EventEmitter();
	}

	getThemeList(): Theme[] {
		return THEMES;
	}

	getHueList(): Hue[] {
		const theme = this.getChosenTheme();
		return theme.hues;
	}

	getShadeList(): Shade[] {
		const hue = this.getChosenHue();
		return hue.shades;
	}

	getChosenTheme(): Theme {
		if ('id' in this.chosenTheme) {
			return this.chosenTheme;
		} else {
			const defaultTheme = THEMES[0];
			this.setChosenTheme(defaultTheme);
			return defaultTheme;
		}
	}

	setChosenTheme(theme: Theme): void {
		this.chosenTheme = theme;
		this.themeChange.emit(theme);
		this.setChosenHue(theme.hues[0]);
	}

	getChosenHue(): Hue {
		if ('id' in this.chosenHue) {
			return this.chosenHue;
		} else {
			const theme = this.getChosenTheme();
			const defaultHue = theme.hues[0];
			this.setChosenHue(defaultHue);
			return defaultHue;
		}
	}

	setChosenHue(hue: Hue): void {
		this.chosenHue = hue;
		this.hueChange.emit(hue);
	}

}
