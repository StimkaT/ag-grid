import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() columnDefs: any = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price'}
  ];
  @Input() rowData: any = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  @Input() overlayNoRowsTemplate: any;

  gridApi: any;
  gridColumnApi: any;

  gridOptions = {
    domLayout: 'autoWidth',  // Подстройка под высоту, если нужно
  };

  onRowClicked(event: any): void {
    const isCheckbox = event.event.target.closest('.ag-selection-checkbox');
    if (!isCheckbox) {
      console.log('Row clicked', event.data);
    }
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // Автоматическая подстройка ширины колонок
    this.autoSizeColumns();
  }

  autoSizeColumns(): void {
    const allColumnIds: string[] = [];
    this.gridColumnApi.getAllColumns().forEach((column: any) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }
}
