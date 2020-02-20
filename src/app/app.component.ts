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
    startStopText = 'Start';
    numFocus = 0;

    focusLength = 25;
    shortBreakLength = 5;
    longBreakLength = 20;

    currentLength = this.focusLength; // the selector based on the current segment (focus, sb, lb)
    seconds = 0;
    time = '' + this.currentLength + ':00';
    timeLeft: number = this.focusLength * 60;
    interval;

    focusSelected() {
        this.focus = true;
        this.shortBreak = false;
        this.longBreak = false;
        this.currentLength = this.focusLength;
        this.resetPressed();
    }
    shortBreakSelected() {
        this.focus = false;
        this.shortBreak = true;
        this.longBreak = false;
        this.currentLength = this.shortBreakLength;
        this.time = '' + this.currentLength + ':00';
        this.resetPressed();
    }
    longBreakSelected() {
        this.focus = false;
        this.shortBreak = false;
        this.longBreak = true;
        this.currentLength = this.longBreakLength;
        this.time = '' + this.currentLength + ':00';
        this.resetPressed();
    }
    startStopPressed() {
        if (this.startStopText === 'Start') {
            this.startStopText = 'Stop';
            this.startTimer();
        } else {
            this.startStopText = 'Start';
            this.pauseTimer();
        }
    }
    resetPressed() {
        this.timeLeft = this.currentLength * 60;
        clearInterval(this.interval);
        this.startStopText = 'Start';
        this.time = '' + this.currentLength + ':00';
    }

    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
                this.time = '' + (Math.trunc(this.timeLeft / 60)) + ':';
                const s =  Math.trunc(this.timeLeft % 60);
                if (s < 10) {
                    this.time += '0' + s;
                } else {
                    this.time += s;
                }
            } else {
                this.numFocus += 1;
                this.startBreak();
            }
        }, 1000);
    }

    pauseTimer() {
        clearInterval(this.interval);
    }

    startBreak() {
        if (this.numFocus % 4 === 0) {
            this.longBreakSelected();
        }
    }

}
