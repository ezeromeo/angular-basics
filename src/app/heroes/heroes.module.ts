import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

// las declaraciones son arreglos y dicen que componentes tienen este modulo
// los exports significan que coasas quiero hacer visible fuera del modulo.
// dentro de los imports van todos los modulos
// el common module es 
@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule    
    ]
})
export class HeroesModule {}