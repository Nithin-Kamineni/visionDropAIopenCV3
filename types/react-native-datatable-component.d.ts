// types/react-native-datatable-component.d.ts
declare module 'react-native-datatable-component' {
    import { Component } from 'react';
    import { FlatListProps } from 'react-native';
    
    interface DataTableProps extends FlatListProps<any> {
      data: any[];
      colNames: string[];
      colSettings?: Array<{
        name: string;
        type?: 'string' | 'number' | 'boolean' | 'date';
        width?: number;
        align?: 'left' | 'center' | 'right';
      }>;
      noOfPages?: number;
      backgroundColor?: string;
      headerLabelStyle?: object;
      headerContainerStyle?: object;
      rowLabelStyle?: object;
      rowContainerStyle?: object;
    }
  
    export class DataTable extends Component<DataTableProps> {}
  
    export const COL_TYPES: {
      STRING: 'string';
      NUMBER: 'number';
      INT: 'number';
      BOOLEAN: 'boolean';
      DATE: 'date';
    };
  }
  