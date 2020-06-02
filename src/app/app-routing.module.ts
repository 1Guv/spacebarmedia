import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { ClaimComponent } from './claim/claim.component';


const routes: Routes = [
  { path: "", component: ClaimComponent },
  { path: 'success/:amount', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
