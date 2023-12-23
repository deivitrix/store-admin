import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InputDataService } from '../../services/input/input-data.service';
import { InstanceOptions, Modal, ModalInterface, ModalOptions } from 'flowbite';


@Component({
  selector: 'app-productdetalle',
  templateUrl: './productdetalle.component.html',
  styleUrls: ['./productdetalle.component.css']
})
export class ProductdetalleComponent implements OnInit {

  data:any;
  edit=false;
  add=true;
  text='';
  selectedFileName: string | null = null;
  img='';
  archivo!:File;
  imagbool=false;
  modal1!:ModalInterface;
  modal2!:ModalInterface;

  modalVisible = false;
  @ViewChild('myInput')
  myInputVariable!: ElementRef;




  constructor(private dataService:InputDataService){

  }

  ngOnInit(){
 this.informacion()
  }





  informacion(){
   const json=this.dataService.getInputData()
   if(json.tipo=='registro'){
    this.text='Add Product';
    this.img='../../../../assets/images/addproduct3.png';
   }
   else{
    this.text='Editar Producto'
   }

   const modalOptions: ModalOptions = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    closable: true,
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    },
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'crud-modal',
  override: true
};
  const elementHtml = document.getElementById('crud-modal');
  this.modal1= new Modal(elementHtml, modalOptions, instanceOptions);

  //modal2

  const modalOptions1: ModalOptions = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    closable: true,
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    },
};

// instance options object
const instanceOptions1: InstanceOptions = {
  id: 'popup-modal',
  override: true
};
  const elementHtml1 = document.getElementById('popup-modal');
  this.modal2= new Modal(elementHtml1, modalOptions1, instanceOptions1);



  }
  handleFileChange(event: any): void {
    const file = event.target.files[0];
    const inputFile: any = document.getElementById('file-7');
    this.reset_input();
    if (file) {

      if(file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/jpg"){
        let base64=this.toBase64(file);
        base64.then((img:any)=>{
          this.archivo=file;
          this.img=img;
          inputFile.value = '';
          this.imagbool=true;
        });
      }

      // this.selectedFileName = file.name;
      // Puedes agregar lógica adicional aquí según tus necesidades
    }
    }
    reset_input(){
      this.myInputVariable.nativeElement.value = "";
    }

    toBase64 = (file: File) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

    // modal_pop(){
    //   const modalToggleElement: HTMLElement = this.modalPopup.nativeElement;
    //   const currentToggleValue = modalToggleElement.getAttribute('data-modal-toggle');


    //   const newToggleValue = currentToggleValue === 'open' ? 'close' : 'open';
    //   modalToggleElement.setAttribute('data-modal-toggle', newToggleValue);
    // }








    toggleModal() {
      this.modalVisible = !this.modalVisible;
    }
}
