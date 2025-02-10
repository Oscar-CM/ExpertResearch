"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TaskCard = ({ title, description, major, uploadTime, requiredDelivery }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold text-[#3b82f6]">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-gray-500 mt-2">Major: {major}</p>
      <p className="text-gray-400 mt-2">Uploaded: {uploadTime}</p>
      <p className="text-gray-400 mt-2">Delivery by: {requiredDelivery}</p>
      <Link
        href="#"
        className="bg-[#3b82f6] text-white py-2 px-6 rounded-md mt-4 inline-block text-center hover:bg-[#23c55e] transition duration-300"
      >
        Bid for this Task
      </Link>
    </div>
  );
};

const TasksSection = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Generate tasks with dynamic dates (this runs on the client side after the initial render)
    const generateTasks = () => {
      return Array.from({ length: 20 }, (_, index) => ({
        title: `Task Title ${index + 1}`,
        description: `This is the description for task number ${index + 1}. Here you would provide the details. we have a nursing research that needs to be submited in two days`,
        major: 'Writing', // Can be dynamic as per your application
        uploadTime: new Date(new Date().getTime() + Math.random() * (3 * 24 * 60 * 60 * 1000)).toLocaleDateString(),
        requiredDelivery: new Date(new Date().getTime() + Math.random() * (7 * 24 * 60 * 60 * 1000)).toLocaleDateString(),
      }));
    };

    // Set tasks after they are generated
    setTasks(generateTasks());
  }, []); // Empty dependency array to run only on mount

  const tasksPerPage = 5;
  const totalTasks = tasks.length;
  const totalPages = Math.ceil(totalTasks / tasksPerPage);
  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;
  const currentTasks = tasks.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-[#3b82f6] mb-8 text-center">Available Tasks</h2>

      <div>
        {currentTasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
            major={task.major}
            uploadTime={task.uploadTime}
            requiredDelivery={task.requiredDelivery}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-4">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="bg-[#3b82f6] text-white py-2 px-4 rounded-md hover:bg-[#23c55e] transition duration-300"
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="bg-[#3b82f6] text-white py-2 px-4 rounded-md hover:bg-[#23c55e] transition duration-300"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TasksSection;
