import { Component } from '@angular/core';
import { AppService } from '../service/service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  private myName: string ="";
  private varAngka1: number=0;
  private varAngka2: number=0;
  private result: number=0;
  
  constructor(private myService: AppService){
  this.myName=this.myService.getName();
  }

  private tambah(){
    this.result=this.varAngka1+this.varAngka2;
  }
}
