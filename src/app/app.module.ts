import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletComponent } from './component/wallet/wallet.component';
import { ExponentPipe } from './pipes/exponent.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { BannerComponent } from './component/banner/banner.component';
import { QuoteComponent } from './component/quote/quote.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    ExponentPipe,
    SortPipe,
    BannerComponent,
    QuoteComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
