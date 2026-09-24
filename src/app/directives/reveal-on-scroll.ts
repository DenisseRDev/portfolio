import { AfterViewInit, Directive, ElementRef, inject, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScroll implements AfterViewInit, OnDestroy{

  private element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  @Input()
  set appRevealOnScroll(value: string | undefined) {
    this.element.nativeElement.dataset.reveal = value || 'up';
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
