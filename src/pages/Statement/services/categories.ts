export interface CategoriesProps {
  category: string;
  color: string;
  id: number;
}

export interface MovimentsProps {
  description: string;
  change: number;
  moment: string;
  gain: boolean;
  loss: boolean;
  category_id: number;
  category: string;
}

export const Categories: CategoriesProps[] = [
  {
    category: 'House',
    color: 'red',
    id: 1
  },
  {
    category: 'Car',
    color: 'blue',
    id: 2
  },
  {
    category: 'Food',
    color: 'lilac',
    id: 3
  },
  {
    category: 'Education',
    color: 'jade',
    id: 4
  }
];

export const Moviments: MovimentsProps[] = [];

const month = new Date().getMonth(); // Get the current month

for (let i = 0; i < 30; i++) {
  const randomDay = Math.floor(Math.random() * 30) + 1; // Generates a random day between 1 and 30
  const randomMoviment = Math.floor(Math.random() * 100); // Generates a random value between 0 and 99
  const randomGain = Math.random() < 0.5; // Generates a random boolean (true or false) for gain
  const randomLoss = Math.random() < 0.5; // Generates a random boolean (true or false) for loss

  // Create a new date by setting the day and month
  const randomDate = new Date(new Date().getFullYear(), month, randomDay).toISOString();

  // Get the day of the week as a string (e.g., "Mon")
  const dayOfWeek = new Date(randomDate).toLocaleDateString('en-US', { weekday: 'short' });

  // Format the day with leading zeros (e.g., "01")
  const formattedDay = String(randomDay).padStart(2, '0');

  Moviments.push({
    description: `Transaction ${i + 1}`,
    change: randomMoviment,
    moment: `${dayOfWeek} ${formattedDay}`,
    category_id: (i % 5) + 1,
    gain: randomGain,
    loss: randomLoss,
    category: `Category ${i + 1}`
  });
}

// export const Moviments = [
//   {
//     description: 'Gas Station',
//     change: 75,
//     moment: new Date().toISOString(),
//     category_id: 1
//   }
// ];
