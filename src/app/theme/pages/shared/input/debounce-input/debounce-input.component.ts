import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output
} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'debounce-input',
  template: '<input type="text" class="form-control" [placeholder]="placeholder" [(ngModel)]="inputValue">'
})
export class DebounceInputComponent implements OnDestroy {
  @Input() placeholder: string;
  @Input() delay: number = 300;
  @Output() value: EventEmitter<string> = new EventEmitter(false);

  public inputValue: string;
  private eventSubscription: ISubscription;

  constructor(private elementRef: ElementRef) {
    const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();

    this.eventSubscription = eventStream.subscribe(input => this.value.emit(input));
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
