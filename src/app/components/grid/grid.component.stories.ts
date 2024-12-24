import {BrowserModule} from '@angular/platform-browser';
import {GridComponent} from './grid.component';
import {AgGridModule} from 'ag-grid-angular';

import '!style-loader!css-loader!sass-loader!./grid.component.scss';

export default {
  title: 'Grid'
};

const story = () => ({
  moduleMetadata: {
    declarations: [GridComponent],
    imports: [
      BrowserModule,
      AgGridModule.withComponents([]),
    ]
  },
  template: `
    <div style="height: 1000px; width: 1300px;">
      <app-grid
       [rowData]="rowData"
       [columnDefs]="columnDefs"
       [overlayNoRowsTemplate]="overlayNoRowsTemplate"
      ></app-grid>
    </div>
  `,
  props: {},
  styles: [],
});


export const StandartGrid = () => ({
  ...story(),
  props: {

    columnDefs: [
      { field: 'make',  autoHeight: true,     minWidth: 150},
      { field: 'model',  autoHeight: true},
      { field: 'price',  autoHeight: true}
    ],

    rowData: [
      { make: 'Toyota111', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ]
  }
});

export const Checkbox = () => ({
  ...story(),
  props: {

    columnDefs: [
      {
        headerCheckboxSelection: true,
        checkboxSelection: true,
        width: 50,
        suppressSizeToFit: true
      },
      { field: 'make' },
      { field: 'model' },
      { field: 'price'}
    ],

    rowData: [
      { make: 'Toyota111', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ]
  }
});

export const SortColumn = () => ({
  ...story(),
  props: {

    columnDefs: [
      { headerName: 'Make', field: 'make', sortable: true, unSortIcon: true },
      { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
      { headerName: 'Price', field: 'price', sortable: true, unSortIcon: true }
    ],


    rowData: [
      { make: 'Toyota111', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ]
  }
});

export const FilterColumn = () => ({
  ...story(),
  props: {

    columnDefs: [
      { headerName: 'Make', field: 'make', sortable: true, unSortIcon: true, filter: 'agTextColumnFilter' },
      { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
      { headerName: 'Price', field: 'price', sortable: true, unSortIcon: true }
    ],


    rowData: [
      { make: 'Toyota111', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ]
  }
});

export const WorkExample = () => ({
  ...story(),
  props: {

    columnDefs: [
      { headerName: '№', field: 'pp_number', cellClass: 'second-header', maxWidth: 30 },
      { headerName: 'Sensor Name', field: 'sensor_gen_name', cellClass: 'second-header', sortable: true, unSortIcon: true, maxWidth: 122 },
      { headerName: 'Category', field: 'category_simple', cellClass: 'second-header', sortable: true, unSortIcon: true, maxWidth: 96},
      { headerName: 'Type', field: 'type', cellClass: 'second-header', sortable: true, unSortIcon: true},
      {
        headerName: 'Location', headerClass: 'second-header',
        children: [
          { headerName: 'Road/Crossroad', field: 'road_crossroad', cellClass: 'second-header', sortable: true, unSortIcon: true},
          { headerName: 'Picket/House Number', field: 'picket_house_number', cellClass: 'second-header', sortable: true, unSortIcon: true }
        ]
      },
      { headerName: 'Index', field: 'index', cellClass: 'second-header', sortable: true, unSortIcon: true },
      {
        headerName: 'Equipment Statuses',
        children: [
          { headerName: 'Connected To', field: 'connected_to', cellClass: 'second-header'},
          { headerName: 'Errors', field: 'errors', cellClass: 'second-header'},
          { headerName: 'Analysis', field: 'analysis', cellClass: 'second-header'}
        ]
      },
      { headerName: 'Number of Lanes', field: 'number_of_lanes', cellClass: 'second-header'},
      {
        headerName: 'Calibration Setup',
        children: [
          { headerName: 'From KM 0', field: 'from_km_0', cellClass: 'second-header'},
          { headerName: 'To KM 0', field: 'to_km_0', cellClass: 'second-header'}
        ]
      },
      { headerName: 'Changes', field: 'changes', cellClass: 'second-header'},
      {
        headerName: 'Actions',
        field: 'actions',
        cellRenderer: (params: any) => {
          return `
        <img class="sett-img" src="./../assets/edit.png" alt="Sett" onclick="buttonClick(${params.data}, 'edit')" />
        <img class="delete-img" src="./../assets/delete.png" alt="delete" onclick="buttonClick(${params.data}, 'remove')" />
      `;
        },
        flex: 1
      }
    ],

    rowData: [
      {
        pp_number: 1,
        sensor_gen_name: 'Sensor 1',
        category_simple: '-',
        type: 'Type 1',
        road_crossroad: 'Crossroad 1',
        picket_house_number: 'House 1',
        index: 'Index 1',
        connected_to: '-',
        errors: '-',
        analysis: '-',
        number_of_lanes: '-',
        from_km_0: '-',
        to_km_0: '-',
        changes: '-',
        actions: '-'
      },
      {
        pp_number: 2,
        sensor_gen_name: 'Sensor 2',
        category_simple: '-',
        type: 'Type 2',
        road_crossroad: 'Crossroad 2',
        picket_house_number: 'House 2',
        index: 'Index 2',
        connected_to: '-',
        errors: '-',
        analysis: '-',
        number_of_lanes: '-',
        from_km_0: '-',
        to_km_0: '-',
        changes: '-',
        actions: '-'
      }
    ]
  }
});

export const WorkExample2 = () => ({
  ...story(),
  props: {

    columnDefs: [
      { headerName: '№', field: 'pp_number', width: 80, cellClass: 'text-center' },
      { headerName: 'Sensor Name', field: 'sensor_gen_name', cellClass: 'text-center' },
      { headerName: 'Category', field: 'category_simple', cellClass: 'text-center' },
      { headerName: 'Type', field: 'type', cellClass: 'text-center' },
      {
        headerName: 'Location',
        children: [
          { headerName: 'Road/Crossroad', field: 'road_crossroad', cellClass: 'text-center' },
          { headerName: 'Picket/House Number', field: 'picket_house_number', cellClass: 'text-center' }
        ]
      },
      { headerName: 'Index', field: 'index', cellClass: 'text-center' },
      {
        headerName: 'Equipment Statuses',
        children: [
          { headerName: 'Connected To', field: 'connected_to', cellClass: 'text-center' },
          { headerName: 'Errors', field: 'errors', cellClass: 'text-center' },
          { headerName: 'Analysis', field: 'analysis', cellClass: 'text-center' }
        ]
      },
      { headerName: 'Number of Lanes', field: 'number_of_lanes', cellClass: 'text-center' },
      {
        headerName: 'Calibration Setup',
        children: [
          { headerName: 'From KM 0', field: 'from_km_0', cellClass: 'text-center from_km_0' },
          { headerName: 'To KM 0', field: 'to_km_0', cellClass: 'text-center' }
        ]
      },
      { headerName: 'Changes', field: 'changes', cellClass: 'text-center' },
      {
        headerName: 'Actions',
        field: 'actions',
        cellRenderer: (params: any) => {
          return `<img class="sett-img" src="./../assets/edit.png" alt="Sett" onClick="buttonClick(${params.data}, 'edit')" />
              <img class="delete-img" src="./../assets/delete.png" alt="delete" onClick="buttonClick(${params.data}, 'remove')" />`;
        }
      }
    ],


    rowData: [],
    overlayNoRowsTemplate: '<div class="custom-no-rows">Нет данных</div>' // Шаблон для пустых данных
  }
});

