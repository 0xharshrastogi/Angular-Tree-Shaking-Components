import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnChanges, OnDestroy {
  @Input() active = false;

  @Output() close = new EventEmitter();

  @ViewChild('modalBox', { static: true })
  private modelElement!: ElementRef<HTMLElement>;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  removeFromBody() {
    document.body.removeChild(this.elementRef.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const canRemoveElement =
      changes['active'] &&
      !changes['active'].isFirstChange &&
      changes['active'].currentValue === false;

    if (canRemoveElement) {
      this.elementRef.nativeElement.remove();
    }
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }
}
