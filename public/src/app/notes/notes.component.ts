import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

 

  ngOnInit() {
    this.getNotes();
  }
  
  notes=[]
  
  note = { text: "" }


  onSubmit(){
    
    this._noteService.postnote(this.note)
    .then( notes => { this.notes.push(notes) })
    .catch( err => { console.log(err + "submit");})
    this.note = { text: "" }
   
  }
   constructor(public _noteService: NoteService){
    
  }

  getNotes(){
    this._noteService.retrieveTasks()
    .then( notes => { this.notes = notes })
    .catch( err => { console.log(err); + "get" })
  }


}
