import moment from 'moment';

export function fromNow(date: Date): string {
  return moment(date).fromNow();
}
