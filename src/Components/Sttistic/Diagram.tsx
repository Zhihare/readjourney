import { ChartOptions } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface Props {
  percentRead: number; // Процент прочитанных страниц
}

const BookProgressChart: React.FC<Props> = ({ percentRead }) => {
  const data = {
    datasets: [
      {
        data: [percentRead, 100 - percentRead], // Процент прочитанных и оставшихся страниц
        backgroundColor: ['#FF6384', '#E7E7E7'], // Цвета для прочитанных и оставшихся страниц
      },
    ],
  };

 const options: ChartOptions<'doughnut'> = {
    cutout: 75, // Процент обрезания для создания круговой формы
  };

  return <Doughnut data={data} options={options} />;
};

export default BookProgressChart;
