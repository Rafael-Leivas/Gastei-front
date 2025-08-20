export const formatterValue = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatterDate = (date: string) => {
  const formatterDate = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
  });
  return formatterDate.format(new Date(date));
};
