// Define types for the form data
export interface InvestigationForm {
  loincCode: string;
  cptCode: string;
  testName: string;
  testCategory: string;
  shortName: string;
  shortCode: string;
  department: string;
  subDepartment: string;
  roleType: string;
  reportType: string;
  sampleType: string;
  sampleQuantity: number | string;
  sampleQuantityUnit: string;
  sampleTemperature: number | string;
  sampleTemperatureUnit: string;
  testMethod: string;
  instrumentType: string;
  description: string;
  sacCode: string;
  order: number | string;
  derivedTest: string;
  externalTestId: string;
  selectedColors: string[];
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface ColorOption {
    name: string;
    hex: string;
}










//export interface InvestigationForm {
//   loincCode: string;
//   cptCode: string;
//   testName: string;
//   testCategory: string;
//   shortName: string;
//   shortCode: string;
//   department: string;
//   subDepartment: string;
//   roleType: string;
//   reportType: string;
//   sampleType: string;
//   sampleQuantity: number | string;
//   sampleQuantityUnit: string;
//   sampleTemperature: number | string;
//   sampleTemperatureUnit: string;
//   testMethod: string;
//   instrumentType: string;
//   description: string;
//   sacCode: string;
//   order: number | string;
//   derivedTest: string;
//   externalTestId: string;
//   selectedColors: string[];
// }

// export interface SelectOption {
//   value: string;
//   label: string;
// }

// export interface ColorOption {
//     name: string;
//     hex: string;
// }