import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotelistComponent } from './notes/notelist/notelist.component';
import { NoteService } from './note.service'
@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
