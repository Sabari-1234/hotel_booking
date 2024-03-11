import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LodingGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    // Simulate loading time
    return of(true).pipe(
      delay(3000), // Change this delay to match your actual loading time
      tap(() => {
        // After loading time, navigate to the desired route
        this.router.navigate(['/main']); // Replace '/main' with your main route
      })
    );
  }
}
