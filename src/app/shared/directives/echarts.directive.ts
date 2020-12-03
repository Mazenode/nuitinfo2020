
import { Directive, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ɵa as NgxEchartsDirective } from 'ngx-echarts';
import ResizeObserver from 'resize-observer-polyfill';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import ECharts = echarts.ECharts;

export interface LegendSettings {
  visible: boolean;
  orientation: 'horizontal' | 'vertical';
  horizontal: 'left' | 'center' | 'right';
  vertical: 'top' | 'center' | 'bottom';
}

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[echarts]' })
export class EchartsDirective extends NgxEchartsDirective implements OnDestroy, OnInit {
  private alive = true;
  private resizeObserver: ResizeObserver;
  private resize$ = new Subject<void>();
  private echartsIntance: ECharts;

  constructor(private element: ElementRef, ngZone: NgZone) {
    super(element, ngZone);
  }

  ngOnInit() {
    super.ngOnInit();

    this.autoResize = false;
    this.chartInit.pipe(filter(() => this.alive)).subscribe((chart: ECharts) => {
      this.echartsIntance = chart;
      this.createResizeObserver();
    });

    this.resize$
      .pipe(
        filter(() => this.alive),
        debounceTime(100),
      )
      .subscribe(() => this.checkResize());
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.alive = false;
    this.resizeObserver.disconnect();
    this.resizeObserver = null;
  }

  /**
   * Create resize observer to detect resize current container
   * We use this approach because of OnPush detection strategy
   * and not using `DoCheck` logic
   */
  private createResizeObserver() {
    if (this.resizeObserver) {
      return;
    }
    this.resizeObserver = new ResizeObserver(() => this.resize$.next());
    this.resizeObserver.observe(this.element.nativeElement);
  }

  private checkResize() {
    const clientWidth = this.element.nativeElement.clientWidth;
    if (this.echartsIntance && this.alive && clientWidth) {
      this.echartsIntance.resize();
    }
  }
}
