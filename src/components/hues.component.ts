import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/themes.service';
import { Theme } from '../types/theme';
import { Hue } from '../types/hue';

declare class Ps {
	static initialize(element: HTMLElement): void;
}

@Component({
	moduleId: module.id,
	selector: 'hues',
	templateUrl: './hues.component.html',
	styleUrls: ['./hues.component.css'],
})
export class HuesComponent implements OnInit {
	chosenHue: Hue;
	hueList: Hue[];

	constructor(private themeService: ThemeService) {
		themeService.themeChange.subscribe((theme: Theme) => {
			this.hueList = theme.hues;
			this.chooseHue(this.hueList[0]);
		});
	}

	ngOnInit() {
		this.hueList = this.themeService.getHueList();
		this.chooseHue(this.hueList[0]);
		const container = document.getElementById('hue-list');
		Ps.initialize(container);
	}

	chooseHue(hue: Hue): void {
		this.chosenHue = hue;
		this.themeService.setChosenHue(hue);
	}
}
