import { Component, OnInit } from '@angular/core';
import { catchError, startWith } from 'rxjs';
import { QuoteService } from 'src/app/service/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: any;
  errorMessage = '';
  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quote = this.quoteService.getQuote().subscribe(
      {
        next: (data) => { this.quote = data },
        error: (error) => {
          this.errorMessage = error.message || error.toString();
        }
      }

    );
  }

  // getQuote() {
  //   this.quote = this.quoteService.getQuote().pipe(
  //     catchError((err: any) =>
  //       this.errorMessage = err.message || err.toString())
  //   );
  // }

}
