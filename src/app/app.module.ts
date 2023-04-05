import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  // bootstrap: [AppComponent], // keep it for dev
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const element = createCustomElement(AppComponent, {
      injector,
    });
    customElements.define('element-widget', element);
  }

  ngDoBootstrap() {}
}
