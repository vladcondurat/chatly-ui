function formatActiveNow(timeString: string): string {
  if (!timeString) {
    return '';
  }

  const now = new Date();
  const time = new Date(timeString);

  const localTime = new Date(time.getTime() - now.getTimezoneOffset() * 60000);

  const diffInSeconds = Math.floor((now.getTime() - localTime.getTime()) / 1000);

  if (diffInSeconds < 300) {
    return `Active now`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 52) {
    return `${diffInWeeks}w ago`;
  }

  const diffInYears = Math.floor(diffInWeeks / 52);
  return `${diffInYears}y ago`;
}

export default formatActiveNow;
