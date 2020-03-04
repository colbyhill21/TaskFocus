import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})

export class SettingsModalComponent implements OnInit {
  focusValue = 25;
  shortBreakValue = 5;
  longBreakValue = 20;

  constructor(public dialogRef: MatDialogRef<SettingsModalComponent>) { }
  
  changeFocusLengthSlider(slider) {
    this.focusValue = slider.value;
  }

  changeShortBreakLengthSlider(slider) {
    this.shortBreakValue = slider.value;
  }

  changeLongBreakLengthSlider(slider) {
    this.longBreakValue = slider.value;
  }

  ngOnInit() {
  }
  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    alert('You have logged out.');
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

}
