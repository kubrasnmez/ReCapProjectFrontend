import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  @Input() car : Car;
  carImages : CarImage[];
  baseUrl = environment.baseURL;
  imageDataToUpload : any;
  imageToDelete : CarImage;
  imageToUpdate : CarImage;
  carImageAddForm : FormGroup;
  carImageUpdateForm : FormGroup;


  constructor(
    private imageService : CarImageService,
    private toastrService : ToastrService,
    private router : Router,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.getImagesByCarID();
    this.createImageAddForm();
    this.createImageUpdateForm();
  }
  createImageAddForm():void{
    this.carImageAddForm = this.formBuilder.group({
      image : ['',Validators.required],
    });
  }
  createImageUpdateForm():void{
    this.carImageUpdateForm = this.formBuilder.group({
      image : ['',Validators.required],
    });
  }
  getImagesByCarID(): void {
    this.imageService.getCarImages(this.car.carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file.size > 10 * Math.pow(1024, 2)) {
      this.toastrService.error(
        `Sectiginiz dosya 10MB'tan daha buyuk olamaz: ${(
          Math.round((file.size / Math.pow(1024, 2)) * 100) / 100
        ).toFixed(2)}MB`,
        'Hata'
      );
    } else {
      this.imageDataToUpload = file;
    }
  }
  addImage(): void {
    if (this.carImageAddForm.valid) {
      const formData: FormData = new FormData();
      formData.append('image', this.imageDataToUpload);
      formData.append('carID', this.car.carId.toString());
      this.imageService.addImage(formData).subscribe(
        () => {
          this.toastrService.success('Gorsel eklendi', 'Basarili');
          this.reload();
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
  updateImage(event: any): void {
    this.onFileSelected(event);
    if (this.carImageUpdateForm.valid && this.imageDataToUpload != null) {
      const formData: FormData = new FormData();
      formData.append('image', this.imageDataToUpload);
      Object.keys(this.imageToUpdate).forEach((value, index) => {
        formData.append(value, Object.values(this.imageToUpdate)[index]);
      });

      this.imageService.updateImage(formData).subscribe(
        () => {
          this.toastrService.success('Gorsel guncellendi', 'Basarili');
          this.reload();
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
  deleteImage(image: CarImage): void {
    this.imageService.deleteImage(image).subscribe(() => {
      this.toastrService.success('Gorsel silindi', 'Basarili');
      document.getElementById('deleteImage').click();
      this.imageToDelete = void 0;
      this.reload();
    });
  }
  setImageToDelete(image: CarImage): void {
    this.imageToDelete = image;
  }

  setImageToUpdate(image: CarImage): void {
    this.imageToUpdate = image;
  }
  reload() {
    this.router
      .navigateByUrl('', {
        skipLocationChange: true,
      })
      .then(() => {
        this.router.navigate(['/carUpdate/' + this.car.carId]);
      });
  }
}
