import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';

@Injectable()
export class TextService {

  private splitText: string[][] = [];

  public text$ = new BehaviorSubject<string[][]>(this.splitText);

  public selectedWord: HTMLElement;
  public selectedParagraph: HTMLElement;

  public setText(text) {
    this.text$.next(
      text.split('\n')
      .map(t => t.split(' '))
    );
  }

  public setSelectedWord(element) {
    const selectedWordClassName = 'selected-word';
    if (this.selectedWord) {
      this.selectedWord.classList.remove(selectedWordClassName);
    }
    this.selectedWord = element;
    this.selectedWord.classList.add(selectedWordClassName);
  }

  public setSelectedParagraph(element: HTMLElement) {
    if (element.tagName === 'P') {
      this.selectedParagraph = element;
    }
  }

  public editWord(text) {
    this.selectedWord.innerText = text;
  }

  public toggleBold() {
    this.toggleClass('bold');
  }

  public toggleItalic() {
    this.toggleClass('italic');
  }

  public toggleUnderlined() {
    this.toggleClass('underlined');
  }

  public indentRight() {
    let value = parseInt(this.selectedParagraph.style.paddingLeft, 10);
    value = isNaN(value) ? 0 : value + 10;
    this.selectedParagraph.style.paddingLeft = `${value}px`;
  }

  public indentLeft() {
    let value = parseInt(this.selectedParagraph.style.paddingLeft, 10);
    value = isNaN(value) ? 0 : value;
    value = value <= 0 ? value : value - 10;
    this.selectedParagraph.style.paddingLeft = `${value}px`;
  }

  public setColor(color) {
    this.selectedWord.style.color = color;
  }

  public toggleClass(className) {
    this.selectedWord.classList.contains(className) ?
      this.selectedWord.classList.remove(className) :
      this.selectedWord.classList.add(className);
  }
}
