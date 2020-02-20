import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'TaskFocus';
    focus = true;
    shortBreak = false;
    longBreak = false;
    startStopText = "Start";
    time = "25:00";

    focusSelected() {
        this.focus = true;
        this.shortBreak = false;
        this.longBreak = false;
    }
    shortBreakSelected() {
        this.focus = false;
        this.shortBreak = true;
        this.longBreak = false;
    }
    longBreakSelected() {
        this.focus = false;
        this.shortBreak = false;
        this.longBreak = true;
        console.log("Hit");
    }
    startStopPressed() {
        if(this.startStopText == "Start") {
            this.startStopText = "Stop"
        }
        else {
            this.startStopText = "Start"
        }
    }
    resetPressed() {
        console.log("will reset");
    }

}
