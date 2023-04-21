function createDate(date: Date) {
  return `${date.getUTCDate().toString().padStart(2, "0")}.${(
    date.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getUTCFullYear()}`;
}

export default createDate;
