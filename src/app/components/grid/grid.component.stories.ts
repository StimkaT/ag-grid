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
    <div style="height: 500px; width: 1300px;">
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
      { headerName: 'Make', field: 'make', sortable: true },
      { headerName: 'Model', field: 'model', sortable: true },
      { headerName: 'Price', field: 'price', sortable: true }
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
      { headerName: 'Make', field: 'make', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Model', field: 'model', sortable: true },
      { headerName: 'Price', field: 'price', sortable: true }
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
      { headerName: '№', field: 'pp_number', width: 80, cellClass: 'text-center' },
      { headerName: 'Sensor Name', field: 'sensor_gen_name', cellClass: 'text-center' },
      { headerName: 'Category', field: 'category_simple', cellClass: 'text-center' },
      { headerName: 'Type', field: 'type', cellClass: 'text-center' },
      {
        headerName: 'Location', headerClass: 'text-center',
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
        type: 'Type2',
        road_crossroad: 'Crossroad 2',
        picket_house_number: 'House 2',
        index: 'Index 1',
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

