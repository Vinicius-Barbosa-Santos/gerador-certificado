import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [CommonModule, SecondaryButton, RouterLink],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {}
