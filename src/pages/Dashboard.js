import React, { useState } from 'react';
import { QUERY_USER, QUERY_USER_REPORTS } from '../api/queries';
import { useQuery } from '@apollo/client';
import BioRtf from '../components/Dashboard/bioRTF';
import ReportsCards from '../components/Dashboard/ReportsCard';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../api/mutations';
import { GET_USER_REPORTS } from '../api/queries';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { profileId } = useParams();

  const { data, loading } = useQuery(QUERY_USER, {
    // pass URL parameter
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  const { data: response } = useQuery(QUERY_USER_REPORTS);
  let reports = [];

  if (response) {
    reports = response.userReports;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hello {data.user.firstName} {data.user.lastName}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <BioRtf />
      </div>

      <div className="flex justify-center items-end h-24">
        <div className="lg:text-center">
          <p className="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">Your reports are presented below</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* map here */}
          {console.log(reports)}
          {reports.map((report) => {
            return <ReportsCards report={report} />;
          })}
        </div>
      </div>

      <div className="flex justify-center h-24">
        <div className="lg:text-center">
          <Link to="/new">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <span>Add a new Report</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
