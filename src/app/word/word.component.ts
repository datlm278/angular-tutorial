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

  // nameComponent = 'Minh Dat'

  en : string = 'Hello';
  vn: string = 'Xin chào';

}
