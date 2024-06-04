export interface IAlertOptions {
  icon: 'success' | 'error' | 'warning' | 'info' | 'question';
  title: string;
  description?: string;
  /** should be more than 2000 */
  duration?: number;
}
