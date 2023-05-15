import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from './component/quote/quote.component';
import { WalletComponent } from './component/wallet/wallet.component';


const routes: Routes = [
  { path: 'wallet', component: WalletComponent },
  { path: 'quote', component: QuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
