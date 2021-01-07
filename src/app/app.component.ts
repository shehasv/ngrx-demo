import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, upvote, downvote, storedata } from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-test';

  count: Observable<number>
  storedValue: number

  constructor(private store: Store<{ count: number }>) {
    this.count = store.select('count');
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }

  upVote(){
    this.store.dispatch(upvote())
  }

  downVote(){
    this.store.dispatch(downvote())
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  storeData(){
    
    this.store.subscribe((res)=>{
      this.storedValue = res.count;

    }).unsubscribe()
    
  }

  


}
