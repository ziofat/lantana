import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './components/app.component';
import { ThemeSelectorComponent } from './components/themeSelector.component';
import { HuesComponent } from './components/hues.component';
import { ShadesComponent} from './components/shades.component';
// import { ColourComponent} from './components/colour.component';

import { ThemeService } from './services/themes.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
	],
	declarations: [
		AppComponent,
		ThemeSelectorComponent,
		HuesComponent,
		ShadesComponent
	],
	bootstrap: [ AppComponent ],
	providers: [ ThemeService ],
})

export class AppModule { }
