import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  en : string = 'Hello';
  vn: string = 'Xin chào';
  imgUrl = 'https://i.picsum.photos/id/460/200/200.jpg?hmac=hL3I5G2p0p6vDGPyV9hergug-KipbUJVxqnnGIEBXg4';
  hidden = false;

  hiddenTag() {
    this.hidden = !this.hidden;
  }
}
