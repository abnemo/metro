import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ICategory } from '../../../../../../shared/interfaces/category.interface';
import { ICategoryType } from '../../../../../../shared/interfaces/category-type.interface';
import { ChartType } from 'ng-chartist';
import * as Chartist from 'chartist';

@Component({
  selector: 'categories-by-category-type',
  templateUrl: 'categories-by-category-type.component.html'
})
export class CategoriesByCategoryTypeComponent implements OnInit, OnChanges {

  @Input() categories: ICategory[];
  @Input() categoryTypes: ICategoryType[];

  public type: ChartType = 'Pie';
  public data: Promise<Chartist.IChartistData>;

  constructor() {
  }

  ngOnInit() {
    // ToDo: generate Graph
    // console.log(this.categories);
    // console.log(this.categoryTypes);
  }

  ngOnChanges() {
    /* this.data = new Promise((resolve: any): void => {

      const labels = [];
      const series = [];

      if (this.categoryTypes && this.categories) {
        for (let i = 0; i < this.categoryTypes.length; i++) {

          let categoryCounter: number = 0;
          for (let j = 0; j < this.categories.length; j++) {
            if (this.categories[j].assignedCategoryType['id'] === this.categoryTypes[i].id) {
              categoryCounter++;
            }
          }

          labels.push(this.categoryTypes[i].title);
          series.push(categoryCounter);

        }
      }

      const chartData: Chartist.IChartistData = {
        series: [series],
        labels: labels
      };
      console.log(chartData);
      resolve(chartData);

    }); */
  }

}
