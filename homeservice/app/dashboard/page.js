"use client";

import "./dashboard.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Large Dummy Data with House Services
const generateLargeData = (count) =>
  [...Array(count)].map((_, i) => ({
    name: `Service ${i + 1}`,
    value1: Math.floor(Math.random() * 1000),
    value2: Math.floor(Math.random() * 800),
    value3: Math.floor(Math.random() * 500),
  }));

const largeData = generateLargeData(50);

const pieData = [
  { name: "Cleaning", value: 400 },
  { name: "Plumbing", value: 300 },
  { name: "Electrical", value: 300 },
  { name: "Landscaping", value: 200 },
];

const scatterData1 = [...Array(20)].map(() => ({
  x: Math.random() * 1000,
  y: Math.random() * 1000,
}));

const scatterData2 = [...Array(20)].map(() => ({
  x: Math.random() * 1000,
  y: Math.random() * 1000,
}));

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar with User and Company Details */}
      <aside className="sidebar">
        <h2>Dashboard</h2>

        <div className="user-info">
          <img src="https://th.bing.com/th/id/R.1871862d87bb8037d953317fb4497189?rik=MBf1NyuchSQUtQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile.png&ehk=Ouu2uMvvMPnkP1bdIY2BTAzbwhRoG9p03NUzbwGLhlg%3d&risl=&pid=ImgRaw&r=0" alt="User  Avatar" className="user-avatar" />
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
          <p className="status">Verified Account ✅</p>
        </div>

        <div className="company-details">
          <h3>Company Overview</h3>
          <p><strong>Company Name:</strong> Home Services Inc.</p>
          <p><strong>Established:</strong> 2015</p>
          <p><strong>Location:</strong> 123 Main St, Springfield</p>
          <p><strong>Contact:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@homeservices.com</p>
        </div>

        <div className="company-stats">
          <h3>Financial Overview</h3>
          <p><strong>Revenue:</strong> $5.2M</p>
          <p><strong>Profit:</strong> $1.8M</p>
          <p><strong>Loss:</strong> $500K</p>
          <p><strong>Expenses:</strong> $2.9M</p>

          <div className="progress">
            <p>Profit Margin</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="progress">
            <p>Expense Ratio</p>
            <div className="progress-bar">
              <div className="progress-fill red" style={{ width: "40%" }}></div>
            </div>
          </div>
        </div>

      </aside>

      {/* Main Dashboard Content */}
      <main className="main-content">
        <header>
          <h2>Data Insights</h2>
        </header>

        <section className="charts">
          {/* Line Chart */}
          <div className="chart">
            <h3>Service Growth</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={largeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value1" stroke="#1e90ff" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="chart">
            <h3>Revenue by Service</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={largeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value2" fill="#ff4757" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="chart">
            <h3>Market Share by Service</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={60} fill="#2ed573" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart */}
          <div className="chart">
            <h3>Profit Trend</h3>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={largeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area dataKey="value3" fill="#ffcc00" stroke="#ffcc00" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Scatter Chart */}
          <div className="chart">
            <h3>Service Comparison</h3>
            <ResponsiveContainer width="100%" height={200}>
              <ScatterChart>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="Metric X" />
                <YAxis type="number" dataKey="y" name="Metric Y" />
                <Tooltip />
                <Scatter name="Service A" data={scatterData1} fill="#8884d8" />
                <Scatter name="Service B" data={scatterData2} fill="#82ca9d" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Radar Chart */}
          <div className="chart">
            <h3>Performance Metrics</h3>
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart data={largeData.slice(0, 6)}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar dataKey="value1" stroke="#1e90ff" fill="#1e90ff" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Composed Chart */}
          <div className="chart">
            <h3>Sales & Expenses Overview</h3>
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart data={largeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value2" fill="#ff4757" />
                <Line type="monotone" dataKey="value3" stroke="#1e90ff" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;