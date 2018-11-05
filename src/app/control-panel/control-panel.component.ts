import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  constructor(private textService: TextService) {
  }

  @ViewChild('colorPicker')
  public colorPicker: ElementRef;

  public editSelectedWord(event) {
    if (this.textService.selectedWord === undefined) {
      return;
    }
    const value: string = event.target.value;
    this.textService.selectedWord.innerText = value;
  }

  public toggleBold() {
    this.textService.toggleBold();
  }

  public toggleItalic() {
    this.textService.toggleItalic();
  }

  public toggleUnderlined() {
    this.textService.toggleUnderlined();
  }

  public indentRight() {
    this.textService.indentRight();
  }

  public indentLeft() {
    this.textService.indentLeft();
  }

  public setColor() {
    this.textService.setColor(this.colorPicker.nativeElement.value);
  }

  ngOnInit() {
  }
}
