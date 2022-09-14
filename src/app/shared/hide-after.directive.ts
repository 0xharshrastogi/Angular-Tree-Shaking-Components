import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

const SELECTOR = 'appHideAfter';

class HideAfterContext {
  appHideAfter = 0;
  counter = 0;
}

@Directive({
  selector: `[${SELECTOR}]`,
})
export class HideAfterDirective implements OnInit, OnDestroy {
  private _timeoutId?: number;

  private context = new HideAfterContext();

  private _delayInMilliSeconds: number = 0;

  @Input(SELECTOR) set delayInMS(value: number | null) {
    this._delayInMilliSeconds = value ?? 0;
    this.context.appHideAfter = this.context.counter =
      this._delayInMilliSeconds ?? 0;
  }

  @Input(`${SELECTOR}Then`) placeholder: TemplateRef<HideAfterContext> | null =
    null;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<HideAfterContext>
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    const intervalId = setInterval(() => {
      this.context.counter--;
    }, 1000);

    this._timeoutId = <number>(<unknown>setTimeout(() => {
      this.viewContainerRef.clear();
      clearInterval(intervalId);

      if (this.placeholder)
        this.viewContainerRef.createEmbeddedView(
          this.placeholder,
          this.context
        );
    }, this._delayInMilliSeconds));
  }

  ngOnDestroy(): void {
    if (this._timeoutId) clearTimeout(this._timeoutId);
  }

  static ngTemplateContextGuard(
    directive: HideAfterDirective,
    ctx: unknown
  ): ctx is HideAfterContext {
    return true;
  }
}
