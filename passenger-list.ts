import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ListserviceProvider } from '../../providers/listservice/listservice';


@Component({
  selector: 'page-passenger-list',
  templateUrl: 'passenger-list.html',
})
export class PassengerListPage implements OnInit, OnDestroy 
{

  public dataList: any = [];

  constructor(private alertCtrl: AlertController, private msgProvider: ListserviceProvider)  
  {
  
  }


  ngOnInit() 
  {
    console.log('PassengerListPage launch', this.dataList.length);
    let url: string = "http://localhost:8080/routes/api.php/test?transform=1";
    this.autoload(url); 
    
  }


  ngOnDestroy() 
  {
	  console.log('home page destroy');
  }


  private autoload(url: string) 
  {
    this.msgProvider.loadData(url).then((data) => 
    {
      this.dataList = data.test;
    }).catch(error =>
      {
      console.log('error: ngOnInit %%%');
    });
  }


  presentAlert(user) {
   // console.log('home page launch', this.dataList.length);
    
    let url: string = "http://localhost:8080/routes/api.php/test?transform=1";
    let data = this.dataList;
    let alert = this.alertCtrl.create({
      
      title: 'UpdatePassenger',
      inputs: [
        {
          name: 'Name',
          placeholder: 'Name'
        },
        {
          name: 'LastName',
          placeholder: 'Lastname',
          type: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {            
            console.log('Cancel clicked');
          }       
        },
        {
          text: 'Update Passenger',
          handler: data => {    
          this.msgProvider.Updatedata(url,user).then((data) => 
          {
            this.dataList = data.test;
          }) .catch(error =>
            {
            console.log('error: 101');
          });
        }
      }
    ]
  });
      alert.present();
  }
}
