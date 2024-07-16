import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/utilis";
import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const [storedDonation, setStoredDonation] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  console.log(dataLength);
  const donations = useLoaderData();

  useEffect(() => {
    if (donations.length > 0) {
      const ids = getStoredDonation();
      const matchData = donations.filter((donation) =>
        ids.includes(donation.id)
      );
      setStoredDonation(matchData);
    }
  }, [donations]);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        {storedDonation.slice(0, dataLength).map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
      <div
        className={
          dataLength === storedDonation.length || storedDonation.length < 5
            ? "hidden"
            : "text-center"
        }
      >
        <button
          className="btn bg-red-400 text-white"
          onClick={() => setDataLength(storedDonation.length)}
        >
          See all
        </button>
      </div>
    </div>
  );
};

export default Donation;
