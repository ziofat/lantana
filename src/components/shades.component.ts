import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/themes.service';
import { Hue } from '../types/hue';
import { Shade } from '../types/shade';

const { clipboard } = require('electron');

@Component({
	moduleId: module.id,
	selector: 'shades',
	templateUrl: './shades.component.html',
	styleUrls: ['./shades.component.css']
})

export class ShadesComponent implements OnInit {
	shadeList: Shade[];
	snackbar: mdui.Snackbar;

	constructor(private themeService: ThemeService) {
		themeService.hueChange.subscribe((hue: Hue) => {
			this.shadeList = hue.shades;
		});
	}

	ngOnInit() {
		this.shadeList = this.themeService.getShadeList();
	}

	copyColour(shade: Shade): void {
		clipboard.writeText(shade.colour);
		this.snackbar = mdui.snackbar({
			message: `Copyed!`,
			timeout: 1000,
		});
	}
}
