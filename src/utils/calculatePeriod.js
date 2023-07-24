// calculatePeriod.js

const calculatePeriod = (startDate, endDate) => {
  if (!startDate || !endDate) return "";

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Obliczamy różnicę w dniach między datami
  const diffInDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));

  // Formatujemy wynik w formacie "d MMMM yyyy"
  const formattedStartDate = start.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedEndDate = end.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return `${formattedStartDate} - ${formattedEndDate} (${diffInDays} dni)`;
};

export default calculatePeriod;
