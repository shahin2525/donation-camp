import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/utilis";
import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const [storedDonation, setStoredDonation] = useState([]);
  const ids = getStoredDonation();
  const donations = useLoaderData();

  const matchData = donations.filter((donation) => ids.includes(donation.id));

  console.log(matchData);
  // const appliedJob = jobs.filter((job) => storedJobIds.includes(job.id));
  // useEffect(() => {
  //   setStoredDonation(matchData);
  // }, []);
  return (
    <div>
      {/* {savedDonation.map((donation) => (
        <DonationCard key={donation.id} donation={donation}></DonationCard>
      ))} */}
    </div>
  );
};

export default Donation;
