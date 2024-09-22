import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';

const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'];

const SALES_CHANNEL_DATA = [
  { name: 'Website', value: 45600 },
  { name: 'Mobile App', value: 38200 },
  { name: 'Marketplace', value: 29800 },
  { name: 'Social Media', value: 18700 },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="rounded-xl border border-gray-700 bg-gray-800 bg-opacity-50 p-6 shadow-lg backdrop-blur-md lg:col-span-2"
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="mb-4 text-lg font-medium text-gray-100">
        Sales by Channel
      </h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31,41,55,0.8)',
                borderColor: '#4b5563',
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Legend />
            <Bar dataKey={'value'} fill="#8884d8">
              {SALES_CHANNEL_DATA.map((entery, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
