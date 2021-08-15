/* eslint-disable no-unused-vars */
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { QUERY_ALL_USERS } from '../../api/queries';
import { useLazyQuery, useQuery } from '@apollo/client';

const TeamCard = (member) => {
  //get all users to be able to do dynamic search
  const [teamOptions, setTeamOptions] = useState([]); //sets the state in the search bar

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
      teamOptions.push(`${allUsers[i].designation} ${allUsers[i].firstName} ${allUsers[i].lastName}`);
    }
    //add as state variable
    setTeamOptions(teamOptions);
    console.log(teamOptions);
  };
  //render team members as a card
  member = member.member;
  return (
    <div className="pb-10 flex justify-center w-full">
      <div className="lg:text-center">
        <div className="align-items-center">
          <h3>Search for new team members!</h3>
          <Autocomplete
            style={{ width: 500 }}
            freeSolo
            autoComplete
            autoHighlight
            options={teamOptions}
            renderInput={(params) => <TextField {...params} onChange={getTeamOptions} variant="outlined" />}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
