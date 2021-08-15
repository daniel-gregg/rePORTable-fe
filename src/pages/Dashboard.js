import { QUERY_USER, QUERY_USER_REPORTS, QUERY_ALL_USERS } from '../api/queries';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import BioRtf from '../components/Dashboard/bioRTF';
import TeamCard from '../components/Dashboard/TeamCard';
import ReportsCards from '../components/Dashboard/ReportsCard';
import TeamSearch from '../components/Dashboard/TeamSearch';

import '../components/Dashboard/biostyles.scss';

//import { useMutation } from '@apollo/client';
//import { UPDATE_PROFILE } from '../api/mutations';

// Import the `useParams()` hook
//import { useParams } from 'react-router-dom';

const Dashboard = (client) => {
  //get user details first - to fill bio, etc. fields
  const { data, loading } = useQuery(QUERY_USER);
  const profile = data ? data.user : {};

  const team = profile.team;
  console.log(team);

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

      <div className="flex justify-center w-full">
        <p className="mt-4 max-w-4xl text-xl font-bold text-gray-500 lg:mx-auto">Your Bio</p>
      </div>

      <BioRtf profile={profile} />

      <div className="flex pt-10 w-full">
        <p className="mt-4 max-w-4xl text-xl text-gray-500 font-bold lg:mx-auto">Your Team</p>
      </div>
      <div className="flex justify-center w-full">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* add conditional rendering here */}
          {team.map((member) => {
            return <TeamCard member={member} key={member._id} />;
          })}
        </div>
      </div>

      <TeamSearch />

      <div className="flex justify-center pt-20 w-full">
        <p className="mt-4 max-w-4xl text-xl font-bold text-gray-500 lg:mx-auto">Your Reports</p>
      </div>
      <div className="flex justify-center pt-10 w-full">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* add conditional rendering here */}
          {reports.map((report) => {
            return <ReportsCards report={report} key={report._id} />;
          })}
        </div>
      </div>

      <div className="flex justify-center h-24">
        <div className="lg:text-center">
          <Link to="/create">
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
