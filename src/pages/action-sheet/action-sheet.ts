import {Component} from '@angular/core';
import {AlertController, ActionSheetController} from 'ionic-angular';

@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hey Buddy',
      subTitle: 'You\'re good enough, you\'re smart enough, and doggone it, people like you.',
      buttons: ['Thanks!']
    });
    alert.present();
  }

  showConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Nothing better to do?',
      message: 'Are you sure this isn\'t a massive waste of time?',
      buttons: [
        {
          text:'Sure is',
          role: 'cancel',
          handler: () => {
            console.log("This one is smart");
          }

        },
        {
          text: 'Great use of time!',
          handler: () => {
            console.log("what a moron");
          }
        }
      ]
    });
    alert.present();
  }

  showPrompt() {
     let alert = this.alertCtrl.create({
       title: 'What is the best insult for me?',
       inputs: [
         {
           name: 'insult'
         },
         {
           name: 'secretName',
           placeholder: 'It\'s a secret',
           type: 'password'
         }
       ],
       buttons: [
         {
           text: 'Fuck This!',
           role: 'cancel',
           handler: data => {
             console.log('what a nice person');
           }
         },
         {
           text: 'Fuck YOU!',
           handler: data => {
             if (data.insult) {
               console.log('you called me ' + data.insult + '!!!');
             }

             if (data.secretName) {
               console.log('and you secretly called me ' + data.secretName + ', you asshole!');
             }
           }
         }
       ]
     });

    alert.present();
  }

  showActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What am I?',
      buttons: [
        {
          text: 'You\'re a dick',
          handler: () => {
            console.log('Dick clicked');
          }
        }, {
          text: 'You\'re a cock',
          handler: () => {
            console.log('Cock clicked');
          }
        }, {
          text: 'You\'re a prick',
          handler: () => {
            console.log('Prick clicked');
          }
        },
        {
          text: 'You just like saying "penis"',
          role: 'cancel',
          handler: () => {
            console.log('done with this bullshit');
            console.log('done with this bullshit');
          }
        }
      ]

    });
    actionSheet.present();
  }

}
