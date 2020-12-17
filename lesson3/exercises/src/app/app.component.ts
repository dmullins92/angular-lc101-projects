import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  upDisable = false;
  downDisable = false;
  leftDisable = false;
  rightDisable = false;
  

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.message = 'Shuttle in flight.';
       rocketImage.style.bottom = '10px';
    }
  }
  handleLanding(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.')
    this.color = 'green';
    this.height = 0;
    this.message = 'The shuttle has landed.';
    rocketImage.style.bottom = '0px';
  }
  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort?');
    if(result) {
      this.color = 'red';
      this.height = 0;
      this.message = 'Mission aborted.';
      rocketImage.style.bottom = '0px';
    }
  }
  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      }
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      }
    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      }
      console.log(this.height, this.width)
  }
  showWarning(rocketImage) {
    if (parseInt(rocketImage.style.bottom) > 310 
    || parseInt(rocketImage.style.bottom) <= 10
    || parseInt(rocketImage.style.left) < 10
    || parseInt(rocketImage.style.left) > 440) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }
  moveDisable() {
    if (this.height === 330000) {
      this.upDisable = true;
    } else this.upDisable = false;

    if (this.height === -10000) {
      this.downDisable = true;
    } else this.downDisable = false;

    if (this.width === 470000) {
      this.rightDisable = true;
    } else this.rightDisable = false;

    if (this.width === -20000) {
      this.leftDisable = true;
    } else this.leftDisable = false;
  }
}
