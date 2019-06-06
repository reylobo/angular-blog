import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
  	this.dialog.open(FormComponent);
  }
}
