import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'lantana',
	template: `
		<theme-selector></theme-selector>
		<div class="flex-column">
			<hues></hues>
			<shades class="mdui-shadow-10 flex-item"></shades>
		</div>
	`
})

export class AppComponent {
	title: string = 'Lantana';
}
