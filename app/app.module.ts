import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductDetailComponent }  from './products/product-detail.component';
import { StarComponent }  from './shared/star.component';
import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'products', component: ProductListComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    ProductFilterPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
