/* eslint-disable no-unused-vars */
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';

import { ADD_CONTRIBUTOR } from '../../api/mutations';
import { QUERY_USER } from '../../api/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import Auth from '../../state/auth';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';

const ContributorSearch = (userId) => {
  //get all users to be able to do dynamic search
  const [teamOptions, setTeamOptions] = useState([]); //sets the state in the search bar
  const [teamMember, setTeamMember] = useState({}); //form submit value

  //catch event on input change
  useEffect((value) => {
    setTeamMember(value);
  }, []);

  const { reportId } = useParams(); //this can be used to add to the add/remove contributors mutations

  //run on initialisation first - need the team members from the current user
  const { data: initUser, loading } = useQuery(QUERY_USER);
  let user = initUser ? initUser.user : {};

  console.log(user);

  let teamMembers = [];
  if (initUser) {
    teamMembers = user.team;
  }

  console.log(teamMembers);

  for (let i = 0; i < teamMembers.length; i++) {
    teamOptions.push(`${teamMembers[i].designation} ${teamMembers[i].firstName} ${teamMembers[i].lastName}`);
  }

  console.log(teamOptions);

  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line prettier/prettier
  const [getOptions, { data }] = useLazyQuery(QUERY_USER)

  const getTeamOptions = () => {
    //query all users
    getOptions();

    // eslint-disable-next-line no-undef
    teamOptions.splice(0, teamOptions.length);
    setTeamOptions(teamOptions);

    if (data) {
      teamMembers = data.user.team;
    }
    console.log(teamMembers);
    //loop through to create array of first-last names and keys as IDs
    // eslint-disable-next-line no-undef
    for (let i = 0; i < teamMembers.length; i++) {
      teamOptions.push(teamMembers[i]);
      //teamOptions.push(`${allUsers[i].designation} ${allUsers[i].firstName} ${allUsers[i].lastName}`);
    }
    //add as state variable
    setTeamOptions(teamOptions);
    console.log(teamOptions);
  };

  const [formState, setFormState] = useState({
    newTeamMember: {},
  });

  const [addContributor] = useMutation(ADD_CONTRIBUTOR);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(teamMember._id);
    let personId = teamMember._id;
    const mutationResponse = await addContributor({
      variables: { reportId: reportId, personId: personId },
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form
      id="newMemberForm"
      className="login w-full bg-white justify-center rounded-lg shadow-md align-items-center"
      onSubmit={handleFormSubmit}
    >
      <div className="pb-4 flex justify-center w-full">
        <div className="lg:text-center">
          <div className="align-items-center">
            <p className="w-full text-center">Search for contributors from your team!</p>
            <Autocomplete
              style={{ width: 500 }}
              freeSolo
              autoComplete
              autoHighlight
              options={teamOptions}
              getOptionLabel={(option) => `${option.designation} ${option.firstName} ${option.lastName}`}
              onChange={(getTeamOptions, value) => setTeamMember(value)}
              renderInput={(params) => (
                <TextField {...params} onChange={getTeamOptions} variant="outlined" placeholder="Search…" />
              )}
            />
          </div>
        </div>
      </div>
      <div className="pb-10 flex justify-center w-full">
        <div className="lg:text-center">
          <button
            type="submit"
            className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContributorSearch;
