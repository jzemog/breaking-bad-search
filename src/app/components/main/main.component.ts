import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public characters: ICharacter[] = [];
  public charactersCopy: ICharacter[] = [];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.service.getCharacters().subscribe({
      next: (characters) => {
        this.characters = this.charactersCopy = characters;
      },
      error: (err) => console.log({ err }),
    });
  }

  public filter(e: any): void {
    const search: string = e.target.value;

    this.characters = this.charactersCopy.filter(({ name }: ICharacter) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
