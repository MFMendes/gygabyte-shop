import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-compra',
  templateUrl: './stepper-compra.component.html',
  styleUrls: ['./stepper-compra.component.scss']
})
export class StepperCompraComponent implements OnInit {

  public isLinear = false;
  public firstForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(){
    this.firstForm = this.formBuilder.group({

    });
  }
}