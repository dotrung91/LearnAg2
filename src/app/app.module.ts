import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
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
import { ListHeroComponent } from './list-hero/list-hero.component';
import { ListHeroControlComponent } from './list-hero/list-hero-control/list-hero-control.component';
import { ListHeroShowComponent } from './list-hero/list-hero-show/list-hero-show.component';
import { CheckflyPipe } from './pipes/ListPipes/checkfly.pipe';
import { SttPipePipe } from './pipes/ListPipes/stt-pipe.pipe';
import { ExpandCollapseComponent } from './expand-collapse/expand-collapse.component';
import { HightLightComponent } from './detective/hight-light/hight-light.component';
import { HightLightDirective } from './detective/hight-light/hight-light.directive';
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
    ListHeroComponent,
    ListHeroControlComponent,
    ListHeroShowComponent,
    CheckflyPipe,
    SttPipePipe,
    ExpandCollapseComponent,
    HightLightComponent,
    HightLightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
