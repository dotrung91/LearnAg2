import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListNameComponent } from './list-name/list-name.component';
import { SettingTabComponent } from './setting-tab/setting-tab.component';
import { ControlComponent } from './setting-tab/control/control.component';
import { ResultComponent } from './setting-tab/result/result.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipeOneComponent } from './pipes/pipe-one/pipe-one.component';
import { CustomPipeOneComponent } from './pipes/custom-pipe-one/custom-pipe-one.component';
import { CapitalPipe } from './pipes/capital.pipe';
import { OddOrEvenPipe } from './pipes/ListPipes/odd-or-even.pipe';
import { SoftPipePipe } from './pipes/ListPipes/soft-pipe.pipe';
import { SummaryPipePipe } from './pipes/ListPipes/summary-pipe.pipe';
import { CategoryPipePipe } from './pipes/ListPipes/category-pipe.pipe';
import { ToolCategoryComponent } from './tool-category/tool-category.component';
import { ShowComponent } from './tool-category/show/show.component';
import { ControlCategoryComponent } from './tool-category/control-category/control-category.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListNameComponent,
    SettingTabComponent,
    ControlComponent,
    ResultComponent,
    PipesComponent,
    PipeOneComponent,
    CustomPipeOneComponent,
    CapitalPipe,
    OddOrEvenPipe,
    SoftPipePipe,
    SummaryPipePipe,
    CategoryPipePipe,
    ToolCategoryComponent,
    ShowComponent,
    ControlCategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
