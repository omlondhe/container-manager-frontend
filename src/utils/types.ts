export class DataType {
  name: string = "";
  cost: string = "";
  weight: string = "";
}

export class CalculationTypes {
  itemsUtilized: number = 0;
  itemsRemaining: number = 0;
  totalItems: number = 0;
  weightsUtilized: number = 0;
  weightsRemaining: number = 0;
  totalWeights: number = 0;
  costUtilized: number = 0;
  costRemaining: number = 0;
  totalCost: number = 0;
  namesToTake: string[] = [];
  costsToTake: number[] = [];
  weightsToTake: number[] = [];
  namesNotToTake: string[] = [];
  costsNotToTake: number[] = [];
  weightsNotToTake: number[] = [];
  requestedWeightCapacity: number = 0;
  requestedData: DataType[] = [];
  dataToTake: DataType[] = [];
  dataNotToTake: DataType[] = [];
  by: string = "";
  timestamp: string = new Date().toLocaleString();
}
