export function rupees(value: number): string {
  return `₹${value.toLocaleString('en-IN')}`;
}
