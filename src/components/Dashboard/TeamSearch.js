/* eslint-disable no-unused-vars */
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';

import { UPDATE_TEAM } from '../../api/mutations';
import { QUERY_ALL_USERS } from '../../api/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import Auth from '../../state/auth';

const TeamSearch = (user) => {
  //get all users to be able to do dynamic search
  const [teamOptions, setTeamOptions] = useState([]); //sets the state in the search bar
  const [teamMember, setTeamMember] = useState({}); //form submit value

  //catch event on input change
  useEffect((value) => {
    setTeamMember(value);
  }, []);

  //run on initialisation first
  const { data: initUsers } = useQuery(QUERY_ALL_USERS);
  let allUsers = [];
  if (initUsers) {
    allUsers = initUsers;
  }

  for (let i = 0; i < allUsers.length; i++) {
    teamOptions.push(`${allUsers[i].designation} ${allUsers[i].firstName} ${allUsers[i].lastName}`);
  }

  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line prettier/prettier
  const [getOptions, { data: users }] = useLazyQuery(QUERY_ALL_USERS); //sets the query call to 'getOptions'

  const getTeamOptions = () => {
    //query all users
    getOptions();

    // eslint-disable-next-line no-undef
    teamOptions.splice(0, teamOptions.length);
    setTeamOptions(teamOptions);

    if (users) {
      allUsers = users.allUsers;
    }

    console.log(allUsers);
    //loop through to create array of first-last names and keys as IDs
    // eslint-disable-next-line no-undef
    for (let i = 0; i < allUsers.length; i++) {
      teamOptions.push(allUsers[i]);
      //teamOptions.push(`${allUsers[i].designation} ${allUsers[i].firstName} ${allUsers[i].lastName}`);
    }
    //add as state variable
    setTeamOptions(teamOptions);
    console.log(teamOptions);
  };

  const [formState, setFormState] = useState({
    newTeamMember: {},
  });

  const [updateTeam] = useMutation(UPDATE_TEAM);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(teamMember._id);
    let memberId = teamMember._id;
    const mutationResponse = await updateTeam({
      variables: { memberId },
    });
  };

  return (
    <form
      id="newMemberForm"
      className="login w-full bg-white justify-center rounded-lg shadow-md align-items-center"
      onSubmit={handleFormSubmit}
    >
      <div className="pb-4 flex justify-center w-full">
        <div className="lg:text-center">
          <div className="align-items-center">
            <h3>Search for new team members!</h3>
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
            class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default TeamSearch;
