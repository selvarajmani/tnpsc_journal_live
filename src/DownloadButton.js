import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Sample data to be downloaded
    const data = {
      date: "2025-04-03",
      subject: "Mathematics",
      topicsCovered: "Algebra, Geometry",
      timeSpent: "2 hours",
      notes: "Reviewed basic algebra and geometry concepts.",
      confidenceLevel: 4,
      nextDayPlan: "Work on practice problems"
    };

    // Convert the data into JSON format
    const json = JSON.stringify(data, null, 2);

    // Create a Blob from the JSON data
    const blob = new Blob([json], { type: "application/json" });

    // Create a link to trigger the download
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "study_journal.json"; // Set the file name for download
    document.body.appendChild(a); // Append the link to the body
    a.click(); // Trigger the download
    document.body.removeChild(a); // Clean up after the download
  };

  return (
    <button onClick={handleDownload}>Download JSON</button>
  );
};

export default DownloadButton;
