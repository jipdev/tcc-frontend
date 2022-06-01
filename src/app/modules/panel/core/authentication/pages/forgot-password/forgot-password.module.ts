import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NotificationService } from "../../../../shared/services/notification.service";
import { SendButtonModule } from "../../components/send-button/send-button.module";
import { AuthService } from "../../services/auth.service";
import { ForgotPasswordComponent } from "./forgot-password.component";
import { ForgotPasswordRouting } from "./forgot-password.routing";

@NgModule({
  declarations: [
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ForgotPasswordRouting,
    MatSnackBarModule,
    MatIconModule,
    SendButtonModule
  ],
  providers: [AuthService, NotificationService]
})
export class ForgotPasswordModule {

}
