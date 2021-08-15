import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../state/auth';
import { ADD_REPORT } from '../api/mutations';

function CreateNew(props) {
  const [formState, setFormState] = useState({
    title: '',
    owner: '',
    contributors: [''],
    content: '',
    state: '',
  });
  const [addReport] = useMutation(ADD_REPORT);

  const { profileId, firstName, lastName } = useParams();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addReport({
      variables: { ...formState },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/dashboard">← Go back to your dashboard</Link>

      <div class="text-center mt-24">
        <div class="flex items-center justify-center">
          <svg fill="none" viewBox="0 0 24 24" class="w-12 h-12 text-blue-500" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
        </div>
        <h2 class="text-4xl tracking-tight">Create a new report</h2>
      </div>

      <div class="flex justify-center my-2 mx-4 md:mx-0">
        <form
          id="createReportForm"
          class=" login w-full max-w-xl bg-white rounded-lg shadow-md p-6"
          onSubmit={handleFormSubmit}
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Password">
                Report Title
              </label>
              <input
                id="title"
                name="title"
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                onChange={handleChange}
              ></input>
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Password">
                Report 'owner' (admin - default is you)
              </label>
              <input
                id="owner"
                name="owner"
                value={`${firstName} ${lastName}`}
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                onChange={handleChange}
              ></input>
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Password">
                Bio
              </label>
              <input
                id="bio"
                name="bio"
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-24 px-3 leading-tight focus:outline-none"
                type="text"
                onChange={handleChange}
              ></input>
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Password">
                Email address
              </label>
              <input
                id="email"
                name="email"
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                onChange={handleChange}
              ></input>
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Password">
                Password
              </label>
              <input
                id="password"
                name="password"
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                onChange={handleChange}
              ></input>
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNew;
