import { Component, VERSION } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nome: string;
  provaAGH: string;
  provaAC: string;
  provaAT: string;
  media: number;
  mediaFinal: number;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 10000,
      color: 'sucess',
    });
    toast.present();
  }

  async verNotas() {
    const alert = await this.alertController.create({
      header: 'Digite as Notas!!!',
      inputs: [
        {
          name: 'inputNome',
          type: 'text',
          placeholder: 'Digite seu nome',
        },

        {
          name: 'inputAGH',
          type: 'number',
          placeholder: 'provaAGH',
          max: 500,
          min: 0,
        },

        {
          name: 'inputAC',
          type: 'number',
          placeholder: 'provaAC',
          max: 500,
          min: 0,
        },

        {
          name: 'inputAT',
          type: 'number',
          placeholder: 'provaAT',
          max: 500,
          min: 0,
        },
      ],

      buttons: [
        {
          text: 'Ok',
          handler: (valor: any) => {
            this.nome = valor['inputNome'];
            this.provaAGH = valor['inputAGH'];
            this.provaAC = valor['inputAC'];
            this.provaAT = valor['inputAT'];
            this.media =
              parseFloat(this.provaAGH) +
              parseFloat(this.provaAC) * 2 +
              parseFloat(this.provaAT) * 7;

            this.mediaFinal = this.media / 10;

            this.exibirToast(
              `Nome: ${this.nome} <br> <br> Prova AGH: ${this.provaAGH} <br> Prova AT: ${this.provaAC} <br> Prova AC: ${this.provaAT} <br> <br> Media: ${this.mediaFinal}`
            );
          },
        },
      ],
    });
    await alert.present();
  }
}
