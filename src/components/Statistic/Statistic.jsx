import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { getStoredDonation } from "../../utility/utilis";
import { useEffect, useState } from "react";

const Statistic = () => {
  const donations = useLoaderData();
  const [donated, setDonated] = useState([]);
  const COLORS = ["#FFBB28", "#FF8042"];
  const donationsLength = donations.length;
  const donatedLength = donated.length;
  console.log(typeof donationsLength, typeof donatedLength);
  useEffect(() => {
    const donatedData = getStoredDonation();
    setDonated(donatedData);
  }, []);

  const data = [
    { name: "Total-Donation-Sector", value: donationsLength },
    { name: "Total-Donated", value: donatedLength },
  ];
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#82ca9d"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistic;
