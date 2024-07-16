const getStoredDonation = () => {
  const storedDonation = localStorage.getItem("donation");
  if (storedDonation) {
    return JSON.parse(storedDonation);
  }
  return [];
};

const savedDonation = (id) => {
  const storedDonation = getStoredDonation();
  const exists = storedDonation.find((donation) => donation.id === id);
  if (!exists) {
    storedDonation.push(id);
    localStorage.setItem("donation", JSON.stringify(storedDonation));
  }
};

export { getStoredDonation, savedDonation };
