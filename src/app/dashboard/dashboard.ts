import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { Task, TaskService } from '../services/task'; 
import { CommonModule } from '@angular/common'; 
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})

export class Dashboard implements OnInit {

  tasks: Task[] = [];

  showNewTaskForm = false;

  newTaskForm: FormGroup;

  constructor(
    private router: Router,
    private taskService: TaskService
  ) {
    this.newTaskForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => { this.tasks = data; },
      error: (err) => { console.error('Erro ao buscar tarefas:', err); }
    });
  }

  toggleNewTaskForm() {
    this.showNewTaskForm = !this.showNewTaskForm;
  }

  onNewTaskSubmit() {
  if (this.newTaskForm.invalid) {
    return;
  }

  this.taskService.createTask(this.newTaskForm.value).subscribe({
    next: (newTask) => {
      console.log('Tarefa criada com sucesso!', newTask);
      // Adiciona a nova tarefa no início da lista local
      this.tasks.unshift(newTask);
      // Reseta o formulário
      this.newTaskForm.reset();
      // Esconde o formulário
      this.showNewTaskForm = false;
    },
    error: (err) => {
      console.error('Erro ao criar tarefa:', err);
      alert('Não foi possível criar a tarefa. Tente novamente.');
    }
  });
}

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }
}