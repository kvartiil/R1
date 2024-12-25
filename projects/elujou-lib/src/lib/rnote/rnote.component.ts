import { AfterViewInit, booleanAttribute, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'rnote',
  templateUrl: './rnote.component.html',
  styleUrls: [ './rnote.component.scss' ],
  imports: [ CommonModule ]
 
})
export class Rnote implements AfterViewInit {
  /**
   * @defaulValue `'info'`
   */
  @Input({required: false}) type: 'success' | 'error' | 'info' | 'warning' = 'info';

  /**
   * @defaulValue `true`
   */
  @Input({required: false, transform: booleanAttribute}) closable: boolean = true;

  /**
   * @defaulValue `'Close notification'`
   */
  @Input({required: false}) ariaCloseButtonMsg: string = 'Close notification';

  /**
   * @defaulValue `true`
   */
  @Input({required: false, transform: booleanAttribute}) autoFocusCloseButton: boolean = true;

  /**
   * @defaulValue `true`
   */
  @Input({required: false, transform: booleanAttribute}) scrollToCloseButtonOnFocus: boolean = true;

  /**
   * @defaulValue `true`
   */
  @Input({required: false, transform: booleanAttribute}) hasIcon: boolean = true;


  @Output() closeClick: EventEmitter<void> = new EventEmitter<void>();


  @ViewChild('notificationCloseButton') notificationCloseButtonRef: ElementRef | undefined;

  protected readonly iconIdentifierByNotificationType: { [key in string]: string } = {
    info: 'info',
    success: 'check',
    error: 'report',
    warning: 'warning-amber',
  };

  ngAfterViewInit(): void {
    if (this.closable && this.autoFocusCloseButton) {
      this.notificationCloseButtonRef?.nativeElement?.focus({preventScroll: !this.scrollToCloseButtonOnFocus});
    }
  }

  protected hasContent(ref: HTMLElement): boolean {
    // @ts-ignore
    for (let childNode of ref.childNodes) {
      if (childNode.nodeType !== Node.COMMENT_NODE) {
        return true;
      }
    }
    return false;
  }
}