import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;
  thamso1: number;
  thamso2: number;
  pheptinh = '+';
  onFirstChange(value) {
    this.thamso1 = Number(value);
  }
  onSecondChange(value) {
    this.thamso2 = Number(value);
  }
  onSelectChange(value) {
    this.pheptinh = value;
  }
  calculate() {
    switch (this.pheptinh) {
      case 'cong':
        this.result = this.thamso1 + this.thamso2;
        break;
      case 'tru':
        this.result = this.thamso1 - this.thamso2;
        break;
      case 'nhan':
        this.result = this.thamso1 * this.thamso2;
        break;
      case 'chia':
        this.result = this.thamso1 / this.thamso2;
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
