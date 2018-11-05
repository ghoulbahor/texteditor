import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { Subscription, Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit, OnDestroy {

  public subscription: Subscription;

  @ViewChild('textResult')
  public textResult: ElementRef;

  @ViewChild('textInput')
  public textInput: ElementRef;
  public text$;

  public selectWordForEdit(event: MouseEvent) {
    const element = event.srcElement;
    if (element.tagName === 'SPAN') {
      this.textService.setSelectedParagraph(event.srcElement.parentElement);
    }
    this.textService.setSelectedWord(event.srcElement);
  }

  public selectParagraphForEdit(event: MouseEvent) {
    this.textService.setSelectedParagraph(<HTMLElement>event.srcElement);
  }

  public saveText() {
    this.textService.setText(this.textInput.nativeElement.value);
  }

  constructor(private textService: TextService) {
    this.text$ = textService.text$;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
