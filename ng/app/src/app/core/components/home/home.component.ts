import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/generated';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private demoService: DemoService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.demoService.demoDemoCallGet().subscribe(data => {
      this.snackBar.open(data.Message, 'Close', {
        duration: 2000,
      });
    });
  }

}
