import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  };

  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string): void {
    this.config.panelClass = ['notification-success'];
    this.snackBar.open(message, '', this.config);
  }

  error(message: string): void {
    this.config.panelClass = ['notification-error'];
    this.snackBar.open(message, '', this.config);
  }

  warning(message: string): void {
    this.config.panelClass = ['notification-warning'];
    this.snackBar.open(message, '', this.config);
  }

  message(message: string): void {
    this.config.panelClass = ['notification-message'];
    this.snackBar.open(message, '', this.config);
  }
}
