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

  updateTaskStatus(id: number, event: Event): void {
      const selectElement = event.target as HTMLSelectElement;
      const newStatus = selectElement.value;

      this.taskService.updateTaskStatus(id, newStatus).subscribe({
        next: (updatedTask) => {
        
          const index = this.tasks.findIndex(task => task.id === id);
          if (index !== -1) {
            this.tasks[index].status = updatedTask.status;
          }
          console.log('Status atualizado com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao atualizar status:', err);
          alert('Não foi possível atualizar o status da tarefa.');
          
          const taskOriginal = this.tasks.find(task => task.id === id);
          if (taskOriginal) {
            selectElement.value = taskOriginal.status;
          }
        }
      });
    }

  deleteTask(id: number): void {
      if (!confirm('Tem a certeza de que deseja deletar esta tarefa?')) {
        return;
      }
      
      this.taskService.deleteTask(id).subscribe({
        next: () => {
          console.log('Tarefa deletada com sucesso!');

          this.tasks = this.tasks.filter(task => task.id !== id);
        },
        error: (err) => {
          console.error('Erro ao deletar tarefa:', err);
          alert('Não foi possível deletar a tarefa.');
        }
      });
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }
}