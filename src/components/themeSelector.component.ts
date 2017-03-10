import { Component, OnInit} from '@angular/core';
import { ThemeService } from '../services/themes.service';
import { Theme } from '../types/theme';
import { Hue } from '../types/hue';

@Component({
	moduleId: module.id,
	selector: 'theme-selector',
	templateUrl: './themeSelector.component.html',
})

export class ThemeSelectorComponent implements OnInit {
	menu: mdui.Menu;
	themeList: Theme[];
	chosenTheme: Theme;
	chosenHue: Hue;

	constructor(private themeService: ThemeService) {
		themeService.hueChange.subscribe((hue: Hue) => {
			this.chosenHue = hue;
		});
	}

	ngOnInit() {
		this.menu = new mdui.Menu('#theme-selector', '#theme-options', {
			position: 'bottom',
			align: 'center',
			covered: false,
			gutter: 0,
		});

		this.themeList = this.themeService.getThemeList();
		this.chooseTheme(this.themeList[0]);
	}
	chooseTheme(theme: Theme): void {
		this.chosenTheme = theme;
		this.themeService.setChosenTheme(theme);
	}
}
