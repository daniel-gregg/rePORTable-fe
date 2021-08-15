import { useMutation } from '@apollo/client';

import { Link } from 'react-router-dom';

const TeamCard = (member) => {
  //render team members as a card
  member = member.member;
  return (
    <Link to={`/document/${member._id}`}>
      <div className="rounded overflow-hidden shadow-lg p-6">
        <p className="font-bold text-blue-900 text-center font-extrabold text-2xl">{`${member.designation} ${member.firstName} 
        ${member.lastName}`}</p>
        <p className="text-gray-500 text-sm text-center">{member.bio}</p>
      </div>
    </Link>
  );
};

export default TeamCard;
