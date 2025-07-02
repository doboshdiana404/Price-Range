export interface Props {
  value: number;
  onChange: (valur: number) => void;
  min?: number;
  max?: number;
}
