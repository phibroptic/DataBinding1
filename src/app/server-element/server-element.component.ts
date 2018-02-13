import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewEncapsulation
} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None - Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
   }

  ngDoCheck() {
    console.log('doCheck Called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called');
  }

}
