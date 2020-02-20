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

}
