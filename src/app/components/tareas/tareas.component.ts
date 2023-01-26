import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea: '';

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  agregarTarea() {
    //crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    };

    //agregar el objeto tarea al array
    this.listTareas.push(tarea);

    //reset form
    this.nombreTarea = '';
  }

  eliminarTarea(index: number) {
    this.listTareas.splice(index, 1);
    this.toastr.success('Tarea eliminada con éxito!', 'Eliminación completa');
  }

  actualizarTarea(index: number, tarea: Tarea) {
    this.listTareas[index].estado = !tarea.estado;
    this.toastr.success(
      'Tarea actualizada con éxito!',
      'Actualización completa'
    );
  }
}
